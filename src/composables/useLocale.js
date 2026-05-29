import { ref, readonly, computed } from 'vue'
import ru from '../i18n/locales/ru'
import en from '../i18n/locales/en'
import { contacts } from '../data/contacts'
import { getProjects } from '../data/projects'
import { useProjectConfigs } from './useProjectConfigs'

const STORAGE_KEY = 'portfolio-locale'
const LOCALES = ['ru', 'en']
const catalogs = { ru, en }

const locale = ref('ru')
let initialized = false
let geoChecked = false

function getBrowserLocale() {
  return navigator.language?.toLowerCase().startsWith('ru') ? 'ru' : 'en'
}

function getStoredLocale() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return LOCALES.includes(stored) ? stored : null
  } catch {
    return null
  }
}

function applyLocale(value) {
  document.documentElement.lang = value
  const catalog = catalogs[value]
  document.title = catalog.meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', catalog.meta.description)
}

async function detectLocaleByGeo() {
  try {
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 5000)
    const response = await fetch('https://ipapi.co/country_code/', { signal: controller.signal })
    window.clearTimeout(timeout)
    if (!response.ok) throw new Error('geo lookup failed')
    const country = (await response.text()).trim().toUpperCase()
    return country === 'RU' ? 'ru' : 'en'
  } catch {
    return getBrowserLocale()
  }
}

function setLocale(value, persist = true) {
  if (!LOCALES.includes(value)) return
  locale.value = value
  applyLocale(value)
  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      /* ignore storage errors */
    }
  }
}

async function resolveGeoLocale() {
  if (geoChecked || getStoredLocale()) return
  geoChecked = true
  const detected = await detectLocaleByGeo()
  if (!getStoredLocale()) {
    setLocale(detected, true)
  }
}

function initLocale() {
  if (initialized) return
  initialized = true

  const stored = getStoredLocale()
  if (stored) {
    locale.value = stored
    applyLocale(stored)
    return
  }

  const fallback = getBrowserLocale()
  locale.value = fallback
  applyLocale(fallback)
  resolveGeoLocale()
}

export function useLocale() {
  initLocale()
  const { overrides } = useProjectConfigs()

  const messages = computed(() => catalogs[locale.value])
  const profile = computed(() => ({
    ...messages.value.profile,
    contacts,
  }))
  const projects = computed(() => getProjects(locale.value, overrides.value))

  function t(path) {
    return path.split('.').reduce((obj, key) => obj?.[key], messages.value) ?? path
  }

  return {
    locale: readonly(locale),
    isRu: computed(() => locale.value === 'ru'),
    isEn: computed(() => locale.value === 'en'),
    messages,
    profile,
    projects,
    t,
    setLocale,
  }
}

initLocale()
