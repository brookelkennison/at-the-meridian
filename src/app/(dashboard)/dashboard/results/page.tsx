"use client";

import { useState } from "react";

// ─────────────────────────── Chart helpers ───────────────────────────

// Multi-series area + line chart (the big "Lead Generation Trends" panel)
function TrendsChart({
  series,
  labels,
  height = 240,
}: {
  series: { name: string; color: string; data: number[] }[];
  labels: string[];
  height?: number;
}) {
  const width = 640;
  const padX = 8;
  const padY = 16;
  const all = series.flatMap((s) => s.data);
  const max = Math.max(...all);
  const min = Math.min(...all, 0);
  const range = max - min || 1;

  const toPoints = (data: number[]) =>
    data.map((d, i) => {
      const x = padX + (i / (data.length - 1)) * (width - padX * 2);
      const y =
        padY + (1 - (d - min) / range) * (height - padY * 2);
      return [x, y] as const;
    });

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full"
      style={{ height }}
      preserveAspectRatio="none"
    >
      <defs>
        {series.map((s) => (
          <linearGradient
            key={s.name}
            id={`fill-${s.color.replace("#", "")}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor={s.color} stopOpacity="0.18" />
            <stop offset="100%" stopColor={s.color} stopOpacity="0" />
          </linearGradient>
        ))}
      </defs>

      {/* Horizontal gridlines */}
      {[0, 0.25, 0.5, 0.75, 1].map((t) => {
        const y = padY + t * (height - padY * 2);
        return (
          <line
            key={t}
            x1={padX}
            x2={width - padX}
            y1={y}
            y2={y}
            stroke="#0a0c14"
            strokeOpacity="0.06"
            strokeWidth="1"
          />
        );
      })}

      {series.map((s) => {
        const pts = toPoints(s.data);
        const line = pts.map((p) => p.join(",")).join(" ");
        const area = `${padX},${height - padY} ${line} ${
          width - padX
        },${height - padY}`;
        return (
          <g key={s.name}>
            <polygon
              points={area}
              fill={`url(#fill-${s.color.replace("#", "")})`}
            />
            <polyline
              points={line}
              fill="none"
              stroke={s.color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        );
      })}

      {/* X labels */}
      {labels.map((label, i) => {
        const x = padX + (i / (labels.length - 1)) * (width - padX * 2);
        return (
          <text
            key={label}
            x={x}
            y={height - 2}
            textAnchor="middle"
            className="fill-deep-ocean/30"
            style={{ fontSize: 9 }}
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
}

// Small inline sparkline for KPI cards
function Sparkline({
  data,
  color = "#2E7D9E",
  height = 28,
}: {
  data: number[];
  color?: string;
  height?: number;
}) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const width = 100;
  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((d - min) / range) * (height - 4) - 2;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full"
      style={{ height }}
      preserveAspectRatio="none"
    >
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─────────────────────────── Mock data ───────────────────────────

const kpis = [
  {
    label: "Total Inquiries",
    value: "2,842",
    change: "+12.5%",
    up: true,
    color: "#2E7D9E",
    spark: [18, 22, 19, 26, 24, 31, 28, 35, 33, 41],
  },
  {
    label: "Qualified Leads",
    value: "728",
    change: "+8.2%",
    up: true,
    color: "#7dd3fc",
    spark: [8, 9, 11, 10, 13, 12, 15, 14, 17, 19],
  },
  {
    label: "Win Rate",
    value: "86.5%",
    change: "+2.1%",
    up: true,
    color: "#0d99ff",
    spark: [70, 72, 71, 74, 76, 78, 80, 82, 84, 86],
  },
  {
    label: "Projects Closed",
    value: "156",
    change: "+15.3%",
    up: true,
    color: "#9e36ff",
    spark: [4, 5, 6, 5, 7, 8, 9, 11, 13, 15],
  },
];

const trendSeries = [
  {
    name: "Inquiries",
    color: "#2E7D9E",
    data: [180, 210, 195, 240, 220, 280, 260, 320, 300, 360, 340, 420],
  },
  {
    name: "Qualified",
    color: "#7dd3fc",
    data: [90, 110, 100, 130, 120, 150, 140, 175, 165, 200, 190, 235],
  },
  {
    name: "Closed",
    color: "#9e36ff",
    data: [30, 40, 35, 48, 44, 60, 55, 72, 68, 88, 82, 104],
  },
];
const trendLabels = [
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
];

const recentResults = [
  { name: "Oceanview Properties", type: "New Build", value: "$150k", status: "Closed", date: "Jun 21" },
  { name: "Summit Advisory", type: "Redesign", value: "$85k", status: "Won", date: "Jun 19" },
  { name: "Coastal Living Co", type: "Platform", value: "$200k", status: "Closed", date: "Jun 17" },
  { name: "Harbor Group", type: "Integration", value: "$60k", status: "Won", date: "Jun 15" },
  { name: "Northwind Dental", type: "New Build", value: "$48k", status: "Closed", date: "Jun 12" },
];

const sources = [
  { source: "Referral", percentage: 38, color: "bg-coastal-teal" },
  { source: "Organic Search", percentage: 27, color: "bg-meridian-sky" },
  { source: "Portfolio", percentage: 18, color: "bg-spot-blue" },
  { source: "Social", percentage: 11, color: "bg-spot-purple" },
  { source: "Other", percentage: 6, color: "bg-driftwood" },
];

const statusStyles: Record<string, string> = {
  Closed: "bg-coastal-teal/15 text-coastal-teal",
  Won: "bg-spot-blue/15 text-spot-blue",
};

// ─────────────────────────── Page ───────────────────────────

export default function ResultsPage() {
  const [timePeriod, setTimePeriod] = useState("12 Months");
  const timePeriods = ["30 Days", "90 Days", "12 Months"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-horizon to-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <div>
            <h1 className="font-sans text-xl font-medium text-deep-ocean">
              Results Overview
            </h1>
            <p className="text-sm text-deep-ocean/50 font-sans mt-1">
              Hi Brooke 👋 — here&apos;s how the pipeline is performing.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden md:flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm w-56">
              <svg
                className="w-4 h-4 text-deep-ocean/30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              </svg>
              <input
                placeholder="Search results…"
                className="bg-transparent text-sm text-deep-ocean placeholder:text-deep-ocean/30 focus:outline-none w-full font-sans"
              />
            </div>

            {/* Time period selector */}
            <div className="flex gap-1 bg-horizon/50 rounded-lg p-1">
              {timePeriods.map((period) => (
                <button
                  key={period}
                  onClick={() => setTimePeriod(period)}
                  className={`px-3 py-1.5 rounded-md text-xs font-sans cursor-pointer transition ${
                    timePeriod === period
                      ? "bg-white shadow-sm text-deep-ocean"
                      : "text-deep-ocean/40 hover:text-deep-ocean/70"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-deep-ocean/40 font-sans">
                  {kpi.label}
                </span>
                <span
                  className={`text-xs font-medium ${
                    kpi.up ? "text-green-600" : "text-spot-red"
                  }`}
                >
                  {kpi.change}
                </span>
              </div>
              <div className="text-2xl font-medium text-deep-ocean mb-2">
                {kpi.value}
              </div>
              <Sparkline data={kpi.spark} color={kpi.color} />
            </div>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left (2/3): Trends + Recent results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Trends chart */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-sans text-lg font-medium text-deep-ocean">
                  Pipeline Trends
                </h2>
                <div className="flex items-center gap-4">
                  {trendSeries.map((s) => (
                    <div key={s.name} className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: s.color }}
                      />
                      <span className="text-xs text-deep-ocean/50 font-sans">
                        {s.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <TrendsChart series={trendSeries} labels={trendLabels} />
            </div>

            {/* Recent results */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-sans text-lg font-medium text-deep-ocean">
                  Recent Results
                </h2>
                <button className="text-xs text-coastal-teal font-sans hover:underline cursor-pointer">
                  View all →
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-horizon/30">
                      <th className="text-left px-0 py-3 text-xs uppercase tracking-wider text-deep-ocean/40 font-sans">
                        Client
                      </th>
                      <th className="text-left px-4 py-3 text-xs uppercase tracking-wider text-deep-ocean/40 font-sans">
                        Type
                      </th>
                      <th className="text-left px-4 py-3 text-xs uppercase tracking-wider text-deep-ocean/40 font-sans">
                        Value
                      </th>
                      <th className="text-left px-4 py-3 text-xs uppercase tracking-wider text-deep-ocean/40 font-sans">
                        Status
                      </th>
                      <th className="text-right px-0 py-3 text-xs uppercase tracking-wider text-deep-ocean/40 font-sans">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentResults.map((r) => (
                      <tr
                        key={r.name}
                        className="border-b border-horizon/20 hover:bg-horizon/10 transition"
                      >
                        <td className="px-0 py-3 text-sm text-deep-ocean font-medium">
                          {r.name}
                        </td>
                        <td className="px-4 py-3 text-sm text-deep-ocean/70">
                          {r.type}
                        </td>
                        <td className="px-4 py-3 text-sm text-deep-ocean/70">
                          {r.value}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                              statusStyles[r.status] ||
                              "bg-horizon/40 text-deep-ocean/60"
                            }`}
                          >
                            {r.status}
                          </span>
                        </td>
                        <td className="px-0 py-3 text-sm text-deep-ocean/50 text-right">
                          {r.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right (1/3): Sources + summary */}
          <div className="lg:col-span-1 space-y-6">
            {/* Lead sources */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="font-sans text-lg font-medium text-deep-ocean mb-6">
                Lead Sources
              </h2>
              <div className="space-y-5">
                {sources.map((s) => (
                  <div key={s.source}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-deep-ocean font-sans">
                        {s.source}
                      </span>
                      <span className="text-sm text-deep-ocean/60 font-sans">
                        {s.percentage}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-horizon/30 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${s.color} rounded-full`}
                        style={{ width: `${s.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary card */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="font-sans text-lg font-medium text-deep-ocean mb-6">
                This Quarter
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-deep-ocean/70 font-sans">
                    Revenue closed
                  </span>
                  <span className="text-sm font-medium text-deep-ocean font-sans">
                    $543k
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-deep-ocean/70 font-sans">
                    Avg. project value
                  </span>
                  <span className="text-sm font-medium text-deep-ocean font-sans">
                    $108k
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-deep-ocean/70 font-sans">
                    Avg. time to close
                  </span>
                  <span className="text-sm font-medium text-deep-ocean font-sans">
                    24 days
                  </span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-horizon/30">
                <div className="text-xs text-deep-ocean/40 font-sans">
                  <span className="font-medium text-coastal-teal">+18.4%</span>{" "}
                  revenue growth vs. last quarter
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
