/** Sumber data proyek — isi saat implementasi penuh. */
export interface Project {
  id: string
  judul: string
  deskripsi: string
  tech: string[]
  thumbnail?: string
  url?: string
  repo?: string
}

export const PROJECTS: Project[] = [
  // GANTI: contoh
  // {
  //   id: 'leadhub',
  //   judul: 'LeadsHub — Database Prospek Bisnis',
  //   deskripsi: 'Multi-niche leads database dengan validasi Google Places.',
  //   tech: ['React', 'Cloudflare Pages', 'D1'],
  // },
]
