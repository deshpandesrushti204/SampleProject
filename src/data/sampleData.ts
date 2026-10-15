import { ResumeData } from '../types/resume';

export const initialEmptyResume: ResumeData = {
  personalInfo: {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    linkedin: '',
    github: '',
    portfolio: '',
  },
  summary: '',
  education: [
    {
      id: 'edu-1',
      institution: '',
      degree: '',
      branch: '',
      startYear: '',
      endYear: '',
      score: '',
      city: '',
    },
  ],
  skills: {
    languages: [],
    frameworks: [],
    databases: [],
    tools: [],
    softSkills: [],
  },
  projects: [
    {
      id: 'proj-1',
      title: '',
      description: '',
      technologies: '',
      projectUrl: '',
      githubUrl: '',
    },
  ],
  experience: [],
  certifications: [],
  achievements: [],
};

export const sampleStudentResume: ResumeData = {
  personalInfo: {
    fullName: 'Alex Johnson',
    jobTitle: 'Frontend Developer',
    email: 'alex.johnson@example.com',
    phone: '+1 555-010-1234',
    city: 'Sample City',
    state: 'Sample Country',
    linkedin: 'https://www.linkedin.com/in/sample-profile',
    github: 'https://github.com/sample-user',
    portfolio: 'https://example.com',
  },
  summary:
    'Motivated software developer with knowledge of frontend development, responsive web design, and modern JavaScript frameworks. Interested in creating accessible, user-friendly web applications and learning new technologies.',
  education: [
    {
      id: 'edu-1',
      institution: 'ABC Institute of Technology',
      degree: 'Bachelor of Engineering in Computer Science',
      branch: 'Computer Science',
      startYear: '2023',
      endYear: '2027',
      score: '8.5/10 CGPA',
      city: 'Sample City, Sample Country',
    },
  ],
  skills: {
    languages: ['JavaScript', 'Python', 'Java'],
    frameworks: ['HTML', 'CSS', 'React', 'Node.js', 'Express'],
    databases: ['MySQL'],
    tools: ['Git', 'GitHub', 'VS Code'],
    softSkills: [
      'Problem Solving',
      'Team Collaboration',
      'Communication',
      'Adaptability',
    ],
  },
  projects: [
    {
      id: 'proj-1',
      title: 'Smart Task Manager',
      technologies: 'React, JavaScript, CSS, and Local Storage',
      description:
        'A sample web application for organizing tasks, tracking progress, and managing deadlines.',
      projectUrl: 'https://example.com/task-manager',
      githubUrl: 'https://github.com/sample-user/smart-task-manager',
    },
    {
      id: 'proj-2',
      title: 'Personal Portfolio Website',
      technologies: 'HTML, CSS, JavaScript, and React',
      description:
        'A responsive portfolio website showcasing sample projects, technical skills, and professional information.',
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/sample-user/portfolio-website',
    },
  ],
  experience: [
    {
      id: 'exp-1',
      company: 'XYZ Technologies',
      role: 'Software Developer Intern',
      location: 'Sample City, Sample Country',
      startDate: 'June 2026',
      endDate: 'August 2026',
      isCurrent: false,
      description:
        'Developed responsive user interface components. Worked with JavaScript and React. Collaborated with team members to improve application usability.',
    },
  ],
  certifications: [
    {
      id: 'cert-1',
      name: 'Introduction to Web Development',
      issuer: 'Online Learning Platform',
      issueDate: '2026',
      credentialUrl: 'https://example.com/cert/web-dev',
    },
    {
      id: 'cert-2',
      name: 'JavaScript Fundamentals',
      issuer: 'Online Learning Platform',
      issueDate: '2026',
      credentialUrl: 'https://example.com/cert/js-fund',
    },
    {
      id: 'cert-3',
      name: 'Database Management Fundamentals',
      issuer: 'Online Learning Platform',
      issueDate: '2026',
      credentialUrl: 'https://example.com/cert/db-fund',
    },
  ],
  achievements: [
    {
      id: 'ach-1',
      title: 'Practice Projects in Web Development',
      description:
        'Completed multiple practice projects in modern web development covering frontend architecture and responsive design.',
      date: '2026',
    },
    {
      id: 'ach-2',
      title: 'Responsive Portfolio Deployment',
      description:
        'Built and deployed a responsive sample portfolio website demonstrating UI/UX principles and clean component design.',
      date: '2026',
    },
  ],
};
