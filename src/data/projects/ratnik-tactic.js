export default {
  id: 'ratnik-tactic',
  slug: 'ratnik-tactic',
  github: 'https://github.com/ilyaSurov/e-shop-RatnikTactic',
  live: '',
  stage: 'mvp',
  tech: ['Nuxt 4', 'Vue 3', 'Go', 'Gin', 'GORM', 'PostgreSQL', 'Docker', 'Redis'],
  cover: 'cover.svg',
  gallery: [],
  video: null,
  previewColor: 'linear-gradient(135deg, #3d4f2f 0%, #5c6b4a 50%, #8b7355 100%)',
  i18n: {
    ru: {
      title: 'Ратник Тактик',
      tagline: 'Интернет-магазин тактического снаряжения',
      description:
        'Полнофункциональный e-commerce: витрина на Nuxt 4, админка Vue 3 и REST API на Go. Каталог, корзина, заказы, блог и модерация отзывов.',
      longDescription:
        'Трёхслойная платформа для бренда «Ратник Тactic» (Пенза): публичная SSR-витрина, отдельная админ-панель и Go API с PostgreSQL. Покупатель проходит путь от каталога до оформления заказа; администратор управляет товарами, категориями, заказами и контентом без правки кода.',
      highlights: [
        'Nuxt 4 SSR для SEO каталога и карточек товаров',
        'Гостевая корзина в localStorage с слиянием после авторизации',
        'JWT auth, роли user/admin, загрузка медиа на backend',
        'Иерархия категорий, бренды, характеристики товаров, блог',
        'Docker Compose: PostgreSQL, Redis (задел под кэш)',
      ],
    },
    en: {
      title: 'Ratnik Tactic',
      tagline: 'Tactical gear e-commerce store',
      description:
        'Full-stack e-commerce: Nuxt 4 storefront, Vue 3 admin panel, and Go REST API. Catalog, cart, orders, blog, and review moderation.',
      longDescription:
        'A three-tier platform for the Ratnik Tactic tactical gear brand (Penza): public SSR storefront, dedicated admin SPA, and Go API with PostgreSQL. Shoppers browse to checkout; admins manage products, categories, orders, and content without touching code.',
      highlights: [
        'Nuxt 4 SSR for catalog and product SEO',
        'Guest cart in localStorage merged after login',
        'JWT auth, user/admin roles, backend media uploads',
        'Category tree, brands, product specs, blog',
        'Docker Compose: PostgreSQL, Redis (cache-ready)',
      ],
    },
  },
}
