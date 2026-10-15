import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Shield, Eye, Download, FileCheck, Layers } from 'lucide-react';
import { TemplateId } from '../types/resume';

interface Props {
  onStartBuilding: () => void;
  onSelectTemplateAndBuild: (templateId: TemplateId) => void;
  onOpenDocs: () => void;
}

export const Hero: React.FC<Props> = ({
  onStartBuilding,
  onSelectTemplateAndBuild,
  onOpenDocs,
}) => {
  const benefits = [
    {
      icon: Eye,
      title: 'Instant Live Preview',
      desc: 'Form inputs reflect immediately on the side-by-side preview sheet with zero delay.',
    },
    {
      icon: FileCheck,
      title: 'ATS-Friendly Structure',
      desc: 'Clean single-column and modular layouts designed to parse cleanly through recruitment ATS systems.',
    },
    {
      icon: Download,
      title: 'Vector PDF Download',
      desc: 'Export crisp, print-ready A4 PDFs without watermarks or forced third-party registrations.',
    },
    {
      icon: Shield,
      title: '100% Client-Side Privacy',
      desc: 'Data remains safely stored inside your browser localStorage. No sensitive personal info is sent to unverified servers.',
    },
  ];

  const templatesPreview = [
    {
      id: 'fresher' as TemplateId,
      name: 'Student / Fresher Template',
      tag: 'Best for 3rd/4th Year Placements',
      desc: 'Prioritizes engineering education, mini-projects, programming languages, and certifications.',
      previewBg: 'border-blue-300 bg-blue-50/30',
    },
    {
      id: 'modern' as TemplateId,
      name: 'Modern Minimal Template',
      tag: 'Tech & Product Companies',
      desc: 'A modern two-column structure with sleek typography and highlighted technical stack badges.',
      previewBg: 'border-indigo-300 bg-indigo-50/30',
    },
    {
      id: 'classic' as TemplateId,
      name: 'Classic Professional Template',
      tag: 'Corporate & Consulting',
      desc: 'Time-tested serif headings and horizontal rule separators for traditional corporate recruiters.',
      previewBg: 'border-slate-300 bg-slate-50/50',
    },
  ];

  return (
    <div className="space-y-16 py-8 sm:py-12">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>College Engineering Demonstration Project</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
          Create Clean, Professional Resumes in <span className="text-blue-600">Minutes</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          A web-based engineering tool designed for students, fresh graduates, and job seekers.
          Enter your credentials, choose an ATS-compliant template, inspect real-time previews, and download high-resolution A4 PDFs instantly.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <button
            type="button"
            onClick={onStartBuilding}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
          >
            <span>Build My Resume Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onOpenDocs}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold text-sm shadow-2xs transition-all"
          >
            <span>Review Project & Viva Docs</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Real-Time Preview
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 3 Curated Templates
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Standard A4 PDF Output
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Auto-Save in Browser
          </span>
        </div>
      </section>

      {/* Main Benefits Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Engineered for Modern Engineering Recruitment
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Why manual formatting in MS Word or basic text editors wastes valuable time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="p-5 bg-white rounded-xl border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 mb-1.5">{b.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sample Templates Preview Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
            <Layers className="w-3.5 h-3.5" />
            Curated Formats
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Selectable Resume Layouts
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Switch between templates at any point without re-typing any information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templatesPreview.map((tmpl) => (
            <div
              key={tmpl.id}
              className={`p-6 rounded-xl border ${tmpl.previewBg} bg-white shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow`}
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-white px-2 py-0.5 rounded">
                  {tmpl.tag}
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-3">{tmpl.name}</h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{tmpl.desc}</p>
              </div>

              {/* Decorative mini wireframe illustration */}
              <div className="my-5 p-3 bg-slate-50 border border-slate-200/80 rounded-lg space-y-2 pointer-events-none select-none">
                <div className="h-2.5 bg-slate-300 rounded w-1/3"></div>
                <div className="h-1.5 bg-slate-200 rounded w-2/3"></div>
                <div className="h-px bg-slate-200 my-1"></div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="h-8 bg-slate-100 rounded border border-slate-200/50"></div>
                  <div className="h-8 bg-slate-100 rounded border border-slate-200/50"></div>
                </div>
                <div className="h-1.5 bg-slate-200 rounded w-4/5"></div>
              </div>

              <button
                type="button"
                onClick={() => onSelectTemplateAndBuild(tmpl.id)}
                className="w-full py-2 px-3 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white transition-colors text-center"
              >
                Use This Template →
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
