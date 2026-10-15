export interface Education {
  id: string;
  institution: string;
  degree: string;
  branch: string;
  startYear: string;
  endYear: string;
  score: string; // CGPA or percentage
  city: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string;
  projectUrl?: string;
  githubUrl?: string;
  keyPoints?: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date?: string;
}

export interface ResumeData {
  personalInfo: {
    fullName: string;
    jobTitle: string;
    email: string;
    phone: string;
    city: string;
    state: string;
    linkedin: string;
    github: string;
    portfolio: string;
  };
  summary: string;
  education: Education[];
  skills: {
    languages: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
    softSkills: string[];
  };
  projects: Project[];
  experience: Experience[];
  certifications: Certification[];
  achievements: Achievement[];
}

export type TemplateId = 'classic' | 'modern' | 'fresher';

export interface TemplateConfig {
  id: TemplateId;
  name: string;
  description: string;
  badge: string;
  accentColor: string;
}
