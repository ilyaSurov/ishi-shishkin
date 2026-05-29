<script setup>
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'
import { useLocale } from '../composables/useLocale'

const section = ref(null)
const { profile, t } = useLocale()

const skillGroups = computed(() => [
  profile.value.skills.frontend,
  profile.value.skills.backend,
  profile.value.skills.product,
  profile.value.skills.ai,
  profile.value.skills.tools,
])

const primaryGroups = computed(() => skillGroups.value.slice(0, 4))
const toolsGroup = computed(() => skillGroups.value[4])

onMounted(() => {
  if (!section.value) return
  const cards = section.value.querySelectorAll('.skill-card')
  gsap.from(cards, {
    opacity: 0,
    y: 28,
    duration: 0.55,
    stagger: 0.09,
    delay: 0.12,
    ease: 'power2.out',
  })
})
</script>

<template>
  <div
    ref="section"
    class="skills-section flex h-full min-h-0 w-full items-stretch justify-center px-4 py-2 sm:px-6"
  >
    <div class="flex min-h-0 w-full max-w-6xl flex-1 flex-col">
      <header class="mb-5 shrink-0 text-center sm:mb-6">
        <h2 class="font-bold text-theme">
          {{ t('sections.skills') }}
        </h2>
        <p class="mx-auto mt-2 max-w-2xl text-theme-secondary">
          {{ t('sections.skillsSubtitle') }}
        </p>
      </header>

      <div class="theme-scroll min-h-0 flex-1 overflow-y-auto overflow-x-hidden pr-1">
        <div class="grid gap-4 pb-2 md:grid-cols-2 md:gap-5 lg:gap-6">
          <article
            v-for="group in primaryGroups"
            :key="group.title"
            class="skill-card glass-card group rounded-2xl border border-theme-subtle p-5 transition-colors hover:border-primary/25 sm:p-6"
          >
            <div class="mb-4 flex items-start gap-3">
              <span
                class="mt-1 h-10 w-1 shrink-0 rounded-full bg-gradient-to-b from-primary to-accent"
                aria-hidden="true"
              />
              <div class="min-w-0">
                <h3 class="text-base font-semibold leading-snug text-theme sm:text-lg">
                  {{ group.title }}
                </h3>
                <p class="mt-1.5 text-sm leading-relaxed text-theme-secondary">
                  {{ group.subtitle }}
                </p>
              </div>
            </div>

            <ul class="flex flex-wrap gap-2">
              <li
                v-for="item in group.items"
                :key="item"
                class="bg-theme-tag text-theme-tag rounded-xl px-3 py-2 text-sm leading-snug transition-colors group-hover:border-primary/10"
              >
                {{ item }}
              </li>
            </ul>
          </article>

          <article
            v-if="toolsGroup"
            class="skill-card glass-card group rounded-2xl border border-theme-subtle p-5 transition-colors hover:border-primary/25 md:col-span-2 sm:p-6"
          >
            <div class="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div class="flex items-start gap-3">
                <span
                  class="mt-1 h-10 w-1 shrink-0 rounded-full bg-gradient-to-b from-primary to-accent"
                  aria-hidden="true"
                />
                <div>
                  <h3 class="text-base font-semibold leading-snug text-theme sm:text-lg">
                    {{ toolsGroup.title }}
                  </h3>
                  <p class="mt-1.5 text-sm leading-relaxed text-theme-secondary">
                    {{ toolsGroup.subtitle }}
                  </p>
                </div>
              </div>
            </div>

            <ul class="flex flex-wrap gap-2 sm:gap-2.5">
              <li
                v-for="item in toolsGroup.items"
                :key="item"
                class="bg-theme-tag text-theme-tag rounded-xl px-3.5 py-2 text-sm leading-snug sm:text-[0.9375rem]"
              >
                {{ item }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills-section :deep(.theme-scroll) {
  scrollbar-width: thin;
  scrollbar-color: var(--color-scrollbar) transparent;
}
</style>
