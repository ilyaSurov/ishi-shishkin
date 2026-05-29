import { ref, readonly, computed } from 'vue'

const STORAGE_KEY = 'portfolio-theme'
const THEMES = ['light', 'dark']

const theme = ref('dark')
let initialized = false

const THEME_COLORS = {
  light: '#f8fafc',
  dark: '#0f172a',
}

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function getStoredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return THEMES.includes(stored) ? stored : null
  } catch {
    return null
  }
}

function applyTheme(value) {
  document.documentElement.setAttribute('data-theme', value)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[value])
}

function initTheme() {
  if (initialized) return
  initialized = true
  theme.value = getStoredTheme() ?? getSystemTheme()
  applyTheme(theme.value)
}

function setTheme(value) {
  if (!THEMES.includes(value)) return
  theme.value = value
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    /* ignore storage errors */
  }
  applyTheme(value)
}

function toggleTheme() {
  document.documentElement.classList.add('theme-transition')
  setTheme(theme.value === 'dark' ? 'light' : 'dark')
  window.setTimeout(() => {
    document.documentElement.classList.remove('theme-transition')
  }, 300)
}

export function useTheme() {
  initTheme()
  return {
    theme: readonly(theme),
    isDark: computed(() => theme.value === 'dark'),
    isLight: computed(() => theme.value === 'light'),
    setTheme,
    toggleTheme,
  }
}

initTheme()
