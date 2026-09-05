import React from 'react';
import { Award, ExternalLink, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';
import { CERTIFICATIONS } from '../data/certifications.ts';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-10 md:py-14 bg-slate-50 dark:bg-slateDark-900 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Continuous Development
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Certifications & Professional Learning
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-2">
            Targeted industry certifications reinforcing business analysis principles, SQL databases, Python programming, and Power BI.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className={`p-6 rounded-2xl bg-white dark:bg-slateDark-850 border transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between ${
                cert.isHighlighted
                  ? 'border-blue-200 dark:border-blue-900/60 ring-1 ring-blue-500/10'
                  : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {cert.domain}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 mt-1">
                  Issued by: <span className="text-slate-900 dark:text-white">{cert.issuer}</span>
                </p>
              </div>

              {/* Ready for verification link slot */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  Completed
                </span>

                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center space-x-1"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-slate-400 dark:text-slate-500 italic text-[11px]">
                    Verified Credential
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
