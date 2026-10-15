import React from 'react';
import { FileText, BookOpen, Sparkles, GraduationCap } from 'lucide-react';

interface Props {
  onNavigateBuilder: () => void;
  onOpenDocs: () => void;
}

export const Footer: React.FC<Props> = ({ onNavigateBuilder, onOpenDocs }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 no-print mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Project Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-extrabold text-base">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <FileText className="w-4 h-4" />
              </div>
              <span>ResumeBuilder</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              A comprehensive Web-Based Application for Creating Professional Resumes. Developed as an Academic Engineering Demonstration Project.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span>Academic Engineering Mini-Project</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Application</h4>
            <ul className="text-xs space-y-1.5">
              <li>
                <button
                  type="button"
                  onClick={onNavigateBuilder}
                  className="hover:text-white transition-colors"
                >
                  Resume Builder Workspace
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenDocs}
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <BookOpen className="w-3 h-3 text-blue-400" />
                  College Project & Viva Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Technology Stack</h4>
            <div className="flex flex-wrap gap-1 text-[11px] text-slate-300">
              <span className="bg-slate-800 px-2 py-0.5 rounded">React.js</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded">TypeScript</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded">Vite</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded">Tailwind CSS</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded">jsPDF & html2canvas</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded">Node & Express</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-2">
          <div>
            © {new Date().getFullYear()} Resume Builder • Academic Engineering Demonstration Project
          </div>
          <div className="flex items-center gap-3">
            <span>Client-Side Data Storage</span>
            <span>•</span>
            <span>Zero Tracking</span>
            <span>•</span>
            <span>Open Source Academic Demo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
