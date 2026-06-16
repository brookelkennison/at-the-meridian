'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Salo-style "0px" scroll indicator.
 *
 * Mounts a small pill that shows the current scroll position (in px) relative
 * to where the pill mounted on the page. Mirrors the live counters scattered
 * through salo.uk/about, which give the page its signature techy texture.
 */
export default function ScrollProgressPill({
  className = '',
  label = 'Scroll',
}: {
  className?: string
  label?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [px, setPx] = useState(0)
  const startRef = useRef(0)

  useEffect(() => {
    if (!ref.current) return
    // Capture the document-space Y of the pill's mount point
    const rect = ref.current.getBoundingClientRect()
    startRef.current = window.scrollY + rect.top

    let raf = 0
    const onScroll = () => {
      raf || (raf = requestAnimationFrame(() => {
        const delta = Math.max(0, window.scrollY - startRef.current + window.innerHeight * 0.5)
        setPx(Math.round(delta))
        raf = 0
      }))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <span ref={ref} className={`scroll-pill ${className}`}>
      <span className="text-ink-dim tabular-nums tracking-normal">{px}px</span>
      <span aria-hidden className="text-ink-faint">·</span>
      <span>{label}</span>
    </span>
  )
}
