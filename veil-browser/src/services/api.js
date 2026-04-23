import { invoke } from '@tauri-apps/api'

export const api = {
  // Navigation commands
  navigate: async (url) => {
    return await invoke('navigate', { url })
  },
  
  goBack: async () => {
    return await invoke('go_back')
  },
  
  goForward: async () => {
    return await invoke('go_forward')
  },
  
  reload: async () => {
    return await invoke('reload')
  },
  
  // Privacy commands
  blockAds: async (enabled) => {
    return await invoke('toggle_adblock', { enabled })
  },
  
  blockTrackers: async (enabled) => {
    return await invoke('toggle_tracker_blocker', { enabled })
  },
  
  setPrivacyLevel: async (level) => {
    return await invoke('set_privacy_level', { level })
  },
  
  // AI Shield commands
  analyzeUrl: async (url) => {
    return await invoke('analyze_url', { url })
  },
  
  getRiskScore: async (url) => {
    return await invoke('get_risk_score', { url })
  },
  
  detectTrackers: async (url) => {
    return await invoke('detect_trackers', { url })
  },
  
  // Settings commands
  getSettings: async () => {
    return await invoke('get_settings')
  },
  
  updateSettings: async (settings) => {
    return await invoke('update_settings', { settings })
  },
  
  // Permission commands
  getSitePermissions: async (url) => {
    return await invoke('get_site_permissions', { url })
  },
  
  setSitePermission: async (url, permission, value) => {
    return await invoke('set_site_permission', { url, permission, value })
  },
}
