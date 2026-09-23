import { onMounted } from 'vue'

const POPUNDER_SRC =
  'https://pl31457275.profitableratecpmnetwork.com/48/46/94/4846947fa579dad4684ec4a416032562.js'

/**
 * 每次完整文档加载仅初始化一次 Popunder。
 * 本地预览也加载真实脚本，便于核对广告平台的实际行为。
 */
export function useAffiliatePopunder() {
  onMounted(() => {
    if (document.querySelector('script[data-affiliate-popunder]')) return

    const script = document.createElement('script')
    script.src = POPUNDER_SRC
    script.dataset.affiliatePopunder = 'true'
    document.body.appendChild(script)
  })
}
