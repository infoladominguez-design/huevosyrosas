import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCourse, allLessons } from '../data/courses.js'
import { useProfile, useProgress, useComments, formatDate } from '../lib/store.js'
import NotFound from './NotFound.jsx'

function Block({ block }) {
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
    default:
      return <p className="block block--text">{block.value}</p>
  }
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
        {!items.length && <p className="muted">Sé el primero en comentar esta lección.</p>}
      </ul>
    </div>
  )
}

export default function Lesson() {
  const { courseId, moduleId, lessonId } = useParams()
  const course = getCourse(courseId)
  const { isDone, toggle } = useProgress(courseId)

  if (!course) return <NotFound />

  const lessons = allLessons(course)
  const index = lessons.findIndex((l) => l.id === lessonId && l.moduleId === moduleId)
  const lesson = lessons[index]
  if (!lesson) return <NotFound />

  const prev = lessons[index - 1]
  const next = lessons[index + 1]
  const lessonKey = `${courseId}:${moduleId}:${lessonId}`
  const linkTo = (l) => `/cursos/${courseId}/${l.moduleId}/${l.id}`

  return (
    <section className="lesson">
      <Link className="back-link" to={`/cursos/${courseId}`}>← {course.title}</Link>

      <p className="lesson__eyebrow">{lesson.moduleTitle} · {lesson.duration}</p>
      <h1 className="lesson__title">{lesson.title}</h1>

      <div className="lesson__content">
        {lesson.blocks.map((b, i) => (
          <Block block={b} key={i} />
        ))}
      </div>

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
            <Link className="btn btn--ghost" to={`/cursos/${courseId}`}>Finalizar curso</Link>
          )}
        </div>
      </div>

      <Comments lessonKey={lessonKey} />
    </section>
  )
}
