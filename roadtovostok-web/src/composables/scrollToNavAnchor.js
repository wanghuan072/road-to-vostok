import { unref } from 'vue'

/**
 * Scroll to `[data-nav-anchor="key"]` inside root (no hash / no URL change).
 * @param {import('vue').Ref<HTMLElement | null> | HTMLElement | null} rootRef
 * @param {string} key
 */
export function scrollToNavAnchor(rootRef, key) {
  const root = unref(rootRef)
  if (!root || typeof root.querySelector !== 'function' || !key) return
  const safe = String(key).replace(/"/g, '')
  const el = root.querySelector(`[data-nav-anchor="${safe}"]`)
  if (!el) return
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
}
