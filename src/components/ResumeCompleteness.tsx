import React, { useState } from 'react';
import { calculateCompleteness } from '../utils/validation';
import { ResumeData } from '../types/resume';
import { CheckCircle2, AlertCircle, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

interface Props {
  data: ResumeData;
}

export const ResumeCompleteness: React.FC<Props> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { score, items, missingCount } = calculateCompleteness(data);

  const getScoreColor = () => {
    if (score >= 80) return 'text-emerald-600';
    if (score >= 50) return 'text-amber-600';
    return 'text-rose-600';
  };

  const getBarColor = () => {
    if (score >= 80) return 'bg-emerald-500';
    if (score >= 50) return 'bg-amber-500';
    return 'bg-rose-500';
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-blue-600" />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                Resume Completeness
              </span>
              <span className={`text-sm font-extrabold ${getScoreColor()}`}>{score}%</span>
            </div>
            <p className="text-[11px] text-slate-500">
              {missingCount === 0
                ? 'All recommended sections completed!'
                : `${missingCount} recommended section${missingCount > 1 ? 's' : ''} can be enhanced.`}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-medium text-slate-500 hover:text-slate-800 flex items-center gap-1 py-1 px-2 rounded hover:bg-slate-100 transition-colors"
        >
          {isExpanded ? 'Hide Details' : 'View Tips'}
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mt-3">
        <div
          className={`h-full transition-all duration-500 ease-out ${getBarColor()}`}
          style={{ width: `${score}%` }}
        />
      </div>

      {/* Expandable Checklist and Guidance */}
      {isExpanded && (
        <div className="mt-4 pt-3 border-t border-slate-100 space-y-2.5">
          <div className="text-[11px] font-semibold text-slate-700">Section Checklist:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {items.map((item, idx) => (
              <div
                key={idx}
                className={`p-2 rounded text-xs flex items-start gap-2 ${
                  item.isComplete ? 'bg-emerald-50/60 border border-emerald-100' : 'bg-slate-50 border border-slate-200'
                }`}
              >
                {item.isComplete ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <div className={`font-semibold ${item.isComplete ? 'text-emerald-900' : 'text-slate-800'}`}>
                    {item.section}
                  </div>
                  {!item.isComplete && (
                    <p className="text-[11px] text-slate-600 mt-0.5">{item.tip}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-[10px] text-slate-400 italic text-center pt-2">
            * Note: Completeness score is an editorial guideline based on standard engineering resume sections; it does not guarantee hiring or interview selection.
          </p>
        </div>
      )}
    </div>
  );
};
