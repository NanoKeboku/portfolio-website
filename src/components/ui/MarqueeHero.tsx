/**
 * MarqueeHero — hero brutalist: marquee raksasa full-width "MY PROJECT ✦ PORTOFOLIO".
 * - Teks ultra-bold hitam di atas putih bersih + grid geometris halus.
 * - Scroll tak berujung kanan→kiri; kecepatan bereaksi halus terhadap scroll depth
 *   (cepat saat marquee di tengah layar, melambat saat pengguna scroll menjauh).
 */
import { useEffect, useRef } from 'react'
import { KONTAK } from '../../data/kontak'

const PHRASES = ['MY PROJECT', 'PORTOFOLIO']
/** Jumlah pasangan frase per setengah track — cukup lebar untuk viewport 4K. */
const REPEAT = 6

export default function MarqueeHero() {
  const trackRef = useRef<HTMLDivElement>(null)

  // Scroll-reactive speed: rAF-throttled. distance 0 (marquee di tengah viewport)
  // → 16s (cepat); menjauh → hingga 42s (melambat halus).
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    let raf = 0
    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const vh = window.innerHeight || 1
      const dist = Math.min(Math.abs(center - vh / 2) / (vh * 0.75), 1)
      el.style.animationDuration = `${(16 + dist * 26).toFixed(1)}s`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  /** Satu setengah track — 2× identik biar loop translateX(-50%) mulus. */
  const half = (hidden: boolean) => (
    <div aria-hidden={hidden} className="flex shrink-0 items-center">
      {Array.from({ length: REPEAT }).flatMap((_, i) => (
        <div key={i} className="flex shrink-0 items-center">
          <span className="font-heading select-none whitespace-nowrap text-[clamp(4rem,13vw,11rem)] font-extrabold uppercase leading-none tracking-tighter text-ink">
            {PHRASES[i % PHRASES.length]}
          </span>
          <span
            aria-hidden
            className="select-none px-[0.14em] text-[clamp(2rem,4.5vw,4rem)] leading-none text-ink/25"
          >
            ✦
          </span>
        </div>
      ))}
    </div>
  )

  return (
    <section id="home" className="relative overflow-hidden border-y-2 border-ink bg-surface">
      {/* Grid geometris halus di atas putih bersih */}
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div className="marquee-hero relative py-10 md:py-16">
        <div ref={trackRef} className="marquee-hero-track" style={{ animationDuration: '22s' }}>
          {half(false)}
          {half(true)}
        </div>
      </div>
      {/* h1 tersembunyi untuk semantik/SEO (identitas ada di header "Alhambra.") */}
      <h1 className="sr-only">
        {KONTAK.nama} — Visual Designer &amp; Web Developer
      </h1>
    </section>
  )
}
