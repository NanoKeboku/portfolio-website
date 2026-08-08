/**
 * Status: KERANGKA (implementasi penuh menunggu verifikasi design system foto).
 * Home — bento grid: hero, tentang singkat, proyek unggulan, keahlian, kontak.
 */
import BentoCard from '../components/ui/BentoCard'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import { KONTAK, waLink } from '../data/kontak'

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-16 px-4 py-12 md:px-8 md:py-16">
      {/* Hero */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <BentoCard featured className="min-h-72">
            <Badge tone="highlight">Web Developer</Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Halo, saya {KONTAK.nama.split(' ')[0]} 👋
            </h1>
            <p className="mt-3 max-w-xl text-on-dark/70">
              Saya membangun website & automasi bisnis — dari landing page hingga
              sistem leads dengan AI. (KERANGKA — konten final menyusul.)
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={waLink('Halo, saya tertarik dengan jasa Anda!')}>
                <Button>💬 Hubungi via WhatsApp</Button>
              </a>
              <Button variant="secondary" className="text-on-dark border-on-dark/20 bg-transparent">
                Lihat Proyek
              </Button>
            </div>
          </BentoCard>
        </Reveal>
        <Reveal delay={0.1}>
          <BentoCard className="flex h-full min-h-72 flex-col items-center justify-center text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-accent-soft text-4xl">
              👨‍💻
            </div>
            <p className="mt-4 text-sm text-muted">Foto/avatar</p>
            <p className="mt-1 text-xs text-muted/70">(isi dari foto design)</p>
          </BentoCard>
        </Reveal>
      </section>

      {/* Statistik */}
      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          { angka: '5+', label: 'Tahun Pengalaman' },
          { angka: '20+', label: 'Proyek Selesai' },
          { angka: '10+', label: 'Klien Bisnis' },
          { angka: '100%', label: 'Komitmen' },
        ].map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05}>
            <BentoCard className="text-center">
              <p className="text-3xl font-bold text-accent">{s.angka}</p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </BentoCard>
          </Reveal>
        ))}
      </section>

      {/* Proyek unggulan */}
      <section>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Proyek</p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">Proyek Unggulan</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 0.08}>
              <BentoCard className="min-h-44">
                <div className="flex h-32 items-center justify-center rounded-xl bg-surface-muted text-3xl">
                  🖼️
                </div>
                <h3 className="mt-4 font-semibold">Nama Proyek {i + 1}</h3>
                <p className="mt-1 text-sm text-muted">Deskripsi singkat proyek. (KERANGKA)</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge tone="neutral">React</Badge>
                  <Badge tone="neutral">Tailwind</Badge>
                </div>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Keahlian */}
      <section>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Keahlian</p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">Teknologi yang Saya Pakai</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {['React', 'TypeScript', 'Tailwind', 'Cloudflare'].map((t, i) => (
            <Reveal key={t} delay={i * 0.05}>
              <BentoCard className="text-center">
                <p className="font-semibold">{t}</p>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
