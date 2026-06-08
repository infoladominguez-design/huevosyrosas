import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY

// Si todavía no están las variables de entorno, la app funciona como escaparate
// (vista previa + botones de compra) y el login queda desactivado.
export const supabase = url && anon ? createClient(url, anon) : null
export const authConfigured = Boolean(supabase)
