import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = ({ login }) => {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const onsubmit = async (e) => {
    e.preventDefault()
    if (!username || !password) {
      alert("Las credenciales no deben estar vacias")
      return
    }
    const res = await login({ username, password })
    if (res.login === true || res.isLogin === true) {
      setUsername("")
      setPassword("")
      navigate("/Home")
    } else {
      alert("Credenciales incorrectas!")
    }
  }

  return (
    <div className="login-page">
      <div className="login-bg">
        <div className="login-bg-blob login-bg-blob--top" />
        <div className="login-bg-blob login-bg-blob--bottom" />
      </div>

      <div className="login-brand">
        <h1 className="login-brand-title">App React</h1>
        <p className="login-brand-subtitle">Actividad Modulo Web</p>
      </div>

      <main className="login-main">
        <div className="login-card">
          <div className="login-card-header">
            <h2 className="login-card-title">Bienvenid@</h2>
            <p className="login-card-desc">Ingresa tus credenciales para iniciar sesión.</p>
          </div>

          <form className="login-form" onSubmit={onsubmit}>
            <div className="login-field">
              <label className="login-label" htmlFor="username">Username</label>
              <div className="login-input-wrap">
                <span className="material-symbols-outlined login-input-icon">person</span>
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="login-input"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="login-field">
              <label className="login-label" htmlFor="password">Password</label>
              <div className="login-input-wrap">
                <span className="material-symbols-outlined login-input-icon">lock</span>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="login-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="login-submit">Iniciar sesión</button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Login
