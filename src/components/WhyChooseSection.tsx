'use client';

import React from 'react';
import { ShieldCheck, Cog, Clock, Leaf, Users } from 'lucide-react';
import { whyChooseData } from '@/data/company';

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Cog,
  Clock,
  Leaf,
  Users,
};

export default function WhyChooseSection() {
  return (
    <section className="py-16 md:py-20 bg-navy-900 text-white relative overflow-hidden">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-contourRed uppercase">
            The Contour Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1 mb-2">
            Why Choose Contour?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Building Trust Through Excellence
          </p>
          <div className="w-16 h-1 bg-contourRed mx-auto mt-3 rounded-full" />
        </div>

        {/* 5 Feature Items with separators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x divide-navy-700/60">
          {whyChooseData.map((item, index) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={item.title}
                className="group px-4 py-6 text-center rounded-lg hover:bg-navy-850/80 transition-all duration-300 flex flex-col items-center justify-start cursor-pointer"
              >
                {/* Icon in white outline / glow */}
                <div className="w-14 h-14 rounded-full border border-white/20 bg-navy-950/60 text-white flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-contourRed group-hover:bg-contourRed transition-all duration-300">
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-contourRed transition-colors">
                  {item.title}
                </h3>

                {/* Short explanation on hover / mobile */}
                <p className="text-xs text-slate-300 leading-relaxed opacity-85 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
