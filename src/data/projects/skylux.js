export default {
  id: 'skylux',
  slug: 'skylux',
  github: 'https://github.com/ilyaSurov/e-shop-Skylux',
  live: '',
  stage: 'mvp',
  tech: ['Vue 3', 'Go', 'chi', 'PostgreSQL', 'Tauri 2', 'Redis', 'TypeScript'],
  cover: 'cover.svg',
  gallery: [],
  video: null,
  previewColor: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #a855f7 100%)',
  i18n: {
    ru: {
      title: 'Skylux · Небеса',
      tagline: 'Натяжные потолки · калькулятор · CRM',
      description:
        'Платформа для компании по натяжным потолкам: калькулятор стоимости, заявки, магазин материалов и админка на Tauri для монтажников.',
      longDescription:
        'Цифровая экосистема B2C-компании: публичный сайт с калькулятором и каталогом, Go API с RBAC (admin, manager, professional, customer), админ-панель и десктоп на Tauri 2 для полевых сотрудников. Лиды, заказы материалов, галерея работ, блог и UTM-аналитика.',
      highlights: [
        'Калькулятор потолка с сохранением расчёта и заявкой',
        'Pro-зона: назначение заявок монтажникам, файлы по объекту',
        'E-commerce расходных материалов с checkout',
        'JSONB-каталог потолков, модерация отзывов, блог',
        'Tauri 2 desktop (.exe) для Windows — тот же Vue-код',
      ],
    },
    en: {
      title: 'Skylux · Nebesa',
      tagline: 'Stretch ceilings · calculator · CRM',
      description:
        'Platform for a stretch ceiling company: cost calculator, lead pipeline, materials shop, and Tauri admin for installers.',
      longDescription:
        'A B2C digital ecosystem: public site with calculator and catalog, Go API with RBAC (admin, manager, professional, customer), admin panel, and Tauri 2 desktop for field staff. Leads, material orders, portfolio gallery, blog, and UTM tracking.',
      highlights: [
        'Ceiling calculator with saved estimates and lead submission',
        'Pro workspace: assign leads to installers, project files',
        'E-commerce for consumables with checkout',
        'JSONB ceiling catalog, review moderation, blog',
        'Tauri 2 desktop (.exe) for Windows — same Vue codebase',
      ],
    },
  },
}
