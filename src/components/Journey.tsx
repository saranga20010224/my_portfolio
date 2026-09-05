import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Activity, 
  BarChart3, 
  BookOpen, 
  ArrowDown, 
  Sparkles,
  CheckCircle
} from 'lucide-react';
import { CAREER_JOURNEY } from '../data/journey.ts';

export const Journey: React.FC = () => {
  const getIcon = (name: string, isCurrent?: boolean) => {
    if (isCurrent) return <Briefcase className="w-5 h-5 text-white" />;
    switch (name) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-slate-600 dark:text-slate-300" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-sky-500" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-indigo-500" />;
      default:
        return <Briefcase className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="journey" className="py-10 md:py-14 bg-slate-50 dark:bg-slateDark-900 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Chronology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Professional Journey
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-2">
            The evolution from rigorous mathematical foundations to enterprise data analytics and business intelligence leadership.
          </p>
        </div>

        {/* Vertical Connected Journey Timeline */}
        <div className="relative">
          {/* Central connecting vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

          <div className="space-y-10">
            {CAREER_JOURNEY.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const isCurrent = step.isCurrent;

              return (
                <div
                  key={step.year}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Badge Node (Center) */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-md transition-transform hover:scale-110 ${
                        isCurrent
                          ? 'bg-blue-600 ring-4 ring-blue-100 dark:ring-blue-900'
                          : 'bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700'
                      }`}
                    >
                      {getIcon(step.iconName, isCurrent)}
                    </div>
                  </div>

                  {/* Content Card (Left or Right on desktop) */}
                  <div className="ml-14 sm:ml-0 sm:w-1/2 sm:px-8">
                    <div
                      className={`p-6 rounded-2xl transition-all border ${
                        isCurrent
                          ? 'bg-white dark:bg-slateDark-850 border-blue-400 dark:border-blue-500 shadow-lg ring-1 ring-blue-500/20'
                          : 'bg-white dark:bg-slateDark-850 border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded-full ${
                            isCurrent
                              ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                              : 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                          }`}
                        >
                          {step.year}
                        </span>

                        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                          {step.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                        {step.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                        {step.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[11px] font-medium rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
