"use client"

import { useState, useMemo } from "react"
import Image from "next/image"

interface ClientBranding {
  primaryColor: string    // buttons, progress bars, accents
  secondaryColor: string  // backgrounds, badges, tints
  accentColor: string     // highlights, active states
  darkColor: string       // headings, primary text
  logoUrl?: string
  faviconUrl?: string
}

interface ClientData {
  companyName: string
  contactName: string
  projectName: string
  currentPhase: string
  weeksCurrent: number
  weeksTotal: number
  progressPercent: number
  branding: ClientBranding
  milestones: {
    title: string
    dueDate: string
    status: "completed" | "in-progress" | "upcoming"
  }[]
  testingLinks: {
    label: string
    description: string
    url: string
  }[]
  lighthouseScores: {
    label: string
    score: number
  }[]
  upcomingMeetings: {
    title: string
    date: string
    time: string
  }[]
  seoDomain: string
  seoDomainRating: number
  seoIndexedPages: number
  seoAvgPosition: number
}

const mockClientData: ClientData = {
  companyName: "Oceanview Properties",
  contactName: "Client",
  projectName: "Coastal Rentals Platform",
  currentPhase: "Build",
  weeksCurrent: 4,
  weeksTotal: 7,
  progressPercent: 57,
  branding: {
    primaryColor: "#1B4D6E",
    secondaryColor: "#E8F1F5",
    accentColor: "#D4A574",
    darkColor: "#1A1A2E",
    logoUrl: undefined,
  },
  milestones: [
    {
      title: "Project kickoff",
      dueDate: "Feb 24",
      status: "completed",
    },
    {
      title: "Technical architecture approved",
      dueDate: "Mar 3",
      status: "completed",
    },
    {
      title: "Design prototype approved",
      dueDate: "Mar 10",
      status: "completed",
    },
    {
      title: "Core booking engine complete",
      dueDate: "Mar 21",
      status: "completed",
    },
    {
      title: "Guest portal & payments",
      dueDate: "Mar 28",
      status: "in-progress",
    },
    {
      title: "QA & testing",
      dueDate: "Apr 4",
      status: "upcoming",
    },
    {
      title: "Launch",
      dueDate: "Apr 14",
      status: "upcoming",
    },
  ],
  testingLinks: [
    {
      label: "Staging Environment",
      description: "Preview the latest build",
      url: "https://staging.coastalrentals.com",
    },
    {
      label: "Design Prototype",
      description: "Interactive Figma prototype",
      url: "https://figma.com",
    },
    {
      label: "Content Preview",
      description: "Review your content updates",
      url: "https://staging.coastalrentals.com/preview",
    },
  ],
  lighthouseScores: [
    { label: "Performance", score: 94 },
    { label: "Accessibility", score: 98 },
    { label: "Best Practices", score: 92 },
    { label: "SEO", score: 96 },
  ],
  upcomingMeetings: [
    {
      title: "Sprint Review — Week 4",
      date: "Apr 1",
      time: "2:00 PM",
    },
    {
      title: "Design Review: Guest Portal",
      date: "Apr 3",
      time: "10:00 AM",
    },
    {
      title: "QA Planning Session",
      date: "Apr 7",
      time: "1:00 PM",
    },
  ],
  seoDomain: "coastalrentals.com",
  seoDomainRating: 42,
  seoIndexedPages: 28,
  seoAvgPosition: 12.4,
}

function getMilestoneWeeks(weeksCurrent: number, weeksTotal: number) {
  const weeks = []
  for (let i = 1; i <= weeksTotal; i++) {
    if (i < weeksCurrent) {
      weeks.push("completed")
    } else if (i === weeksCurrent) {
      weeks.push("current")
    } else {
      weeks.push("future")
    }
  }
  return weeks
}

function getScoreColor(score: number, branding: ClientBranding) {
  if (score >= 90) {
    return { bg: `${branding.primaryColor}12`, text: branding.primaryColor }
  } else if (score >= 70) {
    return { bg: `${branding.accentColor}20`, text: branding.accentColor }
  } else {
    return { bg: "#FEE2E2", text: "#DC2626" }
  }
}

/** Lighten a hex color by mixing with white */
function lighten(hex: string, amount: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const nr = Math.round(r + (255 - r) * amount)
  const ng = Math.round(g + (255 - g) * amount)
  const nb = Math.round(b + (255 - b) * amount)
  return `#${nr.toString(16).padStart(2, "0")}${ng.toString(16).padStart(2, "0")}${nb.toString(16).padStart(2, "0")}`
}

export default function ClientDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const data = mockClientData
  const b = data.branding

  // Precompute derived colors
  const colors = useMemo(() => ({
    primaryLight: lighten(b.primaryColor, 0.9),
    secondaryLight: lighten(b.secondaryColor, 0.5),
    accentLight: lighten(b.accentColor, 0.85),
    progressTrack: lighten(b.primaryColor, 0.85),
    hoverPrimary: lighten(b.primaryColor, 0.15),
  }), [b])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "meridian2026") {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Incorrect password")
      setPassword("")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setPassword("")
    setError("")
  }

  // ─── Login Screen ─────────────────────────────────────────────
  if (!isAuthenticated) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4 py-8"
        style={{
          background: `linear-gradient(135deg, ${b.secondaryColor}80, white, ${b.secondaryColor}50)`,
        }}
      >
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full">
          <div className="text-center mb-8">
            {b.logoUrl ? (
              <div className="mb-6 flex justify-center">
                <Image
                  src={b.logoUrl}
                  alt={data.companyName}
                  width={180}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ) : (
              <p
                className="font-display text-xs tracking-[0.15em] uppercase mb-6"
                style={{ color: `${b.darkColor}66` }}
              >
                {data.companyName}
              </p>
            )}
            <h1
              className="font-display font-light text-2xl mb-2"
              style={{ color: b.darkColor }}
            >
              Client Dashboard
            </h1>
            <p className="text-sm" style={{ color: `${b.darkColor}80` }}>
              Enter your password to access your project dashboard.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full rounded-lg px-4 py-3 text-sm transition focus:outline-none"
              style={{
                border: `1px solid ${b.primaryColor}30`,
                color: b.darkColor,
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = b.primaryColor
                e.currentTarget.style.boxShadow = `0 0 0 1px ${b.primaryColor}`
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = `${b.primaryColor}30`
                e.currentTarget.style.boxShadow = "none"
              }}
            />
            <button
              type="submit"
              className="w-full text-white rounded-lg py-3 font-sans text-sm font-medium transition duration-200"
              style={{ backgroundColor: b.primaryColor }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = b.darkColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = b.primaryColor)}
            >
              Unlock Dashboard
            </button>
          </form>

          {error && <p className="text-red-500 text-xs mt-2 text-center">{error}</p>}

          <div className="mt-8 pt-8 text-center" style={{ borderTop: `1px solid ${b.primaryColor}10` }}>
            <p className="text-xs" style={{ color: `${b.darkColor}33` }}>
              Powered by At The Meridian
            </p>
          </div>
        </div>
      </div>
    )
  }

  // ─── Authenticated Dashboard ──────────────────────────────────
  const weekBlocks = getMilestoneWeeks(data.weeksCurrent, data.weeksTotal)

  return (
    <div className="min-h-screen" style={{ backgroundColor: b.secondaryColor }}>
      {/* Top Bar */}
      <div
        className="sticky top-0 z-10 bg-white"
        style={{ borderBottom: `1px solid ${b.primaryColor}15` }}
      >
        <div className="px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {b.logoUrl ? (
              <Image
                src={b.logoUrl}
                alt={data.companyName}
                width={140}
                height={36}
                className="h-9 w-auto object-contain"
              />
            ) : (
              <p
                className="font-display text-xs tracking-[0.15em] uppercase"
                style={{ color: `${b.darkColor}66` }}
              >
                {data.companyName}
              </p>
            )}
            <div className="w-px h-6" style={{ backgroundColor: `${b.primaryColor}20` }} />
            <p className="font-sans font-medium" style={{ color: b.darkColor }}>
              {data.companyName}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="text-xs transition"
            style={{ color: `${b.darkColor}66` }}
            onMouseEnter={(e) => (e.currentTarget.style.color = b.darkColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = `${b.darkColor}66`)}
          >
            Log Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 lg:p-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="font-display font-light text-2xl mb-1" style={{ color: b.darkColor }}>
            Welcome back, {data.contactName}
          </h1>
          <p className="text-sm" style={{ color: `${b.darkColor}80` }}>
            Here is your project overview.
          </p>
        </div>

        {/* Project Progress Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h2 className="font-sans font-medium mb-6" style={{ color: b.darkColor }}>
            Project Progress
          </h2>

          <div className="mb-6">
            <p className="text-lg font-display font-light mb-2" style={{ color: b.darkColor }}>
              {data.projectName}
            </p>
            <div className="flex items-center gap-2 mb-4">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: `${b.primaryColor}15`,
                  color: b.primaryColor,
                }}
              >
                {data.currentPhase}
              </span>
              <span className="text-xs" style={{ color: `${b.darkColor}80` }}>
                Week {data.weeksCurrent} of {data.weeksTotal}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div
                className="h-3 rounded-full overflow-hidden"
                style={{ backgroundColor: colors.progressTrack }}
              >
                <div
                  className="h-full transition-all duration-500 rounded-full"
                  style={{
                    width: `${data.progressPercent}%`,
                    backgroundColor: b.primaryColor,
                  }}
                />
              </div>
            </div>

            <p className="text-xs mb-6" style={{ color: `${b.darkColor}80` }}>
              Week {data.weeksCurrent} of {data.weeksTotal} — {data.currentPhase}
            </p>

            {/* Timeline Visual */}
            <div className="flex gap-2 mb-8">
              {weekBlocks.map((status, idx) => (
                <div
                  key={idx}
                  className="flex-1 h-2 rounded-full transition-colors"
                  style={{
                    backgroundColor:
                      status === "completed"
                        ? b.primaryColor
                        : status === "current"
                          ? b.accentColor
                          : colors.progressTrack,
                  }}
                />
              ))}
            </div>

            {/* Milestones */}
            <div className="space-y-3">
              {data.milestones.map((milestone, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded border-2 flex-shrink-0 transition-colors"
                    style={{
                      backgroundColor:
                        milestone.status === "completed" ? b.primaryColor : "transparent",
                      borderColor:
                        milestone.status === "completed"
                          ? b.primaryColor
                          : `${b.darkColor}25`,
                    }}
                  >
                    {milestone.status === "completed" && (
                      <svg
                        className="w-full h-full text-white p-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium" style={{ color: b.darkColor }}>
                      {milestone.title}
                    </p>
                    <p className="text-xs" style={{ color: `${b.darkColor}80` }}>
                      {milestone.dueDate}
                    </p>
                  </div>
                  {milestone.status === "in-progress" && (
                    <span
                      className="text-xs font-medium"
                      style={{ color: b.accentColor }}
                    >
                      In Progress
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testing Links Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h2 className="font-sans font-medium mb-6" style={{ color: b.darkColor }}>
            Testing &amp; Preview
          </h2>

          <div className="space-y-0">
            {data.testingLinks.map((link, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-3 last:border-0"
                style={{ borderBottom: `1px solid ${b.primaryColor}10` }}
              >
                <div className="flex-1">
                  <p className="font-sans text-sm mb-1" style={{ color: b.darkColor }}>
                    {link.label}
                  </p>
                  <p className="text-xs" style={{ color: `${b.darkColor}66` }}>
                    {link.description}
                  </p>
                </div>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition ml-4 flex-shrink-0"
                  style={{ color: b.primaryColor }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = b.darkColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = b.primaryColor)}
                >
                  Open →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Lighthouse Scores Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-sans font-medium" style={{ color: b.darkColor }}>
              Lighthouse Scores
            </h2>
            <p className="text-xs" style={{ color: `${b.darkColor}4D` }}>
              Last checked: Mar 27, 2026
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.lighthouseScores.map((score, idx) => {
              const scoreColors = getScoreColor(score.score, b)
              return (
                <div
                  key={idx}
                  className="rounded-xl p-4 text-center"
                  style={{ backgroundColor: scoreColors.bg }}
                >
                  <p
                    className="text-3xl font-display font-light"
                    style={{ color: scoreColors.text }}
                  >
                    {score.score}
                  </p>
                  <p className="text-xs mt-1" style={{ color: `${b.darkColor}80` }}>
                    {score.label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Upcoming Meetings Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h2 className="font-sans font-medium mb-6" style={{ color: b.darkColor }}>
            Upcoming Meetings
          </h2>

          <div className="space-y-0">
            {data.upcomingMeetings.map((meeting, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 py-3 last:border-0"
                style={{ borderBottom: `1px solid ${b.primaryColor}10` }}
              >
                <div
                  className="rounded-lg p-3 text-center min-w-[60px] flex-shrink-0"
                  style={{ backgroundColor: b.secondaryColor }}
                >
                  <p className="font-display text-lg" style={{ color: b.darkColor }}>
                    {parseInt(meeting.date)}
                  </p>
                  <p
                    className="text-[10px] uppercase"
                    style={{ color: `${b.darkColor}66` }}
                  >
                    {meeting.date.split(" ")[1]}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium" style={{ color: b.darkColor }}>
                    {meeting.title}
                  </p>
                  <p className="text-xs" style={{ color: `${b.darkColor}80` }}>
                    {meeting.time} • with Brooke
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Overview Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-sans font-medium" style={{ color: b.darkColor }}>
              SEO Overview
            </h2>
            <p className="text-xs" style={{ color: `${b.darkColor}80` }}>
              Domain: {data.seoDomain}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div
              className="text-center p-4 rounded-lg"
              style={{ backgroundColor: `${b.primaryColor}12` }}
            >
              <p className="text-2xl font-display font-light" style={{ color: b.primaryColor }}>
                {data.seoDomainRating}
              </p>
              <p className="text-xs mt-1" style={{ color: `${b.darkColor}80` }}>
                Domain Rating
              </p>
            </div>
            <div
              className="text-center p-4 rounded-lg"
              style={{ backgroundColor: b.secondaryColor }}
            >
              <p className="text-2xl font-display font-light" style={{ color: b.darkColor }}>
                {data.seoIndexedPages}
              </p>
              <p className="text-xs mt-1" style={{ color: `${b.darkColor}80` }}>
                Indexed Pages
              </p>
            </div>
            <div
              className="text-center p-4 rounded-lg"
              style={{ backgroundColor: b.secondaryColor }}
            >
              <p className="text-2xl font-display font-light" style={{ color: b.darkColor }}>
                {data.seoAvgPosition}
              </p>
              <p className="text-xs mt-1" style={{ color: `${b.darkColor}80` }}>
                Avg. Position
              </p>
            </div>
          </div>

          <p className="text-xs italic" style={{ color: `${b.darkColor}4D` }}>
            Full SEO report available upon request.
          </p>
        </div>

        {/* Footer */}
        <div className="py-8 text-center">
          <p className="text-xs mb-1" style={{ color: `${b.darkColor}33` }}>
            Powered by At The Meridian
          </p>
          <p className="text-xs" style={{ color: `${b.darkColor}33` }}>
            Questions? Email brooke@atthemeridian.co
          </p>
        </div>
      </div>
    </div>
  )
}
