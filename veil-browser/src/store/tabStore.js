import { useState } from 'zustand'

export const useTabStore = useState((set) => ({
  tabs: [],
  activeTabId: null,
  
  // Actions
  createTab: (url = 'about:blank') => set((state) => {
    const newTab = {
      id: Date.now(),
      url,
      title: 'New Tab',
      loading: false,
      favicon: null,
    }
    return {
      tabs: [...state.tabs, newTab],
      activeTabId: newTab.id,
    }
  }),
  
  closeTab: (tabId) => set((state) => {
    const newTabs = state.tabs.filter(t => t.id !== tabId)
    let newActiveId = state.activeTabId
    
    if (state.activeTabId === tabId) {
      newActiveId = newTabs.length > 0 ? newTabs[newTabs.length - 1].id : null
    }
    
    return {
      tabs: newTabs,
      activeTabId: newActiveId,
    }
  }),
  
  setActiveTab: (tabId) => set({ activeTabId: tabId }),
  
  updateTab: (tabId, updates) => set((state) => ({
    tabs: state.tabs.map(tab => 
      tab.id === tabId ? { ...tab, ...updates } : tab
    ),
  })),
}))
