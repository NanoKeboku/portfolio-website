/**
 * 404 — halaman tidak ditemukan.
 */
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-24 text-center">
      <p className="text-6xl font-bold text-accent">404</p>
      <h1 className="mt-4 text-2xl font-bold">Halaman tidak ditemukan</h1>
      <Link to="/" className="mt-6">
        <Button>← Kembali ke Beranda</Button>
      </Link>
    </section>
  )
}
