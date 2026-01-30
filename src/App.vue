<script setup>
import AppNav from './components/AppNav.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'
import { useHorizontalScroll } from './composables/useHorizontalScroll'

const PANEL_COUNT = 5
const { wrapper, scrollContent } = useHorizontalScroll(PANEL_COUNT)
</script>

<template>
  <div class="overflow-x-hidden bg-slate-900">
    <!-- Driver: vertical scroll area (height set by useHorizontalScroll) -->
    <div ref="scrollContent" class="w-full" aria-hidden="true" />

    <!-- Pinned viewport -->
    <div class="pin-viewport">
      <div ref="wrapper" class="horizontal-scroll-wrapper">
        <section class="section-panel" data-panel="0">
          <HeroSection />
        </section>
        <section class="section-panel" data-panel="1">
          <ProjectsSection />
        </section>
        <section class="section-panel" data-panel="2">
          <SkillsSection />
        </section>
        <section class="section-panel" data-panel="3">
          <ExperienceSection />
        </section>
        <section class="section-panel" data-panel="4">
          <ContactSection />
        </section>
      </div>
    </div>

    <AppNav :total="PANEL_COUNT" />
  </div>
</template>

<style scoped>
.pin-viewport {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
}
.pin-viewport > * {
  pointer-events: auto;
}
</style>
