<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  project: { type: Object, required: true },
  index: { type: Number, default: 0 },
})

const emit = defineEmits(['open'])

function openModal() {
  emit('open')
}

const card = ref(null)
const x = ref(0)
const y = ref(0)
const tiltX = ref(0)
const tiltY = ref(0)
const strength = 0.15
const radius = 150
const tiltStrength = 8

function onMove(e) {
  if (!card.value) return
  const rect = card.value.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  const dx = e.clientX - centerX
  const dy = e.clientY - centerY
  const dist = Math.sqrt(dx * dx + dy * dy)
  if (dist < radius) {
    const force = (radius - dist) / radius
    x.value = dx * strength * force
    y.value = dy * strength * force
    tiltX.value = (dy / radius) * tiltStrength * force
    tiltY.value = -(dx / radius) * tiltStrength * force
  } else {
    x.value = 0
    y.value = 0
    tiltX.value = 0
    tiltY.value = 0
  }
}

function onLeave() {
  x.value = 0
  y.value = 0
  tiltX.value = 0
  tiltY.value = 0
}

watch([x, y, tiltX, tiltY], () => {
  if (!card.value) return
  gsap.to(card.value, {
    x: x.value,
    y: y.value,
    rotationX: tiltX.value,
    rotationY: tiltY.value,
    transformPerspective: 800,
    duration: 0.35,
    ease: 'power2.out',
  })
})

onMounted(() => {
  window.addEventListener('mousemove', onMove)
  card.value?.addEventListener('mouseleave', onLeave)
  gsap.from(card.value, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    delay: props.index * 0.1,
    ease: 'power2.out',
  })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMove)
})
</script>

<template>
  <div
    ref="card"
    class="project-card glass-card group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl transition-shadow hover:shadow-xl hover:shadow-primary/10"
    style="will-change: transform"
    role="button"
    tabindex="0"
    aria-label="Подробнее о проекте: {{ project.title }}"
    @mouseleave="onLeave"
    @click="openModal"
    @keydown.enter="openModal"
    @keydown.space.prevent="openModal"
  >
    <!-- Плейсхолдер вместо скриншота -->
    <div
      class="h-36 w-full shrink-0 rounded-t-2xl transition-all duration-300 group-hover:opacity-90 sm:h-40"
      :style="{ background: project.previewColor || 'linear-gradient(135deg, #334155 0%, #475569 100%)' }"
    />
    <div class="relative flex flex-1 flex-col p-6">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 transition-opacity group-hover:opacity-100" />
      <h3 class="relative mb-2 font-semibold text-white">
        {{ project.title }}
      </h3>
      <p class="relative mb-4 flex-1 text-sm leading-relaxed text-slate-400">
        {{ project.description }}
      </p>
      <div class="relative flex flex-wrap gap-2">
      <span
        v-for="t in project.tech"
        :key="t"
        class="rounded-lg bg-slate-700/60 px-2 py-1 font-mono text-xs text-slate-300"
      >
        {{ t }}
      </span>
    </div>
      <p class="relative mt-4 text-xs font-medium text-primary">
        Нажмите для подробностей и ссылок →
      </p>
    </div>
  </div>
</template>
