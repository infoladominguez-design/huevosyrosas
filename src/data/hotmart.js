// Configuración de Hotmart (lado cliente).
// `code` es el código del producto en Hotmart (el del final de la URL).
// `checkout` es el enlace de pago directo.

export const MEMBERSHIP = {
  code: 'B104720539X',
  checkout: 'https://pay.hotmart.com/B104720539X?off=exa4u4xs',
  name: 'Membresía de Sanación Emocional',
  blurb: 'Acceso a TODOS los programas mientras seas miembra.',
}

// Mapa: id de programa en la web -> producto de Hotmart
export const PROGRAM_HOTMART = {
  'me-duele-estar-soltera': {
    code: 'D105703744B',
    checkout: 'https://pay.hotmart.com/D105703744B',
  },
}

export function programCheckout(programId) {
  return PROGRAM_HOTMART[programId]?.checkout || null
}

export function programCode(programId) {
  return PROGRAM_HOTMART[programId]?.code || null
}
