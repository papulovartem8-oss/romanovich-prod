import { useEffect, useState } from 'react'

const COLUMN_COUNT = 24
const GLYPHS = ['01', '10', '11', '00', '101', '010']

export default function IntroLoader({ onComplete }) {
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const exitDelay = reducedMotion ? 80 : 1550
    const completeDelay = reducedMotion ? 180 : 2750

    document.documentElement.classList.add('intro-lock')

    const exitTimer = window.setTimeout(() => setExiting(true), exitDelay)
    const completeTimer = window.setTimeout(() => onComplete?.(), completeDelay)

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(completeTimer)
      document.documentElement.classList.remove('intro-lock')
    }
  }, [onComplete])

  return (
    <div
      className={`digital-intro ${exiting ? 'is-exiting' : ''}`}
      role="status"
      aria-label="Romanovich Prod — загрузка сайта"
    >
      <div className="digital-intro__base" />

      <div className="digital-intro__columns" aria-hidden="true">
        {Array.from({ length: COLUMN_COUNT }, (_, index) => (
          <span
            key={index}
            className="digital-intro__column"
            data-code={GLYPHS[index % GLYPHS.length]}
            style={{
              '--column': index,
              '--delay': `${((index * 7) % 13) * 24}ms`,
              '--flicker': `${600 + ((index * 83) % 520)}ms`,
              '--top': `${(index * 17) % 78}%`,
            }}
          />
        ))}
      </div>

      <div className="digital-intro__noise" aria-hidden="true" />

      <div className="digital-intro__card">
        <span className="digital-intro__eyebrow">SYSTEM / ONLINE</span>
        <div className="digital-intro__brand" data-text="ROMANOVICH PROD">
          <span>ROMANOVICH</span>
          <span className="digital-intro__accent"> PROD</span>
        </div>
        <div className="digital-intro__progress" aria-hidden="true">
          <span />
        </div>
        <span className="digital-intro__status">INITIALIZING EXPERIENCE</span>
      </div>
    </div>
  )
}
