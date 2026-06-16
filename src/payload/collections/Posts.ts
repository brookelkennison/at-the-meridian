import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Post Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug',
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Excerpt',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Featured Image',
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
    },
    {
      name: 'author',
      type: 'text',
      label: 'Author',
    },
    {
      name: 'category',
      type: 'select',
      label: 'Category',
      options: [
        {
          label: 'Technology',
          value: 'technology',
        },
        {
          label: 'Strategy',
          value: 'strategy',
        },
        {
          label: 'Process',
          value: 'process',
        },
        {
          label: 'Insights',
          value: 'insights',
        },
      ],
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
