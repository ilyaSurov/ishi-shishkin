/** Единые размеры viewport для GSAP-панелей и навигации (важно на mobile). */
export function getViewportWidth() {
  return Math.round(window.visualViewport?.width ?? document.documentElement.clientWidth)
}

export function getViewportHeight() {
  return Math.round(window.visualViewport?.height ?? window.innerHeight)
}

export function updateViewportCssVars() {
  const vh = getViewportHeight() * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  const vv = window.visualViewport
  if (vv) {
    const chromeBottom = Math.max(0, Math.round(window.innerHeight - vv.height - vv.offsetTop))
    document.documentElement.style.setProperty('--browser-chrome-bottom', `${chromeBottom}px`)
  } else {
    document.documentElement.style.setProperty('--browser-chrome-bottom', '0px')
  }
}

export function subscribeViewportChange(callback, options = {}) {
  const { lightOnVisualScroll = false } = options
  updateViewportCssVars()

  let timer
  const schedule = () => {
    updateViewportCssVars()
    clearTimeout(timer)
    timer = setTimeout(callback, 150)
  }

  const onVisualScroll = () => {
    updateViewportCssVars()
    if (lightOnVisualScroll) callback()
  }

  window.addEventListener('resize', schedule, { passive: true })
  window.addEventListener('orientationchange', schedule, { passive: true })
  window.visualViewport?.addEventListener('resize', schedule, { passive: true })
  window.visualViewport?.addEventListener('scroll', onVisualScroll, { passive: true })

  return () => {
    clearTimeout(timer)
    window.removeEventListener('resize', schedule)
    window.removeEventListener('orientationchange', schedule)
    window.visualViewport?.removeEventListener('resize', schedule)
    window.visualViewport?.removeEventListener('scroll', onVisualScroll)
  }
}

export function isCoarsePointer() {
  return window.matchMedia('(pointer: coarse)').matches
}

export function isMobileLayout() {
  return window.matchMedia('(max-width: 767px)').matches
}
