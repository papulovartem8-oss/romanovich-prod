const LEVELS = [28, 56, 38, 82, 48, 68, 34, 92, 54, 76, 42, 64, 30, 86, 50, 72]

function SignalBars({ compact = false }) {
  return (
    <div className={`hero-signal-bars ${compact ? 'is-compact' : ''}`}>
      {LEVELS.map((level, index) => (
        <span
          key={`${level}-${index}`}
          style={{
            '--level': level / 100,
            '--level-low': (level / 100) * 0.55,
            '--level-mid': (level / 100) * 0.72,
            '--bar-delay': `${index * -93}ms`,
          }}
        />
      ))}
    </div>
  )
}

export function HeroSignalRail() {
  return (
    <div className="hero-signal-rail" aria-hidden="true">
      <span className="hero-status-dot" />
      <span>SYS.ONLINE</span>
      <SignalBars compact />
      <span className="hero-signal-rail__value">98.7%</span>
    </div>
  )
}

export default function HeroTelemetry() {
  return (
    <div className="hero-telemetry" aria-hidden="true">
      <div className="hero-scan-beam" />

      <div className="hero-telemetry__panel">
        <div className="hero-telemetry__scan" />

        <div className="hero-telemetry__head">
          <span className="hero-status-dot" />
          <span>RNVCH / SIGNAL</span>
          <span className="hero-telemetry__index">01</span>
        </div>

        <div className="hero-telemetry__wave">
          <SignalBars />
          <span className="hero-telemetry__percent">98.7%</span>
        </div>

        <div className="hero-telemetry__metrics">
          <div>
            <span>STATUS</span>
            <strong>READY</strong>
          </div>
          <div>
            <span>STACK</span>
            <strong>REACT / MOTION</strong>
          </div>
          <div>
            <span>MODE</span>
            <strong>FULL-CYCLE</strong>
          </div>
        </div>

        <div className="hero-telemetry__stream">
          0110&nbsp; RNVCH.PROD&nbsp; 1101&nbsp; BUILD.SYSTEM&nbsp; 00101
        </div>
      </div>
    </div>
  )
}
