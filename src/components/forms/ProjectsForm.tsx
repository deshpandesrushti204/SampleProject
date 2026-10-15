import React from 'react';
import { Project } from '../../types/resume';
import { FolderGit2, Plus, Trash2, ExternalLink, Github } from 'lucide-react';

interface Props {
  projects: Project[];
  onChange: (updated: Project[]) => void;
}

export const ProjectsForm: React.FC<Props> = ({ projects, onChange }) => {
  const handleAdd = () => {
    const newProject: Project = {
      id: `proj-${Date.now()}`,
      title: '',
      description: '',
      technologies: '',
      projectUrl: '',
      githubUrl: '',
    };
    onChange([...projects, newProject]);
  };

  const handleRemove = (id: string) => {
    onChange(projects.filter((p) => p.id !== id));
  };

  const handleUpdate = (id: string, field: keyof Project, value: string) => {
    onChange(
      projects.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center border-b border-slate-100 pb-2">
        <div>
          <h3 className="text-base font-semibold text-slate-800 flex items-center gap-2">
            <FolderGit2 className="w-4 h-4 text-blue-600" />
            Academic & Personal Projects
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Essential for ISE/Engineering students. Highlight mini-projects, hackathons, and capstone work.
          </p>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Project
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-6 bg-slate-50 border border-dashed border-slate-200 rounded-lg">
          <p className="text-xs text-slate-500">No projects added yet.</p>
          <button
            type="button"
            onClick={handleAdd}
            className="mt-2 text-xs font-semibold text-blue-600 hover:underline"
          >
            + Add your first project
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {projects.map((proj, index) => (
            <div
              key={proj.id}
              className="p-4 bg-white border border-slate-200 rounded-lg space-y-3 relative group"
            >
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Project #{index + 1}
                </span>
                <button
                  type="button"
                  onClick={() => handleRemove(proj.id)}
                  className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                  title="Remove project"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Project Title <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={proj.title}
                    onChange={(e) => handleUpdate(proj.id, 'title', e.target.value)}
                    placeholder="e.g. Smart Task Manager"
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Technologies & Tools Used
                  </label>
                  <input
                    type="text"
                    value={proj.technologies}
                    onChange={(e) => handleUpdate(proj.id, 'technologies', e.target.value)}
                    placeholder="e.g. React, JavaScript, CSS, and Local Storage"
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Project Description & Key Accomplishments
                  </label>
                  <textarea
                    rows={3}
                    value={proj.description}
                    onChange={(e) => handleUpdate(proj.id, 'description', e.target.value)}
                    placeholder="Describe what problem it solves, architecture choices, and metrics (e.g. A sample web application for organizing tasks, tracking progress, and managing deadlines)."
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      Live Demo URL (Optional)
                    </label>
                    <input
                      type="text"
                      value={proj.projectUrl || ''}
                      onChange={(e) => handleUpdate(proj.id, 'projectUrl', e.target.value)}
                      placeholder="e.g. https://example.com/task-manager"
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                      <Github className="w-3.5 h-3.5 text-slate-400" />
                      GitHub Repo URL (Optional)
                    </label>
                    <input
                      type="text"
                      value={proj.githubUrl || ''}
                      onChange={(e) => handleUpdate(proj.id, 'githubUrl', e.target.value)}
                      placeholder="e.g. https://github.com/sample-user/smart-task-manager"
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
