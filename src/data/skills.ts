/**
 * Sumber data keahlian — dari CV Alhambra Ferdinando.
 */
export interface Skill {
  nama: string
  level: number // 1-5
  icon?: string
}

/** Hard skills (ditampilkan di Home & About). */
export const SKILLS: Skill[] = [
  { nama: 'React', level: 4, icon: '⚛️' },
  { nama: 'TypeScript', level: 4, icon: '🔷' },
  { nama: 'Laravel', level: 4, icon: '🟥' },
  { nama: 'WordPress', level: 4, icon: '🔵' },
  { nama: 'Tailwind CSS', level: 4, icon: '🎨' },
  { nama: 'MySQL', level: 3, icon: '🐬' },
  { nama: 'Cloudflare', level: 4, icon: '☁️' },
  { nama: 'Figma / UI-UX', level: 4, icon: '🖌️' },
]

export const SOFT_SKILLS: string[] = [
  'Public Speaking',
  'Problem Solving',
  'Adaptability',
  'Leadership & Team Management',
]

export const LANGUAGES: { nama: string; level: string }[] = [
  { nama: 'Indonesia', level: 'Native' },
  { nama: 'Inggris', level: 'Basic (reading, writing, speaking)' },
  { nama: 'Jepang', level: 'Basic (daily conversation)' },
]
