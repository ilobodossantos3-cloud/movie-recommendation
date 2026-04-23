import { useEffect } from 'react'
import { useTabStore } from '../store/tabStore'
import Navbar from '../components/Navbar'
import Tabs from '../components/Tabs'
import WebView from '../components/WebView'
import Sidebar from '../components/Sidebar'

export default function Home() {
  const createTab = useTabStore((state) => state.createTab)
  const tabs = useTabStore((state) => state.tabs)

  useEffect(() => {
    // Create initial tab on mount
    if (tabs.length === 0) {
      createTab('about:blank')
    }
  }, [])

  return (
    <div className="browser-container">
      <Tabs />
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <WebView />
      </div>
    </div>
  )
}
