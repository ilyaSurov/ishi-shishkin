<script setup>
import { ref, watch } from 'vue'
import { useLocale } from '../composables/useLocale'

const props = defineProps({
  urls: { type: Array, default: () => [] },
  title: { type: String, default: '' },
})

const { t } = useLocale()
const activeIndex = ref(0)

watch(
  () => props.urls,
  () => {
    activeIndex.value = 0
  },
)

function prev() {
  if (!props.urls.length) return
  activeIndex.value = (activeIndex.value - 1 + props.urls.length) % props.urls.length
}

function next() {
  if (!props.urls.length) return
  activeIndex.value = (activeIndex.value + 1) % props.urls.length
}
</script>

<template>
  <div v-if="urls.length" class="project-gallery" data-no-panel-swipe>
    <div class="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-theme-subtle bg-theme-tag/30">
      <img
        :src="urls[activeIndex]"
        :alt="`${title} — ${activeIndex + 1}`"
        class="max-h-full max-w-full object-contain p-1"
        loading="lazy"
      />
      <template v-if="urls.length > 1">
        <button
          type="button"
          class="hover-theme absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-theme shadow-lg backdrop-blur-sm"
          style="background: var(--glass)"
          :aria-label="t('projectModal.galleryPrev')"
          @click="prev"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          class="hover-theme absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-theme shadow-lg backdrop-blur-sm"
          style="background: var(--glass)"
          :aria-label="t('projectModal.galleryNext')"
          @click="next"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div class="absolute bottom-2 right-2 rounded-full px-2 py-0.5 text-xs font-mono text-white/90" style="background: rgba(0,0,0,0.45)">
          {{ activeIndex + 1 }} / {{ urls.length }}
        </div>
      </template>
    </div>

    <div
      v-if="urls.length > 1"
      class="mt-2 flex gap-2 overflow-x-auto pb-1"
    >
      <button
        v-for="(url, i) in urls"
        :key="url"
        type="button"
        class="h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition"
        :class="i === activeIndex ? 'border-primary' : 'border-transparent opacity-70 hover:opacity-100'"
        @click="activeIndex = i"
      >
        <img :src="url" :alt="`${title} thumb ${i + 1}`" class="h-full w-full object-contain bg-theme-tag/40 p-0.5" loading="lazy" />
      </button>
    </div>
  </div>
</template>
