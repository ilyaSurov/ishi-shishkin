<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useLocale } from '../composables/useLocale'
import ProjectStageBadge from './ProjectStageBadge.vue'
import ProjectGallery from './ProjectGallery.vue'

const props = defineProps({
  project: { type: Object, default: null },
})

const emit = defineEmits(['close'])
const { t } = useLocale()

function close() {
  emit('close')
}

function hasLive() {
  return props.project?.live && props.project.live !== '#'
}

function hasGithub() {
  return props.project?.github && props.project.github !== '#'
}

function onKeydown(e) {
  if (e.key === 'Escape') close()
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.body.style.overflow = 'hidden'
  document.body.dataset.modalOpen = 'true'
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
  delete document.body.dataset.modalOpen
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="project"
        class="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
        data-no-panel-swipe
        role="dialog"
        aria-modal="true"
        :aria-label="`${t('projectModal.ariaLabel')}: ${project.title}`"
        @click.self="close()"
      >
        <div
          class="modal-backdrop fixed inset-0 backdrop-blur-sm"
          aria-hidden="true"
        />
        <div
          class="modal-panel glass relative flex max-h-[94vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-theme-strong shadow-2xl sm:max-h-[90vh] sm:rounded-2xl"
          @click.stop
        >
          <div class="flex shrink-0 items-start justify-between gap-4 border-b border-theme-subtle p-5 sm:p-6">
            <div class="min-w-0">
              <div class="mb-2 flex flex-wrap items-center gap-2">
                <ProjectStageBadge :stage="project.stage" size="md" />
              </div>
              <h3 class="text-xl font-bold text-theme sm:text-2xl">
                {{ project.title }}
              </h3>
              <p class="mt-1 text-sm text-primary">
                {{ project.tagline }}
              </p>
            </div>
            <button
              type="button"
              class="hover-theme shrink-0 rounded-lg p-1.5 text-theme-icon transition hover:text-theme"
              :aria-label="t('projectModal.close')"
              @click="close()"
            >
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="min-h-0 flex-1 overflow-y-auto p-5 sm:p-6">
            <section class="mb-6">
              <h4 class="mb-3 text-sm font-semibold uppercase tracking-wide text-theme-muted">
                {{ t('projectModal.gallery') }}
              </h4>
              <ProjectGallery :urls="project.galleryUrls" :title="project.title" />
            </section>

            <section class="mb-6">
              <h4 class="mb-3 text-sm font-semibold uppercase tracking-wide text-theme-muted">
                {{ t('projectModal.video') }}
              </h4>
              <div
                v-if="project.videoUrl"
                class="overflow-hidden rounded-xl border border-theme-subtle"
              >
                <video
                  :src="project.videoUrl"
                  class="aspect-video w-full bg-black/20 object-contain"
                  controls
                  playsinline
                  preload="metadata"
                />
              </div>
              <div
                v-else
                class="flex aspect-video items-center justify-center rounded-xl border border-dashed border-theme-subtle bg-theme-tag/20 px-6 text-center text-sm text-theme-muted"
              >
                {{ t('projectModal.noVideo') }}
              </div>
            </section>

            <section class="mb-6">
              <h4 class="mb-2 text-sm font-semibold uppercase tracking-wide text-theme-muted">
                {{ t('projectModal.about') }}
              </h4>
              <p class="leading-relaxed text-theme-secondary">
                {{ project.longDescription }}
              </p>
            </section>

            <section class="mb-6">
              <h4 class="mb-3 text-sm font-semibold uppercase tracking-wide text-theme-muted">
                {{ t('projectModal.features') }}
              </h4>
              <ul class="space-y-2">
                <li
                  v-for="(item, idx) in project.highlights"
                  :key="idx"
                  class="flex gap-2 text-sm leading-relaxed text-theme-body"
                >
                  <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </section>

            <div class="mb-2 flex flex-wrap gap-2">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="bg-theme-tag text-theme-tag rounded-lg px-2.5 py-1 font-mono text-xs"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="flex shrink-0 flex-wrap gap-3 border-t border-theme-subtle p-5 sm:p-6">
            <a
              v-if="hasLive()"
              :href="project.live"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:bg-primary/90"
            >
              {{ t('projectModal.openDemo') }}
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <span
              v-else
              class="inline-flex items-center rounded-xl border px-4 py-2.5 text-sm text-theme-muted"
              style="border-color: var(--color-button-secondary-border)"
            >
              {{ t('projectModal.demoSoon') }}
            </span>
            <a
              v-if="hasGithub()"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="hover-theme inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition"
              style="border-color: var(--color-button-secondary-border); color: var(--color-button-secondary-text)"
            >
              {{ t('projectModal.codeGithub') }}
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
            </a>
            <span
              v-else
              class="inline-flex items-center rounded-xl border px-4 py-2.5 text-sm text-theme-muted"
              style="border-color: var(--color-button-secondary-border)"
            >
              {{ t('projectModal.repoOnRequest') }}
            </span>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active .modal-panel,
.modal-leave-active .modal-panel {
  transition: transform 0.25s ease;
}
.modal-enter-from .modal-panel,
.modal-leave-to .modal-panel {
  transform: translateY(12px) scale(0.98);
}
@media (min-width: 640px) {
  .modal-enter-from .modal-panel,
  .modal-leave-to .modal-panel {
    transform: scale(0.96);
  }
}
</style>
