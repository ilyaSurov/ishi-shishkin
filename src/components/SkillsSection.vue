<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { profile } from '../data/profile'

const section = ref(null)
const skillGroups = [
  profile.skills.frontend,
  profile.skills.backend,
  profile.skills.mobile,
  profile.skills.tools,
]

onMounted(() => {
  if (!section.value) return
  const cards = section.value.querySelectorAll('.skill-card')
  gsap.from(cards, {
    opacity: 0,
    y: 24,
    duration: 0.5,
    stagger: 0.08,
    delay: 0.15,
    ease: 'power2.out',
  })
})
</script>

<template>
  <div
    ref="section"
    class="skills-section flex h-full w-full items-center justify-center px-4 py-10"
  >
    <div class="mx-auto w-full max-w-4xl">
      <h2 class="mb-2 text-center text-sm font-medium uppercase tracking-widest text-slate-500">
        Навыки
      </h2>
      <p class="mb-8 text-center text-slate-400">
        Стек и инструменты для enterprise-разработки
      </p>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="group in skillGroups"
          :key="group.title"
          class="skill-card glass-card flex flex-col rounded-xl border border-white/5 p-5 transition-colors hover:border-primary/20"
        >
          <h3 class="mb-1 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
            {{ group.title }}
          </h3>
          <p class="mb-4 text-xs leading-relaxed text-slate-500">
            {{ group.subtitle }}
          </p>
          <ul class="mt-auto space-y-2">
            <li
              v-for="item in group.items"
              :key="item"
              class="flex items-center gap-2 text-sm text-slate-300"
            >
              <span class="h-1 w-1 shrink-0 rounded-full bg-primary/60" />
              <span class="text-slate-200">{{ item }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </div>
</template>

