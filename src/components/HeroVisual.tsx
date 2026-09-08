import React from 'react';
import { 
  Briefcase, 
  BarChart3, 
  GraduationCap, 
  CheckCircle2, 
  TrendingUp,
  Layers,
  Sparkles
} from 'lucide-react';

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none flex items-center justify-center py-6">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/15 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-60 h-60 bg-sky-500/15 dark:bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Profile Showcase Card */}
      <div className="relative w-full max-w-md">
        
        {/* Background Decorative Tech Rings */}
        <div className="absolute -inset-4 rounded-full border border-blue-200/40 dark:border-blue-900/30 animate-spin-slow pointer-events-none" />
        <div className="absolute -inset-10 rounded-full border border-dashed border-slate-200/50 dark:border-slate-800/50 pointer-events-none" />

        {/* Central Portrait Container */}
        <div className="relative mx-auto w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-gradient-to-tr from-blue-600 via-sky-400 to-indigo-600 shadow-2xl">
          
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-white dark:border-slateDark-900 shadow-inner relative group">
            <img
              src="./images/profile-new.jpg"
              alt="Saranga Rathnayaka — Business Analyst & Data Analyst"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                // Fallback to clean headshot if path differs
                (e.target as HTMLImageElement).src = './images/saranga-headshot-clean.png';
              }}
            />
            {/* Subtle overlay gradient at the base */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60" />
          </div>

          {/* Active Status Ring Badge */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 text-white text-[11px] font-semibold border border-slate-700 shadow-lg backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Active BA Role</span>
          </div>
        </div>

        {/* Floating Glass Badge 1: Current Role (Top Left) */}
        <div className="absolute -top-3 -left-2 sm:-left-6 p-3.5 rounded-2xl bg-white/90 dark:bg-slateDark-850/90 border border-slate-200/90 dark:border-slate-800 shadow-xl backdrop-blur-md max-w-[210px] sm:max-w-[230px] transition-transform hover:-translate-y-1 duration-200">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 shrink-0">
              <Briefcase className="w-4 h-4" />
            </div>
            <div className="overflow-hidden">
              <span className="block text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400 tracking-wider">
                Current Position
              </span>
              <span className="block text-xs font-extrabold text-slate-900 dark:text-white truncate">
                Trainee Business Analyst
              </span>
              <span className="block text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
                E-Screen Systems
              </span>
            </div>
          </div>
        </div>

        {/* Floating Glass Badge 2: BI & Dashboards (Bottom Left) */}
        <div className="absolute -bottom-4 -left-2 sm:-left-4 p-3.5 rounded-2xl bg-white/90 dark:bg-slateDark-850/90 border border-slate-200/90 dark:border-slate-800 shadow-xl backdrop-blur-md max-w-[200px] transition-transform hover:-translate-y-1 duration-200">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 shrink-0">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-amber-600 dark:text-amber-400 tracking-wider">
                BI & Analytics
              </span>
              <span className="block text-xs font-extrabold text-slate-900 dark:text-white">
                Power BI & DAX
              </span>
              <span className="block text-[11px] font-medium text-slate-500 dark:text-slate-400">
                Cross-Dept KPI Decks
              </span>
            </div>
          </div>
        </div>

        {/* Floating Glass Badge 3: Academic Foundation (Bottom Right) */}
        <div className="absolute -bottom-2 -right-2 sm:-right-6 p-3.5 rounded-2xl bg-white/90 dark:bg-slateDark-850/90 border border-slate-200/90 dark:border-slate-800 shadow-xl backdrop-blur-md max-w-[210px] sm:max-w-[230px] transition-transform hover:-translate-y-1 duration-200">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div className="overflow-hidden">
              <span className="block text-[10px] uppercase font-bold text-teal-600 dark:text-teal-400 tracking-wider">
                Officially Graduated
              </span>
              <span className="block text-xs font-extrabold text-slate-900 dark:text-white truncate">
                BSc in Industrial Statistics
              </span>
              <span className="block text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
                University of Colombo
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
