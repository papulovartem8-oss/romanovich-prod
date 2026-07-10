/**
 * 200x200 floating "liquid glass" card from the spec, lifted 50px above the
 * headline with a gentle float animation.
 */
export default function LiquidGlassCard() {
  return (
    <div className="liquid-glass animate-floaty flex h-[200px] w-[200px] flex-col justify-between p-5 text-left">
      <span className="font-mono text-[14px] tracking-widest text-accent">
        [ 2025 ]
      </span>

      <h3 className="text-[18px] font-semibold leading-snug text-white">
        Built by a working{' '}
        <span className="font-serif italic text-accent">Developer</span>
      </h3>

      <p className="text-[11px] leading-relaxed text-white/60">
        Продукты под ключ — от идеи до запуска.
      </p>
    </div>
  )
}
