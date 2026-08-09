/**
 * Project data source — from CV & real development history.
 */
export interface Project {
  id: string
  judul: string
  deskripsi: string
  tech: string[]
  kategori: 'web' | 'design' | 'motion'
  emoji?: string // visual placeholder (real thumbnails coming later)
  gambar?: string // foto/thumbnail asli (dipakai layout design/motion)
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
    url: 'https://travel-umroh-agency.pages.dev/',
    repo: 'https://github.com/NanoKeboku/travel-umroh-agency',
  },
  {
    id: 'leadhub',
    judul: 'LeadsHub — Business Lead Database + AI Validation',
    deskripsi:
      'Multi-niche lead database platform (2,300+ records) with automated validation via Google Places API — detects open/closed status, ratings, contacts, and websites. Includes admin panel, filters, and WhatsApp integration.',
    tech: ['React 19', 'TypeScript', 'Tailwind v4', 'Cloudflare Pages', 'D1', 'Google Places API'],
    kategori: 'web',
    emoji: '📊',
  },
  {
    id: 'passerelle-edu',
    judul: 'Passerelle Edu — Learning Platform',
    deskripsi:
      'Education & learning platform website built with WordPress and Elementor — modern, responsive landing experience for starting your learning journey.',
    tech: ['WordPress', 'Elementor'],
    kategori: 'web',
    emoji: '🎓',
    url: 'https://passerelle-edu.com/',
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

/** Motion design projects — DUMMY (foto contoh, ganti dengan karya asli nanti). */
export const MOTION_PROJECTS: Project[] = [
  {
    id: 'motion-logo',
    judul: 'Logo Animation & Brand Motion',
    deskripsi:
      'Animasi logo dan identitas brand — logo reveal, morphing, dan micro-interaction untuk media digital.',
    tech: ['After Effects', 'Photoshop'],
    kategori: 'motion',
    gambar: 'https://picsum.photos/seed/motion-logo/640/480',
  },
  {
    id: 'motion-poster',
    judul: 'Motion Poster & Video Bumper',
    deskripsi:
      'Poster bergerak dan bumper video untuk promosi acara serta produk di media sosial.',
    tech: ['After Effects', 'Canva'],
    kategori: 'motion',
    gambar: 'https://picsum.photos/seed/motion-poster/640/480',
  },
  {
    id: 'social-video',
    judul: 'Social Media Video Content',
    deskripsi:
      'Video pendek dan animasi untuk konten Instagram/TikTok — motion graphics, editing, dan caption.',
    tech: ['After Effects', 'Premiere'],
    kategori: 'motion',
    gambar: 'https://picsum.photos/seed/social-video/640/480',
  },
]
