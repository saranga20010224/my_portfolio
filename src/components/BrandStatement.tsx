import React from 'react';
import { Briefcase, Database, Cpu, TrendingUp } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';

export const BrandStatement: React.FC = () => {
  const { quote, supportingText, pillars } = PROFILE_DATA.brandStatement;

  const pillarIcons = [
    <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    <Database className="w-5 h-5 text-sky-500" />,
    <Cpu className="w-5 h-5 text-indigo-500" />,
    <TrendingUp className="w-5 h-5 text-emerald-500" />
  ];

  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-navy-950 text-white">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-950/80 border border-blue-800/80 mb-6">
          Core Value Proposition
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight sm:leading-tight">
          "{quote}"
        </h2>

        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          {supportingText}
        </p>

        {/* 4 Interactive Pillars */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.label}
              className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 transition-all duration-200"
            >
              <div className="p-2.5 rounded-lg bg-slate-800/80 inline-block mb-3">
                {pillarIcons[idx]}
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">
                {pillar.label}
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-normal">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
