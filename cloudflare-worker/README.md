# Telegram lead forwarder — Cloudflare Worker

Прокси между статическим фронтом (GitHub Pages) и Telegram Bot API.
Токен бота живёт как секрет в окружении Worker'а и никогда не попадает в код,
который получает браузер.

## Что нужно перед началом

- Аккаунт Cloudflare (бесплатный, https://dash.cloudflare.com/sign-up)
- Токен бота от `@BotFather`
- `chat_id`, куда будут падать заявки (свой личный или групповой)

## Деплой через дашборд (быстрее всего)

1. Заходишь на https://dash.cloudflare.com → раздел **Workers & Pages** → **Create** → **Create Worker**.
2. Даёшь имя, например `romanovich-leads`. Cloudflare предложит URL вида `romanovich-leads.<твой-суб>.workers.dev` — это и есть эндпоинт для фронта.
3. Нажимаешь **Deploy** (пропускаем заглушку). Дальше **Edit code**.
4. Всё содержимое `worker.js` из этого каталога — копируешь в редактор и жмёшь **Save and Deploy**.
5. Возвращаешься к воркеру → вкладка **Settings** → **Variables** → **Add variable**:
   - `BOT_TOKEN` — токен бота от BotFather. Обязательно жмёшь **Encrypt**.
   - `CHAT_ID` — твой chat_id (число). **Encrypt** тоже.
6. (Опционально, но рекомендую) там же в **Settings** → **Bindings** → **KV Namespace**:
   - Сначала: **Workers & Pages** → **KV** → **Create namespace**, имя `RATE_LIMIT`.
   - Затем в воркере привяжи это пространство под именем `RATE_LIMIT`. Тогда встроится защита от спама (5 отправок / 10 минут с одного IP).
7. Копируешь публичный URL воркера (в разделе **Triggers** → **Routes** видно).

## Подключение к фронту

Создаёшь файл `.env.local` в корне проекта:

```
VITE_WORKER_URL=https://romanovich-leads.<твой-суб>.workers.dev
```

Локально: `npm run dev` — анкета уже пойдёт через Worker.

Прод (GitHub Pages): добавляешь секрет **`VITE_WORKER_URL`** в
`Settings → Secrets and variables → Actions` репозитория. Workflow (`.github/workflows/deploy.yml`)
пробросит его в билд.

## Проверка

`curl` тебе в помощь:

```bash
curl -X POST https://<твой-worker>.workers.dev \
  -H "Content-Type: application/json" \
  -d '{"type":"Лендинг","about":"тест","budget":"—","deadline":"—","name":"Test","contact":"@test"}'
```

Должен прийти ответ `{"ok":true}` и сообщение в Telegram.

## Безопасность

- Токен от BotFather после первого показа считай засветившимся — сбрось его
  командой `/revoke` в BotFather и вбей свежий как секрет в CF.
- Разрешённые Origin'ы указаны в `ALLOWED_ORIGINS` внутри `worker.js`.
- Пустой рейт-лимит (без KV) означает «неограниченно» — включай KV, если сайт
  открытый.
