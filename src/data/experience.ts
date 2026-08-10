/**
 * Experience & organization data — from Alhambra Ferdinando's CV.
 * Shared by Home (single-page) & About.
 * Data dari CMS LeadsHub (sync-cms.mjs) → fallback statis lokal.
 */
import { cmsData } from './cms.generated'

export interface Experience {
  periode: string
  peran: string
  tempat: string
  poin: string[]
  featured?: boolean
}

export const STATIC_PENGALAMAN: Experience[] = [
  {
    periode: 'May 2026',
    peran: 'Web Designer',
    tempat: 'Localio Digital Agency — Cilacap, Central Java',
    poin: [
      'Designed and developed 10+ functional WordPress websites, optimizing speed, performance, and on-page SEO.',
      'Built a 10+ page training module covering readability principles, information structure, and design efficiency.',
      'Produced 30+ visual assets: internal agency promo posters and client Instagram content.',
    ],
  },
  {
    periode: 'Oct — Nov 2025',
    peran: 'Event Organizer Intern (WFH)',
    tempat: 'Edukarya',
    poin: [
      'Ensured all participants completed their tasks: design portfolios, reports, and MSME publication materials.',
      'Managed workflows, monitored daily progress, and guided participants toward high-quality design standards.',
    ],
  },
]

export const STATIC_ORGANISASI: Experience[] = [
  {
    periode: 'Jun 2024 — Jun 2025',
    peran: 'Chairperson, HIMATEKNO',
    tempat: 'Information Technology Student Association — Universitas Muhammadiyah Purworejo',
    poin: [
      'Led and coordinated 5 division heads and 30 organizational members in executing programs and organizational initiatives.',
      'Set organizational direction, priorities, and strategic objectives.',
      'Evaluated program performance and coordinated improvements across divisions.',
    ],
    featured: true,
  },
]

const cmsExp = cmsData?.experience

export const PENGALAMAN: Experience[] =
  cmsExp?.pengalaman?.length ? cmsExp.pengalaman : STATIC_PENGALAMAN

export const ORGANISASI: Experience[] =
  cmsExp?.organisasi?.length ? cmsExp.organisasi : STATIC_ORGANISASI
