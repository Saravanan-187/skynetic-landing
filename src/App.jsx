import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import DarkVeil from './components/DarkVeil'
import './index.css'

const App = () => {
  return (
    <div className="app-shell text-white">
      <div className="app-bg" aria-hidden="true">
        <div className="app-bg__gradient" />
        <div className="app-bg__veil">
          <DarkVeil
            hueShift={210}
            noiseIntensity={0.014}
            scanlineIntensity={0.08}
            scanlineFrequency={2.1}
            speed={0.5}
            warpAmount={0.03}
            resolutionScale={1.05}
          />
        </div>
        <div className="hero-noise" />
      </div>

      <div className="app-content relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

