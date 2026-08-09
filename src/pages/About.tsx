/**
 * About — bio, pendidikan, pengalaman, organisasi, soft skills & bahasa.
 * Konten dari CV Alhambra Ferdinando. Gaya: monokrom hitam soft.
 */
import { motion, type Variants } from 'framer-motion'
import type { ReactNode, ElementType } from 'react'
import BentoCard from '../components/ui/BentoCard'
import Badge from '../components/ui/Badge'
import { KONTAK } from '../data/kontak'
import { TECH_STACK, TOOLS, LANGUAGES } from '../data/skills'
import { PENGALAMAN, ORGANISASI } from '../data/experience'

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const Section = ({ children }: { children: ReactNode }) => (
  <motion.section variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
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

function TechChip({ name, icon: Icon }: { name: string; icon: ElementType }) {
  return (
    <div className="flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2.5 shadow-card transition hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-card-hover">
      <Icon className="h-4 w-4 shrink-0" aria-hidden />
      <span className="text-sm font-medium text-ink">{name}</span>
    </div>
  )
}

export default function About() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-16 px-4 py-12 md:px-8 md:py-16">
      {/* Bio */}
      <Section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <motion.div variants={item} className="md:col-span-2">
            <BentoCard className="h-full">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Tentang</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight">Tentang Saya</h1>
              <p className="mt-4 leading-relaxed text-muted">
                Saya mahasiswa Information Technology di Universitas Muhammadiyah Purworejo dengan ketertarikan
                mendalam pada teknologi dan multimedia. Saya senang mengeksplorasi tools, framework, dan tren desain
                baru — aktif di pengembangan web, visual branding, dan pembuatan konten digital.
              </p>
              <p className="mt-3 leading-relaxed text-muted">
                Pengalaman saya membentang dari mengajar (guru TKJ), mendesain website untuk klien agensi, hingga
                memimpin organisasi kemahasiswaan. Saya percaya kombinasi keterampilan teknis, desain, dan komunikasi
                adalah kunci solusi digital yang benar-benar membantu bisnis.
              </p>
            </BentoCard>
          </motion.div>

          <motion.div variants={item}>
            <BentoCard className="h-full space-y-3 text-sm">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-dark-card text-4xl font-bold text-on-dark">
                AF
              </div>
              <div>
                <p className="font-semibold">{KONTAK.nama}</p>
                <p className="text-muted">{KONTAK.role}</p>
              </div>
              <div className="space-y-1 border-t border-line pt-3 text-muted">
                <p>📍 {KONTAK.lokasi}</p>
                <p>✉️ {KONTAK.email}</p>
                <p>🎓 S.Kom. (IT) — UMP 2026</p>
              </div>
            </BentoCard>
          </motion.div>
        </div>
      </Section>

      {/* Pendidikan */}
      <Section>
        <SectionHeader eyebrow="Pendidikan" title="Riwayat Pendidikan" />
        <motion.div variants={item} className="mt-6">
          <BentoCard>
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold">Bachelor of Information Technology</h3>
                <p className="text-sm text-muted">Universitas Muhammadiyah Purworejo — 2022–2026</p>
              </div>
              <Badge tone="highlight">IPK 3.55 / 4.00</Badge>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                'Web Programming',
                'Database Management',
                'Systems Analysis & Design',
                'Project Management',
                'Framework Programming',
                'E-Commerce',
                'Internet of Things (IoT)',
              ].map((c) => (
                <Badge key={c} tone="neutral">
                  {c}
                </Badge>
              ))}
            </div>
          </BentoCard>
        </motion.div>
      </Section>

      {/* Pengalaman */}
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

      {/* Organisasi */}
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

      {/* Skills: soft, bahasa, tech stack, tools */}
      <Section>
        <SectionHeader eyebrow="Skills" title="Keahlian" />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <motion.div variants={item}>
            <BentoCard className="h-full">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Bahasa</p>
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Tools I Use</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {TOOLS.map((t) => (
                  <TechChip key={t.nama} name={t.nama} icon={t.icon} />
                ))}
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted">Tech Stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {TECH_STACK.map((t) => (
                  <TechChip key={t.nama} name={t.nama} icon={t.icon} />
                ))}
              </div>
            </BentoCard>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
