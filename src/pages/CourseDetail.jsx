import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCourse, courseLessonCount } from '../data/courses.js'
import { useProfile, useProgress, useReviews, formatDate } from '../lib/store.js'
import { Stars, ProgressBar } from '../components/ui.jsx'
import NotFound from './NotFound.jsx'

function Reviews({ courseId }) {
  const { name } = useProfile()
  const { items, add, remove, average, count } = useReviews(courseId)
  const [rating, setRating] = useState(5)
  const [text, setText] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    add(name, rating, text.trim())
    setText('')
    setRating(5)
  }

  return (
    <div className="reviews">
      <div className="reviews__head">
        <h2 className="section__title" style={{ margin: 0 }}>Valoraciones</h2>
        <div className="reviews__summary">
          <strong>{count ? average.toFixed(1) : '—'}</strong>
          <Stars value={Math.round(average)} />
          <span>{count} reseña{count === 1 ? '' : 's'}</span>
        </div>
      </div>

      <form className="form" onSubmit={submit}>
        <label className="form__row">
          <span>Tu valoración</span>
          <Stars value={rating} onChange={setRating} size="1.5rem" />
        </label>
        <textarea
          className="form__input"
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="¿Qué te ha parecido el curso?"
        />
        <button className="btn btn--primary" type="submit">Publicar reseña</button>
      </form>

      <ul className="comment-list">
        {items.map((r) => (
          <li className="comment" key={r.id}>
            <div className="comment__head">
              <strong>{r.author}</strong>
              <Stars value={r.rating} />
              <span className="comment__date">{formatDate(r.ts)}</span>
              <button className="link-btn" onClick={() => remove(r.id)}>Eliminar</button>
            </div>
            <p className="comment__text">{r.text}</p>
          </li>
        ))}
        {!items.length && <p className="muted">Aún no hay reseñas. ¡Sé el primero!</p>}
      </ul>
    </div>
  )
}

export default function CourseDetail() {
  const { courseId } = useParams()
  const course = getCourse(courseId)
  const { isDone, count } = useProgress(courseId)

  if (!course) return <NotFound />

  const total = courseLessonCount(course)
  const firstLesson = course.modules[0]?.lessons[0]

  return (
    <section>
      <Link className="back-link" to="/cursos">← Todos los cursos</Link>

      <div className="course-hero">
        <div
          className="course-hero__cover"
          style={{ backgroundImage: `url(${course.image})` }}
        >
          <span className="course-hero__badge" style={{ background: course.accent }}>
            {course.cover}
          </span>
        </div>
        <div className="course-hero__body">
          <h1 className="course-hero__title">{course.title}</h1>
          <p className="course-hero__subtitle">{course.subtitle}</p>
          <p>{course.description}</p>
          <div className="course-hero__meta">
            <span>👩‍🏫 {course.instructor}</span>
            <span>⏱ {course.durationHours} h</span>
            <span>📚 {total} lecciones</span>
            <span>🎯 {course.level}</span>
          </div>
          <div className="course-hero__actions">
            {firstLesson && (
              <Link
                className="btn btn--primary"
                to={`/cursos/${course.id}/${course.modules[0].id}/${firstLesson.id}`}
              >
                {count > 0 ? 'Continuar curso' : `Empezar · ${course.price} €`}
              </Link>
            )}
          </div>
          <ProgressBar value={count} total={total} />
        </div>
      </div>

      <div className="curriculum">
        <h2 className="section__title">Contenido del curso</h2>
        {course.modules.map((m, mi) => (
          <div className="module" key={m.id}>
            <h3 className="module__title">
              <span className="module__num">{mi + 1}</span> {m.title}
            </h3>
            <ul className="lesson-list">
              {m.lessons.map((l) => (
                <li key={l.id}>
                  <Link className="lesson-row" to={`/cursos/${course.id}/${m.id}/${l.id}`}>
                    <span className="lesson-row__check">{isDone(l.id) ? '✅' : '▶️'}</span>
                    <span className="lesson-row__title">{l.title}</span>
                    <span className="lesson-row__dur">{l.duration}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Reviews courseId={course.id} />
    </section>
  )
}
