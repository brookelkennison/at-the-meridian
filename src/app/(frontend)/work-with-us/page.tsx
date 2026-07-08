import Link from 'next/link'

export const metadata = {
  title: 'Work With Us — At The Meridian',
  description:
    'Build the system, then grow it. Explore our Build Packages, the 30-Day Growth Sprint, and our Growth Partnerships.',
}

// ─────────── Build packages ───────────
// Every build ships with these — listed once, above the cards.
const buildIncludes = [
  'Custom design system',
  'Mobile-responsive development',
  'Lightning-fast load speeds',
  'Foundational on-page SEO',
  'Google Analytics + Search Console',
  'Conversion tracking',
  'Staging environment + weekly Loom walkthroughs',
  'Launch support with QA',
]

type BuildPackage = {
  name: string
  price: string
  for: string
  blurb: string
  timeline: string
  features: string[]
  pairsWith: string
  popular: boolean
}

const buildPackages: BuildPackage[] = [
  {
    name: 'Meridian Starter',
    price: '$5,500–$7,500',
    for: 'For focused launches',
    blurb:
      'A clean, conversion-focused presence built around one core service or product line.',
    timeline: '4–6 weeks',
    features: [
      'Up to 5 strategic pages',
      '1 sales funnel landing page',
      'Foundational on-page SEO (meta, headings, schema)',
      'Conversion tracking (forms, calls, CTAs)',
      '2 rounds of revisions',
    ],
    pairsWith: 'Pairs with Momentum · $3,500/mo',
    popular: false,
  },
  {
    name: 'Meridian Growth',
    price: '$10,000–$14,000',
    for: 'For scaling operators',
    blurb:
      'For businesses with multiple services or locations that need to capture search and convert across every buyer path.',
    timeline: '6–10 weeks',
    features: [
      'Up to 12 strategic pages',
      '3 sales funnel landing pages (one per core service)',
      'Up to 6 location-based SEO pages (city × service)',
      'Conversion copywriting included',
      'Full on-page + technical SEO',
      'Blog + CMS you can publish to independently',
      'CRM + analytics integration',
      '3 rounds of revisions · monthly strategy call',
    ],
    pairsWith: 'Pairs with Growth · $5,500/mo',
    popular: true,
  },
  {
    name: 'Meridian Premier',
    price: '$16,000–$22,000',
    for: 'For category leaders',
    blurb:
      'A full digital flagship — multi-funnel architecture, deep SEO infrastructure, and the systems to scale.',
    timeline: '10–16 weeks',
    features: [
      '20+ pages, multi-funnel architecture',
      'Brand evolution (style guide + component library)',
      '5+ sales funnel landing pages',
      '12+ location-based SEO pages (full city × service matrix)',
      'Full conversion copywriting',
      'Advanced SEO + content infrastructure',
      'Team + careers pages, reviews & link-in-bio',
      'Custom integrations & automation (email, routing, CRM)',
      'Unlimited revisions · biweekly strategy calls',
      'White-glove launch: training, docs, 30-day support',
    ],
    pairsWith: 'Pairs with Scale · $8,500/mo',
    popular: false,
  },
]

// ─────────── 30-Day Growth Sprint ───────────
const sprint = [
  'Monitoring conversions',
  'Improving pages',
  'Optimizing funnels',
  'Fixing bottlenecks',
  'Improving SEO',
  'Adjusting automations',
  'Reviewing analytics',
]

// ─────────── Growth Partnerships ───────────
const partnerships = [
  { name: 'Momentum', term: '3-month minimum', price: '$3,500', tagline: 'For businesses launching their digital systems.', popular: false, adNote: '' },
  { name: 'Growth', term: '3-month minimum', price: '$5,500', tagline: 'Consistent optimization and lead generation.', popular: true, adNote: 'Ad spend billed to your account · rec. $750–$1,000/mo' },
  { name: 'Scale', term: '6-month minimum', price: '$8,500', tagline: 'A long-term strategic partner — AI, SEO, automation, content, reporting. Everything.', popular: false, adNote: 'Ad spend billed to your account · rec. $1,000–$3,000/mo' },
]

// values are [Momentum, Growth, Scale]; true = included, false = not, string = detail
const features: { label: string; values: (boolean | string)[] }[] = [
  { label: 'Hosting, security, backups & all updates', values: [true, true, true] },
  { label: 'Website improvements', values: ['5 hrs/mo', '10 hrs/mo', '15 hrs/mo'] },
  { label: 'On-page + technical SEO', values: [true, true, true] },
  { label: 'Rank tracking + monthly report', values: [true, true, true] },
  { label: 'Google Business Profile & analytics', values: [true, true, true] },
  { label: 'First-priority, same-day support', values: [true, true, true] },
  { label: 'Full SEO strategy + 2 blog posts/mo', values: [false, true, true] },
  { label: 'Meta ads management', values: [false, true, true] },
  { label: 'Email / SMS automation', values: [false, true, true] },
  { label: 'Lead-gen strategy & CRO', values: [false, true, true] },
  { label: 'Strategy calls', values: [false, 'Monthly', 'Biweekly + QBR'] },
  { label: 'Managed Google Ads + LSA, daily reporting', values: [false, false, true] },
  { label: 'Expanded Meta — retargeting & lookalikes', values: [false, false, true] },
  { label: 'Monthly lead-gen landing page', values: [false, false, true] },
  { label: 'Advanced CRM, pipeline & lead scoring', values: [false, false, true] },
]

function Glyph({ name }: { name: string }) {
  const c = 'w-5 h-5'
  const p = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }
  switch (name) {
    case 'check':
      return <svg className={c} viewBox="0 0 24 24" {...p}><path d="M20 6L9 17l-5-5" /></svg>
    case 'x':
      return <svg className={c} viewBox="0 0 24 24" {...p}><path d="M18 6L6 18M6 6l12 12" /></svg>
    case 'peak':
      return <svg className={c} viewBox="0 0 24 24" {...p}><path d="M3 20h18L13.5 5l-3.2 6-2.3-3z" /></svg>
    default:
      return null
  }
}

export default function WorkWithUsPage() {
  return (
    <div className="bg-bg text-ink font-sans antialiased overflow-x-hidden">
      {/* ─────────── HERO ─────────── */}
      <section className="relative">
        <div className="absolute inset-0 dawn-hero pointer-events-none" aria-hidden />
        <div className="container-tight relative pt-36 sm:pt-40 pb-16 text-center">
          <span className="eyebrow justify-center">Work with us</span>
          <h1 className="font-display font-semibold text-ink tracking-[-0.02em] leading-[1.03] text-[clamp(2.4rem,6vw,4.75rem)] max-w-[16ch] mx-auto mt-6">
            We build the system{' '}
            <em className="italic font-light hero-italic-grad">then grow it</em>
          </h1>
          <p className="mx-auto mt-7 max-w-[52ch] text-ink-dim text-lg leading-relaxed">
            Every engagement follows the same path: we build your growth system, spend 30 days
            actively growing it, then partner with you to keep it compounding.
          </p>
          <div className="mt-9 flex items-center justify-center gap-3">
            <Link href="/contact" className="btn-primary text-sm">Book a Growth Strategy Session</Link>
            <Link href="#partnerships" className="btn-ghost text-sm">See partnerships</Link>
          </div>
        </div>
      </section>

      {/* ─────────── WHY — THE WEBSITE IS A GROWTH ENGINE ─────────── */}
      <section className="bg-bg-alt border-y border-line">
        <div className="container-tight py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="eyebrow">Why it’s an investment</span>
            <h2 className="font-display font-semibold text-ink tracking-[-0.02em] leading-[1.08] text-[clamp(1.9rem,4vw,3rem)] mt-5">
              Your website is a growth engine, not a brochure
            </h2>
            <p className="mt-5 text-ink-dim text-lg leading-relaxed">
              Think about what a website actually does. Done right, it’s the one salesperson who works
              every visitor — qualifying, building trust, and moving them toward a decision — while you
              focus on running the business.
            </p>
          </div>

          <figure className="mt-10 rounded-3xl border-2 border-accent bg-white p-8 lg:p-12 shadow-[0_24px_70px_rgba(2,132,199,0.12)] max-w-3xl">
            <blockquote className="font-display text-2xl lg:text-[2rem] leading-[1.32] text-ink">
              The best salesperson you’ll ever hire doesn’t take a salary, a commission, or a day off.
              It’s a website built to sell: working every visitor toward the close, all day, every day,
              and paying you back long after it’s built.
            </blockquote>
            <figcaption className="mt-5 text-ink-dim leading-relaxed">
              That’s why we price our builds as growth infrastructure — engineered to close and built
              to compound — not as a stack of pages.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ─────────── BUILD PACKAGES ─────────── */}
      <section id="build" className="container-tight py-20 lg:py-28 scroll-mt-20">
        <div className="max-w-2xl">
          <span className="eyebrow">Step one · The build</span>
          <h2 className="font-display font-semibold text-ink tracking-[-0.02em] leading-[1.08] text-[clamp(1.9rem,4vw,3rem)] mt-5">
            Build packages
          </h2>
          <p className="mt-5 text-ink-dim text-lg leading-relaxed">
            Custom design, hand-built for speed, and engineered to convert. Pick the scope that
            matches where your business is headed.
          </p>
        </div>

        {/* Every build includes */}
        <div className="mt-10 rounded-3xl border border-line bg-bg-alt p-6 lg:p-8">
          <div className="text-xs uppercase tracking-[0.16em] text-ink-faint mb-5">Every build includes</div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3">
            {buildIncludes.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                <span className="text-accent mt-0.5 shrink-0"><Glyph name="check" /></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Package cards */}
        <div className="mt-8 grid lg:grid-cols-3 gap-6 items-start">
          {buildPackages.map((pkg) => (
            <div
              key={pkg.name}
              className={[
                'relative rounded-3xl bg-white p-8 shadow-sm flex flex-col',
                pkg.popular
                  ? 'border-2 border-accent shadow-[0_24px_70px_rgba(2,132,199,0.16)] lg:-mt-4'
                  : 'border border-line',
              ].join(' ')}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-on-accent text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div className="text-xs uppercase tracking-[0.16em] text-accent font-medium">{pkg.for}</div>
              <h3 className="font-display text-2xl font-semibold text-ink mt-2">{pkg.name}</h3>
              <div className="mt-4 font-display text-3xl font-semibold text-ink tracking-tight">{pkg.price}</div>
              <div className="mt-1 text-sm text-ink-faint">Timeline · {pkg.timeline}</div>
              <p className="mt-4 text-sm text-ink-dim leading-relaxed">{pkg.blurb}</p>

              <ul className="mt-6 space-y-2.5 flex-1 border-t border-line pt-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink">
                    <span className="text-accent mt-0.5 shrink-0"><Glyph name="check" /></span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={[
                  'mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium transition-all',
                  pkg.popular
                    ? 'btn-primary w-full'
                    : 'border border-line-strong text-ink hover:border-accent hover:text-accent w-full',
                ].join(' ')}
              >
                Book a Growth Strategy Session
              </Link>
              <p className="mt-3 text-center text-xs text-accent">{pkg.pairsWith}</p>
            </div>
          ))}
        </div>

        {/* Sales funnel add-on */}
        <div className="mt-8 rounded-2xl border border-line bg-white p-6 shadow-sm">
          <div className="text-xs uppercase tracking-[0.16em] text-ink-faint mb-2">Sales funnel add-on</div>
          <p className="text-sm text-ink-dim leading-relaxed">
            Add funnel pages to any tier: $2,000–$3,500 each, or bundle for less — 3 for $5,500,
            5 for $8,000.
          </p>
        </div>
      </section>

      {/* ─────────── 30-DAY GROWTH SPRINT ─────────── */}
      <section id="sprint" className="bg-bg-alt border-y border-line scroll-mt-20">
        <div className="container-tight py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="eyebrow">Step two · Where growth begins</span>
              <h2 className="font-display font-semibold text-ink tracking-[-0.02em] leading-[1.05] text-[clamp(1.9rem,4vw,3rem)] mt-5">
                The 30-Day Growth Sprint
              </h2>
              <p className="mt-5 text-ink-dim text-lg leading-relaxed max-w-[46ch]">
                Your growth partnership opens with a focused 30-day sprint. Instead of handing the
                site off, we actively work the system, then bring you a Growth Review on Day 25 with
                what happened and what we’d do over the next 90 days.
              </p>
              <Link href="#partnerships" className="mt-7 inline-flex btn-ghost text-sm">
                See what comes after →
              </Link>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {sprint.map((s) => (
                <li key={s} className="flex items-start gap-2.5 rounded-xl border border-line bg-white p-4 text-sm text-ink shadow-sm">
                  <span className="text-accent mt-0.5 shrink-0"><Glyph name="check" /></span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─────────── GROWTH PARTNERSHIPS ─────────── */}
      <section id="partnerships" className="container-tight py-20 lg:py-28 scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow justify-center">Step three · Growth Partnerships</span>
          <h2 className="font-display font-semibold text-ink tracking-[-0.02em] leading-[1.05] text-[clamp(1.9rem,4vw,3rem)] mt-5">
            Then we become your growth team
          </h2>
          <p className="mt-5 text-ink-dim text-lg leading-relaxed">
            Your build is live — now we keep it growing. Every partnership optimizes, tests, and
            builds month after month, and each build tier has a natural retainer to match.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.16em] text-ink-faint">
            10% off 6-month · 15% off 12-month pay-in-full
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6 items-start">
          {partnerships.map((t, ti) => (
            <div
              key={t.name}
              className={[
                'relative rounded-3xl bg-white p-8 shadow-sm flex flex-col',
                t.popular
                  ? 'border-2 border-accent shadow-[0_24px_70px_rgba(2,132,199,0.16)] lg:-mt-4'
                  : 'border border-line',
              ].join(' ')}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-on-accent text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div className="flex items-center gap-2 text-accent">
                <Glyph name="peak" />
                <span className="text-xs uppercase tracking-[0.16em] font-medium">{t.term}</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink mt-3">{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold text-ink tracking-tight">{t.price}</span>
                <span className="text-ink-faint text-sm">/mo</span>
              </div>
              <p className="mt-4 text-sm text-ink-dim leading-relaxed">{t.tagline}</p>

              <ul className="mt-6 space-y-2.5 flex-1 border-t border-line pt-6">
                {features.map((f) => {
                  const v = f.values[ti]
                  const included = v !== false
                  return (
                    <li
                      key={f.label}
                      className={[
                        'flex items-start gap-2.5 text-sm',
                        included ? 'text-spot-lime' : 'text-ink-faint/60',
                      ].join(' ')}
                    >
                      <span className={included ? 'text-spot-lime-bright mt-0.5 shrink-0' : 'text-ink-faint/45 mt-0.5 shrink-0'}>
                        <Glyph name={included ? 'check' : 'x'} />
                      </span>
                      <span>
                        {f.label}
                        {typeof v === 'string' && <span className="text-ink-faint"> · {v}</span>}
                      </span>
                    </li>
                  )
                })}
              </ul>

              <Link
                href="/contact"
                className={[
                  'mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium transition-all',
                  t.popular
                    ? 'btn-primary w-full'
                    : 'border border-line-strong text-ink hover:border-accent hover:text-accent w-full',
                ].join(' ')}
              >
                Book a Growth Strategy Session
              </Link>
              {t.adNote && (
                <p className="mt-3 text-center text-xs text-ink-faint leading-snug">{t.adNote}</p>
              )}
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink-faint max-w-2xl mx-auto">
          Ad spend is billed to your own accounts — we manage, you own. New site builds are scoped
          separately, and brand / photo / video work is quoted per project.
        </p>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="relative border-t border-line">
        <div className="absolute inset-0 dawn-soft pointer-events-none" aria-hidden />
        <div className="container-tight relative py-24 lg:py-28 text-center">
          <h2 className="font-display font-semibold text-ink tracking-[-0.02em] leading-[1.05] text-[clamp(2rem,4.5vw,3.5rem)] max-w-[30ch] mx-auto">
            Not sure which step you’re on?{' '}
            <em className="italic font-light hero-italic-grad">Let’s figure it out</em>
          </h2>
          <p className="mt-6 text-ink-dim text-lg max-w-[56ch] mx-auto">
            Book a Growth Strategy Session and we’ll map where you are, what to build first, and what
            the next 90 days should look like.
          </p>
          <div className="mt-9">
            <Link href="/contact" className="btn-primary text-sm">Book a Growth Strategy Session</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
