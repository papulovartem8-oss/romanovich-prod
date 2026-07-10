import { useScroll, useSpring, useTransform, motion } from 'framer-motion'

/** A node on the line that ignites as the drawn line reaches its position. */
function IgnitionNode({ progress, at }) {
  const scale = useTransform(progress, [at - 0.04, at + 0.02], [0.6, 1])
  const opacity = useTransform(progress, [at - 0.06, at], [0.15, 1])
  const boxShadow = useTransform(
    progress,
    [at - 0.06, at],
    ['0 0 0px 0px rgba(94,210,156,0)', '0 0 8px 2px rgba(94,210,156,0.7)']
  )
  return (
    <motion.span
      className="absolute left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
      style={{ top: `${at * 100}%`, scale, opacity, boxShadow }}
    />
  )
}

/**
 * Neon-green "energy line" pinned to the left edge that draws itself as the page
 * scrolls (SVG pathLength ← scroll progress), with a pulsing leading node and
 * nodes that ignite as the line passes them. Desktop only. Self-contained —
 * remove by deleting its import + <EnergyLine /> in App.jsx.
 */
export default function EnergyLine() {
  const { scrollYProgress } = useScroll()
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })
  const dotTop = useTransform(p, [0, 1], ['0%', '100%'])

  // three nodes that light up as the line reaches them
  const nodes = [0.25, 0.5, 0.75]

  return (
    <div className="pointer-events-none fixed left-5 top-0 z-20 hidden h-screen w-6 lg:block">
      <svg
        className="h-full w-full overflow-visible"
        viewBox="0 0 24 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <filter id="eline-glow" x="-200%" y="-50%" width="500%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* faint full track */}
        <line x1="12" y1="0" x2="12" y2="1000" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />

        {/* drawn glowing line */}
        <motion.line
          x1="12"
          y1="0"
          x2="12"
          y2="1000"
          stroke="#5ed29c"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#eline-glow)"
          style={{ pathLength: p }}
        />
      </svg>

      {/* ignition nodes */}
      {nodes.map((n) => (
        <IgnitionNode key={n} progress={p} at={n} />
      ))}

      {/* pulsing leading node */}
      <motion.span
        className="absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        style={{
          top: dotTop,
          boxShadow: '0 0 14px 4px rgba(94,210,156,0.85)',
        }}
        animate={{ scale: [1, 1.45, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
