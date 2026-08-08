/**
 * KONTAK — sumber tunggal info kontak & sosial media.
 * GANTI semua nilai dengan data asli saat implementasi penuh.
 */
export const KONTAK = {
  nama: 'Alhambra Ferdinando',
  role: 'Web Developer',
  email: '// GANTI: email@example.com',
  whatsapp: '// GANTI: 628xxxxxxxxxx', // format 62, tanpa + / spasi
  lokasi: 'Indonesia',
  sosmed: {
    github: '// GANTI: https://github.com/username',
    linkedin: '// GANTI: https://linkedin.com/in/username',
    instagram: '// GANTI: https://instagram.com/username',
  },
} as const

export function waLink(pesan: string): string {
  const no = KONTAK.whatsapp.replace(/[^0-9]/g, '')
  return `https://wa.me/${no}?text=${encodeURIComponent(pesan)}`
}
