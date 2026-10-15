import React from 'react';
import { Education } from '../../types/resume';
import { GraduationCap, Plus, Trash2 } from 'lucide-react';

interface Props {
  education: Education[];
  onChange: (updated: Education[]) => void;
}

export const EducationForm: React.FC<Props> = ({ education, onChange }) => {
  const handleAdd = () => {
    const newItem: Education = {
      id: `edu-${Date.now()}`,
      institution: '',
      degree: 'Bachelor of Engineering in Computer Science',
      branch: 'Computer Science',
      startYear: '',
      endYear: '',
      score: '',
      city: '',
    };
    onChange([...education, newItem]);
  };

  const handleRemove = (id: string) => {
    onChange(education.filter((item) => item.id !== id));
  };

  const handleUpdate = (id: string, field: keyof Education, value: string) => {
    onChange(
      education.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center border-b border-slate-100 pb-2">
        <div>
          <h3 className="text-base font-semibold text-slate-800 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-blue-600" />
            Education & Academic Credentials
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Add your engineering degree, PUC/12th grade, or diploma.
          </p>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Education
        </button>
      </div>

      {education.length === 0 ? (
        <div className="text-center py-6 bg-slate-50 border border-dashed border-slate-200 rounded-lg">
          <p className="text-xs text-slate-500">No education entries added yet.</p>
          <button
            type="button"
            onClick={handleAdd}
            className="mt-2 text-xs font-semibold text-blue-600 hover:underline"
          >
            + Add your college or university
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="p-4 bg-white border border-slate-200 rounded-lg space-y-3 relative group"
            >
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Entry #{index + 1}
                </span>
                <button
                  type="button"
                  onClick={() => handleRemove(edu.id)}
                  className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                  title="Remove education"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    College / University / School Name
                  </label>
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) => handleUpdate(edu.id, 'institution', e.target.value)}
                    placeholder="e.g. ABC Institute of Technology"
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Degree / Qualification
                  </label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => handleUpdate(edu.id, 'degree', e.target.value)}
                    placeholder="e.g. Bachelor of Engineering in Computer Science"
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Branch / Major / Stream
                  </label>
                  <input
                    type="text"
                    value={edu.branch}
                    onChange={(e) => handleUpdate(edu.id, 'branch', e.target.value)}
                    placeholder="e.g. Computer Science"
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Start Year
                  </label>
                  <input
                    type="text"
                    value={edu.startYear}
                    onChange={(e) => handleUpdate(edu.id, 'startYear', e.target.value)}
                    placeholder="e.g. 2023"
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    End Year (or Expected)
                  </label>
                  <input
                    type="text"
                    value={edu.endYear}
                    onChange={(e) => handleUpdate(edu.id, 'endYear', e.target.value)}
                    placeholder="e.g. 2027"
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    CGPA / Percentage
                  </label>
                  <input
                    type="text"
                    value={edu.score}
                    onChange={(e) => handleUpdate(edu.id, 'score', e.target.value)}
                    placeholder="e.g. 8.5/10 CGPA"
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Location / City
                  </label>
                  <input
                    type="text"
                    value={edu.city}
                    onChange={(e) => handleUpdate(edu.id, 'city', e.target.value)}
                    placeholder="e.g. Sample City, Sample Country"
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
