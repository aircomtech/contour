'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ZoomIn, ShieldCheck, Award } from 'lucide-react';
import { coreValuesData } from '@/data/company';
import ImageLightbox from './ImageLightbox';
import ScrollReveal from './ScrollReveal';

export default function AboutSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Grand Image from image copy 9 */}
            <div className="lg:col-span-6 relative">
              <ScrollReveal direction="left" duration={0.7}>
                <div
                  onClick={() => setLightboxOpen(true)}
                  className="relative h-[320px] sm:h-[400px] lg:h-[460px] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 group cursor-pointer"
                >
                  <Image
                    src="/images/about/about-grand.jpg"
                    alt="Contour Steel Engineering advanced PEB warehouse facility"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-75 group-hover:opacity-60 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-navy-950/90 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-contourRed" />
                    <span>Advanced Industrial Infrastructure</span>
                  </div>

                  {/* Click to Zoom Pill */}
                  <div className="absolute top-4 right-4 bg-white/80 hover:bg-white text-navy-950 p-2 rounded-full shadow transition-all group-hover:scale-110">
                    <ZoomIn className="w-4 h-4 text-navy-950" />
                  </div>

                  {/* Bottom Overlay Label */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-contourRed bg-white/95 px-2.5 py-0.5 rounded shadow">
                      Engineering Precision
                    </span>
                    <p className="text-base sm:text-lg font-bold mt-1 text-white text-shadow">
                      High-Bay Pre-Engineered Steel Building &amp; Fabrication Hub
                    </p>
                  </div>
                </div>

                {/* Decorative Accent Frame */}
                <div className="absolute -bottom-3 -right-3 w-40 h-40 border-b-4 border-r-4 border-contourRed/40 rounded-br-2xl -z-10 hidden sm:block" />
              </ScrollReveal>
            </div>

            {/* Right Column: Heading, Description & Core Values */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="right" duration={0.7} delay={0.15}>
              <div className="mb-2">
                <span className="text-xs font-bold tracking-widest text-contourRed uppercase">
                  About Contour Steel Engineering
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-950 tracking-tight mb-3">
                19+ Years of Pre-Engineered Steel Excellence
              </h2>

              <div className="w-16 h-1 bg-contourRed mb-4 rounded-full" />

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
                With <strong>19+ years of expertise</strong>, <strong>Contour Steel Engineering India Private Limited</strong> is
                a trusted market leader in Pre-Engineered Buildings and Structural Steel Engineering across India.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                We deliver turnkey, sustainable, and high-precision steel construction solutions — encompassing
                Tekla 3D BIM modeling, automated multi-torch CNC cutting, continuous submerged arc welding, and zero-harm
                speedy on-site erection.
              </p>

              {/* Core Values Panel */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 mb-5 shadow-sm">
                <div className="flex items-center justify-between mb-3 border-b border-slate-200 pb-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-contourRed" />
                    Our Core Values
                  </h3>
                  <span className="text-[11px] text-slate-500 font-medium">8 Guiding Principles</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {coreValuesData.map((val) => (
                    <div key={val.title} className="flex items-center gap-2 text-xs text-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-contourRed shrink-0" />
                      <span className="font-semibold">{val.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Know More CTA Button */}
              <div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-contourRed hover:bg-contourRed-800 text-white rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95"
                >
                  <span>Know More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
          </div>
        </div>
      </section>

      {/* Lightbox for About Us Image */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc="/images/about/about-grand.jpg"
        imageAlt="Contour Steel Engineering advanced PEB warehouse facility"
        title="High-Bay Pre-Engineered Steel Building & Fabrication Hub"
        category="About Our Infrastructure"
      />
    </>
  );
}
