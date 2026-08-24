/** Vite base without trailing slash, e.g. '' or '/myapp'. */
function viteBasePath() {
  const base = import.meta.env.BASE_URL || '/'
  return base === '/' ? '' : String(base).replace(/\/$/, '')
}

/**
 * Navigate as a new browser document so page-level scripts (including AdSense)
 * are initialized again instead of reusing the current Vue SPA document.
 */
export function navigateToDocument(path, { replace = false } = {}) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const href = `${viteBasePath()}${normalizedPath}`

  if (replace) {
    window.location.replace(href)
    return
  }

  window.location.assign(href)
}
