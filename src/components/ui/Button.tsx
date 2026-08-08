import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export default function Button({ children, variant = 'primary', className = '', ...rest }: ButtonProps) {
  const base =
    variant === 'primary'
      ? 'bg-accent text-white hover:brightness-110'
      : 'border border-line bg-surface text-ink hover:bg-surface-muted'
  return (
    <button
      className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:outline-none ${base} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
