/**
 * Konversi gambar portfolio ke WebP (optimasi ukuran, tanpa hapus gambar).
 * - Gambar > 1600px lebar di-resize ke 1600 (card max ~1152px, layar retina 2x ≈ 2304 — 1600 cukup baik)
 * - web-bimble.png (1920x5992, full-page) di-resize khusus ke 1280 lebar (tinggi otomatis)
 * - Kualitas 80 (visual hampir tak terasa beda vs PNG asli)
 */
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const DIR = path.join(__dirname, '..', 'src', 'images')
const MAX_W = 1600
const FULLPAGE_MAX_W = 1280

const files = fs.readdirSync(DIR).filter((f) => f.toLowerCase().endsWith('.png'))

async function main() {
  for (const f of files) {
    const src = path.join(DIR, f)
    const meta = await sharp(src).metadata()
    const isFullPage = meta.width >= 1800 && meta.height >= 4000
    const targetW = isFullPage ? FULLPAGE_MAX_W : Math.min(meta.width, MAX_W)
    const outName = f.replace(/\.png$/i, '.webp')
    const outPath = path.join(DIR, outName)

    await sharp(src)
      .resize({ width: targetW, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outPath)

    const before = fs.statSync(src).size
    const after = fs.statSync(outPath).size
    console.log(
      `${f.padEnd(24)} ${meta.width}x${meta.height} ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB  (${((1 - after / before) * 100).toFixed(0)}% hemat)`,
    )
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
