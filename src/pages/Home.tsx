/**
 * Home — bento grid: hero, statistik, proyek unggulan, keahlian, CTA kontak.
 * Konten dari CV Alhambra Ferdinando.
 */
import { Link } from 'react-router-dom'
import BentoCard from '../components/ui/BentoCard'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import { KONTAK, waLink } from '../data/kontak'
import { PROJECTS } from '../data/projects'
import { SKILLS } from '../data/skills'

export default function Home() {
  const featured = PROJECTS.filter((p) => p.featured).concat(PROJECTS.filter((p) => !p.featured)).slice(0, 3)

  return (
    <div className="mx-auto w-full max-w-6xl space-y-16 px-4 py-12 md:px-8 md:py-16">
      {/* ===== HERO ===== */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <BentoCard featured className="flex h-full min-h-80 flex-col justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge tone="highlight">IT Student</Badge>
                <Badge tone="highlight">Web Developer</Badge>
              </div>
              <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
                Halo, saya {KONTAK.namaPendek} 👋
              </h1>
              <p className="mt-4 max-w-xl text-on-dark/75">{KONTAK.tagline}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={waLink('Halo Alhambra, saya tertarik dengan jasa Anda!')}>
                <Button>💬 Hubungi via WhatsApp</Button>
              </a>
              <Link to="/proyek">
                <Button variant="secondary" className="border-on-dark/25 bg-transparent text-on-dark">
                  Lihat Proyek →
                </Button>
              </Link>
            </div>
          </BentoCard>
        </Reveal>

        <Reveal delay={0.1}>
          <BentoCard className="flex h-full min-h-80 flex-col items-center justify-center gap-3 text-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-accent-soft text-5xl font-bold text-accent">
              AF
            </div>
            <div>
              <p className="font-semibold">{KONTAK.nama}</p>
              <p className="text-sm text-muted">{KONTAK.lokasi}</p>
            </div>
            <p className="text-xs text-muted/70">Ganti dengan foto profil</p>
          </BentoCard>
        </Reveal>
      </section>

      {/* ===== STATISTIK ===== */}
      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          { angka: '10+', label: 'Website Dikembangkan' },
          { angka: '2.300+', label: 'Data Leads Dikelola' },
          { angka: '100+', label: 'Anggota Organisasi Dipimpin' },
          { angka: '3.55', label: 'IPK (4.00)', sub: 'S.Kom. IT' },
        ].map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05}>
            <BentoCard className="text-center">
              <p className="text-3xl font-bold text-accent">{s.angka}</p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
              {s.sub && <p className="text-xs text-muted/70">{s.sub}</p>}
            </BentoCard>
          </Reveal>
        ))}
      </section>

      {/* ===== PROYEK UNGGULAN ===== */}
      <section>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Portofolio</p>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-2xl font-bold md:text-3xl">Proyek Unggulan</h2>
            <Link to="/proyek" className="text-sm font-medium text-accent hover:underline">
              Lihat semua →
            </Link>
          </div>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <BentoCard className="flex h-full flex-col">
                <div className="flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-accent-soft to-surface-muted text-4xl">
                  {p.emoji}
                </div>
                <h3 className="mt-4 font-semibold leading-snug">{p.judul}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{p.deskripsi}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.slice(0, 3).map((t) => (
                    <Badge key={t} tone="neutral">
                      {t}
                    </Badge>
                  ))}
                </div>
                {(p.repo || p.url) && (
                  <a
                    href={p.repo ?? p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 text-sm font-medium text-accent hover:underline"
                  >
                    {p.repo ? 'Lihat kode di GitHub →' : 'Kunjungi situs →'}
                  </a>
                )}
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== KEHLIAN ===== */}
      <section>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Keahlian</p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">Teknologi yang Saya Gunakan</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {SKILLS.slice(0, 8).map((s, i) => (
            <Reveal key={s.nama} delay={i * 0.05}>
              <BentoCard className="flex items-center gap-3">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p className="font-semibold leading-tight">{s.nama}</p>
                  <div className="mt-1 flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <span
                        key={j}
                        className={`h-1.5 w-3 rounded-full ${j < s.level ? 'bg-accent' : 'bg-line'}`}
                      />
                    ))}
                  </div>
                </div>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== CTA KONTAK ===== */}
      <Reveal>
        <BentoCard featured className="flex flex-col items-center gap-4 py-12 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Tertarik bekerja sama?</h2>
          <p className="max-w-lg text-on-dark/75">
            Saya terbuka untuk proyek website, sistem leads, dan automasi bisnis. Mari diskusikan ide Anda.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <a href={waLink('Halo Alhambra, saya ingin diskusi proyek.')}>
              <Button>💬 Chat WhatsApp</Button>
            </a>
            <a href={`mailto:${KONTAK.email}`}>
              <Button variant="secondary" className="border-on-dark/25 bg-transparent text-on-dark">
                ✉️ Kirim Email
              </Button>
            </a>
          </div>
        </BentoCard>
      </Reveal>
    </div>
  )
}
