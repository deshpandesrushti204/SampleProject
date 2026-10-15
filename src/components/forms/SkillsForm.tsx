import React, { useState } from 'react';
import { ResumeData } from '../../types/resume';
import { Code, Plus, X } from 'lucide-react';

interface Props {
  skills: ResumeData['skills'];
  onChange: (updated: ResumeData['skills']) => void;
}

type SkillCategory = keyof ResumeData['skills'];

interface CategoryConfig {
  key: SkillCategory;
  title: string;
  placeholder: string;
  suggestions: string[];
}

const CATEGORIES: CategoryConfig[] = [
  {
    key: 'languages',
    title: 'Programming Languages',
    placeholder: 'Type language (e.g. Java, Python) & press Enter',
    suggestions: ['Java', 'C++', 'Python', 'C', 'JavaScript', 'TypeScript', 'SQL', 'Go', 'HTML/CSS'],
  },
  {
    key: 'frameworks',
    title: 'Frameworks & Libraries',
    placeholder: 'Type framework (e.g. React.js, Express) & press Enter',
    suggestions: ['React.js', 'Node.js', 'Express.js', 'Next.js', 'Tailwind CSS', 'Spring Boot', 'Django', 'Flask'],
  },
  {
    key: 'databases',
    title: 'Databases & Storage',
    placeholder: 'Type database (e.g. MongoDB, MySQL) & press Enter',
    suggestions: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'SQLite', 'Firebase Firestore', 'Oracle DB'],
  },
  {
    key: 'tools',
    title: 'Developer Tools & Platforms',
    placeholder: 'Type tool (e.g. Git, VS Code) & press Enter',
    suggestions: ['Git & GitHub', 'VS Code', 'Postman', 'Docker', 'Linux/Unix', 'Figma', 'AWS', 'Vercel'],
  },
  {
    key: 'softSkills',
    title: 'Soft Skills & Core Competencies',
    placeholder: 'Type competency (e.g. Problem Solving) & press Enter',
    suggestions: ['Problem Solving', 'Data Structures', 'Team Collaboration', 'Effective Communication', 'Agile/Scrum', 'Time Management'],
  },
];

export const SkillsForm: React.FC<Props> = ({ skills, onChange }) => {
  const [inputs, setInputs] = useState<Record<SkillCategory, string>>({
    languages: '',
    frameworks: '',
    databases: '',
    tools: '',
    softSkills: '',
  });

  const handleAddSkill = (category: SkillCategory, skillName: string) => {
    const clean = skillName.trim();
    if (!clean) return;

    const currentList = skills[category] || [];
    if (!currentList.includes(clean)) {
      onChange({
        ...skills,
        [category]: [...currentList, clean],
      });
    }

    setInputs((prev) => ({ ...prev, [category]: '' }));
  };

  const handleRemoveSkill = (category: SkillCategory, skillToRemove: string) => {
    onChange({
      ...skills,
      [category]: skills[category].filter((s) => s !== skillToRemove),
    });
  };

  const handleKeyDown = (category: SkillCategory, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      handleAddSkill(category, inputs[category]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-100 pb-2">
        <h3 className="text-base font-semibold text-slate-800 flex items-center gap-2">
          <Code className="w-4 h-4 text-blue-600" />
          Technical & Professional Skills
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Categorize your skills. Recruiters and ATS scanners match these keywords against job descriptions.
        </p>
      </div>

      <div className="space-y-5">
        {CATEGORIES.map((cat) => {
          const currentSkills = skills[cat.key] || [];

          return (
            <div key={cat.key} className="p-3.5 bg-white border border-slate-200 rounded-lg space-y-2.5">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-800">{cat.title}</label>
                <span className="text-[11px] text-slate-500">{currentSkills.length} added</span>
              </div>

              {/* Tag pills */}
              <div className="flex flex-wrap gap-1.5 min-h-[28px]">
                {currentSkills.length === 0 ? (
                  <span className="text-xs text-slate-400 italic">No items yet. Type below or click suggestions.</span>
                ) : (
                  currentSkills.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-blue-50 text-blue-800 rounded-md border border-blue-200"
                    >
                      {item}
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(cat.key, item)}
                        className="hover:text-rose-600 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))
                )}
              </div>

              {/* Input for new skill */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputs[cat.key]}
                  onChange={(e) => setInputs((prev) => ({ ...prev, [cat.key]: e.target.value }))}
                  onKeyDown={(e) => handleKeyDown(cat.key, e)}
                  placeholder={cat.placeholder}
                  className="flex-1 px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:bg-white focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={() => handleAddSkill(cat.key, inputs[cat.key])}
                  className="px-2.5 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add
                </button>
              </div>

              {/* Suggested quick-add chips */}
              <div className="pt-1">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Quick Add:</div>
                <div className="flex flex-wrap gap-1">
                  {cat.suggestions
                    .filter((s) => !currentSkills.includes(s))
                    .slice(0, 6)
                    .map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => handleAddSkill(cat.key, suggestion)}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-800 transition-colors"
                      >
                        + {suggestion}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
