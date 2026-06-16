import type { CollectionConfig } from 'payload'

const ApiKeys: CollectionConfig = {
  slug: 'api-keys',
  admin: {
    useAsTitle: 'service',
    defaultColumns: ['service', 'isActive', 'updatedAt'],
    group: 'Settings',
  },
  fields: [
    {
      name: 'service',
      type: 'select',
      required: true,
      options: [
        { label: 'Notion', value: 'notion' },
        { label: 'Google Calendar', value: 'google-calendar' },
        { label: 'Google PageSpeed Insights', value: 'pagespeed' },
        { label: 'Google Search Console', value: 'search-console' },
        { label: 'Ahrefs', value: 'ahrefs' },
        { label: 'SEMrush', value: 'semrush' },
        { label: 'Plausible Analytics', value: 'plausible' },
        { label: 'Google Analytics', value: 'google-analytics' },
      ],
    },
    {
      name: 'apiKey',
      type: 'text',
      required: true,
      label: 'API Key / Token',
      admin: {
        description: 'The API key or access token for this service',
      },
    },
    {
      name: 'secondaryKey',
      type: 'text',
      label: 'Secondary Key / Secret',
      admin: {
        description: 'Client secret, secondary token, or additional credential if needed',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      label: 'Active',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        description: 'Notes about this API key (e.g., which account, expiry date)',
      },
    },
  ],
}

export default ApiKeys
