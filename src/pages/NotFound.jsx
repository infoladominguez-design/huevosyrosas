import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="hero">
      <p className="hero__eyebrow">Error 404</p>
      <h1 className="hero__title" style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)' }}>
        Aquí no hay nada
      </h1>
      <p className="hero__subtitle">
        La página que buscas no existe o se ha movido.
      </p>
      <div className="hero__actions">
        <Link className="btn btn--primary" to="/">Volver al inicio</Link>
        <Link className="btn btn--ghost" to="/cursos">Ver cursos</Link>
      </div>
    </section>
  )
}
