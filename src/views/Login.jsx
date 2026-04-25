import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import './Login.css'

const Login = ({login}) => {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const onsubmit = async (e) => {
    e.preventDefault()
    if(!username || !password) {
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
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={onsubmit}>
          <TextField value={username} placeholder="Nombre" onChange={(e)=>setUsername(e.target.value)}></TextField>
          <TextField value={password} placeholder="Contraseña" onChange={(e)=>setPassword(e.target.value)}></TextField>
          {/* <input type="text" placeholder="Nombre" />
          <input type="password" placeholder="Contraseña" /> */}
          <Button type='submit'>Login</Button>
          {/* <button onClick={() => navigate('/Home')}>Iniciar sesión</button> */}
        </form>
      </div>
    </div>
  )
}

export default Login
