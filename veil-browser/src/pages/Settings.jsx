import { useState } from 'react'
import { useSettingsStore } from '../store/settingsStore'
import './Settings.css'

export default function Settings() {
  const settings = useSettingsStore()

  return (
    <div className="settings-page">
      <div className="settings-header">
        <h1>⚙️ Settings</h1>
      </div>
      
      <div className="settings-content scrollbar-thin">
        {/* Privacy Section */}
        <section className="settings-section">
          <h2>🛡️ Privacy</h2>
          
          <div className="setting-group">
            <label>Privacy Level</label>
            <select 
              value={settings.privacyLevel}
              onChange={(e) => settings.setPrivacyLevel(e.target.value)}
              className="setting-select"
            >
              <option value="strict">Strict - Maximum protection</option>
              <option value="balanced">Balanced - Good protection with compatibility</option>
              <option value="custom">Custom - Configure manually</option>
            </select>
          </div>
          
          <div className="setting-item">
            <div className="setting-info">
              <h4>Block Ads</h4>
              <p>Remove advertisements from websites</p>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={settings.blockAds}
                onChange={settings.toggleBlockAds}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
          
          <div className="setting-item">
            <div className="setting-info">
              <h4>Block Trackers</h4>
              <p>Prevent tracking scripts and pixels</p>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={settings.blockTrackers}
                onChange={settings.toggleBlockTrackers}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
          
          <div className="setting-item">
            <div className="setting-info">
              <h4>Block Cookies</h4>
              <p>Control cookie acceptance</p>
            </div>
            <select
              value={settings.blockCookies}
              onChange={(e) => settings.setBlockCookies(e.target.value)}
              className="setting-select"
            >
              <option value="all">Block All</option>
              <option value="third-party">Block Third-Party Only</option>
              <option value="none">Allow All</option>
            </select>
          </div>
          
          <div className="setting-item">
            <div className="setting-info">
              <h4>Block Scripts</h4>
              <p>Disable JavaScript execution</p>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={settings.blockScripts}
                onChange={settings.toggleBlockScripts}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
          
          <div className="setting-item">
            <div className="setting-info">
              <h4>Anti-Fingerprinting</h4>
              <p>Prevent browser fingerprinting</p>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={settings.blockFingerprinting}
                onChange={settings.toggleBlockFingerprinting}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
          
          <div className="setting-item">
            <div className="setting-info">
              <h4>Enforce HTTPS</h4>
              <p>Automatically upgrade to secure connections</p>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={settings.enforceHttps}
                onChange={settings.toggleEnforceHttps}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </section>
        
        {/* Appearance Section */}
        <section className="settings-section">
          <h2>🎨 Appearance</h2>
          
          <div className="setting-group">
            <label>Theme</label>
            <select
              value={settings.theme}
              onChange={(e) => settings.setTheme(e.target.value)}
              className="setting-select"
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="system">System</option>
            </select>
          </div>
          
          <div className="setting-group">
            <label>Layout</label>
            <select
              value={settings.layout}
              onChange={(e) => settings.setLayout(e.target.value)}
              className="setting-select"
            >
              <option value="default">Default</option>
              <option value="compact">Compact</option>
              <option value="spacious">Spacious</option>
            </select>
          </div>
        </section>
        
        {/* Search Section */}
        <section className="settings-section">
          <h2>🔍 Search</h2>
          
          <div className="setting-group">
            <label>Default Search Engine</label>
            <select
              value={settings.defaultSearchEngine}
              onChange={(e) => settings.setDefaultSearchEngine(e.target.value)}
              className="setting-select"
            >
              <option value="duckduckgo">DuckDuckGo</option>
              <option value="google">Google</option>
              <option value="bing">Bing</option>
              <option value="startpage">StartPage</option>
              <option value="qwant">Qwant</option>
            </select>
          </div>
        </section>
      </div>
    </div>
  )
}
