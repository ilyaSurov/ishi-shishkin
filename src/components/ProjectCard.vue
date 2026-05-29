<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import gsap from 'gsap'
import { useLocale } from '../composables/useLocale'
import ProjectStageBadge from './ProjectStageBadge.vue'

const { t } = useLocale()

const props = defineProps({
  project: { type: Object, required: true },
  index: { type: Number, default: 0 },
})

const emit = defineEmits(['open'])

const coverError = ref(false)

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

watch(
  () => props.project.id,
  () => {
    coverError.value = false
  },
)

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
    class="project-card glass-card group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-theme-subtle transition-shadow hover:border-primary/20 hover:shadow-xl hover:shadow-[var(--color-shadow)]"
    style="will-change: transform"
    role="button"
    tabindex="0"
    :aria-label="`${t('projectCard.ariaLabel')}: ${project.title}`"
    @mouseleave="onLeave"
    @click="openModal"
    @keydown.enter="openModal"
    @keydown.space.prevent="openModal"
  >
    <div
      class="project-card__media relative flex h-44 w-full shrink-0 items-center justify-center overflow-hidden sm:h-48"
      :style="{ background: project.previewColor }"
    >
      <img
        v-if="project.coverUrl && !coverError"
        :src="project.coverUrl"
        :alt="project.title"
        class="max-h-full max-w-full object-contain p-2 transition duration-500 group-hover:scale-[1.02]"
        loading="lazy"
        @error="coverError = true"
      />
      <div
        v-else
        class="h-full w-full"
        :style="{ background: project.previewColor }"
      />
      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
      <div class="absolute left-3 top-3">
        <ProjectStageBadge :stage="project.stage" />
      </div>
    </div>

    <div class="relative flex flex-1 flex-col p-5 sm:p-6">
      <p class="mb-1 text-xs font-medium uppercase tracking-wide text-primary">
        {{ project.tagline }}
      </p>
      <h3 class="mb-2 text-lg font-semibold leading-snug text-theme">
        {{ project.title }}
      </h3>
      <p class="relative mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-theme-secondary">
        {{ project.description }}
      </p>
      <div class="relative flex flex-wrap gap-1.5">
        <span
          v-for="tech in project.tech.slice(0, 4)"
          :key="tech"
          class="bg-theme-tag text-theme-tag rounded-lg px-2 py-1 font-mono text-[11px] sm:text-xs"
        >
          {{ tech }}
        </span>
        <span
          v-if="project.tech.length > 4"
          class="rounded-lg px-2 py-1 text-[11px] text-theme-muted sm:text-xs"
        >
          +{{ project.tech.length - 4 }}
        </span>
      </div>
      <p class="relative mt-4 text-xs font-medium text-primary opacity-80 transition group-hover:opacity-100">
        {{ t('projectCard.hint') }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
