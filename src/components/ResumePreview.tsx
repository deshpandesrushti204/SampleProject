import React, { useState } from 'react';
import { ResumeData, TemplateId } from '../types/resume';
import { ClassicTemplate } from './templates/ClassicTemplate';
import { ModernTemplate } from './templates/ModernTemplate';
import { FresherTemplate } from './templates/FresherTemplate';
import { exportResumeToPdf, triggerBrowserPrint } from '../utils/pdfGenerator';
import { Download, Printer, ZoomIn, ZoomOut, RotateCcw, Loader2 } from 'lucide-react';

interface Props {
  data: ResumeData;
  templateId: TemplateId;
  accentColor: string;
}

export const ResumePreview: React.FC<Props> = ({ data, templateId, accentColor }) => {
  const [zoom, setZoom] = useState(1);
  const [isExporting, setIsExporting] = useState(false);
  const [exportMessage, setExportMessage] = useState<string | null>(null);

  const handleZoomIn = () => setZoom((z) => Math.min(1.4, z + 0.1));
  const handleZoomOut = () => setZoom((z) => Math.max(0.6, z - 0.1));
  const handleZoomReset = () => setZoom(1);

  const handleDownloadPdf = async () => {
    setIsExporting(true);
    setExportMessage('Generating high-res A4 PDF...');

    await exportResumeToPdf({
      elementId: 'resume-preview-sheet',
      candidateName: data.personalInfo.fullName || 'Candidate',
      onStart: () => {},
      onSuccess: () => {
        setIsExporting(false);
        setExportMessage('PDF downloaded successfully!');
        setTimeout(() => setExportMessage(null), 3500);
      },
      onError: (err) => {
        setIsExporting(false);
        setExportMessage('Export failed. Please try Print > Save as PDF.');
        setTimeout(() => setExportMessage(null), 4000);
      },
    });
  };

  const renderActiveTemplate = () => {
    switch (templateId) {
      case 'classic':
        return <ClassicTemplate data={data} accentColor={accentColor} />;
      case 'modern':
        return <ModernTemplate data={data} accentColor={accentColor} />;
      case 'fresher':
      default:
        return <FresherTemplate data={data} accentColor={accentColor} />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-100/80 rounded-xl border border-slate-200 overflow-hidden">
      {/* Top Preview Controls Bar */}
      <div className="bg-white px-4 py-2.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 no-print">
        {/* Zoom Controls */}
        <div className="flex items-center gap-1.5 text-xs text-slate-600">
          <span className="font-semibold mr-1 hidden sm:inline">Preview:</span>
          <button
            type="button"
            onClick={handleZoomOut}
            className="p-1.5 rounded hover:bg-slate-100 text-slate-700 transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="w-12 text-center font-mono text-[11px] text-slate-600">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            onClick={handleZoomIn}
            className="p-1.5 rounded hover:bg-slate-100 text-slate-700 transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleZoomReset}
            className="p-1.5 rounded hover:bg-slate-100 text-slate-700 transition-colors"
            title="Reset Zoom"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Action Buttons: PDF and Print */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={triggerBrowserPrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-2xs"
            title="Open browser print dialog for selectable vector PDF"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">Print / Vector PDF</span>
            <span className="sm:hidden">Print</span>
          </button>

          <button
            type="button"
            disabled={isExporting}
            onClick={handleDownloadPdf}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 rounded-lg transition-colors shadow-xs"
          >
            {isExporting ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Download className="w-3.5 h-3.5" />
            )}
            <span>{isExporting ? 'Exporting...' : 'Download PDF'}</span>
          </button>
        </div>
      </div>

      {/* Export Status Toast */}
      {exportMessage && (
        <div className="bg-slate-900 text-white text-xs px-4 py-2 text-center animate-fade-in no-print">
          {exportMessage}
        </div>
      )}

      {/* Preview Sheet Area */}
      <div className="flex-1 overflow-auto p-4 sm:p-6 flex justify-center items-start">
        <div
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: 'top center',
            transition: 'transform 0.15s ease-out',
          }}
          className="w-full max-w-[800px] shadow-lg rounded-sm overflow-hidden bg-white"
        >
          {/* Printable A4 Sheet */}
          <div id="resume-preview-sheet" className="min-h-[1050px] w-full bg-white">
            {renderActiveTemplate()}
          </div>
        </div>
      </div>
    </div>
  );
};
