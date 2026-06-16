import { fileURLToPath } from 'url'
import path from 'path'
import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoPlugin } from '@payloadcms/plugin-seo'

import { Users } from './payload/collections/Users'
import { Media } from './payload/collections/Media'
import { Projects } from './payload/collections/Projects'
import { Posts } from './payload/collections/Posts'
import { Inquiries } from './payload/collections/Inquiries'
import { Estimates } from './payload/collections/Estimates'
import Clients from './payload/collections/Clients'
import ClientProjects from './payload/collections/ClientProjects'
import ApiKeys from './payload/collections/ApiKeys'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' | At The Meridian',
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Projects, Posts, Inquiries, Estimates, Clients, ClientProjects, ApiKeys],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'CHANGE-THIS-SECRET-IN-PRODUCTION',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/at-the-meridian',
  }),
  plugins: [
    seoPlugin({
      collections: ['projects', 'posts'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }: any) => `${doc?.title} | At The Meridian`,
      generateDescription: ({ doc }: any) => doc?.excerpt || '',
    }),
  ],
})
