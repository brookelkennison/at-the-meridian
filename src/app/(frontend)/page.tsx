import Link from 'next/link'
import Image from 'next/image'
import QuickContactForm from '@/components/QuickContactForm'
import ServicesAccordion from '@/components/ServicesAccordion'
import headshot from '@/lib/headshot.jpg'

// Unsplash helper (matches the convention used elsewhere in the site)
const HU = (id: string, w = 900, h = 1100) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

export const metadata = {
  title: 'At The Meridian — Build the business you always pictured',
  description:
    'An online growth studio for $1M+ operators. You built something real — we engineer the growth that takes it to its peak. Site, SEO, paid, CRM, and lead generation as one system.',
}

// ─────────── Showcase cards (hero device strip) ───────────
const showcase = [
  { src: HU('1512941937669-90a1b58e7e9c'), alt: 'Mobile product UI', tall: true },
  { src: HU('1559526324-4b87b5e36e44'), alt: 'Dashboard interface' },
  { src: HU('1460925895917-afdab827c52f'), alt: 'Analytics screen' },
  { src: HU('1551434678-e076c223a692'), alt: 'Team building a business', tall: true },
  { src: HU('1517245386807-bb43f82c33c4'), alt: 'Design workshop' },
]

// Industries we build for
const industries = [
  'Landscape Design',
  'Concrete & Masonry',
  'Construction',
  'Interior Design',
  'Custom Home Builders',
  'Remodelers',
]

// The "where you are → where you could be" contrast
const nowState = [
  'Chasing the next referral — one slow quarter from empty.',
  'A calendar that floods in spring and goes silent by winter.',
  'Watching the national chains take the top of every search.',
  'Doing the work, without the payoff you pictured.',
]
const futureState = [
  'A pipeline you can forecast — months out, not weeks.',
  'The phone ringing with ready buyers, not price-shoppers.',
  'Top of local search, owning your market.',
  'The business running like you always said it would.',
]

// Services
const featuredService = {
  name: 'High-Performance Websites',
  body: 'Conversion-engineered, hand-coded sites built to load fast, rank, and turn visitors into pipeline. Every page, headline, and funnel is engineered against a single metric: revenue produced. Beauty is a byproduct.',
  points: [
    'Hand-coded — no template bloat',
    'Conversion-first UX and copy',
    'Built to outrank on technical SEO',
    'Analytics & CRM wired in from day one',
  ],
}
const why = [
  {
    title: 'The Full Revenue Stack',
    body: 'Site, SEO, paid, CRM, and lead gen under one roof. Most agencies do one thing well and outsource the rest — we own all of it, so nothing breaks at the seams.',
    icon: 'scale',
  },
  {
    title: 'Operator-Minded',
    body: 'We came up on the operator side, where the only metric that mattered was revenue. We optimize for outcomes, not deliverables shipped.',
    icon: 'bolt',
  },
  {
    title: 'Senior Partners Only',
    body: 'We stay small on purpose. Every engagement is led by a senior partner — never handed off to a junior learning on your budget.',
    icon: 'code',
  },
  {
    title: 'Total Transparency',
    body: 'Ad spend stays in your accounts — we manage, you own. Quarterly reviews show exactly what changed and what it returned. A real paper trail.',
    icon: 'shield',
  },
  {
    title: 'Built to Compound',
    body: 'The launch is the starting line, not the finish. Every build rolls into a system that compounds month after month.',
    icon: 'tag',
  },
  {
    title: 'First-Priority Support',
    body: 'Retainer clients get same-business-day response. One tracked channel, clear priorities — so nothing slips through the cracks.',
    icon: 'support',
  },
]

const stats = [
  { value: 'Predictable', label: 'Pipeline you can forecast, month after month' },
  { value: 'Top', label: 'Of local search in your market' },
  { value: '90 days', label: 'To measurable, tracked ROI' },
  { value: '$1M+', label: 'Operators we help reach their peak' },
]

// Monthly retainers — framed as three stages of the climb.
// Each tier shows the full feature list; not-included items render greyed with an ×.
const tierMeta = [
  { stage: 'Basecamp', tier: 'Tier 1', name: 'Maintain & Optimize', price: '$3,500', tagline: 'Protect what you’ve built and start the steady climb.', popular: false, adNote: '' },
  { stage: 'Momentum', tier: 'Tier 2', name: 'Grow', price: '$5,500', tagline: 'Build real momentum — an active growth engine and paid social.', popular: true, adNote: 'Ad spend billed to your account · rec. $750–$1,000/mo' },
  { stage: 'Summit', tier: 'Tier 3', name: 'Scale', price: '$8,500', tagline: 'The summit — a full partner running your entire presence.', popular: false, adNote: 'Ad spend billed to your account · rec. $1,000–$3,000/mo' },
]

// values are [Tier 1, Tier 2, Tier 3]; true = included, false = not included,
// a string = included with a tier-specific amount.
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

// ─────────── Small inline icon set ───────────
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
    case 'code':
      return <svg className={c} viewBox="0 0 24 24" {...p}><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
    case 'scale':
      return <svg className={c} viewBox="0 0 24 24" {...p}><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" /></svg>
    case 'support':
      return <svg className={c} viewBox="0 0 24 24" {...p}><path d="M4 14v-3a8 8 0 0116 0v3" /><rect x="2" y="14" width="4" height="6" rx="1" /><rect x="18" y="14" width="4" height="6" rx="1" /></svg>
    case 'shield':
      return <svg className={c} viewBox="0 0 24 24" {...p}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /></svg>
    case 'tag':
      return <svg className={c} viewBox="0 0 24 24" {...p}><path d="M20 12l-8 8-9-9V3h8l9 9z" /><circle cx="7.5" cy="7.5" r="1.2" /></svg>
    case 'bolt':
      return <svg className={c} viewBox="0 0 24 24" {...p}><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" /></svg>
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

export default function HomePage() {
  return (
    <div className="bg-bg text-ink font-sans antialiased overflow-x-hidden">
      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section className="relative">
        <div className="absolute inset-0 dawn-hero pointer-events-none" aria-hidden />
        <div className="container-tight relative pt-36 sm:pt-40 pb-20 text-center">
          {/* badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 backdrop-blur px-4 py-1.5 text-sm shadow-sm mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-ink-dim">Online growth studio · for $1M+ operators</span>
          </div>

          <h1 className="font-display font-semibold text-ink tracking-[-0.02em] leading-[1.02] text-[clamp(2.6rem,6.5vw,5.5rem)] max-w-[17ch] mx-auto">
            Build the business you{' '}
            <em className="italic font-light hero-italic-grad">always pictured</em>
          </h1>

          <p className="mx-auto mt-7 max-w-[52ch] text-ink-dim text-lg leading-relaxed">
            At the meridian, the sun reaches its highest point. That&apos;s where your business is
            headed — and we engineer the climb. Site, SEO, paid, CRM, and lead generation, built as
            one system that compounds.
          </p>

          <div className="mt-9 flex items-center justify-center gap-3">
            <Link href="/contact" className="btn-primary text-sm">Book a discovery call</Link>
            <Link href="/#retainers" className="btn-ghost text-sm">See the path</Link>
          </div>

          {/* device showcase strip */}
          <div className="mt-16 sm:mt-20">
            <div className="flex items-end justify-center gap-3 sm:gap-4 max-w-5xl mx-auto px-2">
              {showcase.map((s, i) => (
                <div
                  key={i}
                  className={[
                    'relative overflow-hidden rounded-2xl border border-line bg-white shadow-[0_18px_50px_rgba(15,23,42,0.10)] shrink-0',
                    s.tall ? 'w-1/4 sm:w-1/5' : 'w-1/5 sm:w-1/6',
                  ].join(' ')}
                  style={{ aspectRatio: s.tall ? '9 / 16' : '9 / 13' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.src} alt={s.alt} className="absolute inset-0 w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── INDUSTRIES ─────────────────────────── */}
      <section id="work" className="container-tight py-12 border-y border-line scroll-mt-24">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-ink-faint mb-6">
          Built for high-ticket trades
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {industries.map((name) => (
            <span
              key={name}
              className="font-display text-base sm:text-lg font-medium text-ink-faint hover:text-ink-dim transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* ─────────────────────────── TRANSFORMATION ─────────────────────────── */}
      <section className="relative">
        <div className="absolute inset-0 dawn-soft pointer-events-none" aria-hidden />
        <div className="container-tight relative py-24 lg:py-32">
          <div className="max-w-2xl">
            <span className="eyebrow">The climb</span>
            <h2 className="font-display font-semibold text-ink tracking-[-0.02em] leading-[1.08] text-[clamp(2rem,4.5vw,3.5rem)] mt-5">
              You&apos;ve already done the hard part
            </h2>
            <p className="mt-5 text-ink-dim text-lg leading-relaxed">
              You built something real. The next climb isn&apos;t more hustle — it&apos;s the system
              that turns the work you&apos;ve already done into the growth you pictured.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {/* where you are now */}
            <div className="rounded-3xl border border-line bg-white/70 backdrop-blur p-8 lg:p-10">
              <div className="text-xs uppercase tracking-[0.16em] text-ink-faint mb-6">
                Where you are now
              </div>
              <ul className="space-y-4">
                {nowState.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-dim">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ink-faint shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* where you could be */}
            <div className="rounded-3xl border-2 border-accent bg-gradient-to-br from-sky-tint-soft/40 to-white p-8 lg:p-10 shadow-[0_24px_60px_rgba(2,132,199,0.12)]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-accent mb-6">
                <Glyph name="peak" /> Where you could be
              </div>
              <ul className="space-y-4">
                {futureState.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink">
                    <span className="text-accent mt-0.5 shrink-0"><Glyph name="check" /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── ABOUT + STATS ─────────────────────────── */}
      <section id="about" className="container-tight py-24 lg:py-32 scroll-mt-24">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
          <div>
            <span className="eyebrow">About</span>
            <div className="mt-8 relative overflow-hidden rounded-3xl border border-line shadow-[0_24px_60px_rgba(15,23,42,0.12)] max-w-sm">
              <Image
                src={headshot}
                alt="Brooke Kennison, Founder &amp; Principal of At The Meridian"
                placeholder="blur"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-5">
              <div className="font-display text-lg font-medium text-ink">Brooke Kennison</div>
              <div className="text-sm text-ink-faint">Founder &amp; Principal</div>
            </div>
          </div>
          <div>
            <p className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] leading-[1.25] tracking-[-0.01em] text-ink">
              We speak the language of growth, not deliverables. You&apos;ve already proven the
              business works — we engineer the system that takes it to its peak, so the work compounds
              instead of breaking at the seams.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 gap-x-12 gap-y-6 text-ink-dim leading-relaxed">
              <p>
                Most agencies optimize for output. We optimize for outcomes — because we came up on
                the operator side, where the only metric that mattered was the business getting where
                you always knew it could.
              </p>
              <p>
                We stay small on purpose. Every engagement is led by a senior partner, and we only
                take on the climbs we believe we can summit with you.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-line pt-12">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl lg:text-4xl font-semibold text-ink tracking-tight">
                    {s.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-ink-faint leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── SERVICES ─────────────────────────── */}
      <section id="services" className="bg-bg-alt border-y border-line">
        <div className="container-tight py-24 lg:py-32">
          <span className="eyebrow">The engine</span>
          <h2 className="font-display font-semibold text-ink tracking-[-0.02em] leading-[1.05] text-[clamp(2rem,4.5vw,3.5rem)] mt-5 max-w-[16ch]">
            Everything it takes to climb
          </h2>
          <p className="mt-5 max-w-[54ch] text-ink-dim text-lg leading-relaxed">
            Five services, one team — no handoffs, no silos. The engine that turns the business you
            built into the business you pictured.
          </p>

          <div className="mt-14 grid lg:grid-cols-2 gap-6">
            {/* Left: featured + list */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-line bg-white p-7 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-accent/10 text-accent">
                    <Glyph name="bolt" />
                  </span>
                  <h3 className="font-display text-xl font-medium text-ink">{featuredService.name}</h3>
                </div>
                <p className="text-ink-dim leading-relaxed mb-5">{featuredService.body}</p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {featuredService.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-ink">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              <ServicesAccordion />
            </div>

            {/* Right: client reporting portal screenshot */}
            <div className="relative rounded-2xl border border-line overflow-hidden bg-gradient-to-br from-sky-tint-soft/60 via-white to-white shadow-sm min-h-[420px] flex flex-col items-center justify-center p-6 lg:p-8">
              <div className="absolute inset-0 dawn-hero opacity-70" aria-hidden />
              <div className="relative w-full rounded-xl border border-line bg-white shadow-[0_24px_60px_rgba(15,23,42,0.16)] overflow-hidden">
                <div className="flex items-center gap-1.5 px-3 h-8 border-b border-line bg-bg-alt">
                  <span className="w-2.5 h-2.5 rounded-full bg-spot-red/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-spot-yellow/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-accent/50" />
                  <span className="ml-2 text-[10px] text-ink-faint font-grotesk tracking-wide">
                    app.atthemeridian.com/portal
                  </span>
                </div>
                <Image
                  src="/images/dashboard.png"
                  alt="At The Meridian client reporting portal — traffic, leads, rankings, conversion, revenue, and ROI"
                  width={2290}
                  height={1832}
                  className="w-full h-auto"
                />
              </div>
              <p className="relative mt-5 text-center text-sm text-ink-dim max-w-sm">
                Every client gets a private portal — real-time reporting on the metrics that matter.
                No black box, no monthly mystery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── WHY CHOOSE US ─────────────────────────── */}
      <section className="container-tight py-24 lg:py-32 text-center">
        <span className="eyebrow justify-center">Why operators choose us</span>
        <h2 className="font-display font-semibold text-ink tracking-[-0.02em] leading-[1.05] text-[clamp(2rem,4.5vw,3.5rem)] mt-5 max-w-[16ch] mx-auto">
          Proof it&apos;s more than a promise
        </h2>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {why.map((w) => (
            <div
              key={w.title}
              className="rounded-2xl border border-line bg-white p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 text-accent mb-5">
                <Glyph name={w.icon} />
              </span>
              <h3 className="font-display text-lg font-medium text-ink mb-2">{w.title}</h3>
              <p className="text-sm text-ink-dim leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────── RETAINERS (the climb) ─────────────────────────── */}
      <section id="retainers" className="bg-bg-alt border-y border-line scroll-mt-20">
        <div className="container-tight py-24 lg:py-32">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow justify-center">The path</span>
            <h2 className="font-display font-semibold text-ink tracking-[-0.02em] leading-[1.05] text-[clamp(2rem,4.5vw,3.5rem)] mt-5">
              Three stages of the climb
            </h2>
            <p className="mt-5 text-ink-dim text-lg leading-relaxed">
              The launch is the starting line. From there, every month compounds — pick the pace of
              your climb, and we partner with you the whole way up.
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-ink-faint">
              3-month minimum · 90-day performance review built in
            </p>
          </div>

          <div className="mt-16 grid lg:grid-cols-3 gap-6 items-start">
            {tierMeta.map((t, ti) => (
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
                  <span className="text-xs uppercase tracking-[0.16em] font-medium">{t.stage}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-ink mt-3">{t.name}</h3>
                <div className="text-xs uppercase tracking-[0.16em] text-ink-faint mt-1">{t.tier}</div>
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
                          {typeof v === 'string' && (
                            <span className="text-ink-faint"> · {v}</span>
                          )}
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
                  Book a discovery call
                </Link>
                {t.adNote && (
                  <p className="mt-3 text-center text-xs text-ink-faint leading-snug">{t.adNote}</p>
                )}
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-ink-faint max-w-2xl mx-auto">
            Not included: new site builds (scoped separately) and brand/photo/video work. Ad spend is
            billed to your own accounts — we manage, you own. 10% off 6-month and 15% off 12-month
            pay-in-full.
          </p>
        </div>
      </section>

      {/* ─────────────────────────── TESTIMONIAL ─────────────────────────── */}
      <section className="container-tight py-24 lg:py-32">
        <span className="eyebrow">From the trenches</span>
        <div className="mt-10 grid lg:grid-cols-[1.3fr_0.7fr] gap-6 items-stretch">
          <div className="rounded-2xl border border-line bg-white p-8 lg:p-12 shadow-sm flex flex-col justify-between">
            <p className="font-display text-xl lg:text-2xl leading-[1.45] text-ink">
              &ldquo;For the first time, I wasn&apos;t lying awake wondering where the next job was
              coming from — the pipeline was just there. They rebuilt the site, then the funnel, and
              inbound tripled. It&apos;s the business I always said we&apos;d become.&rdquo;
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Image
                src={headshot}
                alt="Client portrait"
                width={48}
                height={48}
                className="rounded-full object-cover w-12 h-12"
              />
              <div>
                <div className="font-medium text-ink">Founder, 7-figure trades business</div>
                <div className="text-sm text-ink-faint">Retainer client · Tier 2 Grow</div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-gradient-to-br from-sky-tint-soft/50 to-white p-8 lg:p-12 shadow-sm flex flex-col justify-center">
            <div className="font-display text-5xl lg:text-6xl font-semibold text-ink tracking-tight leading-none">
              The business they always pictured
            </div>
            <p className="mt-5 text-ink-dim leading-relaxed">
              The operators who run both engines from day one are the ones who reach it — and see the
              returns everyone else only talks about.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── CTA + CONTACT ─────────────────────────── */}
      <section className="relative">
        <div className="absolute inset-0 dawn-hero pointer-events-none" aria-hidden />
        <div className="container-tight relative py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-display font-semibold text-ink tracking-[-0.02em] leading-[1.05] text-[clamp(2.2rem,5vw,4rem)] max-w-[14ch]">
                Ready for the climb?{' '}
                <em className="italic font-light hero-italic-grad">Let&apos;s map your path</em>
              </h2>
              <p className="mt-6 text-ink-dim text-lg max-w-[44ch]">
                No pitch. We&apos;ll diagnose where the gaps are, where the leverage is, and whether
                we&apos;re the right team to get you to the top. If we&apos;re not a fit, you&apos;ll
                know in the first 10 minutes. If we are, you&apos;ll have a custom scope in two
                business days.
              </p>
              <div className="mt-8 flex flex-col gap-2 font-grotesk text-sm">
                <a href="mailto:hello@atthemeridian.com" className="text-ink hover:text-accent transition-colors">
                  hello@atthemeridian.com
                </a>
                <span className="text-ink-faint">atthemeridian.com</span>
              </div>
            </div>

            <div className="rounded-3xl border border-line bg-white/70 backdrop-blur p-7 lg:p-9 shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
              <QuickContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
