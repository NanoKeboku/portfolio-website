/**
 * About — bio, pendidikan, pengalaman, organisasi, soft skills & bahasa.
 * Konten dari CV Alhambra Ferdinando.
 */
import BentoCard from '../components/ui/BentoCard'
import Badge from '../components/ui/Badge'
import Reveal from '../components/ui/Reveal'
import { KONTAK } from '../data/kontak'
import { SKILLS, SOFT_SKILLS, LANGUAGES } from '../data/skills'

const PENGALAMAN = [
  {
    periode: 'Jul 2026 — Sekarang',
    peran: 'Guru Produktif TKJ (IT Teacher)',
    tempat: 'SMK Kristen Penabur Purworejo',
    poin: [
      'Mengajar siswa kelas 10 & 12 (Teknik Komputer dan Jaringan) secara mingguan.',
      'Menyusun materi ajar Keamanan Jaringan Dasar, K3LH, dan Technopreneurship sesuai standar industri.',
    ],
  },
  {
    periode: 'Mei 2026',
    peran: 'Web Designer',
    tempat: 'Localio Digital Agency — Cilacap, Jawa Tengah',
    poin: [
      'Merancang & mengembangkan 10+ website fungsional (WordPress); optimasi kecepatan, performa, dan SEO on-page.',
      'Membuat modul pelatihan 10+ halaman (prinsip keterbacaan, struktur informasi, efisiensi desain).',
      'Memproduksi 30+ aset visual: poster promosi internal & konten Instagram klien.',
    ],
  },
  {
    periode: 'Okt — Nov 2025',
    peran: 'Event Organizer (Magang, WFH)',
    tempat: 'Edukarya',
    poin: [
      'Memastikan seluruh peserta menyelesaikan tugas: portfolio desain, laporan, dan materi publikasi UMKM.',
      'Mengelola alur kerja, memantau progres harian, dan membimbing peserta mencapai standar desain berkualitas.',
    ],
  },
]

const ORGANISASI = [
  {
    periode: 'Jun 2024 — Jun 2025',
    peran: 'Presiden HIMATEKNO',
    tempat: 'Information Technology Student Association — UMP',
    poin: [
      'Memimpin organisasi 100+ anggota dan mengoordinasikan 5+ program kerja pengembangan kompetensi.',
      'Meningkatkan keterlibatan mahasiswa hingga 60% dibanding tahun sebelumnya.',
      'Memperluas jejaring dengan bergabung ke Permikomnas — kolaborasi nasional dengan 10+ universitas se-Indonesia.',
    ],
  },
]

export default function About() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-16 px-4 py-12 md:px-8 md:py-16">
      {/* Bio */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <BentoCard className="h-full">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Tentang</p>
            <h1 className="mt-2 text-3xl font-bold">Tentang Saya</h1>
            <p className="mt-4 leading-relaxed text-muted">
              Saya mahasiswa Information Technology di Universitas Muhammadiyah Purworejo dengan ketertarikan
              mendalam pada teknologi dan multimedia. Saya senang mengeksplorasi tools, framework, dan tren desain
              baru — aktif di pengembangan web, visual branding, dan pembuatan konten digital.
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              Pengalaman saya membentang dari mengajar (guru TKJ), mendesain website untuk klien agensi, hingga
              memimpin organisasi kemahasiswaan. Saya percaya kombinasi keterampilan teknis, desain, dan komunikasi
              adalah kunci solusi digital yang benar-benar membantu bisnis.
            </p>
          </BentoCard>
        </Reveal>

        <Reveal delay={0.1}>
          <BentoCard className="h-full space-y-3 text-sm">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-accent-soft text-4xl font-bold text-accent">
              AF
            </div>
            <div>
              <p className="font-semibold">{KONTAK.nama}</p>
              <p className="text-muted">{KONTAK.role}</p>
            </div>
            <div className="space-y-1 border-t border-line pt-3 text-muted">
              <p>📍 {KONTAK.lokasi}</p>
              <p>✉️ {KONTAK.email}</p>
              <p>🎓 S.Kom. (IT) — UMP 2026</p>
            </div>
          </BentoCard>
        </Reveal>
      </section>

      {/* Pendidikan */}
      <section>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Pendidikan</p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">Riwayat Pendidikan</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <BentoCard className="mt-6">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold">Bachelor of Information Technology</h3>
                <p className="text-sm text-muted">Universitas Muhammadiyah Purworejo — 2022–2026</p>
              </div>
              <Badge tone="highlight">IPK 3.55 / 4.00</Badge>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                'Web Programming',
                'Database Management',
                'Systems Analysis & Design',
                'Project Management',
                'Framework Programming',
                'E-Commerce',
                'Internet of Things (IoT)',
              ].map((c) => (
                <Badge key={c} tone="neutral">
                  {c}
                </Badge>
              ))}
            </div>
          </BentoCard>
        </Reveal>
      </section>

      {/* Pengalaman */}
      <section>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Pengalaman</p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">Pengalaman Kerja</h2>
        </Reveal>
        <div className="mt-6 space-y-4">
          {PENGALAMAN.map((e, i) => (
            <Reveal key={e.peran} delay={i * 0.05}>
              <BentoCard>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">{e.peran}</h3>
                    <p className="text-sm text-muted">{e.tempat}</p>
                  </div>
                  <Badge tone="neutral">{e.periode}</Badge>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                  {e.poin.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Organisasi */}
      <section>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Organisasi</p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">Kepemimpinan</h2>
        </Reveal>
        <div className="mt-6 space-y-4">
          {ORGANISASI.map((o, i) => (
            <Reveal key={o.peran} delay={i * 0.05}>
              <BentoCard featured className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-8">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{o.peran}</h3>
                  <p className="text-sm text-on-dark/70">{o.tempat}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-on-dark/75">
                    {o.poin.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
                <Badge tone="highlight" >
                  {o.periode}
                </Badge>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills & Bahasa */}
      <section className="grid gap-4 md:grid-cols-2">
        <Reveal>
          <BentoCard className="h-full">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Soft Skills</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {SOFT_SKILLS.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Bahasa</p>
            <ul className="mt-3 space-y-2 text-sm">
              {LANGUAGES.map((l) => (
                <li key={l.nama} className="flex items-center justify-between gap-2">
                  <span className="font-medium">{l.nama}</span>
                  <span className="text-muted">{l.level}</span>
                </li>
              ))}
            </ul>
          </BentoCard>
        </Reveal>
        <Reveal delay={0.1}>
          <BentoCard className="h-full">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Hard Skills</p>
            <div className="mt-4 space-y-3">
              {SKILLS.map((s) => (
                <div key={s.nama} className="flex items-center gap-3">
                  <span className="w-6 text-center text-lg">{s.icon}</span>
                  <span className="w-32 text-sm font-medium">{s.nama}</span>
                  <div className="flex flex-1 gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <span
                        key={j}
                        className={`h-2 flex-1 rounded-full ${j < s.level ? 'bg-accent' : 'bg-line'}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>
        </Reveal>
      </section>
    </div>
  )
}
