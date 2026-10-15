import React from 'react';
import { Experience } from '../../types/resume';
import { Briefcase, Plus, Trash2 } from 'lucide-react';

interface Props {
  experience: Experience[];
  onChange: (updated: Experience[]) => void;
}

export const ExperienceForm: React.FC<Props> = ({ experience, onChange }) => {
  const handleAdd = () => {
    const newExp: Experience = {
      id: `exp-${Date.now()}`,
      company: '',
      role: '',
      location: '',
      startDate: '',
      endDate: '',
      isCurrent: false,
      description: '',
    };
    onChange([...experience, newExp]);
  };

  const handleRemove = (id: string) => {
    onChange(experience.filter((e) => e.id !== id));
  };

  const handleUpdate = (id: string, field: keyof Experience, value: any) => {
    onChange(
      experience.map((e) => (e.id === id ? { ...e, [field]: value } : e))
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center border-b border-slate-100 pb-2">
        <div>
          <h3 className="text-base font-semibold text-slate-800 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-blue-600" />
            Experience & Internships
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Add summer internships, part-time tech roles, or freelance work. (Optional for freshers)
          </p>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Experience
        </button>
      </div>

      {experience.length === 0 ? (
        <div className="text-center py-6 bg-slate-50 border border-dashed border-slate-200 rounded-lg">
          <p className="text-xs text-slate-500">No internship or job experience added.</p>
          <p className="text-[11px] text-slate-400 mt-1">If you are a fresher without internships, you can skip this section.</p>
          <button
            type="button"
            onClick={handleAdd}
            className="mt-2 text-xs font-semibold text-blue-600 hover:underline"
          >
            + Add an internship or role
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className="p-4 bg-white border border-slate-200 rounded-lg space-y-3 relative group"
            >
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Experience #{index + 1}
                </span>
                <button
                  type="button"
                  onClick={() => handleRemove(exp.id)}
                  className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                  title="Remove experience"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Job Title / Role
                  </label>
                  <input
                    type="text"
                    value={exp.role}
                    onChange={(e) => handleUpdate(exp.id, 'role', e.target.value)}
                    placeholder="e.g. Software Developer Intern"
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company / Organization Name
                  </label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => handleUpdate(exp.id, 'company', e.target.value)}
                    placeholder="e.g. XYZ Technologies"
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={exp.location}
                    onChange={(e) => handleUpdate(exp.id, 'location', e.target.value)}
                    placeholder="e.g. Sample City, Sample Country"
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Duration (Start – End)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={exp.startDate}
                      onChange={(e) => handleUpdate(exp.id, 'startDate', e.target.value)}
                      placeholder="e.g. June 2026"
                      className="px-2.5 py-1.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                    <input
                      type="text"
                      disabled={exp.isCurrent}
                      value={exp.isCurrent ? 'Present' : exp.endDate}
                      onChange={(e) => handleUpdate(exp.id, 'endDate', e.target.value)}
                      placeholder="e.g. August 2026"
                      className="px-2.5 py-1.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 disabled:bg-slate-100"
                    />
                  </div>
                  <label className="flex items-center gap-1.5 mt-1.5 text-xs text-slate-600">
                    <input
                      type="checkbox"
                      checked={exp.isCurrent}
                      onChange={(e) => handleUpdate(exp.id, 'isCurrent', e.target.checked)}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    Currently working here
                  </label>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Responsibilities & Contributions
                  </label>
                  <textarea
                    rows={3}
                    value={exp.description}
                    onChange={(e) => handleUpdate(exp.id, 'description', e.target.value)}
                    placeholder="Developed responsive user interface components, worked with JavaScript and React, collaborated with team members to improve application usability..."
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
