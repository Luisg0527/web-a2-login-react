import { useState } from 'react'

const API_URL = "https://web-a5-hashing-production.up.railway.app"
//const API_URL = "http://localhost:8000"

const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState({})
  const [token, setToken] = useState("")

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

  const logout = () => {
    setIsLogin(false)
    setUser({})
    setToken("")
  }

  return { isLogin, token, user, login, logout }
}

export default useAuth
