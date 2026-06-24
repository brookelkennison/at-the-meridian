'use client'

import { useState } from 'react'

type Service = {
  name: string
  note: string
  body: string
  points: string[]
}

const services: Service[] = [
  {
    name: 'SEO & Organic Authority',
    note: 'Take the top of local search.',
    body: 'Compounding organic reach that takes the top of local search — technical foundations, content velocity, and authority that builds month after month.',
    points: [
      'Technical + on-page SEO',
      'Local & map-pack optimization',
      'Content & keyword strategy',
      'Authority that compounds',
    ],
  },
  {
    name: 'Paid Acquisition',
    note: 'Google + Meta, tuned to leads not clicks.',
    body: 'Run with discipline — small, deliberate tests first, then scale what converts. Optimized toward qualified leads, not clicks. You own the ad account; we manage the spend.',
    points: [
      'Google Search + Local Services Ads',
      'Meta retargeting & lookalikes',
      'Tracked from click to closed revenue',
      'You own the budget — we manage it',
    ],
  },
  {
    name: 'CRM & Automation',
    note: 'Capture, score, and route every lead.',
    body: 'The plumbing behind the growth — systems that capture, nurture, score, and route every dollar of demand so nothing slips through.',
    points: [
      'CRM buildout & pipeline automation',
      'Lead scoring & routing',
      'Email / SMS nurture sequences',
      'Source attribution end-to-end',
    ],
  },
  {
    name: 'Lead Generation',
    note: 'Qualified conversations, week after week.',
    body: 'Qualified conversations on your calendar, week after week — landing pages, funnels, and CRO that turn demand into booked, ready buyers.',
    points: [
      'High-converting landing pages',
      'Funnel & conversion-rate testing',
      'Booking flows, not contact forms',
      'Pre-qualification built in',
    ],
  },
]

export default function ServicesAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {services.map((s, i) => {
        const isOpen = open === i
        return (
          <div
            key={s.name}
            className={[
              'rounded-2xl border bg-white shadow-sm transition-colors',
              isOpen ? 'border-accent/40' : 'border-line hover:border-accent/40',
            ].join(' ')}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left cursor-pointer"
            >
              <div>
                <div className="font-display text-lg text-ink">{s.name}</div>
                <div className="text-sm text-ink-faint">{s.note}</div>
              </div>
              <span
                className={[
                  'text-accent text-xl leading-none shrink-0 transition-transform duration-300',
                  isOpen ? 'rotate-45' : 'rotate-0',
                ].join(' ')}
                aria-hidden
              >
                +
              </span>
            </button>

            {/* Expanding panel */}
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <div className="px-7 pb-6 pt-0">
                  <p className="text-sm text-ink-dim leading-relaxed">{s.body}</p>
                  <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-ink">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
