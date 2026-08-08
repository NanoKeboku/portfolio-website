import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scroll ke atas setiap ganti halaman. */
export default function useScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
}
