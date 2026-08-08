/**
 * Sumber data pengalaman & organisasi — dari CV Alhambra Ferdinando.
 * Dipakai oleh halaman Home (single-page) & About.
 */
export interface Experience {
  periode: string
  peran: string
  tempat: string
  poin: string[]
  featured?: boolean
}

export const PENGALAMAN: Experience[] = [
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

export const ORGANISASI: Experience[] = [
  {
    periode: 'Jun 2024 — Jun 2025',
    peran: 'Presiden HIMATEKNO',
    tempat: 'Information Technology Student Association — UMP',
    poin: [
      'Memimpin organisasi 100+ anggota dan mengoordinasikan 5+ program kerja pengembangan kompetensi.',
      'Meningkatkan keterlibatan mahasiswa hingga 60% dibanding tahun sebelumnya.',
      'Memperluas jejaring dengan bergabung ke Permikomnas — kolaborasi nasional dengan 10+ universitas se-Indonesia.',
    ],
    featured: true,
  },
]
