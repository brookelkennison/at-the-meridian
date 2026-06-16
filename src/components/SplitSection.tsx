'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import RevealText from './RevealText'

interface SplitSectionProps {
  label?: string
  title: string
  description: string | React.ReactNode
  imageSrc: string
  imageAlt: string
  reverse?: boolean
  children?: React.ReactNode
  className?: string
  cta?: React.ReactNode
}

export default function SplitSection({
  label,
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  children,
  className = '',
  cta,
}: SplitSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])

  return (
    <section ref={ref} className={`relative ${className}`}>
      <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] ${reverse ? '' : ''}`}>
        {/* Text Side */}
        <div className={`flex items-center px-8 md:px-16 lg:px-20 py-20 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="max-w-xl">
            {label && (
              <RevealText>
                <span className="text-xs font-sans tracking-[0.3em] uppercase text-coastal-teal mb-6 block">
                  {label}
                </span>
              </RevealText>
            )}
            <RevealText delay={0.1}>
              <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-deep-ocean leading-[1.1] mb-8 tracking-wide-heading">
                {title}
              </h2>
            </RevealText>
            <RevealText delay={0.2}>
              <div className="text-deep-ocean/70 text-lg leading-relaxed mb-8">
                {description}
              </div>
            </RevealText>
            {cta && <RevealText delay={0.3}>{cta}</RevealText>}
            {children && <RevealText delay={0.3}>{children}</RevealText>}
          </div>
        </div>

        {/* Image Side */}
        <div className={`relative overflow-hidden min-h-[50vh] lg:min-h-full ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
          <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[10%] -bottom-[10%]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
