// Blog de Mujeres Rosa. Artículos publicados (catálogo).
const IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663382040659/D6PcER9qYpKZBRs66hrLc4'

export const blogHero = {
  eyebrow: '✦ Blog de sanación ✦',
  titleA: 'Palabras que',
  titleEm: 'sanan',
  titleB: 'y despiertan.',
  subtitle:
    'Artículos sobre trauma vincular, duelos invisibles, relaciones y la psicología detrás de lo que vives. Para mujeres que ya decidieron trabajar su proceso.',
  image: `${IMG}/banner-introduccion-final-PGgkGGVGQUV6mgoFmMYA2g.webp`,
}

export const posts = [
  {
    slug: 'la-fatiga-de-no-tener-red',
    category: 'La Paradoja de la Mujer Moderna',
    title: 'La Fatiga de No Tener Red',
    excerpt:
      'Nadie habla del cansancio específico de ser mujer soltera y no tener dónde caer. No es soledad romántica. Es algo más profundo: no tener un sistema humano que te sostenga cuando no puedes más.',
    quote: 'Tu fatiga no es un problema de mindset. Es un problema de estructura.',
    readTime: '6 min',
    date: '11 Mar 2026',
    featured: true,
    accent: '#5BA4A4',
    img: `${IMG}/blog-articulo-fatiga-red-JBMo6t5niSsYjpyvXx8Qtv.webp`,
    url: 'https://mujereshuevosyrosas.com/blog/la-fatiga-de-no-tener-red',
  },
]
