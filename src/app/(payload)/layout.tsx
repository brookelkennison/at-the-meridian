import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'At The Meridian CMS',
}

export default function PayloadLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
