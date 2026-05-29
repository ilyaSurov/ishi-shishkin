import { ref, readonly } from 'vue'

const panelCount = ref(5)
const scrollTrigger = ref(null)
const currentPanel = ref(0)
let isNavigating = false

export function registerPanelScroll(st, total) {
  scrollTrigger.value = st
  panelCount.value = total
  if (st) syncCurrentFromProgress(st.progress)
}

function syncCurrentFromProgress(progress) {
  const total = panelCount.value
  if (total <= 1) {
    currentPanel.value = 0
    return
  }
  currentPanel.value = Math.round(progress * (total - 1))
}

export function goToPanel(index, options = {}) {
  const st = scrollTrigger.value
  const total = panelCount.value
  if (!st || total <= 1) return

  const target = Math.max(0, Math.min(total - 1, index))
  isNavigating = true
  currentPanel.value = target

  const progress = target / (total - 1)
  const y = st.start + progress * (st.end - st.start)

  window.scrollTo({ top: y, behavior: options.smooth ? 'smooth' : 'auto' })

  const unlock = () => {
    isNavigating = false
  }
  if (options.smooth) {
    setTimeout(unlock, 450)
  } else {
    requestAnimationFrame(unlock)
  }
}

export function goToNextPanel(options = {}) {
  goToPanel(currentPanel.value + 1, options)
}

export function goToPrevPanel(options = {}) {
  goToPanel(currentPanel.value - 1, options)
}

export function onPanelScrollUpdate(progress) {
  if (isNavigating) return
  syncCurrentFromProgress(progress)
}

export function usePanelNavigation() {
  return {
    currentPanel: readonly(currentPanel),
    goToPanel,
    goToNextPanel,
    goToPrevPanel,
  }
}
