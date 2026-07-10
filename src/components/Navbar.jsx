import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'ГЛАВНАЯ', to: '/' },
  { label: 'УСЛУГИ', to: '/#services' },
  { label: 'КЕЙСЫ', to: '/#cases' },
  { label: 'ПРОЦЕСС', to: '/#process' },
  { label: 'ЗАЯВКА', to: '/brief' },
]

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2">
      <span className="grid h-8 w-8 place-items-center rounded-md border border-white/15 bg-white/5 font-mono text-sm font-bold text-accent transition group-hover:border-accent/60">
        R
      </span>
      <span className="text-[15px] font-bold tracking-tight text-white">
        ROMANOVICH<span className="text-accent"> PROD</span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Logo />

        {/* Desktop menu */}
        <div className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="text-[16px] font-medium text-white/80 transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/brief"
            className="rounded-full border border-accent/40 px-5 py-2 text-[14px] font-semibold text-accent transition hover:bg-accent hover:text-ink"
          >
            Обсудить проект
          </Link>
        </div>

        {/* Mobile trigger */}
        <button
          className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Открыть меню"
        >
          <Menu size={20} />
        </button>
      </nav>

      {/* Mobile full-screen overlay — always mounted, toggled via CSS so it
          can never get stuck mid-animation */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-ink/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <Logo />
          <button
            className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white"
            onClick={() => setOpen(false)}
            aria-label="Закрыть меню"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-2 px-8">
          {LINKS.map((l, i) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
              style={{
                transitionDelay: open ? `${80 + i * 60}ms` : '0ms',
              }}
              className={`block py-3 text-3xl font-bold tracking-tight text-white transition-all duration-300 hover:text-accent ${
                open ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/brief"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex w-fit rounded-full bg-accent px-7 py-3 font-bold uppercase text-ink"
          >
            Оставить заявку
          </Link>
        </div>
      </div>

      {/* underline current route indicator on desktop (subtle) */}
      {pathname === '/brief' && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      )}
    </header>
  )
}
