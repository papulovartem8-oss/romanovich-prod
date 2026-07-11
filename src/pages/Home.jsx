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
  Send,
} from 'lucide-react'
import VideoBackground from '../components/VideoBackground.jsx'
import LiquidGlassCard from '../components/LiquidGlassCard.jsx'
import TypingText from '../components/TypingText.jsx'
import Reveal from '../components/Reveal.jsx'
import HoloDecor from '../components/HoloDecor.jsx'
import DecryptText from '../components/DecryptText.jsx'
import BlurText from '../components/BlurText.jsx'
import Magnetic from '../components/Magnetic.jsx'
import TiltCard from '../components/TiltCard.jsx'
import CountUp from '../components/CountUp.jsx'
import { cases } from '../data/cases.js'

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

const TELEGRAM = 'https://t.me/Rmnvchprod'

const stats = [
  { value: '5+', label: 'лет в разработке' },
  { value: '40+', label: 'запущенных проектов' },
  { value: '100%', label: 'проектов до результата' },
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
            <Magnetic>
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
            </Magnetic>
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
              <DecryptText text="[ обо мне ]" />
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
                    <CountUp value={s.value} />
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
                <DecryptText text="[ услуги ]" />
              </p>
              <BlurText
                as="h2"
                text="Что я делаю"
                className="max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl"
              />
            </div>
            <p className="max-w-sm text-[14px] text-white/55">
              Три направления, один стандарт качества. Выберите формат — остальное
              обсудим в брифе.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <TiltCard key={s.title} max={6} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
                className="terminal-frame holo-shimmer group relative flex h-full flex-col overflow-hidden p-7 transition hover:border-accent/40 hover:shadow-[0_0_40px_-8px_rgba(94,210,156,0.35)]"
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
              </TiltCard>
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
                <DecryptText text="[ работы ]" />
              </p>
              <BlurText
                as="h2"
                text="Избранные работы"
                className="max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl"
              />
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
                    <div className="mb-6 flex flex-wrap items-center gap-3 font-mono text-[12px] text-accent">
                      <span>{c.n}</span>
                      <span className="h-px w-8 bg-accent/40" />
                      <span className="text-white/40">
                        {c.tag} · {c.year}
                      </span>
                      {c.badge && (
                        <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                          {c.badge}
                        </span>
                      )}
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

                  <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <div className="holo-text text-4xl font-extrabold">
                        {c.metric}
                      </div>
                      <div className="mt-1 text-[12px] text-white/50">
                        {c.metricLabel}
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        to={`/case/${c.slug}`}
                        className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[13px] font-bold uppercase tracking-wide text-ink transition hover:brightness-110"
                      >
                        Показать процесс
                        <ArrowRight
                          size={15}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-[13px] font-semibold text-white/80 transition hover:border-accent/50 hover:text-white"
                      >
                        Открыть сайт <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* right: живое превью проекта (iframe) */}
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener"
                  className="group/pv relative block min-h-[300px] overflow-hidden border-t border-white/10 bg-[#0a1512] p-6 lg:border-l lg:border-t-0"
                >
                  <div className="holo-shimmer relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-xl border border-white/10">
                    {/* browser chrome */}
                    <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
                      <span className="ml-3 truncate rounded bg-white/5 px-3 py-0.5 font-mono text-[10px] text-white/40">
                        {c.domain}
                      </span>
                    </div>
                    {/* live iframe preview */}
                    <div className="relative flex-1 bg-white">
                      {c.preview && (
                        <iframe
                          src={c.preview}
                          title={c.title}
                          loading="lazy"
                          tabIndex={-1}
                          aria-hidden="true"
                          scrolling="no"
                          sandbox="allow-scripts allow-same-origin"
                          className="pointer-events-none absolute inset-0 h-full w-full border-0"
                        />
                      )}
                    </div>
                    {/* hover hint */}
                    <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-ink/80 px-3 py-1 text-[11px] font-semibold text-accent opacity-0 backdrop-blur transition group-hover/pv:opacity-100">
                      Открыть ↗
                    </span>
                  </div>
                </a>
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
            <DecryptText text="[ процесс ]" />
          </p>
          <BlurText
            as="h2"
            text="Как проходит работа"
            className="mb-14 max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl"
          />

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
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Бесплатно
          </span>
          <h2 className="text-4xl font-extrabold uppercase leading-tight tracking-tight sm:text-5xl">
            Готовы запустить{' '}
            <span className="holo-text font-serif italic normal-case">
              проект
            </span>
            ?
          </h2>
          <p className="mx-auto mt-6 max-w-content text-[15px] text-white/65">
            Оставьте заявку на бесплатную консультацию — задам несколько
            вопросов, разберу задачу и предложу решение. Занимает пару минут,
            ни к чему не обязывает.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <Link
                to="/brief"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-[14px] font-bold uppercase tracking-wide text-ink transition hover:brightness-110"
              >
                Бесплатная консультация
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Magnetic>
            <Magnetic>
              <a
                href={TELEGRAM}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 rounded-full border border-accent/40 px-8 py-4 text-[14px] font-bold uppercase tracking-wide text-accent transition hover:bg-accent hover:text-ink"
              >
                <Send size={17} className="transition-transform group-hover:-translate-y-0.5" />
                Написать в Telegram
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-white/10 bg-ink py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-[13px] text-white/40 md:flex-row">
          <span className="font-bold tracking-tight text-white/70">
            ROMANOVICH<span className="text-accent"> PROD</span>
          </span>
          <span>© {new Date().getFullYear()} Артём Романович. Все права защищены.</span>
          <div className="flex items-center gap-5">
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 transition hover:text-accent"
            >
              <Send size={14} /> Telegram
            </a>
            <a
              href="mailto:papulovartem8@gmail.com"
              className="transition hover:text-accent"
            >
              papulovartem8@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
