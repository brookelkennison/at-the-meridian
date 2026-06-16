import { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'client', 'status'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Project Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'client',
      type: 'text',
      label: 'Client Name',
    },
    {
      name: 'industry',
      type: 'text',
      label: 'Industry',
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Project Summary',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Featured Image',
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Project Details',
    },
    {
      name: 'services',
      type: 'array',
      label: 'Services',
      fields: [
        {
          name: 'service',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'technologies',
      type: 'array',
      label: 'Technologies',
      fields: [
        {
          name: 'technology',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'liveUrl',
      type: 'text',
      label: 'Live Project URL',
    },
    {
      name: 'publishedDate',
      type: 'date',
      label: 'Published Date',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
      defaultValue: 'draft',
      required: true,
    },
  ],
}
