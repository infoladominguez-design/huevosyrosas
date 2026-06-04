import { Link } from 'react-router-dom'
import { about, contact, brand, features } from '../content.js'

export default function About() {
  return (
    <>
      <section className="about" id="about">
        <h2 className="section__title">{about.title}</h2>
        {about.paragraphs.map((p, i) => (
          <p className="about__text" key={i}>{p}</p>
        ))}
      </section>

      <section id="propuesta">
        <div className="features__grid">
          {features.map((f) => (
            <article className="card" key={f.title}>
              <span className="card__icon" aria-hidden="true">{f.icon}</span>
              <h3 className="card__title">{f.title}</h3>
              <p className="card__text">{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="section__title">{contact.title}</h2>
        <p className="contact__text">{contact.text}</p>
        <a className="btn btn--primary" href={`mailto:${brand.email}`}>{brand.email}</a>
        <p style={{ marginTop: '1.5rem' }}>
          <Link className="btn btn--ghost" to="/cursos">Explorar los cursos</Link>
        </p>
      </section>
    </>
  )
}
