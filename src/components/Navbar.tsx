import React from 'react';
import { FileText, BookOpen, Sparkles, Download } from 'lucide-react';

interface Props {
  activeView: 'home' | 'builder' | 'docs';
  onNavigate: (view: 'home' | 'builder' | 'docs') => void;
  onOpenDocs: () => void;
  onDownloadPdf?: () => void;
}

export const Navbar: React.FC<Props> = ({
  activeView,
  onNavigate,
  onOpenDocs,
  onDownloadPdf,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <div
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs group-hover:bg-blue-700 transition-colors">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg">
                Resume Builder
              </span>
              <span className="text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded hidden md:inline-block">
                Contains Fictional Sample Data
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block">
              Create and customize your professional resume.
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeView === 'home'
                ? 'text-blue-600 bg-blue-50'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Overview
          </button>

          <button
            type="button"
            onClick={() => onNavigate('builder')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              activeView === 'builder'
                ? 'text-white bg-blue-600 shadow-xs'
                : 'text-slate-700 bg-slate-100 hover:bg-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Builder Workspace</span>
          </button>

          <button
            type="button"
            onClick={onOpenDocs}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
            title="Open College Project Documentation & Viva Q&A Guide"
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span className="hidden sm:inline">Project Docs & Viva Guide</span>
            <span className="sm:hidden">Viva Docs</span>
          </button>

          {onDownloadPdf && (
            <button
              type="button"
              onClick={onDownloadPdf}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center gap-1.5 shadow-2xs"
              title="Download your resume as an A4 PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};
