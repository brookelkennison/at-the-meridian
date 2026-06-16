interface LogoProps {
  className?: string
  color?: string
}

export default function Logo({ className = 'w-8 h-8', color = 'currentColor' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Horizon line */}
      <line
        x1="4"
        y1="28"
        x2="36"
        y2="28"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Sun arc at meridian - subtle semicircle above the horizon */}
      <path
        d="M 12 28 Q 20 12 28 28"
        stroke={color}
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
