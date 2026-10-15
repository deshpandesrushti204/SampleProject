import React from 'react';
import { ResumeData } from '../../types/resume';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

interface TemplateProps {
  data: ResumeData;
  accentColor: string;
}

export const ModernTemplate: React.FC<TemplateProps> = ({ data, accentColor }) => {
  const { personalInfo, summary, education, skills, projects, experience, certifications, achievements } = data;

  return (
    <div
      className="w-full bg-white text-slate-800 text-[12px] leading-relaxed select-text"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Top Banner / Header */}
      <header
        className="p-8 sm:p-10 text-white"
        style={{
          background: `linear-gradient(135deg, ${accentColor} 0%, #0f172a 100%)`,
        }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {personalInfo.fullName || 'Candidate Name'}
            </h1>
            <p className="text-sm font-medium text-slate-200 mt-1">
              {personalInfo.jobTitle || 'Software Engineer / Student'}
            </p>
          </div>

          {/* Quick contact box */}
          <div className="flex flex-col gap-1 text-xs text-slate-200/90 sm:text-right">
            {personalInfo.email && (
              <div className="flex items-center sm:justify-end gap-1.5">
                <span>{personalInfo.email}</span>
                <Mail className="w-3 h-3 opacity-80" />
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center sm:justify-end gap-1.5">
                <span>{personalInfo.phone}</span>
                <Phone className="w-3 h-3 opacity-80" />
              </div>
            )}
            {(personalInfo.city || personalInfo.state) && (
              <div className="flex items-center sm:justify-end gap-1.5">
                <span>{[personalInfo.city, personalInfo.state].filter(Boolean).join(', ')}</span>
                <MapPin className="w-3 h-3 opacity-80" />
              </div>
            )}
            <div className="flex flex-wrap items-center sm:justify-end gap-2 mt-1">
              {personalInfo.linkedin && (
                <span className="text-[11px] bg-white/10 px-2 py-0.5 rounded">
                  {personalInfo.linkedin}
                </span>
              )}
              {personalInfo.github && (
                <span className="text-[11px] bg-white/10 px-2 py-0.5 rounded">
                  {personalInfo.github}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Two-Column Body */}
      <div className="grid grid-cols-1 md:grid-cols-12 p-8 sm:p-10 gap-8">
        {/* Left / Main Column (7 cols) */}
        <div className="md:col-span-7 space-y-6">
          {/* Summary */}
          {summary && (
            <section>
              <h2
                className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2"
                style={{ color: accentColor }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></span>
                Professional Summary
              </h2>
              <p className="text-slate-600 leading-normal text-justify">{summary}</p>
            </section>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <h2
                className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2"
                style={{ color: accentColor }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></span>
                Featured Projects
              </h2>
              <div className="space-y-3.5">
                {projects.map((proj) => (
                  <div key={proj.id} className="border-l-2 pl-3 border-slate-200">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-slate-900 text-xs">{proj.title}</h3>
                      {proj.projectUrl && (
                        <span className="text-[11px] text-slate-500 font-mono">
                          {proj.projectUrl}
                        </span>
                      )}
                    </div>
                    {proj.technologies && (
                      <div className="text-[11px] font-medium text-slate-500 mt-0.5">
                        Tech Stack: <span className="text-slate-700">{proj.technologies}</span>
                      </div>
                    )}
                    <p className="text-slate-600 mt-1 text-[11px] leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <section>
              <h2
                className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2"
                style={{ color: accentColor }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></span>
                Experience & Internships
              </h2>
              <div className="space-y-3">
                {experience.map((exp) => (
                  <div key={exp.id} className="border-l-2 pl-3 border-slate-200">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-slate-900 text-xs">{exp.role}</h3>
                      <span className="text-[10px] text-slate-500">
                        {exp.startDate} - {exp.isCurrent ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    <div className="text-[11px] font-semibold text-slate-700">{exp.company}</div>
                    <p className="text-slate-600 mt-1 text-[11px] leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column (5 cols) */}
        <div className="md:col-span-5 space-y-6">
          {/* Education */}
          {education.length > 0 && (
            <section>
              <h2
                className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2"
                style={{ color: accentColor }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></span>
                Education
              </h2>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.id} className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <div className="font-bold text-slate-900 text-xs">{edu.degree}</div>
                    <div className="text-[11px] text-slate-600 font-medium">{edu.branch}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{edu.institution}</div>
                    <div className="flex justify-between items-center text-[10px] text-slate-500 mt-1 pt-1 border-t border-slate-200">
                      <span>{edu.startYear} - {edu.endYear}</span>
                      {edu.score && <span className="font-bold text-slate-700">{edu.score}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technical Skills */}
          <section>
            <h2
              className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2"
              style={{ color: accentColor }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></span>
              Skills & Tools
            </h2>
            <div className="space-y-2 text-xs">
              {skills.languages.length > 0 && (
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Languages</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {skills.languages.map((l, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 text-[11px] px-2 py-0.5 rounded">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {skills.frameworks.length > 0 && (
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Frameworks</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {skills.frameworks.map((f, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 text-[11px] px-2 py-0.5 rounded">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {(skills.databases.length > 0 || skills.tools.length > 0) && (
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Databases & Tools</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {[...skills.databases, ...skills.tools].map((item, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 text-[11px] px-2 py-0.5 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Certifications */}
          {certifications.length > 0 && (
            <section>
              <h2
                className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2"
                style={{ color: accentColor }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></span>
                Certifications
              </h2>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div key={cert.id} className="text-[11px]">
                    <div className="font-semibold text-slate-900">{cert.name}</div>
                    <div className="text-slate-500 text-[10px]">{cert.issuer} • {cert.issueDate}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Achievements */}
          {achievements.length > 0 && (
            <section>
              <h2
                className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2"
                style={{ color: accentColor }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></span>
                Honors & Activities
              </h2>
              <div className="space-y-2">
                {achievements.map((ach) => (
                  <div key={ach.id} className="text-[11px]">
                    <div className="font-semibold text-slate-900">{ach.title}</div>
                    {ach.description && <div className="text-slate-500 text-[10px]">{ach.description}</div>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
