import { useState } from 'react'
import { useProfile, useForum, formatDate } from '../lib/store.js'

function Thread({ thread, addReply, name }) {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    addReply(thread.id, name, text.trim())
    setText('')
  }

  return (
    <article className="thread">
      <button className="thread__head" onClick={() => setOpen((v) => !v)}>
        <div>
          <h3 className="thread__title">{thread.title}</h3>
          <p className="thread__meta">
            {thread.author} · {formatDate(thread.ts)} · {thread.replies.length} respuesta
            {thread.replies.length === 1 ? '' : 's'}
          </p>
        </div>
        <span className="thread__toggle">{open ? '−' : '+'}</span>
      </button>

      {open && (
        <div className="thread__body">
          <p className="thread__text">{thread.text}</p>
          <ul className="reply-list">
            {thread.replies.map((r) => (
              <li className="reply" key={r.id}>
                <div className="comment__head">
                  <strong>{r.author}</strong>
                  <span className="comment__date">{formatDate(r.ts)}</span>
                </div>
                <p className="comment__text">{r.text}</p>
              </li>
            ))}
          </ul>
          <form className="form form--inline" onSubmit={submit}>
            <input
              className="form__input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Responder…"
            />
            <button className="btn btn--primary" type="submit">Responder</button>
          </form>
        </div>
      )}
    </article>
  )
}

export default function Forum() {
  const { name } = useProfile()
  const { threads, addThread, addReply } = useForum()
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!title.trim() || !text.trim()) return
    addThread(name, title.trim(), text.trim())
    setTitle('')
    setText('')
  }

  return (
    <section>
      <h2 className="section__title">Comunidad</h2>
      <p className="lead">
        Comparte tus avances, resuelve dudas y conoce a otras personas que, como
        tú, disfrutan de los pequeños detalles.
      </p>

      <form className="form panel" onSubmit={submit}>
        <h3 style={{ margin: '0 0 0.5rem' }}>Abrir un tema</h3>
        <input
          className="form__input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título de tu tema"
        />
        <textarea
          className="form__input"
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Cuéntanos más…"
        />
        <button className="btn btn--primary" type="submit">Publicar tema</button>
      </form>

      <div className="thread-list">
        {threads.map((t) => (
          <Thread key={t.id} thread={t} addReply={addReply} name={name} />
        ))}
        {!threads.length && (
          <p className="muted">Todavía no hay temas. ¡Abre el primero!</p>
        )}
      </div>
    </section>
  )
}
