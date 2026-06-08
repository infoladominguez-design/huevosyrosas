import { Link } from 'react-router-dom'
import { hero } from '../content.js'
import { courses, courseLessonCount } from '../data/courses.js'
import { useReviews } from '../lib/store.js'
import { Stars } from '../components/ui.jsx'

function CourseCard({ course }) {
  const { average, count } = useReviews(course.id)
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
          <span>{courseLessonCount(course)} lecciones</span>
        </div>
        <div className="course-card__footer">
          <span className="course-card__price">{course.price} €</span>
          <span className="course-card__level">{course.level}</span>
        </div>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <section className="hero" id="top">
        <p className="hero__eyebrow">{hero.eyebrow}</p>
        <h1 className="hero__title">
          Lo que sientes tiene <em>nombre</em>.
        </h1>
        <p className="hero__subtitle">
          Programas de desarrollo emocional para mujeres. No estás rota, ni
          estás loca: lo que sientes tiene origen y tiene salida. Empecemos.
        </p>
        <div className="hero__actions">
          <Link className="btn btn--primary btn--cta" to="/cursos">Ver programas</Link>
          <Link className="btn btn--ghost" to="/comunidad">Unirme a la comunidad</Link>
        </div>
      </section>

      <section id="cursos">
        <h2 className="section__title">Programas</h2>
        <div className="course-grid">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </section>
    </>
  )
}
