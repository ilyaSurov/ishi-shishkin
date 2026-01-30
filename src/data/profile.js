// Фото: положите avatar.png в папку public/ — оно будет доступно по /avatar.png (и по /MySait/avatar.png на GitHub Pages)
export const profile = {
  name: 'Илья Петрович Шишкин',
  role: 'Senior Fullstack Developer',
  age: 22,
  location: 'Пензенская область, Россия',
  avatarUrl: '', // оставьте пустым — используется public/avatar.png через BASE_URL в компонентах
  hero: '3+ года Vue.js/Nest.js/Flutter. Создаю масштабируемые enterprise системы. Remote senior.',
  experience: [
    { title: 'Senior Fullstack', duration: '1 год (6мес тимлид)', team: 'до 5 человек' },
    { title: 'Middle Developer', duration: '2 года', team: 'командная работа' },
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
      items: ['Nest.js', 'Laravel', 'PostgreSQL', 'MySQL', 'Redis', 'REST / GraphQL'],
    },
    mobile: {
      title: 'Mobile',
      subtitle: 'Кроссплатформенная разработка',
      items: ['Flutter', 'Dart', 'Офлайн-first', 'Push-уведомления'],
    },
    tools: {
      title: 'Инструменты и среда',
      subtitle: 'CI/CD, контейнеризация, контроль версий',
      items: ['Docker', 'Git', 'VS Code', 'Linux', 'GitHub Actions'],
    },
  },
  contacts: {
    telegram: 't.me/yourusername',
    github: 'github.com/yourusername',
    email: 'your.email@example.com',
  },
}

// Примеры проектов: скриншоты заменены цветными блоками (previewColor)
export const projects = [
  {
    title: 'Real-time Dashboard Analytics',
    description: 'E-commerce аналитика в реальном времени: 100k метрик/мин, графики, алерты и экспорт в Excel. Одна дашборд-платформа для трёх брендов.',
    tech: ['Vue3', 'Nest.js', 'Redis Pub/Sub', 'PostgreSQL', 'Chart.js'],
    live: '#',
    github: '#',
    previewColor: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)',
  },
  {
    title: 'Microservices API Gateway',
    description: 'Единая точка входа для 20+ микросервисов: маршрутизация, rate limit, JWT, логирование. Снизили латентность на 40%.',
    tech: ['Nest.js', 'Kafka', 'Docker', 'K8s', 'OpenAPI'],
    live: '#',
    github: '#',
    previewColor: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
  },
  {
    title: 'Flutter CRM для полевых команд',
    description: 'Офлайн-first мобильное приложение для торговых представителей: визиты, заказы, фото отчёты. Синхронизация с бэкендом по расписанию и по Wi‑Fi.',
    tech: ['Flutter', 'Nest.js', 'SQLite', 'WebSockets', 'Firebase'],
    live: '#',
    github: '#',
    previewColor: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 50%, #fb7185 100%)',
  },
]
