<template>
  <div ref="hostRef">
    <div
      :id="domId"
      ref="slotEl"
      style="min-width: 300px; min-height: 250px"
    />
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'

const props = defineProps({
  domId: { type: String, required: true },
  /** 与 GAM 单元路径一致，挂载后在 DOM 中插入注释便于核对后台 */
  unitPath: { type: String, required: true },
})

const hostRef = ref(null)
const slotEl = ref(null)

function injectDisplay() {
  const slot = slotEl.value
  if (!slot || slot.getAttribute('data-gpt-inline-display') === '1') return

  const host = hostRef.value
  if (host && host.dataset.gptUnitComment !== props.unitPath) {
    host.insertBefore(document.createComment(` ${props.unitPath} `), slot)
    host.dataset.gptUnitComment = props.unitPath
  }

  const s = document.createElement('script')
  s.textContent = `googletag.cmd.push(function() { googletag.display(${JSON.stringify(props.domId)}); });`
  slot.appendChild(s)
  slot.setAttribute('data-gpt-inline-display', '1')
}

onMounted(() => {
  nextTick(() => injectDisplay())
})
</script>
