// POST /api/hotmart-webhook
// Hotmart llama aquí en cada compra/cancelación. Verificamos el HOTTOK,
// resolvemos el producto y guardamos/quitamos el acceso del email comprador.
import { admin } from './_lib/supabaseAdmin.js'
import { resolveProduct } from './_lib/products.js'

async function readJson(req) {
  if (req.body && typeof req.body === 'object') return req.body
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body)
    } catch {
      return {}
    }
  }
  const chunks = []
  for await (const c of req) chunks.push(typeof c === 'string' ? Buffer.from(c) : c)
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}')
  } catch {
    return {}
  }
}

const GRANT = new Set([
  'PURCHASE_APPROVED',
  'PURCHASE_COMPLETE',
  'PURCHASE_COMPLETED',
  'SUBSCRIPTION_REACTIVATION',
])
const REVOKE = new Set([
  'PURCHASE_REFUNDED',
  'PURCHASE_CHARGEBACK',
  'PURCHASE_PROTEST',
  'PURCHASE_EXPIRED',
  'PURCHASE_CANCELED',
  'SUBSCRIPTION_CANCELLATION',
])

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método no permitido' })
    return
  }

  const expected = process.env.HOTMART_HOTTOK
  const got = req.headers['x-hotmart-hottok']
  const body = await readJson(req)
  const hottok = got || body.hottok

  if (expected && hottok !== expected) {
    res.status(401).json({ error: 'HOTTOK inválido' })
    return
  }

  if (!admin) {
    res.status(200).json({ ok: true, note: 'Supabase no configurado todavía' })
    return
  }

  const event = body.event || body.status || ''
  const data = body.data || body
  const email = (
    data?.buyer?.email ||
    data?.subscriber?.email ||
    body?.email ||
    ''
  ).toLowerCase()
  const product = data?.product || {}
  const programId =
    resolveProduct(product.id) ||
    resolveProduct(product.ucode) ||
    resolveProduct(product.name)

  // Log útil para configurar el mapa de productos durante las pruebas.
  console.log('[hotmart]', { event, email, product: { id: product.id, ucode: product.ucode, name: product.name }, resolved: programId })

  if (!email || !programId) {
    res.status(200).json({ ok: true, ignored: true, reason: 'sin email o producto no mapeado' })
    return
  }

  const status = GRANT.has(event) ? 'active' : REVOKE.has(event) ? 'revoked' : null
  if (!status) {
    res.status(200).json({ ok: true, ignored: true, reason: `evento ${event} no gestionado` })
    return
  }

  const { error } = await admin.from('entitlements').upsert(
    {
      email,
      product_code: programId,
      status,
      hotmart_event: event,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'email,product_code' },
  )

  if (error) {
    console.error('[hotmart] error guardando entitlement', error)
    res.status(500).json({ error: 'No se pudo guardar el acceso' })
    return
  }

  res.status(200).json({ ok: true, email, product_code: programId, status })
}
