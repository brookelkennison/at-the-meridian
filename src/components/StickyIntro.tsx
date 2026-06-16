'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface StickyIntroProps {
  /** The text content that stays pinned on the left while photos scroll past. */
  text: ReactNode
  /** Photo column rendered on the right — should be a SaloPhotoStack or similar. */
  photos: ReactNode
  className?: string
}

/**
 * Hero scaffolding inspired by salo.uk/about — a tall section that keeps the
 * text column pinned via position:sticky while a photo column scrolls past it.
 *
 * On smaller screens the layout collapses to a single stacked column.
 */
export default function StickyIntro({ text, photos, className = '' }: StickyIntroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  // Fade the pinned text out as the section ends
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0])

  return (
    <section ref={ref} className={`relative ${className}`}>
      <div className="container-edge grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] gap-12 lg:gap-16 pt-28 lg:pt-40 pb-24 lg:pb-40">
        {/* Sticky text column */}
        <motion.div
          style={{ opacity }}
          className="lg:sticky lg:top-28 self-start"
        >
          {text}
        </motion.div>

        {/* Photo column (scrolls past) */}
        <div>
          {photos}
        </div>
      </div>
    </section>
  )
}
