import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './views/Login'
import Home from './views/Home'
import ResponsiveAppBar from './components/NavBar'
import { useState } from 'react'

const API_URL = "http://localhost:8000"

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState({})

  const login = async (credentials) => {
    const res = await fetch(API_URL + "/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(credentials)
    })

    const raw = await res.text()
    let data
    try {
      data = raw ? JSON.parse(raw) : {}
    } catch {
      data = {
        login: false,
        msg: `Respuesta no JSON (${res.status}). ¿El API está en ${API_URL}?`,
        user: {}
      }
    }
    const didLogin = data.login ?? data.isLogin ?? false
    setIsLogin(didLogin)
    setUser(data.user ?? {})
    return data
  }

  const logout = () => {
    setIsLogin(false)
    setUser({})
  }

  return (
    <>
      <BrowserRouter>
        {isLogin && <ResponsiveAppBar logout={logout} />}
        <Routes>
          <Route
            path='/'
            element={isLogin ? <Navigate to='/Home' replace /> : <Login login={login} />}
          />
          <Route
            path='/Home'
            element={isLogin ? <Home user={user} /> : <Navigate to='/' replace />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
