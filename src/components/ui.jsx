// Pequeños componentes de interfaz compartidos.
import { useState } from 'react'

// Estrellas de solo lectura o seleccionables.
export function Stars({ value = 0, onChange, size = '1rem' }) {
  const [hover, setHover] = useState(0)
  const interactive = typeof onChange === 'function'
  const shown = hover || value
  return (
    <span className="stars" style={{ fontSize: size }} aria-label={`${value} de 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={'stars__star' + (interactive ? ' stars__star--btn' : '')}
          style={{ color: n <= shown ? 'var(--yolk)' : 'var(--line)' }}
          onMouseEnter={interactive ? () => setHover(n) : undefined}
          onMouseLeave={interactive ? () => setHover(0) : undefined}
          onClick={interactive ? () => onChange(n) : undefined}
          role={interactive ? 'button' : undefined}
        >
          ★
        </span>
      ))}
    </span>
  )
}

// Barra de progreso con porcentaje.
export function ProgressBar({ value, total }) {
  const pct = total ? Math.round((value / total) * 100) : 0
  return (
    <div className="progress">
      <div className="progress__track">
        <div className="progress__fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="progress__label">
        {value} / {total} lecciones · {pct}%
      </span>
    </div>
  )
}
