import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Send,
  ExternalLink,
} from 'lucide-react'
import VideoBackground from '../components/VideoBackground.jsx'
import HoloDecor from '../components/HoloDecor.jsx'
import DecryptText from '../components/DecryptText.jsx'
import BlurText from '../components/BlurText.jsx'
import Reveal from '../components/Reveal.jsx'
import Magnetic from '../components/Magnetic.jsx'
import { getCase } from '../data/cases.js'

const TELEGRAM = 'https://t.me/Rmnvchprod'

export default function Case() {
  const { slug } = useParams()
  const c = getCase(slug)

  if (!c) return <Navigate to="/#cases" replace />

  return (
    <main className="relative overflow-hidden">
      <VideoBackground />
      <HoloDecor variant="c" grid aura scanlines={false} particles={5} />

      {/* --------------- HERO --------------- */}
      <section className="relative min-h-screen pb-20 pt-36 sm:pt-40">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <Link
            to="/#cases"
            className="mb-10 inline-flex items-center gap-2 font-mono text-[12px] text-white/50 transition hover:text-accent"
          >
            <ArrowLeft size={14} /> Все работы
          </Link>

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

          <BlurText
            as="h1"
            text={c.title}
            className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          />

          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-white/70">
            {c.desc}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {c.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-white/60"
              >
                {s}
              </span>
            ))}
          </div>

          {/* meta info strip */}
          <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div>
              <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                Клиент
              </div>
              <div className="text-[14px] text-white/85">{c.client}</div>
            </div>
            <div>
              <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                Роль
              </div>
              <div className="text-[14px] text-white/85">{c.role}</div>
            </div>
            <div>
              <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                Сроки
              </div>
              <div className="text-[14px] text-white/85">{c.duration}</div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href={c.href}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[14px] font-bold uppercase tracking-wide text-ink transition hover:brightness-110"
              >
                <ExternalLink size={16} />
                Открыть сайт
              </a>
            </Magnetic>
            <a
              href="#process"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-[14px] font-semibold text-white/80 transition hover:border-accent/50 hover:text-white"
            >
              Смотреть процесс
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* --------------- LIVE PREVIEW --------------- */}
      <section className="relative overflow-hidden border-t border-white/5 bg-ink py-16">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <a
            href={c.href}
            target="_blank"
            rel="noopener"
            className="group/pv block overflow-hidden rounded-2xl border border-white/10 bg-[#0a1512]"
          >
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
              <span className="ml-3 truncate rounded bg-white/5 px-3 py-0.5 font-mono text-[10px] text-white/40">
                {c.domain}
              </span>
              <span className="ml-auto text-[11px] font-semibold text-accent opacity-0 transition group-hover/pv:opacity-100">
                Открыть ↗
              </span>
            </div>
            <div className="relative aspect-[16/10] bg-white">
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
            </div>
          </a>
        </div>
      </section>

      {/* --------------- TASKS --------------- */}
      <section
        id="tasks"
        className="relative overflow-hidden border-t border-white/5 bg-ink py-24"
      >
        <HoloDecor variant="a" aura scanlines={false} particles={6} />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <p className="mb-4 font-jakarta text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
            <DecryptText text="[ задачи ]" />
          </p>
          <BlurText
            as="h2"
            text="Что решали"
            className="mb-12 max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {c.tasks.map((t, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-accent/40 bg-accent/10 text-accent">
                    <Check size={14} />
                  </div>
                  <p className="text-[15px] leading-relaxed text-white/75">
                    {t}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------- PROCESS --------------- */}
      <section
        id="process"
        className="relative scroll-mt-24 overflow-hidden border-t border-white/5 bg-ink py-24"
      >
        <HoloDecor variant="b" grid aura scanlines={false} particles={8} />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <p className="mb-4 font-jakarta text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
            <DecryptText text="[ процесс ]" />
          </p>
          <BlurText
            as="h2"
            text="Как делали"
            className="mb-16 max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl"
          />

          <div className="relative">
            {/* connecting vertical line */}
            <div className="absolute left-[19px] top-2 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent sm:left-[23px]" />

            <div className="space-y-10">
              {c.process.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative flex gap-6 pl-0"
                >
                  <div className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-accent/50 bg-ink font-mono text-[12px] font-bold text-accent shadow-[0_0_20px_rgba(94,210,156,0.35)] sm:h-12 sm:w-12 sm:text-[13px]">
                    {p.step}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold sm:text-2xl">{p.title}</h3>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/65">
                      {p.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --------------- RESULTS --------------- */}
      <section className="relative overflow-hidden border-t border-white/5 bg-ink py-24">
        <HoloDecor variant="c" aura scanlines={false} particles={5} />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <p className="mb-4 font-jakarta text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
            <DecryptText text="[ результат ]" />
          </p>
          <BlurText
            as="h2"
            text="Что получилось"
            className="mb-12 max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {c.results.map((r, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-accent/40 hover:shadow-[0_0_40px_-8px_rgba(94,210,156,0.35)]">
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                    {r.label}
                  </div>
                  <div className="holo-text mb-3 text-4xl font-extrabold">
                    {r.value}
                  </div>
                  <div className="text-[13px] leading-relaxed text-white/55">
                    {r.hint}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href={c.href}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 rounded-full border border-accent/40 px-7 py-3.5 text-[14px] font-bold uppercase tracking-wide text-accent transition hover:bg-accent hover:text-ink"
              >
                Открыть проект
                <ArrowUpRight size={16} />
              </a>
            </Magnetic>
            <Link
              to="/#cases"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-[14px] font-semibold text-white/80 transition hover:border-accent/50 hover:text-white"
            >
              <ArrowLeft size={16} /> К списку работ
            </Link>
          </div>
        </div>
      </section>

      {/* --------------- CTA --------------- */}
      <section className="relative overflow-hidden border-t border-white/5 bg-ink py-24">
        <HoloDecor variant="b" grid aura />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Бесплатно
          </span>
          <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl">
            Хотите{' '}
            <span className="holo-text font-serif italic normal-case">
              такой же
            </span>{' '}
            проект?
          </h2>
          <p className="mx-auto mt-6 max-w-content text-[15px] text-white/65">
            Оставьте заявку на бесплатную консультацию — разберу задачу и
            предложу решение. Ни к чему не обязывает.
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
                <Send size={17} />
                Написать в Telegram
              </a>
            </Magnetic>
          </div>
        </div>
      </section>
    </main>
  )
}
