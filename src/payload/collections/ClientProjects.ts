import type { CollectionConfig } from 'payload'

const ClientProjects: CollectionConfig = {
  slug: 'client-projects',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'client', 'status', 'currentPhase'],
    group: 'Client Portal',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Project Name',
    },
    {
      name: 'client',
      type: 'relationship',
      relationTo: 'clients',
      required: true,
      label: 'Client',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Project Description',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'active',
      options: [
        { label: 'Planning', value: 'planning' },
        { label: 'Active', value: 'active' },
        { label: 'On Hold', value: 'on-hold' },
        { label: 'Completed', value: 'completed' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'currentPhase',
      type: 'select',
      defaultValue: 'discovery',
      options: [
        { label: 'Discovery', value: 'discovery' },
        { label: 'Architecture', value: 'architecture' },
        { label: 'Design', value: 'design' },
        { label: 'Build', value: 'build' },
        { label: 'Review', value: 'review' },
        { label: 'Launch', value: 'launch' },
        { label: 'Support', value: 'support' },
      ],
    },
    {
      name: 'currentWeek',
      type: 'number',
      label: 'Current Week',
      min: 1,
      max: 20,
      defaultValue: 1,
    },
    {
      name: 'totalWeeks',
      type: 'number',
      label: 'Total Weeks',
      min: 1,
      max: 52,
      defaultValue: 7,
    },
    {
      name: 'progressPercent',
      type: 'number',
      label: 'Progress (%)',
      min: 0,
      max: 100,
      defaultValue: 0,
    },
    {
      name: 'startDate',
      type: 'date',
      label: 'Start Date',
    },
    {
      name: 'targetLaunchDate',
      type: 'date',
      label: 'Target Launch Date',
    },
    {
      name: 'budget',
      type: 'text',
      label: 'Budget',
    },
    {
      name: 'techStack',
      type: 'array',
      label: 'Tech Stack',
      fields: [
        {
          name: 'technology',
          type: 'text',
        },
      ],
    },
    // Testing & Preview Links
    {
      name: 'testingLinks',
      type: 'array',
      label: 'Testing & Preview Links',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
    // SEO Scores (manually updated or via API)
    {
      name: 'seoScores',
      type: 'group',
      label: 'SEO Scores',
      fields: [
        { name: 'performance', type: 'number', min: 0, max: 100 },
        { name: 'accessibility', type: 'number', min: 0, max: 100 },
        { name: 'bestPractices', type: 'number', min: 0, max: 100 },
        { name: 'seo', type: 'number', min: 0, max: 100 },
        { name: 'lastChecked', type: 'date' },
      ],
    },
    // Milestones
    {
      name: 'milestones',
      type: 'array',
      label: 'Project Milestones',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'dueDate',
          type: 'date',
        },
        {
          name: 'completed',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
  ],
}

export default ClientProjects
