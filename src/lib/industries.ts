/**
 * Industry-specific page data.
 * Each entry powers a page at /industries/[slug] and a link in the Navbar dropdown.
 */

export type IndustryPain = {
  title: string
  body: string
}

export type IndustryOutcome = {
  metric: string
  label: string
}

export type IndustryStep = {
  num: string
  title: string
  body: string
}

export type Industry = {
  slug: string
  name: string
  hero: {
    eyebrow: string
    h1Pre: string
    h1Italic: string
    sub: string
  }
  pains: IndustryPain[]
  outcomes: IndustryOutcome[]
  approach: IndustryStep[]
  closing: string
}

export const INDUSTRIES: Industry[] = [
  {
    slug: 'landscape-design',
    name: 'Landscape Design',
    hero: {
      eyebrow: 'For Landscape Design Firms',
      h1Pre: 'A site that books',
      h1Italic: 'every estimate.',
      sub: 'Most landscape design sites are photo galleries that ask visitors to call. We build sites that pre-qualify the consultation, filter price-shoppers, and put your most profitable projects on your calendar.',
    },
    pains: [
      {
        title: "Galleries that don't sell",
        body: "Beautiful work shown — but no path from inspiration to a booked consult. Visitors scroll, then disappear.",
      },
      {
        title: 'Tire-kickers eating your time',
        body: 'Estimates that never close because the lead was never qualified in the first place. Your design team becomes a free consulting service.',
      },
      {
        title: 'Beaten on Google by the chains',
        body: 'TruGreen, BrightView, and the franchises take the top of local search. You watch from page two.',
      },
      {
        title: 'Spring booms, winter goes silent',
        body: 'Seasonal demand, no off-season pipeline. The team scrambles in March; the phone goes quiet in November.',
      },
    ],
    outcomes: [
      { metric: '60%+', label: 'Pre-qualified consults' },
      { metric: '3.4×', label: 'Consult-to-close rate' },
      { metric: 'Top', label: 'Local search visibility' },
      { metric: '12mo', label: 'Year-round pipeline' },
    ],
    approach: [
      {
        num: '01',
        title: 'Editorial portfolio that sells',
        body: 'Galleries reframed around the buyer\'s transformation — not just before-and-afters. Each project tells a story that books the next consult.',
      },
      {
        num: '02',
        title: 'Local SEO that wins',
        body: 'Schema, neighborhood pages, and project-type targeting that takes back local search from the national chains.',
      },
      {
        num: '03',
        title: 'Pre-qualifying intake',
        body: 'Forms and booking flows that ask the right questions, so you only meet ready buyers — not browsers.',
      },
      {
        num: '04',
        title: 'Off-season nurture',
        body: 'Email and content systems that keep your name top-of-mind through winter, so spring opens with a full calendar.',
      },
    ],
    closing: "If your work deserves better than 'fill out this form,' let's talk.",
  },

  {
    slug: 'concrete-masonry',
    name: 'Concrete & Masonry',
    hero: {
      eyebrow: 'For Concrete & Masonry Operators',
      h1Pre: 'From commodity to',
      h1Italic: 'category of one.',
      sub: 'Most concrete sites compete on price because their marketing offers nothing else. We build sites and systems that position you as the premium specialist for the projects you actually want.',
    },
    pains: [
      {
        title: 'Commodity perception',
        body: 'Treated like a number on a spreadsheet, even when your work is in a different league than the next bid.',
      },
      {
        title: 'Three-bid price wars',
        body: "Estimates given for jobs you'll never win on price, eating your team's time and burning out your crew.",
      },
      {
        title: 'Wrong-fit project leads',
        body: 'Driveway sealings when you do high-end stamped patios and outdoor kitchens. The site attracts the wrong buyer.',
      },
      {
        title: 'Pipeline tied to referrals',
        body: "Whole pipeline reliant on word-of-mouth that you can't predict, can't scale, and can't survive a slow quarter.",
      },
    ],
    outcomes: [
      { metric: 'Premium', label: 'Specialist positioning' },
      { metric: '2.5×', label: 'Avg. project value' },
      { metric: 'Fewer', label: 'Better leads' },
      { metric: 'Predictable', label: 'Monthly pipeline' },
    ],
    approach: [
      {
        num: '01',
        title: 'Specialist positioning',
        body: "Site rewritten around your highest-margin specialty — not generic 'concrete services.' The work you want, marketed for the buyer who pays for it.",
      },
      {
        num: '02',
        title: 'Targeted local SEO',
        body: 'Project-type pages that intercept high-intent searches: stamped patios, outdoor kitchens, polished concrete, retaining walls.',
      },
      {
        num: '03',
        title: 'Lead filtering',
        body: 'Forms and qualification flows that route price-shoppers away — and the right projects directly to your team.',
      },
      {
        num: '04',
        title: 'Reputation engine',
        body: 'Reviews, before-and-afters, and trust signals automated, so your authority compounds with every job you ship.',
      },
    ],
    closing: "Your work isn't a commodity. Your marketing shouldn't be either.",
  },

  {
    slug: 'construction',
    name: 'Construction',
    hero: {
      eyebrow: 'For General Contractors',
      h1Pre: 'Predictable pipeline',
      h1Italic: 'for unpredictable projects.',
      sub: 'GCs live and die on referrals — until referrals slow down. We build the systems that make new project pipeline predictable: positioning, local authority, and lead infrastructure that doesn\'t depend on the last job to fund the next.',
    },
    pains: [
      {
        title: 'One slow quarter from empty',
        body: 'Whole pipeline runs on referrals. One slow quarter and the calendar dries up — and the team is already worried.',
      },
      {
        title: 'Long cycle, no follow-up',
        body: '6-month decisions where the lead goes cold without a nurture system. By the time they come back, they hired someone else.',
      },
      {
        title: 'Site that says nothing different',
        body: "'Quality, integrity, on-time, on-budget' — the same pitch every other GC in town is running. No reason to choose you.",
      },
      {
        title: 'Marketing that doesn\'t track',
        body: "Paid ads driving traffic but never connecting to closed deals. You're spending without knowing what's working.",
      },
    ],
    outcomes: [
      { metric: 'Predictable', label: 'Monthly leads' },
      { metric: 'Higher', label: 'Avg. project value' },
      { metric: 'CRM', label: 'Closes the cold pipeline' },
      { metric: 'Tracked', label: 'Marketing tied to revenue' },
    ],
    approach: [
      {
        num: '01',
        title: 'Authority positioning',
        body: 'Site rebuilt as the resource for your project type — commercial, residential custom, design-build — not just another portfolio.',
      },
      {
        num: '02',
        title: 'Long-cycle CRM',
        body: 'Nurture sequences that keep you top of mind through 6+ month decisions. The leads who weren\'t ready in March close in September.',
      },
      {
        num: '03',
        title: 'Local SEO + paid that performs',
        body: 'Channels we run together, optimizing toward closed projects — not impressions. Spend tied to revenue.',
      },
      {
        num: '04',
        title: 'Reporting that ties to revenue',
        body: "Dashboards that show you what's actually working — by channel, by project type, by source — every month.",
      },
    ],
    closing: 'Stop hoping the next referral comes through. Build the system.',
  },

  {
    slug: 'interior-design',
    name: 'Interior Design',
    hero: {
      eyebrow: 'For Interior Design Firms',
      h1Pre: 'An editorial site that',
      h1Italic: 'filters for premium clients.',
      sub: 'Most interior design sites attract every shopper. We build sites that pre-filter for the ideal client — the one with the budget, the timeline, and the taste — and book them straight onto your calendar.',
    },
    pains: [
      {
        title: 'Portfolio-heavy, conversion-light',
        body: 'Beautiful imagery that doesn\'t lead anywhere actionable. Visitors scroll the gallery and leave admiring — never inquiring.',
      },
      {
        title: 'Wrong-tier inquiries',
        body: "Hours wasted on 'just asking about a sofa' when your minimum project is a full home refresh.",
      },
      {
        title: 'The pricing transparency dilemma',
        body: 'Show numbers and lose the high-end client; hide them and waste consults on people who can\'t afford you. Most sites get it wrong.',
      },
      {
        title: 'Search invisible',
        body: "Designers don't rank for 'interior designer near me' because the site is image-only — Google can't read the work.",
      },
    ],
    outcomes: [
      { metric: '70%+', label: 'Premium-tier inquiries' },
      { metric: 'Editorial', label: 'Brand presence' },
      { metric: 'Booked', label: 'Consults, not forms' },
      { metric: 'Found', label: 'Search-discoverable' },
    ],
    approach: [
      {
        num: '01',
        title: 'Editorial design system',
        body: 'Magazine-quality presentation that reflects the work — typography, layout, and pacing built for the kind of client you want.',
      },
      {
        num: '02',
        title: 'Copy that pre-qualifies',
        body: "Language that signals tier without quoting prices. Buyers self-select before they ever fill out a form.",
      },
      {
        num: '03',
        title: 'Booking flow, not a form',
        body: 'Consultations land directly on your calendar, qualified and scheduled — not buried in your inbox.',
      },
      {
        num: '04',
        title: 'SEO for designers',
        body: 'Project-type and style pages — full home, kitchen, primary suite, coastal, modern, transitional — that finally get indexed.',
      },
    ],
    closing: "The right clients are searching. They just can't find you yet.",
  },

  {
    slug: 'custom-home-builders',
    name: 'Custom Home Builders',
    hero: {
      eyebrow: 'For Custom Home Builders',
      h1Pre: 'A flagship site for',
      h1Italic: 'your flagship homes.',
      sub: 'Custom builds aren\'t impulse purchases. They\'re a 12-24 month commitment, and the buyer decides whether you\'re trusted before they ever pick up the phone. We build sites that close that decision in your favor.',
    },
    pains: [
      {
        title: "Site that doesn't match the work",
        body: 'World-class homes, marketing-collateral website. The biggest investment in someone\'s life — represented by a stock template.',
      },
      {
        title: 'Slow burn, no nurture',
        body: 'Buyers research for months before they call. Most builders never stay in the conversation — and lose to the one who did.',
      },
      {
        title: 'Generic intake forms',
        body: 'The same contact form a remodeler uses, when the project is 100× the size. Wrong tool for the buyer.',
      },
      {
        title: 'Brand that can\'t carry the price',
        body: "Premium builds need premium positioning — not 'family-owned, building dreams since 1987.' The story has to match the price tag.",
      },
    ],
    outcomes: [
      { metric: 'Premium', label: 'Tier positioning' },
      { metric: 'Ready', label: 'Buyers who commit' },
      { metric: '24mo', label: 'Long-cycle nurture' },
      { metric: 'Architectural', label: 'Brand quality' },
    ],
    approach: [
      {
        num: '01',
        title: 'Cinematic flagship build',
        body: 'A site as carefully crafted as the homes — typography, imagery, and pacing that signal what you actually deliver.',
      },
      {
        num: '02',
        title: 'Long-cycle CRM',
        body: '12-24 month nurture sequences so you\'re top-of-mind when the buyer is finally ready to break ground.',
      },
      {
        num: '03',
        title: 'Custom intake',
        body: 'Forms that match the project size — qualifying for budget, lot, timeline, and architectural fit before the first call.',
      },
      {
        num: '04',
        title: 'Authority content',
        body: 'Process, philosophy, and architectural-collaboration content that earns trust before the first phone call.',
      },
    ],
    closing: "Buyers aren't hesitating because of price. They're hesitating because they don't trust you yet.",
  },

  {
    slug: 'remodelers',
    name: 'Remodelers',
    hero: {
      eyebrow: 'For Kitchen, Bath & Whole-Home Remodelers',
      h1Pre: 'Every kitchen lead',
      h1Italic: "you should have.",
      sub: "Kitchen and bath remodels are the most-Googled projects in your category. We build the local SEO authority, paid pipeline, and intake systems that turn 'best kitchen remodeler near me' into your next signed contract.",
    },
    pains: [
      {
        title: 'Lead chaos across channels',
        body: 'Houzz, Angie, Google, paid, and referrals — all routing somewhere different. No single source of truth.',
      },
      {
        title: 'Quote-chasers, not commits',
        body: 'Estimates given, never closed. No follow-up system, no nurture, no second chance.',
      },
      {
        title: 'Search visibility flat',
        body: "Local SEO never moves because the site isn't built for it. The competitors who hand-coded their site are eating your traffic.",
      },
      {
        title: 'Paid that bleeds money',
        body: 'Google Ads burning $50+ per lead with no qualification. You\'re paying for tire-kickers.',
      },
    ],
    outcomes: [
      { metric: 'Predictable', label: 'Kitchen + bath pipeline' },
      { metric: '60%', label: 'Lower cost-per-lead' },
      { metric: 'Unified', label: 'All channels, one CRM' },
      { metric: 'Top', label: 'Of-search authority' },
    ],
    approach: [
      {
        num: '01',
        title: 'Project-type SEO',
        body: "Pages purpose-built for 'kitchen remodel,' 'bathroom remodel,' 'whole-home renovation' — each ranking on its own keyword.",
      },
      {
        num: '02',
        title: 'Paid acquisition that pays back',
        body: 'Google + Meta tuned to qualified-lead cost, not click cost. Spend tracked to closed projects.',
      },
      {
        num: '03',
        title: 'One CRM, every channel',
        body: 'All leads — Houzz, paid, organic, referrals — routed, scored, and followed up automatically. No more leaks.',
      },
      {
        num: '04',
        title: 'Reputation flywheel',
        body: 'Reviews, before-and-afters, and content that compound — so the next lead comes pre-trusting you.',
      },
    ],
    closing: 'The leads are out there. The system catches them.',
  },
]

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug)
}
