import { useEffect, useState } from 'react'
import { supabase } from './supabase.js'
import { useAuth } from './AuthContext.jsx'
import { MEMBERSHIP, programCode } from '../data/hotmart.js'

// Lee las compras del usuario (por email) desde Supabase. La protección real
// del contenido la hace el servidor en /api/content; esto es solo para la UI.
export function useEntitlements() {
  const { user } = useAuth()
  const [codes, setCodes] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let active = true
    if (!supabase || !user?.email) {
      setCodes([])
      setLoaded(true)
      return
    }
    setLoaded(false)
    supabase
      .from('entitlements')
      .select('product_code,status')
      .then(({ data }) => {
        if (!active) return
        const active_codes = (data || [])
          .filter((e) => e.status === 'active')
          .map((e) => e.product_code)
        setCodes(active_codes)
        setLoaded(true)
      })
    return () => {
      active = false
    }
  }, [user?.email])

  const hasMembership = codes.includes(MEMBERSHIP.code)
  const hasProgram = (programId) =>
    hasMembership || codes.includes(programCode(programId))

  return { codes, hasMembership, hasProgram, loaded }
}
