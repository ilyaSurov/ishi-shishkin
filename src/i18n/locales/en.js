export default {
  meta: {
    title: 'Ilya Petrovich Shishkin | Fullstack Developer',
    description: 'Ilya Petrovich Shishkin — Fullstack Developer',
  },
  nav: {
    labels: ['Home', 'Projects', 'Skills', 'Experience', 'Contact'],
    ariaLabel: 'Section navigation',
    goTo: 'Go to',
  },
  hero: {
    photoAlt: 'Profile photo',
    contact: 'Get in touch',
  },
  theme: {
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
  },
  language: {
    ariaLabel: 'Language selection',
    ru: 'Russian',
    en: 'English',
  },
  sections: {
    projects: 'Projects',
    skills: 'Skills',
    skillsSubtitle: 'Web, products, and AI tools for real-world tasks',
    experience: 'Experience',
    contact: 'Contact',
    contactSubtitle: 'Open to new opportunities. Reach out via Telegram or email.',
  },
  projectCard: {
    ariaLabel: 'More about project',
    hint: 'Details →',
  },
  projectModal: {
    ariaLabel: 'Project',
    close: 'Close',
    openDemo: 'Open demo',
    demoSoon: 'Demo coming soon',
    codeGithub: 'View on GitHub',
    repoOnRequest: 'Repository available on request',
    about: 'About',
    features: 'Key features',
    gallery: 'Gallery',
    video: 'Demo video',
    noVideo: 'Video coming soon — add a file to the project videos folder.',
    galleryPrev: 'Previous image',
    galleryNext: 'Next image',
  },
  projectStages: {
    'pre-mvp': 'Pre-MVP',
    mvp: 'MVP',
    beta: 'Beta',
    production: 'Production',
  },
  profile: {
    name: 'Ilya Petrovich Shishkin',
    role: 'Fullstack Developer',
    location: 'Russia',
    hero:
      '3+ years of Vue 3 and Nest.js: e-commerce stores, CRM and analytics, Telegram bots, and Tauri desktop apps. Open to remote work.',
    experienceTotal: '3 years 6 months',
    experience: [
      {
        title: 'Head of Development',
        company: 'Inproproject LLC',
        location: 'Penza',
        period: 'Sep 2024 — Feb 2026',
        duration: '1 yr 6 mo',
        highlights: [
          'Led a web team of 3 developers: Nest.js API, Redis, PostgreSQL, integrations with banks and payment services.',
          'Vue 3 dashboards with Pinia and Chart.js: lazy-loading and virtual scrolling for enterprise clients.',
          'Docker to Kubernetes migration: autoscaling, multi-region deploy, high availability.',
          'CI/CD on GitHub Actions, code review, high test coverage (Jest/Vitest), junior mentoring in Agile/Scrum.',
        ],
      },
      {
        title: 'Supplementary Education Teacher',
        company: 'PKIPT IT College',
        location: 'Penza',
        period: 'Sep 2022 — Sep 2025',
        duration: '3 yrs 1 mo',
        highlights: [
          'Mentored 3 groups (ages 12–18): HTML, CSS, JavaScript, PHP, Git/GitHub — theory and practice.',
          'Self-directed learning: research skills, VS Code, debugging, clean and maintainable code.',
          'TimeWeb VDS for student projects, fullstack deploy, GitHub Pages, domains, production servers.',
          'Year-long projects from idea to defense; WorldSkills prep: layout, SPA, REST API.',
        ],
      },
      {
        title: 'Fullstack Developer',
        company: 'LuxCorp LLC',
        location: 'Penza',
        period: 'Sep 2023 — Jul 2024',
        duration: '11 mo',
        highlights: [
          'Fullstack for enterprise clients: Vue.js, Node.js/Express, PostgreSQL, Redis.',
          'REST API with JWT and OAuth 2.0 / OpenID Connect; real-time dashboards (WebSocket, Chart.js).',
          'Notifications, analytics, A/B testing; websites on Bitrix24.',
          'Company mobile app on React and React Native.',
        ],
      },
    ],
    skills: {
      frontend: {
        title: 'Frontend',
        subtitle: 'SPA, component architecture, accessibility',
        items: ['Vue.js 2+ years', 'React', 'TypeScript', 'SCSS / CSS-in-JS', 'Vite, Webpack'],
      },
      backend: {
        title: 'Backend',
        subtitle: 'API, microservices, databases',
        items: ['Nest.js', 'Node.js / Express', 'PostgreSQL', 'Redis', 'REST / GraphQL'],
      },
      product: {
        title: 'Products & Platforms',
        subtitle: 'Stores, bots, desktop, mobile clients',
        items: [
          'E-commerce stores and online shops',
          'CRM, analytics, and dashboards',
          'Telegram bots and mini apps',
          'Tauri (desktop), React Native',
        ],
      },
      ai: {
        title: 'AI & Automation',
        subtitle: 'LLMs, Cursor, neural network integrations',
        items: [
          'Cursor IDE and large LLMs in daily development',
          'Neural API services: text analysis, specialized tasks',
          'Real-time speech processing',
          'Continuously learning effective AI usage',
        ],
      },
      tools: {
        title: 'Tools & Environment',
        subtitle: 'CI/CD, containerization, orchestration',
        items: ['Docker', 'Kubernetes', 'Git', 'GitHub Actions', 'Linux'],
      },
    },
  },
}
