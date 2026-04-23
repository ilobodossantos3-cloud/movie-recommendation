import { useState, useEffect } from 'react'
import { api } from '../services/api'
import './PrivacyDashboard.css'

export default function PrivacyDashboard() {
  const [stats, setStats] = useState({
    trackersBlocked: 0,
    adsBlocked: 0,
    httpsUpgrades: 0,
    fingerprintingAttempts: 0,
  })
  
  const [recentBlocks, setRecentBlocks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In production, this would fetch real data from the backend
    // Simulating initial load
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  return (
    <div className="privacy-dashboard">
      <div className="dashboard-header">
        <h1>🛡️ Transparency Dashboard</h1>
        <p className="dashboard-subtitle">
          Real-time visibility into tracking attempts and privacy protections
        </p>
      </div>

      <div className="dashboard-content scrollbar-thin">
        {/* Overview Stats */}
        <section className="stats-overview">
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-details">
              <span className="stat-number">{stats.trackersBlocked}</span>
              <span className="stat-label">Trackers Blocked</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📺</div>
            <div className="stat-details">
              <span className="stat-number">{stats.adsBlocked}</span>
              <span className="stat-label">Ads Blocked</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🔒</div>
            <div className="stat-details">
              <span className="stat-number">{stats.httpsUpgrades}</span>
              <span className="stat-label">HTTPS Upgrades</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">👤</div>
            <div className="stat-details">
              <span className="stat-number">{stats.fingerprintingAttempts}</span>
              <span className="stat-label">Fingerprint Attempts</span>
            </div>
          </div>
        </section>

        {/* Protection Status */}
        <section className="protection-status">
          <h2>Active Protections</h2>
          <div className="protection-grid">
            <div className="protection-item active">
              <span className="protection-icon">✓</span>
              <span>Ad Blocker</span>
            </div>
            <div className="protection-item active">
              <span className="protection-icon">✓</span>
              <span>Tracker Blocker</span>
            </div>
            <div className="protection-item active">
              <span className="protection-icon">✓</span>
              <span>Cookie Protection</span>
            </div>
            <div className="protection-item active">
              <span className="protection-icon">✓</span>
              <span>Fingerprint Protection</span>
            </div>
            <div className="protection-item active">
              <span className="protection-icon">✓</span>
              <span>HTTPS Enforcement</span>
            </div>
            <div className="protection-item">
              <span className="protection-icon">○</span>
              <span>Script Blocking</span>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="recent-activity">
          <h2>Recent Blocking Activity</h2>
          {loading ? (
            <div className="loading-state">Loading...</div>
          ) : recentBlocks.length > 0 ? (
            <div className="activity-list">
              {recentBlocks.map((item, index) => (
                <div key={index} className="activity-item">
                  <span className="activity-type">{item.type}</span>
                  <span className="activity-domain">{item.domain}</span>
                  <span className="activity-time">{item.time}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>No blocking activity recorded yet</p>
              <p className="empty-hint">Start browsing to see trackers being blocked in real-time</p>
            </div>
          )}
        </section>

        {/* AI Analysis */}
        <section className="ai-analysis">
          <h2>🤖 AI Privacy Analysis</h2>
          <div className="ai-card">
            <p className="ai-description">
              Our AI assistant analyzes websites in real-time to identify privacy risks,
              tracking scripts, and potential security threats.
            </p>
            <button className="ai-analyze-btn">
              Analyze Current Site
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
