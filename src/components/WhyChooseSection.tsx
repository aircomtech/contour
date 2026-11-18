'use client';

import React from 'react';
import { ShieldCheck, Cog, Clock, Leaf, Users } from 'lucide-react';
import { whyChooseData } from '@/data/company';
import ScrollReveal from './ScrollReveal';

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Cog,
  Clock,
  Leaf,
  Users,
};

export default function WhyChooseSection() {
  return (
    <section className="py-12 md:py-16 bg-navy-950 text-white relative overflow-hidden border-t border-navy-800">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={0.6}>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold tracking-widest text-contourRed uppercase">
              The Contour Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mt-1 mb-2">
              Why Choose Contour?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Building Trust Through Engineering Excellence Across India
            </p>
            <div className="w-16 h-1 bg-contourRed mx-auto mt-3 rounded-full" />
          </div>
        </ScrollReveal>

        {/* 5 Feature Items with Separators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-0 lg:divide-x divide-navy-800/80">
          {whyChooseData.map((item, index) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <ScrollReveal
                key={item.title}
                direction="up"
                delay={index * 0.08}
                duration={0.5}
                className="h-full"
              >
                <div className="group p-5 text-center rounded-xl hover:bg-navy-900/80 transition-all duration-300 flex flex-col items-center justify-start cursor-pointer border border-navy-800/40 lg:border-none h-full">
                  {/* Icon Circle */}
                  <div className="w-13 h-13 rounded-2xl border border-white/20 bg-navy-900/90 text-white flex items-center justify-center mb-3.5 group-hover:scale-110 group-hover:border-contourRed group-hover:bg-contourRed transition-all duration-300 shadow-lg">
                    <IconComponent className="w-6 h-6 text-slate-100 group-hover:text-white transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 group-hover:text-contourRed transition-colors">
                    {item.title}
                  </h3>

                  {/* Explanation */}
                  <p className="text-xs text-slate-300 leading-relaxed opacity-85 group-hover:opacity-100 transition-opacity">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
