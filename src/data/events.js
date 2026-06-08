// Eventos de Mujeres Rosa (encuentros en vivo).
const IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663382040659/D6PcER9qYpKZBRs66hrLc4'

export const eventsHero = {
  eyebrow: '✦ Comunidad en vivo ✦',
  titleA: 'Encuentros &',
  titleEm: 'eventos',
  subtitle:
    'Webinars gratuitos, club de lectura y encuentros en vivo para acompañarte en el proceso. A tu ritmo, pero nunca sola.',
}

export const events = [
  {
    id: 1,
    day: 22,
    monthName: 'MAR',
    year: 2026,
    time: '19:00h',
    tag: 'WEBINAR GRATUITO',
    title: 'Webinar: Comiendo Migajas',
    subtitle: 'Abierto a todas',
    description:
      '¿Te quedas con las migajas de amor? Aprende a identificar los vínculos donde das todo y recibes nada.',
    accent: '#E8896A',
    bg: '#FFDDD0',
    img: `${IMG}/evento-webinar-v3-ReKjkY777DmkAgijmWK5Ty.webp`,
    forMembers: false,
  },
  {
    id: 2,
    day: 29,
    monthName: 'MAR',
    year: 2026,
    time: '19:00h',
    tag: 'SOLO MIEMBROS',
    title: 'Club de Lectura Rosa',
    subtitle: 'La Bailarina de Auschwitz',
    description:
      'Leemos juntas La Bailarina de Auschwitz. Un libro sobre sobrevivir, sanar y encontrar belleza en la oscuridad.',
    accent: '#7B6BB5',
    bg: '#EDE8F7',
    img: `${IMG}/evento-lectura-v3-gp8DicpS8ejr5vazEgdPYR.webp`,
    forMembers: true,
  },
]
