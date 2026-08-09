/**
 * Home — single-page portfolio (monokrom hitam soft):
 * hero (background + center) → specialization → statistik → proyek →
 * pengalaman → organisasi → soft skill → tech stack → AI tools → CTA.
 * Animasi: framer-motion. Logo: react-icons.
 */
import { motion, type Variants } from 'framer-motion'
import { useState, type ReactNode, type ElementType } from 'react'
import { FaPalette, FaLaptopCode, FaFilm, FaArrowRight, FaGithub, FaWhatsapp, FaEnvelope, FaLocationDot, FaGlobe } from 'react-icons/fa6'
import BentoCard from '../components/ui/BentoCard'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { KONTAK, waLink } from '../data/kontak'
import { PROJECTS, DESIGN_PROJECTS, MOTION_PROJECTS, type Project } from '../data/projects'
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

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div variants={item}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{eyebrow}</p>
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

/**
 * Kartu proyek design/motion — foto kiri, judul & deskripsi kanan.
 * Pakai initial/animate langsung (bukan variant parent) supaya tetap muncul
 * saat tab di-toggle (fix bug kartu hilang saat kembali ke Web Dev).
 */
function DesignRowCard({ p, delay = 0 }: { p: Project; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
    >
      <BentoCard className="flex flex-col overflow-hidden sm:flex-row">
        <div className="relative h-44 shrink-0 sm:h-auto sm:w-56 md:w-64">
          <img src={p.gambar} alt={p.judul} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
          <h3 className="text-lg font-semibold leading-snug">{p.judul}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{p.deskripsi}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <Badge key={t} tone="neutral">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </BentoCard>
    </motion.div>
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
  return (
    <div className="mx-auto w-full max-w-6xl space-y-20 px-4 py-12 md:px-8 md:py-16">
      {/* ===== HERO (background + center: kalimat, nama, deskripsi, CTA) ===== */}
      <motion.section
        id="home"
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative overflow-hidden rounded-3xl border border-line bg-surface"
      >
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(28,25,23,0.08), transparent 65%)',
          }}
        />
        <div className="relative flex flex-col items-center px-6 py-20 text-center md:py-28">
          <motion.p
            variants={item}
            className="rounded-full border border-line bg-surface/80 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted"
          >
            IT Student &amp; Web Developer
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-bold tracking-tight md:text-6xl"
          >
            {KONTAK.nama}
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
          >
            {KONTAK.tagline}
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href={waLink('Hello Alhambra, I am interested in your services!')}>
              <Button>💬 Chat on WhatsApp</Button>
            </a>
            <a href="#projects">
              <Button variant="secondary">
                View Projects <FaArrowRight className="ml-1.5 inline h-3 w-3" />
              </Button>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* ===== ABOUT (short bio) ===== */}
      <Section id="about">
        <SectionHeader eyebrow="About" title="About Me" />
        <motion.div variants={item}>
          <BentoCard>
            <div className="space-y-3">
              <p className="text-sm leading-relaxed text-muted">
                I am an Information Technology student at Universitas Muhammadiyah Purworejo with a deep
                interest in technology and multimedia — active in web development, visual branding, and
                digital content creation.
              </p>
              <p className="text-sm leading-relaxed text-muted">
                My experience designing websites for agency clients, to
                leading a student organization. I believe the combination of technical skills, design, and
                communication is the key to digital solutions that truly help businesses.
              </p>
              <a href={waLink('Hello Alhambra! Let\'s talk about your project.')} className="inline-block pt-1">
                <Button variant="secondary">Let&apos;s Talk</Button>
              </a>
            </div>
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

      {/* ===== PROYEK ===== */}
      <Section id="projects">
        <SectionHeader eyebrow="Portfolio" title="Projects" />

        {/* Tab filter: Web Dev / Design Graphic / Motion Design */}
        <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
          {PROJECT_TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                tab === t.id
                  ? 'bg-ink text-white shadow-card'
                  : 'border border-line bg-surface text-muted hover:border-ink/30 hover:text-ink'
              }`}
            >
              {t.label}
            </button>
          ))}
        </motion.div>

        {/* Web dev cards (grid) — initial/animate langsung, bukan variant parent */}
        {tab === 'web' && (
          <div key="web" className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.06 }}
              >
                <BentoCard className="flex h-full flex-col">
                  <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-xl bg-surface-muted">
                    <div className="bg-grid absolute inset-0" aria-hidden />
                    <span className="relative text-5xl">{p.emoji}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold leading-snug">{p.judul}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.deskripsi}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.slice(0, 4).map((t) => (
                      <Badge key={t} tone="neutral">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  {(p.repo || p.url) && (
                    <div className="mt-5 flex gap-4 border-t border-line pt-4 text-sm font-medium">
                      {p.repo && (
                        <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-accent hover:underline">
                          <FaGithub className="h-3.5 w-3.5" /> GitHub
                        </a>
                      )}
                      {p.url && (
                        <a href={p.url} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                          Visit site ↗
                        </a>
                      )}
                    </div>
                  )}
                </BentoCard>
              </motion.div>
            ))}
          </div>
        )}

        {/* Design graphic cards (foto kiri, judul & deskripsi kanan) */}
        {tab === 'design' && (
          <div key="design" className="mt-6 space-y-4">
            {DESIGN_PROJECTS.map((p, i) => (
              <DesignRowCard key={p.id} p={p} delay={i * 0.06} />
            ))}
          </div>
        )}

        {/* Motion design cards (layout sama dengan design) */}
        {tab === 'motion' && (
          <div key="motion" className="mt-6 space-y-4">
            {MOTION_PROJECTS.map((p, i) => (
              <DesignRowCard key={p.id} p={p} delay={i * 0.06} />
            ))}
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
        <SectionHeader eyebrow="Organization" title="Leadership" />
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
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Every tool below is carefully chosen for speed and performance — fast builds, reliable results.
        </p>
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
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          AI-powered tools that accelerate research, coding, and automation.
        </p>
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
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Design, management, and automation tools that keep my workflow smooth.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {PRODUCTIVITY_TOOLS.map((t) => (
            <motion.div key={t.nama} variants={item}>
              <TechChip name={t.nama} icon={t.icon} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ===== CTA KONTAK ===== */}
      <Section>
        <motion.div variants={item}>
          <BentoCard featured className="flex flex-col items-center gap-4 py-14 text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Interested in working together?</h2>
            <p className="max-w-lg text-on-dark/70">
              I am open to website projects, lead systems, and business automation. Let&apos;s discuss your ideas.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <a href={waLink('Hello Alhambra, I would like to discuss a project.')}>
                <Button>💬 Chat on WhatsApp</Button>
              </a>
              <a href={`mailto:${KONTAK.email}`}>
                <Button variant="secondary" className="border-on-dark/25 bg-transparent text-on-dark">
                  ✉️ Send Email
                </Button>
              </a>
            </div>
          </BentoCard>
        </motion.div>
      </Section>

      {/* ===== MY CONTACT ===== */}
      <Section id="contact">
        <SectionHeader eyebrow="Contact" title="My Contact" />
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: FaWhatsapp,
              judul: 'WhatsApp',
              detail: '+62 851 2997 6177',
              href: waLink('Hello Alhambra! I would like to discuss a project.'),
              label: 'Chat now',
            },
            {
              icon: FaEnvelope,
              judul: 'Email',
              detail: KONTAK.email,
              href: `mailto:${KONTAK.email}`,
              label: 'Send email',
            },
            {
              icon: FaLocationDot,
              judul: 'Location',
              detail: KONTAK.lokasi,
              href: undefined,
              label: undefined,
            },
            {
              icon: FaGlobe,
              judul: 'Social Media',
              detail: 'GitHub · LinkedIn',
              href: KONTAK.sosmed.github,
              label: 'View profile',
            },
          ].map((c) => (
            <motion.div key={c.judul} variants={item}>
              <BentoCard className="flex h-full flex-col">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-dark-card text-on-dark">
                  <c.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 font-semibold">{c.judul}</h3>
                <p className="mt-1 flex-1 break-all text-sm text-muted">{c.detail}</p>
                {c.href && c.label && (
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="mt-3 text-sm font-medium text-accent hover:underline"
                  >
                    {c.label} →
                  </a>
                )}
              </BentoCard>
            </motion.div>
          ))}
        </div>
      </Section>

    </div>
  )
}
