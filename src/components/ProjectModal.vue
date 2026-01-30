<script setup>
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  project: { type: Object, default: null },
})

const emit = defineEmits(['close'])

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
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="project"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        :aria-label="`Проект: ${project.title}`"
        @click.self="close()"
      >
        <div
          class="modal-backdrop fixed inset-0 bg-black/60 backdrop-blur-sm"
          aria-hidden="true"
        />
        <div
          class="modal-panel glass relative max-h-[90vh] w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
          @click.stop
        >
          <!-- Плейсхолдер как в карточке -->
          <div
            class="h-32 w-full shrink-0 sm:h-36"
            :style="{ background: project.previewColor || 'linear-gradient(135deg, #334155 0%, #475569 100%)' }"
          />
          <div class="max-h-[60vh] overflow-y-auto p-6">
            <div class="mb-4 flex items-start justify-between gap-4">
              <h3 class="text-xl font-semibold text-white">
                {{ project.title }}
              </h3>
              <button
                type="button"
                class="shrink-0 rounded-lg p-1 text-slate-400 transition hover:bg-white/10 hover:text-white"
                aria-label="Закрыть"
                @click="close()"
              >
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p class="mb-4 leading-relaxed text-slate-400">
              {{ project.description }}
            </p>
            <div class="mb-6 flex flex-wrap gap-2">
              <span
                v-for="t in project.tech"
                :key="t"
                class="rounded-lg bg-slate-700/60 px-2 py-1 font-mono text-xs text-slate-300"
              >
                {{ t }}
              </span>
            </div>
            <div class="flex flex-wrap gap-3">
              <a
                v-if="hasLive()"
                :href="project.live"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:bg-primary/90"
              >
                Открыть демо
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <span
                v-else
                class="inline-flex items-center rounded-xl border border-slate-600 px-4 py-2.5 text-sm text-slate-500"
              >
                Демо в разработке
              </span>
              <a
                v-if="hasGithub()"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:bg-white/5"
              >
                Код на GitHub
                <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
              </a>
              <span
                v-else
                class="inline-flex items-center rounded-xl border border-slate-600 px-4 py-2.5 text-sm text-slate-500"
              >
                Репозиторий по запросу
              </span>
            </div>
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
  transition: transform 0.2s ease;
}
.modal-enter-from .modal-panel,
.modal-leave-to .modal-panel {
  transform: scale(0.96);
}
</style>
