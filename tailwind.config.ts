import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ─────────── Salo-inspired dark palette, blue-tinted ───────────
        // Surfaces — subtle navy undertone (slightly cooler than pure neutral)
        'bg': '#0a0c14',         // base background
        'bg-alt': '#11141d',     // alt section / elevated card
        'bg-2': '#11141d',       // alias kept for legacy refs
        'bg-3': '#181c28',       // deeper card / inset
        // Lines (cool tinted white)
        'line': 'rgba(190, 210, 240, 0.10)',
        'line-strong': 'rgba(190, 210, 240, 0.22)',
        // Foreground (slightly cool white)
        'ink': '#f5f7fb',
        'ink-dim': 'rgba(245, 247, 251, 0.72)',
        'ink-faint': 'rgba(245, 247, 251, 0.42)',
        // Signature accent (sky blue — original brand)
        'accent': '#7dd3fc',
        'accent-bright': '#bae6fd',
        'accent-deep': '#0369a1',
        'on-accent': '#0a0c14',
        // Secondary accents (used sparingly)
        'spot-blue':   '#0d99ff',
        'spot-cyan':   '#61fdfc',
        'spot-pink':   '#ff24bd',
        'spot-purple': '#9e36ff',
        'spot-yellow': '#ffcd29',
        'spot-red':    '#f24822',
        // ─────────── Legacy coastal aliases (kept to avoid breaking older code) ───────────
        'meridian-sky': '#7dd3fc',
        'deep-ocean': '#0a0c14',
        'coastal-teal': '#7dd3fc',
        'horizon': '#11141d',
        'warm-sand': '#11141d',
        'driftwood': '#181c28',
      },
      maxWidth: {
        'site': '1440px',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'fade-up': 'fade-up 0.4s ease',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        // Fustat        = humanist sans (body + paragraph)
        // Space Grotesk = geometric (legacy labels — most labels now Norwester)
        // Norwester     = condensed industrial caps (logo + main headlines + eyebrows)
        sans: ['var(--font-fustat)', 'Fustat', '-apple-system', 'BlinkMacSystemFont', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['var(--font-fustat)', 'Fustat', 'sans-serif'],
        // legacy alias kept so old pages still compile
        serif: ['var(--font-fustat)', 'Fustat', 'sans-serif'],
        mono: ['var(--font-grotesk)', '"Space Grotesk"', 'monospace'],
        grotesk: ['var(--font-grotesk)', '"Space Grotesk"', 'sans-serif'],
        headline: ['var(--font-norwester)', 'Norwester', 'Impact', 'sans-serif'],
      },
      fontSize: {
        // Salo uses massive editorial display sizes
        'display-xl': ['clamp(3.5rem, 9vw, 9rem)', { lineHeight: '0.92', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.75rem, 7vw, 6.5rem)', { lineHeight: '0.96', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(2.25rem, 5vw, 4.5rem)', { lineHeight: '1.0',  letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
      },
      letterSpacing: {
        'wide-heading': '0.05em',
        'wider-heading': '0.08em',
        'widest-heading': '0.12em',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
