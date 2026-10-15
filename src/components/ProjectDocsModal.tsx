import React, { useState } from 'react';
import { X, BookOpen, CheckCircle, HelpCircle, FileText, Layers, Shield, Cpu, ExternalLink } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDocsModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState<'overview' | 'architecture' | 'dfd' | 'testing' | 'viva'>('overview');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex justify-center items-start p-3 sm:p-6 no-print">
      <div className="bg-white rounded-2xl max-w-4xl w-full my-6 shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold">College Project & Viva Examination Guide</h2>
              <p className="text-xs text-slate-300">
                Department of Information Science and Engineering • Academic Project Reference
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 gap-2 overflow-x-auto text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveSection('overview')}
            className={`py-3 px-3 border-b-2 whitespace-nowrap transition-colors ${
              activeSection === 'overview'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            1. Title, Abstract & Specs
          </button>
          <button
            type="button"
            onClick={() => setActiveSection('architecture')}
            className={`py-3 px-3 border-b-2 whitespace-nowrap transition-colors ${
              activeSection === 'architecture'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            2. System Architecture
          </button>
          <button
            type="button"
            onClick={() => setActiveSection('dfd')}
            className={`py-3 px-3 border-b-2 whitespace-nowrap transition-colors ${
              activeSection === 'dfd'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            3. Data Flow Diagram (DFD)
          </button>
          <button
            type="button"
            onClick={() => setActiveSection('testing')}
            className={`py-3 px-3 border-b-2 whitespace-nowrap transition-colors ${
              activeSection === 'testing'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            4. Testing & Test Cases
          </button>
          <button
            type="button"
            onClick={() => setActiveSection('viva')}
            className={`py-3 px-3 border-b-2 whitespace-nowrap transition-colors ${
              activeSection === 'viva'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            5. Viva Questions & Answers
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed">
          {/* SECTION 1: OVERVIEW */}
          {activeSection === 'overview' && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Project Title</span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                  Resume Builder: A Web-Based Application for Creating Professional Resumes
                </h3>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-1">Abstract</h4>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  In today&apos;s competitive campus placements and technical hiring environment, job applicants frequently struggle with inconsistent resume formatting, misalignment across word processors, and lack of ATS (Applicant Tracking System) readability. This project introduces a responsive, client-side web application built with React.js, TypeScript, Vite, and Tailwind CSS that enables candidates to enter their credentials once and dynamically generate standard, professionally formatted resumes in real-time. The system implements modular component architecture, live state synchronization, client-side validation, browser localStorage persistence, and client-side high-resolution A4 PDF synthesis using jsPDF and html2canvas, eliminating the need for expensive third-party tools or server roundtrips.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 text-rose-700">Problem Statement</h4>
                  <ul className="text-xs space-y-1.5 list-disc list-inside text-slate-600">
                    <li>Manual formatting in Microsoft Word or LaTeX is time-consuming and prone to margin errors.</li>
                    <li>Online commercial resume builders often lock PDF downloads behind paywalls or subscriptions.</li>
                    <li>Lack of real-time preview causes repetitive trial-and-error cycles during editing.</li>
                    <li>Inexperienced students frequently omit vital contact or technical skill keywords needed by ATS scanners.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 text-emerald-700">Proposed Solution</h4>
                  <ul className="text-xs space-y-1.5 list-disc list-inside text-slate-600">
                    <li>Zero-installation web interface accessible across desktop, tablet, and mobile.</li>
                    <li>Instant live preview that updates synchronously with form keystrokes via React state hooks.</li>
                    <li>3 specialized templates: Student/Fresher, Modern Minimal, and Classic Professional.</li>
                    <li>Built-in resume completeness checker with real-time tips for engineering placement readiness.</li>
                    <li>Client-side PDF compilation directly in the browser with zero server latency or data leakage.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">Hardware & Software Specifications</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block mb-1">Software Environment:</strong>
                    <div>Operating System: Windows 10/11, macOS, or Linux (Ubuntu)</div>
                    <div>IDE: Visual Studio Code</div>
                    <div>Runtime: Node.js (v18.x or v20.x LTS)</div>
                    <div>Package Manager: npm (v9+) or yarn</div>
                    <div>Frontend Framework: React 19 + TypeScript + Vite 8</div>
                    <div>Styling: Tailwind CSS v4</div>
                    <div>Libraries: jsPDF, html2canvas, lucide-react</div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block mb-1">Minimum Hardware Requirements:</strong>
                    <div>Processor: Intel Core i3 / AMD Ryzen 3 (or higher)</div>
                    <div>RAM: 4 GB (8 GB recommended for multitasking)</div>
                    <div>Storage: 500 MB free disk space</div>
                    <div>Display Resolution: 1366 x 768 or higher (Full HD 1920x1080 recommended)</div>
                    <div>Web Browser: Google Chrome, Firefox, Safari, or Microsoft Edge</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 2: ARCHITECTURE */}
          {activeSection === 'architecture' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">System Architecture Diagram</h3>
                <p className="text-xs text-slate-500">
                  Visual structural breakdown of the single-page application (SPA) data flow and component hierarchy.
                </p>
              </div>

              <div className="bg-slate-900 text-slate-200 p-5 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
{`+-----------------------------------------------------------------------------------+
|                                 USER BROWSER / CLIENT                             |
+-----------------------------------------------------------------------------------+
                                          |
                                          v
+-----------------------------------------------------------------------------------+
|                        PRESENTATION LAYER (React 19 + Vite)                       |
|                                                                                   |
|  [Navbar]  <-------->  [Hero Page]  <-------->  [Builder Workspace View]          |
|                                                          |                        |
|                                          +---------------+---------------+        |
|                                          |                               |        |
|                                          v                               v        |
|                                 [Resume Form Panel]             [Live Preview]    |
|                                 - Personal Details              - Classic Tmpl    |
|                                 - Summary / Objective           - Modern Tmpl     |
|                                 - Education (Dynamic)           - Fresher Tmpl    |
|                                 - Technical Skills (Tags)       - Zoom Controls   |
|                                 - Academic Projects             - A4 Page Scaler  |
|                                 - Experience / Internships                        |
|                                 - Certifications / Honors                         |
+-----------------------------------------------------------------------------------+
                                          |
                                          v
+-----------------------------------------------------------------------------------+
|                        BUSINESS & DATA MANAGEMENT LAYER                           |
|                                                                                   |
|  [State Orchestrator: useState + useEffect]  <--->  [Validation Engine: RegEx]    |
|                       |                                                           |
|                       +--------------------->  [Completeness Calculator]          |
|                       |                                                           |
|                       v                                                           |
|         +-------------+-------------+                                             |
|         |                           |                                             |
|         v                           v                                             |
|   [Storage Handler]      [PDF Export Engine]                                      |
|   - localStorage API     - html2canvas (DOM to Canvas)                            |
|   - JSON serialization   - jsPDF (Canvas to A4 Vector Document)                  |
|   - Client-side cache    - Native browser print stream                            |
+-----------------------------------------------------------------------------------+`}
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm">Key Architectural Principles</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block mb-1">1. Unidirectional Data Flow</strong>
                    <p className="text-slate-600">
                      State is lifted to the top-level <code>App</code> component and flows down to inputs and templates via props, guaranteeing synchronization.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block mb-1">2. Zero-Server Rendering</strong>
                    <p className="text-slate-600">
                      PDF conversion occurs entirely within browser Web APIs and Canvas memory, ensuring 100% privacy and zero hosting operational cost.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block mb-1">3. Modular Decomposition</strong>
                    <p className="text-slate-600">
                      Form modules, validation routines, and templates are isolated into distinct, reusable TypeScript files for easy maintenance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 3: DFD */}
          {activeSection === 'dfd' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Data Flow Diagrams (DFD)</h3>
                <p className="text-xs text-slate-500">
                  Level 0 (Context Level) and Level 1 Detailed Process decomposition.
                </p>
              </div>

              <div className="bg-slate-900 text-slate-200 p-5 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
{`--- DFD LEVEL 0 (CONTEXT DIAGRAM) ---

     [ User / Student ]
             |
             | 1. Form Inputs (Personal, Edu, Skills, Projects)
             | 2. Template Selection & Accent Color
             | 3. PDF Download Request
             v
+--------------------------+
|                          |
|      PROCESS 0.0         |
|   Resume Builder System  |
|                          |
+--------------------------+
             |
             | 1. Live Rendered HTML Document
             | 2. Completeness Feedback & Error Alerts
             | 3. High-Resolution A4 PDF File
             v
     [ User / Student ]



--- DFD LEVEL 1 (PROCESS DECOMPOSITION) ---

  [ User ]
     |
     +--- (Input Data) --------> [ 1.0 Validate Form Inputs ]
                                            |
                                            | (Valid Data)
                                            v
                                 [ 2.0 State Dispatcher ] <====> [(D1) Browser localStorage]
                                       |            |
                     +-----------------+            +------------------+
                     | (State Payload)                                 | (State Payload)
                     v                                                 v
         [ 3.0 Calculate Score ]                           [ 4.0 Template Renderer ]
                     |                                                 |
                     v                                                 v
         (Completeness Meter)                              (Live Resume DOM Sheet)
                                                                       |
                                                                       | (Trigger Export)
                                                                       v
                                                           [ 5.0 PDF Generator ]
                                                           - html2canvas rasterizer
                                                           - jsPDF A4 pagination
                                                                       |
                                                                       v
                                                           (Downloadable .PDF File)`}
              </div>
            </div>
          )}

          {/* SECTION 4: TESTING */}
          {activeSection === 'testing' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Test Cases & Verification Matrix</h3>
                <p className="text-xs text-slate-500">
                  Comprehensive test specifications demonstrating black-box and functional verification for your college review.
                </p>
              </div>

              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="p-2.5">Test ID</th>
                      <th className="p-2.5">Module Tested</th>
                      <th className="p-2.5">Input / Action</th>
                      <th className="p-2.5">Expected Output</th>
                      <th className="p-2.5">Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="p-2.5 font-mono font-bold text-slate-900">TC-01</td>
                      <td className="p-2.5">Validation</td>
                      <td className="p-2.5">Submit empty Full Name or invalid email format &apos;abc@&apos;</td>
                      <td className="p-2.5">Display red border & descriptive error message</td>
                      <td className="p-2.5 text-emerald-600 font-bold">PASS</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-mono font-bold text-slate-900">TC-02</td>
                      <td className="p-2.5">Live Preview</td>
                      <td className="p-2.5">Type &apos;Alex Johnson&apos; into Name input</td>
                      <td className="p-2.5">Preview header updates instantaneously</td>
                      <td className="p-2.5 text-emerald-600 font-bold">PASS</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-mono font-bold text-slate-900">TC-03</td>
                      <td className="p-2.5">Dynamic Fields</td>
                      <td className="p-2.5">Click &apos;Add Education&apos; and &apos;Add Project&apos;</td>
                      <td className="p-2.5">New entry added to array; delete button removes it cleanly</td>
                      <td className="p-2.5 text-emerald-600 font-bold">PASS</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-mono font-bold text-slate-900">TC-04</td>
                      <td className="p-2.5">Template Switch</td>
                      <td className="p-2.5">Switch from Student to Classic to Modern</td>
                      <td className="p-2.5">Layout re-renders immediately with zero data loss</td>
                      <td className="p-2.5 text-emerald-600 font-bold">PASS</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-mono font-bold text-slate-900">TC-05</td>
                      <td className="p-2.5">PDF Generation</td>
                      <td className="p-2.5">Click &apos;Download PDF&apos; button</td>
                      <td className="p-2.5">Generates sanitized filename e.g. Alex_Johnson_Resume.pdf</td>
                      <td className="p-2.5 text-emerald-600 font-bold">PASS</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-mono font-bold text-slate-900">TC-06</td>
                      <td className="p-2.5">Persistence</td>
                      <td className="p-2.5">Click &apos;Save Changes&apos; then refresh the browser tab</td>
                      <td className="p-2.5">Stored data restores from localStorage correctly</td>
                      <td className="p-2.5 text-emerald-600 font-bold">PASS</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-mono font-bold text-slate-900">TC-07</td>
                      <td className="p-2.5">Completeness</td>
                      <td className="p-2.5">Fill in all required contact, edu, and skill fields</td>
                      <td className="p-2.5">Progress bar recalculates to 100% with green checkmarks</td>
                      <td className="p-2.5 text-emerald-600 font-bold">PASS</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* SECTION 5: VIVA QUESTIONS */}
          {activeSection === 'viva' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Top 15 Viva Questions & Model Answers</h3>
                <p className="text-xs text-slate-500">
                  Read these before your internal and external project review. They cover fundamentals and architectural decisions.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="font-bold text-blue-700">Q1. What is React and why did you choose it over vanilla JavaScript?</div>
                  <div className="text-slate-700 mt-1">
                    <strong>Answer:</strong> React is a declarative component-based JavaScript library for building user interfaces. It uses a Virtual DOM to perform efficient reconciliation and re-rendering. In this Resume Builder, when a user types in a form field, React updates only the specific preview node rather than reloading the entire webpage, achieving real-time side-by-side synchronization.
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="font-bold text-blue-700">Q2. What is Vite and how does it compare to Create React App (CRA)?</div>
                  <div className="text-slate-700 mt-1">
                    <strong>Answer:</strong> Vite is a next-generation build tool created by Evan You. Unlike Create React App which uses Webpack to bundle the entire application before starting the dev server, Vite leverages native ES Modules (ESM) in modern browsers and performs ultra-fast Hot Module Replacement using esbuild (written in Go). This yields near-instant startup times and significantly faster production builds.
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="font-bold text-blue-700">Q3. How does state management work in your application?</div>
                  <div className="text-slate-700 mt-1">
                    <strong>Answer:</strong> We follow the React principle of <em>&ldquo;Lifting State Up&rdquo;</em>. The entire resume data structure is held in the top-level parent component (<code>App.tsx</code>) using <code>useState</code>. It is passed down to <code>ResumeForm</code> for modification via handler callbacks, and passed down to <code>ResumePreview</code> for read-only rendering.
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="font-bold text-blue-700">Q4. How does the application generate the PDF?</div>
                  <div className="text-slate-700 mt-1">
                    <strong>Answer:</strong> We use a two-step client-side pipeline: First, <code>html2canvas</code> traverses the DOM tree of the resume element, parses its CSS styles, and draws a high-resolution 2D Canvas bitmap. Second, <code>jsPDF</code> instantiates an A4 dimension document (210mm x 297mm) and draws that canvas into a clean, downloadable PDF file. We also provide a native <code>window.print()</code> trigger for pure vector text export.
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="font-bold text-blue-700">Q5. Why use browser localStorage instead of a database in this stage?</div>
                  <div className="text-slate-700 mt-1">
                    <strong>Answer:</strong> LocalStorage provides synchronous, client-side key-value persistence without requiring backend servers, database costs, or network latency. It allows students to close and re-open the browser without losing their drafted resume. The limitations are that localStorage is limited to ~5MB per domain and cannot be synced across multiple devices, which provides the rationale for Phase 16 (Node/Express + MongoDB).
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="font-bold text-blue-700">Q6. What makes a resume &ldquo;ATS-Friendly&rdquo;?</div>
                  <div className="text-slate-700 mt-1">
                    <strong>Answer:</strong> Applicant Tracking Systems (ATS) use text parsers to extract candidate names, contact details, education, and keywords. ATS systems stumble on complex multi-layered graphical shapes, floating text boxes, and non-standard symbols. Our templates use clear semantic HTML headings (h1, h2), standard section titles (&ldquo;Education&rdquo;, &ldquo;Technical Skills&rdquo;, &ldquo;Projects&rdquo;), and readable font hierarchies.
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="font-bold text-blue-700">Q7. How do you handle dynamic arrays like adding multiple educations or projects?</div>
                  <div className="text-slate-700 mt-1">
                    <strong>Answer:</strong> In React, state must be treated as immutable. To add a project, we use the spread operator: <code>onChange([...projects, newProject])</code>. To delete, we use <code>projects.filter(p =&gt; p.id !== id)</code>. Each item is assigned a unique timestamp-based ID (<code>id: Date.now()</code>) so React keys maintain proper DOM reconciliation.
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="font-bold text-blue-700">Q8. How would you connect MongoDB and Node.js in the advanced phase?</div>
                  <div className="text-slate-700 mt-1">
                    <strong>Answer:</strong> We would build an Express.js REST API with routes: <code>POST /api/auth/register</code>, <code>POST /api/auth/login</code> (generating a JWT token), <code>POST /api/resumes</code>, and <code>GET /api/resumes</code>. Mongoose would be used as the ODM to validate resume schemas against MongoDB collections.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs">
          <span className="text-slate-500 font-medium">Use this documentation for your Project Report &amp; PPT presentation</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 font-semibold transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
