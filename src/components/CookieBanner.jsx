import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { X, Cookie } from 'lucide-react'

const STORAGE_KEY = 'rp:cookies-ack:v1'

/**
 * Cookie / personal-data notice. Shown once, remembered in localStorage.
 * Accept-only pattern — we don't run tracking cookies, so there's no
 * "decline" branch; the banner is informational + consent to the policy.
 */
export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // guard for SSR/older engines
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        // Slight delay so the banner appears after the hero settles.
        const t = setTimeout(() => setVisible(true), 900)
        return () => clearTimeout(t)
      }
    } catch {
      /* localStorage disabled — just don't show the banner */
    }
  }, [])

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()))
    } catch {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Уведомление о cookie"
      className="fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-3xl animate-fade-up rounded-2xl border border-accent/30 bg-ink/95 p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:inset-x-6 sm:p-6"
    >
      <div className="flex items-start gap-4">
        <div className="hidden shrink-0 rounded-xl border border-accent/40 bg-accent/10 p-2.5 text-accent sm:block">
          <Cookie size={20} />
        </div>

        <div className="flex-1 text-[13px] leading-relaxed text-white/75 sm:text-[14px]">
          <p>
            Сайт использует cookie для корректной работы и обрабатывает
            персональные данные, которые вы указываете в форме заявки.
            Продолжая пользоваться сайтом, вы соглашаетесь с{' '}
            <Link to="/privacy" className="text-accent underline hover:brightness-110">
              Политикой конфиденциальности
            </Link>
            .
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={accept}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-[13px] font-bold uppercase text-ink transition hover:brightness-110"
            >
              Понятно
            </button>
            <Link
              to="/privacy"
              className="text-[13px] font-semibold text-white/60 transition hover:text-accent"
            >
              Подробнее →
            </Link>
          </div>
        </div>

        <button
          onClick={accept}
          aria-label="Закрыть уведомление"
          className="shrink-0 rounded-lg p-1 text-white/40 transition hover:bg-white/5 hover:text-white"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  )
}
