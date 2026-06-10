import { Link, useParams } from 'react-router-dom'
import { getEbook } from '../data/ebooks.js'
import { useAuth } from '../lib/AuthContext.jsx'
import { useEntitlements } from '../lib/entitlements.js'
import { bookCheckout, MEMBERSHIP } from '../data/hotmart.js'
import { useStored } from '../lib/store.js'
import BookCover from '../components/BookCover.jsx'
import NotFound from './NotFound.jsx'

export default function EbookDetail() {
  const { bookId } = useParams()
  const book = getEbook(bookId)
  const { user } = useAuth()
  const { hasBook } = useEntitlements()
  const [progress] = useStored(`reading:${bookId}`, null)

  if (!book) return <NotFound />

  const owned = hasBook(book.id)
  const buyUrl = bookCheckout(book.id)
  const firstChapter = book.chapters[0]
  const readLink = (c) => `/leer/${book.id}/${c.id}`
  // Reanudar donde se quedó, o empezar por el capítulo guardado/primero.
  const resumeChapter =
    book.chapters.find((c) => c.id === progress?.chapterId) || firstChapter

  return (
    <section>
      <Link className="back-link" to="/biblioteca">← Biblioteca</Link>

      <div className="ebook-hero">
        <div className="ebook-hero__cover" style={{ '--accent': book.accent, background: book.bg }}>
          <BookCover book={book} size="lg" />
        </div>
        <div className="ebook-hero__body">
          <h1 className="ebook-hero__title">{book.title}</h1>
          <p className="ebook-hero__subtitle" style={{ color: book.accent }}>{book.subtitle}</p>
          <p className="ebook-hero__author">por {book.author} · {book.year}</p>
          <p>{book.description}</p>
          <div className="ebook-hero__meta">
            <span>📖 {book.pages} páginas</span>
            <span>⏱ ~{Math.round(book.minutes / 60)} h de lectura</span>
            <span>📑 {book.chapters.length} capítulos</span>
          </div>

          {owned ? (
            <div className="ebook-hero__actions">
              <Link className="btn btn--primary btn--cta" to={readLink(resumeChapter)}>
                {progress?.chapterId ? 'Continuar leyendo' : 'Empezar a leer'}
              </Link>
            </div>
          ) : (
            <>
              <div className="ebook-hero__actions">
                {buyUrl ? (
                  <a className="btn btn--primary btn--cta" href={buyUrl} target="_blank" rel="noreferrer">
                    Comprar · {book.price} €
                  </a>
                ) : (
                  <span className="btn btn--primary btn--cta btn--disabled" aria-disabled="true">
                    Próximamente · {book.price} €
                  </span>
                )}
                <a className="btn btn--ghost" href={MEMBERSHIP.checkout} target="_blank" rel="noreferrer">
                  Hazte miembra
                </a>
              </div>
              <p className="muted" style={{ fontSize: '0.9rem' }}>
                {firstChapter && (
                  <Link to={readLink(firstChapter)} style={{ color: 'var(--rose)', fontWeight: 600 }}>
                    Leer el primer capítulo gratis
                  </Link>
                )}
                {!user && (
                  <>
                    {' · '}
                    ¿Ya lo compraste?{' '}
                    <Link to="/entrar" style={{ color: 'var(--rose)', fontWeight: 600 }}>
                      Inicia sesión
                    </Link>
                  </>
                )}
              </p>
            </>
          )}
        </div>
      </div>

      <div className="curriculum">
        <h2 className="section__title">Índice</h2>
        <ul className="lesson-list">
          {book.chapters.map((c, i) => {
            const unlocked = c.free || owned
            const icon = c.free ? '👁' : unlocked ? '▶️' : '🔒'
            return (
              <li key={c.id}>
                {unlocked ? (
                  <Link className="lesson-row" to={readLink(c)}>
                    <span className="lesson-row__check">{icon}</span>
                    <span className="lesson-row__title">
                      <span className="chapter-num">{i + 1}.</span> {c.title}
                    </span>
                    {c.free && <span className="tag tag--accent">Gratis</span>}
                  </Link>
                ) : (
                  <div className="lesson-row lesson-row--locked">
                    <span className="lesson-row__check">{icon}</span>
                    <span className="lesson-row__title">
                      <span className="chapter-num">{i + 1}.</span> {c.title}
                    </span>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
