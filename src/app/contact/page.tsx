import React from 'react';
import type { Metadata } from 'next';
import { Phone, Mail, MessageCircle, MapPin, ExternalLink, Clock } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { companyData } from '@/data/company';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Contour Steel Engineering India (P) Ltd.',
  description:
    'Contact Contour Steel Engineering: Offices in Hyderabad and Pune, Manufacturing Plant in Seriguda. Phone: +91 91009 96655, Email: hydsales@contoursteel.co.in.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Connect with Our Senior Engineering Team for Project Consultation, Preliminary Layouts, and Competitive Estimations."
        tagline="Get in Touch"
        breadcrumbs={[{ label: 'Contact Us' }]}
        bgImage="/images/cta-bg.jpg"
      />

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-xs font-bold tracking-widest text-contourRed uppercase">
                Enquiry Form
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mt-1 mb-2">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Fill out the form below with your project requirements and our engineering department will
                respond promptly with a detailed technical review.
              </p>

              <ContactForm />
            </div>

            {/* Right Column: Office Addresses & Direct Contact Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Communication Cards */}
              <div className="bg-navy-900 text-white p-6 rounded-2xl shadow-lg border border-navy-800">
                <h3 className="text-lg font-bold mb-4 border-b border-navy-800 pb-2">
                  Direct Contact Information
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Phones */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-navy-800 text-contourRed flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Phone Numbers:</span>
                      <a href="tel:+919100996655" className="font-bold text-white hover:text-contourRed transition-colors block">
                        +91 91009 96655
                      </a>
                      <a href="tel:+919326863516" className="font-semibold text-slate-200 hover:text-contourRed transition-colors block">
                        +91 93268 63516
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-navy-800 text-contourRed flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Official Email:</span>
                      <a
                        href="mailto:hydsales@contoursteel.co.in"
                        className="font-bold text-white hover:text-contourRed transition-colors"
                      >
                        hydsales@contoursteel.co.in
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">WhatsApp Quick Chat:</span>
                      <a
                        href={companyData.whatsapp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#25D366] hover:underline"
                      >
                        +91 91009 96655 (Click to Message)
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Locations List */}
              <div className="space-y-4">
                {companyData.offices.map((office) => (
                  <div
                    key={office.name}
                    className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-contourRed transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-contourRed shrink-0" />
                        <h4 className="text-sm font-bold text-navy-900">{office.name}</h4>
                      </div>
                      <a
                        href={office.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-semibold text-navy-900 hover:text-contourRed flex items-center gap-1"
                      >
                        <span>Directions</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {office.address}
                    </p>
                    {office.phone && (
                      <p className="text-xs text-slate-500 mt-1">
                        Tel: <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="font-semibold text-navy-900 hover:text-contourRed">{office.phone}</a>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
