/**
 * KONTAK — sumber tunggal info kontak & sosial media.
 * Data dari CV Alhambra Ferdinando (2026-08-05).
 */
export const KONTAK = {
  nama: 'Alhambra Ferdinando',
  namaPendek: 'Alhambra',
  role: 'Web Developer & IT Student',
  tagline:
    'IT student yang membangun website & solusi digital — dari landing page, sistem leads dengan validasi otomatis, hingga automasi bisnis.',
  email: 'alhambra.nando@gmail.com',
  whatsapp: '6285129976177', // format 62, tanpa + / spasi
  lokasi: 'Purworejo, Indonesia',
  pendidikan: 'S.Kom. (IT) — Universitas Muhammadiyah Purworejo',
  sosmed: {
    github: 'https://github.com/NanoKeboku',
    linkedin: 'https://linkedin.com/in/alhambra-ferdinando',
    portfolioLama: 'https://my-porto-alhambra.vercel.app',
  },
} as const

export function waLink(pesan: string): string {
  const no = KONTAK.whatsapp.replace(/[^0-9]/g, '')
  return `https://wa.me/${no}?text=${encodeURIComponent(pesan)}`
}
