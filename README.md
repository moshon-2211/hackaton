# Хакатон Инноваций — лендинг

Одностраничный сайт на **React + Vite + React Router**.

## Запуск

```bash
npm install      # установить зависимости
npm run dev      # запустить дев-сервер (http://localhost:5173)
```

## Сборка для продакшена

```bash
npm run build    # собрать в папку dist/
npm run preview  # посмотреть собранную версию
```

## Структура

```
hackaton-site/
├─ index.html                  # точка входа Vite
├─ vite.config.js
├─ package.json
├─ public/
│  └─ img/logo/                # логотипы
│     ├─ no_ilmhona_white_logo_small_new.svg   ← замени на настоящий логотип ilmhona
│     ├─ freedom_it_hub_horizontal.png
│     └─ freedom_it_hub_vertical.png
└─ src/
   ├─ main.jsx                 # подключение роутера
   ├─ index.css                # глобальный сброс стилей
   └─ pages/
      ├─ HackatonPage.jsx      # сама страница
      └─ hackaton.css          # стили страницы

```

## Заметки

- Логотип **ilmhona** — временный текстовый SVG-плейсхолдер. Положи настоящий файл по тому же пути.
- Логотипы **freedom it hub** добавлены из присланных PNG (в дизайне используется встроенная SVG-иконка, PNG лежат в `public/` про запас).
- Шрифт **Montserrat** подключён через Google Fonts в `index.html`.
