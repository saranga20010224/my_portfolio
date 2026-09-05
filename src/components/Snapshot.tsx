import React from 'react';
import { Briefcase, TrendingUp, BarChart3, GraduationCap, ArrowUpRight } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';

export const Snapshot: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="relative z-10 -mt-6 sm:-mt-10 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROFILE_DATA.snapshot.map((item) => (
            <div
              key={item.id}
              className={`p-5 rounded-2xl transition-all duration-200 border ${
                item.highlight
                  ? 'bg-white dark:bg-slateDark-850 border-blue-400/80 dark:border-blue-500/60 shadow-md ring-1 ring-blue-500/20'
                  : 'bg-white/80 dark:bg-slateDark-850/80 border-slate-200/90 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {item.label}
                </span>
                <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80">
                  {getIcon(item.iconName)}
                </div>
              </div>

              <div className="text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {item.value}
              </div>

              {item.subValue && (
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  {item.subValue}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
