import { watch } from 'vue'
import { useRoute } from 'vue-router'
import {
  i18n,
  supportedLocales,
  localeOg,
  localeJsonLd,
  localeHreflang,
} from '../i18n/index.js'
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
import {
  stripLocaleFromFullPath,
  applyLocalePrefix,
  extractLocaleFromPath,
} from '../composables/useLocalizedPath.js'

/** Re-run document SEO when locale changes. */
function currentLocaleSignature() {
  try {
    const loc = i18n.global.locale
    return typeof loc === 'object' && loc !== null && 'value' in loc ? loc.value : String(loc)
  } catch {
    return ''
  }
}

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

function removeHreflangAlternates() {
  document.querySelectorAll('link[data-seo-hreflang]').forEach((n) => n.remove())
}

function setHreflangAlternates(pathname) {
  removeHreflangAlternates()
  const logical = stripLocaleFromFullPath(pathname)
  const pairs = supportedLocales.map((loc) => [
    localeHreflang[loc] || loc,
    canonicalHref(applyLocalePrefix(logical, loc)),
  ])
  pairs.push(['x-default', canonicalHref(applyLocalePrefix(logical, 'en'))])
  for (const [lang, href] of pairs) {
    const link = document.createElement('link')
    link.setAttribute('rel', 'alternate')
    link.setAttribute('hreflang', lang)
    link.setAttribute('href', href)
    link.setAttribute('data-seo-hreflang', 'true')
    document.head.appendChild(link)
  }
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

function buildJsonLd({
  title,
  description,
  path,
  pageOgType,
  inLanguage,
  websiteDescription,
}) {
  const url = canonicalHref(path)
  const websiteId = `${siteOrigin}/#website`
  const orgId = `${siteOrigin}/#organization`
  const langTag = inLanguage || 'en-US'

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
    description: websiteDescription || seoDefaults.description,
    publisher: { '@id': orgId },
    inLanguage: langTag,
  }

  const webPage = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { '@id': websiteId },
    inLanguage: langTag,
  }

  if (pageOgType === 'website' && normalizePath(path) === '/') {
    const videoGameName =
      typeof i18n.global?.te === 'function' &&
      typeof i18n.global?.t === 'function' &&
      i18n.global.te('site.brandName')
        ? i18n.global.t('site.brandName')
        : 'Road To Vostok'
    webPage.about = { '@type': 'VideoGame', name: videoGameName }
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

  const i18nPage = route.meta?.seoFromI18n
  const baseSeo = route.meta?.seo || {}
  const metaSeo =
    i18nPage && typeof i18n.global?.t === 'function'
      ? {
          title: i18n.global.t(`${i18nPage}.title`),
          description: i18n.global.t(`${i18nPage}.description`),
          keywords: i18n.global.t(`${i18nPage}.keywords`),
          ...(typeof i18n.global.te === 'function' &&
          i18n.global.te(`${i18nPage}.ogImageAlt`)
            ? { ogImageAlt: i18n.global.t(`${i18nPage}.ogImageAlt`) }
            : {}),
          ...baseSeo,
        }
      : { ...baseSeo }
  const defaultPageTitle =
    typeof i18n.global?.te === 'function' &&
    typeof i18n.global?.t === 'function' &&
    i18n.global.te('site.seoDefaultPageTitle')
      ? i18n.global.t('site.seoDefaultPageTitle')
      : `${siteName} — Survival wiki & task help`
  const rawTitle = metaSeo.title || defaultPageTitle
  const title = seoDefaults.titleTemplate(rawTitle)
  const description = metaSeo.description || seoDefaults.description
  const keywords = metaSeo.keywords || seoDefaults.keywords
  const ogType = metaSeo.ogType || seoDefaults.ogType
  const image = metaSeo.image ? absoluteUrl(metaSeo.image) : defaultOgImage
  const path = route.path
  const canonical = canonicalHref(path)
  const pageLocale = route.meta?.locale || extractLocaleFromPath(path)
  const ogLocale = localeOg[pageLocale] || localeOg.en
  const ogLocaleAlternate = supportedLocales
    .filter((l) => l !== pageLocale)
    .map((l) => localeOg[l])
    .join(', ')
  const jsonLdLang = localeJsonLd[pageLocale] || localeJsonLd.en
  const websiteDescription =
    typeof i18n.global?.t === 'function' &&
    typeof i18n.global?.te === 'function' &&
    i18n.global.te('tdk.homePage.description')
      ? i18n.global.t('tdk.homePage.description')
      : seoDefaults.description

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
  const defaultOgLogoAlt =
    typeof i18n.global?.te === 'function' &&
    typeof i18n.global?.t === 'function' &&
    i18n.global.te('site.ogDefaultLogoAlt')
      ? i18n.global.t('site.ogDefaultLogoAlt')
      : `${siteName} logo`
  ensureMeta('og:image:alt', metaSeo.ogImageAlt || defaultOgLogoAlt, true)
  ensureMeta('og:locale', ogLocale, true)
  ensureMeta('og:locale:alternate', ogLocaleAlternate, true)

  ensureMeta('twitter:card', metaSeo.twitterCard || seoDefaults.twitterCard, false)
  ensureMeta('twitter:title', title, false)
  ensureMeta('twitter:description', description, false)
  ensureMeta('twitter:image', image, false)
  if (socialHandles.twitterSite) {
    ensureMeta('twitter:site', socialHandles.twitterSite, false)
  }

  setCanonical(canonical)
  setHreflangAlternates(path)

  injectJsonLd(
    buildJsonLd({
      title,
      description,
      path,
      pageOgType: ogType,
      inLanguage: jsonLdLang,
      websiteDescription,
    }),
  )
}

/**
 * Override document head for pages whose SEO comes from data (e.g. /guides/:addressBar).
 * Runs after default route meta when used with watch(..., { flush: 'post' }).
 */
export function applyDynamicSeo({ path, seo = {}, ogImageAlt }) {
  const merged = { ...seo }
  if (ogImageAlt) merged.ogImageAlt = ogImageAlt
  applyRouteSeo({ path, meta: { seo: merged } })
}

/** Call from App.vue: watches route and updates head on SPA navigations. */
export function useRouteSeo() {
  const route = useRoute()
  watch(
    () => [route.fullPath, route.name, currentLocaleSignature()],
    () => applyRouteSeo(route),
    { immediate: true },
  )
}
