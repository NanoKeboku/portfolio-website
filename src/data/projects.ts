/**
 * Project data source — from CV & real development history.
 */
export interface Project {
  id: string
  judul: string
  deskripsi: string
  tech: string[]
  kategori: 'web' | 'design'
  emoji?: string // visual placeholder (real thumbnails coming later)
  gambar?: string // foto/thumbnail asli (dipakai layout design)
  url?: string
  repo?: string
  featured?: boolean
}

/** Web development projects. */
export const PROJECTS: Project[] = [
  {
    id: 'moto-computer',
    judul: 'Moto Computer — IT Asset & Inventory Management',
    deskripsi:
      'Multi-branch IT asset management system: item inventory, stock transfers between branches with full approval workflow (approve/ship/receive/reject), role-based access control, Google login, notifications, activity logs, and data exports — built with Laravel.',
    tech: ['Laravel', 'Tailwind CSS', 'MySQL', 'Cloudflare DNS'],
    kategori: 'web',
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
    kategori: 'web',
    emoji: '🕌',
    repo: 'https://github.com/NanoKeboku/travel-umroh-agency',
  },
  {
    id: 'flowos',
    judul: 'FlowOS — Organization Operating System',
    deskripsi:
      'Organization operating system built on Google Workspace & Apps Script: project/task/partner management, WhatsApp (Fonnte) integration, Google Calendar/Drive/Gmail, and role-based access control (RBAC).',
    tech: ['Google Apps Script', 'Google Workspace', 'Fonnte API', 'RBAC'],
    kategori: 'web',
    emoji: '⚙️',
  },
  {
    id: 'localio-wp',
    judul: '10+ WordPress Websites for Clients',
    deskripsi:
      'Designed and developed 10+ functional client websites for a digital agency — speed, performance, and on-page SEO optimization; plus 30+ visual assets and a 10+ page design training module.',
    tech: ['WordPress', 'SEO', 'Canva', 'UI/UX'],
    kategori: 'web',
    emoji: '🌐',
  },
]

/** Design graphic projects — DUMMY (foto contoh, ganti dengan karya asli nanti). */
export const DESIGN_PROJECTS: Project[] = [
  {
    id: 'poster-campaign',
    judul: 'Poster & Instagram Campaign',
    deskripsi:
      'Poster promosi dan konten Instagram untuk agensi — visual konsisten dengan identitas brand, siap cetak dan unggah.',
    tech: ['Canva', 'Photoshop'],
    kategori: 'design',
    gambar: 'https://picsum.photos/seed/poster-campaign/640/480',
  },
  {
    id: 'msme-publication',
    judul: 'MSME Publication Materials',
    deskripsi:
      'Materi publikasi UMKM: brosur, katalog produk, dan konten media sosial untuk mendukung promosi usaha kecil.',
    tech: ['Canva', 'Photoshop'],
    kategori: 'design',
    gambar: 'https://picsum.photos/seed/msme-publication/640/480',
  },
  {
    id: 'event-design-portfolio',
    judul: 'Event Design Portfolio',
    deskripsi:
      'Kumpulan karya desain acara: layout laporan kegiatan, materi publikasi, dan aset visual pendukung event.',
    tech: ['Photoshop', 'After Effects'],
    kategori: 'design',
    gambar: 'https://picsum.photos/seed/event-design/640/480',
  },
]
