import { useEffect, useRef } from 'react'

const SRC =
  'https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8'

const DIGITAL_BLOCKS = [
  { x: 18, y: 20, w: 18, h: 3, delay: -1.2, duration: 4.8 },
  { x: 29, y: 34, w: 9, h: 5, delay: -3.4, duration: 5.6 },
  { x: 43, y: 18, w: 22, h: 3, delay: -2.1, duration: 6.2 },
  { x: 51, y: 31, w: 7, h: 7, delay: -4.7, duration: 5.1 },
  { x: 59, y: 22, w: 15, h: 4, delay: -0.8, duration: 6.6 },
  { x: 68, y: 37, w: 24, h: 3, delay: -3.8, duration: 5.8 },
  { x: 77, y: 16, w: 10, h: 5, delay: -2.9, duration: 4.9 },
  { x: 85, y: 29, w: 19, h: 3, delay: -5.1, duration: 6.4 },
  { x: 37, y: 48, w: 12, h: 4, delay: -1.7, duration: 5.4 },
  { x: 48, y: 55, w: 20, h: 3, delay: -4.2, duration: 6.1 },
  { x: 62, y: 49, w: 8, h: 6, delay: -2.4, duration: 5.2 },
  { x: 74, y: 58, w: 17, h: 3, delay: -0.4, duration: 6.8 },
  { x: 88, y: 46, w: 11, h: 4, delay: -3.1, duration: 5.5 },
  { x: 24, y: 64, w: 7, h: 5, delay: -4.5, duration: 6.3 },
  { x: 55, y: 67, w: 14, h: 3, delay: -1.1, duration: 5.7 },
  { x: 82, y: 71, w: 22, h: 3, delay: -2.7, duration: 6.5 },
]

/**
 * Full-screen HLS background video with the layered overlays, grid lines and
 * central glow from the design spec. Rendered fixed behind all page content.
 */
export default function VideoBackground() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Safari plays HLS natively — no library needed there
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = SRC
      return
    }

    // Otherwise load hls.js on demand so it stays out of the initial bundle
    let hls
    let cancelled = false
    import('hls.js').then(({ default: Hls }) => {
      if (cancelled || !Hls.isSupported()) return
      hls = new Hls({ enableWorker: false })
      hls.loadSource(SRC)
      hls.attachMedia(video)
    })
    return () => {
      cancelled = true
      if (hls) hls.destroy()
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink">
      {/* Video */}
      <video
        ref={videoRef}
        className="h-full w-full object-cover opacity-60"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Left-to-transparent + bottom-up gradients for readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, #070b0a 0%, rgba(7,11,10,0.7) 30%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(0deg, #070b0a 4%, rgba(7,11,10,0.5) 30%, transparent 60%)',
        }}
      />

      {/* Central cyan/green glow ellipse with gaussian blur */}
      <svg
        className="absolute left-1/2 top-[8%] -translate-x-1/2 opacity-70"
        width="1200"
        height="520"
        viewBox="0 0 1200 520"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="glowBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="25" />
          </filter>
          <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5ed29c" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#0b6b57" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#070b0a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse
          cx="600"
          cy="260"
          rx="520"
          ry="150"
          fill="url(#glowGrad)"
          filter="url(#glowBlur)"
        />
      </svg>

      {/* Fragmented signal blocks layered over the central glow */}
      <div className="digital-block-field" aria-hidden="true">
        {DIGITAL_BLOCKS.map((block, index) => (
          <span
            key={`${block.x}-${block.y}`}
            className={`digital-pixel-block ${index % 4 === 0 ? 'is-outline' : ''}`}
            style={{
              '--block-x': `${block.x}%`,
              '--block-y': `${block.y}%`,
              '--block-w': `${block.w}px`,
              '--block-h': `${block.h}px`,
              '--block-delay': `${block.delay}s`,
              '--block-duration': `${block.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Three thin vertical grid lines (desktop only) */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="absolute inset-y-0 left-1/4 w-px bg-white/10" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/10" />
        <div className="absolute inset-y-0 left-3/4 w-px bg-white/10" />
      </div>

      {/* Subtle scanline vignette for the digital vibe */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.55))]" />
    </div>
  )
}
