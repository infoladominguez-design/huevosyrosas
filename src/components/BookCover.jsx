// Portada de libro. Si el libro tiene `image`, muestra la portada real;
// si no, dibuja una tapa con CSS usando el `accent` y la inicial/emoji.
export default function BookCover({ book, size = 'md' }) {
  const accent = book.accent || 'var(--plum)'

  if (book.image) {
    return (
      <div className={`bookcover bookcover--img bookcover--${size}`} style={{ '--cover-accent': accent }}>
        <div className="bookcover__spine" />
        <img className="bookcover__img" src={book.image} alt={`Portada de ${book.title}`} loading="lazy" />
        <div className="bookcover__shine" />
      </div>
    )
  }

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
