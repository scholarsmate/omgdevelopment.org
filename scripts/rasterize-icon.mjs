import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = path.resolve(process.cwd())
const srcSvg = path.join(root, 'public', 'images', 'dev-icon.svg')
const outDir = path.join(root, 'public', 'images')

async function ensureOutDir() {
  await fs.mkdir(outDir, { recursive: true })
}

async function rasterizeSizes(svgBuffer) {
  const sizes = [16, 32, 64, 128, 180, 192, 256, 512]
  await Promise.all(
    sizes.map(async (size) => {
      const outPath = path.join(outDir, `dev-icon-${size}.png`)
      const img = sharp(svgBuffer, { density: 384 }) // high density for crisp edges
        .resize(size, size, { fit: 'contain' })
        .png({ compressionLevel: 9 })
      await img.toFile(outPath)
      return outPath
    })
  )
}

async function makeOgImage(svgBuffer) {
  // Create a 1200x630 background and place a centered 512px icon
  const bg = sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: '#0b66c3',
    },
  })

  const iconPng = await sharp(svgBuffer, { density: 512 })
    .resize(512, 512, { fit: 'contain' })
    .png()
    .toBuffer()

  const outPath = path.join(outDir, 'og.png')
  await bg
    .composite([{ input: iconPng, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toFile(outPath)
}

async function main() {
  await ensureOutDir()
  const svg = await fs.readFile(srcSvg)
  await rasterizeSizes(svg)
  await makeOgImage(svg)
  console.log('PNG icons generated in public/images')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
