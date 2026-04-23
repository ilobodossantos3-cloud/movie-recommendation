import { useState } from 'zustand'

export const useBrowserStore = useState((set) => ({
  // Current state
  currentUrl: '',
  loading: false,
  title: '',
  
  // Navigation
  history: [],
  historyIndex: -1,
  
  // Actions
  navigate: (url) => set({ currentUrl: url, loading: true }),
  setLoading: (loading) => set({ loading }),
  setTitle: (title) => set({ title }),
  goBack: () => set((state) => ({ 
    historyIndex: state.historyIndex - 1,
    currentUrl: state.history[state.historyIndex - 1] || ''
  })),
  goForward: () => set((state) => ({ 
    historyIndex: state.historyIndex + 1,
    currentUrl: state.history[state.historyIndex + 1] || ''
  })),
}))
