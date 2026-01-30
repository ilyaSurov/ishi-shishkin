<script setup>
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'
import { profile } from '../data/profile'
import MagneticButton from './MagneticButton.vue'

const baseUrl = import.meta.env.BASE_URL
const avatarSrc = computed(() => (baseUrl ? `${baseUrl}avatar.png` : '/avatar.png'))
const avatarError = ref(false)
function onAvatarError() {
  avatarError.value = true
}

// Прокрутка к разделу «Контакты» (последняя панель, индекс 4)
function scrollToContact() {
  const contactPanelIndex = 4
  const scrollTop = contactPanelIndex * window.innerHeight
  window.scrollTo({ top: scrollTop, behavior: 'smooth' })
}

const currentText = ref('')
const typedRole = ref('')
const cursorVisible = ref(true)
let roleTimeout

function typeWriter(text, targetRef, speed = 80, onComplete) {
  let i = 0
  targetRef.value = ''
  function step() {
    if (i < text.length) {
      targetRef.value = text.substring(0, i + 1)
      i++
      setTimeout(step, speed)
    } else if (onComplete) {
      onComplete()
    }
  }
  step()
}

onMounted(() => {
  gsap.from('.hero-content', { opacity: 0, y: 40, duration: 0.8, delay: 0.2, ease: 'power2.out' })
  typeWriter(profile.name, currentText, 100, () => {
    roleTimeout = setTimeout(() => {
      typeWriter(profile.role, typedRole, 60)
    }, 400)
  })
  setInterval(() => {
    cursorVisible.value = !cursorVisible.value
  }, 500)
})
</script>

<template>
  <div class="hero-content flex flex-col items-center justify-center gap-6 px-6 text-center">
    <!-- Фото: положите avatar.png в папку public/ -->
    <img
      v-if="avatarSrc && !avatarError"
      :src="avatarSrc"
      alt="Фото"
      class="h-28 w-28 shrink-0 rounded-full border-2 border-primary/40 object-cover shadow-xl ring-2 ring-white/10 sm:h-36 sm:w-36"
      @error="onAvatarError"
    />
    <p class="font-mono text-sm uppercase tracking-widest text-primary">
      {{ profile.location }}
    </p>
    <h1 class="font-bold leading-tight text-white">
      {{ currentText }}<span v-show="cursorVisible" class="typing-cursor">|</span>
    </h1>
    <p class="max-w-xl font-mono text-lg text-slate-400">
      {{ typedRole }}
    </p>
    <p class="max-w-2xl text-slate-400">
      {{ profile.hero }}
    </p>
    <div class="mt-4 flex gap-4">
      <MagneticButton>
        <button
          type="button"
          class="glass rounded-xl px-6 py-3 font-medium text-white transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900"
          @click="scrollToContact"
        >
          Связаться
        </button>
      </MagneticButton>
    </div>
  </div>
</template>

<style scoped>
.typing-cursor {
  animation: blink 0.7s step-end infinite;
  color: var(--accent);
}
@keyframes blink {
  50% { opacity: 0; }
}
</style>
