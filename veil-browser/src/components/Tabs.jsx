import React from 'react'
import Tab from './Tab'
import './Tabs.css'

function Tabs() {
  const tabs = [
    { id: 1, title: 'DuckDuckGo', url: 'https://duckduckgo.com', active: true },
    { id: 2, title: 'Privacy Dashboard', url: 'about:dashboard', active: false },
  ]

  return (
    <div className="tabs-container">
      <div className="tabs-list">
        {tabs.map(tab => (
          <Tab key={tab.id} tab={tab} />
        ))}
        <button className="new-tab-btn" title="New Tab">+</button>
      </div>
    </div>
  )
}

export default Tabs
