import { useState } from 'react'
import { useBrowserStore } from '../store/browserStore'
import { useTabStore } from '../store/tabStore'
import { api } from '../services/api'
import './Navbar.css'

export default function Navbar() {
  const [urlInput, setUrlInput] = useState('')
  const currentUrl = useBrowserStore((state) => state.currentUrl)
  const loading = useBrowserStore((state) => state.loading)
  const navigate = useBrowserStore((state) => state.navigate)
  const activeTabId = useTabStore((state) => state.activeTabId)
  const updateTab = useTabStore((state) => state.updateTab)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = urlInput.startsWith('http') ? urlInput : `https://${urlInput}`
    
    try {
      await api.navigate(url)
      navigate(url)
      updateTab(activeTabId, { url, loading: true })
    } catch (error) {
      console.error('Navigation failed:', error)
    }
  }

  const handleBack = async () => {
    try {
      await api.goBack()
      useBrowserStore.getState().goBack()
    } catch (error) {
      console.error('Go back failed:', error)
    }
  }

  const handleForward = async () => {
    try {
      await api.goForward()
      useBrowserStore.getState().goForward()
    } catch (error) {
      console.error('Go forward failed:', error)
    }
  }

  const handleReload = async () => {
    try {
      await api.reload()
    } catch (error) {
      console.error('Reload failed:', error)
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-controls">
        <button onClick={handleBack} disabled={!useBrowserStore.getState().historyIndex > 0}>
          ←
        </button>
        <button onClick={handleForward}>
          →
        </button>
        <button onClick={handleReload}>
          {loading ? '✕' : '↻'}
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="url-bar">
        <input
          type="text"
          value={urlInput || currentUrl}
          onChange={(e) => setUrlInput(e.target.value)}
          placeholder="Enter URL or search..."
          className="url-input"
        />
      </form>
      
      <div className="nav-actions">
        <button className="shield-btn" title="AI Shield">
          🛡️
        </button>
        <button className="menu-btn" title="Menu">
          ☰
        </button>
      </div>
    </nav>
  )
}
