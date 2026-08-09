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
  SiClaude,
  SiNotion,
  SiTrello,
  SiZapier,
} from 'react-icons/si'
import { FaRobot } from 'react-icons/fa6'
import BrandMark from '../components/ui/BrandMark'

export interface Tech {
  nama: string
  icon: IconType
}

/** Tech stack — "behind every build". */
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
  { nama: 'Git', icon: SiGit },
  { nama: 'GitHub', icon: SiGithub },
  { nama: 'Figma', icon: SiFigma },
]

/** Tools — "I use to build faster & smarter" (design, management, automation, AI). */
export const TOOLS: Tech[] = [
  { nama: 'Canva', icon: () => createElement(BrandMark, { text: 'C', bg: '#00C4CC' }) },
  { nama: 'Photoshop', icon: () => createElement(BrandMark, { text: 'Ps', bg: '#31A8FF' }) },
  { nama: 'After Effects', icon: () => createElement(BrandMark, { text: 'Ae', bg: '#9999FF' }) },
  { nama: 'Notion', icon: SiNotion },
  { nama: 'Trello', icon: SiTrello },
  { nama: 'Zapier', icon: SiZapier },
  { nama: 'Claude', icon: SiClaude },
  { nama: 'Hermes', icon: FaRobot },
]

export const LANGUAGES: { nama: string; level: string }[] = [
  { nama: 'Indonesian', level: 'Native' },
  { nama: 'English', level: 'Basic (reading, writing, speaking)' },
  { nama: 'Japanese', level: 'Basic (daily conversation)' },
]
