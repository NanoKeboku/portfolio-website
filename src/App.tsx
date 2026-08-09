import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

/**
 * Single-page portfolio — semua konten di Home (menu navbar = anchor scroll).
 * Path lama di-redirect ke "/" agar bookmark/link lama tetap aman.
 */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Navigate to="/" replace />} />
        <Route path="about" element={<Navigate to="/" replace />} />
        <Route path="contact" element={<Navigate to="/" replace />} />
        <Route path="proyek" element={<Navigate to="/" replace />} />
        <Route path="tentang" element={<Navigate to="/" replace />} />
        <Route path="kontak" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
