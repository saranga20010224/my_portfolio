import React from 'react';
import { 
  BarChart3, 
  Database, 
  FileCode2, 
  Building2, 
  Code2, 
  Layers, 
  Server, 
  Binary, 
  Sheet, 
  Sparkles,
  Check
} from 'lucide-react';
import { SKILL_CATEGORIES, FEATURED_TECH_STACK } from '../data/skills.ts';

export const Skills: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'data-prog':
        return <FileCode2 className="w-5 h-5 text-sky-500" />;
      case 'bi':
        return <BarChart3 className="w-5 h-5 text-amber-500 dark:text-amber-400" />;
      case 'db-erp':
        return <Building2 className="w-5 h-5 text-indigo-500" />;
      case 'data-rep':
        return <Sheet className="w-5 h-5 text-emerald-500" />;
      case 'other':
        return <Code2 className="w-5 h-5 text-blue-500" />;
      default:
        return <BarChart3 className="w-5 h-5 text-blue-600" />;
    }
  };

  const getTechIcon = (name: string) => {
    switch (name) {
      case 'Power BI':
        return <BarChart3 className="w-6 h-6 text-amber-500 dark:text-amber-400" />;
      case 'SQL':
        return <Database className="w-6 h-6 text-blue-500" />;
      case 'Python':
        return <FileCode2 className="w-6 h-6 text-sky-500" />;
      case 'Excel':
        return <Sheet className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'SAP':
        return <Layers className="w-6 h-6 text-indigo-500" />;
      case 'Oracle':
        return <Server className="w-6 h-6 text-rose-500" />;
      case 'SPSS':
        return <Binary className="w-6 h-6 text-teal-500" />;
      default:
        return <BarChart3 className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <section id="skills" className="py-10 md:py-14 bg-slate-50 dark:bg-slateDark-900 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Technical Skills & Tools
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-2">
            Structured technologies categorized by analytical disciplines, enterprise systems, and BI tools.
          </p>
        </div>

        {/* Featured Visual Tech Ribbon */}
        <div className="mb-8 p-5 sm:p-6 rounded-3xl bg-white dark:bg-slateDark-850 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-slate-200/80 dark:border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Primary Analytics Arsenal</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Core technologies applied in day-to-day business analysis and reporting workflows.
              </p>
            </div>
            <div className="mt-2 sm:mt-0">
              <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                Power BI Visually Emphasized
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
            {FEATURED_TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className={`p-4 rounded-2xl flex flex-col justify-between transition-all duration-200 border ${
                  tech.highlight
                    ? 'bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent border-amber-400/80 dark:border-amber-500 shadow-md ring-2 ring-amber-400/30'
                    : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800 hover:border-blue-400'
                }`}
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 w-fit mb-3 shadow-xs">
                    {getTechIcon(tech.name)}
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="font-bold text-sm text-slate-900 dark:text-white">
                      {tech.name}
                    </span>
                    {tech.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    )}
                  </div>
                  <div className="text-[10px] uppercase font-mono text-slate-400 mt-0.5">
                    {tech.category}
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-3 leading-tight">
                  {tech.roleDescription}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Grouped Categories as requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((group) => (
            <div
              key={group.id}
              className="p-6 rounded-3xl bg-white dark:bg-slateDark-850 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                    {getCategoryIcon(group.id)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                      {group.category}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {group.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 hover:bg-white dark:hover:bg-slate-750 transition-colors"
                    >
                      <Check className="w-3 h-3 text-blue-600 dark:text-blue-400 mr-1.5" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
