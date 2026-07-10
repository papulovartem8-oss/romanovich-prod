# Romanovich Prod

Личный двухстраничный лендинг Артёма Романовича — разработка сайтов, лендингов и веб-приложений под ключ. Тёмный «digital» стиль: видео-герой, эффект печатающегося текста, зелёные голограммы и «liquid glass».

## Стек

- **Vite** + **React 18**
- **Tailwind CSS 3**
- **Framer Motion** — анимации и переходы
- **hls.js** — HLS видео-фон (ленивая загрузка)
- **lucide-react** — иконки
- **React Router** — маршрутизация

## Страницы

- `/` — обо мне, услуги, процесс, CTA
- `/brief` — анкета-заявка по одному вопросу за раз с плавными переходами

## Запуск

```bash
npm install
npm run dev      # dev-сервер
npm run build    # production-сборка в dist/
npm run preview  # предпросмотр сборки
```

## Особенности

- Полноэкранный HLS видео-фон (Mux) с оверлеями, сеткой и glow
- «Liquid glass» карточка с рамкой через `mask-composite`
- Печатающийся текст (`TypingText`), scroll-reveal (`Reveal`)
- Голографический слой (`HoloDecor`): орбы, частицы, сетки, сканлайны
- Code-splitting: `hls.js` и страница `/brief` вынесены в ленивые чанки

---

© Артём Романович · [papulovartem8@gmail.com](mailto:papulovartem8@gmail.com)
