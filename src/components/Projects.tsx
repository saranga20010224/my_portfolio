import React, { useState, useMemo } from 'react';
import { Filter, Sparkles, Layers } from 'lucide-react';
import { PROJECTS, PROJECT_CATEGORIES, ProjectFilterCategory, ProjectItem } from '../data/projects.ts';
import { ProjectCard } from './ProjectCard.tsx';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectFilterCategory>('ALL');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'ALL') return PROJECTS;
    return PROJECTS.filter((p) => p.filterTags.includes(selectedCategory));
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-10 md:py-14 bg-white dark:bg-slateDark-900 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Demonstrated Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-2">
              Analytics projects combining business intelligence, statistics, data analysis, and process understanding.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs text-slate-500 dark:text-slate-400 font-mono">
            Showing {filteredProjects.length} of {PROJECTS.length} End-to-End Solutions
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-6 pb-1">
          {PROJECT_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  isSelected
                    ? 'bg-navy-900 dark:bg-blue-600 text-white shadow-sm scale-102'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
