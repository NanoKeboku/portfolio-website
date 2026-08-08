/**
 * Home — single-page portfolio lengkap (bento grid):
 * hero, statistik, proyek, pengalaman kerja, organisasi, soft skill, hard skill,
 * tools, CTA kontak. Animasi: framer-motion (stagger reveal on scroll).
 * Konten dari CV Alhambra Ferdinando.
 */
import { Link } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import BentoCard from '../components/ui/BentoCard'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { KONTAK, waLink } from '../data/kontak'
import { PROJECTS } from '../data/projects'
import { SKILLS, TOOLS, SOFT_SKILLS, LANGUAGES } from '../data/skills'
import { PENGALAMAN, ORGANISASI } from '../data/experience'

/* ===== Animasi framer-motion ===== */
const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const Section = ({ children, id }: { children: ReactNode; id?: string }) => (
  <motion.section
    id={id}
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-60px' }}
  >
    {children}
  </motion.section>
)

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div variants={item}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold md:text-3xl">{title}</h2>
    </motion.div>
  )
}

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-16 px-4 py-12 md:px-8 md:py-16">
      {/* ===== HERO ===== */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        <motion.div variants={item} className="md:col-span-2">
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
              <a href="#proyek">
                <Button variant="secondary" className="border-on-dark/25 bg-transparent text-on-dark">
                  Lihat Proyek ↓
                </Button>
              </a>
            </div>
          </BentoCard>
        </motion.div>

        <motion.div variants={item}>
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
        </motion.div>
      </motion.section>

      {/* ===== STATISTIK ===== */}
      <Section>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { angka: '10+', label: 'Website Dikembangkan' },
            { angka: '2.300+', label: 'Data Leads Dikelola' },
            { angka: '100+', label: 'Anggota Organisasi Dipimpin' },
            { angka: '3.55', label: 'IPK (4.00)', sub: 'S.Kom. IT' },
          ].map((s) => (
            <motion.div key={s.label} variants={item}>
              <BentoCard className="text-center">
                <p className="text-3xl font-bold text-accent">{s.angka}</p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
                {s.sub && <p className="text-xs text-muted/70">{s.sub}</p>}
              </BentoCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ===== PROYEK (semua) ===== */}
      <Section id="proyek">
        <SectionHeader eyebrow="Portofolio" title="Proyek" />
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <motion.div key={p.id} variants={item}>
              <BentoCard className="flex h-full flex-col">
                <div className="flex h-36 items-center justify-center rounded-xl bg-gradient-to-br from-accent-soft to-surface-muted text-4xl">
                  {p.emoji}
                </div>
                <h3 className="mt-4 font-semibold leading-snug">{p.judul}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.deskripsi}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.slice(0, 4).map((t) => (
                    <Badge key={t} tone="neutral">
                      {t}
                    </Badge>
                  ))}
                </div>
                {(p.repo || p.url) && (
                  <div className="mt-4 flex gap-4 border-t border-line pt-3 text-sm font-medium">
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                        GitHub ↗
                      </a>
                    )}
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                        Kunjungi situs ↗
                      </a>
                    )}
                  </div>
                )}
              </BentoCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ===== PENGALAMAN KERJA ===== */}
      <Section>
        <SectionHeader eyebrow="Pengalaman" title="Pengalaman Kerja" />
        <div className="mt-6 space-y-4">
          {PENGALAMAN.map((e) => (
            <motion.div key={e.peran} variants={item}>
              <BentoCard>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">{e.peran}</h3>
                    <p className="text-sm text-muted">{e.tempat}</p>
                  </div>
                  <Badge tone="neutral">{e.periode}</Badge>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                  {e.poin.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </BentoCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ===== ORGANISASI ===== */}
      <Section>
        <SectionHeader eyebrow="Organisasi" title="Kepemimpinan" />
        <div className="mt-6 space-y-4">
          {ORGANISASI.map((o) => (
            <motion.div key={o.peran} variants={item}>
              <BentoCard featured className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-8">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{o.peran}</h3>
                  <p className="text-sm text-on-dark/70">{o.tempat}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-on-dark/75">
                    {o.poin.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
                <Badge tone="highlight">{o.periode}</Badge>
              </BentoCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ===== SOFT SKILL & BAHASA ===== */}
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          <motion.div variants={item}>
            <BentoCard className="h-full">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Soft Skills</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {SOFT_SKILLS.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Bahasa</p>
              <ul className="mt-3 space-y-2 text-sm">
                {LANGUAGES.map((l) => (
                  <li key={l.nama} className="flex items-center justify-between gap-2">
                    <span className="font-medium">{l.nama}</span>
                    <span className="text-muted">{l.level}</span>
                  </li>
                ))}
              </ul>
            </BentoCard>
          </motion.div>

          <motion.div variants={item}>
            <BentoCard className="h-full">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Hard Skills</p>
              <div className="mt-4 space-y-3">
                {SKILLS.map((s) => (
                  <div key={s.nama} className="flex items-center gap-3">
                    <span className="w-6 text-center text-lg">{s.icon}</span>
                    <span className="w-32 text-sm font-medium">{s.nama}</span>
                    <div className="flex flex-1 gap-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <span
                          key={j}
                          className={`h-2 flex-1 rounded-full ${j < s.level ? 'bg-accent' : 'bg-line'}`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </BentoCard>
          </motion.div>
        </div>
      </Section>

      {/* ===== TOOLS ===== */}
      <Section>
        <SectionHeader eyebrow="Tools" title="Tools & Produktivitas" />
        <div className="mt-6 flex flex-wrap gap-3">
          {TOOLS.map((t) => (
            <motion.div key={t.nama} variants={item}>
              <div className="flex items-center gap-2 rounded-2xl border border-line bg-surface px-4 py-2.5 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover">
                <span className="text-xl">{t.icon}</span>
                <span className="text-sm font-medium">{t.nama}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ===== CTA KONTAK ===== */}
      <Section>
        <motion.div variants={item}>
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
        </motion.div>
      </Section>

      <p className="text-center text-sm text-muted">
        <Link to="/tentang" className="text-accent hover:underline">
          Lihat halaman Tentang →
        </Link>
      </p>
    </div>
  )
}
