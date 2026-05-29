<script setup>
import { ref, watch } from 'vue'
import { useLocale } from '../composables/useLocale'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'

const { projects, t, locale } = useLocale()
const selectedProject = ref(null)

watch(locale, () => {
  selectedProject.value = null
})
</script>

<template>
  <div class="projects-section flex h-full min-h-0 w-full flex-col px-4 pb-1 sm:px-6">
    <div class="mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col">
      <header class="mb-4 shrink-0 text-center sm:mb-5">
        <h2 class="font-bold text-theme">
          {{ t('sections.projects') }}
        </h2>
      </header>

      <div class="theme-scroll projects-scroll min-h-0 flex-1 overflow-y-auto overflow-x-hidden pr-1">
        <div class="grid gap-5 pb-2 sm:grid-cols-2 sm:gap-6">
          <ProjectCard
            v-for="(project, i) in projects"
            :key="project.id"
            :project="project"
            :index="i"
            @open="selectedProject = project"
          />
        </div>
      </div>
    </div>

    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      @close="selectedProject = null"
    />
  </div>
</template>

<style scoped>
.projects-scroll {
  scrollbar-width: thin;
  scrollbar-color: var(--color-scrollbar) transparent;
}

.projects-scroll::-webkit-scrollbar {
  width: 4px;
}

.projects-scroll::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: var(--color-scrollbar);
}
</style>
