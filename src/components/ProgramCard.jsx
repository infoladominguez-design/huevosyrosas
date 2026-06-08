import { Link } from 'react-router-dom'

export default function ProgramCard({ p }) {
  const inner = (
    <>
      <div className="pcard__media">
        <img src={p.image} alt={p.title} loading="lazy" />
        <span className="pcard__num">{p.number}</span>
      </div>
      <div className="pcard__body">
        <span className="pcard__status">{p.status}</span>
        <h3 className="pcard__title">{p.title}</h3>
        <p className="pcard__subtitle" style={{ color: p.accent }}>{p.subtitle}</p>
        <p className="pcard__desc">{p.description}</p>
        <span className={'pcard__cta' + (p.available ? '' : ' pcard__cta--soon')}>
          {p.available ? 'Ver programa →' : 'Próximamente'}
        </span>
      </div>
    </>
  )

  const style = { background: p.bg, '--pcard-accent': p.accent }

  return p.available ? (
    <Link className="pcard" to={p.to} style={style}>{inner}</Link>
  ) : (
    <div className="pcard pcard--soon" style={style}>{inner}</div>
  )
}
