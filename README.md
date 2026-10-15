# Resume Builder: A Web-Based Application for Creating Professional Resumes

> **Department of Information Science and Engineering (ISE)**  
> **Course:** 3rd Year Academic Capstone / Mini-Project  
> **Technologies:** React 19, TypeScript, Vite, Tailwind CSS, jsPDF, html2canvas, LocalStorage API  

---

## 1. Project Overview & Abstract

In modern technical recruitment and campus placement drives, prospective candidates struggle with manual formatting, margin inconsistencies, and ATS (Applicant Tracking System) rejection caused by improper word processing documents.

**Resume Builder** is a responsive, web-based single-page application (SPA) that enables engineering students, fresh graduates, and job applicants to enter their credentials once and dynamically generate clean, standard, ATS-friendly resumes in real-time. The application provides instant side-by-side previewing, modular dynamic field management, a built-in profile completeness checker, and one-click high-resolution A4 PDF downloads without any external server dependency or privacy risk.

---

## 2. Key Features

- **Real-Time Live Preview:** Changes made in the structured form update instantaneously on the rendered resume canvas via React state hooks.
- **Three Curated Templates:**
  1. *Student / Fresher Template:* Prioritizes engineering education, academic mini-projects, programming languages, and certifications.
  2. *Modern Minimal Template:* Sleek 2-column layout designed for technology startups and product companies.
  3. *Classic Professional Template:* Traditional serif headers and clean divider rules for corporate and consulting recruiters.
- **Dynamic Array Management:** Add, edit, and remove unlimited education qualifications, academic projects, work experience/internships, certifications, and extracurricular achievements.
- **High-Definition A4 PDF Export:** Built-in PDF engine (`jsPDF` + `html2canvas`) and native browser vector print options configured for strict A4 dimensions (210mm x 297mm).
- **Client-Side Persistence:** Automatically saves resume drafts into browser `localStorage` with options to Save, Clear, and Load sample profiles.
- **Resume Completeness Checker:** Calculates a 0–100% profile score and provides actionable guidance on missing sections.
- **Color Customization:** Switch between accent themes (Royal Blue, Navy, Emerald, Slate, Indigo, Crimson, or custom picker).
- **Interactive Project & Viva Guide:** An integrated modal detailing the System Architecture, Data Flow Diagram (DFD Level 0 & Level 1), Test Cases Matrix, and Top 15 Viva Questions & Answers.

---

## 3. Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Document Structure** | HTML5 (Semantic tags) | Provides structured, accessible markup (`<header>`, `<section>`, `<article>`) |
| **Styling & Layout** | Tailwind CSS v4 & CSS3 | Utility-first styling, responsive grid/flexbox, `@media print` rules |
| **Frontend Framework**| React.js 19 (Hooks) | Unidirectional state management, component tree rendering |
| **Language** | TypeScript (ES2022) | Static typing, interface contracts, compile-time error prevention |
| **Build Tool** | Vite 8 | Lightning-fast Hot Module Replacement (HMR) and optimized esbuild bundling |
| **PDF Synthesis** | jsPDF & html2canvas | Client-side DOM rasterization and A4 vector document compilation |
| **Icons** | Lucide React | Clean, scalable SVG icons for form fields and actions |
| **Persistence** | Browser localStorage API | Secure, client-side zero-server key-value storage |

---

## 4. Project Directory Structure

```text
resume-builder/
├── index.html                  # HTML5 entry point & web font definitions
├── metadata.json               # Application metadata and capabilities
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript compiler configuration
├── vite.config.ts              # Vite configuration & path aliases
├── src/
│   ├── main.tsx                # React DOM root hydration
│   ├── App.tsx                 # Root component orchestrating state & layout
│   ├── index.css               # Tailwind global styles & print stylesheets
│   ├── types/
│   │   └── resume.ts           # TypeScript models (ResumeData, Education, Project, etc.)
│   ├── data/
│   │   └── sampleData.ts       # Realistic ISE student sample profile
│   ├── utils/
│   │   ├── validation.ts       # Input validation & completeness scoring algorithm
│   │   ├── storage.ts          # Safe localStorage read/write helpers
│   │   └── pdfGenerator.ts     # html2canvas & jsPDF export pipeline
│   └── components/
│       ├── Navbar.tsx          # Top navigation bar & view router
│       ├── Hero.tsx            # Landing section with benefits & template previews
│       ├── Footer.tsx          # Academic ISE credentials & tech credits
│       ├── ResumeForm.tsx      # Main tabbed form controller
│       ├── ResumePreview.tsx   # Live preview wrapper with zoom & PDF export
│       ├── TemplateSelector.tsx# Template switcher & accent color picker
│       ├── ResumeCompleteness.tsx # Profile completeness meter & recommendations
│       ├── ProjectDocsModal.tsx# Architecture, DFD, Test Matrix, and Viva Q&A
│       ├── forms/
│       │   ├── PersonalInfoForm.tsx
│       │   ├── SummaryForm.tsx
│       │   ├── EducationForm.tsx
│       │   ├── SkillsForm.tsx
│       │   ├── ProjectsForm.tsx
│       │   ├── ExperienceForm.tsx
│       │   ├── CertificationsForm.tsx
│       │   └── AchievementsForm.tsx
│       └── templates/
│           ├── ClassicTemplate.tsx
│           ├── ModernTemplate.tsx
│           └── FresherTemplate.tsx
```

---

## 5. Local Setup & Running Instructions

### Prerequisites
1. Install **Node.js** (v18.x or v20.x LTS recommended): [https://nodejs.org](https://nodejs.org)
2. Install **Visual Studio Code**: [https://code.visualstudio.com](https://code.visualstudio.com)

### Step-by-Step Commands
```bash
# 1. Clone or extract the repository
git clone https://github.com/<your-username>/resume-builder.git
cd resume-builder

# 2. Install all dependencies
npm install

# 3. Start the local development server
npm run dev

# 4. Open in browser:
# Navigate to: http://localhost:3000
```

---

## 6. College Project Evaluation Checklist

- [x] **Personal Details Form:** Real-time sync of name, contact, LinkedIn, and GitHub.
- [x] **Dynamic Multiple Entries:** Add/remove multiple colleges, projects, and internships.
- [x] **3 Resume Templates:** Instant switching between Classic, Modern, and Fresher with data preserved.
- [x] **Color Accent Customizer:** Live color updates on titles, badges, and divider lines.
- [x] **A4 PDF Download:** Generates formatted `Candidate_Name_Resume.pdf` in one click.
- [x] **LocalStorage Persistence:** Resumes survive page refreshes and browser restarts.
- [x] **Resume Completeness Meter:** Visual percentage score (0-100%) and missing section hints.
- [x] **Viva & Architecture Guide:** Built-in review modal for project demo and viva viva questions.
