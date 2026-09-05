import React from 'react';
import { 
  BarChart3, 
  Activity, 
  Cpu, 
  CheckCircle2, 
  ChevronRight,
  Briefcase,
  Layers,
  Sparkles
} from 'lucide-react';
import { CURRENT_ROLE_HIGHLIGHTS, CURRENT_ROLE_PIPELINE } from '../data/experience.ts';

export const CurrentRole: React.FC = () => {
  const currentResponsibilities = [
    "Developing and maintaining Power BI dashboards for Finance, Marketing, Production, and other departments.",
    "Monitoring business processes and KPIs through dashboards and reports.",
    "Analyzing departmental data to generate useful business insights.",
    "Working with departments to understand reporting and process-monitoring requirements.",
    "Developing digital solutions to improve accuracy and consistency in production processes.",
    "Identifying opportunities to replace manual processes with digital and data-driven solutions.",
    "Supporting process improvement through workflow and data analysis.",
    "Translating business requirements into practical dashboards, reports, and digital solutions."
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-sky-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-500" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
      default:
        return <BarChart3 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="current-role" className="py-16 md:py-24 bg-white dark:bg-slateDark-900/50 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Live Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 mb-3 animate-pulse-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Active Professional Role</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Current Role
            </h2>
            <p className="text-xl font-bold text-blue-600 dark:text-blue-400 mt-1">
              Trainee Business Analyst &mdash;{' '}
              <span className="text-slate-900 dark:text-white">E Screen Systems</span>
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
              Finance &bull; Marketing &bull; Production
            </span>
          </div>
        </div>

        {/* 4 Highlight Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {CURRENT_ROLE_HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-slateDark-850 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] font-mono uppercase text-slate-400">
                    E Screen Systems
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-800 text-xs font-semibold text-blue-600 dark:text-blue-400">
                {item.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Responsibilities Breakdown */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slateDark-850 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="max-w-3xl mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Core Responsibilities & Scope</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Achievement-oriented execution across business intelligence, process monitoring, and digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentResponsibilities.map((resp, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-start space-x-3"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {resp}
                </p>
              </div>
            ))}
          </div>

          {/* Process Flow Strip */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 text-center">
              Execution Lifecycle
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center">
              {CURRENT_ROLE_PIPELINE.map((stage) => (
                <div
                  key={stage.step}
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800"
                >
                  <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400">
                    {stage.step}
                  </span>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                    {stage.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
