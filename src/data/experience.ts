/**
 * Experience & organization data — from Alhambra Ferdinando's CV.
 * Shared by Home (single-page) & About.
 */
export interface Experience {
  periode: string
  peran: string
  tempat: string
  poin: string[]
  featured?: boolean
}

export const PENGALAMAN: Experience[] = [
  {
    periode: 'Jul 2026 — Present',
    peran: 'Vocational IT Teacher (TKJ)',
    tempat: 'SMK Kristen Penabur Purworejo',
    poin: [
      'Teach 10th and 12th-grade students (Computer and Network Engineering) through weekly sessions.',
      'Design and deliver learning materials on Basic Network Security, K3LH, and Technopreneurship to prepare students for industry standards.',
    ],
  },
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

export const ORGANISASI: Experience[] = [
  {
    periode: 'Jun 2024 — Jun 2025',
    peran: 'President, HIMATEKNO',
    tempat: 'Information Technology Student Association — UMP',
    poin: [
      'Led an organization of 100+ members, coordinating 5+ work programs to boost IT students\u2019 competencies.',
      'Increased student engagement by up to 60% compared to the previous year.',
      'Expanded the network by joining Permikomnas — national collaboration with 10+ universities across Indonesia.',
    ],
    featured: true,
  },
]
