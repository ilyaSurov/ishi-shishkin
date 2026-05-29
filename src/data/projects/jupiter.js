export default {
  id: 'jupiter',
  slug: 'jupiter',
  github: 'https://github.com/ilyaSurov/e-shop-Jupiter',
  live: '',
  stage: 'mvp',
  tech: ['Nuxt 3', 'Vue 3', 'NestJS', 'Prisma', 'PostgreSQL', 'Docker', 'TypeScript'],
  cover: 'cover.svg',
  gallery: [],
  video: null,
  previewColor: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #f59e0b 100%)',
  i18n: {
    ru: {
      title: 'Юпитер',
      tagline: 'Строительные материалы · микросервисы',
      description:
        'Интернет-магазин стройматериалов на микросервисной архитектуре: NestJS, Nuxt 3 SSR, Vue-админка и PostgreSQL.',
      longDescription:
        'E-commerce для регионального магазина строительных и отделочных материалов. Три backend-микросервиса (user, catalog, order), клиентский сайт с SSR и админ-панель для управления товарами, заказами и пользователями. Проект одновременно рабочий продукт и демонстрация full-stack навыков.',
      highlights: [
        'user-service: auth, корзина, избранное, feedback',
        'catalog-service: CRUD товаров, фильтры, upload изображений',
        'order-service: жизненный цикл заказа и admin API статусов',
        'Гибридная корзина: localStorage для гостя → PostgreSQL после логина',
        'Документация API-потоков в docs/, общие DTO в monorepo',
      ],
    },
    en: {
      title: 'Jupiter',
      tagline: 'Building materials · microservices',
      description:
        'Construction materials store on a microservices stack: NestJS, Nuxt 3 SSR, Vue admin, and PostgreSQL.',
      longDescription:
        'E-commerce for a regional building and finishing materials retailer. Three backend microservices (user, catalog, order), SSR client site, and admin panel for products, orders, and users. Both a working product and a full-stack portfolio showcase.',
      highlights: [
        'user-service: auth, cart, wishlist, feedback',
        'catalog-service: product CRUD, filters, image upload',
        'order-service: order lifecycle and admin status API',
        'Hybrid cart: guest localStorage → PostgreSQL after login',
        'API flow docs in docs/, shared DTOs in monorepo',
      ],
    },
  },
}
