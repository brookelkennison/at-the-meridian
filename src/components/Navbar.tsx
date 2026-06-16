'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
// TODO: Re-enable when restoring the full nav (Industries dropdown). Disabled
//       for the simplified home + contact launch (2026-06-09).
// import { INDUSTRIES } from '@/lib/industries'

type NavItem = {
  label: string
  href?: string
  children?: { label: string; href: string }[]
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ──────────────────────────────────────────────────────────────────────
  // TODO: Simplified home + contact launch (2026-06-09). The full navigation
  //       is hidden, not deleted. Restore the links below (and the INDUSTRIES
  //       import above) to bring back Work / Services / About / Industries /
  //       Process / Blog once those pages are re-enabled.
  //
  // const industriesChildren = [
  //   { label: 'Dental Offices', href: '/dental' },
  //   ...INDUSTRIES.map((i) => ({
  //     label: i.name,
  //     href: `/industries/${i.slug}`,
  //   })),
  // ]
  //
  // const navLinks: NavItem[] = [
  //   { label: 'Work', href: '/portfolio' },
  //   { label: 'Services', href: '/services' },
  //   { label: 'About', href: '/about' },
  //   { label: 'Industries', children: industriesChildren },
  //   { label: 'Process', href: '/process' },
  //   { label: 'Blog', href: '/blog' },
  // ]
  // ──────────────────────────────────────────────────────────────────────
  const navLinks: NavItem[] = []

  return (
    <nav
      className={[
        'fixed top-0 w-full z-50 transition-all duration-500',
        scrolled
          ? 'bg-bg/80 backdrop-blur-xl border-b border-line'
          : 'bg-transparent border-b border-transparent',
      ].join(' ')}
    >
      <div className="container-edge h-[72px] flex items-center justify-between gap-6">
        {/* ───── Logo + tagline (salo style) ───── */}
        <Link href="/" className="flex items-center gap-4 group shrink-0">
          <span
            className="w-2 h-2 rounded-full bg-accent transition-all group-hover:scale-110"
            style={{ boxShadow: '0 0 14px rgba(125, 211, 252, 0.7)' }}
          />
          <span className="font-headline text-ink text-[22px] tracking-[0.06em] uppercase leading-none">
            At The Meridian
          </span>
          <span className="hidden md:inline-block font-grotesk text-ink-faint text-[11px] tracking-[0.18em] uppercase border-l border-line pl-4 ml-1">
            Built to scale. Engineered to last.
          </span>
        </Link>

        {/* ───── Center links ───── */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button
                  type="button"
                  className="font-sans text-sm text-ink-dim hover:text-ink transition-colors flex items-center gap-1.5"
                >
                  {link.label}
                  <svg
                    className="w-2.5 h-2.5 transition-transform group-hover:rotate-180 text-ink-faint"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M3 4.5l3 3 3-3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                  <div className="bg-bg-alt/95 backdrop-blur-xl shadow-[0_24px_60px_rgba(0,0,0,0.5)] border border-line rounded-2xl py-2 min-w-[260px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm text-ink-dim hover:bg-accent/10 hover:text-accent transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className="font-sans text-sm text-ink-dim hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        {/* ───── CTA ───── */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-on-accent text-sm font-medium px-5 py-2.5 rounded-full hover:bg-accent-bright transition-all hover:-translate-y-0.5"
          >
            Contact us <span aria-hidden>→</span>
          </Link>
        </div>

        {/* ───── Mobile toggle ───── */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`w-5 h-px bg-ink transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-px bg-ink transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-px bg-ink transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* ───── Mobile menu ───── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-5 mt-2 bg-bg-alt/95 backdrop-blur-xl border border-line rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.5)] p-6 lg:hidden z-40 max-h-[80vh] overflow-y-auto min-w-[260px]"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="flex flex-col gap-3">
                    <span className="font-grotesk text-[11px] tracking-[0.22em] uppercase text-ink-faint font-medium">
                      {link.label}
                    </span>
                    <div className="pl-3 flex flex-col gap-2.5 border-l border-line">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="font-sans text-sm text-ink-dim hover:text-accent transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href!}
                    className="font-sans text-sm text-ink-dim hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ),
              )}
              <Link
                href="/contact"
                className="mt-3 bg-accent text-on-accent text-sm font-medium px-5 py-2.5 rounded-full hover:bg-accent-bright transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact us →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
