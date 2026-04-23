import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Settings from './pages/Settings'
import PrivacyDashboard from './pages/PrivacyDashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/privacy" element={<PrivacyDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
