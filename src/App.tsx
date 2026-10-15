import React, { useState, useEffect } from 'react';
import { ResumeData, TemplateId } from './types/resume';
import { initialEmptyResume, sampleStudentResume } from './data/sampleData';
import {
  saveResumeToStorage,
  loadResumeFromStorage,
  resetToSampleResume,
  clearResumeStorage,
  saveTemplatePreference,
  loadTemplatePreference,
  saveAccentColor,
  loadAccentColor,
} from './utils/storage';
import { validateResume, ValidationErrors } from './utils/validation';
import { exportResumeToPdf } from './utils/pdfGenerator';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { ResumeForm } from './components/ResumeForm';
import { ResumePreview } from './components/ResumePreview';
import { TemplateSelector } from './components/TemplateSelector';
import { ResumeCompleteness } from './components/ResumeCompleteness';
import { ProjectDocsModal } from './components/ProjectDocsModal';
import { Edit3, Eye, Sparkles } from 'lucide-react';

export default function App() {
  const [resumeData, setResumeData] = useState<ResumeData>(() => loadResumeFromStorage());
  const [templateId, setTemplateId] = useState<TemplateId>(() => loadTemplatePreference());
  const [accentColor, setAccentColor] = useState<string>(() => loadAccentColor());
  const [activeView, setActiveView] = useState<'home' | 'builder' | 'docs'>('builder');
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [lastSavedText, setLastSavedText] = useState<string | null>(null);

  // Mobile view mode toggle between form and preview
  const [mobileMode, setMobileMode] = useState<'form' | 'preview'>('form');

  // Auto-validate whenever personal info changes
  useEffect(() => {
    const errs = validateResume(resumeData);
    setErrors(errs);
  }, [resumeData]);

  // Persist template choice
  const handleSelectTemplate = (id: TemplateId) => {
    setTemplateId(id);
    saveTemplatePreference(id);
  };

  // Persist color choice
  const handleSelectAccent = (color: string) => {
    setAccentColor(color);
    saveAccentColor(color);
  };

  // Save to localStorage
  const handleSave = () => {
    const success = saveResumeToStorage(resumeData);
    if (success) {
      const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setLastSavedText(`Saved to browser at ${timeStr}`);
      setTimeout(() => setLastSavedText(null), 4000);
    }
  };

  // Reset to fictional sample data (Alex Johnson)
  const handleResetToSample = () => {
    if (window.confirm('Reset resume to the fictional sample data (Alex Johnson)? Any unsaved edits will be replaced.')) {
      const sample = resetToSampleResume();
      setResumeData(sample);
      setLastSavedText('Reset to sample resume (Alex Johnson)');
      setTimeout(() => setLastSavedText(null), 3500);
    }
  };

  // Clear all data
  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear your current resume details? You can always reload sample data.')) {
      setResumeData(initialEmptyResume);
      clearResumeStorage();
      setLastSavedText('Cleared resume data.');
      setTimeout(() => setLastSavedText(null), 3000);
    }
  };

  // Global Download PDF trigger
  const handleDownloadPdf = async () => {
    if (activeView !== 'builder') {
      setActiveView('builder');
    }
    if (mobileMode !== 'preview') {
      setMobileMode('preview');
    }
    setLastSavedText('Generating high-resolution PDF...');
    setTimeout(async () => {
      await exportResumeToPdf({
        elementId: 'resume-preview-sheet',
        candidateName: resumeData.personalInfo.fullName || 'Candidate',
        onSuccess: () => {
          setLastSavedText('PDF downloaded successfully!');
          setTimeout(() => setLastSavedText(null), 4000);
        },
        onError: () => {
          setLastSavedText('Export error. Try Print > Save as PDF.');
          setTimeout(() => setLastSavedText(null), 4000);
        },
      });
    }, 250);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      {/* Navigation Bar */}
      <Navbar
        activeView={activeView}
        onNavigate={(view) => {
          if (view === 'docs') {
            setIsDocsOpen(true);
          } else {
            setActiveView(view);
          }
        }}
        onOpenDocs={() => setIsDocsOpen(true)}
        onDownloadPdf={handleDownloadPdf}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeView === 'home' ? (
          <Hero
            onStartBuilding={() => setActiveView('builder')}
            onSelectTemplateAndBuild={(selectedTmpl) => {
              handleSelectTemplate(selectedTmpl);
              setActiveView('builder');
            }}
            onOpenDocs={() => setIsDocsOpen(true)}
          />
        ) : (
          /* Resume Builder Workspace View */
          <div className="max-w-[1700px] mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-6">
            {/* Fictional Sample Data Banner */}
            <div className="mb-4 bg-amber-50 border border-amber-200/90 rounded-xl px-4 py-2.5 text-xs text-amber-900 flex flex-wrap items-center justify-between gap-2.5 no-print shadow-2xs">
              <div className="flex items-center gap-2">
                <span className="font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] uppercase tracking-wider">
                  Sample Data Notice
                </span>
                <span>
                  Initial resume contains fictional sample data (<strong>Alex Johnson</strong>). Replace with your own details before using.
                </span>
              </div>
              <button
                type="button"
                onClick={handleResetToSample}
                className="text-[11px] font-semibold text-amber-800 hover:text-amber-950 underline cursor-pointer"
              >
                Reset to Sample Resume
              </button>
            </div>

            {/* Top Workspace Bar: Template Chooser & Completeness */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-5 no-print">
              <div className="lg:col-span-8">
                <TemplateSelector
                  currentTemplate={templateId}
                  onSelectTemplate={handleSelectTemplate}
                  accentColor={accentColor}
                  onSelectAccentColor={handleSelectAccent}
                />
              </div>
              <div className="lg:col-span-4">
                <ResumeCompleteness data={resumeData} />
              </div>
            </div>

            {/* Mobile View Toggle Bar (Only visible on small screens) */}
            <div className="lg:hidden flex items-center justify-center p-1.5 bg-slate-200/80 rounded-xl mb-4 no-print">
              <button
                type="button"
                onClick={() => setMobileMode('form')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors ${
                  mobileMode === 'form' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600'
                }`}
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Form</span>
              </button>
              <button
                type="button"
                onClick={() => setMobileMode('preview')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors ${
                  mobileMode === 'preview' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Live Preview</span>
              </button>
            </div>

            {/* Dual Panel Workspace (Side-by-Side on Desktop) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Form Panel (5 cols) */}
              <div
                className={`lg:col-span-5 ${
                  mobileMode === 'form' ? 'block' : 'hidden lg:block'
                } no-print`}
              >
                <ResumeForm
                  data={resumeData}
                  onChange={setResumeData}
                  errors={errors}
                  onSave={handleSave}
                  onLoadSample={handleResetToSample}
                  onClear={handleClear}
                  lastSavedText={lastSavedText}
                  onDownloadPdf={handleDownloadPdf}
                />
              </div>

              {/* Right Column: Live Resume Preview Panel (7 cols) */}
              <div
                className={`lg:col-span-7 ${
                  mobileMode === 'preview' ? 'block' : 'hidden lg:block'
                }`}
              >
                <div className="sticky top-20">
                  <ResumePreview
                    data={resumeData}
                    templateId={templateId}
                    accentColor={accentColor}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigateBuilder={() => setActiveView('builder')}
        onOpenDocs={() => setIsDocsOpen(true)}
      />

      {/* College Project Documentation & Viva Examination Modal */}
      <ProjectDocsModal
        isOpen={isDocsOpen}
        onClose={() => setIsDocsOpen(false)}
      />
    </div>
  );
}
