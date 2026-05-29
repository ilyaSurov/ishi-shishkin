import { ref } from 'vue'
import { loadProjectConfigs } from '../data/projects/loadConfigs'
import { preloadProjectCovers } from '../data/projects'

const overrides = ref({})
const ready = ref(false)
let initPromise = null

export function initProjectConfigs() {
  if (!initPromise) {
    initPromise = loadProjectConfigs().then((configs) => {
      overrides.value = configs
      ready.value = true
      preloadProjectCovers(configs)
    })
  }
  return initPromise
}

export function useProjectConfigs() {
  return { overrides, ready }
}

initProjectConfigs()
