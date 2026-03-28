/**
 * Site-wide SEO defaults. Override in production with VITE_SITE_ORIGIN (include protocol, no trailing slash).
 */
export const siteOrigin =
  typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_ORIGIN
    ? String(import.meta.env.VITE_SITE_ORIGIN).replace(/\/$/, '')
    : 'https://roadtovostok.org'

export const siteName = 'Road To Vostok Guide'

export const defaultImagePath = '/images/logo.webp'

export function absoluteUrl(path) {
  const p = path.startsWith('/') ? path : `/${path}`
  return `${siteOrigin}${p}`
}

/** Open Graph / Twitter default share image */
export const defaultOgImage = absoluteUrl(defaultImagePath)

export const seoDefaults = {
  titleTemplate: (pageTitle) =>
    pageTitle.includes(siteName) ? pageTitle : `${pageTitle} | ${siteName}`,
  description:
    'Road To Vostok survival guide and database: Steam demo and Early Access, maps, tasks, weapons, medical, saves, and roadmap. Cross-check with your installed build.',
  keywords:
    'Road To Vostok, survival guide, game database, Steam, Early Access, maps, tasks, weapons, Area 05, Border Zone, Vostok, roadmap',
  author: siteName,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  locale: 'en_US',
}

/** SameAs: add real profiles when available */
export const organizationSameAs = [
  'https://www.roadtovostok.com/',
  'https://store.steampowered.com/app/1963610/Road_to_Vostok/',
]

export const socialHandles = {
  /** Set VITE_TWITTER_SITE=@handle when you have a project account */
  twitterSite: typeof import.meta !== 'undefined' && import.meta.env?.VITE_TWITTER_SITE
    ? String(import.meta.env.VITE_TWITTER_SITE)
    : '',
}
