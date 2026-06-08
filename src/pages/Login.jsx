import { useState } from 'react'
import { useAuth } from '../lib/AuthContext.jsx'

export default function Login() {
  const { signIn, configured } = useAuth()
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const { error } = await signIn(email.trim())
      if (error) setError(error.message)
      else setSent(true)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <section className="auth">
      <div className="auth__card panel">
        <h1 className="section__title" style={{ fontSize: '1.9rem' }}>Entrar</h1>

        {!configured && (
          <p className="muted">
            El inicio de sesión todavía no está activado. Vuelve pronto.
          </p>
        )}

        {configured && sent && (
          <p>
            ✅ Te hemos enviado un enlace a <strong>{email}</strong>. Ábrelo desde
            este dispositivo para entrar. Puedes cerrar esta pestaña.
          </p>
        )}

        {configured && !sent && (
          <>
            <p className="muted">
              Escribe tu email y te enviamos un enlace para entrar, sin
              contraseñas. Usa el mismo email con el que compraste en Hotmart.
            </p>
            <form className="form" onSubmit={submit}>
              <input
                className="form__input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
              />
              <button className="btn btn--primary" type="submit">
                Enviarme el enlace
              </button>
              {error && <p className="auth__error">{error}</p>}
            </form>
          </>
        )}
      </div>
    </section>
  )
}
