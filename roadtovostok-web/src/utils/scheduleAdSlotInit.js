/**
 * 与 index.html 中第三方脚本一致：window load 后再延迟 3s（参考 windrose-web），
 * 减轻与首屏渲染、Vue hydration 争用主线程（TBT）。
 */
export function scheduleAdSlotInit(fn) {
  const run = () => {
    try {
      fn()
    } catch {
      /* 广告位容错 */
    }
  }
  const schedule = () => setTimeout(run, 3000)
  if (document.readyState === 'complete') schedule()
  else window.addEventListener('load', schedule, { once: true })
}
