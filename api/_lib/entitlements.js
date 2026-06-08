// Comprueba en Supabase si un email tiene acceso a un programa.
import { admin } from './supabaseAdmin.js'
import { MEMBERSHIP_CODE } from './products.js'

export async function hasAccess(email, programId) {
  if (!admin || !email) return false
  const { data } = await admin
    .from('entitlements')
    .select('product_code,status')
    .eq('email', email.toLowerCase())
    .eq('status', 'active')

  const codes = (data || []).map((e) => e.product_code)
  if (codes.includes('membership') || codes.includes(MEMBERSHIP_CODE)) return true
  return codes.includes(programId)
}
