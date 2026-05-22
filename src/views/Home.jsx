import './Home.css'

const Home = ({ user }) => {
  const displayName = user?.name?.trim() || user?.username || '—'

  return (
    <div className="home-page">
      <main className="home-main">
        <section className="home-welcome">
          <h1 className="home-welcome-title">Bienvenid@, {displayName}</h1>
          <p className="home-welcome-desc">
            Aquí tienes un resumen de tu actividad y el estado de tus flujos de trabajo.
          </p>
        </section>

        <div className="home-bento">
          <div className="home-card home-card--profile">
            <div className="home-profile-row">
              <div className="home-avatar-wrap">
                <div className="home-avatar" aria-hidden="true">
                  <span className="material-symbols-outlined home-avatar-icon">account_circle</span>
                </div>
                <div className="home-avatar-status" />
              </div>
              <div>
                <h2 className="home-profile-name">{displayName}</h2>
                <p className="home-profile-id">ID: {user._id ?? '—'}</p>
              </div>
            </div>
            <button type="button" className="home-profile-btn">Edit Profile</button>
          </div>

          <div className="home-metrics-col">
            <div className="home-card home-card--metric">
              <div className="home-metric-top">
                <div>
                  <p className="home-metric-label">Pedidos</p>
                  <h3 className="home-metric-value">37</h3>
                </div>
                <span className="material-symbols-outlined home-metric-icon">checklist</span>
              </div>
              <div className="home-metric-footer">
                <span className="home-metric-change">Total</span>
                <span className="home-metric-note">registrados en el sistema</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
