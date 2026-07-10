import { motion } from 'framer-motion'

/**
 * Fades + slides its children in when scrolled into view. Reliable replacement
 * for scroll-triggered typing (IntersectionObserver-on-mount is flaky here).
 */
export default function Reveal({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
