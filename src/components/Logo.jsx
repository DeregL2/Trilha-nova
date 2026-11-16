// Logo em SVG: uma trilha em "S" com um marcador de destino.
export default function Logo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect width="48" height="48" rx="12" fill="var(--brand)" />
      <path
        d="M33 14H19a6 6 0 0 0 0 12h10a6 6 0 0 1 0 12H13"
        stroke="#fff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="0.1 6.5"
      />
      <path d="M33 14H19a6 6 0 0 0 0 12h10a6 6 0 0 1 0 12H13" stroke="#fff" strokeOpacity=".35" strokeWidth="4" strokeLinecap="round" />
      <circle cx="36" cy="12" r="4.5" fill="var(--accent)" stroke="#fff" strokeWidth="2" />
    </svg>
  )
}
