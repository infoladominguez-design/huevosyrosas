import { supabase } from './supabase.js'
import { previews } from '../data/previews.js'

// Obtiene el cuerpo de una lección.
// - Vista previa gratuita: disponible directamente en el cliente.
// - Resto: se pide a /api/content, que verifica la compra antes de devolverlo.
// Devuelve { blocks } o { locked: true } si no hay acceso.
export async function fetchLessonContent(programId, lessonId, isFree) {
  const key = `${programId}:${lessonId}`
  if (isFree && previews[key]) return { blocks: previews[key] }

  const token = supabase
    ? (await supabase.auth.getSession()).data.session?.access_token
    : null

  const res = await fetch(
    `/api/content?program=${encodeURIComponent(programId)}&lesson=${encodeURIComponent(lessonId)}`,
    { headers: token ? { Authorization: `Bearer ${token}` } : {} },
  )

  if (res.status === 200) return res.json()
  if (res.status === 401) return { locked: true, reason: 'login' }
  if (res.status === 403) return { locked: true, reason: 'buy' }
  return { error: true }
}
