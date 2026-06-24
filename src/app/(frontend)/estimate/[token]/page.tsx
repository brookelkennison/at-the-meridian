import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayloadClient } from '@/lib/payload'
import {
  TIERS,
  TIER_VIDEO_URLS,
  toEmbedUrl,
  type TierId,
} from '@/lib/estimateTiers'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Your Free Estimate — At The Meridian',
  robots: { index: false, follow: false },
}

async function getEstimate(token: string) {
  try {
    const payload = await getPayloadClient()
    const res = await payload.find({
      collection: 'estimates',
      where: { token: { equals: token } },
      limit: 1,
    })
    const doc = res.docs?.[0]
    if (!doc) return null

    // Best-effort: mark as viewed the first time it's opened.
    if (doc.status === 'new') {
      try {
        await payload.update({
          collection: 'estimates',
          id: doc.id,
          data: { status: 'viewed' },
        })
      } catch {
        /* non-blocking */
      }
    }
    return doc
  } catch (err) {
    console.error('Estimate lookup failed:', err)
    return null
  }
}

export default async function EstimatePage({
  params,
}: {
  params: Promise<{ token: string }>
}) {
  const { token } = await params
  const estimate = await getEstimate(token)
  if (!estimate) notFound()

  const tierId = (estimate.recommendedTier as TierId) || 'grow'
  const tier = TIERS[tierId]
  const firstName = (estimate.name || '').split(' ')[0]
  const videoUrl = toEmbedUrl(TIER_VIDEO_URLS[tierId])

  return (
    <div className="bg-bg text-ink">
      <section className="max-w-[1000px] mx-auto px-5 sm:px-10 lg:px-16 pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="eyebrow-dark">Your Personalized Estimate</span>
          <h1 className="headline text-4xl sm:text-5xl lg:text-6xl mt-6 mb-5 max-w-[20ch] mx-auto">
            {firstName ? `${firstName}, ` : ''}here&rsquo;s the tier built for{' '}
            <em className="text-accent">where you&rsquo;re headed.</em>
          </h1>
          <p className="text-ink-dim text-base max-w-[54ch] mx-auto leading-relaxed">
            Based on your answers, this is the retainer that fits where your business is now and
            where you want it to go. Watch the walkthrough below.
          </p>
        </div>

        {/* Video */}
        <div className="mb-16">
          {videoUrl ? (
            <div className="relative w-full overflow-hidden rounded-xl border border-line-strong bg-bg-3 aspect-video shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
              <iframe
                src={videoUrl}
                title={`${tier.name} walkthrough`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="relative w-full rounded-xl border border-dashed border-line-strong bg-bg-3 aspect-video flex items-center justify-center text-center px-8">
              <div>
                <div className="text-3xl mb-3">🎬</div>
                <p className="text-ink-dim text-sm max-w-sm">
                  Your {tier.name} walkthrough video will appear here.
                  <span className="block text-ink-faint mt-2 text-xs">
                    (Add the URL in <code>src/lib/estimateTiers.ts</code>.)
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Recommended tier card */}
        <div
          className={[
            'relative rounded-xl p-8 sm:p-10 border',
            tier.mostPopular
              ? 'border-accent/40 bg-gradient-to-b from-accent/[0.07] via-accent-deep/[0.08] to-bg-3'
              : 'border-line bg-bg-2',
          ].join(' ')}
        >
          {tier.mostPopular && (
            <span className="absolute top-0 right-8 bg-accent text-bg text-[10px] tracking-[0.22em] uppercase font-semibold px-3.5 py-1.5 rounded-b">
              Most Popular
            </span>
          )}

          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <div className="text-[11px] tracking-[0.22em] uppercase text-accent font-medium mb-2">
                {tier.tierLabel} · Recommended for you
              </div>
              <h2 className="font-headline uppercase tracking-[0.01em] text-[34px] leading-none">
                {tier.name}
              </h2>
            </div>
            <div className="text-right">
              <span className="font-headline text-4xl text-ink">{tier.price}</span>
              <span className="text-ink-faint text-sm">{tier.cadence}</span>
            </div>
          </div>

          <p className="text-ink-dim text-base leading-relaxed mb-8 max-w-[60ch]">
            {tier.tagline}
          </p>

          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3.5 py-8 border-t border-b border-line mb-8">
            {tier.bullets.map((b) => (
              <li key={b} className="text-sm text-ink-dim flex gap-3 items-start">
                <span className="text-accent mt-0.5">→</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="flex-1 text-center py-4 px-6 rounded-full text-sm font-medium bg-accent text-bg border border-accent hover:bg-accent-bright transition-all"
            >
              Book a discovery call →
            </Link>
            <a
              href="mailto:hello@atthemeridian.co"
              className="flex-1 text-center py-4 px-6 rounded-full text-sm font-medium border border-line-strong text-ink hover:bg-accent hover:border-accent hover:text-bg transition-all"
            >
              Ask a question
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-ink-faint italic mt-10 max-w-[64ch] mx-auto leading-relaxed">
          This recommendation is a starting point based on what you shared. We&rsquo;ll confirm the
          exact fit — and any minimum ad spend on Grow or Scale — on your discovery call.
        </p>
      </section>
    </div>
  )
}
