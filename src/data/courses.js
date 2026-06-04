// Catálogo de cursos. Edita aquí el contenido sin tocar la interfaz.
//
// Cada lección tiene un array `blocks` flexible. Tipos de bloque soportados:
//   { type: 'video',    url, caption }            -> vídeo embebido (YouTube/Vimeo)
//   { type: 'text',     value }                   -> párrafo de texto
//   { type: 'image',    src, alt, caption }       -> imagen
//   { type: 'resource', label, href, note }       -> recurso descargable / enlace

export const courses = [
  {
    id: 'desayunos-que-enamoran',
    title: 'Desayunos que enamoran',
    subtitle: 'El ritual de empezar el día con cuidado y belleza.',
    cover: '🍳',
    accent: '#f5b942',
    image:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1000&q=80',
    level: 'Principiante',
    durationHours: 4,
    price: 49,
    instructor: 'Marta Rosales',
    tags: ['Cocina', 'Brunch', 'Hábitos'],
    description:
      'Aprende a transformar el desayuno en el mejor momento del día: técnicas sencillas, emplatado bonito y combinaciones que despiertan los sentidos.',
    modules: [
      {
        id: 'm1',
        title: 'Lo esencial del huevo',
        lessons: [
          {
            id: 'l1',
            title: 'Bienvenida y filosofía',
            duration: '6 min',
            blocks: [
              {
                type: 'video',
                url: 'https://www.youtube.com/embed/0fKBhvDjuy0',
                caption: 'Una introducción al curso y a la idea de cuidar lo cotidiano.',
              },
              {
                type: 'text',
                value:
                  'En este curso partimos de una idea simple: lo extraordinario casi siempre se esconde en lo ordinario. Empezaremos por dominar el ingrediente más humilde y versátil de la cocina, el huevo.',
              },
            ],
          },
          {
            id: 'l2',
            title: 'Huevos perfectos: 3 técnicas',
            duration: '12 min',
            blocks: [
              {
                type: 'text',
                value:
                  'Pochado, revuelto cremoso y a la plancha con bordes crujientes. Tres formas de cocinar un huevo que conviene tener siempre a mano.',
              },
              {
                type: 'image',
                src: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=900&q=80',
                alt: 'Huevo pochado sobre tostada',
                caption: 'El huevo pochado: la prueba de fuego de cualquier desayuno.',
              },
              {
                type: 'resource',
                label: 'Guía de tiempos de cocción (PDF)',
                href: '#',
                note: 'Tabla imprimible con minutos y temperaturas.',
              },
            ],
          },
        ],
      },
      {
        id: 'm2',
        title: 'El emplatado que enamora',
        lessons: [
          {
            id: 'l3',
            title: 'Color, altura y contraste',
            duration: '10 min',
            blocks: [
              {
                type: 'text',
                value:
                  'Comemos primero con los ojos. Veremos cómo jugar con el color del plato, la altura de los ingredientes y los contrastes de textura.',
              },
              {
                type: 'image',
                src: 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=900&q=80',
                alt: 'Desayuno emplatado con fruta',
                caption: 'Una composición simple gana con un toque de color fresco.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'arte-floral-en-la-mesa',
    title: 'El arte floral en la mesa',
    subtitle: 'Centros y ramos que convierten cualquier comida en un evento.',
    cover: '🌹',
    accent: '#e35d6a',
    image:
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1000&q=80',
    level: 'Intermedio',
    durationHours: 5,
    price: 59,
    instructor: 'Lucía Fontana',
    tags: ['Flores', 'Decoración', 'Eventos'],
    description:
      'Domina el equilibrio, el color y la proporción para crear arreglos florales que dan vida a tu mesa, con flores de temporada y materiales accesibles.',
    modules: [
      {
        id: 'm1',
        title: 'Fundamentos del color',
        lessons: [
          {
            id: 'l1',
            title: 'La rueda del color floral',
            duration: '9 min',
            blocks: [
              {
                type: 'text',
                value:
                  'Antes de tocar una flor, entendemos cómo se relacionan los colores. Paletas análogas, complementarias y monocromáticas.',
              },
              {
                type: 'image',
                src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=900&q=80',
                alt: 'Ramo de flores variadas',
                caption: 'Una paleta análoga (tonos vecinos) transmite armonía.',
              },
            ],
          },
          {
            id: 'l2',
            title: 'Tu primer centro de mesa',
            duration: '15 min',
            blocks: [
              {
                type: 'video',
                url: 'https://www.youtube.com/embed/8sYx2y0lYBg',
                caption: 'Paso a paso de un centro bajo para mesa de comida.',
              },
              {
                type: 'resource',
                label: 'Lista de materiales',
                href: '#',
                note: 'Todo lo que necesitas para seguir la lección.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'reposteria-esencial',
    title: 'Repostería esencial',
    subtitle: 'Lo básico bien hecho: bizcochos, masas y cremas sin secretos.',
    cover: '🧁',
    accent: '#c84a57',
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1000&q=80',
    level: 'Principiante',
    durationHours: 6,
    price: 55,
    instructor: 'Marta Rosales',
    tags: ['Repostería', 'Horno', 'Básicos'],
    description:
      'Una base sólida de repostería casera. Entiende el porqué de cada paso para improvisar con confianza y que todo salga siempre bien.',
    modules: [
      {
        id: 'm1',
        title: 'Masas y bizcochos',
        lessons: [
          {
            id: 'l1',
            title: 'El bizcocho que nunca falla',
            duration: '11 min',
            blocks: [
              {
                type: 'text',
                value:
                  'La proporción 1-1-1-1 (huevo, azúcar, harina, mantequilla) como punto de partida para mil variaciones.',
              },
              {
                type: 'image',
                src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=80',
                alt: 'Bizcocho casero recién horneado',
                caption: 'Un bizcocho esponjoso es cuestión de técnica, no de suerte.',
              },
            ],
          },
        ],
      },
    ],
  },
]

export function getCourse(id) {
  return courses.find((c) => c.id === id)
}

export function courseLessonCount(course) {
  return course.modules.reduce((n, m) => n + m.lessons.length, 0)
}

export function allLessons(course) {
  return course.modules.flatMap((m) =>
    m.lessons.map((l) => ({ ...l, moduleId: m.id, moduleTitle: m.title })),
  )
}
