'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface RevealTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right'
}

export default function RevealText({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: RevealTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 60 : 0,
      x: direction === 'left' ? -60 : direction === 'right' ? 60 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
