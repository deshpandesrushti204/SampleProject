import React from 'react';
import { Achievement } from '../../types/resume';
import { Trophy, Plus, Trash2 } from 'lucide-react';

interface Props {
  achievements: Achievement[];
  onChange: (updated: Achievement[]) => void;
}

export const AchievementsForm: React.FC<Props> = ({ achievements, onChange }) => {
  const handleAdd = () => {
    const newAch: Achievement = {
      id: `ach-${Date.now()}`,
      title: '',
      description: '',
      date: '',
    };
    onChange([...achievements, newAch]);
  };

  const handleRemove = (id: string) => {
    onChange(achievements.filter((a) => a.id !== id));
  };

  const handleUpdate = (id: string, field: keyof Achievement, value: string) => {
    onChange(
      achievements.map((a) => (a.id === id ? { ...a, [field]: value } : a))
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center border-b border-slate-100 pb-2">
        <div>
          <h3 className="text-base font-semibold text-slate-800 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-blue-600" />
            Achievements & Extracurricular Activities
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Hackathon wins, coding rankings (LeetCode/CodeChef), club leadership, or sports.
          </p>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Achievement
        </button>
      </div>

      {achievements.length === 0 ? (
        <div className="text-center py-5 bg-slate-50 border border-dashed border-slate-200 rounded-lg">
          <p className="text-xs text-slate-500">No achievements added yet.</p>
          <button
            type="button"
            onClick={handleAdd}
            className="mt-1 text-xs font-semibold text-blue-600 hover:underline"
          >
            + Add an achievement or award
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className="p-3.5 bg-white border border-slate-200 rounded-lg space-y-2 relative"
            >
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  value={ach.title}
                  onChange={(e) => handleUpdate(ach.id, 'title', e.target.value)}
                  placeholder="Achievement Title (e.g. Practice Projects in Web Development)"
                  className="w-full text-xs font-bold text-slate-800 border-b border-transparent hover:border-slate-300 focus:border-blue-500 focus:outline-none py-1 mr-3"
                />
                <button
                  type="button"
                  onClick={() => handleRemove(ach.id)}
                  className="text-slate-400 hover:text-rose-600 p-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                <div className="sm:col-span-3">
                  <label className="block text-[11px] text-slate-500">Details / Description</label>
                  <input
                    type="text"
                    value={ach.description}
                    onChange={(e) => handleUpdate(ach.id, 'description', e.target.value)}
                    placeholder="e.g. Completed multiple practice projects in web development and built a responsive portfolio."
                    className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-500">Year / Date</label>
                  <input
                    type="text"
                    value={ach.date || ''}
                    onChange={(e) => handleUpdate(ach.id, 'date', e.target.value)}
                    placeholder="e.g. 2026"
                    className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-blue-500"
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
