'use client'

import { useEffect, useState } from 'react'

// The businesses we build for — cycled with a type / backspace effect.
const WORDS = [
  'dental offices',
  'landscapers',
  'exterior remodelers',
  'concrete contractors',
  'roofers',
  'HVAC companies',
  'med spas',
  'interior designers',
]

const TYPE_SPEED = 85 // ms per character typed
const DELETE_SPEED = 40 // ms per character removed
const HOLD_FULL = 1500 // pause on the complete word
const HOLD_EMPTY = 350 // pause before the next word

export default function TypedIndustries() {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = WORDS[wordIndex]

    // Finished typing the full word → pause, then start deleting.
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), HOLD_FULL)
      return () => clearTimeout(t)
    }

    // Finished deleting → pause, then advance to the next word.
    if (deleting && text === '') {
      const t = setTimeout(() => {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % WORDS.length)
      }, HOLD_EMPTY)
      return () => clearTimeout(t)
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        )
      },
      deleting ? DELETE_SPEED : TYPE_SPEED,
    )
    return () => clearTimeout(t)
  }, [text, deleting, wordIndex])

  return (
    <div className="text-center">
      <p className="text-xs uppercase tracking-[0.22em] text-ink-faint mb-5">Who we build for</p>
      <div className="font-display font-semibold tracking-[-0.02em] text-ink leading-tight text-[clamp(1.9rem,4.5vw,3.5rem)] min-h-[1.3em] flex items-baseline justify-center">
        <span>For&nbsp;</span>
        <span className="hero-italic-grad italic font-light">{text}</span>
        <span
          aria-hidden
          className="ml-[0.06em] inline-block w-[3px] h-[0.95em] translate-y-[0.08em] bg-accent caret-blink"
        />
      </div>
      {/* Accessible, non-animated fallback for screen readers */}
      <span className="sr-only">
        We build for dental offices, landscapers, exterior remodelers, concrete contractors,
        roofers, HVAC companies, med spas, and interior designers.
      </span>
    </div>
  )
}
