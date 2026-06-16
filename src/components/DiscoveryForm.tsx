'use client'

import { useState } from 'react'

type StepId = 1 | 2 | 3 | 4 | 'success'

type LeadPayload = {
  revenue?: string
  need?: string
  timeline?: string
  name?: string
  email?: string
  company?: string
  notes?: string
}

const TOTAL_STEPS = 4

const REVENUE_OPTIONS = [
  { value: 'under-1M', label: 'Under $1M' },
  { value: '1-3M', label: '$1M – $3M' },
  { value: '3-10M', label: '$3M – $10M' },
  { value: '10M+', label: '$10M+' },
]

const NEED_OPTIONS = [
  { value: 'website', label: 'A new high-converting website' },
  { value: 'seo', label: 'SEO and organic growth' },
  { value: 'paid', label: 'Paid acquisition that’s profitable' },
  { value: 'crm', label: 'CRM and lead infrastructure' },
  { value: 'full', label: 'Full-stack growth partner' },
]

const TIMELINE_OPTIONS = [
  { value: 'now', label: 'Yesterday — let’s go' },
  { value: '30', label: 'Within 30 days' },
  { value: '60-90', label: 'In the next 60–90 days' },
  { value: 'exploring', label: 'Just exploring' },
]

export default function DiscoveryForm() {
  const [step, setStep] = useState<StepId>(1)
  const [data, setData] = useState<LeadPayload>({})
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const progressPct =
    step === 'success' ? 100 : Math.round((Number(step) / TOTAL_STEPS) * 100)

  function pickOption(field: keyof LeadPayload, value: string) {
    setData((d) => ({ ...d, [field]: value }))
    // Auto-advance after a short delay
    setTimeout(() => {
      setStep((s) => (typeof s === 'number' ? (Math.min(s + 1, TOTAL_STEPS) as StepId) : s))
    }, 240)
  }

  function back() {
    setStep((s) =>
      typeof s === 'number' ? (Math.max(1, s - 1) as StepId) : s
    )
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    const fd = new FormData(e.currentTarget)
    const payload: LeadPayload = {
      ...data,
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      company: String(fd.get('company') || ''),
      notes: String(fd.get('notes') || ''),
    }

    if (!payload.name || !payload.email || !payload.company) {
      setError('Please fill in all required fields.')
      setSubmitting(false)
      return
    }

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || json.success === false) {
        throw new Error(json.error || 'Submission failed')
      }
      setStep('success')
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-bg-2 border border-line-strong rounded-lg p-6 sm:p-10 min-h-[480px] relative"
      noValidate
    >
      {/* Progress bar */}
      <div className="flex items-center gap-4 mb-8">
        <span className="flex-1 h-px bg-line rounded-full overflow-hidden">
          <span
            className="block h-full bg-gradient-to-r from-accent-deep to-accent transition-[width] duration-500 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </span>
        <span className="text-[11px] tracking-[0.22em] uppercase text-ink-faint">
          Step{' '}
          <em className="not-italic font-semibold text-accent">
            {step === 'success' ? TOTAL_STEPS : step}
          </em>{' '}
          of {TOTAL_STEPS}
        </span>
      </div>

      {/* STEP 1 — Revenue */}
      {step === 1 && (
        <Step
          title="What’s your annual revenue?"
          help="Helps us understand if we’re the right fit."
        >
          <Options
            options={REVENUE_OPTIONS}
            selected={data.revenue}
            onPick={(v) => pickOption('revenue', v)}
          />
        </Step>
      )}

      {/* STEP 2 — Need */}
      {step === 2 && (
        <Step title="What’s the primary need?" help="Pick the one that’s most pressing.">
          <Options
            options={NEED_OPTIONS}
            selected={data.need}
            onPick={(v) => pickOption('need', v)}
          />
          <BackButton onClick={back} />
        </Step>
      )}

      {/* STEP 3 — Timeline */}
      {step === 3 && (
        <Step title="When do you need to move?" help="No wrong answer.">
          <Options
            options={TIMELINE_OPTIONS}
            selected={data.timeline}
            onPick={(v) => pickOption('timeline', v)}
          />
          <BackButton onClick={back} />
        </Step>
      )}

      {/* STEP 4 — Contact */}
      {step === 4 && (
        <Step
          title="Where can we reach you?"
          help="We’ll respond within one business day."
        >
          <div className="flex flex-col gap-3 mb-6">
            <input
              name="name"
              type="text"
              placeholder="Full name"
              required
              className="w-full px-4 py-4 bg-bg-3 border border-line rounded text-ink placeholder:text-ink-faint text-sm focus:outline-none focus:border-accent transition-colors"
            />
            <input
              name="email"
              type="email"
              placeholder="Work email"
              required
              className="w-full px-4 py-4 bg-bg-3 border border-line rounded text-ink placeholder:text-ink-faint text-sm focus:outline-none focus:border-accent transition-colors"
            />
            <input
              name="company"
              type="text"
              placeholder="Company name"
              required
              className="w-full px-4 py-4 bg-bg-3 border border-line rounded text-ink placeholder:text-ink-faint text-sm focus:outline-none focus:border-accent transition-colors"
            />
            <textarea
              name="notes"
              placeholder="Anything else we should know? (optional)"
              rows={3}
              className="w-full px-4 py-4 bg-bg-3 border border-line rounded text-ink placeholder:text-ink-faint text-sm focus:outline-none focus:border-accent transition-colors resize-y"
            />
          </div>

          {error && (
            <p className="text-sm text-red-300 mb-4" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-bg rounded-full font-medium text-sm hover:bg-accent-bright transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? 'Sending…' : 'Send my discovery call request'}{' '}
            <span aria-hidden>{'→'}</span>
          </button>
          <BackButton onClick={back} />
        </Step>
      )}

      {/* SUCCESS */}
      {step === 'success' && (
        <div className="text-center py-10">
          <div className="w-16 h-16 mx-auto mb-7 rounded-full border border-accent flex items-center justify-center text-accent text-3xl bg-accent/[0.06]">
            {'✓'}
          </div>
          <h3 className="font-serif text-3xl font-light tracking-tight mb-3 text-ink">
            Got it.
          </h3>
          <p className="text-ink-dim max-w-xs mx-auto text-sm leading-relaxed">
            We’ve received your request. You’ll hear from us within one business day with available times for a discovery call.
          </p>
        </div>
      )}
    </form>
  )
}

/* ─────── Sub-components ─────── */

function Step({
  title,
  help,
  children,
}: {
  title: string
  help: string
  children: React.ReactNode
}) {
  return (
    <div className="animate-fade-up">
      <h3 className="font-serif text-2xl sm:text-[28px] font-light tracking-tight text-ink mb-2">
        {title}
      </h3>
      <p className="text-ink-dim text-sm mb-6">{help}</p>
      {children}
    </div>
  )
}

function Options({
  options,
  selected,
  onPick,
}: {
  options: { value: string; label: string }[]
  selected?: string
  onPick: (v: string) => void
}) {
  return (
    <div className="flex flex-col gap-2.5">
      {options.map((o) => {
        const isSelected = selected === o.value
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onPick(o.value)}
            className={[
              'text-left px-5 py-4 rounded text-sm font-sans border transition-all',
              isSelected
                ? 'border-accent bg-accent/10 text-accent-bright'
                : 'border-line bg-bg-3 text-ink hover:border-accent hover:bg-accent/5 hover:translate-x-1',
            ].join(' ')}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="block w-full text-center mt-4 text-xs text-ink-dim hover:text-accent transition-colors py-2"
    >
      {'←'} Back
    </button>
  )
}
