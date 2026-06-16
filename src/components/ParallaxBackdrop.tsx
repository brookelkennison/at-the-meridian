'use client'

import { useRef } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

type ParallaxBackdropProps = {
  src: string | StaticImageData
  alt: string
  /** % of vertical drift across the scroll range. Higher = more movement. */
  strength?: number
  className?: string
  priority?: boolean
  sizes?: string
  /** Optional dark overlay opacity (0–1) layered above the image. */
  overlay?: number
  children?: React.ReactNode
}

/**
 * Full-bleed image that drifts vertically as it scrolls through the viewport.
 * The inner layer is over-sized so the parallax never reveals an edge.
 */
export default function ParallaxBackdrop({
  src,
  alt,
  strength = 16,
  className = '',
  priority = false,
  sizes = '100vw',
  overlay,
  children,
}: ParallaxBackdropProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 -top-[20%] -bottom-[20%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </motion.div>
      {typeof overlay === 'number' && (
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: `rgba(10, 10, 11, ${overlay})` }}
        />
      )}
      {children && <div className="relative z-10 h-full">{children}</div>}
    </div>
  )
}
