import type { CollectionConfig } from 'payload'

const Clients: CollectionConfig = {
  slug: 'clients',
  admin: {
    useAsTitle: 'companyName',
    defaultColumns: ['companyName', 'contactName', 'status', 'createdAt'],
    group: 'Client Portal',
  },
  fields: [
    {
      name: 'companyName',
      type: 'text',
      required: true,
      label: 'Company Name',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier. Used in the client dashboard URL: /client/[slug]',
        position: 'sidebar',
      },
    },
    {
      name: 'contactName',
      type: 'text',
      required: true,
      label: 'Primary Contact Name',
    },
    {
      name: 'contactEmail',
      type: 'email',
      required: true,
      label: 'Primary Contact Email',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Client Logo',
    },
    {
      name: 'dashboardPassword',
      type: 'text',
      required: true,
      admin: {
        description: 'Password the client uses to access their dashboard',
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'active',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Completed', value: 'completed' },
        { label: 'Paused', value: 'paused' },
        { label: 'Archived', value: 'archived' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    // Client Branding — used on their dashboard
    {
      name: 'branding',
      type: 'group',
      label: 'Client Branding',
      admin: {
        description: 'Colors and assets used on the client-facing dashboard. If left blank, defaults to neutral styling.',
      },
      fields: [
        {
          name: 'primaryColor',
          type: 'text',
          label: 'Primary Color (hex)',
          admin: {
            description: 'e.g. #1B4D6E — used for buttons, progress bars, accents',
          },
        },
        {
          name: 'secondaryColor',
          type: 'text',
          label: 'Secondary Color (hex)',
          admin: {
            description: 'e.g. #E8F1F5 — used for backgrounds, badges, tints',
          },
        },
        {
          name: 'accentColor',
          type: 'text',
          label: 'Accent Color (hex)',
          admin: {
            description: 'e.g. #D4A574 — used for highlights and active states',
          },
        },
        {
          name: 'darkColor',
          type: 'text',
          label: 'Dark / Text Color (hex)',
          admin: {
            description: 'e.g. #1A1A2E — used for headings and primary text',
          },
        },
        {
          name: 'logoUrl',
          type: 'upload',
          relationTo: 'media',
          label: 'Dashboard Logo',
          admin: {
            description: 'Logo shown on the client dashboard header and login screen',
          },
        },
        {
          name: 'faviconUrl',
          type: 'upload',
          relationTo: 'media',
          label: 'Favicon',
        },
      ],
    },
    {
      name: 'industry',
      type: 'text',
    },
    {
      name: 'website',
      type: 'text',
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        description: 'Internal notes about this client',
      },
    },
    // Integration overrides per client
    {
      name: 'integrations',
      type: 'group',
      label: 'Client Integrations',
      admin: {
        description: 'Override global API keys for client-specific integrations',
      },
      fields: [
        {
          name: 'notionDatabaseId',
          type: 'text',
          label: 'Notion Tasks Database ID',
          admin: {
            description: 'Notion database ID for this client project tasks',
          },
        },
        {
          name: 'googleCalendarId',
          type: 'text',
          label: 'Google Calendar ID',
          admin: {
            description: 'Google Calendar ID for client meetings',
          },
        },
        {
          name: 'siteUrl',
          type: 'text',
          label: 'Live Site URL',
          admin: {
            description: 'Used for Lighthouse and SEO score checks',
          },
        },
      ],
    },
  ],
}

export default Clients
