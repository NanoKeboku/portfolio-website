/**
 * Sumber data proyek — diisi dari CV & riwayat pengembangan nyata.
 */
export interface Project {
  id: string
  judul: string
  deskripsi: string
  tech: string[]
  emoji?: string // placeholder visual (thumbnail asli menyusul)
  url?: string
  repo?: string
  featured?: boolean
}

export const PROJECTS: Project[] = [
  {
    id: 'leadhub',
    judul: 'LeadsHub — Database Leads Bisnis + Validasi AI',
    deskripsi:
      'Platform database leads multi-niche (2.300+ data) dengan validasi otomatis via Google Places API — mendeteksi status buka/tutup usaha, rating, kontak, dan website. Dilengkapi admin panel, filter, dan integrasi WhatsApp.',
    tech: ['React 19', 'TypeScript', 'Tailwind v4', 'Cloudflare Pages', 'D1', 'Google Places API'],
    emoji: '📊',
    url: 'https://travel-agency-leads.pages.dev',
    repo: 'https://github.com/NanoKeboku/travel-agency-leads',
    featured: true,
  },
  {
    id: 'ebitour',
    judul: 'Ebitour — Website Travel Umroh & Haji',
    deskripsi:
      'Website agency travel umroh/haji lengkap: halaman paket & program, sistem pencarian paket, admin panel pengelolaan konten, dan chatbot WhatsApp untuk layanan calon jamaah.',
    tech: ['React', 'TypeScript', 'Cloudflare Pages', 'D1', 'WhatsApp API'],
    emoji: '🕌',
    repo: 'https://github.com/NanoKeboku/travel-umroh-agency',
  },
  {
    id: 'flowos',
    judul: 'FlowOS — Organization Operating System',
    deskripsi:
      'Sistem operasi organisasi berbasis Google Workspace & Apps Script: manajemen proyek/tugas/partner, integrasi WhatsApp (Fonnte), Google Calendar/Drive/Gmail, dan kontrol akses berbasis peran (RBAC).',
    tech: ['Google Apps Script', 'Google Workspace', 'Fonnte API', 'RBAC'],
    emoji: '⚙️',
  },
  {
    id: 'localio-wp',
    judul: '10+ Website WordPress untuk Klien',
    deskripsi:
      'Merancang dan mengembangkan 10+ website fungsional untuk klien agensi digital — optimasi kecepatan, performa, dan SEO on-page; plus 30+ aset visual & modul pelatihan desain 10+ halaman.',
    tech: ['WordPress', 'SEO', 'Canva', 'UI/UX'],
    emoji: '🌐',
  },
]
