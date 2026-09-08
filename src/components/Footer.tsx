import React from 'react';
import { ArrowUp, Linkedin, Github, Mail, FileText, Download } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950/80 backdrop-blur-md text-slate-400 border-t border-slate-800 text-xs py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-6 border-b border-slate-800">
          
          {/* Identity Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-2 text-white font-bold text-base">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-sm">
                SR
              </div>
              <span>Saranga Rathnayaka</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Business Analyst &bull; Data Analyst. Turning business problems into actionable Power BI dashboards and practical process improvements.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={PROFILE_DATA.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PROFILE_DATA.contact.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE_DATA.contact.email}`}
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                aria-label="Send an email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Reorganized Sitemap Navigation */}
          <div className="md:col-span-4 space-y-2">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] mb-2">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About Me</a>
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Professional Credentials & Resume CTAs */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Saranga Rathnayaka
            </div>
            <p className="text-slate-400">
              Trainee Business Analyst at E-Screen Systems.
            </p>
            <div className="pt-1 flex flex-col space-y-2">
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center space-x-1.5 text-blue-400 hover:text-blue-300 font-medium"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Resume</span>
              </button>
              <a
                href={PROFILE_DATA.contact.resumePath}
                download="Saranga_Rathnayaka_CV.pdf"
                className="inline-flex items-center space-x-1.5 text-slate-300 hover:text-white font-medium"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span>&copy; {new Date().getFullYear()} Saranga Rathnayaka. Built for Business Analysis & Intelligence.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
