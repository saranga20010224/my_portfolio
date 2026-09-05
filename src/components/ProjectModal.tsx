import React, { useState, useEffect } from 'react';
import { 
  X, 
  Layers, 
  Database, 
  Wrench, 
  TrendingUp, 
  LayoutDashboard, 
  Lightbulb, 
  CheckCircle2, 
  Edit3, 
  Save, 
  AlertCircle,
  Github,
  Award,
  ExternalLink
} from 'lucide-react';
import { ProjectItem } from '../data/projects.ts';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isEditingInsights, setIsEditingInsights] = useState<boolean>(false);
  const [editableInsights, setEditableInsights] = useState<string>('');

  useEffect(() => {
    if (project) {
      setEditableInsights(project.caseStudy.keyInsights);
      setIsEditingInsights(false);
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
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/75 backdrop-blur-md overflow-y-auto"
    >
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slateDark-850 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden flex flex-col z-10 my-auto">
        
        {/* Header Bar */}
        <div className="p-6 pb-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 flex items-start justify-between">
          <div className="pr-6">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {project.category}
            </span>
            <h3 id="project-modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 shrink-0"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content with the exact 6 sections */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7 divide-y divide-slate-100 dark:divide-slate-800">
          
          {/* Dashboard Preview Image (if available) */}
          {project.imageUrl && (
            <div className="pt-1 first:pt-0">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-950 shadow-md">
                <a
                  href={project.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative group/zoom cursor-zoom-in"
                  title="Click to view full-resolution image in new tab"
                >
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} - Power BI Dashboard`}
                    className="w-full h-auto object-contain max-h-[480px] mx-auto"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/zoom:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-900/90 text-white text-xs font-semibold shadow-lg backdrop-blur-xs border border-white/20">
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>View Full Resolution</span>
                    </span>
                  </div>
                </a>
                <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span className="flex items-center space-x-1.5 font-medium text-slate-700 dark:text-slate-300">
                    <LayoutDashboard className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Power BI Interactive Dashboard</span>
                  </span>
                  <a
                    href={project.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:underline font-medium text-[11px]"
                  >
                    <span>Full View</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* 1. Problem */}
          <div className="space-y-3 pt-6 first:pt-0">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center space-x-1.5">
              <AlertCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-1" />
              <span>Problem & Business Objective</span>
            </h4>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {caseStudy.problem}
            </div>
          </div>

          {/* 2. Approach */}
          <div className="pt-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center space-x-1.5">
              <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-1" />
              <span>Approach & Methodology</span>
            </h4>
            <div className="space-y-2">
              {caseStudy.approach.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Tools & Technologies */}
          <div className="pt-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center space-x-1.5">
              <Wrench className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-1" />
              <span>Tools & Technologies</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {caseStudy.toolsAndTech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-xs font-mono font-medium rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* 4. Analysis */}
          <div className="pt-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center space-x-1.5">
              <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-1" />
              <span>Analysis & Diagnostic Procedures</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.analysis.map((a, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-start space-x-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Key Insights */}
          <div className="pt-6 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center space-x-1.5">
                <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-1" />
                <span>Key Insights</span>
              </h4>
              <button
                onClick={() => setIsEditingInsights(!isEditingInsights)}
                className="inline-flex items-center space-x-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700"
              >
                {isEditingInsights ? <Save className="w-3 h-3" /> : <Edit3 className="w-3 h-3" />}
                <span>{isEditingInsights ? 'Save Note' : 'Customize'}</span>
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900">
              {isEditingInsights ? (
                <textarea
                  value={editableInsights}
                  onChange={(e) => setEditableInsights(e.target.value)}
                  className="w-full p-3 text-xs sm:text-sm rounded-xl border border-blue-300 dark:border-blue-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
              ) : (
                <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 italic">
                  "{editableInsights}"
                </p>
              )}
            </div>
          </div>

          {/* 6. Business Value */}
          <div className="pt-6 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center space-x-1.5">
              <Award className="w-4 h-4 text-emerald-500 mr-1" />
              <span>Business Value & Process Impact</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {caseStudy.businessValue}
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 px-6 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center space-x-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
                title="View on GitHub"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
