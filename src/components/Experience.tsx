import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Layers, Building2 } from 'lucide-react';
import { EXPERIENCES, ExperienceItem } from '../data/experience.ts';
import { FadeInUp, StaggerContainer, StaggerItem } from './animations/ScrollAnimation.tsx';

export const Experience: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('escreen');
  const selectedExp = EXPERIENCES.find((e) => e.id === selectedId) || EXPERIENCES[0];

  const currentExperiences = EXPERIENCES.filter((e) => e.isCurrent);
  const previousExperiences = EXPERIENCES.filter((e) => !e.isCurrent);

  return (
    <section id="experience" className="py-10 md:py-14 bg-transparent border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeInUp className="max-w-3xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Career Progression
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Professional Experience
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-2">
            Structured career journey across enterprise business analysis, HR payroll analytics, and manufacturing operations.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Timeline Selector with Explicit Separation */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Group 1: Current Professional Experience */}
            <div>
              <FadeInUp className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-3 px-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Current Role</span>
              </FadeInUp>
              <StaggerContainer>
                {currentExperiences.map((exp) => {
                  const isSelected = exp.id === selectedId;
                  return (
                    <StaggerItem key={exp.id}>
                      <button
                        onClick={() => setSelectedId(exp.id)}
                        className={`w-full text-left p-5 rounded-2xl transition-all duration-200 border relative mb-3 ${
                          isSelected
                            ? 'bg-white dark:bg-slateDark-850 border-blue-500 shadow-md ring-2 ring-blue-500/20'
                            : 'bg-white/80 dark:bg-slateDark-850/80 border-slate-200 dark:border-slate-800 hover:border-blue-400'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                                {exp.period}
                              </span>
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                                Present Role
                              </span>
                            </div>
                            <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                              {exp.role}
                            </h3>
                            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                              {exp.company}
                            </p>
                            <div className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1">
                              <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                          <ChevronRight
                            className={`w-5 h-5 transition-transform ${
                              isSelected ? 'text-blue-600 dark:text-blue-400 translate-x-1' : 'text-slate-400'
                            }`}
                          />
                        </div>
                      </button>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>

            {/* Group 2: Previous Professional Experience */}
            <div>
              <FadeInUp className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 px-1">
                <span>Previous Experience</span>
              </FadeInUp>
              <StaggerContainer className="space-y-3">
                {previousExperiences.map((exp) => {
                  const isSelected = exp.id === selectedId;
                  return (
                    <StaggerItem key={exp.id}>
                      <button
                        onClick={() => setSelectedId(exp.id)}
                        className={`w-full text-left p-5 rounded-2xl transition-all duration-200 border relative ${
                          isSelected
                            ? 'bg-white dark:bg-slateDark-850 border-slate-400 dark:border-slate-600 shadow-md ring-2 ring-slate-400/20'
                            : 'bg-white/80 dark:bg-slateDark-850/80 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                                {exp.period}
                              </span>
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                                Previous Experience
                              </span>
                            </div>
                            <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                              {exp.role}
                            </h3>
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                              {exp.company}
                            </p>
                            <div className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1">
                              <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                          <ChevronRight
                            className={`w-5 h-5 transition-transform ${
                              isSelected ? 'text-blue-600 dark:text-blue-400 translate-x-1' : 'text-slate-400'
                            }`}
                          />
                        </div>
                      </button>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>

          </div>

          {/* Right Column: Detailed Experience View */}
          <div className="lg:col-span-7">
            <FadeInUp className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slateDark-850 border border-slate-200 dark:border-slate-800 shadow-sm">
              
              {/* Header Details */}
              <div className="flex flex-col gap-3 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      {selectedExp.type} Experience
                    </span>
                    {selectedExp.isCurrent ? (
                      <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                        Active Present Role
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 text-[10px] font-medium rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        Previous Role
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{selectedExp.period}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {selectedExp.role}
                  </h3>
                  <div className="text-base font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                    {selectedExp.company}
                    {selectedExp.companySubtitle && (
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400 ml-1.5 italic">
                        : {selectedExp.companySubtitle}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                    <span>{selectedExp.location}</span>
                  </div>
                </div>
              </div>

              {/* Main Focus Tags */}
              <div className="py-5 border-b border-slate-200 dark:border-slate-800">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Main Focus Areas
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.mainFocus.map((focus, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities List */}
              <div className="py-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Key Professional Responsibilities
                </div>
                <div className="space-y-3">
                  {selectedExp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies / Systems Used */}
              <div className="pt-5 border-t border-slate-200 dark:border-slate-800">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Technologies & Systems
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </FadeInUp>
          </div>

        </div>

      </div>
    </section>
  );
};
