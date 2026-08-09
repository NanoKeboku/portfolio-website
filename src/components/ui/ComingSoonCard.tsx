/**
 * ComingSoonCard — kartu placeholder proyek yang belum diisi.
 * Menampilkan PixelDino (T-Rex ala game Chrome) beranimasi + label kategori.
 */
import { motion } from 'framer-motion'
import BentoCard from './BentoCard'
import PixelDino from './PixelDino'

interface ComingSoonCardProps {
  label: string
  delay?: number
}

export default function ComingSoonCard({ label, delay = 0 }: ComingSoonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
    >
      <BentoCard className="flex flex-col items-center justify-center px-6 py-14 text-center">
        <PixelDino />
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">{label}</p>
        <h3 className="mt-1 text-2xl font-bold tracking-tight">Coming Soon</h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Karya-karya terbaik sedang disiapkan. Pantau terus — portofolio ini akan segera diisi.
        </p>
      </BentoCard>
    </motion.div>
  )
}
