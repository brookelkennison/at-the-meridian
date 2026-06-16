"use client";

import { useState } from "react";

export default function InquiriesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const inquiries = [
    {
      id: 1,
      name: "Sarah Mitchell",
      company: "Oceanview Properties",
      email: "sarah@oceanview.com",
      projectType: "New Build",
      budget: "$50k-$100k",
      timeline: "1-3 Months",
      status: "New",
      date: "Mar 27",
    },
    {
      id: 2,
      name: "James Chen",
      company: "Summit Advisory",
      email: "james@summitadv.com",
      projectType: "Redesign",
      budget: "$25k-$50k",
      timeline: "3-6 Months",
      status: "Contacted",
      date: "Mar 25",
    },
    {
      id: 3,
      name: "Lisa Park",
      company: "Coastal Living Co",
      email: "lisa@coastalliving.com",
      projectType: "Platform",
      budget: "$100k+",
      timeline: "1-3 Months",
      status: "Qualified",
      date: "Mar 23",
    },
    {
      id: 4,
      name: "David Torres",
      company: "Harbor Group",
      email: "david@harborgroup.com",
      projectType: "Integration",
      budget: "$25k-$50k",
      timeline: "Flexible",
      status: "New",
      date: "Mar 22",
    },
    {
      id: 5,
      name: "Maria Santos",
      company: "Tide & Table",
      email: "maria@tideandtable.com",
      projectType: "New Build",
      budget: "$50k-$100k",
      timeline: "ASAP",
      status: "Contacted",
      date: "Mar 20",
    },
    {
      id: 6,
      name: "Tom Bradley",
      company: "Meridian Wellness",
      email: "tom@mwellness.com",
      projectType: "Platform",
      budget: "$50k-$100k",
      timeline: "3-6 Months",
      status: "Qualified",
      date: "Mar 18",
    },
    {
      id: 7,
      name: "Anna Kim",
      company: "Coastline Adventures",
      email: "anna@coastlinetours.com",
      projectType: "New Build",
      budget: "$25k-$50k",
      timeline: "1-3 Months",
      status: "Closed",
      date: "Mar 15",
    },
    {
      id: 8,
      name: "Robert Hayes",
      company: "Pacific Realty",
      email: "robert@pacificrealty.com",
      projectType: "Redesign",
      budget: "$10k-$25k",
      timeline: "Flexible",
      status: "New",
      date: "Mar 12",
    },
  ];

  const filterTabs = ["All", "New", "Contacted", "Qualified", "Closed"];

  const filteredInquiries = inquiries.filter(
    (inquiry) => activeFilter === "All" || inquiry.status === activeFilter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "bg-coastal-teal/20 text-coastal-teal";
      case "Contacted":
        return "bg-meridian-sky/30 text-deep-ocean";
      case "Qualified":
        return "bg-green-100 text-green-700";
      case "Closed":
        return "bg-warm-sand text-deep-ocean/60";
      default:
        return "bg-horizon/30 text-deep-ocean";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-horizon to-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-sans text-xl font-medium text-deep-ocean">
            Inquiries
          </h1>

          {/* Filter Tabs */}
          <div className="flex gap-1 bg-horizon/50 rounded-lg p-1">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-3 py-1.5 rounded-md text-xs font-sans cursor-pointer transition ${
                  activeFilter === tab
                    ? "bg-white shadow-sm text-deep-ocean"
                    : "text-deep-ocean/40 hover:text-deep-ocean/70"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-xs uppercase tracking-wider text-deep-ocean/40 font-sans mb-2">
              Total
            </div>
            <div className="text-2xl font-medium text-deep-ocean">8</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-xs uppercase tracking-wider text-deep-ocean/40 font-sans mb-2">
              New
            </div>
            <div className="text-2xl font-medium text-coastal-teal">3</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-xs uppercase tracking-wider text-deep-ocean/40 font-sans mb-2">
              Qualified
            </div>
            <div className="text-2xl font-medium text-green-600">2</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-xs uppercase tracking-wider text-deep-ocean/40 font-sans mb-2">
              This Month
            </div>
            <div className="text-2xl font-medium text-deep-ocean">6</div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden w-full">
          <table className="w-full">
            <thead>
              <tr className="bg-horizon/30 border-b border-horizon/50">
                <th className="px-6 py-4 text-[11px] uppercase tracking-wider text-deep-ocean/40 font-sans text-left">
                  Name
                </th>
                <th className="px-6 py-4 text-[11px] uppercase tracking-wider text-deep-ocean/40 font-sans text-left">
                  Company
                </th>
                <th className="px-6 py-4 text-[11px] uppercase tracking-wider text-deep-ocean/40 font-sans text-left">
                  Email
                </th>
                <th className="px-6 py-4 text-[11px] uppercase tracking-wider text-deep-ocean/40 font-sans text-left">
                  Project Type
                </th>
                <th className="px-6 py-4 text-[11px] uppercase tracking-wider text-deep-ocean/40 font-sans text-left">
                  Budget
                </th>
                <th className="px-6 py-4 text-[11px] uppercase tracking-wider text-deep-ocean/40 font-sans text-left">
                  Timeline
                </th>
                <th className="px-6 py-4 text-[11px] uppercase tracking-wider text-deep-ocean/40 font-sans text-left">
                  Status
                </th>
                <th className="px-6 py-4 text-[11px] uppercase tracking-wider text-deep-ocean/40 font-sans text-left">
                  Date
                </th>
                <th className="px-6 py-4 text-[11px] uppercase tracking-wider text-deep-ocean/40 font-sans text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredInquiries.map((inquiry) => (
                <tr
                  key={inquiry.id}
                  className="border-b border-horizon/30 hover:bg-horizon/20 transition"
                >
                  <td className="px-6 py-4 text-sm text-deep-ocean">
                    {inquiry.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-deep-ocean/70">
                    {inquiry.company}
                  </td>
                  <td className="px-6 py-4 text-sm text-deep-ocean/60">
                    {inquiry.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-deep-ocean">
                    {inquiry.projectType}
                  </td>
                  <td className="px-6 py-4 text-sm text-deep-ocean/70">
                    {inquiry.budget}
                  </td>
                  <td className="px-6 py-4 text-sm text-deep-ocean/70">
                    {inquiry.timeline}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(inquiry.status)}`}
                    >
                      {inquiry.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-deep-ocean/70">
                    {inquiry.date}
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-coastal-teal text-xs hover:underline cursor-pointer">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
