import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  MonitorSmartphone,
  LayoutTemplate,
  AppWindow,
  Sparkles,
  Search,
  PenTool,
  Code2,
  Rocket,
  ChevronDown,
} from 'lucide-react'
import VideoBackground from '../components/VideoBackground.jsx'
import LiquidGlassCard from '../components/LiquidGlassCard.jsx'
import TypingText from '../components/TypingText.jsx'
import Reveal from '../components/Reveal.jsx'
import HoloDecor from '../components/HoloDecor.jsx'

const services = [
  {
    icon: LayoutTemplate,
    title: 'Лендинги',
    desc: 'Одностраничники, которые превращают трафик в заявки. Сильный оффер, чистая структура, быстрая загрузка.',
    tag: 'от 3 дней',
  },
  {
    icon: MonitorSmartphone,
    title: 'Сайты под ключ',
    desc: 'Многостраничные корпоративные и продуктовые сайты с CMS, аналитикой и SEO-фундаментом.',
    tag: 'от 2 недель',
  },
  {
    icon: AppWindow,
    title: 'Веб-приложения',
    desc: 'Личные кабинеты, дашборды и сервисы на React. Продуманная логика и интерфейс без компромиссов.',
    tag: 'по спринтам',
  },
]

const process = [
  { icon: Search, step: '01', title: 'Бриф и анализ', desc: 'Разбираю задачу, нишу и конкурентов. Фиксируем цель и метрику успеха.' },
  { icon: PenTool, step: '02', title: 'Дизайн', desc: 'Прототип и визуал в единой системе. Согласуем до строчки кода.' },
  { icon: Code2, step: '03', title: 'Разработка', desc: 'Чистый код, адаптив, анимации и скорость. Всё, как в макете — пиксель в пиксель.' },
  { icon: Rocket, step: '04', title: 'Запуск', desc: 'Деплой, аналитика, домен. Передаю проект и остаюсь на связи.' },
]

const stats = [
  { value: '5+', label: 'лет в разработке' },
  { value: '40+', label: 'запущенных проектов' },
  { value: '100%', label: 'проектов до результата' },
]

// Кейсы. Пока один — просто добавьте новые объекты в массив, чтобы расширить.
const cases = [
  {
    n: '01',
    tag: 'Лендинг',
    year: '2025',
    title: 'Лендинг для студии услуг',
    desc: 'Продающий одностраничник под запуск: сильный оффер, чистая структура, быстрая загрузка и форма заявки в пару кликов.',
    stack: ['React', 'Tailwind', 'Framer Motion'],
    metric: '+64%',
    metricLabel: 'рост заявок за месяц',
    href: '#',
  },
]

export default function Home() {
  return (
    <main className="relative">
      <VideoBackground />

      {/* ---------------- HERO ---------------- */}
      <section className="relative flex min-h-screen items-center">
        <HoloDecor variant="c" grid aura scanlines={false} particles={5} />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 pt-52 sm:pt-28">
          {/* Floating liquid glass card, lifted above the headline */}
          <div className="mb-2 flex">
            <LiquidGlassCard />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-5 font-jakarta text-[11px] font-bold uppercase tracking-[0.25em] text-accent"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
            Сайты, лендинги и приложения под ключ
          </motion.p>

          <h1 className="max-w-4xl text-[40px] font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[72px]">
            <TypingText
              text="Запускаю проекты,"
              speed={40}
              caret={false}
              immediate
              className="block"
            />
            <span className="block">
              которые{' '}
              <span className="font-serif italic normal-case tracking-normal text-accent text-glow">
                продают
              </span>
              <span className="text-accent">.</span>
            </span>
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/65">
            Артём Романович — собираю сайты и приложения, которые приносят
            заявки и продажи.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/brief"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[14px] font-bold uppercase tracking-wide text-ink transition hover:brightness-110"
            >
              Обсудить проект
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-[14px] font-semibold text-white/80 transition hover:border-accent/50 hover:text-white"
            >
              Что я делаю
            </a>
          </div>
        </div>

        {/* scroll cue */}
        <a
          href="#services"
          aria-label="Прокрутить вниз"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition hover:text-accent md:flex"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
            scroll
          </span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section className="relative overflow-hidden border-t border-white/5 bg-ink/80 py-24 backdrop-blur-sm">
        <HoloDecor variant="b" aura scanlines={false} />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="mb-4 font-jakarta text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              [ обо мне ]
            </p>
            <h2 className="max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
              Разработчик, который думает как{' '}
              <span className="font-serif italic text-accent">маркетолог</span>
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/65">
              Я не просто верстаю страницы — я собираю продукты, которые решают
              бизнес-задачу. Каждый экран отвечает на вопрос «зачем он здесь» и
              ведёт пользователя к целевому действию. Работаю без посредников:
              вы общаетесь напрямую с тем, кто пишет код.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-extrabold text-accent">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[12px] leading-snug text-white/50">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="terminal-frame relative overflow-hidden p-6">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="h-3 w-3 rounded-full bg-accent/70" />
              <span className="ml-3 font-mono text-[11px] text-white/40">
                about.tsx
              </span>
            </div>
            <pre className="whitespace-pre-wrap font-mono text-[12.5px] leading-relaxed text-white/70">
              <span className="text-accent">const</span> artem = {'{'}
              {'\n'}  name: <span className="text-accent">'Артём Романович'</span>,
              {'\n'}  role: <span className="text-accent">'Full-stack developer'</span>,
              {'\n'}  stack: [<span className="text-accent">'React'</span>, <span className="text-accent">'Node'</span>, <span className="text-accent">'Tailwind'</span>],
              {'\n'}  focus: <span className="text-accent">'скорость + конверсия'</span>,
              {'\n'}  status: <span className="text-accent">'available'</span>,
              {'\n'}
              {'}'}
            </pre>
            <Sparkles className="absolute -bottom-6 -right-6 h-28 w-28 text-accent/10" />
          </Reveal>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section id="services" className="relative scroll-mt-24 overflow-hidden bg-ink py-24">
        <HoloDecor variant="c" aura scanlines={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-4 font-jakarta text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
                [ услуги ]
              </p>
              <h2 className="max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl">
                Что я делаю
              </h2>
            </div>
            <p className="max-w-sm text-[14px] text-white/55">
              Три направления, один стандарт качества. Выберите формат — остальное
              обсудим в брифе.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
                className="terminal-frame holo-shimmer group relative flex flex-col overflow-hidden p-7 transition hover:border-accent/40 hover:shadow-[0_0_40px_-8px_rgba(94,210,156,0.35)]"
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-accent transition group-hover:border-accent/40">
                  <s.icon size={22} />
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <span className="font-mono text-[11px] text-white/40">
                    {s.tag}
                  </span>
                </div>
                <p className="text-[14px] leading-relaxed text-white/60">
                  {s.desc}
                </p>
                <Link
                  to="/brief"
                  className="mt-6 inline-flex items-center gap-1 text-[13px] font-semibold text-accent opacity-0 transition group-hover:opacity-100"
                >
                  Заказать <ArrowUpRight size={15} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CASES ---------------- */}
      <section
        id="cases"
        className="relative scroll-mt-24 overflow-hidden border-t border-white/5 bg-ink py-24"
      >
        <HoloDecor variant="b" aura scanlines={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-4 font-jakarta text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
                [ кейсы ]
              </p>
              <h2 className="max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl">
                Избранные работы
              </h2>
            </div>
            <p className="max-w-sm text-[14px] text-white/55">
              Проекты, которыми горжусь. Скоро здесь будет больше.
            </p>
          </div>

          {cases.map((c) => (
            <Reveal key={c.n}>
              <article className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] lg:grid-cols-2">
                {/* left: описание */}
                <div className="flex flex-col justify-between gap-8 p-8 sm:p-10">
                  <div>
                    <div className="mb-6 flex items-center gap-3 font-mono text-[12px] text-accent">
                      <span>{c.n}</span>
                      <span className="h-px w-8 bg-accent/40" />
                      <span className="text-white/40">
                        {c.tag} · {c.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold sm:text-3xl">{c.title}</h3>
                    <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/60">
                      {c.desc}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {c.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-white/60"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <div className="holo-text text-4xl font-extrabold">
                        {c.metric}
                      </div>
                      <div className="mt-1 text-[12px] text-white/50">
                        {c.metricLabel}
                      </div>
                    </div>
                    <a
                      href={c.href}
                      className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-5 py-2.5 text-[13px] font-semibold text-accent transition hover:bg-accent hover:text-ink"
                    >
                      Смотреть <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>

                {/* right: макет-превью (плейсхолдер — замените на скриншот проекта) */}
                <div className="relative min-h-[300px] overflow-hidden border-t border-white/10 bg-[#0a1512] p-6 lg:border-l lg:border-t-0">
                  <div className="holo-shimmer relative h-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0d2a22] via-[#0a1512] to-[#071b17]">
                    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
                      <span className="ml-3 rounded bg-white/5 px-3 py-0.5 font-mono text-[10px] text-white/40">
                        project.ru
                      </span>
                    </div>
                    <div className="space-y-3 p-5">
                      <div className="h-3 w-1/3 rounded bg-accent/50" />
                      <div className="h-6 w-4/5 rounded bg-white/15" />
                      <div className="h-6 w-3/5 rounded bg-white/10" />
                      <div className="mt-4 h-8 w-28 rounded-full bg-accent/70" />
                      <div className="mt-6 grid grid-cols-3 gap-3">
                        <div className="h-16 rounded-lg border border-white/10 bg-white/5" />
                        <div className="h-16 rounded-lg border border-white/10 bg-white/5" />
                        <div className="h-16 rounded-lg border border-white/10 bg-white/5" />
                      </div>
                    </div>
                    <div className="pointer-events-none absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-accent/25 blur-[60px]" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section
        id="process"
        className="relative scroll-mt-24 overflow-hidden border-t border-white/5 bg-ink py-24"
      >
        <HoloDecor variant="a" grid aura scanlines={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <p className="mb-4 font-jakarta text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
            [ процесс ]
          </p>
          <h2 className="mb-14 max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Как проходит работа
          </h2>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-ink p-7 transition hover:bg-white/[0.03]"
              >
                <div className="mb-6 font-mono text-[13px] text-accent">
                  {p.step}
                </div>
                <p.icon
                  className="mb-4 text-white/70 transition group-hover:text-accent"
                  size={24}
                />
                <h3 className="mb-2 text-lg font-bold">{p.title}</h3>
                <p className="text-[13px] leading-relaxed text-white/55">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="relative overflow-hidden border-t border-white/5 bg-ink py-28">
        <HoloDecor variant="b" grid aura />
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-extrabold uppercase leading-tight tracking-tight sm:text-5xl">
            Готовы запустить{' '}
            <span className="holo-text font-serif italic normal-case">
              проект
            </span>
            ?
          </h2>
          <p className="mx-auto mt-6 max-w-content text-[15px] text-white/65">
            Оставьте заявку — задам несколько вопросов о проекте и вернусь с
            предложением. Это займёт пару минут.
          </p>
          <Link
            to="/brief"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-[14px] font-bold uppercase tracking-wide text-ink transition hover:brightness-110"
          >
            Оставить заявку
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-white/10 bg-ink py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-[13px] text-white/40 md:flex-row">
          <span className="font-bold tracking-tight text-white/70">
            ROMANOVICH<span className="text-accent"> PROD</span>
          </span>
          <span>© {new Date().getFullYear()} Артём Романович. Все права защищены.</span>
          <a
            href="mailto:papulovartem8@gmail.com"
            className="transition hover:text-accent"
          >
            papulovartem8@gmail.com
          </a>
        </div>
      </footer>
    </main>
  )
}
