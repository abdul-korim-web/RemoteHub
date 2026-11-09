import React from "react";
import { CheckCircle2, Zap, Radio } from "lucide-react";

interface JobTile {
  id: string;
  badge: string;
  badgeStyle: "verified" | "hot";
  title: string;
  description: string;
  salary: string;
  location: string;
  company: string;
  featured?: boolean;
}

const JOB_TILES: JobTile[] = [
  {
    id: "1",
    badge: "Verified Role",
    badgeStyle: "verified",
    title: "Staff Cloud Architect",
    description: "Distributed Systems • Go / AWS",
    salary: "$185k - $220k",
    location: "Worldwide (Anywhere)",
    company: "Automattic",
  },
  {
    id: "2",
    badge: "Hot Role • 4 Applicants",
    badgeStyle: "hot",
    title: "Lead Design Systems",
    description: "Figma • Tokens • React Primitives",
    salary: "$155k - $190k",
    location: "US & EU Timezones",
    company: "Vercel Network",
    featured: true,
  },
  {
    id: "3",
    badge: "Verified Role",
    badgeStyle: "verified",
    title: "Principal AI Engineer",
    description: "LLM Routing • Python • PyTorch",
    salary: "$210k - $260k",
    location: "Sync: 4h overlap UTC",
    company: "GitLab Ecosystem",
  },
];

export default async function LiveMatchesCanvas() {
  return (
   <div className="bg-white dark:bg-slate-950">
     <div className="relative w-full max-w-5xl mx-auto mt-0 md:mt-0 pt-4 px-4 sm:px-6 lg:px-0 ">
      
      {/* 1. Floating Status Card - Left (Hidden on Mobile) */}
      <div 
        className="hidden lg:flex items-center gap-3 absolute -top-4 -left-6 z-20 bg-white dark:bg-slate-900 p-3 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800 animate-bounce"
        style={{ animationDuration: "4s" }}
      >
        <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold flex-shrink-0">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs font-bold text-slate-900 dark:text-white">Offer Signed! 🚀</p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">Lead AI Eng • $190,000/yr</p>
        </div>
      </div>

      {/* 2. Floating Status Card - Right (Hidden on Mobile) */}
      <div className="hidden lg:flex items-center gap-3 absolute top-1/2 -right-8 z-20 bg-white dark:bg-slate-900 p-3 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800">
        <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold flex-shrink-0">
          <Zap className="w-5 h-5 fill-current" />
        </div>
        <div>
          <p className="text-xs font-bold text-slate-900 dark:text-white">Direct Apply</p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">Response avg: &lt; 48 hours</p>
        </div>
      </div>

      {/* 3. Central Interactive Canvas Interface */}
      <div className="relative bg-slate-900 dark:bg-slate-950 rounded-3xl p-5 sm:p-8 text-white shadow-2xl overflow-hidden border border-slate-800">
        
        {/* Window Top Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 mb-6 border-b border-slate-800 gap-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-mono text-slate-400 ml-2 truncate">
              remotehub.mesh.network/live-matches
            </span>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800/50 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              3,412 Candidates Active
            </span>
          </div>
        </div>

        {/* 4. Responsive Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {JOB_TILES.map((tile) => (
            <div
              key={tile.id}
              className={`rounded-2xl p-4 flex flex-col justify-between transition-all duration-200 ${
                tile.featured
                  ? "bg-blue-950/40 border-2 border-blue-500/40 shadow-lg shadow-blue-500/10"
                  : "bg-slate-800/40 hover:bg-slate-800/60 border border-slate-800"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <span
                    className={`text-[10px] uppercase tracking-wider font-bold block truncate ${
                      tile.badgeStyle === "hot"
                        ? "text-emerald-400"
                        : "text-slate-400"
                    }`}
                  >
                    {tile.badge}
                  </span>
                  <h4 className="text-base font-bold text-white mt-1 truncate">
                    {tile.title}
                  </h4>
                  <p className="text-xs text-slate-400 truncate mt-0.5">
                    {tile.description}
                  </p>
                </div>
                <span className="px-2 py-1 bg-emerald-950/60 text-emerald-300 border border-emerald-800/40 rounded-md text-[11px] font-bold flex-shrink-0">
                  {tile.salary}
                </span>
              </div>

              <div className="flex items-center justify-between mt-6 pt-3 border-t border-slate-800/80">
                <span className="text-xs text-slate-400 truncate max-w-[55%]">
                  {tile.location}
                </span>
                <span className="text-xs font-bold text-blue-400 truncate">
                  {tile.company}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
   </div>
  );
}