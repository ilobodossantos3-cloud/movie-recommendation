import { useTabStore } from '../store/tabStore'
import './Tabs.css'

export default function Tabs() {
  const tabs = useTabStore((state) => state.tabs)
  const activeTabId = useTabStore((state) => state.activeTabId)
  const setActiveTab = useTabStore((state) => state.setActiveTab)
  const closeTab = useTabStore((state) => state.closeTab)
  const createTab = useTabStore((state) => state.createTab)

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${tab.id === activeTabId ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.favicon && <img src={tab.favicon} alt="" className="favicon" />}
            <span className="tab-title">{tab.title}</span>
            <button
              className="close-tab"
              onClick={(e) => {
                e.stopPropagation()
                closeTab(tab.id)
              }}
            >
              ×
            </button>
          </div>
        ))}
        
        <button className="new-tab-btn" onClick={() => createTab()}>
          +
        </button>
      </div>
    </div>
  )
}
