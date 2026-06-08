// Catálogo de programas para la página /programas (estilo Mujeres Rosa).
// Datos e imágenes de la marca. `available` = ya disponible en esta plataforma
// (con contenido); el resto se muestran como "Próximamente".

const IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663382040659/D6PcER9qYpKZBRs66hrLc4'

export const programs = [
  {
    slug: 'mama-necesito-sanar',
    number: '01',
    status: '✨ Disponible ahora',
    title: 'Mamá, Necesito Sanar',
    subtitle: 'Sana el vínculo con mamá',
    description:
      'Un proceso íntimo para sanar la relación con tu madre, liberar patrones heredados y encontrar paz en ese vínculo que tanto te ha marcado.',
    image: `${IMG}/mama-necesito-sanar-banner-mayo_293958ef.png`,
    accent: '#caa92f',
    bg: '#FEFAE8',
    available: false,
  },
  {
    slug: 'me-duele-estar-soltera',
    number: '02',
    status: 'Disponible ahora',
    title: 'Me Duele Estar Soltera',
    subtitle: 'El arte de organizar mis emociones',
    description:
      'Estar soltera duele cuando nadie te enseñó a estar contigo misma. Aquí aprendes a organizar tus emociones, entender lo que sientes y dejar de buscar en otros lo que puedes darte tú.',
    image: `${IMG}/prog-soltera-v1-CZVYjyrWEAQnTKxqrvjwPa.webp`,
    accent: '#9B7EC8',
    bg: '#F0EAF8',
    available: true,
    to: '/cursos/me-duele-estar-soltera',
  },
  {
    slug: 'no-estas-loca',
    number: '03',
    status: 'Disponible ahora',
    title: 'No Estás Loca, Estás Desregulada',
    subtitle: 'Regula tu sistema nervioso',
    description:
      'Aprende a entender tus emociones, calmar tu sistema nervioso y dejar de sentir que algo está mal contigo. No estás rota, estás respondiendo a lo que viviste.',
    image: `${IMG}/prog-noloca-v6-b6TYkKhqw6e9YwFwTtY9vB.webp`,
    accent: '#E8A090',
    bg: '#FDF0ED',
    available: true,
    to: '/cursos/no-estas-loca',
  },
  {
    slug: 'papa-necesito-sanar',
    number: '04',
    status: 'Próximamente · Junio',
    title: 'Papá, Necesito Sanar',
    subtitle: 'Sana el vínculo con papá',
    description:
      'Un proceso profundo para sanar la relación con tu padre, entender su ausencia o su presencia, y liberarte de los patrones que ese vínculo dejó en ti.',
    image: `${IMG}/prog-papa-v6-G2pBNERmWL2rWpTLiQy83s.webp`,
    accent: '#9B8FCC',
    bg: '#EDE8F5',
    available: false,
  },
  {
    slug: 'el-metodo-del-adios',
    number: '05',
    status: 'Próximamente · Julio',
    title: 'El Método del Adiós',
    subtitle: 'Cierra el ciclo con él',
    description:
      'Un protocolo de salida para cerrar vínculos con hombres que ya no te pertenecen. Aprende a soltar sin destruirte en el proceso.',
    image: `${IMG}/prog-adios-v6-4twvjHzHou2dgRZB3qE5GS.webp`,
    accent: '#D4825A',
    bg: '#FEF0E8',
    available: false,
  },
]

// Cómo funciona (4 pasos).
export const steps = [
  {
    title: 'Identifica lo que vives',
    desc: '¿Conflicto con mamá? ¿Activada por un hombre? ¿Sintiéndote fuera de control? Encuentra el programa que habla de lo que estás viviendo hoy.',
  },
  {
    title: 'Accede a tu guía',
    desc: 'Cada programa tiene módulos, ejercicios y protocolos diseñados para trabajar a tu ritmo, sin presión y sin juicio.',
  },
  {
    title: 'Trabaja tu proceso',
    desc: 'Sigue la guía paso a paso. Cada actividad te lleva más profundo hacia la sanación real, no solo el alivio momentáneo.',
  },
  {
    title: 'Crece en comunidad',
    desc: 'Formas parte de una comunidad de mujeres que entienden lo que vives. No estás sola en este proceso.',
  },
]
