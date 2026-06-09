import { useParams, useSearchParams } from 'react-router-dom'
import '../views/Admin.css'

const Details = () => {
  const { username } = useParams()
  const [searchParams] = useSearchParams()

  return (
    <div className="admin-page">
      <main className="admin-main">
        <header className="admin-header">
          <h1 className="admin-title">Detalle de usuario</h1>
          <p className="admin-subtitle">Parámetros de ruta y query string.</p>
        </header>

        <div className="admin-card details-card">
          <p className="details-line">
            <span className="details-label">username (useParams):</span> {username}
          </p>
          <p className="details-line">
            <span className="details-label">react (useSearchParams):</span>{' '}
            {searchParams.get('react') ?? '—'}
          </p>
        </div>
      </main>
    </div>
  )
}

export default Details
