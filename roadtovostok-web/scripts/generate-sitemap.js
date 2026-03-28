/**
 * Manual sitemap generator (same idea as Escape the Backrooms scripts/generate-sitemap.js).
 * Run: npm run sitemap
 *
 * Reads routeDefs from src/router/index.js (named export; Node 使用 MemoryHistory，不依赖浏览器).
 * Domain: VITE_SITE_ORIGIN env or default https://roadtovostok.org (no trailing slash)
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { routeDefs } from '../src/router/index.js'
import guideArticles from '../src/data/guides/articles.js'
import modArticles from '../src/data/mods/mods.js'
import npcList from '../src/data/item/npcs.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')

const siteOrigin = (process.env.VITE_SITE_ORIGIN || 'https://roadtovostok.org').replace(/\/$/, '')

function escapeLoc(url) {
  return url.replace(/&/g, '&amp;')
}

function formatPriority(p) {
  return String(Number(Number(p).toFixed(2)))
}

function urlXml(loc, lastmod, priority, changefreq) {
  return `  <url>
    <loc>${escapeLoc(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${formatPriority(priority)}</priority>
  </url>`
}

function buildSitemapXml() {
  const lastmod = new Date().toISOString().split('T')[0]
  let body = ''

  for (const def of routeDefs) {
    if (def.path.includes('/:')) continue
    const sm = def.meta?.sitemap
    if (sm === false) continue
    const priority = sm?.priority ?? 0.5
    const changefreq = sm?.changefreq ?? 'monthly'
    const loc =
      def.path === '/'
        ? `${siteOrigin}/`
        : `${siteOrigin}${def.path.startsWith('/') ? def.path : `/${def.path}`}`
    body += `\n${urlXml(loc, lastmod, priority, changefreq)}`
  }

  for (const a of guideArticles) {
    const loc = `${siteOrigin}/guides/${a.addressBar}`
    body += `\n${urlXml(loc, lastmod, 0.8, 'monthly')}`
  }

  for (const m of modArticles) {
    const loc = `${siteOrigin}/mods/${m.addressBar}`
    body += `\n${urlXml(loc, lastmod, 0.78, 'monthly')}`
  }

  for (const n of npcList) {
    const loc = `${siteOrigin}/wiki/npcs/${n.addressBar}`
    body += `\n${urlXml(loc, lastmod, 0.75, 'monthly')}`
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}
</urlset>`
}

function main() {
  const xml = buildSitemapXml()
  const publicPath = path.join(projectRoot, 'public', 'sitemap.xml')
  const distPath = path.join(projectRoot, 'dist', 'sitemap.xml')

  fs.mkdirSync(path.dirname(publicPath), { recursive: true })
  fs.writeFileSync(publicPath, xml, 'utf8')
  console.log(`Wrote ${path.relative(projectRoot, publicPath)}`)

  if (fs.existsSync(path.dirname(distPath))) {
    fs.writeFileSync(distPath, xml, 'utf8')
    console.log(`Wrote ${path.relative(projectRoot, distPath)}`)
  }

  const count = (xml.match(/<url>/g) || []).length
  console.log(`URLs: ${count} · origin: ${siteOrigin}`)
}

main()
