// Mapa de productos de Hotmart (lado servidor).
//
// El webhook de Hotmart identifica los productos con SU id. Como ese id puede
// variar según la cuenta, lo dejamos configurable por variable de entorno:
//
//   HOTMART_PRODUCT_MAP = {"<hotmart_product_id>":"me-duele-estar-soltera",
//                          "<hotmart_membership_id>":"membership"}
//
// "membership" da acceso a TODOS los programas.
// Mientras no se configure, se usa el mapa por defecto con los códigos públicos.

export const MEMBERSHIP_CODE = process.env.HOTMART_MEMBERSHIP_CODE || 'B104720539X'

const DEFAULT_MAP = {
  D105703744B: 'me-duele-estar-soltera',
  B104720539X: 'membership',
}

export function productMap() {
  try {
    const fromEnv = process.env.HOTMART_PRODUCT_MAP
    return fromEnv ? { ...DEFAULT_MAP, ...JSON.parse(fromEnv) } : DEFAULT_MAP
  } catch {
    return DEFAULT_MAP
  }
}

// Dado un identificador de producto de Hotmart, devuelve nuestro programId
// o 'membership' o null.
export function resolveProduct(hotmartId) {
  if (hotmartId == null) return null
  return productMap()[String(hotmartId)] || null
}
