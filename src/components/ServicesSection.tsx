'use client';

import React from 'react';
import Link from 'next/link';
import {
  Warehouse,
  Factory,
  GitBranch,
  Building2,
  Wrench,
  Flame,
  ShieldCheck,
  Handshake,
  ArrowRight,
} from 'lucide-react';
import { servicesData } from '@/data/services';

const iconMap: Record<string, React.ElementType> = {
  Warehouse,
  Factory,
  GitBranch,
  Building2,
  Wrench,
  Flame,
  ShieldCheck,
  Handshake,
};

export default function ServicesSection() {
  return (
    <section className="py-12 md:py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold tracking-widest text-contourRed uppercase">What We Build</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-950 tracking-tight mt-1 mb-2">
            Our Services
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Comprehensive Steel Construction Solutions tailored to modern industry demands
          </p>
          <div className="w-16 h-1 bg-contourRed mx-auto mt-3 rounded-full" />
        </div>

        {/* 8 Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Warehouse;

            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-contourRed transition-colors duration-300" />

                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center mb-4 group-hover:bg-navy-900 group-hover:text-white transition-all duration-300 shadow-inner">
                    <IconComponent className="w-6 h-6 text-contourRed group-hover:text-white transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-navy-950 mb-1.5 group-hover:text-contourRed transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Bottom Arrow Indicator */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider group-hover:text-navy-900 transition-colors">
                    View Details
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 text-navy-900 flex items-center justify-center group-hover:bg-contourRed group-hover:text-white transition-all group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-navy-900 hover:bg-navy-850 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow active:scale-95"
          >
            <span>Explore All Engineering Capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
