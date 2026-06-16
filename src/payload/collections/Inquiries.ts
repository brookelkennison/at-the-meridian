import { CollectionConfig } from 'payload'

export const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  access: {
    read: ({ req }) => !!req.user,
    create: () => true,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'company', 'projectType', 'status', 'createdAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email Address',
    },
    {
      name: 'company',
      type: 'text',
      label: 'Company Name',
    },
    {
      name: 'website',
      type: 'text',
      label: 'Website URL',
    },
    {
      name: 'industry',
      type: 'select',
      label: 'Industry',
      options: [
        {
          label: 'Hospitality',
          value: 'hospitality',
        },
        {
          label: 'Rentals',
          value: 'rentals',
        },
        {
          label: 'Tourism',
          value: 'tourism',
        },
        {
          label: 'Service Business',
          value: 'service-business',
        },
        {
          label: 'E-commerce',
          value: 'ecommerce',
        },
        {
          label: 'Other',
          value: 'other',
        },
      ],
    },
    {
      name: 'projectType',
      type: 'select',
      label: 'Project Type',
      options: [
        {
          label: 'New Build',
          value: 'new-build',
        },
        {
          label: 'Redesign',
          value: 'redesign',
        },
        {
          label: 'Platform',
          value: 'platform',
        },
        {
          label: 'Integration',
          value: 'integration',
        },
        {
          label: 'Other',
          value: 'other',
        },
      ],
    },
    {
      name: 'budget',
      type: 'select',
      label: 'Budget Range',
      options: [
        {
          label: '$10k - $25k',
          value: '10k-25k',
        },
        {
          label: '$25k - $50k',
          value: '25k-50k',
        },
        {
          label: '$50k - $100k',
          value: '50k-100k',
        },
        {
          label: '$100k+',
          value: '100k-plus',
        },
      ],
    },
    {
      name: 'timeline',
      type: 'select',
      label: 'Project Timeline',
      options: [
        {
          label: 'ASAP',
          value: 'asap',
        },
        {
          label: '1-3 Months',
          value: '1-3-months',
        },
        {
          label: '3-6 Months',
          value: '3-6-months',
        },
        {
          label: 'Flexible',
          value: 'flexible',
        },
      ],
    },
    {
      name: 'currentPainPoints',
      type: 'textarea',
      label: "What's not working with your current setup?",
    },
    {
      name: 'projectVision',
      type: 'textarea',
      label: 'What does success look like?',
    },
    {
      name: 'howDidYouHear',
      type: 'text',
      label: 'How did you hear about us?',
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      options: [
        {
          label: 'New',
          value: 'new',
        },
        {
          label: 'Contacted',
          value: 'contacted',
        },
        {
          label: 'Qualified',
          value: 'qualified',
        },
        {
          label: 'Closed',
          value: 'closed',
        },
      ],
      defaultValue: 'new',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Internal Notes',
      admin: {
        description: 'Admin-only field for internal team notes',
      },
    },
  ],
}
