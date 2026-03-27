import { watch } from 'vue'
import { useRoute } from 'vue-router'
import {
  siteOrigin,
  siteName,
  defaultOgImage,
  defaultImagePath,
  seoDefaults,
  absoluteUrl,
  organizationSameAs,
  socialHandles,
} from './config.js'

function normalizePath(path) {
  if (!path || path === '/') return '/'
  return path.replace(/\/+$/, '') || '/'
}

function canonicalHref(path) {
  const p = normalizePath(path)
  return `${siteOrigin}${p === '/' ? '/' : p}`
}

function ensureMeta(name, content, isProperty = false) {
  if (content === undefined || content === null || content === '') return
  const attr = isProperty ? 'property' : 'name'
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', String(content))
}

function setCanonical(href) {
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

function removeDynamicJsonLd() {
  document.querySelectorAll('script[type="application/ld+json"][data-seo-dynamic]').forEach((n) => n.remove())
}

function injectJsonLd(data) {
  removeDynamicJsonLd()
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.setAttribute('data-seo-dynamic', 'true')
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

function buildJsonLd({ title, description, path, pageOgType }) {
  const url = canonicalHref(path)
  const image = defaultOgImage
  const websiteId = `${siteOrigin}/#website`
  const orgId = `${siteOrigin}/#organization`

  const organization = {
    '@type': 'Organization',
    '@id': orgId,
    name: siteName,
    url: siteOrigin,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl(defaultImagePath),
    },
    sameAs: organizationSameAs.filter(Boolean),
  }

  const website = {
    '@type': 'WebSite',
    '@id': websiteId,
    name: siteName,
    url: siteOrigin,
    description: seoDefaults.description,
    publisher: { '@id': orgId },
    inLanguage: 'en',
  }

  const webPage = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { '@id': websiteId },
    inLanguage: 'en-US',
  }

  if (pageOgType === 'website' && normalizePath(path) === '/') {
    webPage.about = { '@type': 'VideoGame', name: 'Road To Vostok' }
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, website, webPage],
  }
}

/**
 * Apply meta tags + canonical + JSON-LD from route.meta.seo (merged with defaults).
 */
export function applyRouteSeo(route) {
  if (typeof document === 'undefined') return

  const metaSeo = route.meta?.seo || {}
  const rawTitle = metaSeo.title || `${siteName} — Survival wiki & task help`
  const title = seoDefaults.titleTemplate(rawTitle)
  const description = metaSeo.description || seoDefaults.description
  const keywords = metaSeo.keywords || seoDefaults.keywords
  const ogType = metaSeo.ogType || seoDefaults.ogType
  const image = metaSeo.image ? absoluteUrl(metaSeo.image) : defaultOgImage
  const path = route.path
  const canonical = canonicalHref(path)

  document.title = title

  ensureMeta('description', description, false)
  ensureMeta('keywords', keywords, false)
  ensureMeta('author', metaSeo.author || seoDefaults.author, false)
  ensureMeta('robots', metaSeo.robots || 'index,follow,max-image-preview:large', false)

  ensureMeta('og:title', title, true)
  ensureMeta('og:description', description, true)
  ensureMeta('og:url', canonical, true)
  ensureMeta('og:type', ogType, true)
  ensureMeta('og:site_name', siteName, true)
  ensureMeta('og:image', image, true)
  ensureMeta(
    'og:image:alt',
    metaSeo.ogImageAlt || `${siteName} logo`,
    true,
  )
  ensureMeta('og:locale', seoDefaults.locale, true)

  ensureMeta('twitter:card', metaSeo.twitterCard || seoDefaults.twitterCard, false)
  ensureMeta('twitter:title', title, false)
  ensureMeta('twitter:description', description, false)
  ensureMeta('twitter:image', image, false)
  if (socialHandles.twitterSite) {
    ensureMeta('twitter:site', socialHandles.twitterSite, false)
  }

  setCanonical(canonical)

  injectJsonLd(
    buildJsonLd({
      title,
      description,
      path,
      pageOgType: ogType,
    }),
  )
}

/** Call from App.vue: watches route and updates head on SPA navigations. */
export function useRouteSeo() {
  const route = useRoute()
  watch(
    () => [route.fullPath, route.name],
    () => applyRouteSeo(route),
    { immediate: true },
  )
}
