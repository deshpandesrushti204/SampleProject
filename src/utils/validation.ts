import { ResumeData } from '../types/resume';

export interface ValidationErrors {
  [key: string]: string;
}

export const isValidEmail = (email: string): boolean => {
  if (!email.trim()) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

export const isValidPhone = (phone: string): boolean => {
  if (!phone.trim()) return true; // Phone optional in some countries, but if entered check
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/;
  return phoneRegex.test(phone.trim());
};

export const validateResume = (data: ResumeData): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Personal Info validation
  if (!data.personalInfo.fullName.trim()) {
    errors['fullName'] = 'Full Name is required.';
  } else if (data.personalInfo.fullName.trim().length < 2) {
    errors['fullName'] = 'Name must be at least 2 characters.';
  }

  if (!data.personalInfo.email.trim()) {
    errors['email'] = 'Email address is required.';
  } else if (!isValidEmail(data.personalInfo.email)) {
    errors['email'] = 'Please enter a valid email address (e.g., alex.johnson@example.com).';
  }

  if (data.personalInfo.phone.trim() && !isValidPhone(data.personalInfo.phone)) {
    errors['phone'] = 'Please enter a valid phone number.';
  }

  // Education validation
  if (data.education.length > 0) {
    data.education.forEach((edu, idx) => {
      if (edu.institution && !edu.degree) {
        errors[`edu_degree_${idx}`] = 'Please specify degree/branch for this institution.';
      }
    });
  }

  return errors;
};

export interface CompletenessItem {
  section: string;
  isComplete: boolean;
  weight: number;
  tip: string;
}

export const calculateCompleteness = (data: ResumeData): {
  score: number;
  items: CompletenessItem[];
  missingCount: number;
} => {
  const items: CompletenessItem[] = [
    {
      section: 'Personal Details & Contact',
      isComplete: Boolean(
        data.personalInfo.fullName.trim() &&
        data.personalInfo.email.trim() &&
        data.personalInfo.phone.trim()
      ),
      weight: 20,
      tip: 'Provide your full name, working email, and phone number so recruiters can contact you.',
    },
    {
      section: 'Professional Summary',
      isComplete: Boolean(data.summary.trim() && data.summary.trim().length >= 40),
      weight: 15,
      tip: 'Write a 2-3 line summary highlighting your technical background, key skills, and career objective.',
    },
    {
      section: 'Education History',
      isComplete: Boolean(
        data.education.length > 0 &&
        data.education[0].institution.trim() &&
        data.education[0].degree.trim()
      ),
      weight: 20,
      tip: 'Add your current degree, major/branch, institution name, and CGPA or grade.',
    },
    {
      section: 'Technical Skills',
      isComplete: Boolean(
        data.skills.languages.length > 0 ||
        data.skills.frameworks.length > 0
      ),
      weight: 15,
      tip: 'List your core programming languages (Java/Python/C++) and tech frameworks (React/Node).',
    },
    {
      section: 'Academic / Personal Projects',
      isComplete: Boolean(
        data.projects.length > 0 &&
        data.projects[0].title.trim() &&
        data.projects[0].description.trim()
      ),
      weight: 15,
      tip: 'List at least one technical project with tech stack and its key accomplishment.',
    },
    {
      section: 'Online Profiles (LinkedIn / GitHub)',
      isComplete: Boolean(
        data.personalInfo.linkedin.trim() ||
        data.personalInfo.github.trim()
      ),
      weight: 10,
      tip: 'Add your GitHub profile or LinkedIn URL so interviewers can review your repositories.',
    },
    {
      section: 'Certifications & Achievements',
      isComplete: Boolean(
        data.certifications.length > 0 ||
        data.achievements.length > 0 ||
        data.experience.length > 0
      ),
      weight: 5,
      tip: 'Include certifications (Coursera/Oracle/NPTEL) or hackathon achievements.',
    },
  ];

  const totalScore = items.reduce((acc, curr) => (curr.isComplete ? acc + curr.weight : acc), 0);
  const missingCount = items.filter((i) => !i.isComplete).length;

  return {
    score: Math.min(100, totalScore),
    items,
    missingCount,
  };
};
