'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, type ReactElement } from 'react'

const navItems = [
  { label: 'Overview', href: '/dashboard', icon: 'grid' },
  { label: 'Inquiries', href: '/dashboard/inquiries', icon: 'inbox' },
  { label: 'Projects', href: '/dashboard/projects', icon: 'folder' },
  { label: 'Blog', href: '/dashboard/blog', icon: 'edit' },
  { label: 'Analytics', href: '/dashboard/analytics', icon: 'chart' },
  { label: 'Clients', href: '/dashboard/clients', icon: 'users' },
  { label: 'Settings', href: '/dashboard/settings', icon: 'settings' },
]

// Simple icon components (no external library needed)
function Icon({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, ReactElement> = {
    grid: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    inbox: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-6l-2 3h-4l-2-3H2" />
        <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
      </svg>
    ),
    folder: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
      </svg>
    ),
    edit: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    chart: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" />
      </svg>
    ),
    menu: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    close: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    users: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    settings: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m6.08 0l4.24-4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m6.08 0l4.24 4.24" />
      </svg>
    ),
    chevronRight: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  }
  return icons[name] || null
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarExpanded, setSidebarExpanded] = useState(false)

  // Extract page title from pathname
  const getPageTitle = () => {
    const navItem = navItems.find(item => item.href === pathname)
    return navItem ? navItem.label : 'Dashboard'
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-horizon/20">
      {/* Sidebar - Desktop */}
      <aside
        className={`hidden lg:flex flex-col bg-deep-ocean border-r border-white/10 transition-all duration-300 ${
          sidebarExpanded ? 'w-56' : 'w-16'
        } group hover:w-56`}
        onMouseLeave={() => {
          // Only auto-collapse if not pinned
          if (!sidebarExpanded) {
            // Sidebar will collapse via hover state
          }
        }}
      >
        {/* Logo Area */}
        <div className="h-16 flex items-center justify-center border-b border-white/10">
          <Link
            href="/dashboard"
            className="flex items-center justify-center text-white font-display font-bold text-lg tracking-tight"
          >
            {sidebarExpanded ? 'MERIDIAN' : 'M'}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-2 overflow-y-auto flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-sans transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-coastal-teal text-white'
                    : 'text-white/60 hover:text-white/90 hover:bg-white/10'
                }`}
                title={!sidebarExpanded ? item.label : undefined}
              >
                <Icon name={item.icon} className="w-4 h-4 flex-shrink-0" />
                {sidebarExpanded && <span>{item.label}</span>}
              </Link>
            )
          })}
        </nav>

        {/* Toggle Button */}
        <div className="px-2 py-4 border-t border-white/10">
          <button
            onClick={() => setSidebarExpanded(!sidebarExpanded)}
            className="w-full flex items-center justify-center p-2 rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            title={sidebarExpanded ? 'Collapse' : 'Expand'}
          >
            <Icon
              name="chevronRight"
              className={`w-4 h-4 transition-transform ${sidebarExpanded ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      </aside>

      {/* Bottom Tab Bar - Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 h-14 bg-white border-t border-driftwood/20 flex justify-around items-center z-40">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-center w-12 h-12 rounded-lg transition-colors ${
                isActive
                  ? 'bg-meridian-sky/20 text-coastal-teal'
                  : 'text-deep-ocean/60'
              }`}
              title={item.label}
            >
              <Icon name={item.icon} className="w-5 h-5" />
            </Link>
          )
        })}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen lg:min-h-screen pb-14 lg:pb-0">
        {/* Top Bar */}
        <div className="bg-white border-b border-driftwood/10 h-12 flex items-center justify-between sticky top-0 z-20 px-6">
          {/* Breadcrumb-style title */}
          <h2 className="text-deep-ocean text-sm font-medium">
            {getPageTitle()}
          </h2>

          {/* Avatar with notification dot */}
          <div className="relative">
            <div className="w-7 h-7 rounded-full bg-coastal-teal flex items-center justify-center text-white text-xs font-sans font-semibold">
              B
            </div>
            <div className="w-2 h-2 bg-coastal-teal rounded-full absolute -top-0.5 -right-0.5" />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-5 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
