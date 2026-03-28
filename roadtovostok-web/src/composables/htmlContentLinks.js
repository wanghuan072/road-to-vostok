import { useRouter } from 'vue-router'

/** Vite base without trailing slash, e.g. '' or '/myapp' */
function viteBasePath() {
  const b = import.meta.env.BASE_URL || '/'
  if (b === '/') return ''
  return String(b).replace(/\/$/, '')
}

/**
 * For nodes with v-html: treat same-origin in-site paths as client-side navigation
 * so internal links (e.g. /mods/:addressBar) work without a full reload.
 */
export function useHtmlContentLinkNavigation() {
  const router = useRouter()

  function onContentLinkClick(e) {
    if (e.defaultPrevented) return
    const anchor = e.target?.closest?.('a[href]')
    if (!anchor) return
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    if (anchor.getAttribute('target') === '_blank') return
    if (anchor.getAttribute('download') != null) return

    const raw = anchor.getAttribute('href')
    if (!raw || raw.startsWith('#')) return
    if (/^(https?:|mailto:|tel:)/i.test(raw)) return

    let pathname
    let suffix = ''
    try {
      const u = new URL(raw, window.location.href)
      if (u.origin !== window.location.origin) return
      pathname = u.pathname
      suffix = u.search + u.hash
    } catch {
      return
    }

    const base = viteBasePath()
    let path = pathname
    if (base && (path === base || path.startsWith(`${base}/`))) {
      path = path.slice(base.length) || '/'
    }

    if (!path.startsWith('/')) return

    e.preventDefault()
    router.push(path + suffix)
  }

  return { onContentLinkClick }
}
