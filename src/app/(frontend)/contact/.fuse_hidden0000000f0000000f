import Reveal from '@/components/Reveal'
import DiscoveryForm from '@/components/DiscoveryForm'

export const metadata = {
  title: 'Contact — At The Meridian',
  description:
    'Book a 30-minute discovery call. We’ll diagnose the gaps, find the leverage, and tell you honestly whether we’re the right team.',
}

const steps = [
  {
    number: '01',
    title: 'You answer a few questions',
    description: 'We want to understand your business, not just your wishlist.',
  },
  {
    number: '02',
    title: 'We respond within one business day',
    description: 'A clear, honest assessment of how we can help.',
  },
  {
    number: '03',
    title: 'We schedule a discovery call',
    description: '30 minutes to align on scope, timeline, and next steps.',
  },
]

export default function ContactPage() {
  return (
    <div className="bg-bg text-ink font-sans font-light antialiased">
      {/* ─────────── Hero ─────────── */}
      <header className="relative pt-36 pb-12 lg:pt-44 lg:pb-16 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vmin] h-[140vmin]"
          style={{
            background:
              'radial-gradient(circle, rgba(125, 211, 252, 0.12) 0%, transparent 50%)',
          }}
        />
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
          <span className="eyebrow-dark">Book a discovery call</span>
          <h1 className="font-serif font-light tracking-tight leading-[0.98] text-[44px] sm:text-6xl lg:text-7xl mt-7 mb-7 max-w-[18ch]">
            Let’s see if we’re <em className="hero-italic-grad font-light">built for each other.</em>
          </h1>
          <p className="text-ink-dim text-base sm:text-lg max-w-[52ch] leading-relaxed">
            A 30-minute call. No pitch. We’ll diagnose where the gaps are, where the leverage is, and whether we’re the right team to close them.
          </p>
        </div>
      </header>

      {/* ─────────── Form + sidebar ─────────── */}
      <section className="border-t border-line py-16 lg:py-24">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
            {/* Left — what happens next */}
            <Reveal className="lg:sticky lg:top-32">
              <div className="flex flex-col gap-7 border-t border-line pt-9">
                {steps.map((s) => (
                  <div key={s.number} className="flex items-start gap-6">
                    <span className="font-serif font-light text-4xl text-accent leading-none min-w-[56px] tracking-tight">
                      {s.number}
                    </span>
                    <div>
                      <h3 className="font-serif font-light text-lg tracking-tight mb-1">
                        {s.title}
                      </h3>
                      <p className="text-sm text-ink-dim leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-9 border-t border-line">
                <span className="text-[11px] tracking-[0.22em] uppercase text-ink-faint mb-4 block">
                  Direct
                </span>
                <a
                  href="mailto:hello@atthemeridian.co"
                  className="block text-ink hover:text-accent transition-colors mb-2"
                >
                  hello@atthemeridian.co
                </a>
                <a
                  href="https://instagram.com/atthemeridian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-ink-dim hover:text-accent transition-colors"
                >
                  @atthemeridian
                </a>
                <p className="font-serif italic text-ink-faint text-sm mt-8">
                  “We build technology that works — and keeps working.”
                </p>
              </div>
            </Reveal>

            {/* Right — discovery form */}
            <Reveal>
              <DiscoveryForm />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
