import './halo-logo.css'

export default function HaloLogo() {
  return (
    <div className="halo-logo-mark" aria-label="HALO">
      <svg className="halo-symbol" viewBox="0 0 220 220" role="img">
        <path
          className="halo-arc halo-arc-main"
          d="M134 42 A72 72 0 1 0 92 178"
        />
        <path
          className="halo-arc halo-arc-secondary"
          d="M152 80 A72 72 0 0 1 130 178"
        />
        <line className="halo-center-line" x1="110" y1="105" x2="110" y2="150" />
        <line className="halo-small-line" x1="110" y1="170" x2="110" y2="190" />
      </svg>

      <div className="halo-word">HALO</div>
      <div className="halo-tagline">LIGHT. BUILT TO LAST.</div>
    </div>
  )
}
