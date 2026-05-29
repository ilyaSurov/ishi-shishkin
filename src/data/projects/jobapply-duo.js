export default {
  id: 'jobapply-duo',
  slug: 'jobapply-duo',
  github: '',
  live: '',
  stage: 'pre-mvp',
  tech: ['Nuxt 4', 'Vue 3', 'Go', 'chromedp', 'TypeScript'],
  cover: 'cover.svg',
  gallery: [],
  video: null,
  previewColor: 'linear-gradient(135deg, #0f172a 0%, #334155 50%, #6366f1 100%)',
  i18n: {
    ru: {
      title: 'JobApplyDuo',
      tagline: 'Автоматизация поиска работы на HH.ru',
      description:
        'Proof-of-concept платформы для HeadHunter: headless-браузер, авторизация через SMS/капчу и отображение вакансий.',
      longDescription:
        'Зарождающаяся SaaS-платформа для соискателей. Технический прототип: Go-сервис на chromedp проходит авторизацию hh.ru (телефон → капча → OTP), публичный API проксирует запросы, Nuxt 4 UI показывает вакансии. Задел под автоотклики, шаблоны писем и аналитику.',
      highlights: [
        'Разделение api (:8080) и hh-bot (:8081) для изоляции браузера',
        'State machine сессии: OTP → captcha → authorized',
        'In-memory SessionStore с Chrome context на сессию',
        'Fallback UI для headless/visible режима капчи',
        'Roadmap: автоотклики, AI-письма, аналитика воронки',
      ],
    },
    en: {
      title: 'JobApplyDuo',
      tagline: 'Job search automation for HH.ru',
      description:
        'HeadHunter platform proof-of-concept: headless browser, SMS/captcha auth, and vacancy listing.',
      longDescription:
        'An emerging SaaS platform for job seekers. Technical prototype: Go chromedp service handles hh.ru login (phone → captcha → OTP), public API proxies requests, Nuxt 4 UI displays vacancies. Planned: auto-applications, cover letter templates, and funnel analytics.',
      highlights: [
        'Split api (:8080) and hh-bot (:8081) to isolate the browser',
        'Session state machine: OTP → captcha → authorized',
        'In-memory SessionStore with Chrome context per session',
        'Fallback UI for headless/visible captcha mode',
        'Roadmap: auto-apply, AI letters, funnel analytics',
      ],
    },
  },
}
