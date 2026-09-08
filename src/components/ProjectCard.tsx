import React from 'react';
import { ExternalLink, BarChart3, ArrowRight, Github, SlidersHorizontal } from 'lucide-react';
import { ProjectItem } from '../data/projects.ts';

interface ProjectCardProps {
  project: ProjectItem;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  const { chartPreview } = project;

  return (
    <div className="rounded-3xl bg-white dark:bg-slateDark-850 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      
      <div>
        {/* Project Thumbnail / Preview Image or Abstract BI Dashboard Preview */}
        {project.imageUrl ? (
          <div 
            onClick={() => onSelectProject(project)}
            className="relative cursor-pointer overflow-hidden border-b border-slate-200/80 dark:border-slate-800 bg-slate-900 group/img aspect-[16/9]"
          >
            <img
              src={project.imageUrl}
              alt={`${project.title} Preview`}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="inline-flex items-center space-x-1.5 text-xs font-semibold text-white bg-blue-600/90 backdrop-blur-xs px-3 py-1.5 rounded-lg shadow-md">
                <span>View {project.filterTags.includes("POWER BI") ? "Dashboard" : "Project"} & Case Study</span>
              </span>
            </div>
            <div className="absolute top-3 right-3">
              <span className="text-[10px] px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-md text-white font-bold uppercase tracking-wider border border-white/20 shadow-sm">
                {project.filterTags.includes("POWER BI") ? "Power BI Dashboard" : project.category.split(" | ")[0]}
              </span>
            </div>
          </div>
        ) : (
          <div className="p-5 bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800 relative">
            {/* Top Bar */}
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-3 pb-2 border-b border-slate-200/60 dark:border-slate-800">
              <span className="font-semibold text-slate-700 dark:text-slate-200 flex items-center space-x-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span className="truncate max-w-[200px]">{chartPreview.chartTitle}</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold uppercase">
                {project.filterTags.includes("POWER BI") ? "Dashboard View" : "Project View"}
              </span>
            </div>

            {/* Abstract Visual Graphic */}
            <div className="h-32 w-full flex flex-col justify-between pt-1">
              {chartPreview.chartType === 'donut' && chartPreview.donutSegments ? (
                <div className="flex items-center justify-center space-x-6 h-full">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#E2E8F0" strokeWidth="3" className="dark:stroke-slate-800" />
                      <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#2563EB" strokeWidth="3.2" strokeDasharray="38, 100" strokeDashoffset="0" />
                      <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#0284C7" strokeWidth="3.2" strokeDasharray="28, 100" strokeDashoffset="-38" />
                      <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#0D9488" strokeWidth="3.2" strokeDasharray="20, 100" strokeDashoffset="-66" />
                      <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#64748B" strokeWidth="3.2" strokeDasharray="14, 100" strokeDashoffset="-86" />
                    </svg>
                    <div className="absolute text-center">
                      <span className="block text-[11px] font-bold text-slate-800 dark:text-slate-200">100%</span>
                      <span className="block text-[8px] text-slate-400">KPI</span>
                    </div>
                  </div>

                  <div className="space-y-1 text-left">
                    {chartPreview.donutSegments.slice(0, 3).map((seg) => (
                      <div key={seg.label} className="flex items-center space-x-2 text-[10px] text-slate-600 dark:text-slate-300">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: seg.color }}></span>
                        <span className="font-medium">{seg.label}:</span>
                        <span className="font-mono text-slate-400">{seg.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-end justify-between space-x-2 h-24 px-2">
                  {chartPreview.bars?.map((bar, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center">
                      <div
                        style={{ height: `${bar.height}%` }}
                        className={`w-full max-w-[28px] ${bar.color || 'bg-blue-600'} rounded-t-sm transition-all duration-300 group-hover:opacity-90`}
                      />
                      <span className="text-[10px] text-slate-400 font-mono mt-1 truncate max-w-[45px]">
                        {bar.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200/50 dark:border-slate-800/60 mt-1">
                <span className="flex items-center space-x-1">
                  <SlidersHorizontal className="w-3 h-3" />
                  <span>{project.filterTags.includes("POWER BI") ? "DAX & Slicers Ready" : "Data Model Overview"}</span>
                </span>
                <span className="italic font-mono">{project.filterTags.includes("POWER BI") ? "Power BI Model" : "System Architecture"}</span>
              </div>
            </div>

          </div>
        )}

        {/* Card Body */}
        <div className="p-6 space-y-4">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-2">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tools.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Buttons (View Details + GitHub) */}
      <div className="p-6 pt-0 flex items-center space-x-3">
        <button
          onClick={() => onSelectProject(project)}
          className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 group-hover:shadow-glow"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 border border-slate-200 dark:border-slate-700 whitespace-nowrap"
            title="View on GitHub"
            aria-label={`View on GitHub: ${project.title}`}
          >
            <Github className="w-3.5 h-3.5" />
            <span>View on GitHub</span>
          </a>
        )}
      </div>

    </div>
  );
};
