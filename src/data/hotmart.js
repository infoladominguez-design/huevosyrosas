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

// Mapa: id de e-book en la web -> producto de Hotmart.
// `code` debe coincidir con el id del libro que guarda el webhook como
// product_code (ver HOTMART_PRODUCT_MAP en api/_lib/products.js). Mientras no
// haya enlace de pago real, `checkout` queda como null (la web funciona como
// escaparate: muestra el libro con vista previa y bloquea el resto).
export const BOOK_HOTMART = {
  'el-arte-de-soltar': { code: 'el-arte-de-soltar', checkout: null },
  'cartas-a-mi-nina-interior': { code: 'cartas-a-mi-nina-interior', checkout: null },
  'no-estas-rota': { code: 'no-estas-rota', checkout: null },
}

export function bookCheckout(bookId) {
  return BOOK_HOTMART[bookId]?.checkout || null
}

export function bookCode(bookId) {
  return BOOK_HOTMART[bookId]?.code || bookId
}
