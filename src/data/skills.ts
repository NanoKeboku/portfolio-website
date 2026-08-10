/**
 * Skills & tools data — from Alhambra Ferdinando's CV.
 * Rendered as label chips with real logos (react-icons).
 * Data dari CMS LeadsHub (sync-cms.mjs) → fallback statis lokal.
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
import { cmsData } from './cms.generated'

export interface Tech {
  nama: string
  icon: IconType
}

/** Peta nama → ikon react-icons (fallback: BrandMark inisial). */
const ICON_MAP: Record<string, IconType> = {
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Laravel: SiLaravel,
  WordPress: SiWordpress,
  'Tailwind CSS': SiTailwindcss,
  Bootstrap: SiBootstrap,
  jQuery: SiJquery,
  MySQL: SiMysql,
  Cloudflare: SiCloudflare,
  'Framer Motion': SiFramer,
  'Three.js': SiThreedotjs,
  Vercel: SiVercel,
  Supabase: SiSupabase,
  Elementor: SiElementor,
  'shadcn/ui': SiShadcnui,
  Git: SiGit,
  GitHub: SiGithub,
  Figma: SiFigma,
  'Google AI Studio': SiGooglegemini,
  Cursor: SiCursor,
  Claude: SiClaude,
  Notion: SiNotion,
  Trello: SiTrello,
  Zapier: SiZapier,
}

const brand = (text: string, bg = '#57534E'): IconType => () => createElement(BrandMark, { text, bg })

function toTech(names: string[]): Tech[] {
  return names.map((n) => ({ nama: n, icon: ICON_MAP[n] ?? brand(n.slice(0, 2)) }))
}

const AI_TOOL = /claude|hermes|cursor|lovable|gemini|openai|gpt|ai studio/i

/** Statis (fallback) — tech stack asli CV. */
export const STATIC_TECH_STACK: Tech[] = [
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
]

export const STATIC_TOOLS_BUILD: Tech[] = [
  { nama: 'Google AI Studio', icon: SiGooglegemini },
  { nama: 'Cursor', icon: SiCursor },
  { nama: 'Claude', icon: SiClaude },
  { nama: 'Lovable', icon: brand('L', '#FF6D3D') },
]

export const STATIC_PRODUCTIVITY_TOOLS: Tech[] = [
  { nama: 'Canva', icon: brand('C', '#00C4CC') },
  { nama: 'Photoshop', icon: brand('Ps', '#31A8FF') },
  { nama: 'After Effects', icon: brand('Ae', '#9999FF') },
  { nama: 'CapCut', icon: brand('CC', '#000000') },
  { nama: 'Notion', icon: SiNotion },
  { nama: 'Trello', icon: SiTrello },
  { nama: 'Zapier', icon: SiZapier },
]

export const STATIC_LANGUAGES: { nama: string; level: string }[] = [
  { nama: 'Indonesian', level: 'Native' },
  { nama: 'English', level: 'Basic (reading, writing, speaking)' },
  { nama: 'Japanese', level: 'Basic (daily conversation)' },
]

/** ── Pilih sumber: CMS (LeadsHub) kalau ada, else statis ── */
const cmsSkills = cmsData?.skills

export const TECH_STACK: Tech[] =
  cmsSkills?.techStack?.length ? toTech(cmsSkills.techStack) : STATIC_TECH_STACK

const cmsTools = cmsSkills?.tools ?? []
const cmsToolsBuild = cmsTools.filter((t) => AI_TOOL.test(t))
const cmsToolsProductivity = cmsTools.filter((t) => !AI_TOOL.test(t))

export const TOOLS_BUILD: Tech[] =
  cmsTools.length ? toTech(cmsToolsBuild) : STATIC_TOOLS_BUILD

export const PRODUCTIVITY_TOOLS: Tech[] =
  cmsTools.length ? toTech(cmsToolsProductivity) : STATIC_PRODUCTIVITY_TOOLS

export const LANGUAGES: { nama: string; level: string }[] =
  cmsSkills?.languages?.length ? cmsSkills.languages : STATIC_LANGUAGES
