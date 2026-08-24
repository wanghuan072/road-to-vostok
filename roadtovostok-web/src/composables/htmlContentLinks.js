import { useRoute } from 'vue-router'
import {
  stripLocaleFromFullPath,
  applyLocalePrefix,
  extractLocaleFromPath,
} from './useLocalizedPath.js'
import { navigateToDocument } from '../utils/documentNavigation.js'

/**
 * Preserve the current locale for same-origin links, including links rendered by
 * v-html, then perform a full document navigation so page-level scripts reload.
 */
export function useHtmlContentLinkNavigation() {
  const route = useRoute()

  function onContentLinkClick(e) {
    if (e.defaultPrevented) return
    const rawTarget = e.target
    const el =
      rawTarget?.nodeType === Node.TEXT_NODE ? rawTarget.parentElement : rawTarget
    const anchor = el?.closest?.('a[href]')
    if (!anchor) return
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    if (anchor.getAttribute('target') === '_blank') return
    if (anchor.getAttribute('download') != null) return

    const raw = anchor.getAttribute('href')
    if (!raw || raw.startsWith('#')) return
    if (/^(https?:|mailto:|tel:)/i.test(raw)) return

    let pathname
    let suffix
    try {
      const u = new URL(raw, window.location.href)
      if (u.origin !== window.location.origin) return
      pathname = u.pathname
      suffix = u.search + u.hash
    } catch {
      return
    }

    const baseUrl = import.meta.env.BASE_URL || '/'
    const base = baseUrl === '/' ? '' : String(baseUrl).replace(/\/$/, '')
    let path = pathname
    if (base && (path === base || path.startsWith(`${base}/`))) {
      path = path.slice(base.length) || '/'
    }

    if (!path.startsWith('/')) return

    e.preventDefault()
    const logical = stripLocaleFromFullPath(path + suffix)
    const loc = extractLocaleFromPath(route.path)
    navigateToDocument(applyLocalePrefix(logical, loc))
  }

  return { onContentLinkClick }
}
