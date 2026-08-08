/**
 * Sumber data keahlian & tools — dari CV Alhambra Ferdinando.
 */
export interface Skill {
  nama: string
  level: number // 1-5
  icon?: string
}

/** Hard skills inti (bahasa/framework/platform). */
export const SKILLS: Skill[] = [
  { nama: 'React', level: 4, icon: '⚛️' },
  { nama: 'TypeScript', level: 4, icon: '🔷' },
  { nama: 'JavaScript', level: 4, icon: '🟨' },
  { nama: 'Laravel', level: 4, icon: '🟥' },
  { nama: 'WordPress', level: 4, icon: '🔵' },
  { nama: 'Tailwind CSS', level: 4, icon: '🎨' },
  { nama: 'Bootstrap', level: 3, icon: '🟪' },
  { nama: 'jQuery', level: 3, icon: '🧩' },
  { nama: 'MySQL', level: 3, icon: '🐬' },
  { nama: 'Cloudflare', level: 4, icon: '☁️' },
  { nama: 'Git / GitHub', level: 4, icon: '🐙' },
  { nama: 'UI/UX & Figma', level: 4, icon: '🖌️' },
]

/** Tools & produktivitas (desain, manajemen, automasi, AI). */
export interface Tool {
  nama: string
  icon?: string
}

export const TOOLS: Tool[] = [
  { nama: 'Canva', icon: '🎨' },
  { nama: 'Adobe Photoshop', icon: '🖼️' },
  { nama: 'Adobe After Effects', icon: '🎬' },
  { nama: 'Notion', icon: '📝' },
  { nama: 'Trello', icon: '📋' },
  { nama: 'Zapier', icon: '⚡' },
  { nama: 'Claude', icon: '🤖' },
  { nama: 'Hermes', icon: '🧠' },
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
