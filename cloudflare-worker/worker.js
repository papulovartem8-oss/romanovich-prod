/**
 * Romanovich Prod — Telegram lead forwarder.
 *
 * Deploy on Cloudflare Workers with two secrets set in the dashboard:
 *   BOT_TOKEN — the Telegram bot token from @BotFather
 *   CHAT_ID   — the Telegram chat id that should receive leads
 *
 * The frontend POSTs the questionnaire answers as JSON to this Worker; the
 * Worker builds a nice HTML message and sends it via the Bot API. The token
 * never leaves the Worker environment, so it is not exposed to visitors.
 */

const ALLOWED_ORIGINS = [
  'https://romanovich-prod.ru',
  'https://www.romanovich-prod.ru',
  'https://papulovartem8-oss.github.io',
  'http://localhost:5173',
  'http://localhost:5174',
  'http://127.0.0.1:5173',
]

const CORS_HEADERS = (origin) => ({
  'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
})

const json = (body, status, origin) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS_HEADERS(origin) },
  })

// Escape HTML for Telegram's HTML parse_mode
const esc = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

// Very light per-IP rate limit: max 5 submissions / 10 minutes.
async function limited(env, ip) {
  if (!env.RATE_LIMIT) return false // KV not configured — skip
  const key = `rl:${ip}`
  const n = parseInt((await env.RATE_LIMIT.get(key)) || '0', 10)
  if (n >= 5) return true
  await env.RATE_LIMIT.put(key, String(n + 1), { expirationTtl: 600 })
  return false
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || ''

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS(origin) })
    }
    if (request.method !== 'POST') {
      return json({ ok: false, error: 'Method not allowed' }, 405, origin)
    }

    let payload
    try {
      payload = await request.json()
    } catch {
      return json({ ok: false, error: 'Invalid JSON' }, 400, origin)
    }

    // Honeypot — bots often fill hidden fields.
    if (payload.website) {
      return json({ ok: true }, 200, origin) // pretend success, silently drop
    }

    const ip = request.headers.get('CF-Connecting-IP') || 'unknown'
    if (await limited(env, ip)) {
      return json({ ok: false, error: 'Too many requests' }, 429, origin)
    }

    const {
      type = '—',
      about = '—',
      budget = '—',
      deadline = '—',
      name = '—',
      contact = '—',
    } = payload

    const text =
      `<b>🟢 Новая заявка — Romanovich Prod</b>\n` +
      `\n` +
      `<b>Что нужно:</b> ${esc(type)}\n` +
      `<b>О проекте:</b> ${esc(about)}\n` +
      `<b>Бюджет:</b> ${esc(budget)}\n` +
      `<b>Сроки:</b> ${esc(deadline)}\n` +
      `\n` +
      `<b>Имя:</b> ${esc(name)}\n` +
      `<b>Контакт:</b> ${esc(contact)}\n` +
      `\n` +
      `<i>IP: ${esc(ip)} · ${new Date().toISOString()}</i>`

    const tg = await fetch(
      `https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: env.CHAT_ID,
          text,
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        }),
      }
    )

    if (!tg.ok) {
      const detail = await tg.text().catch(() => '')
      return json({ ok: false, error: 'Telegram error', detail }, 502, origin)
    }

    return json({ ok: true }, 200, origin)
  },
}
