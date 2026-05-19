<template>
  <!--
  GPT 整站已注释。恢复步骤：
  1) 取消本 template 内注释，删除下方 <span data-gpt-disabled> 占位
  2) 恢复 script 内 import + computed（取消块注释）
  3) 同步启用 index.html、gptSlots.js、GptBannerSlot.vue 中被注释的 GPT 逻辑

  <div
    class="ad-wrap"
    style="
      width: 100%;
      margin: 0 auto;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    "
  >
    <GptBannerSlot v-if="banner" :dom-id="banner.domId" :unit-path="banner.unitPath" />
  </div>
  -->
  <span data-gpt-disabled style="display: none" aria-hidden="true" />
</template>

<script setup>
/*
import { computed } from 'vue'
import GptBannerSlot from './GptBannerSlot.vue'
import { GPT_BANNERS } from '../constants/gptSlots.js'

const props = defineProps({
  placementIndex: { type: Number, required: true },
})

const banner = computed(() =>
  props.placementIndex >= 0 && props.placementIndex < GPT_BANNERS.length
    ? GPT_BANNERS[props.placementIndex]
    : null,
)
*/

defineProps({
  /** 0–2 对应 banner_1〜3；≥3 仅保留占位，避免重复使用同一 DOM id */
  placementIndex: { type: Number, required: true },
})
</script>
