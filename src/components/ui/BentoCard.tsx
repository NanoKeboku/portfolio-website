import type { ReactNode } from 'react'

interface BentoCardProps {
  children: ReactNode
  className?: string
  featured?: boolean
}

/** Kartu bento — bentuk seragam (rounded-2xl) untuk semua kartu. */
export default function BentoCard({ children, className = '', featured = false }: BentoCardProps) {
  return (
    <div
      className={
        featured
          ? `rounded-2xl bg-dark-card p-6 text-on-dark shadow-card-hover md:p-8 ${className}`
          : `rounded-2xl border border-line bg-surface p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover ${className}`
      }
    >
      {children}
    </div>
  )
}
