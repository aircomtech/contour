'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, Building, MapPin } from 'lucide-react';
import { servicesData } from '@/data/services';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function QuoteModal({ isOpen, onClose, defaultService }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceRequired: defaultService || 'Pre-Engineered Buildings (PEB)',
    projectLocation: '',
    estimatedArea: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, serviceRequired: defaultService }));
    }
  }, [defaultService]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      newErrors.phone = 'Valid phone number is required';
    }
    if (!formData.projectLocation.trim()) {
      newErrors.projectLocation = 'Project location is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief project requirements';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      serviceRequired: 'Pre-Engineered Buildings (PEB)',
      projectLocation: '',
      estimatedArea: '',
      message: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-navy-900 text-white px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold tracking-wider text-red-400 uppercase">Enquiry Form</span>
            <h2 className="text-xl font-bold">Request a Project Quote</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-navy-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-2">Quote Request Received!</h3>
              <p className="text-slate-600 max-w-md mx-auto mb-6">
                Thank you for reaching out to Contour Steel Engineering. Our technical team will review your specifications
                and get in touch within 24 business hours.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 max-w-md mx-auto text-left text-sm text-slate-600 mb-6 space-y-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-contourRed" />
                  <span>Immediate assistance: <strong>+91 91009 96655</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-contourRed" />
                  <span>Email: <strong>hydsales@contoursteel.co.in</strong></span>
                </div>
              </div>
              <button
                onClick={resetForm}
                className="px-6 py-2.5 bg-navy-900 text-white rounded-md font-semibold hover:bg-navy-800 transition-colors"
              >
                Close & Return
              </button>
            </div>
          ) : (
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
                    className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900 ${
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
                    className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900 ${
                      errors.companyName ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="e.g. Apex Logistics Pvt Ltd"
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
                    className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900 ${
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
                    className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900 ${
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
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900 bg-white"
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
                    className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900 ${
                      errors.projectLocation ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="e.g. Hyderabad, Telangana"
                  />
                  {errors.projectLocation && <p className="text-red-600 text-xs mt-1">{errors.projectLocation}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Estimated Area / Steel Tonnage (Optional)
                </label>
                <input
                  type="text"
                  value={formData.estimatedArea}
                  onChange={(e) => setFormData({ ...formData, estimatedArea: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900"
                  placeholder="e.g. 50,000 Sq. Ft. or 300 MT"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Project Details / Message *
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900 ${
                    errors.message ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Provide span, height, crane requirements, or timeline..."
                />
                {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-contourRed hover:bg-contourRed-800 text-white rounded-md text-sm font-semibold transition-colors flex items-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70"
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
