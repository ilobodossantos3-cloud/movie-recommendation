import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Tabs from './components/Tabs'
import Sidebar from './components/Sidebar'
import PrivacyDashboard from './pages/PrivacyDashboard'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [dashboardOpen, setDashboardOpen] = useState(false)

  return (
    <div className="app">
      <Tabs />
      <Navbar onDashboardClick={() => setDashboardOpen(!dashboardOpen)} />
      <div className="main-content">
        <div className="webview-container">
          <iframe 
            src="https://duckduckgo.com"
            className="webview"
            title="Browser View"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
          {dashboardOpen && <PrivacyDashboard />}
        </div>
        {sidebarOpen && <Sidebar />}
      </div>
    </div>
  )
}

export default App
