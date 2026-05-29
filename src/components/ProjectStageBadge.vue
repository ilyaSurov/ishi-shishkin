<script setup>
import { computed } from 'vue'
import { useLocale } from '../composables/useLocale'

const props = defineProps({
  stage: { type: String, required: true },
  size: { type: String, default: 'sm' },
})

const { t } = useLocale()

const label = computed(() => t(`projectStages.${props.stage}`) || props.stage)

const colorClass = computed(() => {
  switch (props.stage) {
    case 'pre-mvp':
      return 'stage-pre-mvp'
    case 'mvp':
      return 'stage-mvp'
    case 'beta':
      return 'stage-beta'
    case 'production':
      return 'stage-production'
    default:
      return 'stage-default'
  }
})

const sizeClass = computed(() =>
  props.size === 'md'
    ? 'px-3 py-1 text-xs'
    : 'px-2 py-0.5 text-[10px] sm:text-xs',
)
</script>

<template>
  <span
    class="project-stage-badge inline-flex shrink-0 items-center rounded-full font-semibold uppercase tracking-wide ring-1 ring-inset"
    :class="[colorClass, sizeClass]"
  >
    {{ label }}
  </span>
</template>

<style scoped>
.project-stage-badge.stage-pre-mvp {
  background: rgba(245, 158, 11, 0.15);
  color: #d97706;
  --tw-ring-color: rgba(245, 158, 11, 0.35);
}
.project-stage-badge.stage-mvp {
  background: rgba(99, 102, 241, 0.15);
  color: var(--primary);
  --tw-ring-color: rgba(99, 102, 241, 0.35);
}
.project-stage-badge.stage-beta {
  background: rgba(236, 72, 153, 0.15);
  color: var(--accent);
  --tw-ring-color: rgba(236, 72, 153, 0.35);
}
.project-stage-badge.stage-production {
  background: rgba(16, 185, 129, 0.15);
  color: #059669;
  --tw-ring-color: rgba(16, 185, 129, 0.35);
}
.project-stage-badge.stage-default {
  background: var(--color-tag-bg);
  color: var(--color-tag-text);
  --tw-ring-color: var(--color-border-subtle);
}
</style>
