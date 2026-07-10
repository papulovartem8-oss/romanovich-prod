import { useEffect, useRef } from 'react'

const SRC =
  'https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8'

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
