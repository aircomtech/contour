'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { servicesData } from '@/data/services';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceRequired: 'Pre-Engineered Buildings (PEB)',
    projectLocation: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.companyName.trim()) errs.companyName = 'Please enter your company name';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.projectLocation.trim()) {
      errs.projectLocation = 'Please provide the project location';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide details about your project';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  if (isSubmitted) {
    return (
      <div className="py-12 text-center bg-slate-50 rounded-xl border border-slate-200 p-8">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-navy-900 mb-2">Message Sent Successfully!</h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
          Thank you for reaching out to Contour Steel Engineering India (P) Ltd. An experienced project
          engineer will review your enquiry and respond within 24 business hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              fullName: '',
              companyName: '',
              email: '',
              phone: '',
              serviceRequired: 'Pre-Engineered Buildings (PEB)',
              projectLocation: '',
              message: '',
            });
          }}
          className="px-6 py-2.5 bg-navy-900 text-white rounded-md text-xs font-bold uppercase tracking-wider hover:bg-navy-800 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Full Name *
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900 ${
              errors.fullName ? 'border-red-500' : 'border-slate-300'
            }`}
            placeholder="e.g. Ramesh Kumar"
          />
          {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Company Name *
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900 ${
              errors.companyName ? 'border-red-500' : 'border-slate-300'
            }`}
            placeholder="e.g. Apex Industrial Corp"
          />
          {errors.companyName && <p className="text-red-600 text-xs mt-1">{errors.companyName}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900 ${
              errors.email ? 'border-red-500' : 'border-slate-300'
            }`}
            placeholder="name@company.com"
          />
          {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900 ${
              errors.phone ? 'border-red-500' : 'border-slate-300'
            }`}
            placeholder="+91 98765 43210"
          />
          {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Service Required
          </label>
          <select
            value={formData.serviceRequired}
            onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900 bg-white"
          >
            {servicesData.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Project Location (City, State) *
          </label>
          <input
            type="text"
            value={formData.projectLocation}
            onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900 ${
              errors.projectLocation ? 'border-red-500' : 'border-slate-300'
            }`}
            placeholder="e.g. Hyderabad, Telangana"
          />
          {errors.projectLocation && <p className="text-red-600 text-xs mt-1">{errors.projectLocation}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
          Project Requirements &amp; Message *
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`w-full px-3.5 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900 ${
            errors.message ? 'border-red-500' : 'border-slate-300'
          }`}
          placeholder="Please describe clear span, eave height, crane capacity (if any), building area, or timeline..."
        />
        {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-3.5 bg-contourRed hover:bg-contourRed-800 text-white rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 active:scale-95"
        >
          {isSubmitting ? (
            'Submitting Enquiry...'
          ) : (
            <>
              <span>Send Enquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
