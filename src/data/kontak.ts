/**
 * CONTACT — single source of truth for contact & social info.
 * Data from Alhambra Ferdinando's CV (2026-08-05).
 */
export const KONTAK = {
  nama: 'Alhambra Ferdinando',
  namaPendek: 'Alhambra',
  role: 'Web Developer & Visual Designer',
  tagline:
    'Building modern, scalable website with React, Laravel, Tailwind CSS, and Wordpress. Experienced in custom web development, UI/UX Implementation, REST APIs, and lightweight automation for real-world business workflows.',
  email: 'alhambra.nando@gmail.com',
  whatsapp: '6285129976177', // 62 format, no + or spaces
  lokasi: 'Purworejo, Indonesia',
  pendidikan: 'S.Kom. (IT) — Universitas Muhammadiyah Purworejo',
  sosmed: {
    github: 'https://github.com/NanoKeboku',
    linkedin:
      'https://www.linkedin.com/in/alhambra-ferdinando-503511286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagram: 'https://www.instagram.com/alhambra.arch/',
    portfolioLama: 'https://my-porto-alhambra.vercel.app',
  },
} as const

export function waLink(pesan: string): string {
  const no = KONTAK.whatsapp.replace(/[^0-9]/g, '')
  return `https://wa.me/${no}?text=${encodeURIComponent(pesan)}`
}
