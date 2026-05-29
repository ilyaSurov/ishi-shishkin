import { onMounted, onUnmounted } from 'vue'
import { goToNextPanel, goToPrevPanel } from './usePanelNavigation'
import { isCoarsePointer, isMobileLayout } from './useViewport'

const SWIPE_MIN = 56
const SWIPE_RATIO = 1.35

function isSwipeBlocked(target) {
  if (!(target instanceof Element)) return true
  if (document.body.dataset.modalOpen === 'true') return true
  return Boolean(target.closest('[data-no-panel-swipe]'))
}

/**
 * Горизонтальный свайп для переключения секций на touch-устройствах.
 */
export function useSwipeNavigation() {
  let startX = 0
  let startY = 0
  let startTarget = null
  let tracking = false

  function onTouchStart(event) {
    if (!isMobileLayout() && !isCoarsePointer()) return
    if (event.touches.length !== 1) return

    startTarget = event.target
    if (isSwipeBlocked(startTarget)) {
      tracking = false
      return
    }

    startX = event.touches[0].clientX
    startY = event.touches[0].clientY
    tracking = true
  }

  function onTouchEnd(event) {
    if (!tracking) return
    tracking = false

    const touch = event.changedTouches[0]
    const dx = touch.clientX - startX
    const dy = touch.clientY - startY

    if (Math.abs(dx) < SWIPE_MIN) return
    if (Math.abs(dx) < Math.abs(dy) * SWIPE_RATIO) return

    if (dx < 0) {
      goToNextPanel({ smooth: true })
    } else {
      goToPrevPanel({ smooth: true })
    }
  }

  function onTouchCancel() {
    tracking = false
  }

  onMounted(() => {
    document.addEventListener('touchstart', onTouchStart, { passive: true })
    document.addEventListener('touchend', onTouchEnd, { passive: true })
    document.addEventListener('touchcancel', onTouchCancel, { passive: true })
  })

  onUnmounted(() => {
    document.removeEventListener('touchstart', onTouchStart)
    document.removeEventListener('touchend', onTouchEnd)
    document.removeEventListener('touchcancel', onTouchCancel)
  })
}
