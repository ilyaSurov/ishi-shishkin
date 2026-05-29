<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { useLocale } from '../composables/useLocale'

const { profile, t } = useLocale()
const timeline = ref(null)

onMounted(() => {
  if (!timeline.value) return
  const items = timeline.value.querySelectorAll('.exp-card')
  gsap.from(items, {
    opacity: 0,
    x: -40,
    duration: 0.6,
    stagger: 0.15,
    delay: 0.2,
    ease: 'power2.out',
  })
})
</script>

<template>
  <div class="experience-section flex h-full min-h-0 w-full items-stretch justify-center px-4 py-2">
    <div class="flex min-h-0 w-full max-w-3xl flex-1 flex-col">
      <header class="mb-4 shrink-0 text-center">
        <h2 class="font-bold text-theme">
          {{ t('sections.experience') }}
        </h2>
        <p class="mt-1 font-mono text-sm text-primary">
          {{ profile.experienceTotal }}
        </p>
      </header>

      <div
        ref="timeline"
        class="theme-scroll experience-scroll min-h-0 flex-1 overflow-y-auto overflow-x-hidden pr-1"
      >
        <div class="relative space-y-6 pb-2">
          <div
            class="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent"
            aria-hidden="true"
          />

          <article
            v-for="exp in profile.experience"
            :key="`${exp.company}-${exp.period}`"
            class="exp-card relative pl-8"
          >
            <div
              class="timeline-dot absolute left-0 top-5 h-3 w-3 rounded-full border-2 border-primary"
              aria-hidden="true"
            />

            <div class="glass-card rounded-xl p-4 sm:p-5">
              <div class="flex flex-wrap items-start justify-between gap-2">
                <div class="min-w-0 flex-1">
                  <h3 class="font-semibold leading-snug text-theme">
                    {{ exp.title }}
                  </h3>
                  <p class="mt-1 text-sm text-theme-body">
                    {{ exp.company }}
                    <span class="text-theme-muted">· {{ exp.location }}</span>
                  </p>
                </div>
                <div class="shrink-0 text-right">
                  <p class="font-mono text-xs text-primary">
                    {{ exp.period }}
                  </p>
                  <p class="mt-0.5 text-xs text-theme-muted">
                    {{ exp.duration }}
                  </p>
                </div>
              </div>

              <ul class="mt-4 space-y-2 border-t border-theme-subtle pt-4">
                <li
                  v-for="(item, idx) in exp.highlights"
                  :key="idx"
                  class="flex gap-2 text-sm leading-relaxed text-theme-secondary"
                >
                  <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/80" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
