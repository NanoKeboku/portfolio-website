import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        {/* Redirect path lama (Indonesia) agar link lama tetap jalan */}
        <Route path="proyek" element={<Navigate to="/projects" replace />} />
        <Route path="tentang" element={<Navigate to="/about" replace />} />
        <Route path="kontak" element={<Navigate to="/contact" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
