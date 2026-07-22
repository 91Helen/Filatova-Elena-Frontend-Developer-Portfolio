<h1>
  <img src="https://github.com/91Helen/portfolio-vite/blob/main/logo-light-bg.png?raw=true" width="70" style="vertical-align: middle;"> 
 Elena Filatova — Frontend Developer Portfolio
</h1>

![React](https://img.shields.io/badge/react-%2320232d.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![GSAP](https://img.shields.io/badge/GSAP-green?style=for-the-badge&logo=greensock&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

Персональное портфолио, построенное на React 18 с архитектурой **Feature-Sliced Design (FSD)**. Полностью адаптивный, многоязычный (EN/RU) сайт с плавными GSAP-анимациями, динамической загрузкой контента и оптимизированной структурой кода.

🔗 **Live demo:** [filatova-elena-frontend-dev-portfolio.netlify.app)

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

Каждый виджет инкапсулирует собственную логику, стили и разметку, что упрощает поддержку и позволяет переиспользовать компоненты независимо друг от друга.

---

## 🌐 Локализация

Переводы вынесены в `public/locales/{en,ru}/translation.json` и подгружаются асинхронно через `i18next-http-backend`. Переключение языка доступно прямо в навигационном меню без перезагрузки страницы.

---

## 🚀 Запуск проекта локально

```bash
# Клонировать репозиторий
git clone https://github.com/91Helen/Filatova-Elena-Frontend-Developer-Portfolio.git

# Перейти в директорию проекта
cd Filatova-Elena-Frontend-Developer-Portfolio

# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev
```
Проект будет доступен по адресу `http://localhost:3000`.

### Другие команды

```bash
npm run build     # сборка production-версии
npm run preview   # предпросмотр production-сборки
npm run lint      # проверка кода ESLint
```

---

## 📬 Контакты

- **Telegram:** [@elenafeela](https://t.me/elenafeela)
- **Instagram:** [@elena_feela_](https://www.instagram.com/elena_feela_/)
- **Email:** filatovae047@gmail.com

---
<p align="center">
  <strong>With love, Elena ❤️</strong>
</p>
