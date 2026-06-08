import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../lib/AuthContext.jsx'
import { useEntitlements } from '../lib/entitlements.js'
import { courses } from '../data/catalog.js'
import { MEMBERSHIP } from '../data/hotmart.js'

export default function Account() {
  const { user, loading, signOut, configured } = useAuth()
  const { hasMembership, hasProgram, loaded } = useEntitlements()
  const navigate = useNavigate()

  if (!configured) {
    return (
      <section className="auth">
        <div className="auth__card panel">
          <p className="muted">El área de cuenta todavía no está activada.</p>
          <Link className="btn btn--ghost" to="/">Volver al inicio</Link>
        </div>
      </section>
    )
  }

  if (loading) return <section className="auth"><p className="muted">Cargando…</p></section>

  if (!user) {
    return (
      <section className="auth">
        <div className="auth__card panel">
          <p>No has iniciado sesión.</p>
          <Link className="btn btn--primary" to="/entrar">Entrar</Link>
        </div>
      </section>
    )
  }

  const myPrograms = courses.filter((c) => hasProgram(c.id))

  return (
    <section>
      <h1 className="section__title">Mi cuenta</h1>
      <p className="lead">
        Sesión iniciada como <strong>{user.email}</strong>
        {hasMembership && <span className="tag tag--accent" style={{ marginLeft: 8 }}>Miembra</span>}
      </p>

      <h2 style={{ fontSize: '1.3rem' }}>Mis programas</h2>
      {!loaded && <p className="muted">Comprobando tus compras…</p>}
      {loaded && myPrograms.length === 0 && (
        <p className="muted">
          Aún no tienes ningún programa. Explora el{' '}
          <Link to="/cursos" style={{ color: 'var(--pink)' }}>catálogo</Link> o{' '}
          <a href={MEMBERSHIP.checkout} style={{ color: 'var(--pink)' }}>hazte miembra</a>.
        </p>
      )}
      <div className="course-grid" style={{ marginTop: '1rem' }}>
        {myPrograms.map((c) => (
          <Link className="course-card" to={`/cursos/${c.id}`} key={c.id}>
            <div className="course-card__cover" style={{ backgroundImage: `url(${c.image})` }}>
              <span className="course-card__badge" style={{ background: c.accent }}>{c.cover}</span>
            </div>
            <div className="course-card__body">
              <h3 className="course-card__title">{c.title}</h3>
              <p className="course-card__subtitle">{c.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>

      <p style={{ marginTop: '2.5rem' }}>
        <button
          className="btn btn--ghost"
          onClick={async () => {
            await signOut()
            navigate('/')
          }}
        >
          Cerrar sesión
        </button>
      </p>
    </section>
  )
}
