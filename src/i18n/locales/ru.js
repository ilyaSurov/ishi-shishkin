export default {
  meta: {
    title: 'Илья Шишкин Петрович | Fullstack Developer',
    description: 'Илья Шишкин Петрович — Fullstack Developer',
  },
  nav: {
    labels: ['Главная', 'Проекты', 'Навыки', 'Опыт', 'Контакты'],
    ariaLabel: 'Навигация по секциям',
    goTo: 'Перейти',
  },
  hero: {
    photoAlt: 'Фото',
    contact: 'Связаться',
  },
  theme: {
    toLight: 'Включить светлую тему',
    toDark: 'Включить тёмную тему',
  },
  language: {
    ariaLabel: 'Выбор языка',
    ru: 'Русский',
    en: 'English',
  },
  sections: {
    projects: 'Проекты',
    skills: 'Навыки',
    skillsSubtitle: 'Веб, продукты и AI-инструменты для реальных задач',
    experience: 'Опыт',
    contact: 'Связаться',
    contactSubtitle: 'Готов к новым вызовам. Пишите в Telegram или на почту.',
  },
  projectCard: {
    ariaLabel: 'Подробнее о проекте',
    hint: 'Подробнее →',
  },
  projectModal: {
    ariaLabel: 'Проект',
    close: 'Закрыть',
    openDemo: 'Открыть демо',
    demoSoon: 'Демо в разработке',
    codeGithub: 'Код на GitHub',
    repoOnRequest: 'Репозиторий по запросу',
    about: 'О проекте',
    features: 'Ключевые возможности',
    gallery: 'Галерея',
    video: 'Демонстрация',
    noVideo: 'Видео скоро появится — добавьте файл в папку videos проекта.',
    galleryPrev: 'Предыдущее фото',
    galleryNext: 'Следующее фото',
  },
  projectStages: {
    'pre-mvp': 'Pre-MVP',
    mvp: 'MVP',
    beta: 'Beta',
    production: 'Production',
  },
  profile: {
    name: 'Илья Петрович Шишкин',
    role: 'Fullstack Developer',
    location: 'Россия',
    hero:
      '3+ года Vue 3 и Nest.js: интернет-магазины, CRM и аналитика, Telegram-боты и десктоп на Tauri. Открыт к удалённой работе.',
    experienceTotal: '3 года 6 месяцев',
    experience: [
      {
        title: 'Руководитель отдела разработки',
        company: 'ООО «Инпроуджект»',
        location: 'Пенза',
        period: 'Сент 2024 — Фев 2026',
        duration: '1 год 6 мес',
        highlights: [
          'Руководил веб-отделом из 3 разработчиков: Nest.js API, Redis, PostgreSQL, интеграции с банками и платёжными сервисами.',
          'Vue 3 дашборды с Pinia и Chart.js: lazy-loading и virtual scrolling для корпоративных клиентов.',
          'Миграция Docker → Kubernetes: autoscaling, мультирегиональный деплой, высокая доступность.',
          'CI/CD на GitHub Actions, code review, высокий test coverage (Jest/Vitest), менторство junior в Agile/Scrum.',
        ],
      },
      {
        title: 'Педагог дополнительного образования',
        company: 'ГОПОУ ПО «ПКИПТ (ИТ-колледж)»',
        location: 'Пенза',
        period: 'Сент 2022 — Сент 2025',
        duration: '3 года 1 мес',
        highlights: [
          'Курировал 3 группы (12–18 лет): HTML, CSS, JavaScript, PHP, Git/GitHub — теория и практика.',
          'Самостоятельная работа: поиск информации, VS Code, отладка, чистый и поддерживаемый код.',
          'VDS TimeWeb для учебных проектов, деплой fullstack, GitHub Pages, домены, продакшен-сервер.',
          'Годовые проекты от идеи до защиты; подготовка к «Профессионал» (WorldSkills): вёрстка, SPA, REST API.',
        ],
      },
      {
        title: 'Fullstack Developer',
        company: 'ООО «ЛюксКорп»',
        location: 'Пенза',
        period: 'Сент 2023 — Июль 2024',
        duration: '11 мес',
        highlights: [
          'Fullstack для корпоративных клиентов: Vue.js, Node.js/Express, PostgreSQL, Redis.',
          'REST API с JWT и OAuth 2.0 / OpenID Connect; real-time дашборды (WebSocket, Chart.js).',
          'Уведомления, аналитика, A/B-тестирование; сайты на Bitrix24.',
          'Мобильное приложение компании на React и React Native.',
        ],
      },
    ],
    skills: {
      frontend: {
        title: 'Frontend',
        subtitle: 'SPA, компонентная разработка, доступность',
        items: ['Vue.js 2+ года', 'React', 'TypeScript', 'SCSS / CSS-in-JS', 'Vite, Webpack'],
      },
      backend: {
        title: 'Backend',
        subtitle: 'API, микросервисы, базы данных',
        items: ['Nest.js', 'Node.js / Express', 'PostgreSQL', 'Redis', 'REST / GraphQL'],
      },
      product: {
        title: 'Продукты и платформы',
        subtitle: 'Магазины, боты, десктоп, мобильные клиенты',
        items: [
          'Интернет-магазины и e-commerce',
          'CRM, аналитика и дашборды',
          'Telegram-боты и мини-приложения',
          'Tauri (десктоп), React Native',
        ],
      },
      ai: {
        title: 'AI и автоматизация',
        subtitle: 'LLM, Cursor, интеграции с нейросетями',
        items: [
          'Cursor IDE и крупные LLM в ежедневной разработке',
          'Сервисы на API нейросетей: анализ текста, узкие задачи',
          'Обработка речи в реальном времени',
          'Постоянно изучаю эффективное применение AI',
        ],
      },
      tools: {
        title: 'Инструменты и среда',
        subtitle: 'CI/CD, контейнеризация, оркестрация',
        items: ['Docker', 'Kubernetes', 'Git', 'GitHub Actions', 'Linux'],
      },
    },
  },
}
