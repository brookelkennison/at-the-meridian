'use client'

import { useState } from 'react'

export default function QuickContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setData((p) => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`.trim(),
          email: data.email,
          notes: data.message,
        }),
      })
      if (!res.ok) throw new Error('Something went wrong — please try again.')
      setSuccess(true)
      setData({ firstName: '', lastName: '', email: '', message: '' })
      setTimeout(() => setSuccess(false), 6000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-line bg-white/80 backdrop-blur p-8 text-center">
        <h3 className="font-display text-xl text-ink mb-2">Message received.</h3>
        <p className="text-ink-dim text-sm">
          Thanks for reaching out — we&apos;ll be in touch within one business day.
        </p>
      </div>
    )
  }

  const field =
    'w-full rounded-xl border border-line bg-white/90 px-4 py-3.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition'

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {error && (
        <div className="rounded-xl border border-spot-red/30 bg-spot-red/5 text-spot-red px-4 py-3 text-sm">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="firstName"
          value={data.firstName}
          onChange={onChange}
          required
          placeholder="First Name"
          className={field}
        />
        <input
          name="lastName"
          value={data.lastName}
          onChange={onChange}
          placeholder="Last Name"
          className={field}
        />
      </div>
      <input
        name="email"
        type="email"
        value={data.email}
        onChange={onChange}
        required
        placeholder="Email"
        className={field}
      />
      <textarea
        name="message"
        value={data.message}
        onChange={onChange}
        rows={4}
        placeholder="Message…"
        className={`${field} resize-none`}
      />
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center !rounded-full py-4 text-sm font-medium disabled:opacity-60"
      >
        {loading ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
