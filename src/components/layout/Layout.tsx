import { Link, NavLink, Outlet } from 'react-router-dom'
import useScrollToTop from '../../hooks/useScrollToTop'

const NAV = [
  { to: '/', label: 'Beranda', end: true },
  { to: '/proyek', label: 'Proyek' },
  { to: '/tentang', label: 'Tentang' },
  { to: '/kontak', label: 'Kontak' },
]

export default function Layout() {
  useScrollToTop()
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <Link to="/" className="text-lg font-bold tracking-tight text-ink">
            Alhambra<span className="text-accent">.</span>
          </Link>
          <div className="flex items-center gap-1 md:gap-2">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                    isActive ? 'bg-accent-soft text-accent' : 'text-muted hover:bg-surface-muted hover:text-ink'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Alhambra Ferdinando</p>
          <p>Dibuat dengan React + Tailwind</p>
        </div>
      </footer>
    </div>
  )
}
