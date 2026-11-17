'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { coreValuesData } from '@/data/company';

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Industrial Steel Building Photograph (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[340px] sm:h-[420px] rounded-lg overflow-hidden shadow-xl border border-slate-200 group">
              <Image
                src="/images/about/about-primary.jpg"
                alt="Contour Steel Engineering industrial steel structure under construction"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-contourRed bg-white/90 px-2 py-0.5 rounded">
                  Engineering Precision
                </span>
                <p className="text-sm font-semibold mt-1">High-Precision Structural Steel Framework</p>
              </div>
            </div>

            {/* Decorative backplate border */}
            <div className="absolute -bottom-3 -left-3 w-full h-full border-2 border-contourRed/30 rounded-lg -z-10 hidden sm:block" />
          </div>

          {/* Right Column: Heading, Content & Core Values (7 cols) */}
          <div className="lg:col-span-7">
            <div className="mb-2">
              <span className="text-xs font-bold tracking-widest text-contourRed uppercase">
                About Our Company
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
              About Contour Steel Engineering
            </h2>

            <div className="w-16 h-1 bg-contourRed mb-6 rounded-full" />

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              With <strong>19+ years of expertise</strong>, Contour Steel Engineering India Private Limited
              is a trusted name in Pre-Engineered Buildings and Structural Steel Engineering. We deliver
              innovative, sustainable, and high-quality steel construction solutions across India.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              From automated Tekla 3D BIM design and precision plant fabrication in Seriguda to safe,
              speedy on-site erection, our end-to-end turnkey capability guarantees uncompromised quality,
              rigorous safety compliance, and on-time project handover.
            </p>

            {/* Know More CTA Button */}
            <div className="mb-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-contourRed hover:bg-contourRed-800 text-white rounded font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Core Values Panel */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-contourRed" />
                Our Core Values
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {coreValuesData.map((val) => (
                  <div key={val.title} className="flex items-center gap-2 text-xs text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-navy-900 shrink-0" />
                    <span className="font-semibold">{val.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
