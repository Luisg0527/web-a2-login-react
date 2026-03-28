import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import './App.css'
import Login from './views/Login'
import Home from './views/Home'
import ResponsiveAppBar from './components/NavBar'

function App() {
  const loginDone = window.location.pathname !== '/'
  return (
    <>
      <BrowserRouter>
        {loginDone && <ResponsiveAppBar />}
        <Routes>
          <Route path='/'element={<Login />}/>
          <Route path='/Home'element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
