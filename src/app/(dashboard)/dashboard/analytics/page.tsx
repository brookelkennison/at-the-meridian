"use client";

import { useState } from "react";

export default function AnalyticsPage() {
  const [timePeriod, setTimePeriod] = useState("30 Days");

  const timePeriods = ["7 Days", "30 Days", "90 Days"];

  const stats = [
    {
      label: "Page Views",
      value: "12,847",
      change: "+22%",
      color: "text-coastal-teal",
    },
    {
      label: "Unique Visitors",
      value: "3,241",
      change: "+18%",
      color: "text-meridian-sky",
    },
    {
      label: "Avg. Session",
      value: "2m 34s",
      change: "+8%",
      color: "text-deep-ocean",
    },
    {
      label: "Bounce Rate",
      value: "38%",
      change: "-5%",
      color: "text-warm-sand",
    },
  ];

  const topPages = [
    { page: "/ (Home)", views: "4,231", bounceRate: "32%" },
    { page: "/services", views: "2,108", bounceRate: "28%" },
    { page: "/portfolio", views: "1,847", bounceRate: "35%" },
    { page: "/blog/custom-booking", views: "1,234", bounceRate: "22%" },
    { page: "/contact", views: "987", bounceRate: "18%" },
  ];

  const trafficSources = [
    { source: "Direct", percentage: 42, color: "bg-coastal-teal" },
    { source: "Google", percentage: 31, color: "bg-meridian-sky" },
    { source: "Instagram", percentage: 15, color: "bg-driftwood" },
    { source: "LinkedIn", percentage: 8, color: "bg-deep-ocean/30" },
    { source: "Other", percentage: 4, color: "bg-horizon" },
  ];

  const conversionFunnel = [
    { step: "Visitors", count: "3,241" },
    { step: "Viewed Services", count: "1,847" },
    { step: "Reached Contact", count: "987" },
    { step: "Submitted Inquiry", count: "38" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-horizon to-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-sans text-xl font-medium text-deep-ocean">
            Analytics
          </h1>

          {/* Time Period Selector */}
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

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-lg p-5 shadow-sm">
              <div className="text-xs uppercase tracking-wider text-deep-ocean/40 font-sans mb-3">
                {stat.label}
              </div>
              <div className="flex items-baseline justify-between">
                <div className={`text-2xl font-medium ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-green-600">
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column (2/3 width) */}
          <div className="col-span-2 space-y-6">
            {/* Traffic Overview */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="font-sans text-lg font-medium text-deep-ocean mb-6">
                Traffic Overview
              </h2>
              <div className="h-64 bg-horizon/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-deep-ocean/20 text-sm font-sans mb-2">
                    Chart visualization would go here
                  </div>
                  <div className="text-xs text-deep-ocean/30 font-sans">
                    Connect Google Analytics or Plausible to see real data
                  </div>
                </div>
              </div>
            </div>

            {/* Top Pages */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="font-sans text-lg font-medium text-deep-ocean mb-6">
                Top Pages
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-horizon/30">
                      <th className="text-left px-0 py-3 text-xs uppercase tracking-wider text-deep-ocean/40 font-sans">
                        Page
                      </th>
                      <th className="text-left px-4 py-3 text-xs uppercase tracking-wider text-deep-ocean/40 font-sans">
                        Views
                      </th>
                      <th className="text-left px-4 py-3 text-xs uppercase tracking-wider text-deep-ocean/40 font-sans">
                        Bounce Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {topPages.map((page) => (
                      <tr
                        key={page.page}
                        className="border-b border-horizon/20 hover:bg-horizon/10 transition"
                      >
                        <td className="px-0 py-3 text-sm text-deep-ocean">
                          {page.page}
                        </td>
                        <td className="px-4 py-3 text-sm text-deep-ocean/70">
                          {page.views}
                        </td>
                        <td className="px-4 py-3 text-sm text-deep-ocean/70">
                          {page.bounceRate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column (1/3 width) */}
          <div className="col-span-1 space-y-6">
            {/* Traffic Sources */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="font-sans text-lg font-medium text-deep-ocean mb-6">
                Traffic Sources
              </h2>
              <div className="space-y-5">
                {trafficSources.map((source) => (
                  <div key={source.source}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-deep-ocean font-sans">
                        {source.source}
                      </span>
                      <span className="text-sm text-deep-ocean/60 font-sans">
                        {source.percentage}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-horizon/30 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${source.color} rounded-full`}
                        style={{ width: `${source.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conversion Funnel */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="font-sans text-lg font-medium text-deep-ocean mb-6">
                Conversion Funnel
              </h2>
              <div className="space-y-4">
                {conversionFunnel.map((item, index) => (
                  <div key={item.step}>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-deep-ocean font-sans">
                        {item.step}
                      </span>
                      <span className="text-sm font-medium text-coastal-teal font-sans">
                        {item.count}
                      </span>
                    </div>
                    {index < conversionFunnel.length - 1 && (
                      <>
                        <div className="h-6 flex items-center justify-center">
                          <div className="text-2xl text-deep-ocean/20">↓</div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-horizon/30">
                <div className="text-xs text-deep-ocean/40 font-sans">
                  <span className="font-medium text-deep-ocean">
                    {(
                      (38 / Number(conversionFunnel[0].count.replace(",", ""))) *
                      100
                    ).toFixed(1)}%
                  </span>{" "}
                  conversion rate from visitors to inquiries
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
