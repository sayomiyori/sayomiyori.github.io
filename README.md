# Портфолио — Матвей Бурик

Одностраничное резюме-портфолио: современный UI/UX, анимации, стек, проекты со скриншотами.

## Демо

После публикации на GitHub Pages: `https://<username>.github.io/<repo>/`

## Локальный запуск

Открой `index.html` в браузере или подними локальный сервер:

```bash
# Python
python -m http.server 8080

# или npx
npx serve .
```

Открой http://localhost:8080

## Публикация на GitHub Pages

1. Создай репозиторий на GitHub (например `portfolio` или `<username>.github.io`).
2. Залей файлы из папки `portfolio/` в **корень** репо (чтобы `index.html` был в корне).
3. В репо: **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` (или `master`), папка `/ (root)`.
4. Сохрани — через 1–2 минуты сайт будет доступен по ссылке из шага 2.

Если репо называется `<username>.github.io`, ссылка будет: `https://<username>.github.io/`.

## Скриншоты проектов

Чтобы в карточках проектов отображались реальные скриншоты:

- Положи изображения в `assets/screenshots/`:
  - `nail-landing.jpg` — скриншот NailLanding
  - `cakes-landing.jpg` — скриншот CakesLanding
- Рекомендуемый размер: **800×500 px** (или пропорция 16:10).
- Если файлов нет, подставится плейсхолдер.

## Стек

HTML5, CSS3, Vanilla JavaScript. Шрифты: Outfit, JetBrains Mono (Google Fonts). Без сборки и фреймворков — подходит для GitHub Pages.
