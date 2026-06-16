import Link from 'next/link'
import ImageSpot from '@/components/ImageSpot'
import Reveal from '@/components/Reveal'
import DiscoveryForm from '@/components/DiscoveryForm'
import EstimateForm from '@/components/EstimateForm'
import MockMobileSite from '@/components/MockMobileSite'
import IndustryArcMenu from '@/components/IndustryArcMenu'
import ParallaxBackdrop from '@/components/ParallaxBackdrop'
import StickyIntro from '@/components/StickyIntro'
import SaloPhotoStack from '@/components/SaloPhotoStack'
import ScrollProgressPill from '@/components/ScrollProgressPill'
import { images } from '@/lib/images'
import headshot from '@/lib/headshot.jpg'

const HU = (id: string, w = 800, h = 1700) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

const homeHeroStack = [
  // Top row — 2 larger cards (each spans 3 of 6 columns)
  { src: HU('1542744173-8e7e53415bb0'), alt: 'Team offsite.',  span: 3, ratio: 0.72, speed: -60, offset: 0 },
  { src: HU('1517048676732-d65bc937f952'), alt: 'Strategy session.', span: 3, ratio: 0.72, speed: 50,  offset: 70 },
  // Bottom row — 3 cards (each spans 2 of 6 columns)
  { src: HU('1556761175-5973dc0f32e7'),    alt: 'Build sprint.',     span: 2, ratio: 0.56, speed: -45, offset: 0 },
  { src: HU('1559136555-9303baea8ebd'),    alt: 'Quiet hours.',      span: 2, ratio: 0.56, speed: 65,  offset: 50 },
  { src: HU('1517245386807-bb43f82c33c4'),    alt: 'Studio workshop.',     span: 2, ratio: 0.56, speed: -55, offset: 25 },
]

export const metadata = {
  title: 'At The Meridian — Where Performance Reaches Its Peak',
  description:
    'At The Meridian builds high-converting websites and growth systems for businesses doing $1M+ in revenue. SEO, paid ads, CRM, and lead generation retainers.',
}

/**
 * Home page — dark funnel design.
 *
 * To swap any image placeholder for a real photo, set the `src` (and `alt`)
 * prop on the <ImageSpot /> components below. The placeholder decoration
 * auto-hides via the `:has(img)` selector in globals.css.
 */
export default function HomePage() {
  return (
    <div className="bg-bg text-ink font-sans antialiased">
      {/* ─────────── Hero — Salo-style sticky parallax intro ─────────── */}
      <header className="relative">
        <StickyIntro
          text={
            <div>
              <span className="eyebrow">Online growth studio · for $1M+ operators</span>
              <h1 className="headline text-display-xl mt-8 mb-10 max-w-[15ch]">
                Where your business reaches{' '}
                <em className="text-accent">its peak.</em>
              </h1>
              <div className="mb-9">
                <ScrollProgressPill label="Intro" />
              </div>
              <p className="text-ink-dim text-lg sm:text-xl leading-[1.55] max-w-[52ch] mb-10">
                It starts with the site — conversion-engineered, hand-coded, built to outrank. Then we elevate results:{' '}
                <span className="text-ink">SEO that compounds</span>,{' '}
                <span className="text-ink">lead generation that fills the calendar</span>, and{' '}
                <span className="text-ink">
                  CRM systems that turn demand into closed revenue.
                </span>
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="btn-primary">
                  Book a discovery call <span aria-hidden>→</span>
                </Link>
                <Link href="#packages" className="btn-ghost">
                  See engagements
                </Link>
              </div>
            </div>
          }
          photos={<SaloPhotoStack photos={homeHeroStack} columns={6} />}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent z-10" />
      </header>

      {/* ─────────── The Meridian Stack — foundation → elevation visual ─────────── */}
      <section className="border-b border-line py-14">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          <div className="flex items-center justify-center gap-3 text-[11px] tracking-[0.22em] uppercase text-ink-faint mb-12">
            <span className="w-7 h-px bg-accent" />
            <span>The Meridian Stack</span>
            <span className="w-7 h-px bg-accent" />
          </div>

          {/* Desktop: connected horizon with dots */}
          <div className="hidden lg:block relative">
            <div className="absolute top-2 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            <div className="grid grid-cols-4 gap-6 relative">
              {[
                {
                  num: '01',
                  stage: 'Foundation',
                  label: 'High-converting website',
                  desc: 'Hand-coded and engineered to convert.',
                },
                {
                  num: '02',
                  stage: 'Elevation',
                  label: 'SEO authority',
                  desc: 'Compounding reach. Top of search.',
                },
                {
                  num: '03',
                  stage: 'Acceleration',
                  label: 'Lead generation',
                  desc: 'Qualified pipeline, week after week.',
                },
                {
                  num: '04',
                  stage: 'Compound',
                  label: 'CRM nurture & follow-up',
                  desc: 'Every dollar of demand, converted.',
                },
              ].map((s) => (
                <div key={s.num} className="text-center px-4">
                  <div
                    className="w-4 h-4 rounded-full bg-accent mx-auto"
                    style={{ boxShadow: '0 0 24px rgba(125, 211, 252, 0.6)' }}
                  />
                  <div className="mt-7 font-serif italic text-sm text-accent mb-2">
                    {s.num}
                  </div>
                  <div className="text-[10px] tracking-[0.22em] uppercase text-ink-faint mb-2">
                    {s.stage}
                  </div>
                  <div className="font-serif font-light text-xl mb-2 tracking-tight">
                    {s.label}
                  </div>
                  <div className="text-xs text-ink-dim leading-relaxed">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile / tablet: stacked rows */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
            {[
              {
                num: '01',
                stage: 'Foundation',
                label: 'High-converting website',
                desc: 'Hand-coded and engineered to convert.',
              },
              {
                num: '02',
                stage: 'Elevation',
                label: 'SEO authority',
                desc: 'Compounding reach. Top of search.',
              },
              {
                num: '03',
                stage: 'Acceleration',
                label: 'Lead generation',
                desc: 'Qualified pipeline, week after week.',
              },
              {
                num: '04',
                stage: 'Compound',
                label: 'CRM nurture & follow-up',
                desc: 'Every dollar of demand, converted.',
              },
            ].map((s) => (
              <div key={s.num} className="flex items-start gap-4">
                <span
                  className="w-3 h-3 rounded-full bg-accent flex-shrink-0 mt-1.5"
                  style={{ boxShadow: '0 0 16px rgba(125, 211, 252, 0.5)' }}
                />
                <div className="flex-1">
                  <div className="font-serif italic text-xs text-accent">{s.num}</div>
                  <div className="text-[10px] tracking-[0.22em] uppercase text-ink-faint mt-0.5 mb-1">
                    {s.stage}
                  </div>
                  <div className="font-serif font-light text-lg mb-1 tracking-tight">
                    {s.label}
                  </div>
                  <div className="text-xs text-ink-dim leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Trusted By — client logo strip ─────────── */}
      <section className="border-t border-line py-14 lg:py-20">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="w-7 h-px bg-accent" />
            <span className="text-[11px] tracking-[0.32em] uppercase text-ink-faint font-medium">
              Trusted By
            </span>
            <span className="w-7 h-px bg-accent" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-20">
            {[
              { src: '/images/art-n-wood.png', alt: 'Art N Wood', size: 'h-8 sm:h-9' },
              { src: '/images/bandl.png', alt: 'B&L', size: 'h-8 sm:h-9' },
              { src: '/images/creedence-logo.png', alt: 'Creedence', size: 'h-12 sm:h-14' },
              { src: '/images/mcs-lawn-care.png', alt: 'MCS Lawn Care', size: 'h-12 sm:h-14' },
            ].map((logo) => (
              <img
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                className={`${logo.size} w-auto object-contain`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Mission ─────────── */}
      <section className="border-t border-line py-24 lg:py-40">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* ─────────── Left — Our Work arc menu ─────────── */}
            <div className="lg:sticky lg:top-32">
              <span className="eyebrow-dark">Our Work</span>
              <div className="mt-8">
                <IndustryArcMenu />
              </div>
            </div>

            {/* ─────────── Right — phone, with the philosophy text beneath it ─────────── */}
            <div>
              {/* Angled mobile mockup — replace placeholder with a real screenshot:
                  <Image src={mobileShot} alt="A recent At The Meridian build" fill className="object-cover object-top z-[2]" /> */}
              <div
                className="mx-auto max-w-[260px]"
                style={{ transform: 'rotate(-5deg)' }}
              >
                {/* Phone shell */}
                <div
                  className="relative bg-bg-3 rounded-[40px] p-2 border border-line-strong"
                  style={{
                    boxShadow:
                      '0 40px 100px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(125, 211, 252, 0.1)',
                  }}
                >
                  {/* Screen */}
                  <div className="relative aspect-[9/19] bg-bg rounded-[32px] overflow-hidden">
                    {/* Notch */}
                    <div
                      aria-hidden
                      className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-bg-3 rounded-full z-20"
                    />
                    {/* Fake client mobile site — swap for a real screenshot when ready */}
                    <MockMobileSite />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─────────── Our Philosophy — full-width text block ─────────── */}
          <div className="mt-20 lg:mt-28">
            <span className="eyebrow-dark">Our Philosophy</span>
            <div className="mt-8">
              <p className="font-serif font-light text-2xl sm:text-3xl lg:text-4xl leading-[1.35] tracking-tight mb-8">
                A <em className="text-accent italic">meridian</em> is the moment the sun reaches its highest point — its peak. It’s not a destination. It’s an arrival.
              </p>
              <p className="font-serif font-light text-2xl sm:text-3xl lg:text-4xl leading-[1.35] tracking-tight mb-8">
                We exist to bring businesses to that point. Not incremental growth. Not vanity metrics. The version of your company that’s been waiting on the other side of better systems.
              </p>
              <p className="font-serif font-light text-2xl sm:text-3xl lg:text-4xl leading-[1.35] tracking-tight">
                We work exclusively with operators who’ve already proven the model. Our job is to build the machine that takes you from a strong business to{' '}
                <em className="text-accent italic">the obvious choice in your market.</em>
              </p>
            </div>
          </div>

          <Reveal className="mt-16 grid sm:grid-cols-3 gap-8 pt-12 border-t border-line">
            {[
              {
                title: '01 — Built to Convert',
                body: 'Every page, headline, and funnel is engineered against a single metric: revenue produced. Beauty is a byproduct.',
              },
              {
                title: '02 — Compounding Systems',
                body: 'SEO, paid, CRM, and lead gen don’t operate in silos. We build them as one connected engine that gets stronger over time.',
              },
              {
                title: '03 — Operator-Grade',
                body: 'We speak revenue, margin, and LTV — not impressions. You get a partner who understands what’s actually at stake.',
              },
            ].map((p) => (
              <div key={p.title}>
                <h4 className="text-base text-accent font-medium mb-3">{p.title}</h4>
                <p className="text-sm text-ink-dim leading-relaxed">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─────────── About / Founder ─────────── */}
      <section id="about" className="border-t border-line py-24 lg:py-40">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-24 items-center">
            <Reveal className="aspect-[4/5] w-full max-w-[520px]">
              <ImageSpot
                className="rounded-2xl"
                label="Founder portrait"
                sub="Editorial · luxury beach · 4:5"
                src={headshot}
                alt="Brooke — Founder, At The Meridian"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </Reveal>
            <Reveal>
              <span className="inline-flex items-center gap-3 font-sans italic text-ink-dim text-base sm:text-lg tracking-normal normal-case before:content-[''] before:w-7 before:h-px before:bg-accent">
                Behind the studio
              </span>
              <h2 className="headline text-4xl sm:text-5xl lg:text-6xl mt-6 mb-7 max-w-[16ch]">
                Built by an operator. <em className="text-accent">Not an agency.</em>
              </h2>
              <p className="font-serif font-light text-xl sm:text-2xl lg:text-[26px] leading-[1.4] tracking-tight mb-6">
                I started At The Meridian after watching too many seven-figure businesses get stuck behind sites and systems that couldn’t keep up with what they’d already built.
              </p>
              <p className="text-ink-dim text-base leading-relaxed mb-5 max-w-[52ch]">
                Most agencies optimize for output. We optimize for outcomes — because I came up on the operator side, where the only metric that mattered was revenue. That’s the lens we bring to every engagement: strategic, surgical, and unflinchingly honest about what will actually move the needle.
              </p>
              <p className="text-ink-dim text-base leading-relaxed mb-5 max-w-[52ch]">
                If you’re already doing the work, you deserve a partner who treats your business with the same care as someone who’s been in your seat.
              </p>
              <div className="mt-9 pt-7 border-t border-line flex flex-col gap-1">
                <span className="font-serif italic text-2xl font-light text-accent tracking-tight">
                  — Brooke
                </span>
                <span className="text-[11px] tracking-[0.22em] uppercase text-ink-faint">
                  Founder · At The Meridian
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────── Results ─────────── */}
      <section className="bg-bg-2 border-t border-b border-line py-24 lg:py-40">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          <Reveal className="flex flex-wrap justify-between items-end gap-10 mb-20">
            <div>
              <span className="eyebrow-dark">What Clients See</span>
              <h2 className="headline text-4xl sm:text-5xl lg:text-6xl mt-6 max-w-[14ch]">
                Outcomes, <em className="italic text-accent">not output.</em>
              </h2>
            </div>
            <p className="text-ink-dim max-w-sm text-sm leading-relaxed">
              Our clients don’t measure us by deliverables. They measure us by what changes in their dashboards 90 days after launch.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-line">
            {[
              { num: '3.4×', label: 'Avg. lift in conversion rate' },
              { num: '62%', label: 'Reduction in cost per lead' },
              { num: '2.1×', label: 'Increase in organic traffic' },
              { num: '90', label: 'Days to measurable ROI' },
            ].map((s, i, arr) => (
              <Reveal
                key={s.label}
                className={`py-12 pr-6 ${
                  i < arr.length - 1 ? 'lg:border-r border-line' : ''
                }`}
                delay={i * 80}
              >
                <div className="font-serif font-light text-5xl lg:text-7xl leading-none tracking-tight mb-4">
                  <em className="italic text-accent">{s.num}</em>
                </div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-ink-faint">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Services ─────────── */}
      <section id="services" className="py-24 lg:py-40">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          <Reveal className="max-w-[56ch] mb-20">
            <span className="eyebrow-dark">Capabilities</span>
            <h2 className="headline text-4xl sm:text-5xl lg:text-6xl mt-6 mb-6">
              One studio. <em className="italic text-accent">Every lever that matters.</em>
            </h2>
            <p className="text-ink-dim text-base lg:text-lg leading-relaxed">
              Most agencies do one thing well and outsource the rest. We built At The Meridian to own the entire revenue stack — so nothing breaks at the seams.
            </p>
          </Reveal>

          <div className="border-t border-line">
            {[
              {
                num: '01',
                name: 'Website Builds',
                desc: 'Conversion-engineered sites that turn traffic into pipeline. Strategy, copy, design, and dev — built around your buyer’s actual decision path.',
                tag: 'Project',
              },
              {
                num: '02',
                name: 'SEO & Authority',
                desc: 'Technical foundations, content velocity, and link strategy that compound into category dominance — not chasing keywords.',
                tag: 'Retainer',
              },
              {
                num: '03',
                name: 'Paid Acquisition',
                desc: 'Profitable Google, Meta, and LinkedIn programs run by operators who optimize toward LTV — not click-through rates.',
                tag: 'Retainer',
              },
              {
                num: '04',
                name: 'CRM & Automation',
                desc: 'The plumbing behind the growth. We architect the systems that capture, nurture, and route every dollar of demand.',
                tag: 'Retainer',
              },
              {
                num: '05',
                name: 'Lead Generation',
                desc: 'Multi-channel outbound and inbound programs that put qualified conversations on your calendar week after week.',
                tag: 'Retainer',
              },
            ].map((s) => (
              <Reveal
                key={s.num}
                className="grid grid-cols-[60px_1fr] sm:grid-cols-[100px_1fr_2fr_auto] gap-x-6 sm:gap-x-10 gap-y-3 py-9 border-b border-line items-center group"
              >
                <div className="font-serif italic text-sm text-ink-faint group-hover:text-accent transition-colors">
                  {s.num}
                </div>
                <div className="font-serif font-light text-2xl sm:text-3xl tracking-tight">
                  {s.name}
                </div>
                <div className="text-sm text-ink-dim leading-relaxed sm:col-auto col-span-2 col-start-1 sm:col-start-auto">
                  {s.desc}
                </div>
                <div className="col-start-1 sm:col-auto col-span-2 sm:col-span-1 justify-self-start">
                  <span className="text-[11px] tracking-[0.22em] uppercase text-accent border border-accent/40 rounded-full px-3.5 py-1.5">
                    {s.tag}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Build Advantage ─────────── */}
      <section id="advantage" className="bg-blueprint border-t border-line py-24 lg:py-40">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          <Reveal className="text-center max-w-[720px] mx-auto mb-20">
            <span className="eyebrow-dark">The Build Advantage</span>
            <h2 className="headline text-4xl sm:text-5xl lg:text-6xl mt-6 mb-6">
              Built by hand. <em className="italic text-accent">Ranked by Google.</em>
            </h2>
            <p className="text-ink-dim text-base lg:text-lg leading-relaxed">
              We hand-code every site from the ground up. While most agencies stack their clients on drag-and-drop builders, our clients sit at the top of the search results — because lean, semantic code is what Google actually rewards.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-0 max-w-[1080px] mx-auto items-stretch">
            <Reveal className="bg-bg-2 border border-line rounded p-10 opacity-[0.78]">
              <span className="inline-block text-[10px] tracking-[0.26em] uppercase text-ink-faint font-medium mb-3.5">
                Most Agencies
              </span>
              <h3 className="font-serif font-light text-[26px] tracking-tight mb-8">
                Drag-and-Drop Builders
              </h3>
              <ul className="flex flex-col gap-3.5">
                {[
                  'Bloated, auto-generated HTML',
                  '4–8 second page loads',
                  'Plugin-dependent functionality',
                  'Cookie-cutter SEO structure',
                  'Limited Core Web Vitals control',
                  'SEO ceiling baked into the platform',
                ].map((item) => (
                  <li key={item} className="flex gap-3.5 text-sm text-ink-dim leading-relaxed">
                    <span className="w-4 text-center text-ink-faint text-lg leading-tight">×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="hidden lg:flex items-center px-4">
              <span className="bg-bg border border-line-strong rounded-full w-14 h-14 flex items-center justify-center font-serif italic text-base text-accent">
                vs
              </span>
            </div>

            <Reveal
              delay={120}
              className="rounded p-10 border border-accent/35"
              style={{
                background:
                  'linear-gradient(180deg, rgba(125, 211, 252, 0.07), rgba(3, 105, 161, 0.06))',
                boxShadow: '0 24px 60px rgba(3, 105, 161, 0.15)',
              }}
            >
              <span className="inline-block text-[10px] tracking-[0.26em] uppercase text-accent font-medium mb-3.5">
                At The Meridian
              </span>
              <h3 className="font-serif font-light text-[26px] tracking-tight mb-8">
                Hand-Coded Foundations
              </h3>
              <ul className="flex flex-col gap-3.5">
                {[
                  'Lean, semantic HTML — every line intentional',
                  'Sub-2 second page loads',
                  'Zero plugin bloat, zero dead weight',
                  'Custom SEO architecture per page',
                  'Top-tier Core Web Vitals',
                  'Engineered to outrank competitors',
                ].map((item) => (
                  <li key={item} className="flex gap-3.5 text-sm text-ink leading-relaxed">
                    <span className="w-4 text-center text-accent">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────── Featured Work — case study cards ─────────── */}
      {/* When you have real screenshots, replace each card's <ImageSpot /> with:
            <Image src={shot} alt="..." fill className="object-cover object-top z-[2]" />
          Pexels image suggestions are in each card's <imgSub> label. */}
      <section id="work" className="border-t border-line py-24 lg:py-40">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          <Reveal className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-16">
            <div>
              <span className="eyebrow-dark">Selected Work</span>
              <h2 className="headline text-4xl sm:text-5xl lg:text-6xl mt-6 max-w-[18ch]">
                Recent engagements that{' '}
                <em className="italic text-accent">compounded.</em>
              </h2>
            </div>
            <p className="text-ink-dim text-base leading-relaxed lg:max-w-md lg:ml-auto">
              Each one started with a website. Each one became a system that compounds month after month.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: 'SALTAIR',
                tagline: 'Boutique coastal stays',
                tags: ['Hospitality', 'Booking', 'SEO'],
                metric: '+312% organic traffic',
                period: 'in 9 months',
                img: images.modernCoastal,
              },
              {
                name: 'NORTHCOAST CAPITAL',
                tagline: 'Independent wealth advisory',
                tags: ['Finance', 'CRM', 'Lead Gen'],
                metric: '4.2× qualified inbound',
                period: 'in 90 days',
                img: images.projectFour,
              },
              {
                name: 'DRIFTWOOD HOUSE',
                tagline: 'Multi-property rental',
                tags: ['Hospitality', 'Platform', 'Paid'],
                metric: '$2.4M booked',
                period: 'Q1 post-launch',
                img: images.hotelPool,
              },
            ].map((project, i) => (
              <Reveal
                key={project.name}
                delay={i * 80}
                className="bg-bg-3 border border-line rounded-2xl overflow-hidden hover:border-accent/40 hover:-translate-y-1 transition-all flex flex-col"
              >
                {/* Image area */}
                <div className="relative aspect-[16/10] border-b border-line overflow-hidden">
                  <ImageSpot
                    className="!rounded-none !border-0 transition-transform duration-700 group-hover:scale-105"
                    label="Site screenshot"
                    sub="Replace with your build"
                    src={project.img}
                    alt={`${project.name} — At The Meridian build`}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 z-[3] pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(180deg, transparent 50%, rgba(10,10,11,0.5) 100%)',
                    }}
                  />
                </div>
                {/* Card content */}
                <div className="p-6 lg:p-7 flex flex-col flex-1">
                  <div className="font-serif italic text-[26px] mb-1.5 text-accent leading-none tracking-tight">
                    {project.name}
                  </div>
                  <div className="text-sm text-ink-dim mb-5">
                    {project.tagline}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] tracking-[0.18em] uppercase text-ink-dim border border-line rounded-full px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-5 border-t border-line">
                    <div className="font-serif text-xl text-ink mb-0.5 tracking-tight">
                      {project.metric}
                    </div>
                    <div className="text-[11px] tracking-[0.18em] uppercase text-ink-faint">
                      {project.period}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Who We Work With ─────────── */}
      <section id="who" className="border-t border-line py-24 lg:py-40">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-24 items-start">
            <Reveal className="lg:sticky lg:top-32">
              <span className="eyebrow-dark">Who We Work With</span>
              <h2 className="headline text-4xl sm:text-5xl lg:text-6xl my-7">
                This isn’t for everyone. <em className="italic text-accent">And that’s the point.</em>
              </h2>
              <p className="text-ink-dim text-base leading-relaxed max-w-[36ch]">
                We choose carefully because the work compounds when we choose right. If you see yourself below, we should talk.
              </p>
              <div className="mt-10 relative aspect-[4/3] rounded-2xl overflow-hidden border border-line hidden lg:block">
                <ParallaxBackdrop
                  src={images.beachWork}
                  alt="Working as a true growth partner"
                  strength={14}
                  overlay={0.3}
                  sizes="40vw"
                  className="absolute inset-0"
                />
              </div>
            </Reveal>
            <div className="flex flex-col gap-5">
              {[
                {
                  num: '01',
                  title: 'You’re already doing $1M+ in revenue',
                  body: 'You’ve validated the offer and proven the model. You need a system that scales it without falling apart at the seams.',
                },
                {
                  num: '02',
                  title: 'Your site is leaking',
                  body: 'Traffic shows up. It doesn’t convert. You feel the gap between what you should be capturing and what you actually are.',
                },
                {
                  num: '03',
                  title: 'You want one team, not five',
                  body: 'Tired of stitching together a designer, an SEO, a paid agency, and a CRM consultant who don’t talk to each other.',
                },
                {
                  num: '04',
                  title: 'You measure in revenue',
                  body: 'Impressions, vanity metrics, and "deliverables" don’t move you. Pipeline, conversion rate, and LTV do.',
                },
              ].map((q, i) => (
                <Reveal
                  key={q.num}
                  delay={i * 60}
                  className="relative p-8 border border-line rounded bg-bg-2 transition-all hover:border-accent/30 hover:translate-x-2"
                >
                  <span className="absolute top-7 right-8 font-serif italic text-accent text-sm">
                    {q.num}
                  </span>
                  <h4 className="font-serif font-light text-[22px] tracking-tight mb-2.5 pr-10">
                    {q.title}
                  </h4>
                  <p className="text-sm text-ink-dim leading-relaxed">{q.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── Philosophy / Selection ─────────── */}
      <section id="philosophy" className="border-t border-line py-24 lg:py-36">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-12 lg:gap-24 items-start">
            <Reveal className="lg:sticky lg:top-32">
              <span className="inline-flex items-center gap-3 font-sans italic text-ink-dim text-base sm:text-lg tracking-normal normal-case before:content-[''] before:w-7 before:h-px before:bg-accent">
                How we work
              </span>
              <h2 className="headline text-4xl sm:text-5xl lg:text-6xl mt-6 max-w-[18ch]">
                We choose our clients. <em className="text-accent">Carefully.</em>
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-ink text-xl lg:text-2xl leading-[1.45] tracking-tight mb-7 max-w-[58ch]">
                We only take on engagements we believe will produce tangible, measurable results — which means every build rolls into a retainer.
              </p>
              <p className="text-ink-dim text-base lg:text-lg leading-[1.7] mb-6 max-w-[60ch]">
                Online growth takes time and consistency. Most businesses don&rsquo;t know how to measure what&rsquo;s working behind the scenes, or how to course-correct when the data shifts. That&rsquo;s where we come in — sitting inside the engine with you, reading the dashboards, and making the calls that move the needle.
              </p>
              <p className="text-ink-dim text-base lg:text-lg leading-[1.7] mb-10 max-w-[60ch]">
                The businesses that invest the resources — time and money — to do this properly are the ones who see the ROAS everyone talks about. If that sounds like you, we should talk. If it doesn&rsquo;t, we&rsquo;ll tell you on the call.
              </p>

              <div className="grid sm:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
                {[
                  { label: 'Discovery first', body: '30-minute call. No pitch. We diagnose before we propose.' },
                  { label: 'Selective by design', body: 'We turn down more inquiries than we accept — for both sides.' },
                  { label: '90-day reviews', body: 'Every quarter we sit down and show you exactly what changed.' },
                ].map((c) => (
                  <div key={c.label} className="bg-bg-3 p-6 lg:p-7">
                    <div className="font-headline uppercase tracking-[0.18em] text-[12px] text-accent mb-2">
                      {c.label}
                    </div>
                    <p className="text-sm text-ink-dim leading-relaxed">{c.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────── Engagements (Build) ─────────── */}
      <section id="packages" className="bg-bg-2 border-t border-line py-24 lg:py-40">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          <Reveal className="text-center mb-20">
            <span className="eyebrow-dark">Website Engagements</span>
            <h2 className="headline text-4xl sm:text-5xl lg:text-6xl mt-6 mb-6 max-w-[16ch] mx-auto">
              Three tiers. <em className="text-accent">Built for where you are.</em>
            </h2>
            <p className="text-ink-dim text-base max-w-[56ch] mx-auto leading-relaxed">
              Every build includes a Phase 0 Quick Start Lead Gen sprint — a high-converting landing page and ad campaign live in week one, so the engine is generating leads while we build the full site behind it.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Meridian Starter',
                tag: 'For Focused Launches',
                timeline: '4–6 weeks',
                outcome:
                  'A clean, conversion-tuned digital presence around one core service or product line — turning warm traffic into qualified inquiries from day one.',
                features: [
                  'Up to 5 strategic pages',
                  'Custom design system',
                  '1 sales funnel landing page',
                  'Foundational on-page SEO + schema',
                  'Conversion tracking (forms, calls, CTAs)',
                  'Phase 0 Quick Start Lead Gen included',
                  '2 rounds of revisions · Launch QA',
                ],
                featured: false,
              },
              {
                name: 'Meridian Growth',
                tag: 'For Scaling Operators',
                timeline: '6–10 weeks',
                outcome:
                  'A full digital flagship engineered around your buyer’s decision path. Deeper SEO, conversion copywriting, programmatic location pages, and a CMS your team can actually use.',
                features: [
                  'Up to 12 strategic pages',
                  '3 sales funnel landing pages',
                  'Up to 6 location-based SEO pages',
                  'Full conversion copywriting',
                  'Full on-page + technical SEO',
                  'Blog + CMS (PayloadCMS) setup',
                  'CRM + analytics integration',
                  'Phase 0 Quick Start Lead Gen included',
                  'Monthly strategy call during build',
                  '3 rounds of revisions · Launch QA',
                ],
                featured: true,
              },
              {
                name: 'Meridian Premier',
                tag: 'For Category Leaders',
                timeline: '10–16 weeks',
                outcome:
                  'The platform that makes you the obvious choice in your category. Multi-funnel architecture, deep SEO infrastructure, and the integrations to support real scale.',
                features: [
                  '20+ pages, multi-funnel architecture',
                  '5+ sales funnel landing pages',
                  '12+ location-based SEO pages',
                  'Brand evolution + component library',
                  'Full conversion copywriting',
                  'Advanced SEO + internal linking architecture',
                  'Blog, careers, reviews + QR landing page',
                  'Custom integrations, email sequences, CRM pipeline',
                  'Phase 0 Quick Start Lead Gen included',
                  'Biweekly strategy calls during build',
                  'Unlimited revisions · White-glove launch + 30-day support',
                ],
                featured: false,
              },
            ].map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 80}
                className={[
                  'relative rounded p-10 flex flex-col transition-all hover:-translate-y-1',
                  p.featured
                    ? 'border border-accent/40 bg-gradient-to-b from-accent/[0.07] via-accent-deep/[0.08] to-bg-3 shadow-[0_24px_60px_rgba(0,0,0,0.4)]'
                    : 'border border-line bg-bg-3 hover:border-line-strong hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)]',
                ].join(' ')}
              >
                {p.featured && (
                  <span className="absolute top-0 right-8 bg-accent text-bg text-[10px] tracking-[0.22em] uppercase font-semibold px-3.5 py-1.5 rounded-b">
                    Most Popular
                  </span>
                )}
                <div className="font-headline uppercase tracking-[0.01em] text-[32px] leading-none mb-2">
                  {p.name}
                </div>
                <div className="flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase text-ink-faint mb-7">
                  <span>{p.tag}</span>
                  <span aria-hidden className="text-line-strong">·</span>
                  <span className="text-accent">{p.timeline}</span>
                </div>
                <div className="mb-7">
                  <span className="inline-block text-[10px] tracking-[0.24em] uppercase text-accent font-medium mb-3">
                    What changes
                  </span>
                  <p className="text-base leading-snug text-ink">
                    {p.outcome}
                  </p>
                </div>
                <ul className="flex-1 flex flex-col gap-3.5 py-7 border-t border-b border-line mb-7">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="text-sm text-ink-dim flex gap-3 items-start"
                    >
                      <span className="text-accent">→</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={[
                    'block text-center py-3.5 px-4 rounded-full text-sm font-medium border transition-all',
                    p.featured
                      ? 'bg-accent text-bg border-accent hover:bg-accent-bright'
                      : 'border-line-strong text-ink hover:bg-accent hover:border-accent hover:text-bg',
                  ].join(' ')}
                >
                  Book a call to scope →
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Free estimate CTA */}
          <Reveal className="mt-12 text-center">
            <p className="text-ink-dim text-sm mb-4">
              Not sure which build is right? Get a free estimate in 30 seconds.
            </p>
            <Link
              href="#estimate"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium border border-accent text-accent hover:bg-accent hover:text-bg transition-all"
            >
              Get your free estimate →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─────────── Retainers ─────────── */}
      <section id="retainers" className="border-t border-line py-24 lg:py-40">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          <Reveal className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-16">
            <div>
              <span className="eyebrow-dark">Monthly Retainers</span>
              <h2 className="headline text-4xl sm:text-5xl lg:text-6xl mt-6 max-w-[16ch]">
                The engine behind the website.
              </h2>
            </div>
            <p className="text-ink-dim text-base leading-relaxed">
              Every build rolls into a retainer — because the launch is the starting line, not the finish. The work that compounds happens here: SEO climbing, content shipping, ads optimizing, CRM converting. Every tier includes same-business-day support, a three-month minimum, and a 90-day review. Paid acquisition is included at every tier; a minimum ad spend applies on Grow and Scale.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Maintain & Optimize',
                tag: 'Tier 1 · The foundation',
                outcome:
                  'Your site stays fast, secure, and steadily climbing in search. Hosting, updates, foundational SEO, light paid acquisition, and same-business-day support — fully managed, never neglected.',
                features: [
                  { has: true,  label: 'Hosting, SSL, backups, uptime', level: 'Always on' },
                  { has: true,  label: 'Site improvements & tweaks',    level: '5 hrs / mo' },
                  { has: true,  label: 'On-page + technical SEO',       level: 'Maintained' },
                  { has: true,  label: 'Keyword rank tracking',         level: 'Monthly report' },
                  { has: true,  label: 'Google Business Profile mgmt',  level: 'Optimized' },
                  { has: true,  label: 'Analytics + Search Console',    level: 'Monitored' },
                  { has: true,  label: 'Paid ads — setup & monitoring', level: 'Google Ads' },
                  { has: true,  label: 'No minimum ad spend',           level: 'Optional' },
                  { has: false, label: 'Content & blog posts' },
                  { has: false, label: 'Lead gen, CRO & automation' },
                  { has: true,  label: 'First-priority support',        level: 'Same day' },
                ],
                apex: false,
              },
              {
                name: 'Grow',
                tag: 'Tier 2 · Active growth',
                outcome:
                  'Everything in Tier 1, plus an active growth engine — full SEO strategy, fresh content compounding, actively managed paid acquisition, and a monthly strategy call to align on what moves next.',
                features: [
                  { has: true, label: 'Everything in Tier 1',          level: 'Included' },
                  { has: true, label: 'Site improvements & features',  level: '10 hrs / mo' },
                  { has: true, label: 'Full SEO strategy',             level: 'Active' },
                  { has: true, label: 'SEO blog posts written',        level: '2 / mo' },
                  { has: true, label: 'Lead gen + CRO',                level: 'CTA testing, funnels' },
                  { has: true, label: 'Email / SMS automations',       level: 'Built for you' },
                  { has: true, label: 'Paid ads — actively managed',   level: 'Google Ads' },
                  { has: true, label: 'Minimum ad spend required',     level: 'Your ad account' },
                  { has: true, label: 'Strategy call',                 level: '60 min monthly' },
                  { has: true, label: 'Competitive analysis',          level: 'Quarterly' },
                ],
                apex: false,
              },
              {
                name: 'Scale',
                tag: 'Tier 3 · Full growth partner',
                outcome:
                  'Everything in Tier 2, plus multi-channel paid acquisition and full lead-gen systems. Site, SEO, ads, CRM, and pipeline — managed as one engine, with a quarterly ROI review and your projects at the front of the queue.',
                features: [
                  { has: true, label: 'Everything in Tier 2',          level: 'Included' },
                  { has: true, label: 'Site improvements & new pages', level: '15 hrs / mo' },
                  { has: true, label: 'Paid ads — multi-channel',      level: 'Google + Meta' },
                  { has: true, label: 'Minimum ad spend required',     level: 'Your ad account' },
                  { has: true, label: 'New lead-gen landing page',     level: '1 / mo' },
                  { has: true, label: 'CRM build + lead scoring',      level: 'Pipeline ready' },
                  { has: true, label: 'Strategy calls',                level: 'Biweekly' },
                  { has: true, label: 'Quarterly business review',     level: 'Full ROI' },
                  { has: true, label: 'Priority feature requests',     level: 'Front of queue' },
                ],
                apex: true,
              },
            ].map((r, i) => (
              <Reveal
                key={r.name}
                delay={i * 80}
                className={[
                  'rounded p-10 flex flex-col transition-all hover:-translate-y-1',
                  r.apex
                    ? 'border border-accent/40 bg-gradient-to-b from-accent/10 via-accent-deep/[0.12] to-bg-3'
                    : 'border border-line bg-bg-2 hover:border-accent/30',
                ].join(' ')}
              >
                <div className="font-headline uppercase tracking-[0.01em] text-[34px] leading-none mb-2">
                  {r.name}
                </div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-ink-faint mb-7">
                  {r.tag}
                </div>
                <div className="mb-7">
                  <span className="inline-block text-[10px] tracking-[0.24em] uppercase text-accent font-medium mb-3">
                    What you’ll see
                  </span>
                  <p className="text-base leading-snug text-ink">
                    {r.outcome}
                  </p>
                </div>
                <ul className="flex-1 flex flex-col gap-3.5 py-7 border-t border-b border-line mb-7">
                  {r.features.map((f) => (
                    <li
                      key={f.label}
                      className={[
                        'text-sm flex items-start gap-3',
                        f.has ? 'text-ink-dim' : 'text-ink-faint opacity-50',
                      ].join(' ')}
                    >
                      <span className="text-accent">{f.has ? '✓' : '—'}</span>
                      <span className="flex-1">{f.label}</span>
                      {f.has && f.level && (
                        <span className="text-[11px] uppercase tracking-[0.14em] text-accent font-medium">
                          {f.level}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="block text-center py-3.5 px-4 rounded-full text-sm font-medium border border-line-strong hover:bg-accent hover:border-accent hover:text-bg transition-all"
                >
                  Book a call →
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Terms strip — sets expectations without pricing */}
          <Reveal>
            <div className="mt-12 pt-8 border-t border-line grid sm:grid-cols-3 gap-6 text-center sm:text-left">
              {[
                { l: '3-month minimum', b: 'On every tier. Growth needs runway.' },
                { l: 'Same-business-day support', b: 'Retainer clients only. One channel, one paper trail.' },
                { l: '90-day reviews built in', b: 'Quarterly sit-down on what changed, what’s next.' },
              ].map((t) => (
                <div key={t.l}>
                  <div className="font-headline uppercase tracking-[0.18em] text-[12px] text-accent mb-1.5">
                    {t.l}
                  </div>
                  <p className="text-sm text-ink-dim leading-relaxed">{t.b}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-xs text-ink-faint italic max-w-[68ch] mx-auto leading-relaxed">
              Grow and Scale require a minimum ad spend, billed directly to your Google or Meta ad account — we manage the campaigns, you own the budget. Maintain & Optimize has no minimum ad spend. Tier minimums confirmed in your proposal. Non-retainer support available at our standard hourly rate · two-hour minimum, no priority guarantee.
            </p>
          </Reveal>

          {/* Free estimate CTA */}
          <Reveal className="mt-12 text-center">
            <p className="text-ink-dim text-sm mb-4">
              Want a tier recommendation built around your numbers? Get a free estimate.
            </p>
            <Link
              href="#estimate"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium border border-accent text-accent hover:bg-accent hover:text-bg transition-all"
            >
              Get your free estimate →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─────────── Free Estimate ─────────── */}
      <section id="estimate" className="bg-bg-2 border-t border-line py-24 lg:py-40">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20 items-center">
            {/* Left — pitch */}
            <Reveal>
              <span className="eyebrow-dark">Free Estimate</span>
              <h2 className="headline text-4xl sm:text-5xl lg:text-6xl mt-6 mb-6 max-w-[15ch]">
                Find your tier in <em className="text-accent">30 seconds.</em>
              </h2>
              <p className="text-ink-dim text-base lg:text-lg leading-relaxed mb-8 max-w-[52ch]">
                Answer three quick questions and we&rsquo;ll email you a personalized walkthrough —
                a short video where I walk through exactly which retainer fits your business and why,
                based on where your revenue is now and where you want it to go.
              </p>
              <ul className="flex flex-col gap-3.5">
                {[
                  'A tier recommendation built around your numbers',
                  'A walkthrough video of what that engagement looks like',
                  'No call required — watch it on your own time',
                ].map((line) => (
                  <li key={line} className="text-sm text-ink-dim flex gap-3 items-start">
                    <span className="text-accent mt-0.5">→</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Right — form */}
            <Reveal delay={80}>
              <EstimateForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────── Paid Ads ─────────── */}
      <section id="ads" className="relative border-t border-line py-24 lg:py-40 overflow-hidden">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            <Reveal>
              <span className="eyebrow-dark">Paid Acquisition</span>
              <h2 className="headline text-4xl sm:text-5xl lg:text-6xl mt-6 mb-7 max-w-[16ch]">
                Ads are the accelerant. <em className="italic text-accent">Not the foundation.</em>
              </h2>
              <p className="text-ink-dim text-base lg:text-lg leading-relaxed mb-6 max-w-[54ch]">
                We don’t turn on paid traffic until the site actually converts. Sending paid clicks to a leaky bucket is exactly how ad budgets disappear. So we build the foundation first — then we pour fuel on what’s already working.
              </p>
              <div className="flex flex-col gap-px bg-line rounded overflow-hidden border border-line">
                {[
                  {
                    t: 'Foundation first',
                    b: 'We prove the site converts organic visitors before a dollar goes to ads. The accelerant only works once the engine runs.',
                  },
                  {
                    t: 'Start small, test deliberately',
                    b: 'Month one is a testing month — we spend to learn what works, then double down on what converts. No spray-and-pray.',
                  },
                  {
                    t: 'Your money, your account',
                    b: 'Ad spend is billed directly to your own ad account. We manage it; we never touch it. Total transparency on every dollar.',
                  },
                ].map((row) => (
                  <div key={row.t} className="bg-bg-2 p-6 lg:p-7">
                    <h4 className="font-serif font-light text-xl tracking-tight mb-2 text-accent-bright">
                      {row.t}
                    </h4>
                    <p className="text-sm text-ink-dim leading-relaxed">{row.b}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120} className="relative">
              {/* Modern image with parallax + glow */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-line">
                <ParallaxBackdrop
                  src={images.laptopBeach}
                  alt="Running paid acquisition the disciplined way"
                  strength={14}
                  overlay={0.35}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="absolute inset-0"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, transparent 40%, rgba(10,10,11,0.85) 100%)',
                  }}
                />
                {/* Honest-promise pull quote, anchored bottom */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-7 lg:p-9">
                  <span className="inline-block text-[10px] tracking-[0.24em] uppercase text-accent font-medium mb-3">
                    The honest promise
                  </span>
                  <p className="font-serif font-light text-lg lg:text-xl leading-snug tracking-tight text-ink">
                    “Within 30 days you’ll know whether ads are working for your business, exactly why, and where the budget should go next.”
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────── Priority Support ─────────── */}
      <section id="support" className="bg-bg-2 border-t border-line py-24 lg:py-40">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          <Reveal className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-16">
            <div>
              <span className="eyebrow-dark">Support, Done Right</span>
              <h2 className="headline text-4xl sm:text-5xl lg:text-6xl mt-6 max-w-[18ch]">
                Faster, more reliable support — <em className="italic text-accent">by design.</em>
              </h2>
            </div>
            <p className="text-ink-dim text-base leading-relaxed lg:max-w-md lg:ml-auto">
              Every retainer client gets first-priority support with a guaranteed same-business-day response. One tracked channel, clear priorities, a real paper trail — so nothing slips through the cracks.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden">
            {[
              {
                level: 'Critical',
                desc: 'Payment system down. Site fully offline.',
                sla: '4-hour response',
              },
              {
                level: 'High',
                desc: 'A customer-facing bug affecting conversions.',
                sla: 'Same business day',
              },
              {
                level: 'Normal',
                desc: 'Content changes and feature requests.',
                sla: 'Scheduled & committed',
              },
              {
                level: 'Low',
                desc: 'Nice-to-haves and future ideas.',
                sla: 'Queued into your hours',
              },
            ].map((p, i) => (
              <Reveal key={p.level} delay={i * 70} className="bg-bg-3 p-7 lg:p-8 flex flex-col">
                <span className="text-[10px] tracking-[0.24em] uppercase text-accent font-medium mb-4">
                  {p.level}
                </span>
                <p className="text-sm text-ink-dim leading-relaxed flex-1 mb-6">
                  {p.desc}
                </p>
                <div className="pt-5 border-t border-line">
                  <span className="font-serif font-light text-lg tracking-tight text-ink">
                    {p.sla}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <p className="font-serif italic text-lg sm:text-xl text-ink-dim max-w-[60ch] mx-auto leading-snug">
              Objectively more reliable than chasing someone over text — and you’ll always know exactly where your request stands.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─────────── Process ─────────── */}
      <section id="process" className="bg-bg-2 border-t border-b border-line py-24 lg:py-40">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          <Reveal className="max-w-[56ch] mb-20">
            <span className="eyebrow-dark">How We Work</span>
            <h2 className="headline text-4xl sm:text-5xl lg:text-6xl mt-6">
              A four-phase ascent.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                phase: 'Phase 01',
                title: 'Diagnose',
                body: 'We audit your funnel, traffic, conversion paths, and CRM. We surface what’s leaking before we touch anything.',
              },
              {
                phase: 'Phase 02',
                title: 'Architect',
                body: 'Strategy, sitemap, copy structure, and tech stack — defined as a system before a single pixel is moved.',
              },
              {
                phase: 'Phase 03',
                title: 'Build',
                body: 'Design and engineering happen in lockstep with copy and SEO. No handoffs. No silos. One team, one timeline.',
              },
              {
                phase: 'Phase 04',
                title: 'Compound',
                body: 'We hand off — or stay on retainer to run the channels that turn the launch into a year of compounding pipeline.',
              },
            ].map((s, i) => (
              <Reveal
                key={s.phase}
                delay={i * 80}
                className="relative pt-8 pr-6 border-t border-line-strong"
              >
                <span className="absolute -top-px left-0 w-8 h-px bg-accent" />
                <div className="font-serif text-sm text-accent mb-7">{s.phase}</div>
                <h4 className="font-serif font-light text-[22px] tracking-tight mb-3">
                  {s.title}
                </h4>
                <p className="text-sm text-ink-dim leading-relaxed pb-8">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── FAQ ─────────── */}
      <section id="faq" className="bg-bg-2 border-t border-b border-line py-24 lg:py-40">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          <Reveal className="text-center max-w-[640px] mx-auto mb-16">
            <span className="eyebrow-dark">Common Questions</span>
            <h2 className="headline text-4xl sm:text-5xl lg:text-6xl mt-6">
              The things every smart operator asks.
            </h2>
          </Reveal>
          <div className="max-w-[880px] mx-auto border-t border-line">
            {[
              {
                q: 'How do you decide who you work with?',
                a: 'We select our clients carefully — we only take on projects we believe will produce tangible, measurable results, which means we only take on engagements that roll into a retainer. Online growth takes time and consistency. The businesses that invest the resources (time and money) to do it properly are the ones who see the ROAS everyone talks about. If you’re not ready for that level of investment, we’ll tell you on the call.',
              },
              {
                q: 'Do I need a retainer if I get a build?',
                a: 'Honestly? Yes. We only take on builds that roll into a retainer — because that’s where the results actually compound. A new site at launch is a starting line, not a finish line. Most businesses don’t know how to measure what’s working behind the scenes, or how to course-correct when something isn’t — that’s where I come in. If you want a one-and-done site, we’re probably not your studio. If you want a partner steering the engine for the long haul, we should talk.',
              },
              {
                q: 'How long does a typical engagement take?',
                a: 'Most builds run 4–16 weeks from kickoff to launch depending on scope. Smaller, focused launches finish in 4–6 weeks. Mid-tier engagements run 6–10. Premier builds with full multi-funnel and location architecture can run 10–16 weeks. We move at the pace of clarity — never rushed, never stalled.',
              },
              {
                q: 'How fast can I see results?',
                a: 'Week one. Every build includes a Quick Start Lead Gen phase — we spin up a high-converting landing page and a paid ad campaign on day one, running alongside the full build in the background. By the time the full site launches, you’ve already seen calls, booked jobs, and real ROI. The site launch amplifies what’s already working instead of being the starting line.',
              },
              {
                q: 'Why do the growth tiers require a minimum ad spend?',
                a: 'Because SEO compounds, but it takes time — and the businesses that see real ROAS are the ones running both engines from day one. Paid acquisition gives us fast feedback on offers, audiences, and conversion paths, and that data sharpens everything else we do. The minimum applies on Grow and Scale, scales with the tier, and is billed directly to your own Google or Meta ad account — we manage the campaigns, you own the budget and the data. Maintain & Optimize has no minimum ad spend, so you can start lean. We never touch your ad spend; we just steer it.',
              },
              {
                q: 'Why isn’t pricing on the site?',
                a: 'Because what we build for you is scoped to your business — not a SKU. After a 30-minute discovery call, we send a custom proposal within 48 hours with a clear scope, timeline, and investment. No surprises, no upsells.',
              },
              {
                q: 'Can you work with my existing brand?',
                a: 'Yes — your brand comes with you. What we rebuild is the foundation. We hand-code every site on modern frameworks (Next.js, Astro, or a custom stack) because drag-and-drop builders cap your SEO ceiling, slow your site down, and create bloat that quietly hurts your rankings month after month.',
              },
              {
                q: 'Why hand-coded? Why not Webflow, Squarespace, or Wix?',
                a: 'Drag-and-drop builders auto-generate bloated HTML to support every possible use case. That bloat is invisible to you — but Google sees it, and so do your buyers when the page takes four seconds to load. Hand-coded sites ship lean, semantic, fully controlled code. The result: faster loads, better Core Web Vitals, full SEO architecture, and a measurable rankings edge over competitors stuck on builders.',
              },
              {
                q: 'How do you measure success?',
                a: 'We agree on the metrics that matter to you in week one — typically conversion rate, qualified pipeline, cost per lead, and organic traffic. You’ll see them on every report, and we hold ourselves to them. Every 90 days we sit down for a full review: what the retainer produced, what changed, what we’re doing next.',
              },
              {
                q: 'What if we’re not a fit?',
                a: 'We’ll tell you on the call. We turn down more inquiries than we accept. Our work compounds because we choose right — for both sides.',
              },
            ].map((item) => (
              <Reveal key={item.q}>
                <details className="border-b border-line group">
                  <summary className="flex justify-between items-center font-serif font-light text-lg sm:text-[22px] tracking-tight py-7 cursor-pointer list-none hover:text-accent transition-colors">
                    <span>{item.q}</span>
                    <span className="text-2xl text-accent ml-6 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="pb-7 text-ink-dim text-base leading-[1.7] max-w-[70ch]">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Atmosphere Band — full-bleed parallax ─────────── */}
      <section className="relative h-[320px] sm:h-[420px] lg:h-[560px] w-full border-y border-line">
        {/* Swap `images.goldenHour` for your own brand shot when ready */}
        <ParallaxBackdrop
          src={images.goldenHour}
          alt="The horizon at golden hour — the meridian moment"
          strength={20}
          overlay={0.55}
          sizes="100vw"
          className="absolute inset-0"
        />
        {/* Top + bottom fades to bleed into the dark sections */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-32 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, #0a0a0b 0%, transparent 100%)',
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-32 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, #0a0a0b 0%, transparent 100%)',
          }}
        />
        <div className="relative z-20 h-full flex items-center justify-center px-6">
          <Reveal className="text-center max-w-[760px]">
            <span className="eyebrow-dark mx-auto">The Meridian Moment</span>
            <p className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl leading-[1.2] tracking-tight mt-6 text-ink">
              The point where everything you’ve built{' '}
              <em className="italic text-accent-bright">finally compounds.</em>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─────────── CTA / Discovery Call Funnel ─────────── */}
      <section
        id="contact"
        className="relative overflow-hidden py-24 lg:py-40"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vmin] h-[100vmin]"
          style={{
            background:
              'radial-gradient(circle, rgba(125, 211, 252, 0.12) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">
            <Reveal>
              <span className="eyebrow-dark">Book a discovery call</span>
              <h2 className="headline text-4xl sm:text-5xl lg:text-6xl my-7">
                Let’s see if we’re <em className="italic text-accent">built for each other.</em>
              </h2>
              <p className="text-ink-dim text-base lg:text-lg leading-relaxed mb-12 max-w-[44ch]">
                A 30-minute call. No pitch. We’ll diagnose where the gaps are, where the leverage is, and whether we’re the right team to close them.
              </p>
              <div className="flex flex-col gap-7 border-t border-line pt-9">
                {[
                  {
                    num: '30',
                    title: 'Minutes, max',
                    body: 'Tight, focused. We respect your calendar.',
                  },
                  {
                    num: '0',
                    title: 'Pitch decks',
                    body: 'If we’re not a fit, you’ll know in the first 10 minutes.',
                  },
                  {
                    num: '48',
                    title: 'Hour proposal',
                    body: 'If we are a fit, you’ll have a custom scope in two business days.',
                  },
                ].map((p) => (
                  <div key={p.title} className="flex items-start gap-6">
                    <span className="font-serif font-light text-4xl text-accent leading-none min-w-[64px] tracking-tight">
                      {p.num}
                    </span>
                    <div>
                      <h5 className="font-serif font-light text-lg tracking-tight mb-1">
                        {p.title}
                      </h5>
                      <p className="text-xs text-ink-dim">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <DiscoveryForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing horizon line */}
      <div className="relative h-px bg-line max-w-site mx-auto">
        <div
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent"
          style={{ boxShadow: '0 0 32px rgba(125, 211, 252, 0.6)' }}
        />
      </div>
    </div>
  )
}
