/**
 * Dental vertical content.
 *
 * Powers the parent landing page at /dental and one subpage per specialty
 * at /dental/[specialty]. Imagery for the atmospheric bands lives in
 * src/lib/images.ts (dentalClinic, dentalCare, dentalSmile).
 */

export type DentalPain = { title: string; body: string }
export type DentalOutcome = { metric: string; label: string }
export type DentalStep = { num: string; title: string; body: string }

export type DentalSpecialty = {
  slug: string
  name: string
  /** One-line card descriptor on the parent page. */
  summary: string
  hero: {
    eyebrow: string
    h1Pre: string
    h1Italic: string
    sub: string
  }
  pains: DentalPain[]
  outcomes: DentalOutcome[]
  approach: DentalStep[]
  closing: string
}

/* ─────────────── Parent overview ─────────────── */

export const DENTAL_PARENT = {
  hero: {
    eyebrow: 'For Dental Practices',
    h1Pre: 'The practice patients choose',
    h1Italic: 'before they call.',
    sub: 'Patients judge your practice by your website and your reviews long before they ever pick up the phone. We build the site, the local SEO, and the systems that fill your schedule with the patients — and the procedures — you actually want.',
  },
  pains: [
    {
      title: 'Gaps in the schedule',
      body: 'Open chairs are lost revenue you can’t get back. Most dental sites attract clicks but never convert them into booked appointments.',
    },
    {
      title: 'Insurance-shoppers, not patients',
      body: 'Without the right positioning and intake, you attract price-driven, one-visit patients instead of the high-value cases that build a practice.',
    },
    {
      title: 'Beaten by the DSO down the street',
      body: 'Corporate dental groups dominate local search with big budgets. A hand-coded, SEO-engineered site is how an independent practice takes that ground back.',
    },
    {
      title: 'No system for recall & reactivation',
      body: 'Patients fall out of recall, treatment plans go unaccepted, and there’s no automation bringing them back. The revenue is already in your chart — it’s just leaking.',
    },
  ],
  outcomes: [
    { metric: '2–4×', label: 'More booked new patients' },
    { metric: 'Higher', label: 'Case acceptance value' },
    { metric: 'Top', label: 'Local map visibility' },
    { metric: 'Full', label: 'Schedule, fewer gaps' },
  ],
  approach: [
    {
      num: '01',
      title: 'A site engineered to book',
      body: 'Conversion-first design with online scheduling, click-to-call, and procedure pages built around the cases you want most — not a digital brochure.',
    },
    {
      num: '02',
      title: 'Local SEO that wins the map',
      body: 'Google Business Profile optimization, review systems, location and procedure schema — built to outrank the DSOs in your area.',
    },
    {
      num: '03',
      title: 'Patient-acquisition systems',
      body: 'Paid search for high-intent procedures, landing pages per service line, and intake that pre-qualifies before the front desk ever picks up.',
    },
    {
      num: '04',
      title: 'Recall, reactivation & nurture',
      body: 'Automated recall, treatment-plan follow-up, and reactivation campaigns that turn the patients already in your system into booked production.',
    },
  ],
  closing:
    'Your clinical work is excellent. Your marketing should make that obvious before the first appointment.',
}

/* ─────────────── Specialties ─────────────── */

export const DENTAL_SPECIALTIES: DentalSpecialty[] = [
  {
    slug: 'orthodontics',
    name: 'Orthodontics',
    summary: 'Win Invisalign and braces cases from parents and adults actively searching.',
    hero: {
      eyebrow: 'For Orthodontic Practices',
      h1Pre: 'Every aligner case',
      h1Italic: 'you should be winning.',
      sub: 'Invisalign and braces are high-value, high-intent searches — and the practice that shows up first, looks the part, and makes booking effortless wins them. We build the site and systems that turn “orthodontist near me” into a booked consult.',
    },
    pains: [
      {
        title: 'Competing on price, not outcome',
        body: 'When every ortho site looks the same, patients shop on monthly payment. We position you on results and experience instead.',
      },
      {
        title: 'Consults that don’t convert',
        body: 'Free-consult traffic that never books, or books and no-shows. Your intake and follow-up are doing none of the selling.',
      },
      {
        title: 'Adults don’t know you treat them',
        body: 'Half your best cases are adults who assume ortho is for teens. Your marketing never speaks to them.',
      },
      {
        title: 'Invisible for high-value searches',
        body: 'You rank for nothing on “Invisalign [city]” while the corporate ortho chains take every top spot.',
      },
    ],
    outcomes: [
      { metric: '3×+', label: 'Consult requests' },
      { metric: 'Higher', label: 'Aligner case value' },
      { metric: 'Adult', label: 'Case mix growth' },
      { metric: 'Top', label: 'For “Invisalign” searches' },
    ],
    approach: [
      {
        num: '01',
        title: 'Treatment-led positioning',
        body: 'Reframe the site around transformation and confidence — the reasons people actually straighten teeth — not brackets and wires.',
      },
      {
        num: '02',
        title: 'Procedure SEO',
        body: 'Dedicated, optimized pages for Invisalign, clear aligners, braces, and adult ortho — each ranking on its own high-intent term.',
      },
      {
        num: '03',
        title: 'Frictionless consult booking',
        body: 'Online scheduling, virtual consult intake, and reminder sequences that cut no-shows and fill the consult calendar.',
      },
      {
        num: '04',
        title: 'Nurture for slow yeses',
        body: 'Aligner decisions take time. Email and SMS sequences keep you top-of-mind until the patient is ready to start.',
      },
    ],
    closing: 'The cases are searching right now. Let’s make sure they find you first.',
  },
  {
    slug: 'oral-surgery',
    name: 'Oral Surgery',
    summary: 'Implant, extraction, and wisdom-tooth cases — plus a referral engine that compounds.',
    hero: {
      eyebrow: 'For Oral & Maxillofacial Surgeons',
      h1Pre: 'High-value cases and',
      h1Italic: 'referrals that compound.',
      sub: 'Oral surgery runs on two engines: high-intent patient searches for implants and wisdom teeth, and a steady stream of referrals from general dentists. We build the authority and systems that grow both.',
    },
    pains: [
      {
        title: 'Referral pipeline is fragile',
        body: 'A handful of referring GPs drive most of your cases. Lose one and the schedule feels it. There’s no system to grow or protect that network.',
      },
      {
        title: 'Implant cases go elsewhere',
        body: 'Patients searching “dental implants [city]” land on a competitor with a stronger site and clearer answers on cost and process.',
      },
      {
        title: 'A site that doesn’t signal expertise',
        body: 'For surgery, trust is everything. A dated, generic site quietly undercuts the credibility your training has earned.',
      },
      {
        title: 'No tracking on what drives cases',
        body: 'You can’t see which referrers, channels, or pages actually produce booked surgeries — so you can’t double down.',
      },
    ],
    outcomes: [
      { metric: 'Steady', label: 'Implant case flow' },
      { metric: 'Stronger', label: 'Referrer network' },
      { metric: 'Premium', label: 'Authority positioning' },
      { metric: 'Tracked', label: 'Source-to-surgery' },
    ],
    approach: [
      {
        num: '01',
        title: 'Authority-grade site',
        body: 'A site that looks and reads like the specialist you are — credentials, technology, and outcomes presented with confidence.',
      },
      {
        num: '02',
        title: 'Procedure SEO + paid',
        body: 'Implants, wisdom teeth, bone grafting, full-arch — each its own optimized page, supported by high-intent paid search.',
      },
      {
        num: '03',
        title: 'Referrer relationship system',
        body: 'A referring-doctor portal, easy referral intake, and communication that keeps your network sending — and feeling looked after.',
      },
      {
        num: '04',
        title: 'Attribution & reporting',
        body: 'Track every case to its source so you know which referrers and channels to invest in next.',
      },
    ],
    closing: 'Protect the referrals you have. Build the patient pipeline you don’t.',
  },
  {
    slug: 'pediatric',
    name: 'Pediatric Dentistry',
    summary: 'Reach parents, fill the recall calendar, and grow with the families you serve.',
    hero: {
      eyebrow: 'For Pediatric Dental Practices',
      h1Pre: 'The practice parents',
      h1Italic: 'trust with their kids.',
      sub: 'Pediatric dentistry is a parent’s decision, and parents research hard. We build a warm, fast, reassuring site — and the recall systems that keep growing families coming back for years.',
    },
    pains: [
      {
        title: 'Parents can’t tell you apart',
        body: 'Every pediatric site says “fun, gentle, caring.” Nothing signals why a parent should choose you over the office two miles away.',
      },
      {
        title: 'Recall gaps cost a fortune',
        body: 'Kids miss six-month visits and never get rebooked. Across hundreds of families, that’s a massive, invisible revenue leak.',
      },
      {
        title: 'New-mover families never find you',
        body: 'Young families move constantly and search for a new dentist immediately. If you’re not visible locally, you miss them at the exact right moment.',
      },
      {
        title: 'Anxious parents bounce',
        body: 'A confusing or slow site adds friction for a parent who’s already nervous. They leave for the office that made it easy.',
      },
    ],
    outcomes: [
      { metric: 'More', label: 'New-family bookings' },
      { metric: 'Higher', label: 'Recall retention' },
      { metric: 'Found', label: 'By new-mover families' },
      { metric: 'Warmer', label: 'First impression' },
    ],
    approach: [
      {
        num: '01',
        title: 'Reassuring, parent-first design',
        body: 'Warm, fast, and effortless to use — answering the questions anxious parents actually ask, and making booking a 30-second task.',
      },
      {
        num: '02',
        title: 'Local visibility for families',
        body: 'Neighborhood SEO and Google Business Profile optimization so new-mover families find you the week they arrive.',
      },
      {
        num: '03',
        title: 'Automated recall',
        body: 'Six-month recall reminders by text and email that quietly rebook the visits your front desk doesn’t have time to chase.',
      },
      {
        num: '04',
        title: 'Reviews that build trust',
        body: 'Automated review requests after positive visits, so the social proof parents look for keeps compounding.',
      },
    ],
    closing: 'Earn the parent’s trust online, and you earn the whole family for years.',
  },
  {
    slug: 'cosmetic',
    name: 'Cosmetic Dentistry',
    summary: 'Attract premium veneer, whitening, and smile-makeover cases who pay out of pocket.',
    hero: {
      eyebrow: 'For Cosmetic Dental Practices',
      h1Pre: 'A site as polished',
      h1Italic: 'as the smiles you create.',
      sub: 'Cosmetic patients pay out of pocket and choose with their eyes. We build an editorial, high-end site and the systems that turn “veneers near me” into premium, ready-to-book cases.',
    },
    pains: [
      {
        title: 'The site undersells the work',
        body: 'Beautiful smile makeovers presented on a dated template. The single biggest reason premium cases choose someone else.',
      },
      {
        title: 'Attracting the wrong budget',
        body: 'Marketing that pulls bargain-hunters instead of patients ready to invest in veneers or a full smile design.',
      },
      {
        title: 'Before/afters that don’t convert',
        body: 'Galleries buried and unstructured — when they should be the centerpiece that books the consult.',
      },
      {
        title: 'No premium consult experience',
        body: 'High-end patients expect a high-end intake. A generic contact form sets the wrong tone before they walk in.',
      },
    ],
    outcomes: [
      { metric: '70%+', label: 'Premium-fit inquiries' },
      { metric: 'Higher', label: 'Average case value' },
      { metric: 'Editorial', label: 'Brand presence' },
      { metric: 'Booked', label: 'Consults, not forms' },
    ],
    approach: [
      {
        num: '01',
        title: 'Editorial, luxury-grade design',
        body: 'Magazine-quality presentation — typography, pacing, and photography that reflect the caliber of the work and the price it commands.',
      },
      {
        num: '02',
        title: 'Before/after as the hero',
        body: 'Transformation galleries structured to sell — organized by case type and built to drive straight to a consult request.',
      },
      {
        num: '03',
        title: 'Copy that pre-qualifies',
        body: 'Language that signals investment level without quoting prices, so the right patients self-select before booking.',
      },
      {
        num: '04',
        title: 'A premium consult flow',
        body: 'A concierge-style booking and intake experience that matches the expectations of a patient ready to invest.',
      },
    ],
    closing: 'Premium patients judge premium work by the website. Let’s make it undeniable.',
  },
  {
    slug: 'general-family',
    name: 'General & Family',
    summary: 'Grow the new-patient base and protect recall — the backbone of a healthy practice.',
    hero: {
      eyebrow: 'For General & Family Practices',
      h1Pre: 'A steady stream of',
      h1Italic: 'new patients and recalls.',
      sub: 'A general practice lives and dies by new-patient flow and recall retention. We build the site, local SEO, and automation that keep both full — so the schedule stays predictable.',
    },
    pains: [
      {
        title: 'New-patient flow is unpredictable',
        body: 'Some months are packed, others are quiet, and there’s no system making new-patient acquisition reliable.',
      },
      {
        title: 'Recall retention slips',
        body: 'Patients drift out of recall and no one notices until the hygiene schedule has holes in it.',
      },
      {
        title: 'Outranked on local search',
        body: 'The DSO and the discount clinic sit above you on Google, taking the patients searching right now.',
      },
      {
        title: 'Unaccepted treatment plans',
        body: 'Diagnosed treatment that never gets scheduled — production already identified, just walking out the door.',
      },
    ],
    outcomes: [
      { metric: 'Predictable', label: 'New-patient flow' },
      { metric: 'Higher', label: 'Recall retention' },
      { metric: 'Top 3', label: 'Local map pack' },
      { metric: 'More', label: 'Accepted treatment' },
    ],
    approach: [
      {
        num: '01',
        title: 'A conversion-first site',
        body: 'Fast, clear, and built to book — online scheduling, insurance clarity, and the answers patients need to choose you.',
      },
      {
        num: '02',
        title: 'Win the local map',
        body: 'Google Business Profile, reviews, and local SEO engineered to put you in the top three where most clicks happen.',
      },
      {
        num: '03',
        title: 'Recall & reactivation automation',
        body: 'Automated reminders and lapsed-patient reactivation that keep the hygiene schedule full without front-desk effort.',
      },
      {
        num: '04',
        title: 'Treatment follow-up',
        body: 'Sequences that follow up on unscheduled treatment plans, turning diagnosed work into booked production.',
      },
    ],
    closing: 'Keep the chairs full and the recalls coming. That’s the whole game.',
  },
  {
    slug: 'periodontics',
    name: 'Periodontics',
    summary: 'Grow implant and gum-treatment cases while strengthening your referral network.',
    hero: {
      eyebrow: 'For Periodontal Practices',
      h1Pre: 'Implants, grafts, and a',
      h1Italic: 'referral network that grows.',
      sub: 'Like oral surgery, periodontics balances direct patient demand with a referral base of general dentists. We build the authority site and the systems that strengthen both sides of the pipeline.',
    },
    pains: [
      {
        title: 'Referrals concentrated and at risk',
        body: 'A few referring GPs carry the practice. There’s no system to deepen those relationships or add new ones.',
      },
      {
        title: 'Patients don’t understand the value',
        body: 'Gum disease and grafting are hard to sell when the site doesn’t educate. Patients delay, or go elsewhere.',
      },
      {
        title: 'Implant cases lost to competitors',
        body: 'High-value implant searches land on better-positioned sites with clearer answers and stronger proof.',
      },
      {
        title: 'Specialist credibility not conveyed',
        body: 'Your training and technology don’t come through online, so the site reads like a general office.',
      },
    ],
    outcomes: [
      { metric: 'Stronger', label: 'Referral network' },
      { metric: 'More', label: 'Implant & graft cases' },
      { metric: 'Clearer', label: 'Patient education' },
      { metric: 'Premium', label: 'Specialist positioning' },
    ],
    approach: [
      {
        num: '01',
        title: 'Specialist authority site',
        body: 'A site that conveys expertise — technology, credentials, and outcomes — so patients and referrers trust you on sight.',
      },
      {
        num: '02',
        title: 'Educational procedure pages',
        body: 'Clear, reassuring pages on periodontal treatment, grafting, and implants that build understanding and drive consults.',
      },
      {
        num: '03',
        title: 'Referrer engagement system',
        body: 'Easy referral intake, a referring-doctor portal, and communication that keeps your network active and loyal.',
      },
      {
        num: '04',
        title: 'High-intent acquisition',
        body: 'SEO and paid search for implants and periodontal treatment, supported by intake that pre-qualifies the case.',
      },
    ],
    closing: 'Deepen the referrals you have, and add the patients searching on their own.',
  },
  {
    slug: 'endodontics',
    name: 'Endodontics',
    summary: 'Capture urgent root-canal demand and keep referring dentists sending cases.',
    hero: {
      eyebrow: 'For Endodontic Practices',
      h1Pre: 'Be the obvious choice',
      h1Italic: 'when the pain starts.',
      sub: 'Endodontics is urgency plus referrals: patients in pain searching now, and general dentists who need a specialist they trust. We build the fast, reassuring site and the referral systems that capture both.',
    },
    pains: [
      {
        title: 'Urgent searches go to whoever’s fastest',
        body: 'Patients in pain search “root canal near me” and book the first practice that makes it easy. A slow site loses them instantly.',
      },
      {
        title: 'Referral relationships unmanaged',
        body: 'Most of your cases come from referring dentists, but nothing systematically protects or grows that network.',
      },
      {
        title: 'Fear-driven hesitation',
        body: 'Root canals carry dread. If the site doesn’t reassure, anxious patients delay — or never call.',
      },
      {
        title: 'No after-hours capture',
        body: 'Emergencies happen at night and on weekends. Without intake that works 24/7, those cases are simply missed.',
      },
    ],
    outcomes: [
      { metric: 'Faster', label: 'Urgent-case capture' },
      { metric: 'Stronger', label: 'Referrer loyalty' },
      { metric: 'Lower', label: 'Patient hesitation' },
      { metric: '24/7', label: 'Intake coverage' },
    ],
    approach: [
      {
        num: '01',
        title: 'Fast, reassuring, mobile-first',
        body: 'A lightning-fast site that answers fear and friction up front and makes urgent booking effortless on a phone.',
      },
      {
        num: '02',
        title: 'Capture urgent intent',
        body: 'SEO and paid search for root-canal and emergency-endo terms, routed to intake that books the case immediately.',
      },
      {
        num: '03',
        title: 'Referrer system',
        body: 'Simple referral intake and communication that keeps general dentists confident sending their patients to you.',
      },
      {
        num: '04',
        title: 'Always-on intake',
        body: 'After-hours scheduling and automated response so emergencies are captured the moment they happen.',
      },
    ],
    closing: 'When the pain hits, be the practice that’s easiest to choose.',
  },
]

export function getSpecialty(slug: string): DentalSpecialty | undefined {
  return DENTAL_SPECIALTIES.find((s) => s.slug === slug)
}
