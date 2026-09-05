import React from 'react';
import { ArrowRight, Mail, Linkedin, Github, Download, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section
      id="home"
      className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden bi-grid-pattern"
    >
      {/* Background ambient gradient glow blobs (inspired by reference portfolio) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 dark:bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-sky-400/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Current Professional Status Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/70 text-xs font-semibold text-blue-800 dark:text-blue-300 shadow-xs mb-5 animate-pulse-subtle">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="w-2 h-2 -ml-3 rounded-full bg-emerald-500"></span>
          <span>{PROFILE_DATA.currentRoleBadge}</span>
        </div>

        {/* Main Centered Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight sm:leading-tight md:leading-[1.15] max-w-4xl mx-auto">
          Turning Business Problems Into{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 dark:from-blue-400 dark:via-sky-300 dark:to-blue-500 block sm:inline">
            Data-Driven Solutions
          </span>
        </h1>

        {/* Professional Subtitle */}
        <p className="mt-3 text-base sm:text-lg md:text-xl font-bold text-slate-700 dark:text-slate-200 tracking-tight">
          {PROFILE_DATA.roleTitle}
        </p>

        {/* Supporting Description */}
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          {PROFILE_DATA.summary}
        </p>

        {/* Context Highlight Note */}
        <div className="mt-5 inline-flex items-center space-x-2.5 p-3 px-5 rounded-2xl bg-white/80 dark:bg-slateDark-850/80 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 shadow-xs backdrop-blur-sm max-w-2xl mx-auto">
          <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
          <span>{PROFILE_DATA.currentRoleHeroLine}</span>
        </div>

        {/* Call to Action Buttons (Centered Side-by-Side) */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          
          {/* Primary CTA: View My Work */}
          <a
            href="#projects"
            className="inline-flex items-center space-x-2.5 px-8 py-3.5 rounded-2xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-glow transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary CTA: Download Resume */}
          <a
            href={PROFILE_DATA.contact.resumePath}
            download="Saranga_Rathnayaka_CV.pdf"
            className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-750 shadow-xs transition-all duration-200"
          >
            <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Download Resume</span>
          </a>

          {/* Optional CTA: Let's Connect */}
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <span>Let's Connect</span>
          </a>

        </div>

        {/* Social Links Ribbon */}
        <div className="mt-8 pt-5 border-t border-slate-200/70 dark:border-slate-800/80 inline-flex items-center space-x-6 text-slate-500 dark:text-slate-400 text-xs">
          <span className="font-semibold uppercase tracking-wider text-[11px]">Connect:</span>
          
          <div className="flex items-center space-x-3">
            <a
              href={PROFILE_DATA.contact.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-xs"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_DATA.contact.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-xs"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PROFILE_DATA.contact.email}`}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-xs"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <span className="font-mono text-slate-400">&bull; {PROFILE_DATA.contact.location}</span>
        </div>

      </div>
    </section>
  );
};
