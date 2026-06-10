// GET /api/ebook?book=<id>&chapter=<id>
// Devuelve el cuerpo de un capítulo solo si: es vista previa gratuita, o el
// usuario autenticado ha comprado el libro (o tiene la membresía).
import { ebookContent, ebookFreeKeys } from './_lib/ebooks.js'
import { getUser } from './_lib/supabaseAdmin.js'
import { hasAccess } from './_lib/entitlements.js'

export default async function handler(req, res) {
  const book = req.query.book
  const chapter = req.query.chapter
  const key = `${book}:${chapter}`

  const blocks = ebookContent[key]
  if (!blocks) {
    res.status(404).json({ error: 'Capítulo no encontrado' })
    return
  }

  // Vista previa gratuita
  if (ebookFreeKeys.has(key)) {
    res.status(200).json({ blocks })
    return
  }

  const user = await getUser(req)
  if (!user) {
    res.status(401).json({ error: 'Inicia sesión' })
    return
  }

  const ok = await hasAccess(user.email, book)
  if (!ok) {
    res.status(403).json({ error: 'Necesitas comprar este libro' })
    return
  }

  res.status(200).json({ blocks })
}
