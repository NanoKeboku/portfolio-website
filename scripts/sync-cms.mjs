#!/usr/bin/env node
/**
 * sync-cms.mjs — Sinkronisasi konten portfolio dari LeadsHub (Opsi A).
 *
 * Fetch https://travel-agency-leads.pages.dev/api/portfolio/export →
 * generate src/data/cms.generated.ts (data CMS untuk portfolio).
 *
 * Fallback: kalau LeadsHub tidak bisa dijangkau → tulis `cmsData = null`
 * (portfolio tetap pakai data statis lokal — build tidak pernah gagal).
 *
 * Pemakaian:
 *   node scripts/sync-cms.mjs                # dari LeadsHub prod
 *   LEADSHUB_API=http://127.0.0.1:8789 node scripts/sync-cms.mjs   # lokal
 */
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.resolve(__dirname, '../src/data/cms.generated.ts')
const BASE = process.env.LEADSHUB_API || 'https://travel-agency-leads.pages.dev'

function serialize(v) {
  return JSON.stringify(v, null, 2).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')
}

const HEADER = `/**
 * AUTO-GENERATED oleh scripts/sync-cms.mjs — JANGAN edit manual.
 * Sumber: ${BASE}/api/portfolio/export · ${new Date().toISOString()}
 * Saat LeadsHub tidak terjangkau, cmsData = null → portfolio pakai data statis lokal.
 */
`

async function main() {
  let data = null
  try {
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), 8000)
    const res = await fetch(`${BASE}/api/portfolio/export`, { signal: ctrl.signal })
    clearTimeout(timer)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    data = await res.json()
  } catch (e) {
    console.warn(`[sync-cms] Gagal fetch ${BASE} — pakai data lokal (fallback). ${e.message}`)
    writeFileSync(OUT, `${HEADER}export const cmsData = null;\n`, 'utf8')
    return
  }

  // Normalisasi ke bentuk yang dipakai portfolio
  const kontak = data.kontak && typeof data.kontak === 'object' ? data.kontak : null
  const skills =
    data.skills && typeof data.skills === 'object'
      ? {
          techStack: Array.isArray(data.skills.techStack) ? data.skills.techStack.map(String) : [],
          tools: Array.isArray(data.skills.tools) ? data.skills.tools.map(String) : [],
          languages: Array.isArray(data.skills.languages)
            ? data.skills.languages
                .filter((l) => l && typeof l === 'object' && l.nama)
                .map((l) => ({ nama: String(l.nama), level: String(l.level ?? '') }))
            : [],
        }
      : null
  const experience =
    data.experience && typeof data.experience === 'object'
      ? {
          pengalaman: Array.isArray(data.experience.pengalaman) ? data.experience.pengalaman : [],
          organisasi: Array.isArray(data.experience.organisasi) ? data.experience.organisasi : [],
        }
      : null
  const projects = Array.isArray(data.projects)
    ? data.projects
        .filter((p) => p && p.judul && p.featured === 1)
        .map((p) => ({
          id: String(p.id),
          judul: String(p.judul),
          deskripsi: String(p.deskripsi ?? ''),
          tech: Array.isArray(p.tech) ? p.tech.map(String) : [],
          kategori: ['web', 'design', 'motion'].includes(p.kategori) ? p.kategori : 'web',
          gambar: Array.isArray(p.gambar) ? p.gambar.map(String) : [],
          url: p.url ? String(p.url) : null,
          repo: p.repo ? String(p.repo) : null,
          featured: 1,
          testimoni: p.testimoni ? String(p.testimoni) : null,
          status: String(p.status ?? 'live'),
        }))
    : []
  const testimonials = Array.isArray(data.testimonials) ? data.testimonials : []

  const body = `${HEADER}export interface CmsSkills {
  techStack: string[]
  tools: string[]
  languages: { nama: string; level: string }[]
}

export interface CmsExperienceItem {
  periode: string
  peran: string
  tempat: string
  poin: string[]
  featured?: boolean
}

export interface CmsProject {
  id: string
  judul: string
  deskripsi: string
  tech: string[]
  kategori: 'web' | 'design' | 'motion'
  gambar: string[]
  url: string | null
  repo: string | null
  featured: number
  testimoni: string | null
  status: string
}

export interface CmsData {
  kontak: Record<string, unknown> | null
  skills: CmsSkills | null
  experience: { pengalaman: CmsExperienceItem[]; organisasi: CmsExperienceItem[] } | null
  projects: CmsProject[]
  testimonials: unknown[]
  fetchedAt: string
}

export const cmsData: CmsData = ${serialize({
    kontak,
    skills,
    experience,
    projects,
    testimonials,
    fetchedAt: new Date().toISOString(),
  })};
`
  writeFileSync(OUT, body, 'utf8')
  console.log(
    `[sync-cms] OK → cms.generated.ts (kontak:${kontak ? 'y' : 'n'} skills:${skills ? 'y' : 'n'} exp:${experience ? 'y' : 'n'} projects:${projects.length} testimonials:${testimonials.length})`,
  )
}

main().catch((e) => {
  console.error('[sync-cms] GAGAL:', e.message)
  process.exit(1)
})
