// Persistencia local (localStorage) para el prototipo: perfil, progreso,
// comentarios, reseñas y foro. Cuando exista backend, basta con reemplazar
// estos hooks por llamadas a la API manteniendo la misma firma.
import { useCallback, useEffect, useState } from 'react'

const PREFIX = 'hyr:'

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(PREFIX + key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

function write(key, value) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value))
    // Avisa a otros hooks/pestañas que escuchan la misma clave.
    window.dispatchEvent(new CustomEvent('hyr:store', { detail: { key } }))
  } catch {
    /* almacenamiento lleno o no disponible */
  }
}

// Hook genérico sincronizado con localStorage y entre componentes.
export function useStored(key, fallback) {
  const [value, setValue] = useState(() => read(key, fallback))

  useEffect(() => {
    const onChange = (e) => {
      if (e.detail?.key === key) setValue(read(key, fallback))
    }
    window.addEventListener('hyr:store', onChange)
    return () => window.removeEventListener('hyr:store', onChange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  const update = useCallback(
    (next) => {
      const resolved = typeof next === 'function' ? next(read(key, fallback)) : next
      write(key, resolved)
      setValue(resolved)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key],
  )

  return [value, update]
}

function uid() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36)
}

// --- Perfil (identidad ligera para firmar comentarios/foro) ---
export function useProfile() {
  const [name, setName] = useStored('profile:name', '')
  return { name, setName }
}

// --- Progreso por curso ---
export function useProgress(courseId) {
  const [done, setDone] = useStored(`progress:${courseId}`, [])
  const isDone = (lessonId) => done.includes(lessonId)
  const toggle = (lessonId) =>
    setDone((prev) =>
      prev.includes(lessonId) ? prev.filter((id) => id !== lessonId) : [...prev, lessonId],
    )
  return { done, isDone, toggle, count: done.length }
}

// --- Comentarios por lección ---
export function useComments(lessonKey) {
  const [items, setItems] = useStored(`comments:${lessonKey}`, [])
  const add = (author, text) =>
    setItems((prev) => [
      { id: uid(), author: author || 'Anónimo', text, ts: Date.now() },
      ...prev,
    ])
  const remove = (id) => setItems((prev) => prev.filter((c) => c.id !== id))
  return { items, add, remove }
}

// --- Reseñas y valoraciones por curso ---
export function useReviews(courseId) {
  const [items, setItems] = useStored(`reviews:${courseId}`, [])
  const add = (author, rating, text) =>
    setItems((prev) => [
      { id: uid(), author: author || 'Anónimo', rating, text, ts: Date.now() },
      ...prev,
    ])
  const remove = (id) => setItems((prev) => prev.filter((r) => r.id !== id))
  const average = items.length
    ? items.reduce((s, r) => s + r.rating, 0) / items.length
    : 0
  return { items, add, remove, average, count: items.length }
}

// --- Foro / comunidad ---
export function useForum() {
  const [threads, setThreads] = useStored('forum:threads', [])
  const addThread = (author, title, text) => {
    const id = uid()
    setThreads((prev) => [
      { id, author: author || 'Anónimo', title, text, ts: Date.now(), replies: [] },
      ...prev,
    ])
    return id
  }
  const addReply = (threadId, author, text) =>
    setThreads((prev) =>
      prev.map((t) =>
        t.id === threadId
          ? {
              ...t,
              replies: [
                ...t.replies,
                { id: uid(), author: author || 'Anónimo', text, ts: Date.now() },
              ],
            }
          : t,
      ),
    )
  return { threads, addThread, addReply }
}

export function formatDate(ts) {
  return new Date(ts).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  })
}
