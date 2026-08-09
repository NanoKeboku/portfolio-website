import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import useScrollToTop from '../../hooks/useScrollToTop'

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  useScrollToTop()
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* ===== NAVBAR (glass effect) ===== */}
      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/60 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <Link to="/" className="text-lg font-bold tracking-tight text-ink" onClick={() => setOpen(false)}>
            Alhambra<span className="text-accent">.</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex md:gap-2">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                    isActive ? 'bg-ink text-white' : 'text-muted hover:bg-black/5 hover:text-ink'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </div>

          {/* Hamburger (mobile) — interaktif, garis beranimasi jadi X */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/70 backdrop-blur transition hover:bg-black/5 md:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-ink transition-all duration-300 ${
                  open ? 'top-1/2 -translate-y-1/2 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-ink transition-all duration-300 ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-ink transition-all duration-300 ${
                  open ? 'bottom-1/2 translate-y-1/2 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </nav>

        {/* Mobile menu — panel glass, animasi */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="overflow-hidden border-b border-white/40 bg-white/70 backdrop-blur-xl md:hidden"
            >
              <nav className="flex flex-col gap-1 px-4 pb-4 pt-1">
                {NAV.map((n, i) => (
                  <motion.div
                    key={n.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.2 }}
                  >
                    <NavLink
                      to={n.to}
                      end={n.end}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 text-sm font-medium transition ${
                          isActive ? 'bg-ink text-white' : 'text-muted hover:bg-black/5 hover:text-ink'
                        }`
                      }
                    >
                      {n.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Alhambra Ferdinando</p>
          <p>Built with React + Tailwind</p>
        </div>
      </footer>
    </div>
  )
}
