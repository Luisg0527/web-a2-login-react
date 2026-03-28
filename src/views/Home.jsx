import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="home-wrapper">
      <h1>Bienvenido</h1>
      <p>Esto es la página principal. Aquí puedes ver tu contenido.</p>

      <div className="home-cards">
        <div className="home-card">
          <h3>Usuarios</h3>
          <p>Total: 128</p>
        </div>
        <div className="home-card">
          <h3>Ventas</h3>
          <p>Total: $4,200</p>
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
