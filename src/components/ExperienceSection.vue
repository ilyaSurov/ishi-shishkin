<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { profile } from '../data/profile'

const timeline = ref(null)
const cards = ref([])

onMounted(() => {
  if (!timeline.value) return
  const items = timeline.value.querySelectorAll('.exp-card')
  cards.value = items
  gsap.from(items, {
    opacity: 0,
    x: -40,
    duration: 0.6,
    stagger: 0.2,
    delay: 0.2,
    ease: 'power2.out',
  })
})
</script>

<template>
  <div class="experience-section flex h-full w-full items-center justify-center px-4 py-8">
    <div ref="timeline" class="relative max-w-2xl">
      <h2 class="mb-10 text-center font-bold text-white">
        Опыт
      </h2>
      <div class="relative">
        <!-- Vertical line -->
        <div
          class="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent sm:left-1/2 sm:-translate-x-px"
          aria-hidden="true"
        />
        <div class="space-y-8">
          <div
            v-for="(exp, i) in profile.experience"
            :key="exp.title"
            class="exp-card relative flex items-start gap-6"
            :class="i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'"
          >
            <div
              class="absolute left-6 h-3 w-3 shrink-0 rounded-full border-2 border-primary bg-slate-900 sm:left-1/2 sm:-translate-x-[5px]"
              :class="i % 2 === 0 ? 'sm:translate-x-[-5px]' : 'sm:translate-x-[-5px]'"
            />
            <div
              class="glass-card ml-12 flex-1 rounded-xl p-5 sm:ml-0 sm:max-w-[calc(50%-2rem)]"
              :class="i % 2 === 0 ? 'sm:mr-auto sm:pr-12' : 'sm:ml-auto sm:pl-12'"
            >
              <h3 class="font-semibold text-white">
                {{ exp.title }}
              </h3>
              <p class="mt-1 font-mono text-sm text-primary">
                {{ exp.duration }}
              </p>
              <p class="mt-2 text-sm text-slate-400">
                {{ exp.team }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
