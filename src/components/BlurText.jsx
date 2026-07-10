import { Fragment } from 'react'
import { motion } from 'framer-motion'

/**
 * Word-by-word "blur-in" reveal when scrolled into view — text emerges from a
 * soft blur with a gentle stagger. Premium, quiet, matches the digital style.
 */
export default function BlurText({
  text,
  className = '',
  as = 'h2',
  delay = 0,
  once = true,
}) {
  const words = text.split(' ')
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.4 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.09, delayChildren: delay } },
      }}
    >
      {words.map((w, i) => (
        <Fragment key={i}>
          <motion.span
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: 14, filter: 'blur(12px)' },
              show: { opacity: 1, y: 0, filter: 'blur(0px)' },
            }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </Fragment>
      ))}
    </MotionTag>
  )
}
