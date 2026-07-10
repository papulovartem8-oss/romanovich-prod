import { useEffect, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import EnergyLine from './components/EnergyLine.jsx'
import Home from './pages/Home.jsx'

// /brief is code-split so its Framer Motion flow isn't in the initial bundle
const Brief = lazy(() => import('./pages/Brief.jsx'))

// Scroll to top on route change, or to a #hash target if present.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <CursorGlow />
      <EnergyLine />
      <Navbar />
      <Suspense
        fallback={
          <div className="grid min-h-screen place-items-center bg-ink">
            <span className="font-mono text-sm text-accent">загрузка…</span>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brief" element={<Brief />} />
        </Routes>
      </Suspense>
    </>
  )
}
