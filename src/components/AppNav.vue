<script setup>
import { computed } from 'vue'
import { useLocale } from '../composables/useLocale'
import { usePanelNavigation } from '../composables/usePanelNavigation'

defineProps({ total: { type: Number, default: 5 } })

const { t } = useLocale()
const { currentPanel, goToPanel } = usePanelNavigation()

const labels = computed(() => t('nav.labels'))
</script>

<template>
  <nav
    class="nav-bottom fixed bottom-0 left-0 right-0 z-50 flex justify-center px-2 pb-safe sm:px-3"
    :aria-label="t('nav.ariaLabel')"
  >
    <div class="glass nav-bar w-full max-w-full rounded-2xl shadow-lg sm:max-w-2xl lg:max-w-3xl">
      <div class="nav-bar-scroll overflow-x-auto overscroll-x-contain px-1.5 py-1.5 sm:px-2 sm:py-2">
        <div class="flex w-max min-w-full justify-center gap-0.5 sm:gap-1">
          <button
            v-for="(label, i) in labels"
            :key="`${label}-${i}`"
            type="button"
            class="nav-pill shrink-0 rounded-lg px-2 py-1.5 text-[11px] font-medium leading-tight transition-all duration-200 sm:rounded-xl sm:px-3 sm:py-2 sm:text-sm md:px-4"
            :class="currentPanel === i
              ? 'bg-primary/90 text-white shadow-md shadow-primary/30'
              : 'text-theme-secondary hover-theme hover:text-theme-emphasis'"
            :aria-current="currentPanel === i ? 'true' : undefined"
            :aria-label="`${t('nav.goTo')}: ${label}`"
            @click="goToPanel(i)"
          >
            {{ label }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-pill {
  cursor: pointer;
  white-space: nowrap;
}

.nav-bar-scroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
}

.nav-bar-scroll::-webkit-scrollbar {
  display: none;
}

.pb-safe {
  padding-bottom: max(0.5rem, env(safe-area-inset-bottom));
}
</style>
