import { useMemo, useState } from 'react'
import { blogHero, posts } from '../data/blog.js'

function ArticleCard({ p, featured }) {
  return (
    <a
      className={'article-card' + (featured ? ' article-card--featured' : '')}
      href={p.url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="article-card__media">
        <img src={p.img} alt={p.title} loading="lazy" />
        <span className="article-card__cat" style={{ background: p.accent }}>{p.category}</span>
      </div>
      <div className="article-card__body">
        <h3 className="article-card__title">{p.title}</h3>
        <p className="article-card__excerpt">{p.excerpt}</p>
        {featured && p.quote && <p className="article-card__quote">“{p.quote}”</p>}
        <div className="article-card__meta">
          <span>{p.date}</span>
          <span>·</span>
          <span>{p.readTime} de lectura</span>
          <span className="article-card__cta">Leer artículo →</span>
        </div>
      </div>
    </a>
  )
}

export default function Blog() {
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('Todos')

  const categories = useMemo(
    () => ['Todos', ...Array.from(new Set(posts.map((p) => p.category)))],
    [],
  )

  const filtered = posts.filter((p) => {
    const okCat = cat === 'Todos' || p.category === cat
    const q = query.toLowerCase()
    const okQ =
      q === '' ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q)
    return okCat && okQ
  })
  const featured = filtered.find((p) => p.featured) || filtered[0]
  const rest = featured ? filtered.filter((p) => p !== featured) : filtered

  return (
    <>
      <section
        className="blog-hero"
        style={{ backgroundImage: `linear-gradient(rgba(28,20,36,0.86), rgba(28,20,36,0.92)), url(${blogHero.image})` }}
      >
        <p className="blog-hero__eyebrow">{blogHero.eyebrow}</p>
        <h1 className="blog-hero__title">
          {blogHero.titleA} <em>{blogHero.titleEm}</em>
          <br />
          <span className="blog-hero__lav">{blogHero.titleB}</span>
        </h1>
        <p className="blog-hero__subtitle">{blogHero.subtitle}</p>
        <input
          className="blog-hero__search"
          type="text"
          placeholder="Buscar artículos…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </section>

      <div className="blog-filters">
        <div className="blog-filters__inner">
          {categories.map((c) => (
            <button
              key={c}
              className={'blog-pill' + (cat === c ? ' blog-pill--active' : '')}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <section className="blog-list">
        {filtered.length === 0 && (
          <p className="muted">No hay artículos que coincidan con tu búsqueda.</p>
        )}
        {featured && <ArticleCard p={featured} featured />}
        {rest.length > 0 && (
          <div className="article-grid">
            {rest.map((p) => (
              <ArticleCard key={p.slug} p={p} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
