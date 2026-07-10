import { useEffect, useRef, useState } from 'react'

/**
 * Typewriter effect. Types out `text` character-by-character once the element
 * scrolls into view. Optionally cycles through an array of `words`.
 */
export default function TypingText({
  text,
  words,
  speed = 45,
  startDelay = 200,
  cycle = false,
  pause = 1600,
  className = '',
  as: Tag = 'span',
  caret = true,
  immediate = false,
}) {
  const phrases = words && words.length ? words : [text]
  const [display, setDisplay] = useState('')
  const [inView, setInView] = useState(immediate)
  const ref = useRef(null)

  // Reveal only when visible (nice on scroll). Skipped when `immediate` so
  // headlines that mount already in view start typing right away.
  useEffect(() => {
    if (immediate) return
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [immediate])

  useEffect(() => {
    if (!inView) return
    let phraseIndex = 0
    let charIndex = 0
    let deleting = false
    let timer

    const tick = () => {
      const current = phrases[phraseIndex]
      if (!deleting) {
        charIndex++
        setDisplay(current.slice(0, charIndex))
        if (charIndex === current.length) {
          if (!cycle) return
          deleting = true
          timer = setTimeout(tick, pause)
          return
        }
      } else {
        charIndex--
        setDisplay(current.slice(0, charIndex))
        if (charIndex === 0) {
          deleting = false
          phraseIndex = (phraseIndex + 1) % phrases.length
        }
      }
      timer = setTimeout(tick, deleting ? speed / 2 : speed)
    }

    timer = setTimeout(tick, startDelay)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <Tag ref={ref} className={`${className} ${caret ? 'caret' : ''}`}>
      {display}
    </Tag>
  )
}
