import { useState } from 'react'
import { useSettingsStore } from '../store/settingsStore'
import { api } from '../services/api'
import './Sidebar.css'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const settings = useSettingsStore()
  
  const handlePrivacyToggle = async (action) => {
    try {
      await action()
    } catch (error) {
      console.error('Toggle failed:', error)
    }
  }

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <h3>Control Center</h3>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '←' : '→'}
        </button>
      </div>
      
      {isOpen && (
        <div className="sidebar-content scrollbar-thin">
          {/* Privacy Controls */}
          <section className="sidebar-section">
            <h4>🛡️ Privacy Shield</h4>
            
            <div className="control-item">
              <label>
                <input
                  type="checkbox"
                  checked={settings.blockAds}
                  onChange={() => handlePrivacyToggle(settings.toggleBlockAds)}
                />
                Block Ads
              </label>
            </div>
            
            <div className="control-item">
              <label>
                <input
                  type="checkbox"
                  checked={settings.blockTrackers}
                  onChange={() => handlePrivacyToggle(settings.toggleBlockTrackers)}
                />
                Block Trackers
              </label>
            </div>
            
            <div className="control-item">
              <label>
                <input
                  type="checkbox"
                  checked={settings.blockFingerprinting}
                  onChange={() => handlePrivacyToggle(settings.toggleBlockFingerprinting)}
                />
                Anti-Fingerprinting
              </label>
            </div>
            
            <div className="control-item">
              <label>
                <input
                  type="checkbox"
                  checked={settings.enforceHttps}
                  onChange={() => handlePrivacyToggle(settings.toggleEnforceHttps)}
                />
                Enforce HTTPS
              </label>
            </div>
          </section>
          
          {/* Privacy Level */}
          <section className="sidebar-section">
            <h4>📊 Privacy Level</h4>
            <div className="privacy-levels">
              {['strict', 'balanced', 'custom'].map((level) => (
                <button
                  key={level}
                  className={`level-btn ${settings.privacyLevel === level ? 'active' : ''}`}
                  onClick={() => settings.setPrivacyLevel(level)}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </section>
          
          {/* Quick Stats */}
          <section className="sidebar-section">
            <h4>📈 Today's Stats</h4>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-value">0</span>
                <span className="stat-label">Trackers Blocked</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">0</span>
                <span className="stat-label">Ads Blocked</span>
              </div>
            </div>
          </section>
          
          {/* AI Shield */}
          <section className="sidebar-section">
            <h4>🤖 AI Shield</h4>
            <p className="ai-info">
              Real-time privacy analysis powered by AI
            </p>
            <button className="ai-btn">
              Analyze Current Site
            </button>
          </section>
        </div>
      )}
    </aside>
  )
}
