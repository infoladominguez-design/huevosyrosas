# Huevos y Rosas

Plataforma de **cursos online** construida con **Vite + React**.

> *Aprende lo cotidiano, hazlo extraordinario.*

Catálogo de cursos, páginas de curso con módulos y lecciones de contenido
mixto (vídeo, texto, imágenes y recursos), seguimiento de progreso,
comentarios en lecciones, foro de comunidad y valoraciones con reseñas.

> **Estado:** prototipo visual. Toda la interacción (progreso, comentarios,
> reseñas, foro y tu nombre) se guarda en el navegador con `localStorage`.
> Cuando se añada un backend, basta con sustituir los hooks de
> [`src/lib/store.js`](src/lib/store.js) por llamadas a una API, manteniendo
> la misma firma.

## Stack

- [Vite 5](https://vite.dev/) — servidor de desarrollo y build
- [React 18](https://react.dev/) + [React Router 6](https://reactrouter.com/)
- CSS plano (sin framework de UI)

## Empezar

```bash
npm install
npm run dev      # servidor de desarrollo (http://localhost:5173)
```

## Scripts

| Comando           | Qué hace                              |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con HMR        |
| `npm run build`   | Build de producción en `dist/`        |
| `npm run preview` | Sirve el build de producción en local |

## Estructura

```
.
├── index.html
├── vercel.json              # Rewrite SPA para enlaces directos
└── src/
    ├── main.jsx             # Entrada React + BrowserRouter
    ├── App.jsx              # Rutas
    ├── content.js           # Textos de marca editables
    ├── index.css            # Estilos
    ├── data/
    │   └── courses.js       # Catálogo de cursos (módulos y lecciones)
    ├── lib/
    │   └── store.js         # Persistencia local (progreso, comentarios…)
    ├── components/
    │   ├── Layout.jsx       # Navegación + pie + nombre de usuario
    │   └── ui.jsx           # Estrellas y barra de progreso
    └── pages/
        ├── Home.jsx         # Inicio + cursos destacados
        ├── Courses.jsx      # Catálogo completo
        ├── CourseDetail.jsx # Temario + valoraciones
        ├── Lesson.jsx       # Lección + comentarios
        ├── Forum.jsx        # Comunidad
        ├── About.jsx        # Nosotros / contacto
        └── NotFound.jsx     # 404
```

## Añadir o editar cursos

Todo el contenido vive en [`src/data/courses.js`](src/data/courses.js). Cada
lección tiene un array `blocks` flexible que admite varios tipos:

```js
{ type: 'video',    url, caption }          // vídeo embebido (YouTube/Vimeo)
{ type: 'text',     value }                 // párrafo de texto
{ type: 'image',    src, alt, caption }     // imagen
{ type: 'resource', label, href, note }     // recurso descargable / enlace
```

## Próximos pasos sugeridos

- **Cuentas reales** y persistencia en servidor (p. ej. Supabase).
- **Pagos** con Stripe para vender el acceso a los cursos.
- **Panel de instructor** para subir cursos desde la propia web.
