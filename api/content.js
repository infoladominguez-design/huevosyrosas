// GET /api/content?program=<id>&lesson=<id>
// Devuelve el cuerpo de la lección solo si: es vista previa gratuita, o el
// usuario autenticado ha comprado el programa (o tiene la membresía).
import { content } from './_lib/content.js'
import { freeKeys } from './_lib/free.js'
import { getUser } from './_lib/supabaseAdmin.js'
import { hasAccess } from './_lib/entitlements.js'

export default async function handler(req, res) {
  const program = req.query.program
  const lesson = req.query.lesson
  const key = `${program}:${lesson}`

  const blocks = content[key]
  if (!blocks) {
    res.status(404).json({ error: 'Lección no encontrada' })
    return
  }

  // Vista previa gratuita
  if (freeKeys.has(key)) {
    res.status(200).json({ blocks })
    return
  }

  const user = await getUser(req)
  if (!user) {
    res.status(401).json({ error: 'Inicia sesión' })
    return
  }

  const ok = await hasAccess(user.email, program)
  if (!ok) {
    res.status(403).json({ error: 'Necesitas comprar este programa' })
    return
  }

  res.status(200).json({ blocks })
}
