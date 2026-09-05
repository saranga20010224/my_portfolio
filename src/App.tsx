import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { WhatIDo } from './components/WhatIDo.tsx';
import { Experience } from './components/Experience.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import { Certifications } from './components/Certifications.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { ProjectModal } from './components/ProjectModal.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';
import { ProjectItem } from './data/projects.ts';

export const App: React.FC = () => {
  // Theme state with localStorage persistence
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Modals state
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slateDark-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white">
      
      {/* 1. Header & Reorganized Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResumeModal={() => setIsResumeOpen(true)}
      />

      <main>
        {/* 1. HOME / HERO */}
        <Hero onOpenResumeModal={() => setIsResumeOpen(true)} />

        {/* 2. ABOUT ME */}
        <About />

        {/* 3. WHAT I DO / CORE COMPETENCIES */}
        <WhatIDo />

        {/* 4. PROFESSIONAL EXPERIENCE */}
        <Experience />

        {/* 6. TECHNICAL SKILLS & TOOLS */}
        <Skills />

        {/* 6. FEATURED PROJECTS */}
        <Projects onSelectProject={(p) => setSelectedProject(p)} />

        {/* 7. CERTIFICATIONS */}
        <Certifications />

        {/* 9. CONTACT */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResumeModal={() => setIsResumeOpen(true)} />

      {/* Modals: Case Study & Resume */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
};

export default App;
