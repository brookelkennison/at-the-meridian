'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
}

export default function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="space-y-4"
    >
      {/* Label */}
      <p className="font-sans text-xs tracking-widest uppercase text-coastal-teal">
        {label}
      </p>

      {/* Title */}
      <h2 className="font-display font-light text-4xl md:text-5xl text-deep-ocean leading-tight">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="font-sans text-lg text-deep-ocean opacity-75 pt-2">
          {subtitle}
        </p>
      )}

      {/* Divider */}
      <div className="pt-6 border-b border-driftwood w-24" />
    </motion.div>
  )
}
