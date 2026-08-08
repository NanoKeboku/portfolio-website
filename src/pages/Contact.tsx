/**
 * Status: KERANGKA (implementasi penuh menyusul; automation WA = fase berikut).
 * Kontak — form/CTA WhatsApp + email + sosmed.
 */
import Button from '../components/ui/Button'
import { KONTAK, waLink } from '../data/kontak'

export default function Contact() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Kontak</p>
      <h1 className="mt-2 text-3xl font-bold">Hubungi Saya</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-line bg-surface p-6">
          <p className="text-sm text-muted">Email</p>
          <p className="mt-1 font-medium">{KONTAK.email}</p>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-6">
          <p className="text-sm text-muted">WhatsApp</p>
          <a href={waLink('Halo!')} className="mt-2 inline-block">
            <Button>💬 Chat WhatsApp</Button>
          </a>
        </div>
      </div>
    </section>
  )
}
