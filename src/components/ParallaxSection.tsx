'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down'
}

export default function ParallaxSection({
  children,
  className = '',
  speed = 50,
  direction = 'up',
}: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const multiplier = direction === 'up' ? -1 : 1
  const y = useTransform(scrollYProgress, [0, 1], [speed * multiplier, -speed * multiplier])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}
