import React from 'react';
import { GraduationCap, BookOpen, CheckCircle } from 'lucide-react';
import { EDUCATION_DATA } from '../data/education.ts';

export const Education: React.FC = () => {
  const [degree, highSchool] = EDUCATION_DATA;

  return (
    <section id="education" className="py-10 md:py-14 bg-white dark:bg-slateDark-900 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Education
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            Developed a multidisciplinary foundation in <strong className="font-semibold text-slate-800 dark:text-slate-200">statistics, data analysis, computer science, operations research, and mathematics</strong> during my undergraduate studies. Gained hands-on experience in <strong className="font-semibold text-slate-800 dark:text-slate-200">statistical analysis, regression, probability, programming, linear programming, optimization, and real analysis</strong>, while applying theoretical concepts through practical work with tools such as <strong className="font-semibold text-slate-800 dark:text-slate-200">Minitab, RStudio, SPSS, and Octave</strong>. This combination of theoretical knowledge and practical experience strengthened my ability to solve quantitative and analytical problems using data-driven approaches.
          </p>
        </div>

        {/* Visually Dominant University Degree Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-50/90 via-white to-slate-50 dark:from-slateDark-850 dark:via-slateDark-850 dark:to-blue-950/30 border-2 border-blue-500/40 dark:border-blue-500/50 shadow-lg relative overflow-hidden mb-8">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5 mr-1" />
                Three-Year General Degree &bull; Officially Graduated
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight pt-1">
                {degree.degree}
              </h3>
              <div className="flex flex-wrap items-center gap-2 pt-1 text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400">
                <span>{degree.institution}</span>
                <span className="text-slate-300 dark:text-slate-700 font-normal">&bull;</span>
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">Three-Year General Degree</span>
              </div>
            </div>

            <div className="text-right">
              <span className="inline-block px-3 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                {degree.status}
              </span>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 font-semibold">
                {degree.period} &bull; {degree.location}
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed mb-6">
            {degree.description}
          </p>

          {/* Relevant Curriculum Areas */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Relevant Quantitative & Computational Areas
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {degree.relevantAreas?.map((area: string) => (
                <div
                  key={area}
                  className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary Education Card: High School */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slateDark-850 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Secondary Education</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                {highSchool.degree}
              </h4>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                {highSchool.institution}
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">
                {highSchool.period} &bull; {highSchool.location}
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
              Examination Results
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {highSchool.results?.map((res: { subject: string; grade: string }) => (
                <div
                  key={res.subject}
                  className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium"
                >
                  <span className="text-slate-700 dark:text-slate-300">{res.subject}</span>
                  <span className="px-2.5 py-0.5 rounded font-bold font-mono bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    Grade {res.grade}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
