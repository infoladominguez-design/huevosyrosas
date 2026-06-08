import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCourse, allLessons } from '../data/catalog.js'
import { useProfile, useProgress, useComments, formatDate, useStored } from '../lib/store.js'
import { fetchLessonContent } from '../lib/content.js'
import { programCheckout, MEMBERSHIP } from '../data/hotmart.js'
import NotFound from './NotFound.jsx'

// Clasifica un bloque de texto: etiqueta en mayúsculas, título o párrafo.
function classifyText(value) {
  const t = value.trim()
  const letters = t.replace(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ]/g, '')
  const isUpper = letters.length > 1 && letters === letters.toUpperCase()
  const noPunct = !/[.,;:!?"”»…]$/.test(t)
  const words = t.split(/\s+/).length
  if (t.length <= 74 && isUpper) return 'label'
  if (t.length <= 74 && noPunct && words <= 11 && !/^\d/.test(t)) return 'heading'
  return 'text'
}

function Block({ block, lead }) {
  switch (block.type) {
    case 'video':
      return (
        <figure className="block block--video">
          <div className="video-frame">
            <iframe
              src={block.url}
              title={block.caption || 'Vídeo de la lección'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      )
    case 'image':
      return (
        <figure className="block block--image">
          <img src={block.src} alt={block.alt || ''} loading="lazy" />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      )
    case 'resource':
      return (
        <a className="block block--resource" href={block.href} target="_blank" rel="noreferrer">
          <span className="block--resource__icon">📎</span>
          <span>
            <strong>{block.label}</strong>
            {block.note && <span className="muted"> — {block.note}</span>}
          </span>
        </a>
      )
    case 'text':
    default: {
      const kind = classifyText(block.value)
      if (kind === 'label') return <p className="lesson-label">{block.value}</p>
      if (kind === 'heading') return <h2 className="lesson-h">{block.value}</h2>
      return (
        <p className={'block block--text' + (lead ? ' block--lead' : '')}>{block.value}</p>
      )
    }
  }
}

function Locked({ reason, courseId }) {
  const buyUrl = programCheckout(courseId)
  return (
    <div className="locked-box">
      <div className="locked-box__icon">🔒</div>
      <h2 className="locked-box__title">
        {reason === 'login' ? 'Este contenido es para compradoras' : 'Desbloquea este programa'}
      </h2>
      <p className="muted">
        {reason === 'login'
          ? 'Si ya lo compraste en Hotmart, inicia sesión con ese mismo email para acceder.'
          : 'Consigue acceso de por vida comprando el programa, o accede a todo con la membresía.'}
      </p>
      <div className="hero__actions" style={{ justifyContent: 'flex-start', marginTop: '1rem' }}>
        {reason === 'login' && (
          <Link className="btn btn--primary" to="/entrar">Iniciar sesión</Link>
        )}
        {buyUrl && (
          <a className="btn btn--primary btn--cta" href={buyUrl} target="_blank" rel="noreferrer">
            Comprar programa
          </a>
        )}
        <a className="btn btn--ghost" href={MEMBERSHIP.checkout} target="_blank" rel="noreferrer">
          Hazte miembra
        </a>
      </div>
    </div>
  )
}

const CLAUDIA_EMAIL = 'infoladominguez@gmail.com'

function isQuestion(v) {
  const t = v.trim()
  return (
    /^\d+[.)]/.test(t) ||
    /^[a-eA-E]\)/.test(t) ||
    t.endsWith('?') ||
    (t.endsWith(':') && t.length < 160)
  )
}

// Worksheet rellenable: cada pregunta tiene su recuadro de respuesta,
// se guarda en el navegador y se puede enviar por email a Claudia.
function Worksheet({ blocks, courseTitle, lessonTitle, storageKey }) {
  const [answers, setAnswers] = useStored(`answers:${storageKey}`, {})
  const qIdx = blocks
    .map((b, i) => (b.type === 'text' && isQuestion(b.value) ? i : -1))
    .filter((i) => i >= 0)
  const hasQ = qIdx.length > 0
  const setA = (k, val) => setAnswers((p) => ({ ...p, [k]: val }))

  const buildMailto = () => {
    const lines = [`Programa: ${courseTitle}`, lessonTitle, '', '— MIS RESPUESTAS —', '']
    if (hasQ) {
      qIdx.forEach((i) => {
        lines.push(blocks[i].value)
        lines.push((answers[i] || '').trim() || '(sin responder)')
        lines.push('')
      })
    } else {
      lines.push((answers.all || '').trim() || '(sin responder)')
    }
    const subject = `Mis respuestas — ${lessonTitle}`
    return `mailto:${CLAUDIA_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`
  }

  return (
    <div className="lesson__content worksheet">
      <p className="worksheet__intro">
        ✍️ Responde a tu ritmo. Tus respuestas se guardan en este dispositivo y
        puedes enviármelas cuando quieras a <strong>{CLAUDIA_EMAIL}</strong>.
      </p>

      {blocks.map((b, i) => (
        <div key={i}>
          <Block block={b} />
          {hasQ && qIdx.includes(i) && (
            <textarea
              className="form__input worksheet__answer"
              rows={3}
              value={answers[i] || ''}
              onChange={(e) => setA(i, e.target.value)}
              placeholder="Escribe tu respuesta…"
            />
          )}
        </div>
      ))}

      {!hasQ && (
        <textarea
          className="form__input worksheet__answer"
          rows={6}
          value={answers.all || ''}
          onChange={(e) => setA('all', e.target.value)}
          placeholder="Escribe aquí tu respuesta…"
        />
      )}

      <a className="btn btn--primary btn--cta worksheet__send" href={buildMailto()}>
        Enviarme tus respuestas
      </a>
    </div>
  )
}

function Comments({ lessonKey }) {
  const { name } = useProfile()
  const { items, add, remove } = useComments(lessonKey)
  const [text, setText] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    add(name, text.trim())
    setText('')
  }

  return (
    <div className="comments">
      <h2 className="section__title" style={{ fontSize: '1.4rem' }}>
        Comentarios y preguntas
      </h2>
      <form className="form" onSubmit={submit}>
        <textarea
          className="form__input"
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={name ? `Comenta como ${name}…` : 'Escribe tu duda o comentario…'}
        />
        <button className="btn btn--primary" type="submit">Comentar</button>
      </form>
      <ul className="comment-list">
        {items.map((c) => (
          <li className="comment" key={c.id}>
            <div className="comment__head">
              <strong>{c.author}</strong>
              <span className="comment__date">{formatDate(c.ts)}</span>
              <button className="link-btn" onClick={() => remove(c.id)}>Eliminar</button>
            </div>
            <p className="comment__text">{c.text}</p>
          </li>
        ))}
        {!items.length && <p className="muted">Sé la primera en comentar esta lección.</p>}
      </ul>
    </div>
  )
}

export default function Lesson() {
  const { courseId, moduleId, lessonId } = useParams()
  const course = getCourse(courseId)
  const { isDone, toggle } = useProgress(courseId)
  const [state, setState] = useState({ status: 'loading' })

  const lessons = course ? allLessons(course) : []
  const index = lessons.findIndex((l) => l.id === lessonId && l.moduleId === moduleId)
  const lesson = lessons[index]

  useEffect(() => {
    let active = true
    setState({ status: 'loading' })
    if (!lesson) return
    fetchLessonContent(courseId, lessonId, lesson.free).then((r) => {
      if (!active) return
      if (r.blocks) setState({ status: 'ok', blocks: r.blocks })
      else if (r.locked) setState({ status: 'locked', reason: r.reason })
      else setState({ status: 'error' })
    })
    return () => {
      active = false
    }
  }, [courseId, lessonId, lesson?.free])

  if (!course || !lesson) return <NotFound />

  const prev = lessons[index - 1]
  const next = lessons[index + 1]
  const lessonKey = `${courseId}:${moduleId}:${lessonId}`
  const linkTo = (l) => `/cursos/${courseId}/${l.moduleId}/${l.id}`
  const unlocked = state.status === 'ok'

  return (
    <section className="lesson">
      <Link className="back-link" to={`/cursos/${courseId}`}>← {course.title}</Link>

      <p className="lesson__eyebrow">{lesson.moduleTitle} · {lesson.duration}</p>
      <h1 className="lesson__title">{lesson.title}</h1>

      {state.status === 'loading' && <p className="muted">Cargando…</p>}
      {state.status === 'error' && (
        <p className="muted">No se pudo cargar el contenido. Inténtalo de nuevo.</p>
      )}
      {state.status === 'locked' && <Locked reason={state.reason} courseId={courseId} />}

      {unlocked && (
        <>
          {/ejercicio|worksheet/i.test(lesson.title) ? (
            <Worksheet
              blocks={state.blocks}
              courseTitle={course.title}
              lessonTitle={lesson.title}
              storageKey={lessonKey}
            />
          ) : (
            <div className="lesson__content">
              {(() => {
                const leadIdx = state.blocks.findIndex(
                  (b) => b.type === 'text' && classifyText(b.value) === 'text',
                )
                return state.blocks.map((b, i) => (
                  <Block block={b} key={i} lead={i === leadIdx} />
                ))
              })()}
            </div>
          )}

          <div className="lesson__bar">
            <button
              className={'btn ' + (isDone(lessonId) ? 'btn--ghost' : 'btn--primary')}
              onClick={() => toggle(lessonId)}
            >
              {isDone(lessonId) ? '✅ Completada' : 'Marcar como completada'}
            </button>
            <div className="lesson__nav">
              {prev ? (
                <Link className="btn btn--ghost" to={linkTo(prev)}>← Anterior</Link>
              ) : <span />}
              {next ? (
                <Link className="btn btn--ghost" to={linkTo(next)}>Siguiente →</Link>
              ) : (
                <Link className="btn btn--ghost" to={`/cursos/${courseId}`}>Finalizar</Link>
              )}
            </div>
          </div>

          <Comments lessonKey={lessonKey} />
        </>
      )}
    </section>
  )
}
