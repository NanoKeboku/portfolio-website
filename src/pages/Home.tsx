/**
 * Home — single-page portfolio (monokrom hitam soft):
 * hero (background + center) → specialization → statistik → proyek →
 * pengalaman → organisasi → soft skill → tech stack → AI tools → CTA.
 * Animasi: framer-motion. Logo: react-icons.
 */
import { motion, type Variants } from 'framer-motion'
import { useState, type ReactNode, type ElementType } from 'react'
import { FaPalette, FaLaptopCode, FaFilm, FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaLocationDot, FaClock } from 'react-icons/fa6'
import BentoCard from '../components/ui/BentoCard'
import Badge from '../components/ui/Badge'
import ProjectCarousel from '../components/ui/ProjectCarousel'
import ComingSoonCard from '../components/ui/ComingSoonCard'
import MarqueeHero from '../components/ui/MarqueeHero'
import FeaturedProject from '../components/ui/FeaturedProject'
import { KONTAK } from '../data/kontak'
import { PROJECTS } from '../data/projects'
import { TECH_STACK, TOOLS_BUILD, PRODUCTIVITY_TOOLS } from '../data/skills'
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

function SectionHeader({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <motion.div variants={item}>
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{eyebrow}</p>}
      <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
    </motion.div>
  )
}

/** Chip label dengan logo asli + flow effect border (lihat .chip-flow di index.css). */
function TechChip({ name, icon: Icon }: { name: string; icon: ElementType }) {
  return (
    <div className="chip-flow flex items-center gap-2.5 rounded-full bg-surface px-4 py-2.5 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover">
      <Icon className="h-4 w-4 shrink-0" aria-hidden />
      <span className="text-sm font-medium text-ink">{name}</span>
    </div>
  )
}

/* ===== Spesialisasi ===== */
const SPECIALIZATIONS = [
  {
    icon: FaPalette,
    judul: 'UI/UX Design',
    deskripsi: 'Wireframes, prototypes, and design systems in Figma — clear, consistent, and easy-to-use interfaces.',
  },
  {
    icon: FaLaptopCode,
    judul: 'Web Development',
    deskripsi: 'Modern frontend & backend: React, TypeScript, Laravel, all the way to Cloudflare Pages deployment.',
  },
  {
    icon: FaFilm,
    judul: 'Motion & Graphic Design',
    deskripsi: 'Visual assets, posters, social media content, and motion graphics with Canva, Photoshop, and After Effects.',
  },
]

/* ===== Tab filter proyek ===== */
const PROJECT_TABS = [
  { id: 'web', label: 'Web Dev' },
  { id: 'design', label: 'Design Graphic' },
  { id: 'motion', label: 'Motion Design' },
] as const
type ProjectTab = (typeof PROJECT_TABS)[number]['id']

export default function Home() {
  const [tab, setTab] = useState<ProjectTab>('web')
  const [form, setForm] = useState({ nama: '', email: '', subject: '', pesan: '' })

  const kirimEmail = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || `Pesan dari ${form.nama || 'pengunjung'}`)
    const body = encodeURIComponent(
      `Nama: ${form.nama}\nEmail: ${form.email}\n\n${form.pesan}`,
    )
    window.location.href = `mailto:${KONTAK.email}?subject=${subject}&body=${body}`
  }

  const setField = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  return (
    <div>
      {/* ===== HERO MARQUEE (brutalist, full-width, scroll-reactive) ===== */}
      <MarqueeHero />

      <div className="mx-auto w-full max-w-6xl space-y-20 px-4 py-12 md:px-8 md:py-16">
        {/* ===== FEATURED PROJECT (kartu tunggal di bawah marquee) ===== */}
        <FeaturedProject />

        {/* ===== ABOUT (short bio) ===== */}
      <Section id="about">
        <SectionHeader eyebrow="About" title="About Me" />
        <motion.div variants={item}>
          <BentoCard>
            <p className="text-sm leading-relaxed text-muted">
              I am an Information Technology student at Universitas Muhammadiyah Purworejo with a deep
              interest in technology and multimedia — active in web development, visual branding, and
              digital content creation.
            </p>
          </BentoCard>
        </motion.div>
      </Section>

      {/* ===== SPECIALIZATION ===== */}
      <Section>
        <SectionHeader eyebrow="Specialization" title="What I Do" />
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {SPECIALIZATIONS.map((s) => (
            <motion.div key={s.judul} variants={item}>
              <BentoCard className="flex h-full flex-col items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dark-card text-on-dark">
                  <s.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.judul}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.deskripsi}</p>
              </BentoCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ===== PROYEK (selain featured — Moto tampil di kartu tunggal atas) ===== */}
      <Section>
        <SectionHeader eyebrow="Portfolio" title="Latest  Projects" />

        {/* Tab filter: Web Dev / Design Graphic / Motion Design */}
        <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
          {PROJECT_TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${tab === t.id
                ? 'bg-ink text-white shadow-card'
                : 'border border-line bg-surface text-muted hover:border-ink/30 hover:text-ink'
                }`}
            >
              {t.label}
            </button>
          ))}
        </motion.div>

        {/* Web dev cards (full-width + carousel foto) — initial/animate langsung */}
        {tab === 'web' && (
          <div key="web" className="mt-6 flex flex-col gap-6">
            {/* Moto tampil di kartu featured (atas) — exclude by id, bukan flag featured (CMS bisa berubah) */}
            {PROJECTS.filter((p) => p.id !== 'moto-computer').map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.06 }}
              >
                <BentoCard className="flex h-full flex-col overflow-hidden">
                  {p.gambar && p.gambar.length > 0 ? (
                    <ProjectCarousel images={p.gambar} alt={p.judul} className="h-64 w-full md:h-80" />
                  ) : (
                    <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-xl bg-surface-muted">
                      <div className="bg-grid absolute inset-0" aria-hidden />
                      <span className="relative text-5xl">{p.emoji}</span>
                    </div>
                  )}
                  <div className="flex flex-col p-6">
                    <h3 className="text-xl font-semibold leading-snug">{p.judul}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.deskripsi}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tech.slice(0, 6).map((t) => (
                        <Badge key={t} tone="neutral">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    {(p.repo || p.url) && (
                      <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-line pt-4">
                        {p.url && (
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
                          >
                            Visit Site ↗
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </BentoCard>
              </motion.div>
            ))}
          </div>
        )}

        {/* Design graphic cards — coming soon */}
        {tab === 'design' && (
          <div key="design" className="mt-6 space-y-4">
            <ComingSoonCard label="Design Graphic" />
          </div>
        )}

        {/* Motion design cards — coming soon */}
        {tab === 'motion' && (
          <div key="motion" className="mt-6 space-y-4">
            <ComingSoonCard label="Motion Design" />
          </div>
        )}
      </Section>

      {/* ===== PENGALAMAN KERJA ===== */}
      <Section>
        <SectionHeader eyebrow="Experience" title="Work Experience" />
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
        <SectionHeader title="Organization" />
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

      {/* ===== THE STACK BEHIND EVERY BUILD ===== */}
      <Section>
        <SectionHeader eyebrow="Tech Stack" title="The Stack Behind Every Build" />

        <motion.p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Every tool below is carefully chosen for speed and performance — fast builds, reliable results.
        </motion.p>
        <div className="mt-6 flex flex-wrap gap-3">
          {TECH_STACK.map((t) => (
            <motion.div key={t.nama} variants={item}>
              <TechChip name={t.nama} icon={t.icon} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ===== TOOLS I USE TO BUILD FASTER ===== */}
      <Section>
        <SectionHeader eyebrow="Tools" title="Tools I Use to Build Faster & Smarter" />
        <motion.p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          AI-powered tools that accelerate research, coding, and automation.
        </motion.p>
        <div className="mt-6 flex flex-wrap gap-3">
          {TOOLS_BUILD.map((t) => (
            <motion.div key={t.nama} variants={item}>
              <TechChip name={t.nama} icon={t.icon} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ===== PRODUCTIVITY ===== */}
      <Section>
        <SectionHeader eyebrow="Productivity" title="Productivity Tools" />
        <motion.p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Design, management, and automation tools that keep my workflow smooth.
        </motion.p>
        <div className="mt-6 flex flex-wrap gap-3">
          {PRODUCTIVITY_TOOLS.map((t) => (
            <motion.div key={t.nama} variants={item}>
              <TechChip name={t.nama} icon={t.icon} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ===== GET IN TOUCH ===== */}
      <Section id="contact">
        <SectionHeader eyebrow="Contact" title="Get in Touch" />
        <motion.p className="mt-3 max-w-2xl text-muted">
          Have a project in mind? Send me a message — I usually reply quickly.
        </motion.p>

        {/* Info: email, alamat, response time */}
        <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {[
            { icon: FaEnvelope, label: 'Email', value: KONTAK.email, href: `mailto:${KONTAK.email}` },
            { icon: FaLocationDot, label: 'Address', value: 'Purworejo, Central Java, Indonesia', href: undefined },
            { icon: FaClock, label: 'Response Time', value: 'Usually within 24 hours', href: undefined },
          ].map((c) => {
            const inner = (
              <>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-dark-card text-on-dark">
                  <c.icon className="h-4 w-4" aria-hidden />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-ink">{c.label}</p>
                  <p className="text-sm text-muted">{c.value}</p>
                </div>
              </>
            )
            const cls =
              'flex items-center gap-3 rounded-full border border-line bg-surface px-5 py-3 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover'
            return c.href ? (
              <a key={c.label} href={c.href} className={cls}>
                {inner}
              </a>
            ) : (
              <div key={c.label} className={cls}>
                {inner}
              </div>
            )
          })}
        </motion.div>

        {/* Find me online */}
        <motion.p
          variants={item}
          className="mt-10 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted"
        >
          Find Me Online
        </motion.p>
        <motion.div variants={item} className="mt-4 flex flex-wrap items-center justify-center gap-4">
          {[
            { icon: FaGithub, href: KONTAK.sosmed.github, label: 'GitHub' },
            { icon: FaLinkedin, href: KONTAK.sosmed.linkedin, label: 'LinkedIn' },
            { icon: FaInstagram, href: KONTAK.sosmed.instagram, label: 'Instagram' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface text-ink shadow-card transition hover:-translate-y-1 hover:bg-ink hover:text-on-dark"
            >
              <s.icon className="h-5 w-5" aria-hidden />
            </a>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div variants={item} className="mt-10">
          <BentoCard className="mx-auto max-w-xl">
            <form onSubmit={kirimEmail} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={form.nama}
                onChange={setField('nama')}
                className="w-full rounded-xl border border-line bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-ink/40 focus:outline-none focus:ring-2 focus:ring-ink/10"
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                value={form.email}
                onChange={setField('email')}
                className="w-full rounded-xl border border-line bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-ink/40 focus:outline-none focus:ring-2 focus:ring-ink/10"
              />
              <input
                type="text"
                required
                placeholder="Subject"
                value={form.subject}
                onChange={setField('subject')}
                className="w-full rounded-xl border border-line bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-ink/40 focus:outline-none focus:ring-2 focus:ring-ink/10 sm:col-span-2"
              />
              <textarea
                required
                rows={5}
                placeholder="Your Message"
                value={form.pesan}
                onChange={setField('pesan')}
                className="w-full resize-y rounded-xl border border-line bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-ink/40 focus:outline-none focus:ring-2 focus:ring-ink/10 sm:col-span-2"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 sm:col-span-2"
              >
                Send Message ✉️
              </button>
            </form>
          </BentoCard>
        </motion.div>
      </Section>

      </div>
    </div>
  )
}
