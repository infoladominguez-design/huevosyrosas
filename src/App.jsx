import { brand, hero, features, about, contact } from './content.js'

function Nav() {
  return (
    <header className="nav">
      <a className="nav__brand" href="#top">
        <span className="nav__mark" aria-hidden="true">🥚🌹</span>
        {brand.name}
      </a>
      <nav className="nav__links">
        <a href="#features">Propuesta</a>
        <a href="#about">Nosotros</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <p className="hero__eyebrow">{hero.eyebrow}</p>
      <h1 className="hero__title">{hero.title}</h1>
      <p className="hero__subtitle">{hero.subtitle}</p>
      <div className="hero__actions">
        <a className="btn btn--primary" href="#about">
          {hero.ctaPrimary}
        </a>
        <a className="btn btn--ghost" href="#contact">
          {hero.ctaSecondary}
        </a>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="features" id="features">
      <div className="features__grid">
        {features.map((f) => (
          <article className="card" key={f.title}>
            <span className="card__icon" aria-hidden="true">
              {f.icon}
            </span>
            <h3 className="card__title">{f.title}</h3>
            <p className="card__text">{f.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about" id="about">
      <h2 className="section__title">{about.title}</h2>
      {about.paragraphs.map((p, i) => (
        <p className="about__text" key={i}>
          {p}
        </p>
      ))}
    </section>
  )
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section__title">{contact.title}</h2>
      <p className="contact__text">{contact.text}</p>
      <a className="btn btn--primary" href={`mailto:${brand.email}`}>
        {brand.email}
      </a>
    </section>
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

export default function App() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
