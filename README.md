# Huevos y Rosas

Brand landing page built with **Vite + React**.

> *Lo cotidiano y lo extraordinario, en la misma mesa.*

## Stack

- [Vite 5](https://vite.dev/) — dev server & build
- [React 18](https://react.dev/)
- Plain CSS (no UI framework)

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
```

## Scripts

| Command           | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR    |
| `npm run build`   | Build for production into `dist/`     |
| `npm run preview` | Serve the production build locally    |

## Project structure

```
.
├── index.html          # HTML entry point
├── public/
│   └── favicon.svg      # Egg + rose mark
└── src/
    ├── main.jsx         # React entry
    ├── App.jsx          # Page sections (nav, hero, features, about, contact)
    ├── content.js       # All editable copy lives here
    └── index.css        # Styles
```

## Editing content

Most copy (headlines, feature cards, about text, contact email) lives in
[`src/content.js`](src/content.js) so you can update wording without touching
the layout components in `App.jsx`.
