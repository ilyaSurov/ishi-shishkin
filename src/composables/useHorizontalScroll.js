import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Horizontal scroll: vertical scroll drives horizontal panel movement.
 * Wrap content in .horizontal-scroll-wrapper and pass panel count.
 */
export function useHorizontalScroll(panelCount = 5) {
  const wrapper = ref(null)
  const scrollContent = ref(null) // tall div that we scroll vertically

  onMounted(() => {
    if (!wrapper.value || !scrollContent.value) return

    // Используем clientWidth, чтобы не учитывать полосу прокрутки (контент не сдвигается)
    const viewWidth = document.documentElement.clientWidth
    const totalWidth = panelCount * viewWidth
    // Один «экран» прокрутки = одна панель: 4 шага (0..4*H) для 5 панелей, progress = scrollY / (4*H)
    const totalHeight = (panelCount - 1) * window.innerHeight
    wrapper.value.style.width = `${totalWidth}px`
    scrollContent.value.style.height = `${totalHeight}px`

    // Ширина каждой панели = ровно видимая область
    const panels = wrapper.value.querySelectorAll('.section-panel')
    panels.forEach((panel) => {
      panel.style.width = `${viewWidth}px`
      panel.style.minWidth = `${viewWidth}px`
    })

    const endScroll = totalHeight
    gsap.to(wrapper.value, {
      x: -(totalWidth - viewWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: scrollContent.value,
        start: 'top top',
        end: () => `+=${endScroll}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
        // Snap отключён: при клике по нав мы скроллим ровно в нужную точку; при ручной прокрутке — см. onScrollSnap в App
      },
    })
  })

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill())
  })

  return { wrapper, scrollContent }
}
