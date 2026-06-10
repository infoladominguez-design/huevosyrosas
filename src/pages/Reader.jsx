import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getEbook, ebookChapterIndex } from '../data/ebooks.js'
import { fetchEbookChapter } from '../lib/ebooks.js'
import { useStored } from '../lib/store.js'
import { bookCheckout, MEMBERSHIP } from '../data/hotmart.js'
import NotFound from './NotFound.jsx'

const FONT_SCALES = [0.85, 0.95, 1, 1.12, 1.28, 1.45]

function ChapterBlock({ block }) {
  switch (block.type) {
    case 'h':
      return <h2 className="reader-h">{block.value}</h2>
    case 'quote':
      return <blockquote className="reader-quote">{block.value}</blockquote>
    case 'hr':
      return <div className="reader-break" aria-hidden="true">⁂</div>
    case 'p':
    default:
      return <p className="reader-p">{block.value}</p>
  }
}

function Locked({ reason, bookId }) {
  const buyUrl = bookCheckout(bookId)
  return (
    <div className="locked-box">
      <div className="locked-box__icon">🔒</div>
      <h2 className="locked-box__title">
        {reason === 'login' ? 'Este capítulo es para lectoras' : 'Desbloquea el libro completo'}
      </h2>
      <p className="muted">
        {reason === 'login'
          ? 'Si ya compraste este libro, inicia sesión con el mismo email de tu compra para seguir leyendo.'
          : 'Consigue el libro completo y léelo dentro de la web siempre que quieras, o accede a todo con la membresía.'}
      </p>
      <div className="hero__actions" style={{ justifyContent: 'center', marginTop: '1rem' }}>
        {reason === 'login' && <Link className="btn btn--primary" to="/entrar">Iniciar sesión</Link>}
        {buyUrl && (
          <a className="btn btn--primary btn--cta" href={buyUrl} target="_blank" rel="noreferrer">
            Comprar libro
          </a>
        )}
        <a className="btn btn--ghost" href={MEMBERSHIP.checkout} target="_blank" rel="noreferrer">
          Hazte miembra
        </a>
      </div>
    </div>
  )
}

export default function Reader() {
  const { bookId, chapterId } = useParams()
  const navigate = useNavigate()
  const book = getEbook(bookId)

  const [settings, setSettings] = useStored('reader:settings', {
    theme: 'sepia',
    fontIdx: 2,
    serif: true,
  })
  const [, setReading] = useStored(`reading:${bookId}`, null)
  const [tocOpen, setTocOpen] = useState(false)
  const [state, setState] = useState({ status: 'loading' })
  const scrollRef = useRef(null)

  const index = book ? ebookChapterIndex(book, chapterId) : -1
  const chapter = index >= 0 ? book.chapters[index] : null

  useEffect(() => {
    let active = true
    setState({ status: 'loading' })
    if (!chapter) return
    fetchEbookChapter(bookId, chapterId, chapter.free).then((r) => {
      if (!active) return
      if (r.blocks) setState({ status: 'ok', blocks: r.blocks })
      else if (r.locked) setState({ status: 'locked', reason: r.reason })
      else setState({ status: 'error' })
    })
    // Guarda la posición de lectura (continuar después).
    setReading({ chapterId, ts: Date.now() })
    // Vuelve arriba al cambiar de capítulo.
    if (scrollRef.current) scrollRef.current.scrollTop = 0
    window.scrollTo(0, 0)
    return () => {
      active = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookId, chapterId, chapter?.free])

  if (!book || !chapter) return <NotFound />

  const prev = book.chapters[index - 1]
  const next = book.chapters[index + 1]
  const fontScale = FONT_SCALES[settings.fontIdx] ?? 1
  const goto = (c) => navigate(`/leer/${bookId}/${c.id}`)
  const cycleTheme = () => {
    const order = ['claro', 'sepia', 'oscuro']
    const i = order.indexOf(settings.theme)
    setSettings((s) => ({ ...s, theme: order[(i + 1) % order.length] }))
  }
  const themeLabel = { claro: '☀️ Claro', sepia: '📜 Sepia', oscuro: '🌙 Oscuro' }

  return (
    <div className={`reader reader--${settings.theme}`}>
      <header className="reader__bar">
        <Link className="reader__btn reader__btn--text" to={`/biblioteca/${bookId}`}>
          ← Salir
        </Link>
        <button className="reader__btn reader__btn--text" onClick={() => setTocOpen(true)}>
          ☰ Índice
        </button>
        <span className="reader__book-title">{book.title}</span>
        <div className="reader__tools">
          <button className="reader__btn" title="Tipografía"
            onClick={() => setSettings((s) => ({ ...s, serif: !s.serif }))}>
            {settings.serif ? 'Serif' : 'Sans'}
          </button>
          <button className="reader__btn" title="Reducir letra"
            onClick={() => setSettings((s) => ({ ...s, fontIdx: Math.max(0, s.fontIdx - 1) }))}>
            A−
          </button>
          <button className="reader__btn" title="Aumentar letra"
            onClick={() => setSettings((s) => ({ ...s, fontIdx: Math.min(FONT_SCALES.length - 1, s.fontIdx + 1) }))}>
            A+
          </button>
          <button className="reader__btn" title="Tema" onClick={cycleTheme}>
            {themeLabel[settings.theme]}
          </button>
        </div>
      </header>

      <div className="reader__progress">
        <div
          className="reader__progress-fill"
          style={{ width: `${((index + 1) / book.chapters.length) * 100}%` }}
        />
      </div>

      <div className="reader__scroll" ref={scrollRef}>
        <article
          className={'reader__page' + (settings.serif ? ' reader__page--serif' : ' reader__page--sans')}
          style={{ fontSize: `${fontScale}rem` }}
        >
          <p className="reader__eyebrow">
            {book.title} · Capítulo {index + 1} de {book.chapters.length}
          </p>
          <h1 className="reader__chapter-title">{chapter.title}</h1>

          {state.status === 'loading' && <p className="muted">Cargando…</p>}
          {state.status === 'error' && (
            <p className="muted">No se pudo cargar el capítulo. Inténtalo de nuevo.</p>
          )}
          {state.status === 'locked' && <Locked reason={state.reason} bookId={bookId} />}
          {state.status === 'ok' &&
            state.blocks.map((b, i) => <ChapterBlock block={b} key={i} />)}

          {state.status === 'ok' && (
            <nav className="reader__nav">
              {prev ? (
                <button className="btn btn--ghost" onClick={() => goto(prev)}>← Anterior</button>
              ) : <span />}
              {next ? (
                <button className="btn btn--primary" onClick={() => goto(next)}>
                  Siguiente capítulo →
                </button>
              ) : (
                <Link className="btn btn--primary" to={`/biblioteca/${bookId}`}>
                  🎉 Fin · Volver al libro
                </Link>
              )}
            </nav>
          )}
        </article>
      </div>

      {tocOpen && (
        <div className="reader__toc-overlay" onClick={() => setTocOpen(false)}>
          <aside className="reader__toc" onClick={(e) => e.stopPropagation()}>
            <div className="reader__toc-head">
              <strong>Índice</strong>
              <button className="reader__btn" onClick={() => setTocOpen(false)}>✕</button>
            </div>
            <ul className="reader__toc-list">
              {book.chapters.map((c, i) => {
                const locked = !c.free && state.status === 'locked'
                return (
                  <li key={c.id}>
                    <button
                      className={'reader__toc-item' + (c.id === chapterId ? ' is-active' : '')}
                      onClick={() => { setTocOpen(false); goto(c) }}
                    >
                      <span className="reader__toc-num">{i + 1}</span>
                      <span>{c.title}</span>
                      {c.free && <span className="tag tag--accent">Gratis</span>}
                      {locked && <span aria-hidden="true">🔒</span>}
                    </button>
                  </li>
                )
              })}
            </ul>
          </aside>
        </div>
      )}
    </div>
  )
}
