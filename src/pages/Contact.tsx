/**
 * Contact — WhatsApp CTA, email, location, and social media.
 * (WhatsApp automation = next phase; for now direct wa.me links.)
 */
import BentoCard from '../components/ui/BentoCard'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import { KONTAK, waLink } from '../data/kontak'

export default function Contact() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-8 md:py-16">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
        <h1 className="mt-2 text-3xl font-bold">Get in Touch</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Have a website project, lead system, or business automation idea to discuss? Send a message —
          I usually reply quickly.
        </p>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Reveal>
          <BentoCard className="h-full">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-2xl">
              💬
            </div>
            <h2 className="mt-4 font-semibold">WhatsApp</h2>
            <p className="mt-1 text-sm text-muted">Fastest response for project discussions.</p>
            <a href={waLink('Hello Alhambra! I would like to discuss a project.')} className="mt-4 inline-block">
              <Button>Chat Now</Button>
            </a>
          </BentoCard>
        </Reveal>

        <Reveal delay={0.08}>
          <BentoCard className="h-full">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-2xl">
              ✉️
            </div>
            <h2 className="mt-4 font-semibold">Email</h2>
            <p className="mt-1 text-sm text-muted">For proposals & formal collaboration.</p>
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
            <h2 className="mt-4 font-semibold">Social & More</h2>
            <p className="mt-1 text-sm text-muted">Digital footprint & portfolio.</p>
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
                Old Portfolio ↗
              </a>
            </div>
          </BentoCard>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <BentoCard featured className="mt-4 flex flex-col items-center gap-3 py-10 text-center">
          <p className="text-xl font-bold">📍 {KONTAK.lokasi}</p>
          <p className="max-w-md text-sm text-on-dark/75">
            Open to remote projects across Indonesia.
          </p>
        </BentoCard>
      </Reveal>
    </div>
  )
}
