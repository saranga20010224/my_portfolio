import React, { useEffect } from 'react';
import { X, Download, FileText, Briefcase, GraduationCap, Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';
import { EXPERIENCES } from '../data/experience.ts';
import { EDUCATION_DATA } from '../data/education.ts';
import { CERTIFICATIONS } from '../data/certifications.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/75 backdrop-blur-md overflow-y-auto"
    >
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slateDark-850 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden flex flex-col z-10 my-auto">
        
        {/* Header Strip */}
        <div className="p-5 px-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Saranga Rathnayaka
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Business Analyst &bull; Data Analyst &bull; Business Intelligence
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href={PROFILE_DATA.contact.resumePath}
              download="Saranga_Rathnayaka_CV.pdf"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Structured CV Document Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-700 dark:text-slate-300 text-sm">
          
          {/* Executive Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Saranga Rathnayaka
            </h1>
            <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mt-1">
              Business Analyst | Data Analyst | Business Intelligence
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400 mt-3 font-mono">
              <span>{PROFILE_DATA.contact.email}</span>
              <span>&bull;</span>
              <span>{PROFILE_DATA.contact.phone}</span>
              <span>&bull;</span>
              <span>{PROFILE_DATA.contact.location}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed">
              {PROFILE_DATA.summary}
            </p>
          </div>

          {/* Employment History (Current First) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4 flex items-center space-x-1.5">
              <Briefcase className="w-4 h-4 mr-1" />
              <span>Professional Experience</span>
            </h4>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      {exp.role}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {exp.company} &bull; {exp.location}
                  </div>

                  <ul className="mt-2 space-y-1.5">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-2 flex flex-wrap gap-1">
                    {exp.technologies.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4 flex items-center space-x-1.5">
              <GraduationCap className="w-4 h-4 mr-1" />
              <span>Education</span>
            </h4>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">
                      {edu.degree}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {edu.institution} &bull; {edu.status}
                  </div>
                  {edu.relevantAreas && (
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Key Areas: {edu.relevantAreas.join(', ')}
                    </div>
                  )}
                  {edu.results && (
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
                      Results: {edu.results.map((r) => `${r.subject} (${r.grade})`).join(' | ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3 flex items-center space-x-1.5">
              <Award className="w-4 h-4 mr-1" />
              <span>Certifications</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATIONS.map((c) => (
                <div key={c.id} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="font-bold text-slate-800 dark:text-slate-200 block">{c.title}</span>
                  <span className="text-slate-500 dark:text-slate-400">{c.issuer}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 px-6 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>Target Path: /resume/Saranga_Rathnayaka_CV.pdf</span>
          <a
            href={PROFILE_DATA.contact.resumePath}
            download="Saranga_Rathnayaka_CV.pdf"
            className="inline-flex items-center space-x-1.5 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Save PDF Document</span>
          </a>
        </div>

      </div>
    </div>
  );
};
