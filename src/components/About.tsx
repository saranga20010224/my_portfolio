import React from 'react';
import { 
  Compass, 
  LineChart, 
  LayoutDashboard, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase,
  BookOpen,
  CheckCircle
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';
import { EDUCATION_DATA } from '../data/education.ts';
import { FadeInUp, StaggerContainer, StaggerItem } from './animations/ScrollAnimation.tsx';

export const About: React.FC = () => {
  const { heading, subheading, pillars, myJourney } = PROFILE_DATA.aboutMe;
  const [degree, highSchool] = EDUCATION_DATA;

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'LineChart':
        return <LineChart className="w-6 h-6 text-sky-500" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-6 h-6 text-indigo-500" />;
      default:
        return <Compass className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="about" className="py-10 md:py-14 border-t border-slate-200/80 dark:border-slate-800/80 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeInUp className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Professional Profile
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            {heading}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-2">
            {subheading} &mdash; Bridging requirements, empirical analytics, and actionable BI dashboards.
          </p>
        </FadeInUp>

        {/* 3 Structured Professional Identity Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {pillars.map((pillar) => (
            <StaggerItem
              key={pillar.title}
              className="p-6 sm:p-7 rounded-3xl bg-slate-50/80 dark:bg-slateDark-850 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-5 shadow-xs">
                  {getPillarIcon(pillar.iconName)}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 mb-5 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                    Focus Areas
                  </div>
                  <ul className="space-y-2">
                    {pillar.points.map((pt, i) => (
                      <li key={i} className="flex items-start text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* "About My Journey" Structured Block with Profile Photo */}
        <FadeInUp className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slateDark-850 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Background & Trajectory</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {myJourney.title}
              </h3>

              <div className="space-y-3 mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {myJourney.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Quick Summary Strip */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center space-x-2 font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>BSc in Industrial Statistics and Mathematical Finance, University of Colombo</span>
                </div>
                <div className="flex items-center space-x-2 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Trainee Business Analyst &bull; E-Screen Systems</span>
                </div>
              </div>
            </div>

            {/* Profile Photo Thumbnail */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl p-1.5 bg-gradient-to-tr from-blue-600 to-sky-400 shadow-xl">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-900 border-2 border-white dark:border-slate-800">
                  <img
                    src="/images/profile-new.jpg"
                    alt="Saranga Rathnayaka"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/saranga-headshot-clean.png';
                    }}
                  />
                </div>
              </div>
            </div>

          </div>
        </FadeInUp>

        {/* Education & Academic Background (Placed after About My Journey) */}
        <div id="education" className="mt-8 pt-8 border-t border-slate-200/80 dark:border-slate-800">
          <FadeInUp className="max-w-4xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Academic Background
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Education
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
              Developed a multidisciplinary foundation in <strong className="font-semibold text-slate-800 dark:text-slate-200">statistics, data analysis, computer science, operations research, and mathematics</strong> during my undergraduate studies. Gained hands-on experience in <strong className="font-semibold text-slate-800 dark:text-slate-200">statistical analysis, regression, probability, programming, linear programming, optimization, and real analysis</strong>, while applying theoretical concepts through practical work with tools such as <strong className="font-semibold text-slate-800 dark:text-slate-200">Minitab, RStudio, SPSS, and Octave</strong>. This combination of theoretical knowledge and practical experience strengthened my ability to solve quantitative and analytical problems using data-driven approaches.
            </p>
          </FadeInUp>

          {/* Visually Dominant University Degree Card */}
          <FadeInUp className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-50/90 via-white to-slate-50 dark:from-slateDark-850 dark:via-slateDark-850 dark:to-blue-950/30 border-2 border-blue-500/40 dark:border-blue-500/50 shadow-lg relative overflow-hidden mb-6">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="space-y-1">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
                  <GraduationCap className="w-3.5 h-3.5 mr-1" />
                  Bachelor's Degree &bull; Officially Graduated
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight pt-1">
                  {degree.degree}
                </h4>
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  {degree.institution}
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
          </FadeInUp>

          {/* Secondary Education Card: High School */}
          <FadeInUp className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slateDark-850 border border-slate-200 dark:border-slate-800 shadow-sm">
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
          </FadeInUp>
        </div>

      </div>
    </section>
  );
};

