import { Link } from 'react-router-dom'
import { courses, courseLessonCount } from '../data/catalog.js'
import { useProgress, useReviews } from '../lib/store.js'
import { Stars } from '../components/ui.jsx'

function CourseRow({ course }) {
  const { average, count } = useReviews(course.id)
  const { count: doneCount } = useProgress(course.id)
  const total = courseLessonCount(course)
  return (
    <Link className="course-card" to={`/cursos/${course.id}`}>
      <div
        className="course-card__cover"
        style={{ backgroundImage: `url(${course.image})` }}
      >
        <span className="course-card__badge" style={{ background: course.accent }}>
          {course.cover}
        </span>
      </div>
      <div className="course-card__body">
        <div className="course-card__tags">
          {course.tags.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>
        <h3 className="course-card__title">{course.title}</h3>
        <p className="course-card__subtitle">{course.subtitle}</p>
        <div className="course-card__meta">
          <Stars value={Math.round(average)} />
          <span>{count ? `${average.toFixed(1)} (${count})` : 'Nuevo'}</span>
          <span>·</span>
          <span>{course.durationHours} h</span>
          {doneCount > 0 && <span className="tag tag--accent">En curso · {doneCount}/{total}</span>}
        </div>
        <div className="course-card__footer">
          <span className="course-card__price">{course.price} €</span>
          <span className="course-card__level">{course.level}</span>
        </div>
      </div>
    </Link>
  )
}

export default function Courses() {
  return (
    <section>
      <h2 className="section__title">Todos los programas</h2>
      <p className="lead">
        Elige un programa, avanza capítulo a capítulo con sus ejercicios y
        comparte el proceso con el resto de la comunidad.
      </p>
      <div className="course-grid">
        {courses.map((c) => (
          <CourseRow key={c.id} course={c} />
        ))}
      </div>
    </section>
  )
}
