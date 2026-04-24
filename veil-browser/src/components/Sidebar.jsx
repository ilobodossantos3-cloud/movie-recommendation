import React from 'react'
import './Sidebar.css'

function Sidebar() {
  const menuItems = [
    { icon: '🏠', label: 'Home', active: false },
    { icon: '📑', label: 'Tabs', active: false },
    { icon: '🔖', label: 'Bookmarks', active: false },
    { icon: '📥', label: 'Downloads', active: false },
    { icon: '🛡️', label: 'Privacy', active: true },
    { icon: '⚙️', label: 'Settings', active: false },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-menu">
        {menuItems.map((item, index) => (
          <button 
            key={index} 
            className={`sidebar-btn ${item.active ? 'active' : ''}`}
            title={item.label}
          >
            <span className="sidebar-icon">{item.icon}</span>
          </button>
        ))}
      </div>
      
      <div className="sidebar-stats">
        <div className="stat">
          <span className="stat-value">24</span>
          <span className="stat-label">Trackers Blocked</span>
        </div>
        <div className="stat">
          <span className="stat-value">12</span>
          <span className="stat-label">Ads Blocked</span>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
