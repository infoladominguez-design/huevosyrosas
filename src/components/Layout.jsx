import { Link, NavLink, Outlet } from 'react-router-dom'
import { brand } from '../content.js'
import { useProfile } from '../lib/store.js'

function Nav() {
  const { name, setName } = useProfile()
  return (
    <header className="nav">
      <Link className="nav__brand" to="/">
        <span className="nav__mark" aria-hidden="true">🥚🌹</span>
        {brand.name}
      </Link>
      <nav className="nav__links">
        <NavLink to="/cursos">Cursos</NavLink>
        <NavLink to="/comunidad">Comunidad</NavLink>
        <NavLink to="/nosotros">Nosotros</NavLink>
      </nav>
      <input
        className="nav__name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Tu nombre"
        aria-label="Tu nombre"
      />
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
