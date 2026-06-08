import { Link } from 'react-router-dom'
import { hero, relatable, membership } from '../content.js'
import { programs } from '../data/programsCatalog.js'
import { MEMBERSHIP } from '../data/hotmart.js'
import ProgramCard from '../components/ProgramCard.jsx'

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
          <Link className="btn btn--primary btn--cta" to="/programas">Ver programas</Link>
          <Link className="btn btn--ghost" to="/comunidad">Unirme a la comunidad</Link>
        </div>
      </section>

      <section className="relatable">
        <p className="hero__eyebrow">{relatable.eyebrow}</p>
        <h2 className="section__title">{relatable.title}</h2>
        {relatable.paragraphs.map((p, i) => (
          <p className="relatable__text" key={i}>{p}</p>
        ))}
      </section>

      <section id="programas">
        <h2 className="section__title" style={{ textAlign: 'center' }}>Programas</h2>
        <div className="programs-grid">
          {programs.map((p) => (
            <ProgramCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      <section className="membership">
        <p className="hero__eyebrow">{membership.eyebrow}</p>
        <h2 className="section__title">{membership.title}</h2>
        <p className="membership__text">{membership.text}</p>
        <a className="btn btn--primary btn--cta" href={MEMBERSHIP.checkout} target="_blank" rel="noreferrer">
          {membership.cta}
        </a>
      </section>
    </>
  )
}
