import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './views/Login'
import Home from './views/Home'
import Admin from './views/Admin'
import ResponsiveAppBar from './components/NavBar'
import Details from './components/Details'
import LifeCycle from './components/LifeCycle'
import useAuth from './hooks/useAuth'
import useAdmin from './hooks/useAdmin'
import { useEffect, useState } from 'react'

function App() {
  const [show, setShow] = useState(false)
  const { isLogin, token, user, login, logout: authLogout } = useAuth()
  const { users, getUsers, delUser, addUser, clearUsers } = useAdmin(token)

  useEffect(() => {
    if (isLogin && token) {
      getUsers()
    }
  }, [isLogin, token, getUsers])

  const logout = () => {
    authLogout()
    clearUsers()
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
          <Route
            path='/users/:username'
            element={isLogin ? <Details /> : <Navigate to='/' replace />}
          />
        </Routes>
      </BrowserRouter>
      <button
        type="button"
        className="lifecycle-toggle"
        onClick={() => setShow(!show)}
      >
        {show ? 'hide' : 'show'}
      </button>
      {show && <LifeCycle />}
    </div>
  )
}

export default App
