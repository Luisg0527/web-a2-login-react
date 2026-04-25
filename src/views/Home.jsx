import React from 'react'
import './Home.css'

const Home = ({ user }) => {
  const displayName = user?.name?.trim() || user?.username || '—'

  return (
    <div className="home-wrapper">
      <h1>Bienvenido</h1>
      <p>Esto es la página principal. Aquí puedes ver tu contenido.</p>

      <div className="home-cards">
        <div className="home-card">
          <h3>Usuario</h3>
          <h4>{displayName}</h4>
        </div>
        <div className="home-card">
          <h3>Id</h3>
          <h4>{user._id}</h4>
        </div>
        <div className="home-card">
          <h3>Pedidos</h3>
          <p>Total: 37</p>
        </div>
      </div>
    </div>
  )
}

export default Home
