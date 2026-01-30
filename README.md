# Сайт-визитка | Илья Шишкин Петрович

Senior Fullstack Developer — портфолио на Vue 3 + GSAP для GitHub Pages.

## Особенности

- **Horizontal scroll** — вертикальный скролл управляет горизонтальным движением панелей (GSAP ScrollTrigger)
- **Dark glassmorphism** — тёмная тема с полупрозрачными блоками и backdrop-blur
- **Magnetic анимации** — кнопки и карточки реагируют на приближение курсора
- **Typing effect** — имя и роль печатаются в Hero
- **Skills orbit** — круговое меню навыков с бесконечным вращением
- **Адаптивность** — fluid typography, 320px–4K

## Стек

- Vue 3 (Composition API) + Vite
- GSAP 3 (ScrollTrigger)
- Tailwind CSS

## Запуск

```bash
npm install
npm run dev
```

Откройте http://localhost:5173

## Сборка и публикация на GitHub Pages

**Репозиторий должен быть в корне проекта** (в папке `MySait`, где лежат `package.json`, `src/`, `docs/`), а не внутри `docs/`.

### Первый раз (настройка репо)

1. **Если раньше делали `git init` внутри папки `docs/`**, сначала удалите вложенный репозиторий (иначе будет ошибка `'docs/' does not have a commit checked out`):
   - В проводнике: включите отображение скрытых папок, зайдите в `docs/` и удалите папку **`.git`**.
   - Или в PowerShell из корня проекта: `Remove-Item -Recurse -Force docs\.git` (закройте перед этим VS Code / другие программы, использующие эту папку).
2. В корне проекта (папка MySait):
   ```bash
   git init
   git remote add origin https://github.com/ВАШ_ЛОГИН/ИМЯ_РЕПОЗИТОРИЯ.git
   ```
3. Сборка и первый коммит:
   ```bash
   npm run build
   git add .
   git commit -m "Initial: сайт-визитка"
   git branch -M main
   git push -u origin main
   ```
4. На GitHub: **Settings → Pages → Source** — ветка **main**, папка **/docs**. Сохранить.

### Обычный цикл (обновление сайта)

После любых правок в коде:

```bash
npm run build
git add .
git commit -m "Обновление контента"
git push
```

Папка `docs/` коммитится вместе с проектом — GitHub Pages подхватывает её и обновляет сайт. Ничего вручную копировать не нужно.

Используется относительный `base: './'` — сайт работает при любом имени репозитория.

**Если при открытии `docs/index.html` по двойному клику страница белая** — запустите локально: `npx serve docs` и откройте указанный адрес в браузере.

## Структура

- `src/components/` — секции (Hero, Projects, Skills, Experience, Contact) и магнитная кнопка
- `src/composables/` — useHorizontalScroll, useMagnetic
- `src/data/profile.js` — данные профиля и проектов (контакты замените на свои)
- **Фото:** положите свой аватар в `public/avatar.png` — он появится в Hero и в центре блока «Навыки»
