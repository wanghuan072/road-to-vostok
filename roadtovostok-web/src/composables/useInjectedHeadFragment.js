import { watch, onBeforeUnmount, toValue } from 'vue'

const MARKER = 'data-injected-head-fragment'

function removeInjectedNodes() {
  if (typeof document === 'undefined') return
  document.querySelectorAll(`head [${MARKER}]`).forEach((el) => el.remove())
}

/**
 * Normalize CMS `head` field: string HTML fragment, or array of fragments joined in order.
 */
function normalizeHeadHtml(raw) {
  if (raw == null) return ''
  if (Array.isArray(raw)) return raw.filter(Boolean).map(String).join('\n')
  return String(raw)
}

/**
 * Parse a fragment of elements that belong in <head> (e.g. script[type=application/ld+json],
 * meta, link, style) and append clones to document.head. Each node is marked for teardown.
 * Does not run inline JS in script tags beyond what the browser does on append (JSON-LD is inert).
 */
function injectHeadFragment(html) {
  removeInjectedNodes()
  const fragment = normalizeHeadHtml(html).trim()
  if (!fragment || typeof document === 'undefined') return

  const wrapped = `<!DOCTYPE html><html><head>${fragment}</head><body></body></html>`
  const parsed = new DOMParser().parseFromString(wrapped, 'text/html')
  const headEl = parsed.head
  if (!headEl) return

  for (const node of headEl.childNodes) {
    if (node.nodeType !== Node.ELEMENT_NODE) continue
    const clone = document.importNode(node, true)
    clone.setAttribute(MARKER, '')
    document.head.appendChild(clone)
  }
}

/**
 * @param {import('vue').MaybeRefOrGetter<string | string[] | undefined | null>} source
 */
export function useInjectedHeadFragment(source) {
  watch(
    () => toValue(source),
    (html) => {
      injectHeadFragment(html)
    },
    { immediate: true, flush: 'post' },
  )

  onBeforeUnmount(() => {
    removeInjectedNodes()
  })
}
