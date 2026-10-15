import { ResumeData, TemplateId } from '../types/resume';
import { initialEmptyResume, sampleStudentResume } from '../data/sampleData';

// Updated storage key to prevent loading any legacy personal information
const RESUME_STORAGE_KEY = 'resume_builder_v2_fictional_data';
const LEGACY_STORAGE_KEY = 'resume_builder_v1_data';
const TEMPLATE_STORAGE_KEY = 'resume_builder_v2_template';
const ACCENT_STORAGE_KEY = 'resume_builder_v2_accent';

/**
 * Clear legacy personal data from older versions if present in the browser
 */
const purgeLegacyDataIfPresent = () => {
  try {
    if (localStorage.getItem(LEGACY_STORAGE_KEY)) {
      localStorage.removeItem(LEGACY_STORAGE_KEY);
    }
  } catch {
    // Ignore storage errors in private mode
  }
};

export const saveResumeToStorage = (data: ResumeData): boolean => {
  try {
    const serialized = JSON.stringify(data);
    localStorage.setItem(RESUME_STORAGE_KEY, serialized);
    return true;
  } catch (error) {
    console.error('Failed to save resume data to localStorage:', error);
    return false;
  }
};

export const loadResumeFromStorage = (): ResumeData => {
  try {
    purgeLegacyDataIfPresent();
    const raw = localStorage.getItem(RESUME_STORAGE_KEY);
    if (!raw) {
      // First-time load: populate with fictional sample resume (Alex Johnson)
      saveResumeToStorage(sampleStudentResume);
      return sampleStudentResume;
    }
    const parsed = JSON.parse(raw);
    return parsed;
  } catch (error) {
    console.error('Failed to parse resume data from localStorage:', error);
    return sampleStudentResume;
  }
};

export const resetToSampleResume = (): ResumeData => {
  try {
    saveResumeToStorage(sampleStudentResume);
  } catch (error) {
    console.error('Failed to reset resume storage:', error);
  }
  return sampleStudentResume;
};

export const clearResumeStorage = (): void => {
  try {
    localStorage.removeItem(RESUME_STORAGE_KEY);
    purgeLegacyDataIfPresent();
  } catch (error) {
    console.error('Failed to clear resume storage:', error);
  }
};

export const saveTemplatePreference = (templateId: TemplateId): void => {
  try {
    localStorage.setItem(TEMPLATE_STORAGE_KEY, templateId);
  } catch {
    // Ignore storage write errors in private mode
  }
};

export const loadTemplatePreference = (): TemplateId => {
  try {
    const val = localStorage.getItem(TEMPLATE_STORAGE_KEY);
    if (val === 'classic' || val === 'modern' || val === 'fresher') {
      return val;
    }
  } catch {
    // fallback
  }
  return 'fresher'; // Default to fresher/student template
};

export const saveAccentColor = (color: string): void => {
  try {
    localStorage.setItem(ACCENT_STORAGE_KEY, color);
  } catch {
    // Ignore
  }
};

export const loadAccentColor = (): string => {
  try {
    return localStorage.getItem(ACCENT_STORAGE_KEY) || '#2563eb'; // Royal Blue default
  } catch {
    return '#2563eb';
  }
};
