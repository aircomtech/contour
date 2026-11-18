'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, Mail, ExternalLink, ShieldCheck } from 'lucide-react';
import { companyData } from '@/data/company';

export default function CtaSection() {
  return (
    <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-steel-900 text-white overflow-hidden py-12 md:py-16 border-t border-navy-800">
      {/* Clean Technical Engineering Grid Pattern - NO GHOST TEXT */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />

      {/* Subtle Metallic Radial Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-steel-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-contourRed/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Heading, Description & Action Buttons */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold tracking-widest text-contourRed uppercase">
              Start Your Project
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mt-1 mb-3 leading-tight">
              Let&apos;s Build Your Next Project Together
            </h2>
            <div className="w-16 h-1 bg-contourRed mb-4 rounded-full" />

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 max-w-lg">
              Get in touch with our team for expert consultation and project support. Whether you need
              a large-span PEB warehouse, heavy industrial plant, or specialized steel structure, we deliver
              turnkey excellence across India.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="px-6 sm:px-7 py-3 bg-contourRed hover:bg-contourRed-800 text-white rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all active:scale-95"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+919100996655"
                className="px-5 sm:px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold text-xs sm:text-sm tracking-wide flex items-center gap-2 border border-white/20 transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 text-contourRed" />
                <span>+91 91009 96655</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3 Corporate Locations */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-3.5">
            {companyData.offices.map((office) => (
              <div
                key={office.name}
                className="bg-navy-950/70 backdrop-blur-md border border-navy-700/70 rounded-xl p-4 sm:p-4.5 flex items-start gap-3 hover:border-contourRed/70 transition-all hover:bg-navy-950/90 shadow-lg"
              >
                <div className="w-8 h-8 rounded-lg bg-contourRed/20 text-contourRed flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-contourRed" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs sm:text-sm font-bold text-white">{office.name}</h3>
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{office.address}</p>
                  {office.phone && (
                    <a
                      href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-xs text-contourRed font-semibold mt-1 inline-block hover:underline"
                    >
                      {office.phone}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
