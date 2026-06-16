'use client'

import { useState } from 'react'

interface IntegrationConfig {
  connected: boolean
  apiKey: string
  apiKeyVisible: boolean
  secondaryKey?: string
  secondaryKeyVisible?: boolean
}

const integrations = [
  {
    id: 'notion',
    name: 'Notion',
    description: 'Connect to Notion to pull project tasks and progress from your databases.',
    fields: ['API Token', 'Default Database ID'],
    mockConnected: true,
  },
  {
    id: 'google-calendar',
    name: 'Google Calendar',
    description: 'Show upcoming client meetings on their dashboards.',
    fields: ['API Key', 'Calendar ID'],
    mockConnected: false,
  },
  {
    id: 'pagespeed',
    name: 'Google PageSpeed Insights',
    description: 'Pull live Lighthouse scores for client sites.',
    fields: ['API Key'],
    note: 'Free API — get yours at Google Cloud Console',
    mockConnected: true,
  },
  {
    id: 'search-console',
    name: 'Google Search Console',
    description: 'Track search performance and indexing status.',
    fields: ['API Key', 'Property URL'],
    mockConnected: false,
  },
  {
    id: 'plausible',
    name: 'Plausible Analytics',
    description: 'Privacy-friendly analytics for client sites.',
    fields: ['API Key', 'Site ID'],
    mockConnected: false,
  },
  {
    id: 'seo-tools',
    name: 'Ahrefs / SEMrush',
    description: 'Pull domain authority, backlinks, and keyword data.',
    fields: ['API Key'],
    mockConnected: false,
  },
]

export default function SettingsPage() {
  const [configs, setConfigs] = useState<Record<string, IntegrationConfig>>(() => {
    const initial: Record<string, IntegrationConfig> = {}
    integrations.forEach((integration) => {
      initial[integration.id] = {
        connected: integration.mockConnected,
        apiKey: integration.mockConnected ? '••••••••••••••••' : '',
        apiKeyVisible: false,
        secondaryKey: '',
        secondaryKeyVisible: false,
      }
    })
    return initial
  })

  const [saved, setSaved] = useState<string | null>(null)

  const handleToggleConnect = (id: string) => {
    setConfigs((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        connected: !prev[id].connected,
      },
    }))
  }

  const handleApiKeyChange = (id: string, value: string) => {
    setConfigs((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        apiKey: value,
      },
    }))
  }

  const handleSecondaryKeyChange = (id: string, value: string) => {
    setConfigs((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        secondaryKey: value,
      },
    }))
  }

  const toggleApiKeyVisibility = (id: string) => {
    setConfigs((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        apiKeyVisible: !prev[id].apiKeyVisible,
      },
    }))
  }

  const toggleSecondaryKeyVisibility = (id: string) => {
    setConfigs((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        secondaryKeyVisible: !prev[id].secondaryKeyVisible,
      },
    }))
  }

  const handleSave = (id: string) => {
    setSaved(id)
    setTimeout(() => setSaved(null), 2000)
  }

  const handleClearAllKeys = () => {
    if (confirm('Are you sure you want to clear all API keys? This cannot be undone.')) {
      const clearedConfigs: Record<string, IntegrationConfig> = {}
      Object.keys(configs).forEach((key) => {
        clearedConfigs[key] = {
          ...configs[key],
          connected: false,
          apiKey: '',
          secondaryKey: '',
          apiKeyVisible: false,
          secondaryKeyVisible: false,
        }
      })
      setConfigs(clearedConfigs)
      setSaved('all')
      setTimeout(() => setSaved(null), 2000)
    }
  }

  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-4xl font-light text-deep-ocean mb-2">Settings</h1>
        <p className="text-sm text-deep-ocean/50">API Keys & Integrations</p>
      </div>

      {/* Integration Cards */}
      <div className="space-y-4 mb-8">
        {integrations.map((integration) => {
          const config = configs[integration.id]
          const showSecondaryField = integration.fields.length > 1

          return (
            <div key={integration.id} className="bg-white rounded-xl p-6 shadow-sm">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="font-sans font-medium text-deep-ocean">{integration.name}</h3>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      config.connected ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  />
                </div>

                {/* Toggle Switch */}
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={config.connected}
                    onChange={() => handleToggleConnect(integration.id)}
                    className="sr-only"
                  />
                  <div
                    className={`relative w-10 h-6 rounded-full transition-colors ${
                      config.connected ? 'bg-coastal-teal' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        config.connected ? 'translate-x-4' : ''
                      }`}
                    />
                  </div>
                </label>
              </div>

              {/* Description */}
              <p className="text-xs text-deep-ocean/40 mb-4">{integration.description}</p>

              {/* Fields */}
              {config.connected && (
                <div className="space-y-4 mb-4">
                  {/* Primary Key Field */}
                  <div className="relative">
                    <label className="block text-xs font-sans font-medium text-deep-ocean/60 mb-2">
                      {integration.fields[0]}
                    </label>
                    <div className="flex gap-2">
                      <input
                        type={config.apiKeyVisible ? 'text' : 'password'}
                        value={config.apiKey}
                        onChange={(e) => handleApiKeyChange(integration.id, e.target.value)}
                        className="flex-1 px-3 py-2 border border-deep-ocean/10 rounded-lg text-sm font-sans focus:outline-none focus:ring-2 focus:ring-coastal-teal/50"
                        placeholder="Enter your API key"
                      />
                      <button
                        onClick={() => toggleApiKeyVisibility(integration.id)}
                        className="px-3 py-2 text-xs text-deep-ocean/40 hover:text-deep-ocean/60 transition-colors"
                      >
                        {config.apiKeyVisible ? 'Hide' : 'Show'}
                      </button>
                    </div>
                  </div>

                  {/* Secondary Key Field (if applicable) */}
                  {showSecondaryField && (
                    <div className="relative">
                      <label className="block text-xs font-sans font-medium text-deep-ocean/60 mb-2">
                        {integration.fields[1]}
                      </label>
                      <div className="flex gap-2">
                        <input
                          type={config.secondaryKeyVisible ? 'text' : 'password'}
                          value={config.secondaryKey || ''}
                          onChange={(e) => handleSecondaryKeyChange(integration.id, e.target.value)}
                          className="flex-1 px-3 py-2 border border-deep-ocean/10 rounded-lg text-sm font-sans focus:outline-none focus:ring-2 focus:ring-coastal-teal/50"
                          placeholder={`Enter your ${integration.fields[1].toLowerCase()}`}
                        />
                        <button
                          onClick={() => toggleSecondaryKeyVisibility(integration.id)}
                          className="px-3 py-2 text-xs text-deep-ocean/40 hover:text-deep-ocean/60 transition-colors"
                        >
                          {config.secondaryKeyVisible ? 'Hide' : 'Show'}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Note */}
                  {integration.note && (
                    <p className="text-xs text-deep-ocean/40 mt-2">{integration.note}</p>
                  )}
                </div>
              )}

              {/* Status & Save */}
              <div className="flex justify-between items-center pt-4 border-t border-driftwood/20">
                <span className="text-xs text-deep-ocean/40">
                  {config.connected ? (
                    <span className="text-green-600">Connected</span>
                  ) : (
                    <span className="text-deep-ocean/30">Not configured</span>
                  )}
                </span>

                <div className="flex items-center gap-2">
                  {saved === integration.id && (
                    <span className="text-xs text-green-600 font-sans">Saved!</span>
                  )}
                  {config.connected && (
                    <button
                      onClick={() => handleSave(integration.id)}
                      className="text-xs bg-coastal-teal text-white px-4 py-2 rounded-lg hover:bg-coastal-teal/90 transition-colors"
                    >
                      Save
                    </button>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50 rounded-xl p-6 border border-red-200">
        <h3 className="font-sans font-medium text-red-900 mb-2">Danger Zone</h3>
        <p className="text-xs text-red-700 mb-4">
          This action will permanently delete all stored API keys.
        </p>
        <button
          onClick={handleClearAllKeys}
          className="text-xs bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Clear All API Keys
        </button>
      </div>
    </div>
  )
}
