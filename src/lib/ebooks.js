import { supabase } from './supabase.js'
import { ebookPreviews } from '../data/ebooks.js'

// Obtiene el cuerpo de un capítulo de un e-book.
// - Vista previa gratuita: disponible directamente en el cliente.
// - Resto: se pide a /api/ebook, que verifica la compra antes de devolverlo.
// Devuelve { blocks } o { locked: true, reason } si no hay acceso.
export async function fetchEbookChapter(bookId, chapterId, isFree) {
  const key = `${bookId}:${chapterId}`
  if (isFree && ebookPreviews[key]) return { blocks: ebookPreviews[key] }

  const token = supabase
    ? (await supabase.auth.getSession()).data.session?.access_token
    : null

  const res = await fetch(
    `/api/ebook?book=${encodeURIComponent(bookId)}&chapter=${encodeURIComponent(chapterId)}`,
    { headers: token ? { Authorization: `Bearer ${token}` } : {} },
  )

  if (res.status === 200) return res.json()
  if (res.status === 401) return { locked: true, reason: 'login' }
  if (res.status === 403) return { locked: true, reason: 'buy' }
  return { error: true }
}
