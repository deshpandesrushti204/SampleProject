import html2canvas from 'html2canvas-pro';
import { jsPDF } from 'jspdf';

export interface PDFExportOptions {
  elementId: string;
  candidateName: string;
  onStart?: () => void;
  onSuccess?: () => void;
  onError?: (err: Error) => void;
}

/**
 * Clean filename formatter
 * e.g., "Alex_Johnson_Resume.pdf"
 */
export const sanitizeFilename = (name: string): string => {
  const clean = name.trim().replace(/[^a-zA-Z0-9]/g, '_').replace(/_+/g, '_');
  return clean ? `${clean}_Resume.pdf` : 'Professional_Resume.pdf';
};

/**
 * High-definition PDF generation using html2canvas & jsPDF
 */
export const exportResumeToPdf = async ({
  elementId,
  candidateName,
  onStart,
  onSuccess,
  onError,
}: PDFExportOptions): Promise<void> => {
  try {
    if (onStart) onStart();

    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error(`Resume preview element with id "${elementId}" not found in DOM.`);
    }

    // Scroll to top to ensure complete capture without clipping
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Render DOM element to canvas with high pixel density
    const canvas = await html2canvas(element, {
      scale: 2, // 2x for high resolution
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });

    const pageWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const contentHeightMm = (canvas.height * pageWidth) / canvas.width;

    if (contentHeightMm <= pageHeight) {
      // Fits on a single A4 page
      pdf.addImage(imgData, 'JPEG', 0, 0, pageWidth, contentHeightMm);
    } else {
      // Multi-page handling
      let heightLeft = contentHeightMm;
      let position = 0;

      pdf.addImage(imgData, 'JPEG', 0, position, pageWidth, contentHeightMm);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - contentHeightMm;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, pageWidth, contentHeightMm);
        heightLeft -= pageHeight;
      }
    }

    const filename = sanitizeFilename(candidateName);
    pdf.save(filename);

    if (onSuccess) onSuccess();
  } catch (error) {
    console.error('PDF generation error:', error);
    // If canvas export fails, fall back gracefully to native print dialog
    try {
      window.print();
    } catch {
      // ignore
    }
    if (onError && error instanceof Error) {
      onError(error);
    } else if (onError) {
      onError(new Error('Unknown error during PDF generation.'));
    }
  }
};

/**
 * Native Browser Print dialog trigger
 * Produces 100% crisp, searchable vector text PDF directly from browser rendering engine
 */
export const triggerBrowserPrint = (): void => {
  window.print();
};
