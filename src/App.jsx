import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './views/Login'
import Home from './views/Home'
import Admin from './views/Admin'
import ResponsiveAppBar from './components/NavBar'
import { useEffect, useState } from 'react'

const API_URL = "https://web-a5-hashing-production.up.railway.app"
//const API_URL = "http://localhost:8000"

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState({})
  const [token, setToken] = useState("")
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (isLogin && token) {
      const getUsers = async () => {
        const res = await fetch(API_URL + "/users", {
          headers: { authorization: token }
        })
        const data = await res.json()
        setUsers(Array.isArray(data) ? data : data.users ?? [])
      }
      getUsers()
    }
  }, [isLogin, token])

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
    setToken(data.token ?? "")
    return data
  }

  const delUser = async (id) => {
    setUsers(users.filter((u) => u._id !== id))
    await fetch(API_URL + "/users/" + id, {
      headers: { authorization: token },
      method: "DELETE"
    })
  }

  const addUser = async (newUser) => {
    const res = await fetch(API_URL + "/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: token
      },
      body: JSON.stringify(newUser)
    })

    const data = await res.json()
    const added = data.users ?? data.user
    if (added) {
      setUsers((prev) => [...prev, added])
    }
  }

  const logout = () => {
    setIsLogin(false)
    setUser({})
    setToken("")
    setUsers([])
  }

  return (
    <div className="app-shell">
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
          <Route
            path='/Admin'
            element={
              isLogin
                ? <Admin addUser={addUser} users={users} delUser={delUser} />
                : <Navigate to='/' replace />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
