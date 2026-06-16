'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxImageProps {
  src: string
  alt: string
  speed?: number // -30 to 30, negative = opposite direction
  className?: string
  overlay?: boolean
  overlayColor?: string
  children?: React.ReactNode
}

export default function ParallaxImage({
  src,
  alt,
  speed = -20,
  className = '',
  overlay = true,
  overlayColor = 'rgba(26, 61, 79, 0.4)',
  children,
}: ParallaxImageProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [`${speed}%`, `${-speed}%`])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 -top-[20%] -bottom-[20%]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </motion.div>
      {overlay && (
        <div className="absolute inset-0" style={{ backgroundColor: overlayColor }} />
      )}
      {children && (
        <div className="relative z-10">{children}</div>
      )}
    </div>
  )
}
