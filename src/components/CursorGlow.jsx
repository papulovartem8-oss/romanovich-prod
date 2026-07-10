import { useEffect, useRef } from 'react'

/**
 * Soft green light that trails the cursor for an ambient "digital" glow.
 * Desktop / fine-pointer only; disabled on touch and reduced-motion.
 */
export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduced) return

    let raf = 0
    const onMove = (e) => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
        el.style.opacity = '1'
        raf = 0
      })
    }
    const onLeave = () => {
      el.style.opacity = '0'
    }
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={ref} aria-hidden="true" className="cursor-glow" />
}
