/**
 * Project data source — from CV & real development history.
 */
export interface Project {
  id: string
  judul: string
  deskripsi: string
  tech: string[]
  emoji?: string // visual placeholder (real thumbnails coming later)
  url?: string
  repo?: string
  featured?: boolean
}

export const PROJECTS: Project[] = [
  {
    id: 'leadhub',
    judul: 'LeadsHub — Business Lead Database + AI Validation',
    deskripsi:
      'Multi-niche lead database platform (2,300+ records) with automated validation via Google Places API — detects open/closed status, ratings, contacts, and websites. Includes admin panel, filters, and WhatsApp integration.',
    tech: ['React 19', 'TypeScript', 'Tailwind v4', 'Cloudflare Pages', 'D1', 'Google Places API'],
    emoji: '📊',
    url: 'https://travel-agency-leads.pages.dev',
    repo: 'https://github.com/NanoKeboku/travel-agency-leads',
    featured: true,
  },
  {
    id: 'ebitour',
    judul: 'Ebitour — Umrah & Hajj Travel Website',
    deskripsi:
      'Complete umrah/hajj travel agency website: package & program pages, package search system, content admin panel, and a WhatsApp chatbot for prospective pilgrims.',
    tech: ['React', 'TypeScript', 'Cloudflare Pages', 'D1', 'WhatsApp API'],
    emoji: '🕌',
    repo: 'https://github.com/NanoKeboku/travel-umroh-agency',
  },
  {
    id: 'flowos',
    judul: 'FlowOS — Organization Operating System',
    deskripsi:
      'Organization operating system built on Google Workspace & Apps Script: project/task/partner management, WhatsApp (Fonnte) integration, Google Calendar/Drive/Gmail, and role-based access control (RBAC).',
    tech: ['Google Apps Script', 'Google Workspace', 'Fonnte API', 'RBAC'],
    emoji: '⚙️',
  },
  {
    id: 'localio-wp',
    judul: '10+ WordPress Websites for Clients',
    deskripsi:
      'Designed and developed 10+ functional client websites for a digital agency — speed, performance, and on-page SEO optimization; plus 30+ visual assets and a 10+ page design training module.',
    tech: ['WordPress', 'SEO', 'Canva', 'UI/UX'],
    emoji: '🌐',
  },
]
