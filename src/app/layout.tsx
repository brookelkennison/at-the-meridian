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
    default: 'At The Meridian — Websites & systems that convert search to sale',
    template: '%s | At The Meridian',
  },
  description:
    'We build service businesses a custom website and the growth engine around it — so the leads keep coming while you run the business.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://atthemeridian.co'),
  openGraph: {
    title: 'At The Meridian — Websites & systems that convert search to sale',
    description:
      'We build service businesses a custom website and the growth engine around it — so the leads keep coming while you run the business.',
    siteName: 'At The Meridian',
    url: '/',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'At The Meridian — websites & systems that convert search to sale.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'At The Meridian — Websites & systems that convert search to sale',
    description:
      'We build service businesses a custom website and the growth engine around it — so the leads keep coming while you run the business.',
    images: ['/og-image.png'],
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
