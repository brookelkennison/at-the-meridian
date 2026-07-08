import Link from 'next/link'
import Image from 'next/image'
import TypedIndustries from '@/components/TypedIndustries'
import headshot from '@/lib/headshot.jpg'

// Unsplash helper (matches the convention used elsewhere in the site)
const HU = (id: string, w = 900, h = 1100) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

export const metadata = {
  title: 'At The Meridian — A custom website, and every step from search to sales call',
  description:
    'We build the digital growth systems that help service businesses generate leads, automate operations, and grow with less manual work — then we become the team that grows them.',
}

// ─────────── Showcase cards (hero device strip) ───────────
const showcase = [
  { src: HU('1512941937669-90a1b58e7e9c'), alt: 'Mobile product UI', tall: true },
  { src: HU('1559526324-4b87b5e36e44'), alt: 'Dashboard interface' },
  { src: HU('1460925895917-afdab827c52f'), alt: 'Analytics screen' },
  { src: HU('1551434678-e076c223a692'), alt: 'Team building a business', tall: true },
  { src: HU('1517245386807-bb43f82c33c4'), alt: 'Design workshop' },
]

// The ceiling every owner hits
const problems = [
  { title: 'Leads come inconsistently', body: 'Flood one month, silence the next — never something you can forecast.' },
  { title: 'Follow-up falls through the cracks', body: 'Good prospects go cold because no one got back to them in time.' },
  { title: 'Admin work consumes the week', body: 'The busywork that keeps the lights on eats the hours that would grow the business.' },
  { title: 'Everything depends on someone remembering', body: 'Every process lives in a person’s head instead of a system that runs on its own.' },
  { title: 'Growth creates chaos, not freedom', body: 'More work should mean more freedom. Instead it means more things to keep from breaking.' },
]

// The Meridian System — the connected ecosystem
const systemNodes = [
  { label: 'Traffic', note: 'The right people find you', icon: 'traffic' },
  { label: 'Website', note: 'Built to convert, not just look good', icon: 'code' },
  { label: 'Landing Pages', note: 'A page for every offer', icon: 'page' },
  { label: 'CRM', note: 'Every lead captured & organized', icon: 'crm' },
  { label: 'Automation', note: 'Follow-up that never forgets', icon: 'bolt' },
  { label: 'Sales Pipeline', note: 'Prospects moved to close', icon: 'pipeline' },
  { label: 'Onboarding', note: 'New clients handled smoothly', icon: 'onboard' },
  { label: 'Retention', note: 'Clients who stay and grow', icon: 'shield' },
  { label: 'Referrals', note: 'Happy clients feed the top', icon: 'referral' },
]

// Outcomes
const outcomes = [
  'Generate leads consistently',
  'Eliminate repetitive work',
  'Convert more prospects',
  'Follow up automatically',
  'Scale without hiring too early',
  'Understand your marketing with real data',
]

// Three phases
const phases = [
  {
    tag: 'Phase One',
    name: 'Build',
    body: 'We build the system — the foundation everything else runs on.',
    points: ['Website', 'Funnels', 'Tracking', 'CRM', 'Automation', 'SEO'],
  },
  {
    tag: 'Phase Two',
    name: 'Launch',
    body: 'We go live, then learn — testing and tuning against real behavior.',
    points: ['Test', 'Optimize', 'Collect data', 'Improve conversions'],
  },
  {
    tag: 'Phase Three',
    name: 'Scale',
    body: 'We become the team that grows it — month after month.',
    points: ['Monthly growth strategy', 'SEO', 'Funnels', 'Automation improvements', 'Reporting', 'AI implementation'],
  },
]

// 30-Day Growth Sprint activities
const sprint = [
  'Monitoring conversions',
  'Improving pages',
  'Optimizing funnels',
  'Fixing bottlenecks',
  'Improving SEO',
  'Adjusting automations',
  'Reviewing analytics',
]

// Illustrative before/after proof (representative — not a specific client)
const proof = [
  { label: 'Qualified leads / month', before: '8', after: '42' },
  { label: 'Follow-up', before: 'Manual', after: 'Automated booking' },
  { label: 'Landing page conversion', before: '~1%', after: '6%' },
]

// Growth Partnership teaser
const partnerships = [
  { name: 'Momentum', term: '3-month minimum', body: 'For businesses launching their digital systems.' },
  { name: 'Growth', term: '3-month minimum', body: 'Consistent optimization and lead generation.' },
  { name: 'Scale', term: '6-month minimum', body: 'A long-term strategic partner. AI, SEO, automation, content, reporting — everything.' },
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
    case 'shield':
      return <svg className={c} viewBox="0 0 24 24" {...p}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /></svg>
    case 'bolt':
      return <svg className={c} viewBox="0 0 24 24" {...p}><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" /></svg>
    case 'check':
      return <svg className={c} viewBox="0 0 24 24" {...p}><path d="M20 6L9 17l-5-5" /></svg>
    case 'peak':
      return <svg className={c} viewBox="0 0 24 24" {...p}><path d="M3 20h18L13.5 5l-3.2 6-2.3-3z" /></svg>
    case 'traffic':
      return <svg className={c} viewBox="0 0 24 24" {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" /></svg>
    case 'page':
      return <svg className={c} viewBox="0 0 24 24" {...p}><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>
    case 'crm':
      return <svg className={c} viewBox="0 0 24 24" {...p}><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 00-3-3.87" /></svg>
    case 'pipeline':
      return <svg className={c} viewBox="0 0 24 24" {...p}><path d="M3 6h18l-7 8v6l-4-2v-4z" /></svg>
    case 'onboard':
      return <svg className={c} viewBox="0 0 24 24" {...p}><path d="M20 6L9 17l-5-5" /><circle cx="12" cy="12" r="10" /></svg>
    case 'referral':
      return <svg className={c} viewBox="0 0 24 24" {...p}><circle cx="6" cy="12" r="3" /><circle cx="18" cy="6" r="3" /><circle cx="18" cy="18" r="3" /><path d="M8.6 10.7l6.8-3.4M8.6 13.3l6.8 3.4" /></svg>
    default:
      return null
  }
}

export default function HomePage() {
  return (
    <div className="bg-bg text-ink font-sans antialiased overflow-x-hidden">
      {/* ─────────────────────────── HERO / THE VISION ─────────────────────────── */}
      <section className="relative">
        <div className="absolute inset-0 dawn-hero pointer-events-none" aria-hidden />
        <div className="container-tight relative pt-36 sm:pt-40 pb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 backdrop-blur px-4 py-1.5 text-sm shadow-sm mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-ink-dim">Digital growth systems studio</span>
          </div>

          <h1 className="font-display font-semibold text-ink tracking-[-0.02em] leading-[1.04] text-[clamp(2.5rem,6vw,5.25rem)] max-w-[18ch] mx-auto">
            We build custom websites{' '}
            <em className="italic font-light hero-italic-grad">and every step from search to sales call</em>
          </h1>
          <div className="mt-6 font-grotesk text-xs sm:text-sm tracking-[0.3em] uppercase text-ink-dim">
            For service businesses
          </div>

          <p className="mx-auto mt-7 max-w-[68ch] text-ink-dim text-lg leading-relaxed">
            Most web designers build for the site, not for the system your business actually runs
            on, so you get something beautiful that doesn&apos;t bring in a single lead. We build the
            site and the growth engine around it, so the leads keep coming while you run the
            business.
          </p>

          <div className="mt-9 flex items-center justify-center gap-3">
            <Link href="/contact" className="btn-primary text-sm">Get my growth plan</Link>
            <Link href="/#system" className="btn-ghost text-sm">See how it works</Link>
          </div>
          <p className="mt-4 text-sm text-ink-faint max-w-[52ch] mx-auto">
            Free 30-minute call. No pitch. You&apos;ll leave with a clear plan for your system,
            whether we work together or not.
          </p>

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

      {/* ─────────────────────────── INDUSTRIES (typewriter) ─────────────────────────── */}
      <section className="container-tight py-14 border-y border-line">
        <TypedIndustries />
      </section>

      {/* ─────────────────────────── THE PROBLEMS ─────────────────────────── */}
      <section className="relative">
        <div className="absolute inset-0 dawn-soft pointer-events-none" aria-hidden />
        <div className="container-tight relative py-24 lg:py-32">
          <div className="max-w-2xl">
            <span className="eyebrow">The ceiling</span>
            <h2 className="font-display font-semibold text-ink tracking-[-0.02em] leading-[1.08] text-[clamp(2rem,4.5vw,3.5rem)] mt-5">
              Every owner eventually hits the same ceiling
            </h2>
            <p className="mt-5 text-ink-dim text-lg leading-relaxed">
              It isn’t a lack of effort. It’s that the business runs on people remembering to do
              things — and that only scales so far.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.map((p) => (
              <div key={p.title} className="rounded-2xl border border-line bg-white/70 backdrop-blur p-7">
                <h3 className="font-display text-lg font-medium text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-dim leading-relaxed">{p.body}</p>
              </div>
            ))}
            <div className="rounded-2xl border-2 border-accent bg-gradient-to-br from-sky-tint-soft/40 to-white p-7 shadow-[0_24px_60px_rgba(2,132,199,0.12)] flex flex-col justify-center">
              <span className="text-accent"><Glyph name="peak" /></span>
              <p className="mt-3 font-display text-xl font-medium text-ink leading-snug">
                We build systems that solve all of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── THE MERIDIAN SYSTEM ─────────────────────────── */}
      <section id="system" className="bg-bg-alt border-y border-line scroll-mt-20">
        <div className="container-tight py-24 lg:py-32">
          <div className="max-w-2xl">
            <span className="eyebrow">The Meridian System</span>
            <h2 className="font-display font-semibold text-ink tracking-[-0.02em] leading-[1.05] text-[clamp(2rem,4.5vw,3.5rem)] mt-5">
              One connected growth engine
            </h2>
            <p className="mt-5 text-ink-dim text-lg leading-relaxed">
              Not a pile of services — a single system where every piece feeds the next. Traffic
              becomes leads, leads become clients, clients become referrals, and referrals feed the
              top again. It compounds.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {systemNodes.map((n, i) => (
              <div key={n.label} className="relative rounded-2xl border border-line bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent shrink-0">
                    <Glyph name={n.icon} />
                  </span>
                  <div>
                    <div className="font-grotesk text-[11px] tracking-[0.16em] uppercase text-ink-faint">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="font-display text-lg font-medium text-ink leading-tight">{n.label}</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-ink-dim leading-relaxed">{n.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-ink-faint">
            <span className="h-px w-10 bg-line-strong" />
            <span className="font-grotesk tracking-[0.14em] uppercase text-xs">Referrals feed traffic — the loop closes</span>
            <span className="h-px w-10 bg-line-strong" />
          </div>
        </div>
      </section>

      {/* ─────────────────────────── THE OUTCOMES ─────────────────────────── */}
      <section className="container-tight py-24 lg:py-32">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
          <div>
            <span className="eyebrow">The outcomes</span>
            <h2 className="font-display font-semibold text-ink tracking-[-0.02em] leading-[1.05] text-[clamp(2rem,4.5vw,3.5rem)] mt-5 max-w-[14ch]">
              We help you…
            </h2>
            <p className="mt-5 text-ink-dim text-lg leading-relaxed max-w-[46ch]">
              Every service — websites, funnels, SEO, CRM, automation, AI, analytics — exists to
              deliver these. Not deliverables. Outcomes.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5 shadow-sm">
                <span className="text-accent mt-0.5 shrink-0"><Glyph name="check" /></span>
                <span className="text-ink font-medium leading-snug">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─────────────────────────── THE PROCESS (3 phases) ─────────────────────────── */}
      <section className="bg-bg-alt border-y border-line">
        <div className="container-tight py-24 lg:py-32">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow justify-center">How it works</span>
            <h2 className="font-display font-semibold text-ink tracking-[-0.02em] leading-[1.05] text-[clamp(2rem,4.5vw,3.5rem)] mt-5">
              Build. Launch. Scale.
            </h2>
            <p className="mt-5 text-ink-dim text-lg leading-relaxed">
              Three phases that turn a one-time build into a partnership that keeps compounding.
            </p>
          </div>

          <div className="mt-16 grid lg:grid-cols-3 gap-6">
            {phases.map((ph, i) => (
              <div
                key={ph.name}
                className={[
                  'relative rounded-3xl bg-white p-8 shadow-sm flex flex-col',
                  i === 2 ? 'border-2 border-accent shadow-[0_24px_60px_rgba(2,132,199,0.12)]' : 'border border-line',
                ].join(' ')}
              >
                <div className="font-grotesk text-[11px] tracking-[0.18em] uppercase text-accent">{ph.tag}</div>
                <h3 className="font-display text-2xl font-semibold text-ink mt-2">{ph.name}</h3>
                <p className="mt-3 text-sm text-ink-dim leading-relaxed">{ph.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-6">
                  {ph.points.map((pt) => (
                    <li
                      key={pt}
                      className="text-xs font-grotesk tracking-wide rounded-full border border-line px-3 py-1.5 text-ink-dim"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── 30 DAYS OF GROWTH ─────────────────────────── */}
      <section className="relative">
        <div className="absolute inset-0 dawn-hero pointer-events-none" aria-hidden />
        <div className="container-tight relative py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="eyebrow">The launch is just the start</span>
              <h2 className="font-display font-semibold text-ink tracking-[-0.02em] leading-[1.05] text-[clamp(2rem,4.5vw,3.5rem)] mt-5">
                30 Days of Growth
              </h2>
              <p className="mt-5 text-ink-dim text-lg leading-relaxed max-w-[46ch]">
                A great website is the starting line, not the finish. That&apos;s why every launch
                flows into a <span className="text-ink font-medium">growth partnership</span>, opening
                with a focused 30-day sprint where we actively work the system instead of just
                keeping the lights on.
              </p>
              <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {sprint.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-ink">
                    <span className="text-accent mt-0.5 shrink-0"><Glyph name="check" /></span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-line bg-white p-8 lg:p-10 shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-grotesk tracking-[0.14em] uppercase">
                Day 25 · The Growth Review
              </div>
              <p className="mt-5 font-display text-xl lg:text-2xl leading-[1.4] text-ink">
                “Here’s where we started. Here’s what happened. Here’s what we learned. And here’s
                what I’d do over the next 90 days.”
              </p>
              <p className="mt-6 text-ink-dim leading-relaxed">
                By day 25, the results are already on the table. Choosing the growth partnership that
                fits is the obvious next step.
              </p>
              <Link href="/work-with-us#partnerships" className="mt-8 inline-flex btn-ghost text-sm">
                See growth partnerships →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── PROOF (illustrative) ─────────────────────────── */}
      <section className="container-tight py-24 lg:py-32">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow justify-center">The transformation</span>
          <h2 className="font-display font-semibold text-ink tracking-[-0.02em] leading-[1.05] text-[clamp(2rem,4.5vw,3.5rem)] mt-5">
            It’s not about a prettier website
          </h2>
          <p className="mt-5 text-ink-dim text-lg leading-relaxed">
            It’s about what the system changes. Here’s the kind of shift owners care about.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-5">
          {proof.map((p) => (
            <div key={p.label} className="rounded-2xl border border-line bg-white p-7 shadow-sm">
              <div className="text-xs uppercase tracking-[0.16em] text-ink-faint">{p.label}</div>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex-1">
                  <div className="text-[11px] uppercase tracking-wide text-ink-faint">Before</div>
                  <div className="font-display text-2xl font-semibold text-ink-faint/70 line-through decoration-1">{p.before}</div>
                </div>
                <span className="text-accent text-xl">→</span>
                <div className="flex-1">
                  <div className="text-[11px] uppercase tracking-wide text-accent">After</div>
                  <div className="font-display text-3xl font-semibold text-ink">{p.after}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-ink-faint max-w-2xl mx-auto">
          Figures are illustrative and representative of the kind of results the system is built to
          produce — not from a specific client engagement.
        </p>
      </section>

      {/* ─────────────────────────── GROWTH PARTNERSHIP TEASER ─────────────────────────── */}
      <section className="bg-bg-alt border-y border-line">
        <div className="container-tight py-24 lg:py-32">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow justify-center">Growth Partnerships</span>
            <h2 className="font-display font-semibold text-ink tracking-[-0.02em] leading-[1.05] text-[clamp(2rem,4.5vw,3.5rem)] mt-5">
              We become the team that grows it
            </h2>
            <p className="mt-5 text-ink-dim text-lg leading-relaxed">
              Once the system is live, we stay on as your growth team — optimizing, testing, and
              building month after month. Choose the pace of your climb.
            </p>
          </div>

          <div className="mt-16 grid lg:grid-cols-3 gap-6">
            {partnerships.map((pp, i) => (
              <div
                key={pp.name}
                className={[
                  'rounded-3xl bg-white p-8 shadow-sm flex flex-col',
                  i === 1 ? 'border-2 border-accent shadow-[0_24px_60px_rgba(2,132,199,0.12)]' : 'border border-line',
                ].join(' ')}
              >
                <div className="flex items-center gap-2 text-accent">
                  <Glyph name="peak" />
                  <span className="font-grotesk text-[11px] tracking-[0.16em] uppercase">{pp.term}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-ink mt-3">{pp.name}</h3>
                <p className="mt-3 text-sm text-ink-dim leading-relaxed flex-1">{pp.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/work-with-us" className="btn-primary text-sm">Explore how we work together</Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── ABOUT ─────────────────────────── */}
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
              We speak the language of growth, not deliverables. You’ve already proven the business
              works — we build the system that takes it further, so it keeps moving so you can focus
              elsewhere.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 gap-x-12 gap-y-6 text-ink-dim leading-relaxed">
              <p>
                I&apos;m Brooke, the engineer behind At The Meridian. I spent five years in corporate
                software, building custom applications and websites from the ground up. That&apos;s
                where I learned to see the whole system: not just clean code, but the psychology
                behind how people search, how they move through a page, and the messaging that
                actually gets them to act.
              </p>
              <p>
                My passion is results, and doing whatever it takes to reach them. I&apos;ve built
                sites that looked beautiful and delivered nothing, and that&apos;s exactly why every
                package I offer includes a follow-through strategy. A website is where it starts, not
                where the work ends. My job is making sure it pays off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── CTA + CONTACT ─────────────────────────── */}
      <section className="relative">
        <div className="absolute inset-0 dawn-hero pointer-events-none" aria-hidden />
        <div className="container-tight relative py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="eyebrow">See where you could be</span>
              <h2 className="mt-5 font-display font-semibold text-ink tracking-[-0.02em] leading-[1.05] text-[clamp(2.1rem,4.6vw,3.6rem)] max-w-[18ch]">
                Every month without a system,{' '}
                <em className="italic font-light hero-italic-grad">leads slip away</em>
              </h2>
              <p className="mt-6 text-ink-dim text-lg max-w-[46ch]">
                With us, your site gets built around your business, not the other way around. We start
                by diagnosing your systems, bottlenecks, and pain points, then build to fix them, so
                your site finally delivers the growth it was meant to. Here&apos;s what that shift
                looks like.
              </p>

              <div className="mt-8">
                <Link href="/contact" className="btn-primary text-sm">Get in touch</Link>
                <p className="mt-4 text-xs text-ink-faint max-w-[40ch] leading-snug">
                  Free 30-minute call. No pitch. You&apos;ll leave with a clear plan whether we work
                  together or not.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-2 font-grotesk text-sm">
                <a href="mailto:brooke@atthemeridian.co" className="text-ink hover:text-accent transition-colors">
                  brooke@atthemeridian.co
                </a>
                <span className="text-ink-faint">atthemeridian.co</span>
              </div>
            </div>

            {/* Illustrative "where you could be" growth chart */}
            <div className="rounded-3xl border border-line bg-white/80 backdrop-blur p-6 lg:p-8 shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
              <svg viewBox="0 0 320 180" className="w-full h-auto" role="img" aria-label="Illustrative chart: leads staying flat with your site today versus rising with the Meridian system">
                <defs>
                  <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0284c7" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* area under the rising line */}
                <path d="M20,140 C120,132 190,92 300,40 L300,165 L20,165 Z" fill="url(#growthFill)" />
                {/* flat "today" line */}
                <path d="M20,140 C110,138 190,142 300,138" fill="none" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
                {/* rising "with system" line */}
                <path d="M20,140 C120,132 190,92 300,40" fill="none" stroke="#0284c7" strokeWidth="3.5" strokeLinecap="round" />
                {/* endpoint markers */}
                <circle cx="300" cy="138" r="4" fill="#94a3b8" />
                <circle cx="300" cy="40" r="5" fill="#0284c7" />
                <circle cx="20" cy="140" r="4" fill="#64748b" />
              </svg>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-ink-faint">
                  <span className="w-3 h-0.5 rounded bg-[#cbd5e1]" /> Your site today
                </span>
                <span className="flex items-center gap-2 text-ink font-medium">
                  <span className="w-3 h-0.5 rounded bg-accent" /> With the growth engine
                </span>
              </div>
              <p className="mt-3 text-[11px] text-ink-faint leading-snug">
                Illustrative — representative of the shift the system is built to create, not a
                specific client result.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
