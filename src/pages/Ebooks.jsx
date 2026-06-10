import { Link } from 'react-router-dom'
import { ebooks } from '../data/ebooks.js'
import { useEntitlements } from '../lib/entitlements.js'
import { MEMBERSHIP } from '../data/hotmart.js'
import BookCover from '../components/BookCover.jsx'

function BookCard({ book }) {
  const { hasBook } = useEntitlements()
  const owned = hasBook(book.id)
  return (
    <Link className="ebook-card" to={`/biblioteca/${book.id}`} style={{ '--accent': book.accent, background: book.bg }}>
      <BookCover book={book} />
      <div className="ebook-card__body">
        <h3 className="ebook-card__title">{book.title}</h3>
        <p className="ebook-card__subtitle">{book.subtitle}</p>
        <p className="ebook-card__desc">{book.description}</p>
        <div className="ebook-card__meta">
          <span>📖 {book.pages} págs.</span>
          <span>⏱ ~{Math.round(book.minutes / 60)} h</span>
        </div>
        <span className="ebook-card__cta">
          {owned ? '📚 Leer ahora →' : `Ver libro · ${book.price} €`}
        </span>
      </div>
    </Link>
  )
}

export default function Ebooks() {
  return (
    <>
      <section className="programs-hero">
        <p className="hero__eyebrow">Biblioteca</p>
        <h1 className="section__title" style={{ fontSize: 'clamp(2.4rem, 6vw, 3.6rem)' }}>
          E-books para leer cuando lo necesites
        </h1>
        <p className="lead" style={{ margin: '0 auto' }}>
          Lee el primer capítulo gratis. Cuando compres un libro, queda en tu
          biblioteca para leerlo dentro de la web, a tu ritmo, desde cualquier
          dispositivo.
        </p>
      </section>

      <section className="programs-grid-section" style={{ paddingTop: 0 }}>
        <div className="ebooks-grid">
          {ebooks.map((b) => (
            <BookCard key={b.id} book={b} />
          ))}
        </div>
      </section>

      <section className="membership">
        <p className="hero__eyebrow">Membresía</p>
        <h2 className="section__title">¿Quieres leerlos todos?</h2>
        <p className="membership__text">
          Con la membresía accedes a todos los libros y programas mientras seas
          miembra. Toda la biblioteca, a tu ritmo.
        </p>
        <a className="btn btn--primary btn--cta" href={MEMBERSHIP.checkout} target="_blank" rel="noreferrer">
          Hazte miembra
        </a>
      </section>
    </>
  )
}
