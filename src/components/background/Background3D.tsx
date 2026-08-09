/**
 * Background3D — latar 3D berbasis Three.js (grid perspektif hitam + partikel).
 * - Fix di belakang konten (position: fixed, z-index 0, pointer-events: none)
 * - Animasi kontinu: grid berputar pelan, opacity berdenyut, partikel melayang
 * - Parallax halus saat scroll (kamera naik, grid mundur)
 * - Fallback: jika WebGL tidak tersedia, tidak render apa pun (situs tetap jalan)
 */
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const GRID_COLOR = 0x000000 // hitam
const BASE_OPACITY = 0.2

export default function Background3D() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    let renderer: THREE.WebGLRenderer | null = null
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    } catch {
      return // WebGL tidak tersedia — jangan render apa pun
    }

    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0xfafaf9, 10, 34)

    const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.set(0, 7, 15)
    camera.lookAt(0, 0, 0)

    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    /* ===== Grid 3D (lantai perspektif) ===== */
    const grid = new THREE.GridHelper(44, 44, GRID_COLOR, GRID_COLOR)
    grid.position.y = -1
    scene.add(grid)

    const gridMats = Array.isArray(grid.material) ? grid.material : [grid.material]
    gridMats.forEach((m) => {
      m.transparent = true
      m.opacity = BASE_OPACITY
    })

    /* ===== Partikel 3D (titik melayang) ===== */
    const COUNT = 350
    const positions = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 34 // x
      positions[i * 3 + 1] = Math.random() * 9 - 1 // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 24 // z
    }
    const pointsGeo = new THREE.BufferGeometry()
    pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const pointsMat = new THREE.PointsMaterial({
      color: GRID_COLOR,
      size: 0.07,
      transparent: true,
      opacity: 0.45,
      sizeAttenuation: true,
    })
    const points = new THREE.Points(pointsGeo, pointsMat)
    scene.add(points)

    /* ===== Resize ===== */
    const onResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer!.setSize(w, h)
    }
    const ro = new ResizeObserver(onResize)
    ro.observe(mount)

    /* ===== Parallax scroll ===== */
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let targetCamY = 7
    const onScroll = () => {
      const total = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const p = window.scrollY / total
      targetCamY = 7 - p * 4 // kamera naik saat scroll (grid mundur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    /* ===== Loop animasi ===== */
    const clock = new THREE.Clock()
    let raf = 0
    const animate = () => {
      raf = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      grid.rotation.y = t * 0.05 // grid berputar pelan
      gridMats.forEach((m) => {
        m.opacity = BASE_OPACITY + Math.sin(t * 0.8) * 0.06 // denyut halus
      })

      points.rotation.y = -t * 0.02
      points.position.y = Math.sin(t * 0.3) * 0.4

      if (!reduceMotion) {
        camera.position.y += (targetCamY - camera.position.y) * 0.05
      }

      renderer!.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      ro.disconnect()
      pointsGeo.dispose()
      pointsMat.dispose()
      grid.geometry.dispose()
      gridMats.forEach((m) => m.dispose())
      renderer?.dispose()
      if (renderer?.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} id="bg3d" aria-hidden />
}
