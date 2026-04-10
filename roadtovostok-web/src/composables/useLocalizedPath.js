/**
 * 与 Heartopia 一致：默认语言 URL 无前缀，其它语言首段为语言码（如 /zh/wiki、/ru/map）。
 * 模板里显式链接用 `getLocalizedPath()`；locale / 数据里的 `v-html` 内链不改写字符串，
 * 由 `App.vue` 根节点对 `htmlContentLinks` 做捕获阶段拦截，SPA 内保持当前语言。
 * `stripLocale*` / `applyLocale*` 供 router、SEO、sitemap、链接拦截复用。
 */
import { useRoute } from 'vue-router'
import { supportedLocales } from '../i18n/index.js'

/** 从路径解析当前界面语言（首段在 supportedLocales 内则采用，否则 en） */
export function extractLocaleFromPath(path) {
  const segments = path.split('/').filter(Boolean)
  const first = segments[0]
  if (supportedLocales.includes(first)) {
    return first
  }
  return 'en'
}

/** 去掉首段语言码，得到「逻辑路径」（保留 query/hash） */
export function stripLocaleFromFullPath(fullPath) {
  const q = fullPath.indexOf('?')
  const h = fullPath.indexOf('#')
  let end = fullPath.length
  if (q >= 0) end = Math.min(end, q)
  if (h >= 0) end = Math.min(end, h)
  const pathname = fullPath.slice(0, end) || '/'
  const suffix = fullPath.slice(end)
  const segments = pathname.split('/').filter(Boolean)
  if (segments.length && supportedLocales.includes(segments[0])) {
    segments.shift()
  }
  const base = segments.length ? `/${segments.join('/')}` : '/'
  return base + suffix
}

/** 按语言生成实际路径（en 无前缀） */
export function applyLocalePrefix(logicalPath, locale) {
  const p = logicalPath.startsWith('/') ? logicalPath : `/${logicalPath}`
  if (locale === 'en') return p
  return `/${locale}${p}`
}

export function useLocalizedPath() {
  const route = useRoute()

  const getCurrentLocale = () => extractLocaleFromPath(route.path)

  const getLocalizedPath = (path) => applyLocalePrefix(path, getCurrentLocale())

  return {
    getLocalizedPath,
    getCurrentLocale,
    supportedLocales,
  }
}
