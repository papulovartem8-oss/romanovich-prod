import { useState, useMemo, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, Check, CornerDownLeft, Send, Loader2, AlertCircle } from 'lucide-react'
import VideoBackground from '../components/VideoBackground.jsx'
import TypingText from '../components/TypingText.jsx'
import HoloDecor from '../components/HoloDecor.jsx'

const TELEGRAM = 'https://t.me/Rmnvchprod'
// Cloudflare Worker endpoint that forwards submissions to the Telegram bot.
// Falls back to email/DM if empty or the request fails.
const WORKER_URL = import.meta.env.VITE_WORKER_URL || ''

const questions = [
  {
    id: 'type',
    q: 'Что нужно разработать?',
    hint: 'Выберите формат проекта',
    type: 'choice',
    options: ['Лендинг', 'Многостраничный сайт', 'Веб-приложение', 'Пока не определился'],
  },
  {
    id: 'about',
    q: 'Расскажите о проекте',
    hint: 'Ниша, задача, что уже есть. В двух-трёх предложениях.',
    type: 'textarea',
    placeholder: 'Например: студия онлайн-курсов, нужен лендинг под запуск...',
  },
  {
    id: 'budget',
    q: 'Ориентировочный бюджет',
    hint: 'Поможет предложить оптимальное решение',
    type: 'choice',
    options: ['до 50 000 ₽', '50 000 – 150 000 ₽', '150 000 – 400 000 ₽', 'Более 400 000 ₽'],
  },
  {
    id: 'deadline',
    q: 'Когда нужен результат?',
    hint: 'Ориентировочные сроки запуска',
    type: 'choice',
    options: ['До 3 дней 🔥', 'Неделя', 'Месяц', '3 месяца'],
  },
  {
    id: 'name',
    q: 'Как вас зовут?',
    hint: 'Чтобы знать, к кому обращаться',
    type: 'text',
    placeholder: 'Имя',
  },
  {
    id: 'contact',
    q: 'Куда прислать ответ?',
    hint: 'Telegram, email или телефон — как удобнее',
    type: 'text',
    placeholder: '@username / email / телефон',
  },
]

export default function Brief() {
  const [step, setStep] = useState(0)
  const [dir, setDir] = useState(1)
  const [answers, setAnswers] = useState({})
  const [done, setDone] = useState(false)
  // 'idle' | 'sending' | 'sent' | 'error'
  const [submit, setSubmit] = useState('idle')
  const [website, setWebsite] = useState('') // honeypot for bots
  const inputRef = useRef(null)

  // Always-current mirror of answers so goNext() reads the freshest typed value
  // even if it fires before a state update has flushed to a new render.
  const answersRef = useRef(answers)
  answersRef.current = answers

  const total = questions.length
  const current = questions[step]
  const value = answers[current?.id] ?? ''
  const progress = Math.round(((done ? total : step) / total) * 100)

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [step])

  const canAdvance = useMemo(
    () => (current ? String(value).trim().length > 0 : false),
    [value, current]
  )

  const setValue = (v) => setAnswers((a) => ({ ...a, [current.id]: v }))

  // Accepts an optional explicit value so choice-buttons (which advance on a
  // timer, before their setState has flushed) don't read a stale `value`.
  const goNext = (val) => {
    const v = val !== undefined ? val : answersRef.current[current.id] ?? ''
    if (!String(v).trim()) return
    if (step === total - 1) {
      setDone(true)
      return
    }
    setDir(1)
    setStep((s) => s + 1)
  }

  const back = () => {
    if (step === 0) return
    setDir(-1)
    setStep((s) => s - 1)
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && (current.type !== 'textarea' || e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      goNext()
    }
  }

  // Fire submission to the Cloudflare Worker when we hit the done screen.
  const sendToBot = async () => {
    if (!WORKER_URL) return // no endpoint configured — user has fallback buttons
    setSubmit('sending')
    try {
      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...answersRef.current, website }),
      })
      const data = await res.json().catch(() => ({}))
      setSubmit(res.ok && data.ok ? 'sent' : 'error')
    } catch {
      setSubmit('error')
    }
  }

  useEffect(() => {
    if (done && submit === 'idle') sendToBot()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done])

  const mailtoHref = useMemo(() => {
    const body = questions
      .map((q) => `${q.q}\n${answers[q.id] || '—'}`)
      .join('\n\n')
    return `mailto:papulovartem8@gmail.com?subject=${encodeURIComponent(
      'Новая заявка — Romanovich Prod'
    )}&body=${encodeURIComponent(body)}`
  }, [answers])

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <VideoBackground />
      <HoloDecor variant="c" grid aura scanlines />

      {/* progress bar */}
      <div className="fixed inset-x-0 top-0 z-40 h-1 bg-white/5">
        <div
          className="h-full bg-accent transition-[width] duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="relative z-10 flex flex-1 items-center justify-center px-6 py-28">
        <div className="w-full max-w-2xl">
          <div>
            {!done ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: dir > 0 ? 40 : -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-3 flex items-center gap-3 font-mono text-[12px] text-accent">
                  <span>
                    {String(step + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>

                <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                  {current.q}
                </h2>
                <p className="mt-3 text-[14px] text-white/55">{current.hint}</p>

                <div className="mt-8">
                  {current.type === 'choice' && (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {current.options.map((opt) => {
                        const active = value === opt
                        return (
                          <button
                            key={opt}
                            onClick={() => {
                              setValue(opt)
                              setTimeout(() => goNext(opt), 220)
                            }}
                            className={`group flex items-center justify-between rounded-xl border px-5 py-4 text-left text-[15px] transition ${
                              active
                                ? 'border-accent bg-accent/10 text-white'
                                : 'border-white/12 bg-white/[0.02] text-white/80 hover:border-accent/50 hover:bg-white/[0.05]'
                            }`}
                          >
                            {opt}
                            <span
                              className={`grid h-6 w-6 place-items-center rounded-md border text-accent transition ${
                                active
                                  ? 'border-accent bg-accent text-ink'
                                  : 'border-white/15 opacity-0 group-hover:opacity-100'
                              }`}
                            >
                              <Check size={14} />
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  )}

                  {current.type === 'text' && (
                    <input
                      ref={inputRef}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      onKeyDown={onKeyDown}
                      placeholder={current.placeholder}
                      className="w-full border-b border-white/20 bg-transparent pb-3 text-2xl text-white placeholder-white/25 outline-none transition focus:border-accent"
                    />
                  )}

                  {current.type === 'textarea' && (
                    <textarea
                      ref={inputRef}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      onKeyDown={onKeyDown}
                      rows={4}
                      placeholder={current.placeholder}
                      className="w-full resize-none rounded-xl border border-white/15 bg-white/[0.02] p-4 text-[17px] text-white placeholder-white/25 outline-none transition focus:border-accent"
                    />
                  )}
                </div>

                <div className="mt-8 flex items-center gap-4">
                  {step > 0 && (
                    <button
                      onClick={back}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[14px] text-white/70 transition hover:border-white/40 hover:text-white"
                    >
                      <ArrowLeft size={16} /> Назад
                    </button>
                  )}
                  <button
                    onClick={() => goNext()}
                    disabled={!canAdvance}
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-[14px] font-bold uppercase text-ink transition enabled:hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    {step === total - 1 ? 'Завершить' : 'Далее'}
                    <ArrowRight
                      size={17}
                      className="transition-transform group-enabled:group-hover:translate-x-1"
                    />
                  </button>

                  {current.type !== 'choice' && (
                    <span className="hidden items-center gap-1.5 font-mono text-[11px] text-white/35 sm:flex">
                      <CornerDownLeft size={13} /> Enter
                    </span>
                  )}
                </div>

                {/* На последнем шаге — юр-уведомление о согласии на обработку */}
                {step === total - 1 && (
                  <p className="mt-5 max-w-md text-[11px] leading-relaxed text-white/40">
                    Нажимая «Завершить», вы соглашаетесь с{' '}
                    <Link
                      to="/privacy"
                      className="text-white/60 underline underline-offset-2 transition hover:text-accent"
                    >
                      Политикой конфиденциальности
                    </Link>{' '}
                    и даёте согласие на обработку персональных данных.
                  </p>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                {/* honeypot — hidden from users, bots often fill it */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[-9999px] h-0 w-0 opacity-0"
                />

                <div
                  className={`mx-auto mb-8 grid h-20 w-20 place-items-center rounded-2xl border transition-colors ${
                    submit === 'error'
                      ? 'border-amber-400/40 bg-amber-400/10 text-amber-300'
                      : 'border-accent/40 bg-accent/10 text-accent'
                  }`}
                >
                  {submit === 'sending' ? (
                    <Loader2 size={40} className="animate-spin" />
                  ) : submit === 'error' ? (
                    <AlertCircle size={40} />
                  ) : (
                    <Check size={40} />
                  )}
                </div>
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  <TypingText
                    text={
                      submit === 'sending'
                        ? 'Отправляем…'
                        : submit === 'sent'
                          ? 'Заявка отправлена!'
                          : submit === 'error'
                            ? 'Не удалось отправить'
                            : 'Заявка собрана!'
                    }
                    speed={45}
                    caret={false}
                    immediate
                  />
                </h2>
                <p className="mx-auto mt-4 max-w-content text-[15px] text-white/65">
                  {submit === 'sent' ? (
                    <>
                      {answers.name ? `${answers.name}, ` : ''}
                      всё получил в Telegram. Свяжусь в ближайшее время — обычно
                      в течение дня.
                    </>
                  ) : submit === 'error' ? (
                    <>
                      Автоматическая отправка не сработала. Пришлите ответы одним
                      из способов ниже — они уже собраны.
                    </>
                  ) : submit === 'sending' ? (
                    <>Пара секунд — передаю ваши ответы.</>
                  ) : (
                    <>
                      {answers.name ? `${answers.name}, ` : ''}осталось отправить.
                      Выберите удобный способ ниже.
                    </>
                  )}
                </p>

                <div className="mt-9 flex flex-wrap justify-center gap-4">
                  {submit === 'error' && (
                    <button
                      onClick={sendToBot}
                      className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-[14px] font-bold uppercase text-ink transition hover:brightness-110"
                    >
                      Попробовать снова
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  )}
                  <a
                    href={mailtoHref}
                    className={`group inline-flex items-center gap-2 rounded-full px-8 py-4 text-[14px] font-bold uppercase transition ${
                      submit === 'sent' || submit === 'error'
                        ? 'border border-white/15 text-white/80 hover:border-accent/50 hover:text-white'
                        : 'bg-accent text-ink hover:brightness-110'
                    }`}
                  >
                    Отправить на почту
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                  <a
                    href={TELEGRAM}
                    target="_blank"
                    rel="noopener"
                    className="group inline-flex items-center gap-2 rounded-full border border-accent/40 px-8 py-4 text-[14px] font-bold uppercase text-accent transition hover:bg-accent hover:text-ink"
                  >
                    <Send size={17} className="transition-transform group-hover:-translate-y-0.5" />
                    Написать в Telegram
                  </a>
                  <Link
                    to="/"
                    className="inline-flex items-center rounded-full border border-white/15 px-8 py-4 text-[14px] font-semibold text-white/80 transition hover:border-accent/50 hover:text-white"
                  >
                    На главную
                  </Link>
                </div>

                {/* summary */}
                <div className="mx-auto mt-12 max-w-md space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-left">
                  {questions.map((q) => (
                    <div key={q.id} className="flex gap-3 text-[13px]">
                      <span className="w-32 shrink-0 text-white/40">{q.q}</span>
                      <span className="text-white/80">{answers[q.id] || '—'}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
