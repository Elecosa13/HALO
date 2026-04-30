import './halo-logo.css'

export default function HaloLogo() {
  return (
    <div className="halo-logo-mark" aria-label="HALO">
      <svg className="halo-symbol" viewBox="0 0 220 220" role="img">
        <path
          className="halo-arc halo-arc-main"
          d="M134 42 A72 72 0 1 0 92 178"
          strokeLinecap="round"
        />
        <path
          className="halo-arc halo-arc-secondary"
          d="M152 80 A72 72 0 0 1 130 178"
          strokeLinecap="round"
        />
        <polygon
          className="halo-blade halo-blade-main"
          points="110,102 112.5,127 110,152 107.5,127"
        />
        <polygon
          className="halo-blade halo-blade-small"
          points="110,168 111.5,179 110,190 108.5,179"
        />
      </svg>

      <div className="halo-word">HALO</div>
      <div className="halo-tagline">LIGHT. BUILT TO LAST.</div>
    </div>
  )
}
