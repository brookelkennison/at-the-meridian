'use client'

import { useState } from 'react'
import Button from './Button'

interface FormState {
  name: string
  email: string
  company: string
  currentWebsite: string
  industry: string
  projectType: string
  budgetRange: string
  timeline: string
  whatIsNotWorking: string
  whatIsSuccess: string
  howYouHeard: string
}

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    currentWebsite: '',
    industry: '',
    projectType: '',
    budgetRange: '',
    timeline: '',
    whatIsNotWorking: '',
    whatIsSuccess: '',
    howYouHeard: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit inquiry')
      }

      setIsSuccess(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        currentWebsite: '',
        industry: '',
        projectType: '',
        budgetRange: '',
        timeline: '',
        whatIsNotWorking: '',
        whatIsSuccess: '',
        howYouHeard: '',
      })

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-warm-sand border-l-4 border-coastal-teal p-8 rounded-none">
        <h3 className="font-display font-light text-xl text-deep-ocean mb-2">
          Thank you for reaching out.
        </h3>
        <p className="font-sans text-sm text-deep-ocean opacity-75">
          We'll review your inquiry and be in touch within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-none text-sm">
          {error}
        </div>
      )}

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="font-sans text-xs tracking-widest uppercase text-deep-ocean mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-warm-sand border border-driftwood px-6 py-3 font-sans text-sm text-deep-ocean focus:outline-none focus:border-coastal-teal transition-colors"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="font-sans text-xs tracking-widest uppercase text-deep-ocean mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-warm-sand border border-driftwood px-6 py-3 font-sans text-sm text-deep-ocean focus:outline-none focus:border-coastal-teal transition-colors"
            placeholder="your@email.com"
          />
        </div>

        {/* Company */}
        <div className="flex flex-col">
          <label htmlFor="company" className="font-sans text-xs tracking-widest uppercase text-deep-ocean mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="bg-warm-sand border border-driftwood px-6 py-3 font-sans text-sm text-deep-ocean focus:outline-none focus:border-coastal-teal transition-colors"
            placeholder="Company name"
          />
        </div>

        {/* Current Website */}
        <div className="flex flex-col">
          <label htmlFor="currentWebsite" className="font-sans text-xs tracking-widest uppercase text-deep-ocean mb-2">
            Current Website
          </label>
          <input
            type="url"
            id="currentWebsite"
            name="currentWebsite"
            value={formData.currentWebsite}
            onChange={handleChange}
            className="bg-warm-sand border border-driftwood px-6 py-3 font-sans text-sm text-deep-ocean focus:outline-none focus:border-coastal-teal transition-colors"
            placeholder="https://..."
          />
        </div>

        {/* Industry */}
        <div className="flex flex-col">
          <label htmlFor="industry" className="font-sans text-xs tracking-widest uppercase text-deep-ocean mb-2">
            Industry
          </label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="bg-warm-sand border border-driftwood px-6 py-3 font-sans text-sm text-deep-ocean focus:outline-none focus:border-coastal-teal transition-colors"
          >
            <option value="">Select industry</option>
            <option value="Hospitality">Hospitality</option>
            <option value="Rentals & Property">Rentals & Property</option>
            <option value="Tourism">Tourism</option>
            <option value="Service Business">Service Business</option>
            <option value="E-Commerce">E-Commerce</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Project Type */}
        <div className="flex flex-col">
          <label htmlFor="projectType" className="font-sans text-xs tracking-widest uppercase text-deep-ocean mb-2">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="bg-warm-sand border border-driftwood px-6 py-3 font-sans text-sm text-deep-ocean focus:outline-none focus:border-coastal-teal transition-colors"
          >
            <option value="">Select project type</option>
            <option value="New Build">New Build</option>
            <option value="Redesign">Redesign</option>
            <option value="Platform Development">Platform Development</option>
            <option value="System Integration">System Integration</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Budget Range */}
        <div className="flex flex-col">
          <label htmlFor="budgetRange" className="font-sans text-xs tracking-widest uppercase text-deep-ocean mb-2">
            Budget Range
          </label>
          <select
            id="budgetRange"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            className="bg-warm-sand border border-driftwood px-6 py-3 font-sans text-sm text-deep-ocean focus:outline-none focus:border-coastal-teal transition-colors"
          >
            <option value="">Select budget range</option>
            <option value="$10k–$25k">$10k–$25k</option>
            <option value="$25k–$50k">$25k–$50k</option>
            <option value="$50k–$100k">$50k–$100k</option>
            <option value="$100k+">$100k+</option>
          </select>
        </div>

        {/* Timeline */}
        <div className="flex flex-col">
          <label htmlFor="timeline" className="font-sans text-xs tracking-widest uppercase text-deep-ocean mb-2">
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="bg-warm-sand border border-driftwood px-6 py-3 font-sans text-sm text-deep-ocean focus:outline-none focus:border-coastal-teal transition-colors"
          >
            <option value="">Select timeline</option>
            <option value="ASAP">ASAP</option>
            <option value="1–3 Months">1–3 Months</option>
            <option value="3–6 Months">3–6 Months</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>
      </div>

      {/* Full Width Textareas */}
      <div className="space-y-8">
        {/* What's not working */}
        <div className="flex flex-col">
          <label htmlFor="whatIsNotWorking" className="font-sans text-xs tracking-widest uppercase text-deep-ocean mb-2">
            What's not working with your current setup?
          </label>
          <textarea
            id="whatIsNotWorking"
            name="whatIsNotWorking"
            value={formData.whatIsNotWorking}
            onChange={handleChange}
            rows={4}
            className="bg-warm-sand border border-driftwood px-6 py-3 font-sans text-sm text-deep-ocean focus:outline-none focus:border-coastal-teal transition-colors resize-none"
            placeholder="Tell us about your current challenges..."
          />
        </div>

        {/* What is success */}
        <div className="flex flex-col">
          <label htmlFor="whatIsSuccess" className="font-sans text-xs tracking-widest uppercase text-deep-ocean mb-2">
            What does success look like for this project?
          </label>
          <textarea
            id="whatIsSuccess"
            name="whatIsSuccess"
            value={formData.whatIsSuccess}
            onChange={handleChange}
            rows={4}
            className="bg-warm-sand border border-driftwood px-6 py-3 font-sans text-sm text-deep-ocean focus:outline-none focus:border-coastal-teal transition-colors resize-none"
            placeholder="Describe your ideal outcome..."
          />
        </div>

        {/* How did you hear about us */}
        <div className="flex flex-col">
          <label htmlFor="howYouHeard" className="font-sans text-xs tracking-widest uppercase text-deep-ocean mb-2">
            How did you hear about us?
          </label>
          <input
            type="text"
            id="howYouHeard"
            name="howYouHeard"
            value={formData.howYouHeard}
            onChange={handleChange}
            className="bg-warm-sand border border-driftwood px-6 py-3 font-sans text-sm text-deep-ocean focus:outline-none focus:border-coastal-teal transition-colors"
            placeholder="Google, referral, social media, etc."
          />
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isLoading}
      >
        {isLoading ? 'Sending...' : 'Send Inquiry'}
      </Button>
    </form>
  )
}
