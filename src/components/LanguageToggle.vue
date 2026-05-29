<script setup>
import { useLocale } from '../composables/useLocale'

const { locale, setLocale, t } = useLocale()

function select(next) {
  if (locale.value !== next) setLocale(next)
}
</script>

<template>
  <div
    class="language-switch glass fixed z-50 rounded-xl p-1"
    style="top: max(1rem, env(safe-area-inset-top)); right: max(1rem, env(safe-area-inset-right));"
    role="group"
    :aria-label="t('language.ariaLabel')"
  >
    <div class="relative grid grid-cols-2 gap-0">
      <span
        class="locale-slider pointer-events-none absolute inset-y-0 w-1/2 rounded-lg bg-primary/90 shadow-md shadow-primary/25 transition-transform duration-300 ease-out"
        :class="locale === 'en' ? 'translate-x-full' : 'translate-x-0'"
        aria-hidden="true"
      />

      <button
        type="button"
        class="locale-option relative z-10 min-w-[2.5rem] rounded-lg px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wide transition-colors duration-200 sm:min-w-[3.25rem] sm:px-3.5 sm:py-2 sm:text-sm"
        :class="locale === 'ru' ? 'text-white' : 'text-theme-secondary hover:text-theme'"
        :aria-pressed="locale === 'ru'"
        @click="select('ru')"
      >
        RU
      </button>

      <button
        type="button"
        class="locale-option relative z-10 min-w-[2.5rem] rounded-lg px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wide transition-colors duration-200 sm:min-w-[3.25rem] sm:px-3.5 sm:py-2 sm:text-sm"
        :class="locale === 'en' ? 'text-white' : 'text-theme-secondary hover:text-theme'"
        :aria-pressed="locale === 'en'"
        @click="select('en')"
      >
        EN
      </button>
    </div>
  </div>
</template>

<style scoped>
.locale-option {
  cursor: pointer;
}
</style>
