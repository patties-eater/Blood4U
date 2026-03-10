import './App.css'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/Home.jsx'
import FindDonors from './pages/FindDonors.jsx'
import RequestBlood from './pages/RequestBlood.jsx'
import Donate from './pages/Donate.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'

function App() {
  const [isAuthed, setIsAuthed] = useState(() => {
    try {
      return localStorage.getItem('blood4u_authed') === 'true'
    } catch {
      return false
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('blood4u_authed', String(isAuthed))
    } catch {
      // ignore storage errors
    }
  }, [isAuthed])

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/find-donors', label: 'Find Donors' },
    { to: '/request-blood', label: 'Request Blood' },
    { to: '/donate', label: 'Donate' },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-600 text-white shadow-lg shadow-rose-500/30">
              B4U
            </div>
            <div>
              <p className="text-lg font-semibold tracking-wide text-white">Blood4U</p>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Donate. Deliver. Defend.</p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-200">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? 'text-rose-300'
                      : 'text-slate-200 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <NavLink
              to="/request-blood"
              className="rounded-full border border-rose-500/60 px-4 py-2 text-sm font-semibold text-rose-200 transition hover:border-rose-400 hover:text-white"
            >
              Emergency Request
            </NavLink>
            {isAuthed ? (
              <button
                type="button"
                onClick={() => setIsAuthed(false)}
                className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
              >
                Log out
              </button>
            ) : (
              <NavLink
                to="/login"
                className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-10">
        <Routes>
          <Route
            path="/login"
            element={<Login onLogin={() => setIsAuthed(true)} />}
          />
          <Route
            path="/"
            element={
              <ProtectedRoute isAuthed={isAuthed}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/find-donors"
            element={
              <ProtectedRoute isAuthed={isAuthed}>
                <FindDonors />
              </ProtectedRoute>
            }
          />
          <Route
            path="/request-blood"
            element={
              <ProtectedRoute isAuthed={isAuthed}>
                <RequestBlood />
              </ProtectedRoute>
            }
          />
          <Route
            path="/donate"
            element={
              <ProtectedRoute isAuthed={isAuthed}>
                <Donate />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthed={isAuthed}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute isAuthed={isAuthed}>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute isAuthed={isAuthed}>
                <Contact />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="border-t border-slate-800/70 bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold text-white">Blood4U</p>
            <p className="text-sm text-slate-400">
              Real-time donor coordination for hospitals, NGOs, and community drives.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <span>24/7 Hotline: +977 01 555 2026</span>
            <span>hello@blood4u.org</span>
            <span>Kathmandu, Nepal</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProtectedRoute({ isAuthed, children }) {
  if (!isAuthed) {
    return <Navigate to="/login" replace />
  }
  return children
}

export default App
