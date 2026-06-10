import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../lib/AuthContext.jsx'
import { useEntitlements } from '../lib/entitlements.js'
import { courses, courseLessonCount } from '../data/catalog.js'
import { ebooks } from '../data/ebooks.js'
import { useProgress, useStored } from '../lib/store.js'
import { MEMBERSHIP } from '../data/hotmart.js'
import { ProgressBar } from '../components/ui.jsx'
import BookCover from '../components/BookCover.jsx'

function MyBookCard({ book }) {
  const [progress] = useStored(`reading:${book.id}`, null)
  const resume = book.chapters.find((c) => c.id === progress?.chapterId) || book.chapters[0]
  return (
    <Link className="space-book" to={`/leer/${book.id}/${resume.id}`} style={{ '--accent': book.accent }}>
      <BookCover book={book} />
      <div className="space-book__body">
        <h3 className="space-book__title">{book.title}</h3>
        <span className="space-card__cta">
          {progress?.chapterId ? 'Continuar leyendo →' : 'Empezar a leer →'}
        </span>
      </div>
    </Link>
  )
}

function MyProgramCard({ course }) {
  const { count } = useProgress(course.id)
  const total = courseLessonCount(course)
  return (
    <Link className="space-card" to={`/cursos/${course.id}`}>
      <div className="space-card__cover" style={{ backgroundImage: `url(${course.image})` }}>
        <span className="course-card__badge" style={{ background: course.accent }}>{course.cover}</span>
      </div>
      <div className="space-card__body">
        <h3 className="space-card__title">{course.title}</h3>
        <ProgressBar value={count} total={total} />
        <span className="space-card__cta">{count > 0 ? 'Continuar →' : 'Empezar →'}</span>
      </div>
    </Link>
  )
}

export default function MemberSpace() {
  const { user, loading, signOut, configured } = useAuth()
  const { hasProgram, hasBook, hasMembership, loaded } = useEntitlements()
  const navigate = useNavigate()

  // Aún no se ha activado el login (sin Supabase)
  if (!configured) {
    return (
      <section className="auth">
        <div className="auth__card panel">
          <h1 className="section__title" style={{ fontSize: '1.8rem' }}>Tu espacio de sanación</h1>
          <p className="muted">
            El acceso de miembras se activará muy pronto. Mientras tanto, puedes
            explorar los programas y unirte a la membresía.
          </p>
          <div className="hero__actions" style={{ justifyContent: 'flex-start' }}>
            <Link className="btn btn--primary" to="/programas">Ver programas</Link>
            <a className="btn btn--ghost" href={MEMBERSHIP.checkout} target="_blank" rel="noreferrer">Hazte miembra</a>
          </div>
        </div>
      </section>
    )
  }

  if (loading) {
    return <section className="auth"><p className="muted">Cargando tu espacio…</p></section>
  }

  // No ha iniciado sesión
  if (!user) {
    return (
      <section className="auth">
        <div className="auth__card panel">
          <h1 className="section__title" style={{ fontSize: '1.8rem' }}>Ingresa a tu espacio de sanación</h1>
          <p className="muted">
            Si ya compraste un programa o la membresía, entra con el mismo email
            de tu compra y te enviamos un enlace de acceso.
          </p>
          <Link className="btn btn--primary btn--cta" to="/entrar">Entrar</Link>
        </div>
      </section>
    )
  }

  const mine = courses.filter((c) => hasProgram(c.id))
  const otros = courses.filter((c) => !hasProgram(c.id))
  const myBooks = ebooks.filter((b) => hasBook(b.id))
  const nombre = (user.email || '').split('@')[0]

  return (
    <>
      <section className="space-hero">
        <p className="hero__eyebrow" style={{ color: 'var(--gold-dark)' }}>Tu espacio de sanación</p>
        <h1 className="space-hero__title">
          Hola, <em>{nombre}</em>
          {hasMembership && <span className="tag tag--accent" style={{ marginLeft: 12, verticalAlign: 'middle' }}>Miembra</span>}
        </h1>
        <p className="space-hero__sub">Aquí está tu proceso. Sin prisa, a tu ritmo, cuando lo necesites.</p>
      </section>

      <section style={{ paddingTop: 0 }}>
        <h2 className="section__title">Mis programas</h2>
        {!loaded && <p className="muted">Comprobando tus accesos…</p>}
        {loaded && mine.length === 0 && (
          <div className="panel" style={{ textAlign: 'center' }}>
            <p className="muted" style={{ margin: '0 0 1rem' }}>
              Todavía no tienes programas activos. Cuando compres en Hotmart con
              este email, aparecerán aquí automáticamente.
            </p>
            <div className="hero__actions" style={{ justifyContent: 'center' }}>
              <Link className="btn btn--primary" to="/programas">Explorar programas</Link>
              <a className="btn btn--ghost" href={MEMBERSHIP.checkout} target="_blank" rel="noreferrer">Hazte miembra</a>
            </div>
          </div>
        )}
        {mine.length > 0 && (
          <div className="space-grid">
            {mine.map((c) => <MyProgramCard key={c.id} course={c} />)}
          </div>
        )}
      </section>

      {loaded && myBooks.length > 0 && (
        <section style={{ paddingTop: 0 }}>
          <h2 className="section__title">Mis libros</h2>
          <div className="space-books-grid">
            {myBooks.map((b) => <MyBookCard key={b.id} book={b} />)}
          </div>
        </section>
      )}

      {loaded && otros.length > 0 && (
        <section style={{ paddingTop: 0 }}>
          <h2 className="section__title">Sigue tu camino</h2>
          <div className="space-grid">
            {otros.map((c) => (
              <Link className="space-card space-card--locked" to={`/cursos/${c.id}`} key={c.id}>
                <div className="space-card__cover" style={{ backgroundImage: `url(${c.image})` }}>
                  <span className="course-card__badge" style={{ background: c.accent }}>{c.cover}</span>
                </div>
                <div className="space-card__body">
                  <h3 className="space-card__title">{c.title}</h3>
                  <p className="muted" style={{ margin: 0, fontSize: '0.95rem' }}>{c.subtitle}</p>
                  <span className="space-card__cta">Ver programa →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section style={{ paddingTop: 0 }}>
        <button
          className="btn btn--ghost"
          onClick={async () => { await signOut(); navigate('/') }}
        >
          Cerrar sesión
        </button>
      </section>
    </>
  )
}
