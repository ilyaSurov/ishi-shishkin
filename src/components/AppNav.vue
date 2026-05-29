<script setup>
import { computed } from 'vue'
import { useLocale } from '../composables/useLocale'
import { usePanelNavigation } from '../composables/usePanelNavigation'

defineProps({ total: { type: Number, default: 5 } })

const { t } = useLocale()
const { currentPanel, goToPanel } = usePanelNavigation()

const labels = computed(() => t('nav.labels'))
const firstRow = computed(() => labels.value.slice(0, 3))
const secondRow = computed(() => labels.value.slice(3))
</script>

<template>
  <nav
    class="nav-bottom fixed bottom-0 left-0 right-0 z-50 flex justify-center px-2 sm:px-3"
    :aria-label="t('nav.ariaLabel')"
  >
    <!-- Mobile: две строки, крупные кнопки -->
    <div class="glass nav-bar nav-bar--mobile w-full max-w-md rounded-2xl shadow-lg md:hidden">
      <div class="nav-grid flex flex-col items-center gap-2 px-2 py-2.5">
        <div class="flex w-full max-w-sm justify-center gap-2">
          <button
            v-for="(label, i) in firstRow"
            :key="`m-${label}-${i}`"
            type="button"
            class="nav-pill nav-pill--mobile flex-1 rounded-xl px-2 py-3 text-sm font-medium leading-tight transition-all duration-200"
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
        <div class="flex w-full max-w-[13.5rem] justify-center gap-2">
          <button
            v-for="(label, i) in secondRow"
            :key="`m2-${label}-${i + 3}`"
            type="button"
            class="nav-pill nav-pill--mobile flex-1 rounded-xl px-3 py-3 text-sm font-medium leading-tight transition-all duration-200"
            :class="currentPanel === i + 3
              ? 'bg-primary/90 text-white shadow-md shadow-primary/30'
              : 'text-theme-secondary hover-theme hover:text-theme-emphasis'"
            :aria-current="currentPanel === i + 3 ? 'true' : undefined"
            :aria-label="`${t('nav.goTo')}: ${label}`"
            @click="goToPanel(i + 3)"
          >
            {{ label }}
          </button>
        </div>
      </div>
    </div>

    <!-- Планшет и desktop: одна строка -->
    <div class="glass nav-bar hidden w-full max-w-full rounded-2xl shadow-lg md:block md:max-w-2xl lg:max-w-3xl">
      <div class="nav-bar-scroll overflow-x-auto overscroll-x-contain px-2 py-2 sm:px-3">
        <div class="flex w-max min-w-full justify-center gap-1 sm:gap-2">
          <button
            v-for="(label, i) in labels"
            :key="`${label}-${i}`"
            type="button"
            class="nav-pill shrink-0 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 md:px-4"
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
.nav-bottom {
  padding-bottom: calc(0.375rem + env(safe-area-inset-bottom, 0px) + var(--browser-chrome-bottom, 0px));
}

.nav-pill {
  cursor: pointer;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
}

.nav-pill--mobile {
  min-height: 3rem;
  touch-action: manipulation;
}

.nav-bar-scroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
}

.nav-bar-scroll::-webkit-scrollbar {
  display: none;
}
</style>
