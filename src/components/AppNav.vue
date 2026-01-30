<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({ total: { type: Number, default: 5 } })
const current = ref(0)

const labels = ['Главная', 'Проекты', 'Навыки', 'Опыт', 'Контакты']

// Один экран прокрутки = одна панель: totalHeight = (total - 1) * innerHeight, позиция панели i = i * innerHeight
const panelHeight = () => window.innerHeight
const totalScrollHeight = () => (props.total - 1) * panelHeight()

function goTo(index) {
  const scrollTop = index * panelHeight()
  current.value = index
  window.scrollTo({ top: scrollTop, behavior: 'auto' })
}

function updateCurrent() {
  const total = totalScrollHeight()
  if (total <= 0) return
  const progress = window.scrollY / total
  const index = Math.round(progress * (props.total - 1))
  current.value = Math.min(props.total - 1, Math.max(0, index))
}

onMounted(() => {
  updateCurrent()
  window.addEventListener('scroll', updateCurrent, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateCurrent)
})
</script>

<template>
  <nav
    class="nav-bottom fixed bottom-0 left-0 right-0 z-50 flex justify-center p-3 pb-safe"
    aria-label="Навигация по секциям"
  >
    <div class="glass flex gap-1 rounded-2xl px-2 py-2 shadow-lg sm:gap-2 sm:px-3 sm:py-2">
      <button
        v-for="(label, i) in labels"
        :key="i"
        type="button"
        class="nav-pill rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 sm:px-4"
        :class="current === i
          ? 'bg-primary/90 text-white shadow-md shadow-primary/30 scale-105'
          : 'text-slate-400 hover:bg-white/10 hover:text-slate-200'"
        :aria-current="current === i ? 'true' : undefined"
        :aria-label="`Перейти: ${label}`"
        @click="goTo(i)"
      >
        {{ label }}
      </button>
    </div>
  </nav>
</template>

<style scoped>
.nav-pill {
  cursor: pointer;
  white-space: nowrap;
}
.pb-safe {
  padding-bottom: max(0.75rem, env(safe-area-inset-bottom));
}
</style>
