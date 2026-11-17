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
  PlusCircle,
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
    <section className="py-16 md:py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-contourRed uppercase">What We Build</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-1 mb-3">
            Our Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Comprehensive Steel Construction Solutions tailored to modern industry demands
          </p>
          <div className="w-16 h-1 bg-contourRed mx-auto mt-4 rounded-full" />
        </div>

        {/* 8 Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Warehouse;

            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-lg p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-contourRed transition-colors duration-300" />

                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-navy-50 text-navy-900 flex items-center justify-center mb-5 group-hover:bg-navy-900 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-2 group-hover:text-contourRed transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Bottom Arrow Indicator */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider group-hover:text-navy-900 transition-colors">
                    View Details
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 text-navy-900 flex items-center justify-center group-hover:bg-contourRed group-hover:text-white transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Call to Action banner */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            Need customized structural engineering or turnkey PEB fabrication for your facility?
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-navy-900 hover:bg-navy-800 text-white rounded text-xs sm:text-sm font-semibold transition-colors shadow"
          >
            <span>Explore All Engineering Capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
