// Portada de libro dibujada con CSS (sin imágenes externas).
// Usa el `accent` y la inicial/emoji del libro para componer una tapa.
export default function BookCover({ book, size = 'md' }) {
  const accent = book.accent || 'var(--plum)'
  return (
    <div className={`bookcover bookcover--${size}`} style={{ '--cover-accent': accent }}>
      <div className="bookcover__spine" />
      <div className="bookcover__face">
        <span className="bookcover__emoji" aria-hidden="true">{book.cover}</span>
        <span className="bookcover__title">{book.title}</span>
        <span className="bookcover__author">{book.author}</span>
      </div>
      <div className="bookcover__shine" />
    </div>
  )
}
