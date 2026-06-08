import { eventsHero, events } from '../data/events.js'
import { MEMBERSHIP } from '../data/hotmart.js'

function EventCard({ ev }) {
  const cta = ev.forMembers ? MEMBERSHIP.checkout : 'https://mujereshuevosyrosas.com/eventos'
  return (
    <article className="event-card" style={{ background: ev.bg }}>
      <div className="event-card__date">
        <span className="event-card__day">{ev.day}</span>
        <span className="event-card__month">{ev.monthName}</span>
        <span className="event-card__year">{ev.year}</span>
      </div>
      <div className="event-card__media">
        <img src={ev.img} alt={ev.title} loading="lazy" />
      </div>
      <div className="event-card__body">
        <span className="event-card__tag" style={{ background: ev.accent }}>{ev.tag}</span>
        <h3 className="event-card__title">{ev.title}</h3>
        <p className="event-card__subtitle" style={{ color: ev.accent }}>{ev.subtitle}</p>
        <p className="event-card__desc">{ev.description}</p>
        <div className="event-card__foot">
          <span className="event-card__time">🕘 {ev.time}</span>
          <a className="btn btn--primary btn--cta" href={cta} target="_blank" rel="noreferrer">
            {ev.forMembers ? 'Hazte miembra' : 'Quiero unirme ✨'}
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Events() {
  return (
    <>
      <section className="events-hero">
        <p className="events-hero__eyebrow">{eventsHero.eyebrow}</p>
        <h1 className="events-hero__title">
          {eventsHero.titleA} <em>{eventsHero.titleEm}</em>
        </h1>
        <p className="events-hero__subtitle">{eventsHero.subtitle}</p>
      </section>

      <section className="events-list">
        <h2 className="section__title" style={{ fontStyle: 'italic', textAlign: 'center' }}>
          ¿Qué se viene?
        </h2>
        <div className="events-grid">
          {events.map((ev) => (
            <EventCard key={ev.id} ev={ev} />
          ))}
        </div>
      </section>
    </>
  )
}
