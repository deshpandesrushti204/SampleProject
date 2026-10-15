import React from 'react';
import { ResumeData } from '../../types/resume';
import { User, Mail, Phone, MapPin, Linkedin, Github, Globe, Briefcase } from 'lucide-react';
import { ValidationErrors } from '../../utils/validation';

interface Props {
  data: ResumeData['personalInfo'];
  onChange: (updated: ResumeData['personalInfo']) => void;
  errors?: ValidationErrors;
}

export const PersonalInfoForm: React.FC<Props> = ({ data, onChange, errors = {} }) => {
  const handleChange = (field: keyof ResumeData['personalInfo'], value: string) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  return (
    <div className="space-y-4">
      <div className="border-b border-slate-100 pb-2">
        <h3 className="text-base font-semibold text-slate-800 flex items-center gap-2">
          <User className="w-4 h-4 text-blue-600" />
          Personal & Contact Information
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Enter your basic contact details. These appear at the very top of your resume.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {/* Full Name */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={data.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              placeholder="e.g. Alex Johnson"
              className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                errors['fullName']
                  ? 'border-rose-400 focus:ring-rose-200'
                  : 'border-slate-300 focus:border-blue-500 focus:ring-blue-100'
              }`}
            />
          </div>
          {errors['fullName'] && (
            <p className="text-xs text-rose-500 mt-1">{errors['fullName']}</p>
          )}
        </div>

        {/* Professional Title */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-slate-400" />
            Professional / Academic Title
          </label>
          <input
            type="text"
            value={data.jobTitle}
            onChange={(e) => handleChange('jobTitle', e.target.value)}
            placeholder="e.g. Frontend Developer"
            className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="e.g. alex.johnson@example.com"
            className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
              errors['email']
                ? 'border-rose-400 focus:ring-rose-200'
                : 'border-slate-300 focus:border-blue-500 focus:ring-blue-100'
            }`}
          />
          {errors['email'] && (
            <p className="text-xs text-rose-500 mt-1">{errors['email']}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-slate-400" />
            Phone Number
          </label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="e.g. +1 555-010-1234"
            className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
              errors['phone']
                ? 'border-rose-400 focus:ring-rose-200'
                : 'border-slate-300 focus:border-blue-500 focus:ring-blue-100'
            }`}
          />
          {errors['phone'] && (
            <p className="text-xs text-rose-500 mt-1">{errors['phone']}</p>
          )}
        </div>

        {/* City */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            City
          </label>
          <input
            type="text"
            value={data.city}
            onChange={(e) => handleChange('city', e.target.value)}
            placeholder="e.g. Sample City"
            className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* State / Country */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">State / Country</label>
          <input
            type="text"
            value={data.state}
            onChange={(e) => handleChange('state', e.target.value)}
            placeholder="e.g. Sample Country"
            className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* LinkedIn */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
            <Linkedin className="w-3.5 h-3.5 text-blue-600" />
            LinkedIn Profile
          </label>
          <input
            type="text"
            value={data.linkedin}
            onChange={(e) => handleChange('linkedin', e.target.value)}
            placeholder="e.g. https://www.linkedin.com/in/sample-profile"
            className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* GitHub */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
            <Github className="w-3.5 h-3.5 text-slate-700" />
            GitHub Profile
          </label>
          <input
            type="text"
            value={data.github}
            onChange={(e) => handleChange('github', e.target.value)}
            placeholder="e.g. https://github.com/sample-user"
            className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Portfolio */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-emerald-600" />
            Personal Portfolio / Website
          </label>
          <input
            type="text"
            value={data.portfolio}
            onChange={(e) => handleChange('portfolio', e.target.value)}
            placeholder="e.g. https://example.com"
            className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>
    </div>
  );
};
