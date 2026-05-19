<template>
  <!--
  GPT 整站已注释。恢复时取消注释块，删除下方占位 div。

  <div ref="hostRef">
    <div
      :id="domId"
      ref="slotEl"
      style="min-width: 300px; min-height: 250px"
    />
  </div>
  -->
  <div data-gpt-disabled style="display: none" aria-hidden="true" />
</template>

<script setup>
/*
import { nextTick, onMounted, ref } from 'vue'

const props = defineProps({
  domId: { type: String, required: true },
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
*/

defineProps({
  domId: { type: String, required: true },
  unitPath: { type: String, required: true },
})
</script>
