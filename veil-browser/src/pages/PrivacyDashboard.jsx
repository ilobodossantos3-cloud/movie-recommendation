import React from 'react'
import './PrivacyDashboard.css'

function PrivacyDashboard() {
  const trackers = [
    { name: 'Google Analytics', domain: 'google-analytics.com', blocked: true },
    { name: 'Facebook Pixel', domain: 'facebook.com', blocked: true },
    { name: 'Hotjar', domain: 'hotjar.com', blocked: false },
  ]

  const stats = {
    trackersBlocked: 24,
    adsBlocked: 12,
    cookiesBlocked: 156,
    fingerprintAttempts: 3,
  }

  return (
    <div className="privacy-dashboard">
      <div className="dashboard-header">
        <h2>🛡️ Privacy Dashboard</h2>
        <span className="protection-status">Protected</span>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <span className="stat-icon">🎯</span>
          <span className="stat-number">{stats.trackersBlocked}</span>
          <span className="stat-label">Trackers Blocked</span>
        </div>
        <div className="stat-card">
          <span className="stat-icon">📺</span>
          <span className="stat-number">{stats.adsBlocked}</span>
          <span className="stat-label">Ads Blocked</span>
        </div>
        <div className="stat-card">
          <span className="stat-icon">🍪</span>
          <span className="stat-number">{stats.cookiesBlocked}</span>
          <span className="stat-label">Cookies Blocked</span>
        </div>
        <div className="stat-card">
          <span className="stat-icon">👤</span>
          <span className="stat-number">{stats.fingerprintAttempts}</span>
          <span className="stat-label">Fingerprint Attempts</span>
        </div>
      </div>

      <div className="dashboard-section">
        <h3>Detected Trackers</h3>
        <div className="tracker-list">
          {trackers.map((tracker, index) => (
            <div key={index} className={`tracker-item ${tracker.blocked ? 'blocked' : ''}`}>
              <span className="tracker-name">{tracker.name}</span>
              <span className="tracker-domain">{tracker.domain}</span>
              <span className={`tracker-status ${tracker.blocked ? 'blocked' : 'allowed'}`}>
                {tracker.blocked ? '🚫 Blocked' : '✅ Allowed'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-section">
        <h3>Privacy Controls</h3>
        <div className="privacy-controls">
          <label className="control-toggle">
            <input type="checkbox" defaultChecked />
            <span className="toggle-slider"></span>
            <span>Block Third-Party Cookies</span>
          </label>
          <label className="control-toggle">
            <input type="checkbox" defaultChecked />
            <span className="toggle-slider"></span>
            <span>Block Fingerprinting</span>
          </label>
          <label className="control-toggle">
            <input type="checkbox" defaultChecked />
            <span className="toggle-slider"></span>
            <span>Force HTTPS</span>
          </label>
          <label className="control-toggle">
            <input type="checkbox" />
            <span className="toggle-slider"></span>
            <span>Strict Mode</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default PrivacyDashboard
