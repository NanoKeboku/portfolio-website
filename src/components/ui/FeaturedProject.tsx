/**
 * FeaturedProject — kartu proyek tunggal (brutalist) tepat di bawah marquee.
 * Menampilkan proyek bertanda `featured` (Moto Computer): screenshot dashboard,
 * judul, deskripsi, tech tags, dan tombol "LIHAT DETAIL ↗".
 * Gaya: sudut tegas, border 2px hitam, hard shadow offset, tanpa rounding.
 */
import ProjectCarousel from './ProjectCarousel'
import { STATIC_PROJECTS } from '../../data/projects'

/**
 * Kartu featured DIPAKAI data statis Moto Computer (bukan PROJECTS/CMS) —
 * desain kartu tunggal ini mengikuti brief user (Moto + tech Laravel/Tailwind/MySQL/Cloudflare DNS),
 * dan CMS LeadsHub tidak boleh mengubah isi kartu ini.
 */
export default function FeaturedProject() {
  const p = STATIC_PROJECTS.find((x) => x.id === 'moto-computer') ?? STATIC_PROJECTS.find((x) => x.featured)
  if (!p) return null

  return (
    <section id="projects">
      <div className="grid overflow-hidden border-2 border-ink bg-surface shadow-[10px_10px_0_0_#1C1917] md:grid-cols-5">
        {/* Screenshot dashboard */}
        <div className="relative md:col-span-3">
          <ProjectCarousel
            images={p.gambar ?? []}
            alt={p.judul}
            squared
            className="h-64 w-full border-b-2 border-ink md:h-full md:min-h-[26rem] md:border-b-0 md:border-r-2"
          />
        </div>

        {/* Detail proyek */}
        <div className="flex flex-col justify-center p-6 md:col-span-2 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted">
            Featured Project
          </p>
          <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">
            {p.judul}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted">{p.deskripsi}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="border-2 border-ink px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider"
              >
                {t}
              </span>
            ))}
          </div>

          {p.url && (
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 border-2 border-ink bg-ink px-6 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-[5px_5px_0_0_#1C1917] transition-all hover:translate-x-[5px] hover:translate-y-[5px] hover:bg-white hover:text-ink hover:shadow-none"
            >
              Lihat Detail <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
