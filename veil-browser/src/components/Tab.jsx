import React from 'react'
import './Tab.css'

function Tab({ tab }) {
  return (
    <div className={`tab ${tab.active ? 'active' : ''}`}>
      <span className="tab-favicon">🌐</span>
      <span className="tab-title">{tab.title}</span>
      <button className="tab-close" title="Close tab">×</button>
    </div>
  )
}

export default Tab
