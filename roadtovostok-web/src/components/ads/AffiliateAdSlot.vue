<template>
  <aside
    class="affiliate-ad-slot"
    :class="[`affiliate-ad-slot--${kind}`, `affiliate-ad-slot--${placement}`]"
    aria-label="Advertisement"
  >
    <div class="affiliate-ad-slot__inner container">
      <iframe
        v-if="shouldLoadAds"
        class="affiliate-ad-slot__frame"
        :class="{ 'affiliate-ad-slot__frame--native': kind === 'native' }"
        :src="frameSrc"
        :title="frameTitle"
        :width="frameWidth"
        :height="frameHeight"
        loading="lazy"
        scrolling="no"
        sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
        referrerpolicy="strict-origin-when-cross-origin"
      />

      <!-- 仅在无浏览器环境中保留英文尺寸占位；本地浏览器也加载真实联盟广告。 -->
      <div
        v-else
        class="affiliate-ad-slot__preview"
        :style="{ minHeight: `${frameHeight}px` }"
        aria-hidden="true"
      >
        Ad preview · {{ previewSize }}
      </div>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  kind: {
    type: String,
    default: 'banner',
    validator: (value) => ['banner', 'native'].includes(value),
  },
  placement: {
    type: String,
    default: 'content',
  },
})

// 每次完整页面加载时只选择一个横幅尺寸；窗口缩放不会再次请求广告。
const isCompact =
  typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches

// 浏览器环境（包括 localhost）都加载真实广告，方便本地核对广告素材和尺寸。
const shouldLoadAds = typeof window !== 'undefined'
const publicBase = import.meta.env.BASE_URL || '/'

const frameSrc = computed(() => {
  if (props.kind === 'native') return `${publicBase}affiliate-ads/native.html`
  return `${publicBase}affiliate-ads/banner-${isCompact ? '320x50' : '728x90'}.html`
})

const frameWidth = computed(() => {
  if (props.kind === 'native') return 980
  return isCompact ? 320 : 728
})

const frameHeight = computed(() => {
  if (props.kind === 'native') return isCompact ? 360 : 300
  return isCompact ? 50 : 90
})

const frameTitle = computed(() =>
  props.kind === 'native' ? 'Native advertisement' : 'Banner advertisement',
)

const previewSize = computed(() => {
  if (props.kind === 'native') return `Native · ${frameHeight.value}px`
  return isCompact ? '320×50' : '728×90'
})
</script>

<style scoped>
.affiliate-ad-slot {
  width: 100%;
  margin-block: clamp(3.5rem, 7vw, 6rem);
  clear: both;
}

.affiliate-ad-slot--page-end {
  margin-top: clamp(4.5rem, 8vw, 7rem);
  margin-bottom: clamp(3.5rem, 6vw, 5rem);
}

.affiliate-ad-slot__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.affiliate-ad-slot__frame {
  display: block;
  max-width: 100%;
  border: 0;
  background: transparent;
}

.affiliate-ad-slot__frame--native {
  width: min(100%, 980px);
}

.affiliate-ad-slot__preview {
  display: grid;
  place-items: center;
  width: min(100%, 728px);
  border: 1px dashed color-mix(in srgb, var(--color-border) 82%, transparent);
  border-radius: 6px;
  color: color-mix(in srgb, var(--color-muted) 78%, transparent);
  background: color-mix(in srgb, var(--color-panel) 30%, transparent);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
}

.affiliate-ad-slot--native .affiliate-ad-slot__preview {
  width: min(100%, 980px);
}

@media (max-width: 767px) {
  .affiliate-ad-slot {
    margin-block: 3.5rem;
  }

  .affiliate-ad-slot--page-end {
    margin-top: 4rem;
    margin-bottom: 3rem;
  }

  .affiliate-ad-slot__inner {
    padding-inline: 0;
  }

  .affiliate-ad-slot__frame:not(.affiliate-ad-slot__frame--native),
  .affiliate-ad-slot__preview {
    width: min(320px, 100%);
  }
}
</style>
