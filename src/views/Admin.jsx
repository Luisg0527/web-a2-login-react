import { useState } from 'react'
import Add from '../components/Add'
import User from '../components/User'
import './Admin.css'

const Admin = ({ users, delUser, addUser }) => {
  const [search, setSearch] = useState('')

  const safeUsers = Array.isArray(users) ? users.filter(Boolean) : []
  const query = search.trim().toLowerCase()
  const filteredUsers = safeUsers.filter((u) => {
    if (!query) return true
    return (
      String(u._id ?? '').toLowerCase().includes(query) ||
      String(u.name ?? '').toLowerCase().includes(query) ||
      String(u.username ?? '').toLowerCase().includes(query)
    )
  })

  return (
    <div className="admin-page">
      <main className="admin-main">
        <header className="admin-header">
          <h1 className="admin-title">Administración de usuarios</h1>
          <p className="admin-subtitle">Gestiona los usuarios registrados en el sistema.</p>
        </header>

        <div className="admin-grid">
          <section className="admin-form-section">
            <div className="admin-card">
              <h2 className="admin-card-title">Agregar usuario</h2>
              <Add addUser={addUser} />
            </div>
          </section>

          <section className="admin-list-section">
            <div className="admin-card admin-card--table">
              <div className="admin-table-header">
                <h2 className="admin-card-title">Lista de usuarios</h2>
                <div className="admin-search">
                  <span className="material-symbols-outlined admin-search-icon">search</span>
                  <input
                    type="text"
                    className="admin-search-input"
                    placeholder="Buscar..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>

              <div className="admin-table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Nombre</th>
                      <th>Usuario</th>
                      <th className="admin-table-th--right">Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="admin-table-empty">
                          {safeUsers.length === 0
                            ? 'No hay usuarios registrados.'
                            : 'No se encontraron usuarios.'}
                        </td>
                      </tr>
                    ) : (
                      filteredUsers.map((u, index) => (
                        <User key={u._id ?? `user-${index}`} user={u} delUser={delUser} index={index} />
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              <div className="admin-table-footer">
                <span>
                  Mostrando {filteredUsers.length} de {safeUsers.length} usuarios
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Admin
