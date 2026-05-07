<template>
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
    <!-- <template v-else>广告位</template> -->
  </div>
</template>

<script setup>
import { computed } from 'vue'
import GptBannerSlot from './GptBannerSlot.vue'
import { GPT_BANNERS } from '../constants/gptSlots.js'

const props = defineProps({
  /** 0–2 对应 banner_1〜3；≥3 仅保留占位，避免重复使用同一 DOM id */
  placementIndex: { type: Number, required: true },
})

const banner = computed(() =>
  props.placementIndex >= 0 && props.placementIndex < GPT_BANNERS.length
    ? GPT_BANNERS[props.placementIndex]
    : null,
)
</script>
