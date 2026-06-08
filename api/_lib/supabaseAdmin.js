// Cliente Supabase con permisos de servidor (service role). SOLO en backend.
import { createClient } from '@supabase/supabase-js'

const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

export const admin =
  url && serviceKey
    ? createClient(url, serviceKey, { auth: { persistSession: false } })
    : null

// Verifica el token de Supabase del usuario y devuelve { id, email } o null.
export async function getUser(req) {
  if (!admin) return null
  const auth = req.headers.authorization || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null
  if (!token) return null
  const { data, error } = await admin.auth.getUser(token)
  if (error || !data?.user) return null
  return { id: data.user.id, email: data.user.email }
}
