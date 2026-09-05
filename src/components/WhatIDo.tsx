import React from 'react';
import { Compass, LineChart, BarChart3, LayoutDashboard, Zap, Layers, Check } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';

export const WhatIDo: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'LineChart':
        return <LineChart className="w-5 h-5 text-sky-500" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-amber-500 dark:text-amber-400" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-5 h-5 text-indigo-500" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-emerald-500" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-rose-500" />;
      default:
        return <Compass className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="what-i-do" className="py-10 md:py-14 bg-slate-50 dark:bg-slateDark-900 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            What I Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Core Competencies
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-2">
            Structured capabilities spanning requirements elicitation, quantitative analytics, enterprise BI, and digital process optimization.
          </p>
        </div>

        {/* 6 Structured Competency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROFILE_DATA.coreCompetencies.map((card) => (
            <div
              key={card.id}
              className="p-6 rounded-3xl bg-white dark:bg-slateDark-850 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center space-x-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(card.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                    {card.title}
                  </h3>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {card.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 mr-2 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-mono text-slate-400">
                Ready for Production Integration
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
