/**
 * One-off / refresh: pull large thumbnails from Road To Vostok Fandom weapon hub pages
 * into public/images/wiki/weapons/{id}.png. Requires network.
 *
 * Run from roadtovostok-web: node scripts/download-fandom-weapon-images.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '..', 'public', 'images', 'wiki', 'weapons')
fs.mkdirSync(outDir, { recursive: true })

const files = [
  ['Jaeger_140_large_thumbnail.png', 'jaeger-140'],
  ['Skrama_200_large_thumbnail.png', 'skrama-200'],
  ['Skrama_240_large_thumbnail.png', 'skrama-240'],
  ['C1911_Large_Thumbnail.png', 'c1911'],
  ['Makarov_large_thumbnail.png', 'makarov'],
  ['G17_large_thumbnail.png', 'g17'],
  ['AK-12_large_thumbnail.png', 'ak-12'],
  ['AKM_large_thumbnail.png', 'akm'],
  ['AKS-74U_large_thumbnail.png', 'aks-74u'],
  ['RK-95.png', 'rk-95'],
  ['MK18_large_thumbnail.png', 'mk18'],
  ['VSS_large_thumbnail.png', 'vss'],
  ['KP-31_large_thumbnail.png', 'kp-31'],
  ['KAR-21(.308)_large_thumbnail.png', 'kar-21-308'],
  ['KAR-21(.223)_large_thumbnail.png', 'kar-21-223'],
  ['MP5SD_large_thumbnail.png', 'mp5sd'],
  ['MP5K_large_thumbnail.png', 'mp5k'],
  ['MP5_large_thumbnail.png', 'mp5'],
  ['MP7_large_thumbnail.png', 'mp7'],
  ['RM870_large_thumbnail.png', 'rm-870'],
  ['Mosin_large_thumbnail.png', 'mosin'],
  ['SVD_large_thumbnail.png', 'svd'],
]

const titles = files.map(([f]) => `File:${f}`).join('|')
const api = `https://roadtovostok.fandom.com/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=imageinfo&iiprop=url&format=json`

const res = await fetch(api)
const j = await res.json()
const pagesMap = j.query?.pages || {}

function fileTitleToUnderscore(title) {
  return title.replace(/^File:/, '').replace(/ /g, '_')
}

const urlByWikiFile = {}
for (const p of Object.values(pagesMap)) {
  const url = p.imageinfo?.[0]?.url
  if (!p.title || !url) continue
  urlByWikiFile[fileTitleToUnderscore(p.title)] = url
}

for (const [wikiFile, id] of files) {
  const url = urlByWikiFile[wikiFile]
  if (!url) {
    console.error('No URL', wikiFile)
    continue
  }
  const dest = path.join(outDir, `${id}.png`)
  const img = await fetch(url)
  if (!img.ok) {
    console.error('Fetch fail', wikiFile, img.status)
    continue
  }
  const buf = Buffer.from(await img.arrayBuffer())
  fs.writeFileSync(dest, buf)
  console.log('Wrote', id + '.png', buf.length)
}
