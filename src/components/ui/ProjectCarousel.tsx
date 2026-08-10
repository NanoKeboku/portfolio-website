/**
 * ProjectCarousel — slider gambar proyek (slide kiri/kanan + otomatis).
 * - Panah kiri/kanan + indikator dot
 * - Auto-play 4 detik, pause saat hover
 * - Loop tak terbatas (wrap)
 */
import { useCallback, useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

interface ProjectCarouselProps {
  images: string[]
  alt: string
  className?: string
  /** true = sudut tegas (brutalist), tanpa rounded-xl. */
  squared?: boolean
}

export default function ProjectCarousel({ images, alt, className = '', squared = false }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback(
    (dir: number) => {
      setIndex((i) => (i + dir + images.length) % images.length)
    },
    [images.length],
  )

  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  useEffect(() => {
    stop()
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 4000)
    return stop
  }, [images.length])

  if (images.length === 0) return null

  return (
    <div
      className={`group relative overflow-hidden ${squared ? 'rounded-none' : 'rounded-xl'} bg-surface-muted ${className}`}
      onMouseEnter={stop}
      onMouseLeave={() => {
        stop()
        timerRef.current = setInterval(() => {
          setIndex((i) => (i + 1) % images.length)
        }, 4000)
      }}
    >
      {/* Track slide */}
      <div
        className="flex h-full w-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={i === 0 ? alt : `${alt} ${i + 1}`}
            loading="lazy"
            className="h-full w-full shrink-0 object-cover object-top"
          />
        ))}
      </div>

      {/* Panah kiri/kanan */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Gambar sebelumnya"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white opacity-0 backdrop-blur-sm transition hover:bg-black/55 focus-visible:outline-none group-hover:opacity-100"
          >
            <FaChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Gambar berikutnya"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white opacity-0 backdrop-blur-sm transition hover:bg-black/55 focus-visible:outline-none group-hover:opacity-100"
          >
            <FaChevronRight className="h-4 w-4" />
          </button>
        </>
      )}

      {/* Indikator dot */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
