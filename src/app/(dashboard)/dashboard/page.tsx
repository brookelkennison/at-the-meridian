"use client"

import { useState } from "react"
import Link from "next/link"

// Sparkline SVG helper
function Sparkline({ data, color = "#2E7D9E", height = 32 }: { data: number[]; color?: string; height?: number }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const width = 100
  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * width
      const y = height - ((d - min) / range) * (height - 4) - 2
      return `${x},${y}`
    })
    .join(" ")
  const areaPoints = `0,${height} ${points} ${width},${height}`

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full" style={{ height }} preserveAspectRatio="none">
      <defs>
        <linearGradient id={`grad-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.15" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill={`url(#grad-${color.replace("#", "")})`} />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Donut chart SVG helper
function DonutChart({ value, max, color = "#2E7D9E", size = 96 }: { value: number; max: number; color?: string; size?: number }) {
  const radius = 36
  const circumference = 2 * Math.PI * radius
  const progress = (value / max) * circumference

  return (
    <svg width={size} height={size} viewBox="0 0 96 96" className="mx-auto">
      <circle cx="48" cy="48" r={radius} fill="none" stroke="#E8F7FF" strokeWidth="8" />
      <circle
        cx="48"
        cy="48"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeDasharray={`${progress} ${circumference}`}
        strokeLinecap="round"
        transform="rotate(-90 48 48)"
      />
    </svg>
  )
}

// Bar chart SVG helper
function BarChart({ data, labels, color = "#2E7D9E", height = 160 }: { data: number[]; labels: string[]; color?: string; height?: number }) {
  const max = Math.max(...data)
  return (
    <div className="flex items-end justify-between gap-1" style={{ height }}>
      {data.map((d, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <div
            className="w-full rounded-t-sm transition-all"
            style={{ height: `${(d / max) * 100}%`, backgroundColor: color, minHeight: 4 }}
          />
          <span className="text-[9px] text-deep-ocean/25">{labels[i]}</span>
        </div>
      ))}
    </div>
  )
}

// Mock data
const inquiries = [
  {
    id: 1,
    name: "Sarah Mitchell",
    company: "Oceanview Properties",
    type: "New Build",
    status: "New",
    date: "Mar 27",
    budget: "$150k",
  },
  {
    id: 2,
    name: "James Chen",
    company: "Summit Advisory",
    type: "Redesign",
    status: "Contacted",
    date: "Mar 25",
    budget: "$85k",
  },
  {
    id: 3,
    name: "Lisa Park",
    company: "Coastal Living Co",
    type: "Platform",
    status: "Qualified",
    date: "Mar 23",
    budget: "$200k",
  },
  {
    id: 4,
    name: "David Torres",
    company: "Harbor Group",
    type: "Integration",
    status: "New",
    date: "Mar 22",
    budget: "$60k",
  },
  {
    id: 5,
    name: "Maria Santos",
    company: "Tide & Table",
    type: "New Build",
    status: "Contacted",
    date: "Mar 20",
    budget: "$120k",
  },
  {
    id: 6,
    name: "Robert Chen",
    company: "Pacific Realty",
    type: "Platform",
    status: "New",
    date: "Mar 18",
    budget: "$175k",
  },
  {
    id: 7,
    name: "Emma Wilson",
    company: "Seaside Hotels",
    type: "Redesign",
    status: "Qualified",
    date: "Mar 17",
    budget: "$95k",
  },
  {
    id: 8,
    name: "Michael Brown",
    company: "Coastal Solutions",
    type: "Integration",
    status: "Contacted",
    date: "Mar 15",
    budget: "$110k",
  },
]

const activeProjects = [
  {
    id: 1,
    client: "Oceanview Properties",
    name: "Coastal Rentals Platform",
    progress: 57,
    week: "4 of 7",
    status: "Build",
    dotColor: "bg-coastal-teal",
    progressColor: "bg-coastal-teal",
  },
  {
    id: 2,
    client: "Summit Advisory",
    name: "Website Redesign",
    progress: 85,
    week: "6 of 7",
    status: "Review",
    dotColor: "bg-meridian-sky",
    progressColor: "bg-meridian-sky",
  },
  {
    id: 3,
    client: "Tide & Table",
    name: "Restaurant Platform",
    progress: 28,
    week: "2 of 7",
    status: "Design",
    dotColor: "bg-driftwood",
    progressColor: "bg-driftwood",
  },
  {
    id: 4,
    client: "Harbor Group",
    name: "Booking System",
    progress: 14,
    week: "1 of 7",
    status: "Discovery",
    dotColor: "bg-warm-sand",
    progressColor: "bg-warm-sand",
  },
]

const blogPosts = [
  {
    id: 1,
    title: "Why Your Business Needs a Custom Booking Platform",
    status: "Published",
    date: "Mar 15",
    category: "Strategy",
  },
  {
    id: 2,
    title: "The Real Cost of a Cheap Website",
    status: "Published",
    date: "Mar 8",
    category: "Web Design",
  },
  {
    id: 3,
    title: "What a Tech Stack Actually Means",
    status: "Draft",
    date: "Mar 5",
    category: "Technical",
  },
  {
    id: 4,
    title: "Conversion Rate Optimization",
    status: "Published",
    date: "Feb 28",
    category: "Analytics",
  },
  {
    id: 5,
    title: "Building Scalable Web Applications",
    status: "Published",
    date: "Feb 20",
    category: "Technical",
  },
  {
    id: 6,
    title: "User Research Best Practices",
    status: "Draft",
    date: "Feb 15",
    category: "Design",
  },
  {
    id: 7,
    title: "Mobile-First Design Principles",
    status: "Published",
    date: "Feb 10",
    category: "Design",
  },
  {
    id: 8,
    title: "SEO Optimization Guide 2026",
    status: "Published",
    date: "Feb 1",
    category: "Marketing",
  },
]

const activityFeed = [
  { id: 1, text: "New inquiry from Sarah Mitchell", time: "2h ago", dotColor: "bg-green-500" },
  { id: 2, text: "Coastal Rentals moved to Build", time: "Yesterday", dotColor: "bg-coastal-teal" },
  { id: 3, text: "Blog published: Booking Platforms", time: "2d ago", dotColor: "bg-meridian-sky" },
  { id: 4, text: "Summit Advisory review scheduled", time: "3d ago", dotColor: "bg-amber-500" },
  { id: 5, text: "New inquiry from David Torres", time: "5d ago", dotColor: "bg-green-500" },
  { id: 6, text: "Milestone completed: Design approved", time: "1w ago", dotColor: "bg-coastal-teal" },
  { id: 7, text: "Invoice sent to Tide & Table", time: "1w ago", dotColor: "bg-driftwood" },
  { id: 8, text: "New client: Pacific Realty", time: "2w ago", dotColor: "bg-green-500" },
]

function StatusBadge({ status }: { status: string }) {
  const baseClasses = "text-[10px] px-2 py-0.5 rounded-full font-sans font-medium"

  switch (status) {
    case "New":
      return <span className={`${baseClasses} bg-coastal-teal/10 text-coastal-teal`}>{status}</span>
    case "Contacted":
      return <span className={`${baseClasses} bg-meridian-sky/10 text-coastal-teal`}>{status}</span>
    case "Qualified":
      return <span className={`${baseClasses} bg-green-50 text-green-600`}>{status}</span>
    case "Closed":
      return <span className={`${baseClasses} bg-warm-sand/30 text-deep-ocean/60`}>{status}</span>
    case "Published":
      return <span className={`${baseClasses} bg-green-50 text-green-600`}>{status}</span>
    case "Draft":
      return <span className={`${baseClasses} bg-warm-sand/30 text-deep-ocean/60`}>{status}</span>
    case "Build":
      return <span className={`${baseClasses} bg-coastal-teal/10 text-coastal-teal`}>{status}</span>
    case "Review":
      return <span className={`${baseClasses} bg-meridian-sky/10 text-coastal-teal`}>{status}</span>
    case "Design":
      return <span className={`${baseClasses} bg-meridian-sky/10 text-coastal-teal`}>{status}</span>
    case "Discovery":
      return <span className={`${baseClasses} bg-driftwood/10 text-deep-ocean/50`}>{status}</span>
    default:
      return <span className={baseClasses}>{status}</span>
  }
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Top Stats Row */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        {/* Inquiries */}
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[11px] uppercase tracking-wider text-deep-ocean/40">Inquiries</span>
            <span className="text-[11px] text-coastal-teal">+3 this week</span>
          </div>
          <div className="font-display text-2xl font-light text-deep-ocean">8</div>
          <div className="mt-2 h-8">
            <Sparkline data={[2, 3, 1, 4, 3, 5, 8]} color="#2E7D9E" />
          </div>
        </div>

        {/* Active Projects */}
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[11px] uppercase tracking-wider text-deep-ocean/40">Active Projects</span>
            <span className="text-[11px] text-coastal-teal">2 launching</span>
          </div>
          <div className="font-display text-2xl font-light text-deep-ocean">4</div>
          <div className="mt-2 h-8">
            <Sparkline data={[3, 3, 4, 4, 4, 4, 4]} color="#2E7D9E" />
          </div>
        </div>

        {/* Published Posts */}
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[11px] uppercase tracking-wider text-deep-ocean/40">Published Posts</span>
            <span className="text-[11px] text-coastal-teal">+2 this month</span>
          </div>
          <div className="font-display text-2xl font-light text-deep-ocean">12</div>
          <div className="mt-2 h-8">
            <Sparkline data={[6, 7, 8, 8, 10, 11, 12]} color="#2E7D9E" />
          </div>
        </div>

        {/* Visitors */}
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[11px] uppercase tracking-wider text-deep-ocean/40">Visitors (7d)</span>
            <span className="text-[11px] text-coastal-teal">+18%</span>
          </div>
          <div className="font-display text-2xl font-light text-deep-ocean">2,847</div>
          <div className="mt-2 h-8">
            <Sparkline data={[320, 380, 410, 390, 450, 480, 417]} color="#2E7D9E" />
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="flex gap-1 bg-white rounded-lg p-1 shadow-sm mb-4">
        {["overview", "inquiries", "projects", "posts", "analytics"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 text-xs font-sans rounded-md transition-all ${
              activeTab === tab
                ? "bg-deep-ocean text-white"
                : "text-deep-ocean/50 hover:text-deep-ocean cursor-pointer"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div className="lg:grid lg:grid-cols-3 gap-4">
            {/* Left Column (col-span-2) */}
            <div className="lg:col-span-2 space-y-4">
              {/* Pipeline Card */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="px-4 py-3 border-b border-driftwood/10 flex justify-between items-center">
                  <span className="text-sm font-medium text-deep-ocean">Inquiry Pipeline</span>
                  <Link href="/dashboard/inquiries" className="text-xs text-coastal-teal hover:text-coastal-teal/70">
                    View all →
                  </Link>
                </div>
                <div className="flex">
                  {[
                    { label: "New", count: 3, color: "bg-coastal-teal" },
                    { label: "Contacted", count: 2, color: "bg-meridian-sky" },
                    { label: "Qualified", count: 2, color: "bg-green-400" },
                    { label: "Closed", count: 1, color: "bg-driftwood" },
                  ].map((col, i) => (
                    <div key={i} className="flex-1 px-4 py-3 border-r border-driftwood/10 last:border-0">
                      <div className="text-[10px] uppercase tracking-wider text-deep-ocean/30 mb-2">{col.label}</div>
                      <div className="text-lg font-display font-light text-deep-ocean">{col.count}</div>
                      <div className={`h-1 rounded-full mt-2 ${col.color}`} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects Card */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="px-4 py-3 border-b border-driftwood/10 flex justify-between items-center">
                  <span className="text-sm font-medium text-deep-ocean">Active Projects</span>
                  <Link href="/dashboard/projects" className="text-xs text-coastal-teal hover:text-coastal-teal/70">
                    View all →
                  </Link>
                </div>
                <div>
                  {activeProjects.map((project) => (
                    <div
                      key={project.id}
                      className="flex items-center px-4 py-2.5 border-b border-driftwood/10 last:border-0 hover:bg-horizon/30 gap-3"
                    >
                      <div className={`w-2 h-2 rounded-full shrink-0 ${project.dotColor}`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm text-deep-ocean truncate font-sans">
                          {project.client} — {project.name}
                        </div>
                      </div>
                      <StatusBadge status={project.status} />
                      <div className="w-20 h-1.5 bg-horizon rounded-full overflow-hidden">
                        <div
                          className={`h-full ${project.progressColor} rounded-full`}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-deep-ocean/30 w-12 text-right">{project.week}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (col-span-1) */}
            <div className="space-y-4">
              {/* Activity Card */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="px-4 py-3 border-b border-driftwood/10">
                  <span className="text-sm font-medium text-deep-ocean">Activity</span>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {activityFeed.map((item) => (
                    <div key={item.id} className="flex gap-2 px-4 py-2 border-b border-driftwood/10 last:border-0">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${item.dotColor}`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-deep-ocean/60 font-sans">{item.text}</div>
                        <div className="text-[10px] text-deep-ocean/20 mt-0.5">{item.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats Card */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex justify-center mb-2">
                  <DonutChart value={285} max={500} color="#2E7D9E" size={96} />
                </div>
                <div className="text-center mb-4">
                  <div className="font-display text-lg text-deep-ocean">$285k</div>
                  <div className="text-[10px] text-deep-ocean/30">YTD Revenue</div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="text-center">
                    <div className="text-deep-ocean font-medium">$47.5k</div>
                    <div className="text-deep-ocean/30">Avg. Project</div>
                  </div>
                  <div className="text-center">
                    <div className="text-deep-ocean font-medium">62%</div>
                    <div className="text-deep-ocean/30">Close Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* INQUIRIES TAB */}
        {activeTab === "inquiries" && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-driftwood/10 bg-horizon/20">
                  <th className="text-left px-4 py-2.5 text-[10px] uppercase tracking-wider text-deep-ocean/30">Name</th>
                  <th className="text-left px-4 py-2.5 text-[10px] uppercase tracking-wider text-deep-ocean/30">Company</th>
                  <th className="text-left px-4 py-2.5 text-[10px] uppercase tracking-wider text-deep-ocean/30">Type</th>
                  <th className="text-left px-4 py-2.5 text-[10px] uppercase tracking-wider text-deep-ocean/30">Budget</th>
                  <th className="text-left px-4 py-2.5 text-[10px] uppercase tracking-wider text-deep-ocean/30">Status</th>
                  <th className="text-left px-4 py-2.5 text-[10px] uppercase tracking-wider text-deep-ocean/30">Date</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="border-b border-driftwood/10 hover:bg-horizon/20">
                    <td className="px-4 py-2 text-xs text-deep-ocean font-sans">{inquiry.name}</td>
                    <td className="px-4 py-2 text-xs text-deep-ocean/60 font-sans">{inquiry.company}</td>
                    <td className="px-4 py-2 text-xs text-deep-ocean/60 font-sans">{inquiry.type}</td>
                    <td className="px-4 py-2 text-xs text-deep-ocean/60 font-sans">{inquiry.budget}</td>
                    <td className="px-4 py-2">
                      <StatusBadge status={inquiry.status} />
                    </td>
                    <td className="px-4 py-2 text-xs text-deep-ocean/40 font-sans">{inquiry.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* PROJECTS TAB */}
        {activeTab === "projects" && (
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: 1, client: "Oceanview Properties", name: "Coastal Rentals", phase: "Build", budget: "$150k", start: "Mar 1", progress: 57 },
              { id: 2, client: "Summit Advisory", name: "Website Redesign", phase: "Review", budget: "$85k", start: "Feb 15", progress: 85 },
              { id: 3, client: "Tide & Table", name: "Restaurant Platform", phase: "Design", budget: "$120k", start: "Mar 10", progress: 28 },
              { id: 4, client: "Harbor Group", name: "Booking System", phase: "Discovery", budget: "$200k", start: "Mar 20", progress: 14 },
              { id: 5, client: "Pacific Realty", name: "MLS Integration", phase: "Build", budget: "$175k", start: "Feb 28", progress: 42 },
              { id: 6, client: "Seaside Hotels", name: "Booking Engine", phase: "Design", budget: "$95k", start: "Mar 5", progress: 35 },
            ].map((project) => (
              <div key={project.id} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-[10px] text-coastal-teal uppercase tracking-wider mb-1">{project.client}</div>
                <div className="text-sm font-medium text-deep-ocean mb-2">{project.name}</div>
                <div className="flex items-center gap-2 mb-2">
                  <StatusBadge status={project.phase} />
                </div>
                <div className="w-full h-1.5 bg-horizon rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-coastal-teal rounded-full" style={{ width: `${project.progress}%` }} />
                </div>
                <div className="flex justify-between text-[10px] text-deep-ocean/30">
                  <span>{project.budget}</span>
                  <span>{project.start}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* POSTS TAB */}
        {activeTab === "posts" && (
          <div className="bg-white rounded-lg shadow-sm">
            {blogPosts.map((post) => (
              <div key={post.id} className="flex items-center justify-between py-2.5 px-4 border-b border-driftwood/10 last:border-0">
                <div className="flex-1">
                  <div className="text-sm text-deep-ocean font-sans">{post.title}</div>
                  <div className="flex gap-2 mt-1">
                    <span className="text-[9px] bg-coastal-teal/10 text-coastal-teal px-2 py-0.5 rounded-full">{post.category}</span>
                    <StatusBadge status={post.status} />
                  </div>
                </div>
                <div className="flex items-center gap-3 ml-3">
                  <span className="text-[10px] text-deep-ocean/30">{post.date}</span>
                  <Link href="#" className="text-[10px] text-coastal-teal hover:text-coastal-teal/70">
                    Edit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ANALYTICS TAB */}
        {activeTab === "analytics" && (
          <div>
            {/* Analytics Stats */}
            <div className="grid grid-cols-4 gap-3 mb-4">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-[11px] uppercase tracking-wider text-deep-ocean/40 mb-1">Page Views</div>
                <div className="font-display text-2xl font-light text-deep-ocean">8,432</div>
                <div className="text-[11px] text-coastal-teal mt-1">+5%</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-[11px] uppercase tracking-wider text-deep-ocean/40 mb-1">Visitors</div>
                <div className="font-display text-2xl font-light text-deep-ocean">2,847</div>
                <div className="text-[11px] text-coastal-teal mt-1">+18%</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-[11px] uppercase tracking-wider text-deep-ocean/40 mb-1">Avg. Session</div>
                <div className="font-display text-2xl font-light text-deep-ocean">3m 42s</div>
                <div className="text-[11px] text-coastal-teal mt-1">+2%</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-[11px] uppercase tracking-wider text-deep-ocean/40 mb-1">Bounce Rate</div>
                <div className="font-display text-2xl font-light text-deep-ocean">42%</div>
                <div className="text-[11px] text-red-400 mt-1">-3%</div>
              </div>
            </div>

            {/* Charts Row */}
            <div className="lg:grid lg:grid-cols-3 gap-4">
              {/* Traffic Chart */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-4">
                <div className="text-sm font-medium text-deep-ocean mb-4">Traffic (7d)</div>
                <div style={{ height: 160 }}>
                  <BarChart
                    data={[380, 420, 510, 390, 480, 320, 290]}
                    labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
                    color="#2E7D9E"
                  />
                </div>
              </div>

              {/* Sources */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="text-sm font-medium text-deep-ocean mb-4">Sources</div>
                <div className="space-y-2">
                  {[
                    { label: "Organic", value: 45 },
                    { label: "Direct", value: 28 },
                    { label: "Referral", value: 18 },
                    { label: "Social", value: 9 },
                  ].map((source) => (
                    <div key={source.label} className="flex items-center gap-2">
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-[10px] text-deep-ocean/60">{source.label}</span>
                          <span className="text-[10px] font-medium text-deep-ocean">{source.value}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-horizon rounded-full overflow-hidden">
                          <div className="h-full bg-coastal-teal rounded-full" style={{ width: `${source.value}%` }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
