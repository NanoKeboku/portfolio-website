interface BrandMarkProps {
  text: string
  bg: string
  fg?: string
  className?: string
}

/** Logo inisial untuk brand tanpa ikon SVG (mis. Canva, Photoshop, After Effects). */
export default function BrandMark({ text, bg, fg = '#FFFFFF', className = '' }: BrandMarkProps) {
  return (
    <span
      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] text-[8px] font-bold ${className}`}
      style={{ backgroundColor: bg, color: fg }}
      aria-hidden
    >
      {text}
    </span>
  )
}
