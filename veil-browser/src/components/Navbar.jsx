import React, { useState } from 'react'
import './Navbar.css'

function Navbar({ onDashboardClick }) {
  const [url, setUrl] = useState('https://duckduckgo.com')
  const [isSecure, setIsSecure] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Navigate to:', url)
  }

  return (
    <nav className="navbar">
      <div className="nav-controls">
        <button className="nav-btn" title="Back">←</button>
        <button className="nav-btn" title="Forward">→</button>
        <button className="nav-btn" title="Refresh">⟳</button>
        <button className="nav-btn" title="Home">⌂</button>
      </div>
      
      <form className="url-bar" onSubmit={handleSubmit}>
        <span className={`security-indicator ${isSecure ? 'secure' : 'insecure'}`}>
          {isSecure ? '🔒' : '⚠️'}
        </span>
        <input
          type="text"
          className="url-input"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Search or enter address"
        />
        <button type="button" className="shield-btn" onClick={onDashboardClick} title="Privacy Shield">
          🛡️
        </button>
      </form>

      <div className="nav-actions">
        <button className="action-btn" title="Extensions">🧩</button>
        <button className="action-btn" title="Settings">⚙️</button>
        <button className="action-btn" title="Menu">☰</button>
      </div>
    </nav>
  )
}

export default Navbar
