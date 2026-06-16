"use client";

import { useState } from "react";

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const posts = [
    {
      id: 1,
      title: "Why Your Business Needs a Custom Booking Platform",
      category: "Technology",
      date: "Mar 15",
      status: "Published",
    },
    {
      id: 2,
      title: "The Real Cost of a Cheap Website",
      category: "Strategy",
      date: "Mar 8",
      status: "Published",
    },
    {
      id: 3,
      title: "What a Tech Stack Actually Means",
      category: "Technology",
      date: "Feb 28",
      status: "Draft",
    },
    {
      id: 4,
      title: "Conversion Rate Optimization: Beyond the Basics",
      category: "Strategy",
      date: "Feb 20",
      status: "Published",
    },
    {
      id: 5,
      title: "Our Build Process: 7 Weeks",
      category: "Process",
      date: "Feb 12",
      status: "Published",
    },
    {
      id: 6,
      title: "Why We Build on Next.js and Payload",
      category: "Insights",
      date: "Feb 5",
      status: "Published",
    },
    {
      id: 7,
      title: "Choosing the Right Booking Platform",
      category: "Technology",
      date: "Jan 30",
      status: "Draft",
    },
    {
      id: 8,
      title: "2026 Web Technology Trends",
      category: "Insights",
      date: "Jan 22",
      status: "Draft",
    },
  ];

  const filterTabs = ["All", "Published", "Draft"];

  const filteredPosts = posts.filter(
    (post) => activeFilter === "All" || post.status === activeFilter
  );

  const totalPosts = posts.length;
  const publishedPosts = posts.filter((p) => p.status === "Published").length;
  const draftPosts = posts.filter((p) => p.status === "Draft").length;
  const thisMonthPosts = posts.filter((p) => p.date.startsWith("Mar")).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-horizon to-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-sans text-xl font-medium text-deep-ocean">
            Blog Posts
          </h1>
          <button className="bg-coastal-teal text-white text-xs px-4 py-2 rounded-lg hover:bg-coastal-teal/90 transition cursor-pointer font-sans">
            New Post
          </button>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-xs uppercase tracking-wider text-deep-ocean/40 font-sans mb-2">
              Total Posts
            </div>
            <div className="text-2xl font-medium text-deep-ocean">{totalPosts}</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-xs uppercase tracking-wider text-deep-ocean/40 font-sans mb-2">
              Published
            </div>
            <div className="text-2xl font-medium text-green-600">
              {publishedPosts}
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-xs uppercase tracking-wider text-deep-ocean/40 font-sans mb-2">
              Drafts
            </div>
            <div className="text-2xl font-medium text-amber-600">{draftPosts}</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-xs uppercase tracking-wider text-deep-ocean/40 font-sans mb-2">
              This Month
            </div>
            <div className="text-2xl font-medium text-deep-ocean">
              {thisMonthPosts}
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-1 bg-horizon/50 rounded-lg p-1 mb-6 w-fit">
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

        {/* Post Cards List */}
        <div className="space-y-3">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl p-5 shadow-sm flex items-center justify-between hover:shadow-md transition"
            >
              {/* Left Content */}
              <div className="flex items-center gap-4 flex-1">
                {/* Status Dot */}
                <div
                  className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                    post.status === "Published"
                      ? "bg-green-500"
                      : "bg-amber-400"
                  }`}
                />
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-sans text-sm font-medium text-deep-ocean truncate">
                    {post.title}
                  </h3>
                  <div className="text-xs text-deep-ocean/40 font-sans mt-1">
                    {post.category} — {post.date}
                  </div>
                </div>
              </div>

              {/* Right Actions */}
              <div className="flex gap-2 ml-4 flex-shrink-0">
                <button className="text-xs text-coastal-teal hover:underline cursor-pointer font-sans">
                  Edit
                </button>
                <button className="text-xs text-deep-ocean/40 hover:text-deep-ocean cursor-pointer font-sans">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
