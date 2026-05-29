<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import gsap from 'gsap'
import { useLocale } from '../composables/useLocale'
import { getViewportHeight } from '../composables/useViewport'
import MagneticButton from './MagneticButton.vue'

const { profile, t, locale } = useLocale()

const baseUrl = import.meta.env.BASE_URL
const avatarSrc = computed(() => (baseUrl ? `${baseUrl}avatar.png` : '/avatar.png'))
const avatarError = ref(false)
function onAvatarError() {
  avatarError.value = true
}

function scrollToContact() {
  const contactPanelIndex = 4
  const scrollTop = contactPanelIndex * getViewportHeight()
  window.scrollTo({ top: scrollTop, behavior: 'smooth' })
}

const currentText = ref('')
const typedRole = ref('')
const cursorVisible = ref(true)
const typingTimers = []

function clearTypingTimers() {
  typingTimers.forEach(clearTimeout)
  typingTimers.length = 0
}

function typeWriter(text, targetRef, speed = 80, onComplete) {
  let i = 0
  targetRef.value = ''
  function step() {
    if (i < text.length) {
      targetRef.value = text.substring(0, i + 1)
      i++
      typingTimers.push(setTimeout(step, speed))
    } else if (onComplete) {
      onComplete()
    }
  }
  step()
}

function startHeroTyping() {
  clearTypingTimers()
  currentText.value = ''
  typedRole.value = ''
  typeWriter(profile.value.name, currentText, 100, () => {
    typingTimers.push(setTimeout(() => {
      typeWriter(profile.value.role, typedRole, 60)
    }, 400))
  })
}

watch(locale, startHeroTyping)

onMounted(() => {
  gsap.from('.hero-content', { opacity: 0, y: 40, duration: 0.8, delay: 0.2, ease: 'power2.out' })
  startHeroTyping()
  setInterval(() => {
    cursorVisible.value = !cursorVisible.value
  }, 500)
})
</script>

<template>
  <div class="hero-content flex h-full w-full flex-col items-center justify-center gap-6 px-6 text-center">
    <img
      v-if="avatarSrc && !avatarError"
      :src="avatarSrc"
      :alt="t('hero.photoAlt')"
      class="ring-theme h-28 w-28 shrink-0 rounded-full border-2 border-primary/40 object-cover shadow-xl ring-2 sm:h-36 sm:w-36"
      @error="onAvatarError"
    />
    <p class="font-mono text-sm uppercase tracking-widest text-primary">
      {{ profile.location }}
    </p>
    <h1 class="font-bold leading-tight text-theme">
      {{ currentText }}<span v-show="cursorVisible" class="typing-cursor">|</span>
    </h1>
    <p class="max-w-xl font-mono text-lg text-theme-secondary">
      {{ typedRole }}
    </p>
    <p class="max-w-2xl text-theme-secondary">
      {{ profile.hero }}
    </p>
    <div class="mt-4 flex gap-4">
      <MagneticButton>
        <button
          type="button"
          class="glass rounded-xl px-6 py-3 font-medium text-theme transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[var(--color-ring-offset)]"
          @click="scrollToContact"
        >
          {{ t('hero.contact') }}
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
