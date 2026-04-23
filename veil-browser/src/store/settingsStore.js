import { useState } from 'zustand'

export const useSettingsStore = useState((set) => ({
  // Privacy settings
  privacyLevel: 'balanced', // strict, balanced, custom
  blockAds: true,
  blockTrackers: true,
  blockCookies: 'third-party', // all, third-party, none
  blockScripts: false,
  blockFingerprinting: true,
  enforceHttps: true,
  
  // UI settings
  theme: 'dark', // dark, light, system
  layout: 'default', // default, compact, spacious
  showBookmarks: true,
  showSidebar: true,
  
  // Search settings
  defaultSearchEngine: 'duckduckgo',
  customSearchEngines: [],
  
  // Actions
  setPrivacyLevel: (level) => set({ privacyLevel: level }),
  toggleBlockAds: () => set((state) => ({ blockAds: !state.blockAds })),
  toggleBlockTrackers: () => set((state) => ({ blockTrackers: !state.blockTrackers })),
  setBlockCookies: (value) => set({ blockCookies: value }),
  toggleBlockScripts: () => set((state) => ({ blockScripts: !state.blockScripts })),
  toggleBlockFingerprinting: () => set((state) => ({ blockFingerprinting: !state.blockFingerprinting })),
  toggleEnforceHttps: () => set((state) => ({ enforceHttps: !state.enforceHttps })),
  setTheme: (theme) => set({ theme }),
  setLayout: (layout) => set({ layout }),
  toggleBookmarks: () => set((state) => ({ showBookmarks: !state.showBookmarks })),
  toggleSidebar: () => set((state) => ({ showSidebar: !state.showSidebar })),
  setDefaultSearchEngine: (engine) => set({ defaultSearchEngine: engine }),
}))
