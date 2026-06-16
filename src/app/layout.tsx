import type { Metadata } from 'next'
import { Fustat, Space_Grotesk } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

// Body + paragraph type — humanist sans
const fustat = Fustat({
  subsets: ['latin'],
  variable: '--font-fustat',
  display: 'swap',
})

// Labels, UI bits — geometric grotesk
const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
})

// Logo wordmark + main headlines — Norwester (Jamie Wilson, SIL OFL)
// Self-hosted from public/fonts/Norwester.woff2
const norwester = localFont({
  src: [
    {
      path: '../../public/fonts/Norwester.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Norwester.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-norwester',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'At The Meridian — Technology Built to Scale',
    template: '%s | At The Meridian',
  },
  description:
    'Meridian builds successful technology — not just sites — that gives established businesses the digital infrastructure they need to scale with confidence.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'At The Meridian — Technology Built to Scale',
    description:
      'The technology agency for established businesses that have outgrown what a basic website can do.',
    siteName: 'At The Meridian',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fustat.variable} ${grotesk.variable} ${norwester.variable}`}>
      <body className="font-sans antialiased bg-bg text-ink">{children}</body>
    </html>
  )
}
