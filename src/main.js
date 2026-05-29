import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import './composables/useTheme'
import './composables/useProjectConfigs'
import { updateViewportCssVars } from './composables/useViewport'

updateViewportCssVars()
import './composables/useLocale'

createApp(App).mount('#app')
