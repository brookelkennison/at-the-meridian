"use client";


export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      clientName: "Oceanview Properties",
      title: "Coastal Rentals Platform",
      status: "Build",
      week: 4,
      totalWeeks: 7,
      percentage: 57,
      startDate: "Feb 24",
      budget: "$75k",
      techStack: ["Next.js", "Payload", "MongoDB"],
    },
    {
      id: 2,
      clientName: "Summit Advisory",
      title: "Website Redesign",
      status: "Review",
      week: 6,
      totalWeeks: 7,
      percentage: 85,
      startDate: "Feb 10",
      budget: "$35k",
      techStack: ["Next.js", "Tailwind"],
    },
    {
      id: 3,
      clientName: "Tide & Table",
      title: "Restaurant Platform",
      status: "Design",
      week: 2,
      totalWeeks: 7,
      percentage: 28,
      startDate: "Mar 17",
      budget: "$90k",
      techStack: ["Next.js", "Payload", "Stripe"],
    },
    {
      id: 4,
      clientName: "Harbor Group",
      title: "Booking System",
      status: "Discovery",
      week: 1,
      totalWeeks: 7,
      percentage: 14,
      startDate: "Mar 24",
      budget: "$60k",
      techStack: ["Next.js", "Payload"],
    },
    {
      id: 5,
      clientName: "Meridian Wellness",
      title: "Wellness Platform",
      status: "Launched",
      week: 7,
      totalWeeks: 7,
      percentage: 100,
      startDate: "Jan 6",
      budget: "$80k",
      techStack: ["Next.js", "Payload", "Stripe"],
    },
    {
      id: 6,
      clientName: "Pacific Realty",
      title: "Property Portal",
      status: "Build",
      week: 5,
      totalWeeks: 7,
      percentage: 71,
      startDate: "Feb 17",
      budget: "$55k",
      techStack: ["Next.js", "MongoDB"],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Discovery":
        return "bg-warm-sand text-deep-ocean/60";
      case "Design":
        return "bg-meridian-sky text-deep-ocean";
      case "Build":
        return "bg-coastal-teal/10 text-coastal-teal";
      case "Review":
        return "bg-amber-50 text-amber-600";
      case "Launched":
        return "bg-green-50 text-green-600";
      default:
        return "bg-horizon text-deep-ocean/40";
    }
  };

  const getProgressBarColor = (status: string) => {
    switch (status) {
      case "Discovery":
        return "bg-warm-sand";
      case "Design":
        return "bg-meridian-sky";
      case "Build":
        return "bg-coastal-teal";
      case "Review":
        return "bg-amber-400";
      case "Launched":
        return "bg-green-500";
      default:
        return "bg-coastal-teal";
    }
  };

  const getWeekBlockColor = (index: number, currentWeek: number) => {
    if (index < currentWeek - 1) {
      return "bg-coastal-teal/20";
    } else if (index === currentWeek - 1) {
      return "bg-coastal-teal animate-pulse";
    } else {
      return "bg-horizon/50";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-horizon to-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-sans text-xl font-medium text-deep-ocean">
            Projects
          </h1>
          <button className="bg-coastal-teal text-white text-xs px-4 py-2 rounded-lg hover:bg-coastal-teal/90 transition cursor-pointer font-sans">
            New Project
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Header Row */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-coastal-teal font-sans mb-2">
                    {project.clientName}
                  </div>
                  <h2 className="font-sans font-medium text-lg text-deep-ocean">
                    {project.title}
                  </h2>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(project.status)}`}
                >
                  {project.status}
                </span>
              </div>

              {/* Progress Info and Bar */}
              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-sans text-deep-ocean/60">
                    Week {project.week} of {project.totalWeeks}
                  </span>
                  <span className="text-xs font-sans text-deep-ocean font-medium">
                    {project.percentage}%
                  </span>
                </div>
                <div className="w-full h-2 bg-horizon rounded-full overflow-hidden">
                  <div
                    className={`h-full ${getProgressBarColor(project.status)} rounded-full transition-all duration-300`}
                    style={{ width: `${project.percentage}%` }}
                  />
                </div>
              </div>

              {/* Timeline Weeks */}
              <div className="mt-6">
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {Array.from({ length: project.totalWeeks }).map(
                    (_, index) => (
                      <div
                        key={index}
                        className={`w-full h-8 rounded-md ${getWeekBlockColor(index, project.week)} transition`}
                      />
                    )
                  )}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: project.totalWeeks }).map(
                    (_, index) => (
                      <div
                        key={`label-${index}`}
                        className="text-[10px] text-deep-ocean/30 text-center font-sans"
                      >
                        W{index + 1}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Details Row */}
              <div className="mt-6 flex gap-8 flex-wrap">
                <div>
                  <div className="text-xs uppercase tracking-wider text-deep-ocean/40 font-sans mb-1">
                    Start Date
                  </div>
                  <div className="text-sm font-sans text-deep-ocean">
                    {project.startDate}
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-deep-ocean/40 font-sans mb-1">
                    Budget
                  </div>
                  <div className="text-sm font-sans text-deep-ocean">
                    {project.budget}
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-deep-ocean/40 font-sans mb-1">
                    Tech Stack
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-horizon/30 text-deep-ocean/70 px-2 py-1 rounded font-sans"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
