'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface CardProps {
  title?: string
  excerpt?: string
  image?: string
  href?: string
  tags?: string[]
  date?: string
  className?: string
  children?: React.ReactNode
}

export default function Card({ title, excerpt, image, href, tags, date, className, children }: CardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // If children are passed, render as a simple styled container
  if (children) {
    const Wrapper = href ? Link : 'div'
    const wrapperProps = href ? { href } : {}

    return (
      <Wrapper {...(wrapperProps as any)}>
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className={`rounded-none overflow-hidden h-full ${className ?? ''}`}
          animate={isHovered ? { y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.08)' } : { y: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </Wrapper>
    )
  }

  // Structured card with title, excerpt, tags, image
  const cardContent = (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`bg-warm-sand rounded-none overflow-hidden cursor-pointer group h-full flex flex-col ${className ?? ''}`}
      animate={isHovered ? { y: -8, boxShadow: '0 16px 32px rgba(0,0,0,0.1)' } : { y: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-meridian-sky to-horizon h-48 w-full">
        {image ? (
          <Image
            src={image}
            alt={title ?? ''}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-coastal-teal opacity-30 font-display">IMAGE</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Tags */}
        {(tags ?? []).length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {(tags ?? []).map((tag) => (
              <span
                key={tag}
                className="inline-block text-xs font-sans tracking-widest uppercase text-coastal-teal border border-coastal-teal px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        {title && (
          <h3 className="font-display font-light text-xl text-deep-ocean mb-3 group-hover:text-coastal-teal transition-colors">
            {title}
          </h3>
        )}

        {/* Excerpt */}
        {excerpt && (
          <p className="font-sans text-sm text-deep-ocean opacity-75 mb-4 flex-1">
            {excerpt}
          </p>
        )}

        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-driftwood">
          {date && (
            <span className="font-sans text-xs text-deep-ocean opacity-50">
              {date}
            </span>
          )}
          {href && (
            <span className="font-display text-xs tracking-wider uppercase text-coastal-teal ml-auto">
              Read More →
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )

  if (href) {
    return <Link href={href}>{cardContent}</Link>
  }

  return cardContent
}
