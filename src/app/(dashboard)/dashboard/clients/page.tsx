'use client'

import Link from 'next/link'
import { useState } from 'react'

interface ClientBranding {
  primaryColor: string
  secondaryColor: string
  accentColor: string
  darkColor: string
}

interface Client {
  id: string
  name: string
  status: 'Active' | 'Completed' | 'Paused'
  contactName: string
  email: string
  industry: string
  activeProjects: number
  slug: string
  password: string
  website: string
  notes: string
  branding: ClientBranding
}

const defaultBranding: ClientBranding = {
  primaryColor: '#1B4D6E',
  secondaryColor: '#E8F1F5',
  accentColor: '#D4A574',
  darkColor: '#1A1A2E',
}

const blankClient: Omit<Client, 'id'> = {
  name: '',
  status: 'Active',
  contactName: '',
  email: '',
  industry: '',
  activeProjects: 0,
  slug: '',
  password: '',
  website: '',
  notes: '',
  branding: { ...defaultBranding },
}

const mockClients: Client[] = [
  {
    id: '1',
    name: 'Oceanview Properties',
    status: 'Active',
    contactName: 'Sarah Mitchell',
    email: 'sarah@oceanview.com',
    industry: 'Hospitality',
    activeProjects: 1,
    slug: 'oceanview',
    password: 'secure123',
    website: 'https://oceanview.com',
    notes: '',
    branding: {
      primaryColor: '#1B4D6E',
      secondaryColor: '#E8F1F5',
      accentColor: '#D4A574',
      darkColor: '#1A1A2E',
    },
  },
  {
    id: '2',
    name: 'Summit Advisory',
    status: 'Active',
    contactName: 'James Chen',
    email: 'james@summitadv.com',
    industry: 'Financial Services',
    activeProjects: 1,
    slug: 'summit',
    password: 'secure456',
    website: 'https://summitadv.com',
    notes: '',
    branding: {
      primaryColor: '#2D5016',
      secondaryColor: '#F0F5EB',
      accentColor: '#B8860B',
      darkColor: '#1C1C1C',
    },
  },
  {
    id: '3',
    name: 'Tide & Table',
    status: 'Active',
    contactName: 'Maria Santos',
    email: 'maria@tideandtable.com',
    industry: 'Hospitality',
    activeProjects: 1,
    slug: 'tide-table',
    password: 'secure789',
    website: 'https://tideandtable.com',
    notes: '',
    branding: {
      primaryColor: '#8B4513',
      secondaryColor: '#FFF8F0',
      accentColor: '#DAA520',
      darkColor: '#2C1810',
    },
  },
  {
    id: '4',
    name: 'Meridian Wellness',
    status: 'Completed',
    contactName: 'Tom Bradley',
    email: 'tom@mwellness.com',
    industry: 'Health & Wellness',
    activeProjects: 0,
    slug: 'meridian-wellness',
    password: 'secure000',
    website: 'https://mwellness.com',
    notes: '',
    branding: {
      primaryColor: '#4A7C59',
      secondaryColor: '#F0F7F2',
      accentColor: '#C49B6A',
      darkColor: '#1A2E1A',
    },
  },
]

function generateSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function generatePassword() {
  const chars = 'abcdefghjkmnpqrstuvwxyz23456789'
  let pw = ''
  for (let i = 0; i < 10; i++) {
    pw += chars[Math.floor(Math.random() * chars.length)]
  }
  return pw
}

export default function ClientsPage() {
  const [clients, setClients] = useState(mockClients)
  const [revealedPassword, setRevealedPassword] = useState<string | null>(null)
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null)

  // Panel state
  const [panelOpen, setPanelOpen] = useState(false)
  const [editingClient, setEditingClient] = useState<Client | null>(null)
  const [form, setForm] = useState<Omit<Client, 'id'>>(blankClient)
  const [activeTab, setActiveTab] = useState<'details' | 'branding'>('details')
  const [saveSuccess, setSaveSuccess] = useState(false)

  // Delete confirmation
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800'
      case 'Completed':
        return 'bg-blue-100 text-blue-800'
      case 'Paused':
        return 'bg-amber-100 text-amber-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const handleCopyDashboardLink = (slug: string) => {
    const link = `${window.location.origin}/client/${slug}`
    navigator.clipboard.writeText(link)
    setCopiedSlug(slug)
    setTimeout(() => setCopiedSlug(null), 2000)
  }

  const togglePasswordReveal = (clientId: string) => {
    setRevealedPassword(revealedPassword === clientId ? null : clientId)
  }

  const openNewClient = () => {
    setEditingClient(null)
    setForm({ ...blankClient, branding: { ...defaultBranding }, password: generatePassword() })
    setActiveTab('details')
    setSaveSuccess(false)
    setPanelOpen(true)
  }

  const openEditClient = (client: Client) => {
    setEditingClient(client)
    const { id, ...rest } = client
    setForm({ ...rest, branding: { ...client.branding } })
    setActiveTab('details')
    setSaveSuccess(false)
    setPanelOpen(true)
  }

  const closePanel = () => {
    setPanelOpen(false)
    setEditingClient(null)
    setSaveSuccess(false)
  }

  const updateForm = (field: string, value: string | number) => {
    setForm((prev) => {
      const updated = { ...prev, [field]: value }
      // auto-generate slug from name for new clients
      if (field === 'name' && !editingClient) {
        updated.slug = generateSlug(value as string)
      }
      return updated
    })
  }

  const updateBranding = (field: keyof ClientBranding, value: string) => {
    setForm((prev) => ({
      ...prev,
      branding: { ...prev.branding, [field]: value },
    }))
  }

  const handleSave = () => {
    if (!form.name.trim() || !form.contactName.trim() || !form.email.trim()) {
      return
    }

    if (editingClient) {
      // Update existing
      setClients((prev) =>
        prev.map((c) => (c.id === editingClient.id ? { ...form, id: editingClient.id } : c))
      )
    } else {
      // Create new
      const newClient: Client = {
        ...form,
        id: Date.now().toString(),
      }
      setClients((prev) => [newClient, ...prev])
    }

    setSaveSuccess(true)
    setTimeout(() => {
      closePanel()
    }, 800)
  }

  const handleDelete = (clientId: string) => {
    setClients((prev) => prev.filter((c) => c.id !== clientId))
    setDeleteConfirmId(null)
  }

  const isFormValid = form.name.trim() && form.contactName.trim() && form.email.trim() && form.slug.trim()

  return (
    <div className="max-w-5xl">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="font-display text-4xl font-light text-deep-ocean mb-2">Clients</h1>
          <p className="text-sm text-deep-ocean/50">
            Manage your client dashboards and settings
          </p>
        </div>
        <button
          onClick={openNewClient}
          className="bg-coastal-teal text-white rounded-lg px-4 py-2 text-sm font-sans hover:bg-coastal-teal/90 transition-colors"
        >
          + New Client
        </button>
      </div>

      {/* Client Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {clients.map((client) => (
          <div key={client.id} className="bg-white rounded-xl p-6 shadow-sm">
            {/* Top Section */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  {/* Brand swatch */}
                  <div
                    className="w-8 h-8 rounded-lg flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${client.branding.primaryColor}, ${client.branding.accentColor})`,
                    }}
                  />
                  <div>
                    <h3 className="font-sans font-medium text-lg text-deep-ocean">{client.name}</h3>
                    <span
                      className={`inline-block mt-1 px-2.5 py-0.5 text-xs font-sans font-medium rounded ${getStatusColor(
                        client.status
                      )}`}
                    >
                      {client.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-sm text-deep-ocean/50 mt-3">
              <p>{client.contactName}</p>
              <p className="text-xs mt-1">{client.email}</p>
            </div>

            {/* Industry */}
            <p className="text-xs text-deep-ocean/30 mt-2">{client.industry}</p>

            {/* Projects Count */}
            <p className="text-xs text-coastal-teal mt-3">
              {client.activeProjects === 1
                ? `${client.activeProjects} active project`
                : `${client.activeProjects} active projects`}
            </p>

            {/* Dashboard Link */}
            <Link
              href={`/client/${client.slug}`}
              className="text-sm text-coastal-teal hover:underline mt-4 block"
            >
              View Client Dashboard →
            </Link>

            {/* Bottom Section */}
            <div className="flex gap-3 mt-4 pt-4 border-t border-driftwood/20 items-center">
              <button
                onClick={() => openEditClient(client)}
                className="text-xs text-deep-ocean/40 hover:text-deep-ocean/60 transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() => handleCopyDashboardLink(client.slug)}
                className="text-xs text-deep-ocean/40 hover:text-deep-ocean/60 transition-colors"
              >
                {copiedSlug === client.slug ? 'Copied!' : 'Copy Dashboard Link'}
              </button>
              <span className="text-xs text-deep-ocean/20">•</span>
              <button
                onClick={() => togglePasswordReveal(client.id)}
                className="text-xs text-deep-ocean/40 hover:text-deep-ocean/60 transition-colors ml-auto"
              >
                <span className="font-mono">
                  Password: {revealedPassword === client.id ? client.password : '••••••'}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ─── Slide-Over Panel ─────────────────────────────── */}
      {panelOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 z-40 transition-opacity"
            onClick={closePanel}
          />

          {/* Panel */}
          <div className="fixed right-0 top-0 h-full w-full max-w-lg bg-white z-50 shadow-2xl flex flex-col animate-slide-in">
            {/* Panel Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-driftwood/20">
              <h2 className="font-display text-xl font-light text-deep-ocean">
                {editingClient ? 'Edit Client' : 'New Client'}
              </h2>
              <button
                onClick={closePanel}
                className="text-deep-ocean/40 hover:text-deep-ocean/70 transition-colors text-xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-driftwood/20 px-6">
              <button
                onClick={() => setActiveTab('details')}
                className={`py-3 px-4 text-sm font-sans transition-colors border-b-2 -mb-px ${
                  activeTab === 'details'
                    ? 'border-coastal-teal text-coastal-teal'
                    : 'border-transparent text-deep-ocean/40 hover:text-deep-ocean/60'
                }`}
              >
                Details
              </button>
              <button
                onClick={() => setActiveTab('branding')}
                className={`py-3 px-4 text-sm font-sans transition-colors border-b-2 -mb-px ${
                  activeTab === 'branding'
                    ? 'border-coastal-teal text-coastal-teal'
                    : 'border-transparent text-deep-ocean/40 hover:text-deep-ocean/60'
                }`}
              >
                Branding
              </button>
            </div>

            {/* Panel Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {activeTab === 'details' && (
                <div className="space-y-5">
                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-sans text-deep-ocean/60 mb-1.5">
                      Company Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => updateForm('name', e.target.value)}
                      placeholder="Acme Co."
                      className="w-full rounded-lg border border-driftwood/30 px-3 py-2.5 text-sm text-deep-ocean focus:border-coastal-teal focus:ring-1 focus:ring-coastal-teal outline-none transition"
                    />
                  </div>

                  {/* Slug */}
                  <div>
                    <label className="block text-xs font-sans text-deep-ocean/60 mb-1.5">
                      Dashboard Slug <span className="text-red-400">*</span>
                    </label>
                    <div className="flex items-center gap-0">
                      <span className="bg-warm-sand/50 border border-r-0 border-driftwood/30 px-3 py-2.5 text-xs text-deep-ocean/40 rounded-l-lg">
                        /client/
                      </span>
                      <input
                        type="text"
                        value={form.slug}
                        onChange={(e) => updateForm('slug', e.target.value)}
                        placeholder="acme-co"
                        className="flex-1 rounded-r-lg border border-driftwood/30 px-3 py-2.5 text-sm text-deep-ocean font-mono focus:border-coastal-teal focus:ring-1 focus:ring-coastal-teal outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Two-column: Contact Name + Email */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans text-deep-ocean/60 mb-1.5">
                        Contact Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.contactName}
                        onChange={(e) => updateForm('contactName', e.target.value)}
                        placeholder="Jane Doe"
                        className="w-full rounded-lg border border-driftwood/30 px-3 py-2.5 text-sm text-deep-ocean focus:border-coastal-teal focus:ring-1 focus:ring-coastal-teal outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-sans text-deep-ocean/60 mb-1.5">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => updateForm('email', e.target.value)}
                        placeholder="jane@acme.co"
                        className="w-full rounded-lg border border-driftwood/30 px-3 py-2.5 text-sm text-deep-ocean focus:border-coastal-teal focus:ring-1 focus:ring-coastal-teal outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Two-column: Industry + Status */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans text-deep-ocean/60 mb-1.5">
                        Industry
                      </label>
                      <input
                        type="text"
                        value={form.industry}
                        onChange={(e) => updateForm('industry', e.target.value)}
                        placeholder="e.g. Hospitality"
                        className="w-full rounded-lg border border-driftwood/30 px-3 py-2.5 text-sm text-deep-ocean focus:border-coastal-teal focus:ring-1 focus:ring-coastal-teal outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-sans text-deep-ocean/60 mb-1.5">
                        Status
                      </label>
                      <select
                        value={form.status}
                        onChange={(e) => updateForm('status', e.target.value)}
                        className="w-full rounded-lg border border-driftwood/30 px-3 py-2.5 text-sm text-deep-ocean focus:border-coastal-teal focus:ring-1 focus:ring-coastal-teal outline-none transition bg-white"
                      >
                        <option value="Active">Active</option>
                        <option value="Paused">Paused</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </div>
                  </div>

                  {/* Website */}
                  <div>
                    <label className="block text-xs font-sans text-deep-ocean/60 mb-1.5">
                      Website
                    </label>
                    <input
                      type="url"
                      value={form.website}
                      onChange={(e) => updateForm('website', e.target.value)}
                      placeholder="https://acme.co"
                      className="w-full rounded-lg border border-driftwood/30 px-3 py-2.5 text-sm text-deep-ocean focus:border-coastal-teal focus:ring-1 focus:ring-coastal-teal outline-none transition"
                    />
                  </div>

                  {/* Dashboard Password */}
                  <div>
                    <label className="block text-xs font-sans text-deep-ocean/60 mb-1.5">
                      Dashboard Password
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={form.password}
                        onChange={(e) => updateForm('password', e.target.value)}
                        placeholder="Auto-generated"
                        className="flex-1 rounded-lg border border-driftwood/30 px-3 py-2.5 text-sm text-deep-ocean font-mono focus:border-coastal-teal focus:ring-1 focus:ring-coastal-teal outline-none transition"
                      />
                      <button
                        type="button"
                        onClick={() => updateForm('password', generatePassword())}
                        className="text-xs text-coastal-teal hover:text-coastal-teal/70 transition-colors px-3 border border-driftwood/30 rounded-lg"
                      >
                        Generate
                      </button>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-sans text-deep-ocean/60 mb-1.5">
                      Notes
                    </label>
                    <textarea
                      value={form.notes}
                      onChange={(e) => updateForm('notes', e.target.value)}
                      placeholder="Internal notes about this client..."
                      rows={3}
                      className="w-full rounded-lg border border-driftwood/30 px-3 py-2.5 text-sm text-deep-ocean focus:border-coastal-teal focus:ring-1 focus:ring-coastal-teal outline-none transition resize-none"
                    />
                  </div>

                  {/* Delete (edit mode only) */}
                  {editingClient && (
                    <div className="pt-4 border-t border-driftwood/20">
                      {deleteConfirmId === editingClient.id ? (
                        <div className="flex items-center gap-3">
                          <p className="text-xs text-red-500 flex-1">
                            Are you sure? This cannot be undone.
                          </p>
                          <button
                            onClick={() => {
                              handleDelete(editingClient.id)
                              closePanel()
                            }}
                            className="text-xs text-white bg-red-500 hover:bg-red-600 rounded-lg px-3 py-1.5 transition-colors"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => setDeleteConfirmId(null)}
                            className="text-xs text-deep-ocean/40 hover:text-deep-ocean/60 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setDeleteConfirmId(editingClient.id)}
                          className="text-xs text-red-400 hover:text-red-500 transition-colors"
                        >
                          Delete this client
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'branding' && (
                <div className="space-y-6">
                  <p className="text-xs text-deep-ocean/50">
                    These colors are used in your client&apos;s dashboard. Pick colors that match their brand identity.
                  </p>

                  {/* Color Pickers */}
                  {[
                    {
                      key: 'primaryColor' as const,
                      label: 'Primary Color',
                      desc: 'Buttons, progress bars, links',
                    },
                    {
                      key: 'secondaryColor' as const,
                      label: 'Secondary Color',
                      desc: 'Page background, light fills',
                    },
                    {
                      key: 'accentColor' as const,
                      label: 'Accent Color',
                      desc: 'Highlights, active indicators',
                    },
                    {
                      key: 'darkColor' as const,
                      label: 'Dark / Text Color',
                      desc: 'Headings and body text',
                    },
                  ].map((color) => (
                    <div key={color.key}>
                      <label className="block text-xs font-sans text-deep-ocean/60 mb-1">
                        {color.label}
                      </label>
                      <p className="text-[11px] text-deep-ocean/30 mb-2">{color.desc}</p>
                      <div className="flex items-center gap-3">
                        <input
                          type="color"
                          value={form.branding[color.key]}
                          onChange={(e) => updateBranding(color.key, e.target.value)}
                          className="w-10 h-10 rounded-lg border border-driftwood/30 cursor-pointer p-0.5"
                        />
                        <input
                          type="text"
                          value={form.branding[color.key]}
                          onChange={(e) => updateBranding(color.key, e.target.value)}
                          className="flex-1 rounded-lg border border-driftwood/30 px-3 py-2.5 text-sm text-deep-ocean font-mono focus:border-coastal-teal focus:ring-1 focus:ring-coastal-teal outline-none transition uppercase"
                          maxLength={7}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Live Preview */}
                  <div className="pt-4 border-t border-driftwood/20">
                    <p className="text-xs font-sans text-deep-ocean/60 mb-3">Preview</p>
                    <div
                      className="rounded-xl p-5 transition-colors"
                      style={{ backgroundColor: form.branding.secondaryColor }}
                    >
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h3
                          className="font-display text-lg font-light mb-2"
                          style={{ color: form.branding.darkColor }}
                        >
                          {form.name || 'Client Name'}
                        </h3>
                        <div className="h-2 rounded-full overflow-hidden mb-3" style={{ backgroundColor: `${form.branding.primaryColor}20` }}>
                          <div
                            className="h-full rounded-full w-3/5"
                            style={{ backgroundColor: form.branding.primaryColor }}
                          />
                        </div>
                        <div className="flex gap-2">
                          <span
                            className="text-xs px-2 py-1 rounded-full"
                            style={{
                              backgroundColor: `${form.branding.primaryColor}15`,
                              color: form.branding.primaryColor,
                            }}
                          >
                            Build Phase
                          </span>
                          <span
                            className="text-xs px-2 py-1 rounded-full"
                            style={{
                              backgroundColor: `${form.branding.accentColor}20`,
                              color: form.branding.accentColor,
                            }}
                          >
                            In Progress
                          </span>
                        </div>
                        <button
                          className="mt-3 text-white text-xs rounded-lg px-4 py-2 w-full transition-opacity"
                          style={{ backgroundColor: form.branding.primaryColor }}
                        >
                          Unlock Dashboard
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Panel Footer */}
            <div className="px-6 py-4 border-t border-driftwood/20 flex items-center justify-between">
              <button
                onClick={closePanel}
                className="text-sm text-deep-ocean/40 hover:text-deep-ocean/60 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={!isFormValid}
                className={`text-sm text-white rounded-lg px-6 py-2.5 font-sans transition-colors ${
                  saveSuccess
                    ? 'bg-green-500'
                    : isFormValid
                      ? 'bg-coastal-teal hover:bg-coastal-teal/90'
                      : 'bg-coastal-teal/30 cursor-not-allowed'
                }`}
              >
                {saveSuccess ? 'Saved!' : editingClient ? 'Save Changes' : 'Create Client'}
              </button>
            </div>
          </div>
        </>
      )}

      {/* Slide-in animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.25s ease-out;
        }
      `}</style>
    </div>
  )
}
