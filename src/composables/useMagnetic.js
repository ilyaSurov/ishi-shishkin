import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'

/**
 * Magnetic effect: element follows cursor within bounds
 * @param {Object} options - { strength: number, radius: number }
 */
export function useMagnetic(options = {}) {
  const el = ref(null)
  const x = ref(0)
  const y = ref(0)
  const strength = options.strength ?? 0.3
  const radius = options.radius ?? 80

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

  onMounted(() => {
    if (!el.value) return
    gsap.set(el.value, { x: 0, y: 0 })
    window.addEventListener('mousemove', onMove)
    el.value?.addEventListener('mouseleave', onLeave)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMove)
    el.value?.removeEventListener('mouseleave', onLeave)
  })

  return { el, x, y }
}

/**
 * Apply magnetic transform via GSAP (call in watch or onMounted with el)
 */
export function applyMagneticTransform(element, x, y) {
  if (!element) return
  gsap.to(element, { x, y, duration: 0.3, ease: 'power2.out' })
}
