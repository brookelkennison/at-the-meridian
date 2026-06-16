import { CollectionConfig } from 'payload'

/**
 * Estimates — free-quote leads from the homepage "Get your free estimate" form.
 * The `email` field doubles as the future-marketing list. Each lead gets a
 * unique `token` that powers their personalized walkthrough page at
 * /estimate/[token].
 */
export const Estimates: CollectionConfig = {
  slug: 'estimates',
  access: {
    read: ({ req }) => !!req.user,
    create: () => true,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'recommendedTier', 'status', 'createdAt'],
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
      name: 'currentRevenue',
      type: 'select',
      label: 'Current Annual Revenue',
      options: [
        { label: 'Under $500K', value: 'under-500k' },
        { label: '$500K – $1M', value: '500k-1m' },
        { label: '$1M – $2M', value: '1m-2m' },
        { label: '$2M – $5M', value: '2m-5m' },
        { label: '$5M+', value: '5m-plus' },
      ],
    },
    {
      name: 'targetRevenue',
      type: 'select',
      label: 'Target Annual Revenue',
      options: [
        { label: 'Up to $1M', value: 'up-1m' },
        { label: '$1M – $2M', value: '1m-2m' },
        { label: '$2M – $5M', value: '2m-5m' },
        { label: '$5M – $10M', value: '5m-10m' },
        { label: '$10M+', value: '10m-plus' },
      ],
    },
    {
      name: 'monthlyInvestment',
      type: 'select',
      label: 'Monthly Investment Range',
      options: [
        { label: 'Under $3,000 / mo', value: 'under-3000' },
        { label: '$3,000 – $5,000 / mo', value: '3000-5000' },
        { label: '$5,000 – $7,500 / mo', value: '5000-7500' },
        { label: '$7,500+ / mo', value: '7500-plus' },
      ],
    },
    {
      name: 'recommendedTier',
      type: 'select',
      label: 'Recommended Tier',
      options: [
        { label: 'Tier 1 — Maintain & Optimize', value: 'maintain' },
        { label: 'Tier 2 — Grow', value: 'grow' },
        { label: 'Tier 3 — Scale', value: 'scale' },
      ],
      admin: { position: 'sidebar', readOnly: true },
    },
    {
      name: 'token',
      type: 'text',
      label: 'Estimate Link Token',
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        readOnly: true,
        description: 'Powers the personalized /estimate/[token] page.',
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Viewed Estimate', value: 'viewed' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Closed', value: 'closed' },
      ],
      defaultValue: 'new',
      required: true,
      admin: { position: 'sidebar' },
    },
  ],
}

export default Estimates
