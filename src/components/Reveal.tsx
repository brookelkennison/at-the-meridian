'use client'

import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Threshold passed to IntersectionObserver. Defaults to 0.12. */
  threshold?: number
  /** Optional CSS delay (ms) before the reveal animates in. */
  delay?: number
  /** Inline styles merged with the delay/transition styles. */
  style?: CSSProperties
}

/**
 * Wraps children in a div that fades + slides in on scroll.
 * Pairs with the `.reveal` and `.reveal.in` classes in globals.css.
 */
export default function Reveal({
  children,
  className = '',
  threshold = 0.12,
  delay,
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('in')
            io.unobserve(el)
          }
        })
      },
      { threshold },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{
        ...(delay ? { transitionDelay: `${delay}ms` } : {}),
        ...style,
      }}
    >
      {children}
    </div>
  )
}
