/**
 * Layered green "hologram" decoration for the digital aesthetic:
 * blurred glow orbs, a rotating aura, floating particles, scanlines and an
 * optional perspective grid floor. Drop inside any `relative` section.
 */

const VARIANTS = {
  a: [
    { className: 'holo-float', style: { width: 380, height: 380, top: '-8%', left: '-6%' } },
    { className: 'holo-float-slow', style: { width: 300, height: 300, top: '30%', right: '-8%' } },
  ],
  b: [
    { className: 'holo-float-slow', style: { width: 340, height: 340, bottom: '-12%', left: '10%' } },
    { className: 'holo-float', style: { width: 260, height: 260, top: '-10%', right: '12%' } },
  ],
  c: [
    { className: 'holo-float', style: { width: 420, height: 420, top: '20%', left: '35%' } },
    { className: 'holo-float-slow', style: { width: 240, height: 240, bottom: '-6%', right: '-4%' } },
  ],
}

// deterministic scattered particles
const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 37 + 8) % 96}%`,
  top: `${(i * 53 + 11) % 92}%`,
  size: (i % 3) + 2,
  delay: (i % 5) * 0.7,
  dur: 4 + (i % 4),
}))

export default function HoloDecor({
  variant = 'a',
  grid = false,
  scanlines = true,
  aura = true,
  particles = true,
  className = '',
}) {
  const orbs = VARIANTS[variant] || VARIANTS.a
  // `particles` may be a boolean or a number (how many to show)
  const particleList =
    typeof particles === 'number'
      ? PARTICLES.slice(0, particles)
      : particles
        ? PARTICLES
        : []
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {orbs.map((o, i) => (
        <div key={i} className={`holo-orb ${o.className}`} style={o.style} />
      ))}

      {aura && (
        <div
          className="holo-aura"
          style={{ width: 460, height: 460, top: '-20%', right: '-10%', opacity: 0.6 }}
        />
      )}

      {scanlines && <div className="absolute inset-0 holo-scanlines opacity-60" />}

      {particleList.length > 0 && (
        <div className="absolute inset-0">
          {particleList.map((p, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-accent holo-float"
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                boxShadow: '0 0 8px 1px rgba(94,210,156,0.8)',
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.dur}s`,
                opacity: 0.5,
              }}
            />
          ))}
        </div>
      )}

      {grid && (
        <div className="absolute inset-x-0 bottom-0 h-56 [perspective:420px]">
          <div className="holo-grid holo-grid-perspective absolute inset-0" />
        </div>
      )}
    </div>
  )
}
