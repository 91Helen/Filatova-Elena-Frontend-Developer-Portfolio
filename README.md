#  <img src="https://github.com/91Helen/portfolio-vite/blob/main/logo-light-bg.png?raw=true" width="70" style="vertical-align: middle;"   Elena Filatova — Frontend Developer Portfolio

Персональное портфолио, построенное на React 18 с архитектурой **Feature-Sliced Design (FSD)**. Полностью адаптивный, многоязычный (EN/RU) сайт с плавными GSAP-анимациями, динамической загрузкой контента и оптимизированной структурой кода.

🔗 **Live demo:** [elena-filatova-portfolio.netlify.app](https://elena-filatova-portfolio.netlify.app)

---

## ✨ Особенности

- 🏗 **Feature-Sliced Design** — модульная, масштабируемая архитектура (`app → pages → widgets → shared`)
- 🌍 **Интернационализация (i18n)** — переключение между английским и русским языком в реальном времени
- 🎬 **GSAP-анимации** — плавные интро-заставки, scroll-triggered появление элементов
- 📱 **Полная адаптивность** — от 320px до 1700px+, с отдельной проработкой мобильного меню
- ⚡ **Ленивая загрузка (lazy loading)** — код-сплиттинг страниц через `React.lazy` + `Suspense`
- 🎨 **CSS Modules** — изолированные стили компонентов без конфликтов имён классов
- 📩 **Рабочая форма обратной связи** — интеграция с Formspree + уведомления через SweetAlert2
- 🖼 **Intersection Observer** — кастомный хук для scroll-reveal анимаций без сторонних зависимостей

---

## 🛠 Стек технологий

**Core:**
- React 18
- Vite 8
- React Router DOM 7

**Стилизация:**
- CSS Modules
- Bootstrap 5 / React Bootstrap
- Animate.css

**Анимации:**
- GSAP (GreenSock Animation Platform) + ScrollTrigger

**Интернационализация:**
- i18next
- react-i18next
- i18next-http-backend
- i18next-browser-languagedetector

**UX / Формы:**
- SweetAlert2 (уведомления)
- React Scroll (плавный скролл по секциям)
- React Icons / React Bootstrap Icons

**Инструменты разработки:**
- ESLint
- Vite Plugin React

---

## 🏛 Архитектура (Feature-Sliced Design)
