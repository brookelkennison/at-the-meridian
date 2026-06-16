/**
 * At The Meridian — Free Estimate engine
 * ----------------------------------------------------------------------------
 * Shared, dependency-free config used by:
 *   - components/EstimateForm.tsx        (the dropdowns)
 *   - app/api/estimate/route.ts          (recommendation + storage + email)
 *   - app/(frontend)/estimate/[token]    (the personalized walkthrough page)
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │  TODO (Brooke): paste your three walkthrough video URLs below.         │
 * │  Normal YouTube / Vimeo / Loom *share* links are fine — toEmbedUrl()   │
 * │  converts them to embeddable form automatically.                       │
 * └──────────────────────────────────────────────────────────────────────┘
 */
export const TIER_VIDEO_URLS: Record<TierId, string> = {
  maintain: '', // Tier 1 — Maintain & Optimize walkthrough
  grow: '', //     Tier 2 — Grow walkthrough
  scale: '', //    Tier 3 — Scale walkthrough
}

// ─────────────────────────────────────────────────────────────────────────
// Tiers (mirror the Monthly Retainer Packages)
// ─────────────────────────────────────────────────────────────────────────
export type TierId = 'maintain' | 'grow' | 'scale'

export type Tier = {
  id: TierId
  tierLabel: string
  name: string
  price: string
  cadence: string
  tagline: string
  bestFor: string
  bullets: string[]
  mostPopular?: boolean
}

export const TIERS: Record<TierId, Tier> = {
  maintain: {
    id: 'maintain',
    tierLabel: 'Tier 1',
    name: 'Maintain & Optimize',
    price: '$3,500',
    cadence: '/mo',
    tagline: 'The foundation — your site live, protected, and steadily improving.',
    bestFor:
      'Businesses with a strong site that need it maintained, protected, and steadily improved with foundational SEO.',
    bullets: [
      'Hosting, SSL, backups, uptime monitoring & security',
      'All dependency & framework updates (Next.js, npm, CMS)',
      'Up to 5 hrs/month of website improvements',
      'On-page + technical SEO maintenance',
      'Keyword rank tracking with monthly report',
      'Google Business Profile management',
      'Analytics + Search Console monitoring',
      'First-priority, same-business-day support',
    ],
  },
  grow: {
    id: 'grow',
    tierLabel: 'Tier 2',
    name: 'Grow',
    price: '$5,500',
    cadence: '/mo',
    tagline: 'Everything in Tier 1, plus an active growth engine and paid social.',
    bestFor:
      'Businesses ready to actively grow traffic, leads, and conversions through organic SEO and paid social.',
    bullets: [
      'Everything in Maintain & Optimize',
      'Up to 10 hrs/month of improvements & new features',
      'Full SEO strategy — content, keywords, on-page & technical',
      '2 SEO-optimized blog posts per month',
      'Meta ads management (Facebook + Instagram)',
      'Email / SMS automation buildouts',
      'Lead-gen strategy — funnel & CRO, CTA testing',
      'Monthly 60-min strategy call',
    ],
    mostPopular: true,
  },
  scale: {
    id: 'scale',
    tierLabel: 'Tier 3',
    name: 'Scale',
    price: '$8,500',
    cadence: '/mo',
    tagline: 'Everything in Tier 2, plus a full paid-media suite and advanced lead gen.',
    bestFor:
      'Businesses that want a full growth partner managing their entire digital presence.',
    bullets: [
      'Everything in Grow',
      'Up to 15 hrs/month of improvements, features & new pages',
      'Google Ads — high-intent search campaigns',
      'Google Local Services Ads (Google Guaranteed)',
      'Expanded Meta ads — retargeting & lookalikes',
      '1 new lead-gen landing page per month',
      'Advanced lead gen — CRM, pipeline automation, lead scoring',
      'Biweekly strategy calls + quarterly business review',
    ],
  },
}

export const TIER_ORDER: TierId[] = ['maintain', 'grow', 'scale']

// ─────────────────────────────────────────────────────────────────────────
// Dropdown options
// Investment ranges sit *slightly below* the real tier prices ($3.5k / $5.5k
// / $8.5k) on purpose — the recommendation nudges up a notch, and the video
// walkthrough makes the case that the price is worth it.
// ─────────────────────────────────────────────────────────────────────────
export type Option = { value: string; label: string }

export const CURRENT_REVENUE_OPTIONS: Option[] = [
  { value: 'under-500k', label: 'Under $500K' },
  { value: '500k-1m', label: '$500K – $1M' },
  { value: '1m-2m', label: '$1M – $2M' },
  { value: '2m-5m', label: '$2M – $5M' },
  { value: '5m-plus', label: '$5M+' },
]

export const TARGET_REVENUE_OPTIONS: Option[] = [
  { value: 'up-1m', label: 'Up to $1M' },
  { value: '1m-2m', label: '$1M – $2M' },
  { value: '2m-5m', label: '$2M – $5M' },
  { value: '5m-10m', label: '$5M – $10M' },
  { value: '10m-plus', label: '$10M+' },
]

export const MONTHLY_INVESTMENT_OPTIONS: Option[] = [
  { value: 'under-3000', label: 'Under $3,000 / mo' },
  { value: '3000-5000', label: '$3,000 – $5,000 / mo' },
  { value: '5000-7500', label: '$5,000 – $7,500 / mo' },
  { value: '7500-plus', label: '$7,500+ / mo' },
]

export function labelFor(options: Option[], value?: string): string {
  return options.find((o) => o.value === value)?.label ?? value ?? 'Not specified'
}

// ─────────────────────────────────────────────────────────────────────────
// Recommendation — keyed primarily on monthly investment, with a gentle
// "ambition" upgrade when the target revenue is large.
// ─────────────────────────────────────────────────────────────────────────
const INVESTMENT_TO_TIER: Record<string, TierId> = {
  'under-3000': 'maintain',
  '3000-5000': 'grow',
  '5000-7500': 'scale',
  '7500-plus': 'scale',
}

const AMBITIOUS_TARGETS = new Set(['5m-10m', '10m-plus'])

export function recommendTier(input: {
  currentRevenue?: string
  targetRevenue?: string
  monthlyInvestment?: string
}): TierId {
  let tier: TierId = INVESTMENT_TO_TIER[input.monthlyInvestment ?? ''] ?? 'grow'

  // Ambition nudge: a big target lifts an entry-tier pick by one notch.
  if (tier === 'maintain' && input.targetRevenue && AMBITIOUS_TARGETS.has(input.targetRevenue)) {
    tier = 'grow'
  }

  return tier
}

// ─────────────────────────────────────────────────────────────────────────
// Video embed normalizer — accepts share links and returns an embeddable URL.
// ─────────────────────────────────────────────────────────────────────────
export function toEmbedUrl(url: string): string {
  if (!url) return ''
  try {
    const u = new URL(url)
    const host = u.hostname.replace(/^www\./, '')

    // YouTube: youtu.be/ID  or  youtube.com/watch?v=ID
    if (host === 'youtu.be') {
      return `https://www.youtube.com/embed/${u.pathname.slice(1)}`
    }
    if (host === 'youtube.com' || host === 'm.youtube.com') {
      if (u.pathname === '/watch') {
        const id = u.searchParams.get('v')
        if (id) return `https://www.youtube.com/embed/${id}`
      }
      if (u.pathname.startsWith('/embed/')) return url
    }

    // Vimeo: vimeo.com/ID -> player.vimeo.com/video/ID
    if (host === 'vimeo.com') {
      const id = u.pathname.split('/').filter(Boolean)[0]
      if (id) return `https://player.vimeo.com/video/${id}`
    }

    // Loom: loom.com/share/ID -> loom.com/embed/ID
    if (host === 'loom.com' && u.pathname.startsWith('/share/')) {
      return url.replace('/share/', '/embed/')
    }
  } catch {
    return url
  }
  return url
}
