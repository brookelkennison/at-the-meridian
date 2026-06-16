'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  CURRENT_REVENUE_OPTIONS,
  TARGET_REVENUE_OPTIONS,
  MONTHLY_INVESTMENT_OPTIONS,
  type Option,
} from '@/lib/estimateTiers'

const inputClass =
  'w-full px-4 py-4 bg-bg-3 border border-line rounded text-ink placeholder:text-ink-faint text-sm focus:outline-none focus:border-accent transition-colors'

const selectClass = `${inputClass} appearance-none cursor-pointer`

function Field({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string
  name: string
  value: string
  onChange: (v: string) => void
  options: Option[]
  placeholder: string
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[11px] tracking-[0.18em] uppercase text-ink-faint">{label}</span>
      <div className="relative">
        <select
          name={name}
          value={value}
          required
          onChange={(e) => onChange(e.target.value)}
          className={selectClass}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <span
          aria-hidden
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-faint text-xs"
        >
          ▾
        </span>
      </div>
    </label>
  )
}

export default function EstimateForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    currentRevenue: '',
    targetRevenue: '',
    monthlyInvestment: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [error, setError] = useState('')
  const [token, setToken] = useState('')

  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Something went wrong.')
      }
      setToken(data.token)
      setStatus('done')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="bg-bg-2 border border-line-strong rounded-lg p-8 sm:p-10 text-center">
        <div className="w-16 h-16 mx-auto mb-7 rounded-full border border-accent flex items-center justify-center text-accent text-3xl bg-accent/[0.06]">
          ✓
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-light tracking-tight mb-3 text-ink">
          Your estimate is on its way.
        </h3>
        <p className="text-ink-dim text-sm leading-relaxed max-w-sm mx-auto mb-8">
          We just emailed <strong className="text-ink">{form.email}</strong> a link to your
          personalized walkthrough. Want to skip the inbox? Watch it now.
        </p>
        <Link
          href={`/estimate/${token}`}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-bg rounded-full font-medium text-sm hover:bg-accent-bright transition-all"
        >
          Watch your walkthrough →
        </Link>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-bg-2 border border-line-strong rounded-lg p-6 sm:p-10"
    >
      <div className="flex flex-col gap-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Full name"
            value={form.name}
            onChange={(e) => set('name')(e.target.value)}
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Work email"
            value={form.email}
            onChange={(e) => set('email')(e.target.value)}
            className={inputClass}
          />
        </div>

        <Field
          label="Where's your revenue now?"
          name="currentRevenue"
          value={form.currentRevenue}
          onChange={set('currentRevenue')}
          options={CURRENT_REVENUE_OPTIONS}
          placeholder="Current annual revenue"
        />
        <Field
          label="Where do you want it to be?"
          name="targetRevenue"
          value={form.targetRevenue}
          onChange={set('targetRevenue')}
          options={TARGET_REVENUE_OPTIONS}
          placeholder="Target annual revenue"
        />
        <Field
          label="Monthly investment you're considering"
          name="monthlyInvestment"
          value={form.monthlyInvestment}
          onChange={set('monthlyInvestment')}
          options={MONTHLY_INVESTMENT_OPTIONS}
          placeholder="Monthly investment range"
        />

        {status === 'error' && (
          <p className="text-sm text-red-300" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-bg rounded-full font-medium text-sm hover:bg-accent-bright transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Building your estimate…' : 'Get my free estimate →'}
        </button>
        <p className="text-center text-xs text-ink-faint">
          No spam. We&rsquo;ll email you a personalized walkthrough video — that&rsquo;s it.
        </p>
      </div>
    </form>
  )
}
