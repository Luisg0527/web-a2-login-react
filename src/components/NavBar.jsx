import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './NavBar.css'

const navItems = [
  { label: 'Home', path: '/Home' },
  { label: 'Admin', path: '/Admin' },
]

function ResponsiveAppBar({ logout }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  if (location.pathname === '/') return null

  const handleNav = (path) => {
    navigate(path)
    setMobileOpen(false)
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const isActive = (path) => location.pathname === path

  return (
    <header className="nx-navbar">
      <div className="nx-navbar-inner">
        <div className="nx-navbar-left">
          <button
            type="button"
            className="nx-navbar-logo"
            onClick={() => handleNav('/Home')}
          >
            React App
          </button>

          <nav className="nx-navbar-nav">
            {navItems.map(({ label, path }) => (
              <button
                key={path}
                type="button"
                className={`nx-navbar-link${isActive(path) ? ' nx-navbar-link--active' : ''}`}
                onClick={() => handleNav(path)}
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="nx-navbar-menu-btn"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>

        <div className="nx-navbar-right">
          <button type="button" className="nx-navbar-user" onClick={handleLogout}>
            <span className="nx-navbar-avatar" aria-hidden="true">
              <span className="material-symbols-outlined nx-navbar-avatar-icon">account_circle</span>
            </span>
            <span className="nx-navbar-logout">Logout</span>
          </button>
        </div>
      </div>

      <div className={`nx-navbar-mobile-menu${mobileOpen ? ' nx-navbar-mobile-menu--open' : ''}`}>
        {navItems.map(({ label, path }) => (
          <button
            key={path}
            type="button"
            className={`nx-navbar-mobile-link${isActive(path) ? ' nx-navbar-mobile-link--active' : ''}`}
            onClick={() => handleNav(path)}
          >
            {label}
          </button>
        ))}
        <button type="button" className="nx-navbar-mobile-link" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  )
}

export default ResponsiveAppBar
