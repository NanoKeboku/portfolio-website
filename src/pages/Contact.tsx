/**
 * Kontak — CTA WhatsApp, email, lokasi, dan sosial media.
 * (Automation WhatsApp = fase berikutnya; saat ini link wa.me langsung.)
 */
import BentoCard from '../components/ui/BentoCard'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import { KONTAK, waLink } from '../data/kontak'

export default function Contact() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-8 md:py-16">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Kontak</p>
        <h1 className="mt-2 text-3xl font-bold">Hubungi Saya</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Ada proyek website, sistem leads, atau automasi bisnis yang ingin didiskusikan? Kirim pesan — saya
          biasanya membalas cepat.
        </p>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Reveal>
          <BentoCard className="h-full">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-2xl">
              💬
            </div>
            <h2 className="mt-4 font-semibold">WhatsApp</h2>
            <p className="mt-1 text-sm text-muted">Respon tercepat untuk diskusi proyek.</p>
            <a href={waLink('Halo Alhambra! Saya ingin diskusi proyek.')} className="mt-4 inline-block">
              <Button>Chat Sekarang</Button>
            </a>
          </BentoCard>
        </Reveal>

        <Reveal delay={0.08}>
          <BentoCard className="h-full">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-2xl">
              ✉️
            </div>
            <h2 className="mt-4 font-semibold">Email</h2>
            <p className="mt-1 text-sm text-muted">Untuk proposal & kerja sama formal.</p>
            <a href={`mailto:${KONTAK.email}`} className="mt-4 inline-block">
              <Button variant="secondary">{KONTAK.email}</Button>
            </a>
          </BentoCard>
        </Reveal>

        <Reveal delay={0.16}>
          <BentoCard className="h-full">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-2xl">
              🌐
            </div>
            <h2 className="mt-4 font-semibold">Sosial & Lainnya</h2>
            <p className="mt-1 text-sm text-muted">Jejak digital & portofolio.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={KONTAK.sosmed.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-line px-4 py-2 text-sm font-medium transition hover:bg-surface-muted"
              >
                GitHub ↗
              </a>
              <a
                href={KONTAK.sosmed.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-line px-4 py-2 text-sm font-medium transition hover:bg-surface-muted"
              >
                LinkedIn ↗
              </a>
              <a
                href={KONTAK.sosmed.portfolioLama}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-line px-4 py-2 text-sm font-medium transition hover:bg-surface-muted"
              >
                Portofolio Lama ↗
              </a>
            </div>
          </BentoCard>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <BentoCard featured className="mt-4 flex flex-col items-center gap-3 py-10 text-center">
          <p className="text-xl font-bold">📍 {KONTAK.lokasi}</p>
          <p className="max-w-md text-sm text-on-dark/75">
            Terbuka untuk proyek remote di seluruh Indonesia.
          </p>
        </BentoCard>
      </Reveal>
    </div>
  )
}
