'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { companyData } from '@/data/company';

export default function CtaSection() {
  return (
    <section className="relative bg-navy-950 text-white overflow-hidden py-16 md:py-20">
      {/* Background Industrial Image with Dark Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Image
          src="/images/cta-bg.jpg"
          alt="Contour Steel Engineering construction site cranes"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-950 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Description & CTA Button (6 cols) */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold tracking-widest text-contourRed uppercase">
              Start Your Project
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-1 mb-4 leading-tight">
              Let&apos;s Build Your Next Project Together
            </h2>
            <div className="w-16 h-1 bg-contourRed mb-5 rounded-full" />

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              Get in touch with our team for expert consultation and project support. Whether you need
              a multi-span warehouse, heavy industrial plant, or specialized steel structure, we deliver
              turnkey excellence.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-contourRed hover:bg-contourRed-800 text-white rounded font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+919100996655"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded font-semibold text-xs sm:text-sm tracking-wide flex items-center gap-2 border border-white/20 transition-all"
              >
                <Phone className="w-4 h-4 text-contourRed" />
                <span>+91 91009 96655</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3 Corporate Locations (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {companyData.offices.map((office) => (
              <div
                key={office.name}
                className="bg-navy-900/80 backdrop-blur-sm border border-navy-700/60 rounded-lg p-4 sm:p-5 flex items-start gap-3.5 hover:border-contourRed/60 transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-contourRed/20 text-contourRed flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-contourRed" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">{office.name}</h3>
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Map</span>
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
