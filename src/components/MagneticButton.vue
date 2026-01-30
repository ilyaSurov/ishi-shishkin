<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const el = ref(null)
const x = ref(0)
const y = ref(0)
const strength = 0.25
const radius = 120

function onMove(e) {
  if (!el.value) return
  const rect = el.value.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  const dx = e.clientX - centerX
  const dy = e.clientY - centerY
  const dist = Math.sqrt(dx * dx + dy * dy)
  if (dist < radius) {
    const force = (radius - dist) / radius
    x.value = dx * strength * force
    y.value = dy * strength * force
  } else {
    x.value = 0
    y.value = 0
  }
}

function onLeave() {
  x.value = 0
  y.value = 0
}

watch([x, y], ([newX, newY]) => {
  if (el.value) gsap.to(el.value, { x: newX, y: newY, duration: 0.3, ease: 'power2.out' })
})

onMounted(() => {
  window.addEventListener('mousemove', onMove)
  el.value?.addEventListener('mouseleave', onLeave)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMove)
  el.value?.removeEventListener('mouseleave', onLeave)
})
</script>

<template>
  <div
    ref="el"
    class="magnetic-button inline-block cursor-pointer select-none"
    @mouseleave="onLeave"
  >
    <slot />
  </div>
</template>
