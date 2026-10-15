import React, { useState } from 'react';
import { ResumeData } from '../types/resume';
import { PersonalInfoForm } from './forms/PersonalInfoForm';
import { SummaryForm } from './forms/SummaryForm';
import { EducationForm } from './forms/EducationForm';
import { SkillsForm } from './forms/SkillsForm';
import { ProjectsForm } from './forms/ProjectsForm';
import { ExperienceForm } from './forms/ExperienceForm';
import { CertificationsForm } from './forms/CertificationsForm';
import { AchievementsForm } from './forms/AchievementsForm';
import { ValidationErrors } from '../utils/validation';
import {
  User,
  FileText,
  GraduationCap,
  Code,
  FolderGit2,
  Briefcase,
  Award,
  Trophy,
  Save,
  RotateCcw,
  Sparkles,
  CheckCircle,
  Download,
} from 'lucide-react';

interface Props {
  data: ResumeData;
  onChange: (updated: ResumeData) => void;
  errors: ValidationErrors;
  onSave: () => void;
  onLoadSample: () => void;
  onClear: () => void;
  lastSavedText: string | null;
  onDownloadPdf?: () => void;
}

type TabKey =
  | 'personal'
  | 'summary'
  | 'education'
  | 'skills'
  | 'projects'
  | 'experience'
  | 'certifications'
  | 'achievements';

interface TabItem {
  key: TabKey;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  count?: number;
}

export const ResumeForm: React.FC<Props> = ({
  data,
  onChange,
  errors,
  onSave,
  onLoadSample,
  onClear,
  lastSavedText,
  onDownloadPdf,
}) => {
  const [activeTab, setActiveTab] = useState<TabKey>('personal');

  const tabs: TabItem[] = [
    { key: 'personal', label: 'Personal', icon: User },
    { key: 'summary', label: 'Summary', icon: FileText },
    { key: 'education', label: 'Education', icon: GraduationCap, count: data.education.length },
    {
      key: 'skills',
      label: 'Skills',
      icon: Code,
      count:
        data.skills.languages.length +
        data.skills.frameworks.length +
        data.skills.databases.length,
    },
    { key: 'projects', label: 'Projects', icon: FolderGit2, count: data.projects.length },
    { key: 'experience', label: 'Experience', icon: Briefcase, count: data.experience.length },
    { key: 'certifications', label: 'Certifications', icon: Award, count: data.certifications.length },
    { key: 'achievements', label: 'Achievements', icon: Trophy, count: data.achievements.length },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs flex flex-col">
      {/* Top Action Toolbar */}
      <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center flex-wrap gap-2">
          <button
            type="button"
            onClick={onSave}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-2xs"
          >
            <Save className="w-3.5 h-3.5" />
            Save Changes
          </button>

          {onDownloadPdf && (
            <button
              type="button"
              onClick={onDownloadPdf}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF
            </button>
          )}

          <button
            type="button"
            onClick={onLoadSample}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200"
            title="Reset all fields to fictional sample resume (Alex Johnson)"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Reset to Sample Resume
          </button>

          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center gap-1 px-2 py-1.5 text-xs font-medium text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
            title="Reset form fields"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Clear
          </button>
        </div>

        {lastSavedText && (
          <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>{lastSavedText}</span>
          </div>
        )}
      </div>

      {/* Tab Navigation */}
      <div className="flex overflow-x-auto border-b border-slate-200 bg-white px-2 pt-2 scrollbar-none">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium border-b-2 whitespace-nowrap transition-colors ${
                isActive
                  ? 'border-blue-600 text-blue-600 font-semibold'
                  : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
              {typeof tab.count === 'number' && tab.count > 0 && (
                <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded-full font-bold">
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Form Body */}
      <div className="p-4 sm:p-6 overflow-y-auto max-h-[700px]">
        {activeTab === 'personal' && (
          <PersonalInfoForm
            data={data.personalInfo}
            onChange={(personalInfo) => onChange({ ...data, personalInfo })}
            errors={errors}
          />
        )}

        {activeTab === 'summary' && (
          <SummaryForm
            summary={data.summary}
            onChange={(summary) => onChange({ ...data, summary })}
          />
        )}

        {activeTab === 'education' && (
          <EducationForm
            education={data.education}
            onChange={(education) => onChange({ ...data, education })}
          />
        )}

        {activeTab === 'skills' && (
          <SkillsForm
            skills={data.skills}
            onChange={(skills) => onChange({ ...data, skills })}
          />
        )}

        {activeTab === 'projects' && (
          <ProjectsForm
            projects={data.projects}
            onChange={(projects) => onChange({ ...data, projects })}
          />
        )}

        {activeTab === 'experience' && (
          <ExperienceForm
            experience={data.experience}
            onChange={(experience) => onChange({ ...data, experience })}
          />
        )}

        {activeTab === 'certifications' && (
          <CertificationsForm
            certifications={data.certifications}
            onChange={(certifications) => onChange({ ...data, certifications })}
          />
        )}

        {activeTab === 'achievements' && (
          <AchievementsForm
            achievements={data.achievements}
            onChange={(achievements) => onChange({ ...data, achievements })}
          />
        )}
      </div>

      {/* Bottom Step Switcher */}
      <div className="px-4 py-3 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs">
        <button
          type="button"
          disabled={activeTab === tabs[0].key}
          onClick={() => {
            const idx = tabs.findIndex((t) => t.key === activeTab);
            if (idx > 0) setActiveTab(tabs[idx - 1].key);
          }}
          className="text-slate-600 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed font-medium"
        >
          ← Previous Section
        </button>

        <button
          type="button"
          disabled={activeTab === tabs[tabs.length - 1].key}
          onClick={() => {
            const idx = tabs.findIndex((t) => t.key === activeTab);
            if (idx < tabs.length - 1) setActiveTab(tabs[idx + 1].key);
          }}
          className="text-blue-600 hover:text-blue-800 disabled:opacity-40 disabled:cursor-not-allowed font-semibold"
        >
          Next Section →
        </button>
      </div>
    </div>
  );
};
