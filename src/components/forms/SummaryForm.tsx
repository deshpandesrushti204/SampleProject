import React from 'react';
import { FileText, Sparkles } from 'lucide-react';

interface Props {
  summary: string;
  onChange: (value: string) => void;
}

export const SummaryForm: React.FC<Props> = ({ summary, onChange }) => {
  const charCount = summary.length;

  const sampleSummaries = [
    'Motivated software developer with knowledge of frontend development, responsive web design, and modern JavaScript frameworks. Interested in creating accessible, user-friendly web applications and learning new technologies.',
    'Aspiring software engineer with a strong foundation in modern web technologies, React, and component-based architecture. Dedicated to building clean, accessible, and user-centric applications.',
    'Detail-oriented Computer Science student focused on full-stack web development. Experienced in building responsive user interfaces and integrating clean API endpoints.',
  ];

  return (
    <div className="space-y-4">
      <div className="border-b border-slate-100 pb-2">
        <h3 className="text-base font-semibold text-slate-800 flex items-center gap-2">
          <FileText className="w-4 h-4 text-blue-600" />
          Professional Summary / Career Objective
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          A concise 2–3 sentence overview of your technical background, engineering focus, and career goals.
        </p>
      </div>

      <div>
        <textarea
          rows={4}
          value={summary}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g. Motivated software developer with knowledge of frontend development, responsive web design, and modern JavaScript frameworks..."
          className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

        <div className="flex justify-between items-center text-xs text-slate-500 mt-1">
          <span>
            {charCount < 40 ? (
              <span className="text-amber-600 font-medium">Aim for at least 40 characters</span>
            ) : (
              <span className="text-emerald-600 font-medium">Good length for ATS readability</span>
            )}
          </span>
          <span>{charCount} characters</span>
        </div>
      </div>

      {/* Quick templates for students */}
      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          Need inspiration? Click a student summary template:
        </div>
        <div className="space-y-1.5">
          {sampleSummaries.map((text, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onChange(text)}
              className="text-left w-full text-[11px] p-2 bg-white rounded border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 transition-colors text-slate-600"
            >
              &ldquo;{text}&rdquo;
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
