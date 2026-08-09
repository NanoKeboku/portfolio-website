/**
 * Skills & tools data — from Alhambra Ferdinando's CV.
 * Rendered as label chips with real logos (react-icons).
 */
import type { IconType } from 'react-icons'
import { createElement } from 'react'
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiLaravel,
  SiWordpress,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiMysql,
  SiCloudflare,
  SiGit,
  SiGithub,
  SiFigma,
  SiFramer,
  SiThreedotjs,
  SiVercel,
  SiSupabase,
  SiElementor,
  SiShadcnui,
  SiClaude,
  SiGooglegemini,
  SiCursor,
  SiNotion,
  SiTrello,
  SiZapier,
} from 'react-icons/si'
import BrandMark from '../components/ui/BrandMark'

export interface Tech {
  nama: string
  icon: IconType
}

/** Tech stack — "The stack behind every build" (chosen for speed & performance). */
export const TECH_STACK: Tech[] = [
  { nama: 'React', icon: SiReact },
  { nama: 'TypeScript', icon: SiTypescript },
  { nama: 'JavaScript', icon: SiJavascript },
  { nama: 'Laravel', icon: SiLaravel },
  { nama: 'WordPress', icon: SiWordpress },
  { nama: 'Tailwind CSS', icon: SiTailwindcss },
  { nama: 'Bootstrap', icon: SiBootstrap },
  { nama: 'jQuery', icon: SiJquery },
  { nama: 'MySQL', icon: SiMysql },
  { nama: 'Cloudflare', icon: SiCloudflare },
  { nama: 'Framer Motion', icon: SiFramer },
  { nama: 'Three.js', icon: SiThreedotjs },
  { nama: 'Vercel', icon: SiVercel },
  { nama: 'Supabase', icon: SiSupabase },
  { nama: 'Elementor', icon: SiElementor },
  { nama: 'shadcn/ui', icon: SiShadcnui },
  { nama: 'Git', icon: SiGit },
  { nama: 'GitHub', icon: SiGithub },
  { nama: 'Figma', icon: SiFigma },
  { nama: 'Framer Motion', icon: SiFramer },
  { nama: 'Three.js', icon: SiThreedotjs },
  { nama: 'Vercel', icon: SiVercel },
  { nama: 'Supabase', icon: SiSupabase },
  { nama: 'Elementor', icon: SiElementor },
  { nama: 'shadcn/ui', icon: SiShadcnui },
]

/** AI tools — "to build faster & smarter" (research, coding, automation). */
export const TOOLS_BUILD: Tech[] = [
  { nama: 'Google AI Studio', icon: SiGooglegemini },
  { nama: 'Cursor', icon: SiCursor },
  { nama: 'Claude', icon: SiClaude },
  { nama: 'Lovable', icon: () => createElement(BrandMark, { text: 'L', bg: '#FF6D3D' }) },
]

/** Productivity — design, management & automation tools. */
export const PRODUCTIVITY_TOOLS: Tech[] = [
  { nama: 'Canva', icon: () => createElement(BrandMark, { text: 'C', bg: '#00C4CC' }) },
  { nama: 'Photoshop', icon: () => createElement(BrandMark, { text: 'Ps', bg: '#31A8FF' }) },
  { nama: 'After Effects', icon: () => createElement(BrandMark, { text: 'Ae', bg: '#9999FF' }) },
  { nama: 'CapCut', icon: () => createElement(BrandMark, { text: 'CC', bg: '#000000' }) },
  { nama: 'Notion', icon: SiNotion },
  { nama: 'Trello', icon: SiTrello },
  { nama: 'Zapier', icon: SiZapier },
]
]

export const LANGUAGES: { nama: string; level: string }[] = [
  { nama: 'Indonesian', level: 'Native' },
  { nama: 'English', level: 'Basic (reading, writing, speaking)' },
  { nama: 'Japanese', level: 'Basic (daily conversation)' },
]
