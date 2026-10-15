import React from 'react';
import { ResumeData } from '../../types/resume';

interface TemplateProps {
  data: ResumeData;
  accentColor: string;
}

export const FresherTemplate: React.FC<TemplateProps> = ({ data, accentColor }) => {
  const { personalInfo, summary, education, skills, projects, experience, certifications, achievements } = data;

  return (
    <div
      className="w-full bg-white text-slate-900 p-8 sm:p-11 text-[12.5px] leading-relaxed select-text"
      style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
    >
      {/* Header */}
      <header className="border-b-2 pb-4 mb-4" style={{ borderColor: accentColor }}>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
              {personalInfo.fullName || 'Candidate Name'}
            </h1>
            <p className="text-xs font-semibold uppercase tracking-wider mt-0.5" style={{ color: accentColor }}>
              {personalInfo.jobTitle || 'Computer Science / Engineering Student'}
            </p>
          </div>

          {/* Contact Details */}
          <div className="text-xs text-slate-600 sm:text-right space-y-0.5 font-medium">
            <div>
              {personalInfo.email && <span className="hover:underline">{personalInfo.email}</span>}
              {personalInfo.phone && <span> | {personalInfo.phone}</span>}
            </div>
            <div>
              {(personalInfo.city || personalInfo.state) && (
                <span>{[personalInfo.city, personalInfo.state].filter(Boolean).join(', ')}</span>
              )}
            </div>
            <div className="text-[11px] text-slate-500">
              {personalInfo.linkedin && (
                <span className="mr-2">LinkedIn: {personalInfo.linkedin}</span>
              )}
              {personalInfo.github && (
                <span>GitHub: {personalInfo.github}</span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Career Objective / Summary */}
      {summary && (
        <section className="mb-4">
          <div
            className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 mb-1.5 rounded inline-block text-white"
            style={{ backgroundColor: accentColor }}
          >
            Career Objective
          </div>
          <p className="text-slate-700 leading-normal text-justify text-xs">{summary}</p>
        </section>
      )}

      {/* Education - Prominent for Freshers */}
      {education.length > 0 && (
        <section className="mb-4">
          <div
            className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 mb-2 rounded inline-block text-white"
            style={{ backgroundColor: accentColor }}
          >
            Education & Academic Credentials
          </div>
          <div className="space-y-2">
            {education.map((edu) => (
              <div key={edu.id} className="border-l-2 pl-3 py-0.5" style={{ borderColor: accentColor }}>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-900 text-xs">
                    {edu.degree} {edu.branch ? `in ${edu.branch}` : ''}
                  </span>
                  <span className="text-xs text-slate-600 font-medium">
                    {edu.startYear} – {edu.endYear}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-600 mt-0.5">
                  <span className="italic">{edu.institution} {edu.city ? `• ${edu.city}` : ''}</span>
                  {edu.score && (
                    <span className="font-semibold text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded text-[11px]">
                      Score: {edu.score}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Technical Skills - Critical for Freshers */}
      {(skills.languages.length > 0 ||
        skills.frameworks.length > 0 ||
        skills.databases.length > 0 ||
        skills.tools.length > 0 ||
        skills.softSkills.length > 0) && (
        <section className="mb-4">
          <div
            className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 mb-2 rounded inline-block text-white"
            style={{ backgroundColor: accentColor }}
          >
            Technical & Professional Skills
          </div>
          <div className="text-xs space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-200/80">
            {skills.languages.length > 0 && (
              <div className="grid grid-cols-12 gap-1">
                <span className="col-span-3 font-semibold text-slate-800">Programming Languages:</span>
                <span className="col-span-9 text-slate-700">{skills.languages.join(', ')}</span>
              </div>
            )}
            {skills.frameworks.length > 0 && (
              <div className="grid grid-cols-12 gap-1">
                <span className="col-span-3 font-semibold text-slate-800">Frameworks & Libraries:</span>
                <span className="col-span-9 text-slate-700">{skills.frameworks.join(', ')}</span>
              </div>
            )}
            {skills.databases.length > 0 && (
              <div className="grid grid-cols-12 gap-1">
                <span className="col-span-3 font-semibold text-slate-800">Databases:</span>
                <span className="col-span-9 text-slate-700">{skills.databases.join(', ')}</span>
              </div>
            )}
            {skills.tools.length > 0 && (
              <div className="grid grid-cols-12 gap-1">
                <span className="col-span-3 font-semibold text-slate-800">Developer Tools:</span>
                <span className="col-span-9 text-slate-700">{skills.tools.join(', ')}</span>
              </div>
            )}
            {skills.softSkills.length > 0 && (
              <div className="grid grid-cols-12 gap-1">
                <span className="col-span-3 font-semibold text-slate-800">Core Competencies:</span>
                <span className="col-span-9 text-slate-700">{skills.softSkills.join(', ')}</span>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Academic / Capstone Projects */}
      {projects.length > 0 && (
        <section className="mb-4">
          <div
            className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 mb-2 rounded inline-block text-white"
            style={{ backgroundColor: accentColor }}
          >
            Academic & Capstone Projects
          </div>
          <div className="space-y-3">
            {projects.map((proj) => (
              <div key={proj.id} className="border-l-2 pl-3 py-0.5" style={{ borderColor: accentColor }}>
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-slate-900 text-xs">
                    {proj.title}
                    {proj.githubUrl && (
                      <span className="font-normal font-mono text-[11px] text-slate-500 ml-2">
                        [Repo: {proj.githubUrl}]
                      </span>
                    )}
                  </div>
                </div>
                {proj.technologies && (
                  <div className="text-[11px] text-slate-600 font-medium">
                    <span className="text-slate-800 font-semibold">Technologies:</span> {proj.technologies}
                  </div>
                )}
                <p className="text-slate-700 mt-1 text-xs leading-normal text-justify">
                  {proj.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Internships / Practical Experience */}
      {experience.length > 0 && (
        <section className="mb-4">
          <div
            className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 mb-2 rounded inline-block text-white"
            style={{ backgroundColor: accentColor }}
          >
            Internships & Work Experience
          </div>
          <div className="space-y-2.5">
            {experience.map((exp) => (
              <div key={exp.id} className="border-l-2 pl-3 py-0.5" style={{ borderColor: accentColor }}>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-900 text-xs">{exp.role}</span>
                  <span className="text-xs text-slate-600 font-medium">
                    {exp.startDate} – {exp.isCurrent ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  {exp.company} {exp.location ? `• ${exp.location}` : ''}
                </div>
                <p className="text-slate-700 mt-1 text-xs leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications & Co-Curricular */}
      {(certifications.length > 0 || achievements.length > 0) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.length > 0 && (
            <section>
              <div
                className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 mb-1.5 rounded inline-block text-white"
                style={{ backgroundColor: accentColor }}
              >
                Certifications
              </div>
              <ul className="text-xs space-y-1 text-slate-700">
                {certifications.map((cert) => (
                  <li key={cert.id} className="flex items-start gap-1.5">
                    <span className="text-slate-400 mt-0.5">•</span>
                    <div>
                      <strong className="text-slate-900">{cert.name}</strong>
                      <span className="text-slate-500"> ({cert.issuer}, {cert.issueDate})</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {achievements.length > 0 && (
            <section>
              <div
                className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 mb-1.5 rounded inline-block text-white"
                style={{ backgroundColor: accentColor }}
              >
                Achievements & Activities
              </div>
              <ul className="text-xs space-y-1 text-slate-700">
                {achievements.map((ach) => (
                  <li key={ach.id} className="flex items-start gap-1.5">
                    <span className="text-slate-400 mt-0.5">•</span>
                    <div>
                      <strong className="text-slate-900">{ach.title}</strong>
                      {ach.description && <span className="text-slate-600"> — {ach.description}</span>}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      )}
    </div>
  );
};
