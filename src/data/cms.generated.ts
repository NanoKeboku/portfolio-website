/**
 * AUTO-GENERATED oleh scripts/sync-cms.mjs — JANGAN edit manual.
 * Sumber: https://travel-agency-leads.pages.dev/api/portfolio/export · 2026-08-10T09:49:31.882Z
 * Saat LeadsHub tidak terjangkau, cmsData = null → portfolio pakai data statis lokal.
 */
export interface CmsSkills {
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

export const cmsData: CmsData = {
  "kontak": {
    "nama": "Alhambra Ferdinando",
    "role": "Web Developer & Visual Designer",
    "tagline": "Building modern, scalable website with React, Laravel, Tailwind CSS, and Wordpress. Experienced in custom web development, UI/UX Implementation, REST APIs, and lightweight automation for real-world business workflows.",
    "email": "alhambra.nando@gmail.com",
    "whatsapp": "6285129976177",
    "lokasi": "Purworejo, Indonesia",
    "sosmed": {
      "github": "https://github.com/NanoKeboku",
      "linkedin": "https://www.linkedin.com/in/alhambra-ferdinando-503511286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "instagram": "https://www.instagram.com/alhambra.arch/"
    }
  },
  "skills": {
    "techStack": [
      "React",
      "TypeScript",
      "JavaScript",
      "Laravel",
      "WordPress",
      "Tailwind CSS",
      "Bootstrap",
      "jQuery",
      "MySQL",
      "Cloudflare",
      "Git",
      "GitHub",
      "Figma"
    ],
    "tools": [
      "Canva",
      "Photoshop",
      "After Effects",
      "Notion",
      "Trello",
      "Zapier",
      "Claude",
      "Hermes"
    ],
    "languages": [
      {
        "nama": "Indonesian",
        "level": "Native"
      },
      {
        "nama": "English",
        "level": "Basic (reading, writing, speaking)"
      },
      {
        "nama": "Japanese",
        "level": "Basic (daily conversation)"
      }
    ]
  },
  "experience": {
    "pengalaman": [
      {
        "periode": "May 2026",
        "peran": "Web Designer",
        "tempat": "Localio Digital Agency — Cilacap, Central Java",
        "poin": [
          "Designed and developed 10+ functional WordPress websites, optimizing speed, performance, and on-page SEO.",
          "Built a 10+ page training module covering readability principles, information structure, and design efficiency.",
          "Produced 30+ visual assets: internal agency promo posters and client Instagram content."
        ]
      },
      {
        "periode": "Oct — Nov 2025",
        "peran": "Event Organizer Intern (WFH)",
        "tempat": "Edukarya",
        "poin": [
          "Ensured all participants completed their tasks: design portfolios, reports, and MSME publication materials.",
          "Managed workflows, monitored daily progress, and guided participants toward high-quality design standards."
        ]
      }
    ],
    "organisasi": [
      {
        "periode": "Jun 2024 — Jun 2025",
        "peran": "Chairperson, HIMATEKNO",
        "tempat": "Information Technology Student Association — Universitas Muhammadiyah Purworejo",
        "poin": [
          "Led and coordinated 5 division heads and 30 organizational members in executing programs and organizational initiatives."
        ]
      }
    ]
  },
  "projects": [
    {
      "id": "2",
      "judul": "Ebitour — Umrah & Hajj Travel Website",
      "deskripsi": "Complete umrah/hajj travel agency website: package & program pages, package search system, content admin panel, and a WhatsApp chatbot for prospective pilgrims.",
      "tech": [],
      "kategori": "web",
      "gambar": [],
      "url": "https://travel-umroh-agency.pages.dev/",
      "repo": null,
      "featured": 1,
      "testimoni": null,
      "status": "live"
    },
    {
      "id": "3",
      "judul": "LeadsHub — Business Lead Database + AI Validation",
      "deskripsi": "Multi-niche lead database platform (2,300+ records) with automated validation via Google Places API — detects open/closed status, ratings, contacts, and websites. Includes admin panel, filters, and WhatsApp integration.",
      "tech": [],
      "kategori": "web",
      "gambar": [],
      "url": null,
      "repo": null,
      "featured": 1,
      "testimoni": null,
      "status": "live"
    },
    {
      "id": "4",
      "judul": "Passerelle Edu — Learning Platform",
      "deskripsi": "Education & learning platform website built with WordPress and Elementor — modern, responsive landing experience for starting your learning journey.",
      "tech": [],
      "kategori": "web",
      "gambar": [],
      "url": "https://passerelle-edu.com/",
      "repo": null,
      "featured": 1,
      "testimoni": null,
      "status": "live"
    },
    {
      "id": "1",
      "judul": "Moto Computer — IT Asset & Inventory Management",
      "deskripsi": "Multi-branch IT asset management system: item inventory, stock transfers between branches with full approval workflow (approve/ship/receive/reject), role-based access control, Google login, notifications, activity logs, and data exports — built with Laravel.",
      "tech": [],
      "kategori": "web",
      "gambar": [],
      "url": "https://motocomputer.code-project.my.id/",
      "repo": null,
      "featured": 1,
      "testimoni": null,
      "status": "live"
    }
  ],
  "testimonials": [],
  "fetchedAt": "2026-08-10T09:49:32.923Z"
};
