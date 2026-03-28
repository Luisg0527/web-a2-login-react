import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
  const navigate = useNavigate()

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Login</h2>
        <input type="text" placeholder="Nombre" />
        <input type="password" placeholder="Contraseña" />
        <button onClick={() => navigate('/Home')}>Iniciar sesión</button>
      </div>
    </div>
  )
}

export default Login
