<script setup>
import { ref } from 'vue'
import { projects } from '../data/profile'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'

const selectedProject = ref(null)
</script>

<template>
  <div class="projects-section flex h-full w-full items-center justify-center px-4 py-8">
    <div class="mx-auto max-w-6xl">
      <h2 class="mb-10 text-center font-bold text-white">
        Проекты
      </h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="(project, i) in projects"
          :key="project.title"
          :project="project"
          :index="i"
          @open="selectedProject = project"
        />
      </div>
    </div>
    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      @close="selectedProject = null"
    />
  </div>
</template>
