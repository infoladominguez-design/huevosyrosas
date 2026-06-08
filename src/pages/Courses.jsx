import { programs, steps } from '../data/programsCatalog.js'
import { MEMBERSHIP } from '../data/hotmart.js'
import ProgramCard from '../components/ProgramCard.jsx'

export default function Courses() {
  return (
    <>
      <section className="programs-hero">
        <p className="hero__eyebrow">Programas</p>
        <h1 className="section__title" style={{ fontSize: 'clamp(2.4rem, 6vw, 3.6rem)' }}>
          Programas de sanación emocional
        </h1>
        <p className="lead" style={{ margin: '0 auto' }}>
          Cada programa nace de algo que de verdad se vive. Elige el que habla de
          lo que estás sintiendo hoy y trabájalo a tu ritmo, con guía real.
        </p>
      </section>

      <section className="programs-grid-section" style={{ paddingTop: 0 }}>
        <div className="programs-grid">
          {programs.map((p) => (
            <ProgramCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      <section className="steps">
        <p className="hero__eyebrow" style={{ textAlign: 'center', display: 'block' }}>Cómo funciona</p>
        <h2 className="section__title" style={{ textAlign: 'center' }}>Tu proceso, paso a paso</h2>
        <div className="steps__grid">
          {steps.map((s, i) => (
            <article className="step" key={i}>
              <span className="step__num">{i + 1}</span>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="membership">
        <p className="hero__eyebrow">Membresía</p>
        <h2 className="section__title">Acompáñate todo el camino</h2>
        <p className="membership__text">
          Hazte miembra y accede a todos los programas de sanación emocional
          mientras los necesites. A tu ritmo, sin prisa.
        </p>
        <a className="btn btn--primary btn--cta" href={MEMBERSHIP.checkout} target="_blank" rel="noreferrer">
          Hazte miembra
        </a>
      </section>
    </>
  )
}
