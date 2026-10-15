import React from 'react';
import { TemplateId } from '../types/resume';
import { Layout, Palette, Check } from 'lucide-react';

interface Props {
  currentTemplate: TemplateId;
  onSelectTemplate: (id: TemplateId) => void;
  accentColor: string;
  onSelectAccentColor: (color: string) => void;
}

interface TemplateOption {
  id: TemplateId;
  name: string;
  subtitle: string;
  badge: string;
}

const TEMPLATES: TemplateOption[] = [
  {
    id: 'fresher',
    name: 'Student / Fresher',
    subtitle: 'Tailored for engineering students, mini-projects & academics',
    badge: 'Students & Freshers',
  },
  {
    id: 'modern',
    name: 'Modern Minimal',
    subtitle: 'Two-column layout with sleek tech aesthetics & skills focus',
    badge: 'Tech & Startups',
  },
  {
    id: 'classic',
    name: 'Classic Professional',
    subtitle: 'Traditional serif typography, ATS-friendly corporate standard',
    badge: 'Corporate Standard',
  },
];

const PRESET_COLORS = [
  { label: 'Royal Blue', hex: '#2563eb' },
  { label: 'Navy Blue', hex: '#1e3a8a' },
  { label: 'Emerald Green', hex: '#059669' },
  { label: 'Dark Slate', hex: '#334155' },
  { label: 'Indigo Purple', hex: '#4f46e5' },
  { label: 'Burgundy Crimson', hex: '#991b1b' },
];

export const TemplateSelector: React.FC<Props> = ({
  currentTemplate,
  onSelectTemplate,
  accentColor,
  onSelectAccentColor,
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-4">
      {/* Template Chooser */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Layout className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Resume Template
            </span>
          </div>
          <span className="text-xs text-slate-500">Instant Switch (Data Preserved)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {TEMPLATES.map((tmpl) => {
            const isSelected = currentTemplate === tmpl.id;
            return (
              <button
                key={tmpl.id}
                type="button"
                onClick={() => onSelectTemplate(tmpl.id)}
                className={`text-left p-3 rounded-lg border transition-all relative ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/40 ring-2 ring-blue-500/20'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-slate-900">{tmpl.name}</span>
                  {isSelected && <Check className="w-4 h-4 text-blue-600 shrink-0" />}
                </div>
                <div className="text-[11px] text-slate-500 mt-1 leading-snug">{tmpl.subtitle}</div>
                <div className="mt-2 text-[10px] font-semibold text-blue-700 bg-blue-100/60 inline-block px-1.5 py-0.5 rounded">
                  {tmpl.badge}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Color Accent Chooser */}
      <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
          <Palette className="w-3.5 h-3.5 text-slate-500" />
          <span>Accent Color:</span>
        </div>

        <div className="flex items-center gap-2">
          {PRESET_COLORS.map((c) => (
            <button
              key={c.hex}
              type="button"
              onClick={() => onSelectAccentColor(c.hex)}
              title={c.label}
              className={`w-6 h-6 rounded-full transition-transform flex items-center justify-center ${
                accentColor === c.hex ? 'scale-110 ring-2 ring-offset-2 ring-blue-500' : 'hover:scale-105'
              }`}
              style={{ backgroundColor: c.hex }}
            >
              {accentColor === c.hex && <Check className="w-3.5 h-3.5 text-white" />}
            </button>
          ))}
          <input
            type="color"
            value={accentColor}
            onChange={(e) => onSelectAccentColor(e.target.value)}
            className="w-6 h-6 rounded cursor-pointer border-0 p-0 bg-transparent"
            title="Custom Accent Color"
          />
        </div>
      </div>
    </div>
  );
};
