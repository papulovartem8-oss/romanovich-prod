import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const CHARS = '!<>-_\\/[]{}=+*^?#________01xyzАБВГДЖ%@'

/**
 * "Hacker/decrypt" text reveal: when scrolled into view the string briefly
 * scrambles through random glyphs and settles left-to-right into the real text.
 * Perfect for the terminal/digital vibe. Respects prefers-reduced-motion.
 */
export default function DecryptText({ text, className = '', as: Tag = 'span', speed = 40 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(text)

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(text)
      return
    }
    let iteration = 0
    const id = setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((ch, i) => {
            if (ch === ' ') return ' '
            if (i < iteration) return text[i]
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      )
      if (iteration >= text.length) {
        clearInterval(id)
        setDisplay(text)
      }
      iteration += 1 / 2
    }, speed)
    return () => clearInterval(id)
  }, [inView, text, speed])

  return (
    <Tag ref={ref} className={className}>
      {display}
    </Tag>
  )
}
