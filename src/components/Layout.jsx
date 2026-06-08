import { Link, NavLink, Outlet } from 'react-router-dom'
import { brand } from '../content.js'
import { useAuth } from '../lib/AuthContext.jsx'

function Nav() {
  const { user, configured } = useAuth()
  return (
    <header className="nav">
      <Link className="nav__brand" to="/">
        <span className="nav__mark" aria-hidden="true">🥚🌹</span>
        {brand.name}
      </Link>
      <nav className="nav__links">
        <NavLink to="/programas">Programas</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/comunidad">Comunidad</NavLink>
        <NavLink to="/nosotros">Nosotros</NavLink>
      </nav>
      {configured &&
        (user ? (
          <Link className="btn btn--ghost nav__cta" to="/cuenta">Mi cuenta</Link>
        ) : (
          <Link className="btn btn--primary nav__cta" to="/entrar">Entrar</Link>
        ))}
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {brand.name}. {brand.tagline}
      </p>
    </footer>
  )
}

export default function Layout() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
