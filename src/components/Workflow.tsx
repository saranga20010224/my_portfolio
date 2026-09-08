import React, { useState } from 'react';
import { 
  AlertCircle,
  Compass, 
  Database, 
  Sliders, 
  TrendingUp, 
  LayoutDashboard, 
  Lightbulb,
  CheckCircle2, 
  Zap,
  ChevronRight,
  ArrowDown
} from 'lucide-react';
import { BUSINESS_ANALYTICS_PROCESS, ProcessStage } from '../data/workflow.ts';

export const Workflow: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<string>('01');

  const getIcon = (name: string) => {
    switch (name) {
      case 'AlertCircle':
        return <AlertCircle className="w-5 h-5 text-rose-500" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-sky-500" />;
      case 'Sliders':
        return <Sliders className="w-5 h-5 text-indigo-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-500" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-5 h-5 text-purple-500" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-yellow-500" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-teal-500" />;
      default:
        return <Compass className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="process" className="py-10 md:py-14 bg-transparent border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            My Analytics & Business Process
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-2">
            I don’t simply create dashboards &mdash; I understand the business problem behind the data, extract rigorous insights, and deploy practical solutions.
          </p>
        </div>

        {/* 9-Step Visual Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {BUSINESS_ANALYTICS_PROCESS.map((stage, idx) => {
            const isSelected = selectedStep === stage.step;
            return (
              <div
                key={stage.step}
                onClick={() => setSelectedStep(stage.step)}
                className={`p-6 rounded-3xl transition-all duration-200 border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-50/50 dark:bg-slateDark-850 border-blue-500 shadow-md ring-1 ring-blue-500/20'
                    : 'bg-slate-50/80 dark:bg-slateDark-850 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs">
                      {getIcon(stage.iconName)}
                    </div>
                    <span className="font-mono text-sm font-extrabold text-blue-600 dark:text-blue-400">
                      STEP {stage.step}
                    </span>
                  </div>

                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    {stage.focusArea}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                    {stage.title}
                  </h3>

                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-0.5 mb-2">
                    {stage.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/70 dark:border-slate-800">
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Key Deliverables
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {stage.deliverables.map((d, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Proposition Callout Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-navy-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
              Business Value Delivered
            </span>
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight">
              Bridging Requirements to Process Improvement
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Each dashboard and analytical inquiry starts with an operational question and concludes with measurable process clarity.
            </p>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shrink-0 transition-colors shadow-sm"
          >
            <span>Explore Applied Projects</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
