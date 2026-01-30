ТЕХНИЧЕСКОЕ ЗАДАНИЕ для Cursor AI
Сайт-визитка Senior Fullstack Developer | Илья Шишкин Петрович
🎯 ЦЕЛЬ
Создать WOW-эффект сайт-портфолио на GitHub Pages (только frontend, без бэкенда). Рекрутер заходит → "Этот парень senior level, enterprise мышление, наймем!"

🚀 ОСОБЕННОСТИ (НЕ как у всех)
text
❌ Обычный скролл вниз
✅ Horizontal scroll + magnetic snapping карточек
❌ Статичные блоки  
✅ Parallax 3D эффекты + GSAP morphing
❌ Обычные hover
✅ Framer Motion spring анимации + glassmorphism
❌ Меню сверху
✅ Floating magnetic nav (прилипает к курсору)
❌ Мобильный = уменьшенная версия
✅ Полная fluid адаптивность 320px-4K
📱 АДАПТИВНОСТЬ (100% резинка)
Fluid typography: clamp(1rem, 4vw, 3rem)

CSS Grid + Container queries

Mobile first → tablet → desktop

4K/Retina поддержка

PWA ready (manifest.json)

🎨 ДИЗАЙН-СИСТЕМА (Dark Mode Enterprise)
css
--primary: #6366f1  /* indigo */
--accent:  #ec4899  /* pink */
--glass: rgba(15, 23, 42, 0.8)
--gradient: linear-gradient(135deg, #1e1b4b, #3b82f6)
font: 'Inter', 'SF Mono' (code)
🏗️ СТРУКТУРА (Horizontal Canvas)
text
[Hero Canvas - Full viewport]
   → Magnetic cursor + Typing effect name
   → 3D model floating (Three.js low-poly dev)
   
[Projects Track - Horizontal scroll] 
   → 4 карточки с magnetic hover + parallax tilt
   → Glassmorphism backdrop blur
   
[Skills Orbit - Circular menu]
   → Frontend/Backend/Mobile вращаются вокруг avatar
   
[Experience Timeline - Magnetic timeline]
   → Вертикальная линия с floating cards
   
[Contact Portal - Final CTA]
   → Telegram icon → scales + glow on hover
📁 КОНТЕНТ ДАННЫЕ (скопируйте в код)
javascript
const profile = {
  name: "Илья Шишкин Петрович",
  role: "Senior Fullstack Developer",
  age: 22,
  location: "Пензенская область, Россия",
  hero: "3+ года Vue.js/Nest.js/Flutter. Создаю масштабируемые enterprise системы. Remote senior 300-400k₽.",
  experience: [
    {title: "Senior Fullstack", duration: "1 год (6мес тимлид)", team: "до 5 человек"},
    {title: "Middle Developer", duration: "2 года", team: "командная работа"}
  ],
  skills: {
    frontend: ["Vue.js (2г, 10 проектов)", "React (2 проекта)", "SCSS (advanced)"],
    backend: ["Nest.js (1г, 5 проектов)", "Laravel (3 проекта)", "PostgreSQL/MySQL/Redis"],
    mobile: ["Flutter (0.5г, 1 проект)"],
    tools: ["Docker", "Git", "VS Code", "Linux"]
  },
  contacts: {
    telegram: "t.me/yourusername", // ← ЗАМЕНИТЕ
    github: "github.com/yourusername",   // ← ЗАМЕНИТЕ
    email: "your.email@example.com"     // ← ЗАМЕНИТЕ
  }
}
🛠️ ПРОЕКТЫ (Шаблоны для будущего заполнения)
javascript
const projects = [
  {
    title: "Real-time Dashboard Analytics",
    description: "E-commerce аналитика 100k метрик/мин",
    tech: ["Vue3", "Nest.js", "Redis Pub/Sub", "PostgreSQL"],
    live: "#", // vercel.app
    github: "#" // github.com
  },
  // ... 3 других шаблона
]
⚡ ТЕХНИЧЕСКИЕ ТРЕБОВАНИЯ
Стек (только frontend):
text
Vue 3 (Vite) + GSAP 3 + Framer Motion
Three.js (lightweight) + Lenis (smooth scroll)
TailwindCSS + Heroicons + Vite PWA
Vitest (опционально)
АНИМАЦИИ (WOW эффекты):
text
1. Magnetic cursor (follow + scale icons)
2. Horizontal Lenis scroll с snapping
3. GSAP ScrollTrigger parallax (3D tilt)
4. Typing effect (hero name + role)
5. Glassmorphism blur + backdrop-filter
6. Floating navbar (cursor proximity)
7. Project cards: hover → 3D flip + tech badges fly-in
8. Skills: circular orbit animation (infinite)
MOBILE:
text
- Touch-friendly magnetic hover (proximity)
- Swipe horizontal scroll
- Clamp typography + spacing
- Lazy load Three.js models
📦 BUILD & DEPLOY
bash
npm create vite@latest portfolio -- --template vue
cd portfolio
npm i gsap lenis framer-motion three @heroicons/vue tailwindcss
npm run dev  # http://localhost:5173
# → Deploy: GitHub Pages (docs folder)
🎯 ПРИМЕР КОДА АНИМАЦИЙ (вставьте в компоненты)
text
<!-- Magnetic Button -->
<div 
  class="magnetic" 
  @mousemove="magneticMove"
  @mouseleave="magneticReturn"
>
  Telegram →
</div>

<!-- Hero Typing -->
<h1 class="typing">{{ currentText }}</h1>
<script>
let i = 0;
const text = "Илья Шишкин Петрович";
function typeWriter() {
  if (i < text.length) {
    currentText = text.substring(0, i+1);
    i++;
    setTimeout(typeWriter, 100);
  }
}
</script>
✅ РЕЗУЛЬТАТ
Сайт где:

Рекрутер заходит → видит 3D анимированного dev'а

Horizontal swipe → enterprise проекты с live демо

Hover на Telegram → магнитный эффект + glow

Mobile: такой же WOW как desktop

60fps на любом устройстве