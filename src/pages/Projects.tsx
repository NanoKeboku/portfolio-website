/**
 * Projects — full project cards grid from real development history.
 */
import BentoCard from '../components/ui/BentoCard'
import Badge from '../components/ui/Badge'
import Reveal from '../components/ui/Reveal'
import { PROJECTS } from '../data/projects'

export default function Projects() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-8 md:py-16">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Portfolio</p>
        <h1 className="mt-2 text-3xl font-bold">Projects</h1>
        <p className="mt-3 max-w-2xl text-muted">
          A collection of projects I have built — from data & validation systems, business websites, to
          organization automation. Full code is available on GitHub.
        </p>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.06}>
            <BentoCard className="flex h-full flex-col">
              <div className="flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-accent-soft to-surface-muted text-5xl">
                {p.emoji}
              </div>
              <h2 className="mt-5 text-lg font-bold leading-snug">{p.judul}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.deskripsi}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Badge key={t} tone="neutral">
                    {t}
                  </Badge>
                ))}
              </div>
              {(p.repo || p.url) && (
                <div className="mt-5 flex gap-4 border-t border-line pt-4 text-sm font-medium">
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                      GitHub ↗
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
          </Reveal>
        ))}
      </div>
    </div>
  )
}
