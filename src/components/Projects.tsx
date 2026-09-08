import React, { useState, useMemo } from 'react';
import { Filter, Sparkles, Layers } from 'lucide-react';
import { PROJECTS, PROJECT_CATEGORIES, ProjectFilterCategory, ProjectItem } from '../data/projects.ts';
import { ProjectCard } from './ProjectCard.tsx';
import { FadeInUp, StaggerContainer, StaggerItem } from './animations/ScrollAnimation.tsx';

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
    <section id="projects" className="py-10 md:py-14 bg-transparent border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeInUp className="flex flex-col md:flex-row md:items-end justify-between mb-6">
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
        </FadeInUp>



        {/* Project Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard
                project={project}
                onSelectProject={onSelectProject}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
