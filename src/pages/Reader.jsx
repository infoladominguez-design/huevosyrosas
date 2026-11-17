import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { getEbook, ebookChapterIndex } from '../data/ebooks.js'
import { fetchEbookChapter } from '../lib/ebooks.js'
import { useStored } from '../lib/store.js'
import { bookCheckout, MEMBERSHIP } from '../data/hotmart.js'
import NotFound from './NotFound.jsx'

// Lector tipo Kindle: páginas que se pasan (no scroll), subrayados de
// colores con notas, y ajustes de letra y fondo.

const FONT_SIZES = [15, 17, 19, 21, 24, 27, 31]
const FONTS = {
  literata: { label: 'Literata', css: "'Literata', Georgia, serif" },
  garamond: { label: 'Garamond', css: "'Cormorant Garamond', Georgia, serif" },
  sans: { label: 'Sans', css: "'DM Sans', system-ui, sans-serif" },
}
const THEMES = {
  blanco: { label: 'Blanco' },
  sepia: { label: 'Sepia' },
  verde: { label: 'Verde' },
  negro: { label: 'Negro' },
}
const COLORS = ['amarillo', 'rosa', 'azul', 'verde']
const WPM = 230

const uid = () => Math.random().toString(36).slice(2, 10)

// ---------------------------------------------------------------------------
// Texto con subrayados
// ---------------------------------------------------------------------------

function HighlightedText({ text, ranges }) {
  if (!ranges.length) return text
  const sorted = [...ranges].sort((a, b) => a.s - b.s)
  const out = []
  let cursor = 0
  for (const r of sorted) {
    const s = Math.max(r.s, cursor)
    const e = Math.min(r.e, text.length)
    if (s >= e) continue
    if (s > cursor) out.push(text.slice(cursor, s))
    out.push(
      <mark key={r.id + s} data-hl={r.id} className={`kr-hl kr-hl--${r.color}` + (r.note ? ' kr-hl--note' : '')}>
        {text.slice(s, e)}
      </mark>,
    )
    cursor = e
  }
  if (cursor < text.length) out.push(text.slice(cursor))
  return out
}

function Block({ block, index, ranges }) {
  const content = <HighlightedText text={block.value || ''} ranges={ranges} />
  switch (block.type) {
    case 'h':
      return <h2 className="kr-h" data-b={index}>{content}</h2>
    case 'quote':
      return <blockquote className="kr-quote" data-b={index}>{content}</blockquote>
    case 'hr':
      return <div className="kr-break" aria-hidden="true">⁂</div>
    case 'p':
    default:
      return <p className="kr-p" data-b={index}>{content}</p>
  }
}

// Convierte la selección del navegador en segmentos {b, s, e} por bloque.
function selectionToSegments(flowEl) {
  const sel = window.getSelection()
  if (!sel || sel.isCollapsed || !sel.rangeCount) return null
  const range = sel.getRangeAt(0)
  if (!flowEl.contains(range.commonAncestorContainer)) return null
  const segments = []
  flowEl.querySelectorAll('[data-b]').forEach((el) => {
    if (!range.intersectsNode(el)) return
    const len = el.textContent.length
    let s = 0
    let e = len
    if (el.contains(range.startContainer)) {
      const r = document.createRange()
      r.setStart(el, 0)
      r.setEnd(range.startContainer, range.startOffset)
      s = r.toString().length
    }
    if (el.contains(range.endContainer)) {
      const r = document.createRange()
      r.setStart(el, 0)
      r.setEnd(range.endContainer, range.endOffset)
      e = r.toString().length
    }
    // Ajusta a palabras completas (como Kindle)
    const t = el.textContent
    const isWord = (ch) => /[\p{L}\p{N}]/u.test(ch || '')
    while (s > 0 && isWord(t[s - 1]) && isWord(t[s])) s--
    while (e < len && isWord(t[e]) && isWord(t[e - 1])) e++
    while (s < e && /\s/.test(t[s])) s++
    while (e > s && /\s/.test(t[e - 1])) e--
    if (e > s) segments.push({ b: Number(el.dataset.b), s, e })
  })
  if (!segments.length) return null
  const blocks = segments.map((sg) => flowEl.querySelector(`[data-b="${sg.b}"]`).textContent.slice(sg.s, sg.e))
  const text = blocks.join(' ').trim()
  if (!text) return null
  return { segments, text, rect: range.getBoundingClientRect() }
}

// ---------------------------------------------------------------------------
// Capítulo bloqueado
// ---------------------------------------------------------------------------

function Locked({ reason, bookId }) {
  const buyUrl = bookCheckout(bookId)
  return (
    <div className="kr-locked">
      <div className="kr-locked__icon">🔒</div>
      <h2 className="kr-locked__title">
        {reason === 'login' ? 'Este capítulo es para lectoras' : 'Desbloquea el libro completo'}
      </h2>
      <p>
        {reason === 'login'
          ? 'Si ya compraste este libro, inicia sesión con el mismo email de tu compra para seguir leyendo.'
          : 'Consigue el libro completo y léelo aquí siempre que quieras, o accede a todo con la membresía.'}
      </p>
      <div className="kr-locked__actions">
        {reason === 'login' && <Link className="btn btn--primary" to="/entrar">Iniciar sesión</Link>}
        {buyUrl && (
          <a className="btn btn--primary" href={buyUrl} target="_blank" rel="noreferrer">Comprar libro</a>
        )}
        <a className="btn btn--ghost" href={MEMBERSHIP.checkout} target="_blank" rel="noreferrer">
          Hazte miembra
        </a>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Lector
// ---------------------------------------------------------------------------

export default function Reader() {
  const { bookId, chapterId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const book = getEbook(bookId)

  const [settings, setSettings] = useStored('kindle:settings', {
    theme: 'sepia',
    size: 2,
    font: 'literata',
    spacing: 'normal',
  })
  const [reading, setReading] = useStored(`reading:${bookId}`, null)
  const [highlights, setHighlights] = useStored(`highlights:${bookId}`, [])

  const [state, setState] = useState({ status: 'loading' })
  const [chrome, setChrome] = useState(true)
  const [panel, setPanel] = useState(null) // 'toc' | 'aa' | 'notes' | null
  const [page, setPage] = useState(0)
  const [pages, setPages] = useState(1)
  const [box, setBox] = useState({ w: 0, h: 0 })
  const [popup, setPopup] = useState(null) // {mode:'new'|'edit', ...}
  const [noteEditor, setNoteEditor] = useState(null) // {id, text}

  const viewportRef = useRef(null)
  const flowRef = useRef(null)
  const pendingTarget = useRef(null) // 'end' | {hl:id} | {frac}
  const touchStart = useRef(null)

  const index = book ? ebookChapterIndex(book, chapterId) : -1
  const chapter = index >= 0 ? book.chapters[index] : null
  const prevCh = book?.chapters[index - 1]
  const nextCh = book?.chapters[index + 1]

  // ---- Carga del capítulo -------------------------------------------------
  useEffect(() => {
    let active = true
    setState({ status: 'loading' })
    setPopup(null)
    if (!chapter) return
    const nav = location.state || {}
    if (nav.at === 'end') pendingTarget.current = 'end'
    else if (nav.hl) pendingTarget.current = { hl: nav.hl }
    else if (reading?.chapterId === chapterId && typeof reading.frac === 'number')
      pendingTarget.current = { frac: reading.frac }
    else pendingTarget.current = null

    fetchEbookChapter(bookId, chapterId, chapter.free).then((r) => {
      if (!active) return
      if (r.blocks) setState({ status: 'ok', blocks: r.blocks })
      else if (r.locked) setState({ status: 'locked', reason: r.reason })
      else setState({ status: 'error' })
    })
    return () => {
      active = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookId, chapterId, chapter?.free])

  // ---- Medidas de la página ------------------------------------------------
  useLayoutEffect(() => {
    const el = viewportRef.current
    if (!el) return
    const measure = () => setBox({ w: el.clientWidth, h: el.clientHeight })
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [state.status])

  const margin = box.w < 600 ? 24 : 56
  const pageW = Math.max(200, Math.min(box.w - margin * 2, 640))
  const gap = margin * 2
  const step = pageW + gap
  // El visor deja 64px arriba para la barra (ver .kr-viewport en CSS)
  const pageH = Math.max(200, box.h - 72 - (box.w < 600 ? 8 : 32))
  const fontSize = FONT_SIZES[settings.size] ?? 19
  const lineHeight = { compacto: 1.45, normal: 1.65, amplio: 1.9 }[settings.spacing] || 1.65

  const chapterHighlights = useMemo(
    () => highlights.filter((h) => h.chapterId === chapterId),
    [highlights, chapterId],
  )
  const rangesByBlock = useMemo(() => {
    const map = {}
    chapterHighlights.forEach((h) =>
      h.segments.forEach((sg) => {
        ;(map[sg.b] ||= []).push({ s: sg.s, e: sg.e, id: h.id, color: h.color, note: h.note })
      }),
    )
    return map
  }, [chapterHighlights])

  // ---- Paginación ---------------------------------------------------------
  const repaginate = useCallback(() => {
    const flow = flowRef.current
    if (!flow || !box.w) return
    const total = Math.max(1, Math.round((flow.scrollWidth + gap) / step))
    setPages(total)
    const t = pendingTarget.current
    if (t) {
      pendingTarget.current = null
      if (t === 'end') return setPage(total - 1)
      if (t.hl) {
        const mark = flow.querySelector(`mark[data-hl="${t.hl}"]`)
        if (mark) return setPage(Math.min(total - 1, Math.floor(mark.offsetLeft / step)))
      }
      if (typeof t.frac === 'number') return setPage(Math.min(total - 1, Math.round(t.frac * (total - 1))))
    }
    setPage((p) => Math.min(p, total - 1))
  }, [box.w, gap, step])

  useLayoutEffect(() => {
    if (state.status !== 'ok') return
    repaginate()
    document.fonts?.ready.then(repaginate)
  }, [state, box.w, box.h, settings.size, settings.font, settings.spacing, repaginate])

  // Página 0 al cambiar de capítulo (si no hay destino)
  useEffect(() => setPage(0), [chapterId])

  // Guarda la posición de lectura
  useEffect(() => {
    if (state.status !== 'ok') return
    const frac = pages > 1 ? page / (pages - 1) : 0
    setReading({ chapterId, frac, ts: Date.now() })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, pages, chapterId, state.status])

  // ---- Pasar página ---------------------------------------------------------
  const nextPage = useCallback(() => {
    setPopup(null)
    if (page < pages - 1) return setPage(page + 1)
    if (nextCh) navigate(`/leer/${bookId}/${nextCh.id}`)
  }, [page, pages, nextCh, bookId, navigate])

  const prevPage = useCallback(() => {
    setPopup(null)
    if (page > 0) return setPage(page - 1)
    if (prevCh) navigate(`/leer/${bookId}/${prevCh.id}`, { state: { at: 'end' } })
  }, [page, prevCh, bookId, navigate])

  useEffect(() => {
    const onKey = (e) => {
      if (noteEditor || e.target.closest?.('input, textarea')) return
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault()
        nextPage()
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        prevPage()
      } else if (e.key === 'Escape') {
        setPanel(null)
        setPopup(null)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [nextPage, prevPage, noteEditor])

  // ---- Selección de texto → menú de subrayado -------------------------------
  useEffect(() => {
    let t
    const onSel = () => {
      clearTimeout(t)
      t = setTimeout(() => {
        const flow = flowRef.current
        if (!flow) return
        const sel = selectionToSegments(flow)
        if (sel) setPopup({ mode: 'new', ...sel })
        else setPopup((p) => (p?.mode === 'new' ? null : p))
      }, 250)
    }
    document.addEventListener('selectionchange', onSel)
    return () => {
      clearTimeout(t)
      document.removeEventListener('selectionchange', onSel)
    }
  }, [])

  const addHighlight = (color, withNote = false) => {
    if (!popup || popup.mode !== 'new') return
    const h = {
      id: uid(),
      chapterId,
      chapterTitle: chapter.title,
      segments: popup.segments,
      text: popup.text,
      color,
      note: '',
      ts: Date.now(),
    }
    setHighlights((list) => [...list, h])
    window.getSelection()?.removeAllRanges()
    setPopup(null)
    if (withNote) setNoteEditor({ id: h.id, text: '', quote: h.text })
  }

  const updateHighlight = (id, patch) =>
    setHighlights((list) => list.map((h) => (h.id === id ? { ...h, ...patch } : h)))
  const removeHighlight = (id) => {
    setHighlights((list) => list.filter((h) => h.id !== id))
    setPopup(null)
  }

  // ---- Toques ---------------------------------------------------------------
  const onViewportClick = (e) => {
    if (panel) return setPanel(null)
    const sel = window.getSelection()
    if (sel && !sel.isCollapsed) return
    const mark = e.target.closest?.('mark[data-hl]')
    if (mark) {
      const h = highlights.find((x) => x.id === mark.dataset.hl)
      if (h) return setPopup({ mode: 'edit', id: h.id, rect: mark.getBoundingClientRect() })
    }
    if (popup) return setPopup(null)
    const r = viewportRef.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    if (x < 0.28) prevPage()
    else if (x > 0.72) nextPage()
    else setChrome((c) => !c)
  }

  const onTouchStart = (e) => {
    const t = e.touches[0]
    touchStart.current = { x: t.clientX, y: t.clientY, time: Date.now() }
  }
  const onTouchEnd = (e) => {
    const s = touchStart.current
    touchStart.current = null
    if (!s) return
    const t = e.changedTouches[0]
    const dx = t.clientX - s.x
    const dy = t.clientY - s.y
    const sel = window.getSelection()
    if (sel && !sel.isCollapsed) return
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) && Date.now() - s.time < 600) {
      e.preventDefault()
      dx < 0 ? nextPage() : prevPage()
    }
  }

  if (!book || !chapter) return <NotFound />

  // ---- Progreso ---------------------------------------------------------------
  const chapterFrac = pages > 1 ? page / (pages - 1) : state.status === 'ok' ? 1 : 0
  const bookPct = Math.round(((index + chapterFrac) / book.chapters.length) * 100)
  const words = state.status === 'ok'
    ? state.blocks.reduce((n, b) => n + (b.value ? b.value.split(/\s+/).length : 0), 0)
    : 0
  const minsLeft = Math.max(1, Math.round(((words * (1 - (page + 1) / pages)) || 0) / WPM))
  const goToHighlight = (h) => {
    setPanel(null)
    if (h.chapterId === chapterId) {
      const mark = flowRef.current?.querySelector(`mark[data-hl="${h.id}"]`)
      if (mark) setPage(Math.min(pages - 1, Math.floor(mark.offsetLeft / step)))
    } else {
      navigate(`/leer/${bookId}/${h.chapterId}`, { state: { hl: h.id } })
    }
  }

  // Posición del menú flotante
  let popupStyle = null
  if (popup?.rect) {
    const top = popup.rect.top - 64
    popupStyle = {
      top: top < 60 ? popup.rect.bottom + 12 : top,
      left: Math.min(Math.max(12, popup.rect.left + popup.rect.width / 2 - 150), window.innerWidth - 312),
    }
  }
  const editing = popup?.mode === 'edit' ? highlights.find((h) => h.id === popup.id) : null

  const sortedNotes = [...highlights].sort((a, b) => {
    const ca = ebookChapterIndex(book, a.chapterId)
    const cb = ebookChapterIndex(book, b.chapterId)
    if (ca !== cb) return ca - cb
    return (a.segments[0]?.b - b.segments[0]?.b) || (a.segments[0]?.s - b.segments[0]?.s)
  })

  return (
    <div className={`kr kr--${settings.theme}` + (chrome ? ' kr--chrome' : '')}>
      {/* Barra superior */}
      <header className="kr-top">
        <Link className="kr-icon-btn" to={`/biblioteca/${bookId}`} aria-label="Volver a la biblioteca">
          ←
        </Link>
        <div className="kr-top__title">
          <span>{book.title}</span>
        </div>
        <div className="kr-top__tools">
          <button className={'kr-icon-btn' + (panel === 'toc' ? ' is-on' : '')} onClick={() => setPanel(panel === 'toc' ? null : 'toc')} title="Índice">☰</button>
          <button className={'kr-icon-btn kr-icon-btn--aa' + (panel === 'aa' ? ' is-on' : '')} onClick={() => setPanel(panel === 'aa' ? null : 'aa')} title="Letra y fondo">Aa</button>
          <button className={'kr-icon-btn' + (panel === 'notes' ? ' is-on' : '')} onClick={() => setPanel(panel === 'notes' ? null : 'notes')} title="Mis subrayados">
            🖍{highlights.length > 0 && <span className="kr-badge">{highlights.length}</span>}
          </button>
        </div>
      </header>

      {/* Página */}
      <main
        className="kr-viewport"
        ref={viewportRef}
        onClick={state.status === 'ok' ? onViewportClick : undefined}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {state.status === 'loading' && <p className="kr-msg">Abriendo el libro…</p>}
        {state.status === 'error' && <p className="kr-msg">No se pudo cargar el capítulo. Inténtalo de nuevo.</p>}
        {state.status === 'locked' && (
          <div className="kr-scroll">
            <p className="kr-eyebrow">Capítulo {index + 1}</p>
            <h1 className="kr-chapter-title">{chapter.title}</h1>
            <Locked reason={state.reason} bookId={bookId} />
          </div>
        )}
        {state.status === 'ok' && box.w > 0 && (
          <div className="kr-frame" style={{ width: pageW, height: pageH }}>
            <div
              ref={flowRef}
              className="kr-flow"
              style={{
                height: pageH,
                columnWidth: pageW,
                columnGap: gap,
                transform: `translateX(${-page * step}px)`,
                fontFamily: FONTS[settings.font]?.css,
                fontSize,
                lineHeight,
              }}
            >
              <header className="kr-chapter-head">
                <p className="kr-eyebrow">Capítulo {index + 1}</p>
                <h1 className="kr-chapter-title">{chapter.title}</h1>
                <div className="kr-ornament" aria-hidden="true">❦</div>
              </header>
              {state.blocks.map((b, i) => (
                <Block block={b} index={i} key={i} ranges={rangesByBlock[i] || []} />
              ))}
              {!nextCh && (
                <div className="kr-end">
                  <div className="kr-ornament">❦</div>
                  <p>Fin</p>
                  <Link className="btn btn--ghost" to={`/biblioteca/${bookId}`} onClick={(e) => e.stopPropagation()}>
                    Volver a la biblioteca
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Pie: progreso */}
      <footer className="kr-foot">
        {state.status === 'ok' && (
          <>
            <input
              className="kr-slider"
              type="range"
              min={0}
              max={Math.max(0, pages - 1)}
              value={page}
              onChange={(e) => setPage(Number(e.target.value))}
              aria-label="Página"
            />
            <div className="kr-foot__info">
              <span>
                {page >= pages - 1 && nextCh ? 'Fin del capítulo' : `Quedan ${minsLeft} min en el capítulo`}
              </span>
              <span>Pág. {page + 1} de {pages} · {bookPct} %</span>
            </div>
          </>
        )}
      </footer>

      {/* Panel: índice */}
      {panel === 'toc' && (
        <aside className="kr-sheet kr-sheet--left">
          <div className="kr-sheet__head">
            <strong>Índice</strong>
            <button className="kr-icon-btn" onClick={() => setPanel(null)}>✕</button>
          </div>
          <ul className="kr-toc">
            {book.chapters.map((c, i) => (
              <li key={c.id}>
                <button
                  className={'kr-toc__item' + (c.id === chapterId ? ' is-active' : '')}
                  onClick={() => {
                    setPanel(null)
                    navigate(`/leer/${bookId}/${c.id}`)
                  }}
                >
                  <span className="kr-toc__num">{i + 1}</span>
                  <span className="kr-toc__title">{c.title}</span>
                  {c.free && <span className="kr-tag">Gratis</span>}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      )}

      {/* Panel: Aa */}
      {panel === 'aa' && (
        <aside className="kr-sheet kr-sheet--aa">
          <div className="kr-aa__row">
            <span className="kr-aa__label">Tamaño</span>
            <div className="kr-aa__size">
              <button onClick={() => setSettings((s) => ({ ...s, size: Math.max(0, s.size - 1) }))} style={{ fontSize: 14 }}>A</button>
              <div className="kr-aa__dots">
                {FONT_SIZES.map((_, i) => (
                  <span key={i} className={i <= settings.size ? 'on' : ''} />
                ))}
              </div>
              <button onClick={() => setSettings((s) => ({ ...s, size: Math.min(FONT_SIZES.length - 1, s.size + 1) }))} style={{ fontSize: 24 }}>A</button>
            </div>
          </div>
          <div className="kr-aa__row">
            <span className="kr-aa__label">Letra</span>
            <div className="kr-aa__seg">
              {Object.entries(FONTS).map(([k, f]) => (
                <button key={k} className={settings.font === k ? 'is-on' : ''} style={{ fontFamily: f.css }}
                  onClick={() => setSettings((s) => ({ ...s, font: k }))}>
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div className="kr-aa__row">
            <span className="kr-aa__label">Interlineado</span>
            <div className="kr-aa__seg">
              {['compacto', 'normal', 'amplio'].map((k) => (
                <button key={k} className={settings.spacing === k ? 'is-on' : ''}
                  onClick={() => setSettings((s) => ({ ...s, spacing: k }))}>
                  {k[0].toUpperCase() + k.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="kr-aa__row">
            <span className="kr-aa__label">Fondo</span>
            <div className="kr-aa__themes">
              {Object.entries(THEMES).map(([k, t]) => (
                <button key={k} className={`kr-swatch kr-swatch--${k}` + (settings.theme === k ? ' is-on' : '')}
                  onClick={() => setSettings((s) => ({ ...s, theme: k }))}>
                  <span>Aa</span>
                  <small>{t.label}</small>
                </button>
              ))}
            </div>
          </div>
        </aside>
      )}

      {/* Panel: subrayados y notas */}
      {panel === 'notes' && (
        <aside className="kr-sheet kr-sheet--right">
          <div className="kr-sheet__head">
            <strong>Mis subrayados</strong>
            <button className="kr-icon-btn" onClick={() => setPanel(null)}>✕</button>
          </div>
          {sortedNotes.length === 0 ? (
            <div className="kr-notes__empty">
              <p>Todavía no subrayaste nada.</p>
              <p>Mantén pulsado (o selecciona con el ratón) cualquier frase del libro y elige un color.</p>
            </div>
          ) : (
            <ul className="kr-notes">
              {sortedNotes.map((h, i) => (
                <li key={h.id}>
                  {(i === 0 || sortedNotes[i - 1].chapterId !== h.chapterId) && (
                    <p className="kr-notes__chapter">{h.chapterTitle}</p>
                  )}
                  <button className={`kr-note kr-note--${h.color}`} onClick={() => goToHighlight(h)}>
                    <span className="kr-note__quote">“{h.text}”</span>
                    {h.note && <span className="kr-note__text">📝 {h.note}</span>}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </aside>
      )}

      {/* Menú flotante de subrayado */}
      {popup && popupStyle && (
        <div className="kr-pop" style={popupStyle} onMouseDown={(e) => e.preventDefault()}>
          {COLORS.map((c) => (
            <button
              key={c}
              className={`kr-pop__color kr-pop__color--${c}` + (editing?.color === c ? ' is-on' : '')}
              aria-label={`Subrayar en ${c}`}
              onClick={() => (popup.mode === 'new' ? addHighlight(c) : updateHighlight(popup.id, { color: c }))}
            />
          ))}
          <span className="kr-pop__sep" />
          <button
            className="kr-pop__btn"
            onClick={() => {
              if (popup.mode === 'new') addHighlight('amarillo', true)
              else {
                setNoteEditor({ id: editing.id, text: editing.note || '', quote: editing.text })
                setPopup(null)
              }
            }}
          >
            📝 Nota
          </button>
          {popup.mode === 'edit' && (
            <button className="kr-pop__btn" onClick={() => removeHighlight(popup.id)} aria-label="Borrar subrayado">
              🗑
            </button>
          )}
        </div>
      )}

      {/* Editor de nota */}
      {noteEditor && (
        <div className="kr-modal" onClick={() => setNoteEditor(null)}>
          <div className="kr-modal__card" onClick={(e) => e.stopPropagation()}>
            <p className="kr-modal__quote">“{noteEditor.quote}”</p>
            <textarea
              autoFocus
              rows={5}
              placeholder="Escribe lo que te removió esta frase…"
              value={noteEditor.text}
              onChange={(e) => setNoteEditor({ ...noteEditor, text: e.target.value })}
            />
            <div className="kr-modal__actions">
              <button className="btn btn--ghost" onClick={() => setNoteEditor(null)}>Cancelar</button>
              <button
                className="btn btn--primary"
                onClick={() => {
                  updateHighlight(noteEditor.id, { note: noteEditor.text.trim() })
                  setNoteEditor(null)
                }}
              >
                Guardar nota
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
