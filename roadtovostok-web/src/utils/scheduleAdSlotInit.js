/**
 * 与 index.html 中第三方广告脚本一致：在 window load 之后再延迟 2s 执行，
 * 减少与首屏渲染、Vue hydration 争用主线程（TBT）。
 */
export function scheduleAdSlotInit(fn) {
  const run = () => {
    try {
      fn()
    } catch {
      /* 广告位容错 */
    }
  }
  const schedule = () => setTimeout(run, 2000)
  if (document.readyState === 'complete') schedule()
  else window.addEventListener('load', schedule, { once: true })
}
