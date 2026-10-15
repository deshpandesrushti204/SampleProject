import React from 'react';
import { Certification } from '../../types/resume';
import { Award, Plus, Trash2, ExternalLink } from 'lucide-react';

interface Props {
  certifications: Certification[];
  onChange: (updated: Certification[]) => void;
}

export const CertificationsForm: React.FC<Props> = ({ certifications, onChange }) => {
  const handleAdd = () => {
    const newCert: Certification = {
      id: `cert-${Date.now()}`,
      name: '',
      issuer: '',
      issueDate: '',
      credentialUrl: '',
    };
    onChange([...certifications, newCert]);
  };

  const handleRemove = (id: string) => {
    onChange(certifications.filter((c) => c.id !== id));
  };

  const handleUpdate = (id: string, field: keyof Certification, value: string) => {
    onChange(
      certifications.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center border-b border-slate-100 pb-2">
        <div>
          <h3 className="text-base font-semibold text-slate-800 flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-600" />
            Certifications & Training
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Add online courses, cloud certs, or technical badges (NPTEL, Coursera, AWS, Oracle).
          </p>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Certificate
        </button>
      </div>

      {certifications.length === 0 ? (
        <div className="text-center py-5 bg-slate-50 border border-dashed border-slate-200 rounded-lg">
          <p className="text-xs text-slate-500">No certifications added yet.</p>
          <button
            type="button"
            onClick={handleAdd}
            className="mt-1 text-xs font-semibold text-blue-600 hover:underline"
          >
            + Add a course or certificate
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-3.5 bg-white border border-slate-200 rounded-lg space-y-2 relative"
            >
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  value={cert.name}
                  onChange={(e) => handleUpdate(cert.id, 'name', e.target.value)}
                  placeholder="Certificate Name (e.g. Introduction to Web Development)"
                  className="w-full text-xs font-bold text-slate-800 border-b border-transparent hover:border-slate-300 focus:border-blue-500 focus:outline-none py-1 mr-3"
                />
                <button
                  type="button"
                  onClick={() => handleRemove(cert.id)}
                  className="text-slate-400 hover:text-rose-600 p-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div>
                  <label className="block text-[11px] text-slate-500">Issuing Body</label>
                  <input
                    type="text"
                    value={cert.issuer}
                    onChange={(e) => handleUpdate(cert.id, 'issuer', e.target.value)}
                    placeholder="e.g. Online Learning Platform"
                    className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-slate-500">Issue Year</label>
                  <input
                    type="text"
                    value={cert.issueDate}
                    onChange={(e) => handleUpdate(cert.id, 'issueDate', e.target.value)}
                    placeholder="e.g. 2026"
                    className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-slate-500">Verification Link (Optional)</label>
                  <input
                    type="text"
                    value={cert.credentialUrl || ''}
                    onChange={(e) => handleUpdate(cert.id, 'credentialUrl', e.target.value)}
                    placeholder="e.g. https://example.com/cert/web-dev"
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
