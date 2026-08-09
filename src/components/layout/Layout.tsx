import { useState, useEffect, lazy, Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

/** Background 3D dimuat lazy (three.js ~600KB dipisah dari bundle utama). */
const Background3D = lazy(() => import('../background/Background3D'))

/** Menu single-page — semua mengarah ke section di Home (smooth scroll). */
const NAV = [
  { to: '#home', label: 'Home' },
  { to: '#projects', label: 'Projects' },
  { to: '#about', label: 'About' },
  { to: '#contact', label: 'Contact' },
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const [show3d, setShow3d] = useState(false)

  // Tunda render background 3D agar first paint tidak terblokir bundle three.js
  useEffect(() => {
    const id = window.setTimeout(() => setShow3d(true), 400)
    return () => window.clearTimeout(id)
  }, [])

  /** Scroll halus ke section + tutup menu (fix: anchor tidak bisa diklik di mobile). */
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(to)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Latar 3D (fixed di belakang konten) — dimuat lazy setelah render pertama */}
      {show3d && (
        <Suspense fallback={null}>
          <Background3D />
        </Suspense>
      )}

      {/* ===== NAVBAR (glass effect) ===== */}
      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/60 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <Link to="/" className="text-lg font-bold tracking-tight text-ink" onClick={() => setOpen(false)}>
            Alhambra<span className="text-accent">.</span>
          </Link>

          {/* Desktop nav — anchor scroll ke section Home */}
          <div className="hidden items-center gap-1 md:flex md:gap-2">
            {NAV.map((n) => (
              <a
                key={n.to}
                href={n.to}
                onClick={(e) => scrollToSection(e, n.to)}
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted transition hover:bg-black/5 hover:text-ink"
              >
                {n.label}
              </a>
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
                className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-ink transition-all duration-300 ${open ? 'top-1/2 -translate-y-1/2 rotate-45' : ''
                  }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-ink transition-all duration-300 ${open ? 'opacity-0' : ''
                  }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-ink transition-all duration-300 ${open ? 'bottom-1/2 translate-y-1/2 -rotate-45' : ''
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
                {NAV.map((n) => (
                  <a
                    key={n.to}
                    href={n.to}
                    onClick={(e) => scrollToSection(e, n.to)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-muted transition hover:bg-black/5 hover:text-ink"
                  >
                    {n.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10 flex-1">
        <Outlet />
      </main>

      <footer className="relative z-10 border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Alhambra Ferdinando</p>
          <p>Built with Love 💌</p>
        </div>
      </footer>
    </div>
  )
}
