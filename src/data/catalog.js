// Catálogo PÚBLICO (sin el cuerpo de las lecciones).
// El contenido vive en api/_lib/content.js (lado servidor) y se sirve protegido.
// La primera lección de cada programa es vista previa gratuita (free: true).

export const courses = [
  {
    "id": "me-duele-estar-soltera",
    "title": "Me Duele Estar Soltera",
    "subtitle": "El arte de organizar las emociones.",
    "cover": "🌹",
    "accent": "#ec4899",
    "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&q=80",
    "level": "Todos los niveles",
    "durationHours": 3,
    "price": 39,
    "instructor": "Claudia Domínguez",
    "tags": [
      "Emociones",
      "Autoconocimiento",
      "Relaciones"
    ],
    "description": "No es un libro de tips de citas ni de \"amor propio\". Es una explicación: de por qué te duele, de dónde viene, y por qué siempre terminas en el mismo lugar. Cuando entiendes por qué te pasa lo que te pasa, dejas de culparte. Y eso ya lo cambia todo.",
    "modules": [
      {
        "id": "m0",
        "title": "Antes de empezar",
        "lessons": [
          {
            "id": "l0",
            "title": "Introducción",
            "duration": "4 min",
            "free": true
          }
        ]
      },
      {
        "id": "m1",
        "title": "Capítulo 1",
        "lessons": [
          {
            "id": "m1l1",
            "title": "No te duele la soltería. Te duele lo que despierta.",
            "duration": "11 min",
            "free": false
          },
          {
            "id": "m1l2",
            "title": "Ejercicio: La carta que nunca escribiste",
            "duration": "10 min",
            "free": false
          }
        ]
      },
      {
        "id": "m2",
        "title": "Capítulo 2",
        "lessons": [
          {
            "id": "m2l1",
            "title": "No te rechazan. Te activan.",
            "duration": "8 min",
            "free": false
          },
          {
            "id": "m2l2",
            "title": "Ejercicio: Mapa de mi herida",
            "duration": "10 min",
            "free": false
          }
        ]
      },
      {
        "id": "m3",
        "title": "Capítulo 3",
        "lessons": [
          {
            "id": "m3l1",
            "title": "El expediente amañado",
            "duration": "4 min",
            "free": false
          },
          {
            "id": "m3l2",
            "title": "Ejercicio: Revisión del expediente",
            "duration": "10 min",
            "free": false
          }
        ]
      },
      {
        "id": "m4",
        "title": "Capítulo 4",
        "lessons": [
          {
            "id": "m4l1",
            "title": "Lo que realmente duele",
            "duration": "4 min",
            "free": false
          },
          {
            "id": "m4l2",
            "title": "Ejercicio: Lo que realmente duele",
            "duration": "10 min",
            "free": false
          }
        ]
      },
      {
        "id": "m5",
        "title": "Capítulo 5",
        "lessons": [
          {
            "id": "m5l1",
            "title": "Las mentiras que te dices",
            "duration": "24 min",
            "free": false
          }
        ]
      },
      {
        "id": "m6",
        "title": "Capítulo 6",
        "lessons": [
          {
            "id": "m6l1",
            "title": "Habitar el dolor",
            "duration": "21 min",
            "free": false
          }
        ]
      },
      {
        "id": "m7",
        "title": "Capítulo 7",
        "lessons": [
          {
            "id": "m7l1",
            "title": "Reorganizar: el Plan 70/30",
            "duration": "23 min",
            "free": false
          }
        ]
      }
    ]
  }
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
