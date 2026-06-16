'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, type MotionStyle } from 'framer-motion'

export type StackPhoto = {
  src: string
  alt: string
  /** Aspect ratio of the card (width / height). Defaults to 0.46 (tall portrait). */
  ratio?: number
  /** Translate speed (in px) the card moves as the section is scrolled through.
   *  Positive = moves up faster; negative = lags behind. */
  speed?: number
  /** Base vertical offset (in px) so columns cascade down the section. */
  offset?: number
  /** How many grid columns this card spans (lg+). Lets you build mixed rows. */
  span?: number
  /** Optional column index to override stacking order. */
  col?: number
}

interface SaloPhotoStackProps {
  photos: StackPhoto[]
  className?: string
  /** Number of columns on lg+. Defaults to 5 (matches salo). */
  columns?: number
}

/**
 * Salo-style offset photo grid.
 *
 * Renders a row of vertical photo cards, each translating at its own speed as
 * the parent section is scrolled — producing the layered parallax effect
 * seen on salo.uk/about.
 */
export default function SaloPhotoStack({
  photos,
  className = '',
  columns = 5,
}: SaloPhotoStackProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  return (
    <div
      ref={ref}
      className={`grid gap-3 sm:gap-4 lg:gap-5 ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {photos.map((photo, i) => (
        <ParallaxCard
          key={i}
          photo={photo}
          progress={scrollYProgress}
          fallbackSpeed={defaultSpeed(i, columns)}
        />
      ))}
    </div>
  )
}

function defaultSpeed(index: number, columns: number) {
  // Stagger: alternate columns drift up/down, edge cards lag the most
  const wave = [-80, 40, -40, 60, -60]
  return wave[index % columns] ?? 0
}

function ParallaxCard({
  photo,
  progress,
  fallbackSpeed,
}: {
  photo: StackPhoto
  progress: import('framer-motion').MotionValue<number>
  fallbackSpeed: number
}) {
  const speed = photo.speed ?? fallbackSpeed
  const y = useTransform(progress, [0, 1], [speed, -speed])
  const ratio = photo.ratio ?? 0.46

  return (
    <motion.div
      style={
        {
          y,
          aspectRatio: ratio,
          gridColumn: photo.span ? `span ${photo.span}` : undefined,
          '--stack-offset': `${photo.offset ?? 0}px`,
        } as MotionStyle
      }
      className="photo-card"
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(max-width: 1024px) 50vw, 30vw"
        className="object-cover"
      />
    </motion.div>
  )
}
