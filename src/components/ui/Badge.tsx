import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  tone?: 'accent' | 'highlight' | 'neutral'
}

const TONES = {
  accent: 'bg-accent-soft text-accent',
  highlight: 'bg-amber-100 text-amber-700',
  neutral: 'bg-surface-muted text-muted',
} as const

export default function Badge({ children, tone = 'accent' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${TONES[tone]}`}>
      {children}
    </span>
  )
}
