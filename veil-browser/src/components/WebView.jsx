import { useEffect, useState } from 'react'
import { useTabStore } from '../store/tabStore'
import { useBrowserStore } from '../store/browserStore'
import './WebView.css'

export default function WebView() {
  const activeTabId = useTabStore((state) => state.activeTabId)
  const tabs = useTabStore((state) => state.tabs)
  const updateTab = useTabStore((state) => state.updateTab)
  const setTitle = useBrowserStore((state) => state.setTitle)
  const setLoading = useBrowserStore((state) => state.setLoading)
  
  const [error, setError] = useState(null)

  const activeTab = tabs.find((tab) => tab.id === activeTabId)

  useEffect(() => {
    if (activeTab) {
      // In the actual Tauri implementation, this would be a webview component
      // For now, we'll simulate with an iframe (not secure, just for demo)
      setError(null)
    }
  }, [activeTab?.id])

  if (!activeTab) {
    return (
      <div className="webview-empty">
        <h2>Welcome to Veil Browser</h2>
        <p>Open a new tab to start browsing privately</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="webview-error">
        <h2>⚠️ Error Loading Page</h2>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="webview-container">
      {/* 
        Note: In production, this should be replaced with Tauri's webview
        This is just a placeholder for development
      */}
      <div className="webview-placeholder">
        <div className="placeholder-content">
          <h2>🌐 {activeTab?.title || 'Loading...'}</h2>
          <p>URL: {activeTab?.url}</p>
          {activeTab?.loading && <p>Loading...</p>}
        </div>
      </div>
    </div>
  )
}
