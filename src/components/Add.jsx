import { useState } from 'react'

const Add = ({ addUser }) => {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const onsubmit = (e) => {
    e.preventDefault()
    if (!name || !username || !password) {
      alert("Datos faltantes")
      return
    }
    addUser({ name, username, password })
    setName("")
    setUsername("")
    setPassword("")
  }

  return (
    <form className="admin-form" onSubmit={onsubmit}>
      <div className="admin-field">
        <label className="admin-label" htmlFor="admin-name">Nombre</label>
        <input
          id="admin-name"
          type="text"
          className="admin-input"
          placeholder="Ingrese nombre completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="admin-field">
        <label className="admin-label" htmlFor="admin-username">Usuario</label>
        <input
          id="admin-username"
          type="text"
          className="admin-input"
          placeholder="Identificador único"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="admin-field">
        <label className="admin-label" htmlFor="admin-password">Contraseña</label>
        <input
          id="admin-password"
          type="password"
          className="admin-input"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="admin-submit">Agregar</button>
    </form>
  )
}

export default Add
