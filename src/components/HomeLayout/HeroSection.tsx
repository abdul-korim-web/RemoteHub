import React from "react";
import { Search, MapPin, Briefcase, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  searchParams?: {
    role?: string;
    location?: string;
    jobType?: string;
  };
}

export default async function HeroSection({ searchParams }: HeroSectionProps) {
  const currentRole = searchParams?.role || "";
  const currentLocation = searchParams?.location || "";
  const currentJobType = searchParams?.jobType || "all";

  const popularTags = [
    "React",
    "Next.js",
    "Python",
    "DevOps",
    "UI/UX Design",
    "Full Stack",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-slate-950 py-12 md:py-20 lg:py-24 transition-colors duration-200">
      {/* Ambient Backdrop Gradients */}
      <div 
        aria-hidden="true"
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[350px] md:h-[480px] bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none -z-10" 
      />
      <div 
        aria-hidden="true"
        className="absolute top-1/3 -right-32 w-72 md:w-96 h-72 md:h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center">
        
        {/* Live Indicator Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow transition-all duration-200 mb-6 md:mb-8 cursor-default max-w-full">
          <span className="flex h-2 w-2 relative flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 truncate">
            Over 1,200 verified remote roles posted this week
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded-full flex-shrink-0">
            New
          </span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white text-center max-w-4xl tracking-tight leading-tight sm:leading-tight">
          Find Your Next{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
            Remote Opportunity
          </span>
          .
        </h1>

        {/* Hero Description */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 text-center max-w-2xl mt-4 sm:mt-6 mb-8 sm:mb-10 leading-relaxed px-2">
          Discover transparent, high-compensation roles from forward-thinking distributed teams across 50+ countries. Zero borders, zero friction.
        </p>

        {/* Search Console Form (Native HTML Navigation for Server Components) */}
        <div className="w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200/80 dark:border-slate-800 p-3 sm:p-4 mb-6">
          <form 
            action="/jobs" 
            method="GET"
            className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center"
          >
            {/* Field 1: Role / Keyword */}
            <div className="md:col-span-4 flex items-center gap-3 px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800 focus-within:border-blue-500 dark:focus-within:border-blue-500 focus-within:bg-white dark:focus-within:bg-slate-900 transition-colors">
              <Search className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <label 
                  htmlFor="role" 
                  className="block text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-0.5"
                >
                  Role or Keyword
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  defaultValue={currentRole}
                  placeholder="e.g. Senior Frontend Engineer"
                  className="w-full bg-transparent border-0 p-0 text-slate-900 dark:text-white text-sm focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Field 2: Location / Timezone */}
            <div className="md:col-span-3 flex items-center gap-3 px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800 focus-within:border-blue-500 dark:focus-within:border-blue-500 focus-within:bg-white dark:focus-within:bg-slate-900 transition-colors">
              <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <label 
                  htmlFor="location" 
                  className="block text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-0.5"
                >
                  Location / Timezone
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  defaultValue={currentLocation}
                  placeholder="Worldwide, UTC-5, etc."
                  className="w-full bg-transparent border-0 p-0 text-slate-900 dark:text-white text-sm focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Field 3: Job Category Select */}
            <div className="md:col-span-3 flex items-center gap-3 px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800 focus-within:border-blue-500 dark:focus-within:border-blue-500 focus-within:bg-white dark:focus-within:bg-slate-900 transition-colors">
              <Briefcase className="w-5 h-5 text-sky-600 dark:text-sky-400 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <label 
                  htmlFor="jobType" 
                  className="block text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-0.5"
                >
                  Job Type
                </label>
                <select
                  id="jobType"
                  name="jobType"
                  defaultValue={currentJobType}
                  className="w-full bg-transparent border-0 p-0 text-slate-900 dark:text-white text-sm focus:outline-none cursor-pointer"
                >
                  <option value="all" className="dark:bg-slate-900">All Job Types</option>
                  <option value="full-time" className="dark:bg-slate-900">Full Time</option>
                  <option value="contract" className="dark:bg-slate-900">Contract</option>
                  <option value="part-time" className="dark:bg-slate-900">Part Time</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full h-12 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-600/30 active:scale-[0.98] transition-all duration-150"
              >
                <span>Search</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Popular Searches Tags (Direct Navigation Anchors) */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300">Popular:</span>
          {popularTags.map((tag) => (
            <a
              key={tag}
              href={`/jobs?role=${encodeURIComponent(tag)}`}
              className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
            >
              {tag}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}