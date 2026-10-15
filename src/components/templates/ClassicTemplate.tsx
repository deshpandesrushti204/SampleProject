import React from 'react';
import { ResumeData } from '../../types/resume';

interface TemplateProps {
  data: ResumeData;
  accentColor: string;
}

export const ClassicTemplate: React.FC<TemplateProps> = ({ data, accentColor }) => {
  const { personalInfo, summary, education, skills, projects, experience, certifications, achievements } = data;

  return (
    <div
      className="w-full bg-white text-slate-800 p-8 sm:p-12 text-[13px] leading-relaxed select-text"
      style={{ fontFamily: "'Merriweather', Georgia, serif" }}
    >
      {/* Header */}
      <header className="text-center pb-5 mb-5 border-b-2 border-slate-900">
        <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-slate-900 mb-2">
          {personalInfo.fullName || 'YOUR FULL NAME'}
        </h1>
        {personalInfo.jobTitle && (
          <p className="text-sm font-sans tracking-wider text-slate-600 uppercase mb-3" style={{ color: accentColor }}>
            {personalInfo.jobTitle}
          </p>
        )}

        {/* Contact Line */}
        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-xs font-sans text-slate-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {(personalInfo.city || personalInfo.state) && (
            <span>• {[personalInfo.city, personalInfo.state].filter(Boolean).join(', ')}</span>
          )}
          {personalInfo.linkedin && <span>• {personalInfo.linkedin}</span>}
          {personalInfo.github && <span>• {personalInfo.github}</span>}
          {personalInfo.portfolio && <span>• {personalInfo.portfolio}</span>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-5">
          <h2
            className="text-xs font-sans font-bold uppercase tracking-widest pb-1 mb-2 border-b border-slate-300"
            style={{ color: accentColor }}
          >
            Professional Summary
          </h2>
          <p className="text-justify text-slate-700 leading-normal">{summary}</p>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-5">
          <h2
            className="text-xs font-sans font-bold uppercase tracking-widest pb-1 mb-2 border-b border-slate-300"
            style={{ color: accentColor }}
          >
            Education
          </h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-slate-900">
                    {edu.degree} {edu.branch ? `— ${edu.branch}` : ''}
                  </div>
                  <div className="italic text-slate-700 text-xs">
                    {edu.institution} {edu.city ? `(${edu.city})` : ''}
                  </div>
                </div>
                <div className="text-right text-xs font-sans">
                  <div className="font-medium text-slate-700">
                    {edu.startYear} - {edu.endYear}
                  </div>
                  {edu.score && <div className="text-slate-600 font-semibold">{edu.score}</div>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Technical Skills */}
      {(skills.languages.length > 0 ||
        skills.frameworks.length > 0 ||
        skills.databases.length > 0 ||
        skills.tools.length > 0) && (
        <section className="mb-5">
          <h2
            className="text-xs font-sans font-bold uppercase tracking-widest pb-1 mb-2 border-b border-slate-300"
            style={{ color: accentColor }}
          >
            Technical Proficiencies
          </h2>
          <div className="text-xs space-y-1 font-sans">
            {skills.languages.length > 0 && (
              <p>
                <strong className="font-semibold text-slate-900 font-serif">Languages: </strong>
                {skills.languages.join(', ')}
              </p>
            )}
            {skills.frameworks.length > 0 && (
              <p>
                <strong className="font-semibold text-slate-900 font-serif">Frameworks & Libraries: </strong>
                {skills.frameworks.join(', ')}
              </p>
            )}
            {skills.databases.length > 0 && (
              <p>
                <strong className="font-semibold text-slate-900 font-serif">Databases: </strong>
                {skills.databases.join(', ')}
              </p>
            )}
            {skills.tools.length > 0 && (
              <p>
                <strong className="font-semibold text-slate-900 font-serif">Developer Tools: </strong>
                {skills.tools.join(', ')}
              </p>
            )}
            {skills.softSkills.length > 0 && (
              <p>
                <strong className="font-semibold text-slate-900 font-serif">Key Competencies: </strong>
                {skills.softSkills.join(', ')}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-5">
          <h2
            className="text-xs font-sans font-bold uppercase tracking-widest pb-1 mb-2 border-b border-slate-300"
            style={{ color: accentColor }}
          >
            Key Projects
          </h2>
          <div className="space-y-3">
            {projects.map((proj) => (
              <div key={proj.id}>
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-slate-900">
                    {proj.title}
                    {proj.projectUrl && (
                      <span className="font-sans font-normal text-xs ml-2 text-slate-500">
                        [{proj.projectUrl}]
                      </span>
                    )}
                  </div>
                  {proj.technologies && (
                    <span className="font-sans italic text-xs text-slate-600">
                      {proj.technologies}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-700 mt-1 leading-normal text-justify">
                  {proj.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience / Internships */}
      {experience.length > 0 && (
        <section className="mb-5">
          <h2
            className="text-xs font-sans font-bold uppercase tracking-widest pb-1 mb-2 border-b border-slate-300"
            style={{ color: accentColor }}
          >
            Experience & Internships
          </h2>
          <div className="space-y-3">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-slate-900">{exp.role}</span>
                    <span className="italic text-slate-700 text-xs"> — {exp.company}</span>
                  </div>
                  <div className="text-right text-xs font-sans text-slate-600">
                    {exp.startDate} - {exp.isCurrent ? 'Present' : exp.endDate}
                  </div>
                </div>
                <p className="text-xs text-slate-700 mt-1 leading-normal">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications & Achievements */}
      {(certifications.length > 0 || achievements.length > 0) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.length > 0 && (
            <section>
              <h2
                className="text-xs font-sans font-bold uppercase tracking-widest pb-1 mb-2 border-b border-slate-300"
                style={{ color: accentColor }}
              >
                Certifications
              </h2>
              <ul className="list-disc list-inside text-xs space-y-1 text-slate-700">
                {certifications.map((c) => (
                  <li key={c.id}>
                    <span className="font-medium text-slate-900">{c.name}</span> — {c.issuer} ({c.issueDate})
                  </li>
                ))}
              </ul>
            </section>
          )}

          {achievements.length > 0 && (
            <section>
              <h2
                className="text-xs font-sans font-bold uppercase tracking-widest pb-1 mb-2 border-b border-slate-300"
                style={{ color: accentColor }}
              >
                Honors & Activities
              </h2>
              <ul className="list-disc list-inside text-xs space-y-1 text-slate-700">
                {achievements.map((a) => (
                  <li key={a.id}>
                    <span className="font-medium text-slate-900">{a.title}</span>
                    {a.description && <span className="block pl-4 text-slate-600 text-[11px]">{a.description}</span>}
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
