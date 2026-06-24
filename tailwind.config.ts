import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ─────────── Light editorial palette, sky-blue accent (Stallion-style) ───────────
        // Surfaces — crisp white base with soft cool-gray elevation
        'bg': '#ffffff',         // base background
        'bg-alt': '#f5f7fb',     // alt section / subtle elevated
        'bg-2': '#f5f7fb',       // alias kept for legacy refs
        'bg-3': '#eef2f8',       // deeper card / inset
        // Lines (cool ink, low opacity — reads on white)
        'line': 'rgba(15, 23, 42, 0.08)',
        'line-strong': 'rgba(15, 23, 42, 0.16)',
        // Foreground (near-black, cool navy undertone)
        'ink': '#0d1320',
        'ink-dim': 'rgba(13, 19, 32, 0.66)',
        'ink-faint': 'rgba(13, 19, 32, 0.42)',
        // Signature accent (sky blue — deepened so it reads on white)
        'accent': '#0284c7',
        'accent-bright': '#38bdf8',
        'accent-deep': '#075985',
        'on-accent': '#ffffff',
        // Sky tints — for large surfaces / hero gradients (the light "sky" feel)
        'sky-tint': '#7dd3fc',
        'sky-tint-soft': '#bae6fd',
        // Secondary accents (used sparingly)
        'spot-blue':   '#0d99ff',
        'spot-cyan':   '#61fdfc',
        'spot-pink':   '#ff24bd',
        'spot-purple': '#9e36ff',
        'spot-yellow': '#ffcd29',
        'spot-red':    '#f24822',
        'spot-lime':        '#4d7c0f',  // readable lime green (text)
        'spot-lime-bright': '#558b1a',  // lime green (icons)
        // ─────────── Legacy aliases (remapped to the light theme) ───────────
        'meridian-sky': '#7dd3fc',   // light sky tint
        'deep-ocean': '#0d1320',     // dark ink — used as dark text / dark pills on light
        'coastal-teal': '#0284c7',   // matches accent
        'horizon': '#eef2f7',        // light section gray
        'warm-sand': '#f4f6f9',      // light neutral
        'driftwood': '#dfe5ee',      // light border / hover gray
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
