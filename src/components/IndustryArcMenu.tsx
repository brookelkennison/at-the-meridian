'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type ArcItem = {
  label: string
  href: string
}

/**
 * Industries shown in the "Our Work" arc menu.
 * Slugs map to the real pages under /industries/[slug].
 *
 * TODO: Links repointed to /contact for the simplified home + contact launch
 *       (2026-06-09) because the /industries/[slug] pages are disabled. Restore
 *       the original hrefs (kept inline below) once those pages are re-enabled.
 */
const ITEMS: ArcItem[] = [
  { label: 'Landscaping', href: '/contact' }, // was '/industries/landscape-design'
  { label: 'Concrete', href: '/contact' }, // was '/industries/concrete-masonry'
  { label: 'Construction', href: '/contact' }, // was '/industries/construction'
  { label: 'Interiors', href: '/contact' }, // was '/industries/interior-design'
  { label: 'Home Builders', href: '/contact' }, // was '/industries/custom-home-builders'
  { label: 'Remodels', href: '/contact' }, // was '/industries/remodelers'
]

const ROTATE_MS = 5000

// ─────────── Wheel geometry ───────────
// Items ride a full circle. The selected item sits at the far RIGHT, on the
// x-axis (3 o'clock). Items rotate up through the top and down to the bottom;
// any item on the LEFT half of the circle is hidden. So at rest only three
// items are visible: selected (right), one at the top, one at the bottom.
const CENTER_X = 70 // circle center — left of box so the right arc fits
const CENTER_Y = 150 // vertical center (the x-axis the selected item sits on)
const RADIUS = 120

type Spot = { x: number; y: number; visible: boolean }

/** Position + visibility for an item given its ring offset (0 = active). */
function positionForOffset(offset: number, total: number): Spot {
  // offset 0  → 0°   (right, on the x-axis) — selected
  // offset 1..N-1 spread from 90° (top) round the left to 270° (bottom)
  const angleDeg =
    offset === 0 ? 0 : 90 + (offset - 1) * (180 / (total - 2))
  const angle = (angleDeg * Math.PI) / 180
  const cos = Math.cos(angle)
  return {
    x: CENTER_X + RADIUS * cos,
    y: CENTER_Y - RADIUS * Math.sin(angle),
    // Visible only on the right half of the circle (top, right, bottom).
    visible: cos >= -0.01,
  }
}

export default function IndustryArcMenu() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = ITEMS.length
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (paused) return
    timer.current = setInterval(() => {
      setActive((i) => (i + 1) % total)
    }, ROTATE_MS)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [paused, total])

  return (
    <div
      className="relative mx-auto w-full max-w-[300px] select-none"
      style={{ height: 300 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="tablist"
      aria-label="Industries we work with"
    >
      {/* Thin right-half arc, faded to transparent at top + bottom */}
      <svg
        width={300}
        height={300}
        viewBox="0 0 300 300"
        className="absolute left-0 top-0 pointer-events-none"
        aria-hidden
      >
        <defs>
          <linearGradient
            id="arcFade"
            gradientUnits="userSpaceOnUse"
            x1={CENTER_X}
            y1={CENTER_Y - RADIUS}
            x2={CENTER_X}
            y2={CENTER_Y + RADIUS}
          >
            <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0" />
            <stop offset="24%" stopColor="#7dd3fc" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#7dd3fc" stopOpacity="0.55" />
            <stop offset="76%" stopColor="#7dd3fc" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d={`M ${CENTER_X} ${CENTER_Y - RADIUS} A ${RADIUS} ${RADIUS} 0 0 1 ${CENTER_X} ${CENTER_Y + RADIUS}`}
          fill="none"
          stroke="url(#arcFade)"
          strokeWidth={1}
        />
      </svg>

      {ITEMS.map((item, i) => {
        const offset = (i - active + total) % total
        const isActive = offset === 0
        const { x, y, visible } = positionForOffset(offset, total)
        return (
          <motion.div
            key={item.label}
            className="absolute left-0 top-0"
            initial={false}
            animate={{
              x,
              y,
              opacity: !visible ? 0 : isActive ? 1 : 0.34,
              scale: isActive ? 1 : 0.74,
            }}
            transition={{ type: 'tween', duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              translateX: '-50%',
              translateY: '-50%',
              zIndex: isActive ? 10 : 1,
              pointerEvents: visible ? 'auto' : 'none',
            }}
          >
            <Link
              href={item.href}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              role="tab"
              aria-selected={isActive}
              tabIndex={visible ? 0 : -1}
              aria-hidden={!visible}
              className={`block whitespace-nowrap font-headline uppercase tracking-wide-heading transition-colors duration-300 ${
                isActive
                  ? 'text-accent text-2xl sm:text-3xl bg-bg px-3 rounded'
                  : 'text-ink-faint text-lg hover:text-ink-dim'
              }`}
            >
              {item.label}
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}
