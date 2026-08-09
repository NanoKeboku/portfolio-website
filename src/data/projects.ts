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
    id: 'moto-computer',
    judul: 'Moto Computer — IT Asset & Inventory Management',
    deskripsi:
      'Multi-branch IT asset management system: item inventory, stock transfers between branches with full approval workflow (approve/ship/receive/reject), role-based access control, Google login, notifications, activity logs, and data exports — built with Laravel.',
    tech: ['Laravel', 'Tailwind CSS', 'MySQL', 'Cloudflare DNS'],
    emoji: '💻',
    url: 'https://motocomputer.code-project.my.id/',
    repo: 'https://github.com/NanoKeboku/moto-computer',
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
