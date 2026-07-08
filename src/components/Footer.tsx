import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-bg overflow-hidden">
      <div className="container-edge py-24 lg:py-32">
        {/* ───── Top: wordmark + contact ───── */}
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr] gap-12 lg:gap-16 mb-20">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-7">
              <span
                className="w-2 h-2 rounded-full bg-accent"
                style={{ boxShadow: '0 0 14px rgba(125, 211, 252, 0.7)' }}
              />
              <span className="font-headline text-ink text-[22px] tracking-[0.06em] uppercase leading-none">
                At The Meridian
              </span>
            </Link>
            <p className="headline text-4xl lg:text-6xl text-ink max-w-[18ch]">
              Websites &amp; systems that convert <span className="text-accent">search to sale.</span>
            </p>
            <div className="mt-10 flex flex-col gap-2 font-grotesk text-[13px] tracking-[0.05em]">
              <a
                href="mailto:brooke@atthemeridian.co"
                className="text-ink-dim hover:text-accent transition-colors"
              >
                brooke@atthemeridian.co
              </a>
              <a
                href="tel:+16156796644"
                className="text-ink-dim hover:text-accent transition-colors"
              >
                (615) 679-6644
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-grotesk text-[11px] tracking-[0.22em] uppercase text-ink-faint mb-6">
              Our services
            </h3>
            <ul className="space-y-3.5">
              {[
                { label: 'The Meridian System', href: '/#system' },
                { label: 'Build Packages', href: '/work-with-us#build' },
                { label: '30-Day Growth Sprint', href: '/work-with-us#sprint' },
                { label: 'Growth Partnerships', href: '/work-with-us#partnerships' },
                { label: 'Book a Strategy Session', href: '/contact' },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[15px] text-ink hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful links */}
          <div>
            <h3 className="font-grotesk text-[11px] tracking-[0.22em] uppercase text-ink-faint mb-6">
              Useful links
            </h3>
            <ul className="space-y-3.5">
              {/* TODO: Hidden for the simplified home + contact launch
                  (2026-06-09). Restore these once the pages are re-enabled:
                  { label: 'Selected work', href: '/portfolio' },
                  { label: 'About the studio', href: '/about' },
                  { label: 'Our process', href: '/process' },
                  { label: 'Blog', href: '/blog' }, */}
              {[
                { label: 'Work with us', href: '/work-with-us' },
                { label: 'Book a strategy session', href: '/contact' },
                { label: 'Contact us', href: '/contact' },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[15px] text-ink hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ───── Legal row ───── */}
        <div className="border-t border-line pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-ink-faint text-xs font-grotesk tracking-[0.04em]">
            © {new Date().getFullYear()} At The Meridian. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-ink-faint text-xs font-grotesk tracking-[0.04em]">
            {/* TODO: Legal pages (/privacy, /terms, /ai-policy) don't exist yet.
                Hidden for the simplified home + contact launch (2026-06-09).
                Restore once the pages are created.
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms</Link>
            <Link href="/ai-policy" className="hover:text-accent transition-colors">AI Policy</Link>
            */}
          </div>
        </div>
      </div>
    </footer>
  )
}
