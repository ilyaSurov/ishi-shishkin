import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  getViewportWidth,
  getViewportHeight,
  subscribeViewportChange,
  isCoarsePointer,
  updateViewportCssVars,
} from './useViewport'
import { registerPanelScroll, onPanelScrollUpdate } from './usePanelNavigation'

gsap.registerPlugin(ScrollTrigger)

/**
 * Horizontal scroll: vertical scroll drives horizontal panel movement.
 */
export function useHorizontalScroll(panelCount = 5) {
  const wrapper = ref(null)
  const scrollContent = ref(null)
  let tween = null
  let unsubscribeViewport = null

  function setupScroll() {
    if (!wrapper.value || !scrollContent.value) return

    updateViewportCssVars()

    const viewWidth = getViewportWidth()
    const viewHeight = getViewportHeight()
    const totalWidth = panelCount * viewWidth
    const totalHeight = Math.max(0, (panelCount - 1) * viewHeight)

    wrapper.value.style.width = `${totalWidth}px`
    scrollContent.value.style.height = `${totalHeight}px`

    const panels = wrapper.value.querySelectorAll('.section-panel')
    panels.forEach((panel) => {
      panel.style.width = `${viewWidth}px`
      panel.style.minWidth = `${viewWidth}px`
      panel.style.maxWidth = `${viewWidth}px`
    })

    if (tween) {
      tween.scrollTrigger?.kill()
      tween.kill()
      tween = null
    }

    const coarse = isCoarsePointer()

    tween = gsap.to(wrapper.value, {
      x: () => -(panelCount * getViewportWidth() - getViewportWidth()),
      ease: 'none',
      scrollTrigger: {
        id: 'horizontal-panels',
        trigger: scrollContent.value,
        start: 'top top',
        end: () => `+=${Math.max(0, (panelCount - 1) * getViewportHeight())}`,
        scrub: coarse ? 0.05 : 0.2,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate(self) {
          onPanelScrollUpdate(self.progress)
        },
      },
    })

    registerPanelScroll(tween.scrollTrigger, panelCount)
  }

  onMounted(() => {
    setupScroll()
    unsubscribeViewport = subscribeViewportChange(() => {
      setupScroll()
      ScrollTrigger.refresh(true)
    })
  })

  onUnmounted(() => {
    unsubscribeViewport?.()
    tween?.scrollTrigger?.kill()
    tween?.kill()
    registerPanelScroll(null, panelCount)
    ScrollTrigger.getAll().forEach((t) => t.kill())
  })

  return { wrapper, scrollContent }
}
