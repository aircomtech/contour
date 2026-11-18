import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Clock,
  TrendingDown,
  Maximize,
  Shield,
  Layers,
  Leaf,
  Check,
  X,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CtaSection from '@/components/CtaSection';
import { whyPebData } from '@/data/whyPeb';

export const metadata: Metadata = {
  title: 'Why PEB? | Advantages of Pre-Engineered Buildings | Contour Steel',
  description:
    'Discover why Pre-Engineered Steel Buildings (PEB) offer 50% faster construction, 25% cost optimization, clear spans over 60m, and earthquake resistance.',
};

const iconMap: Record<string, React.ElementType> = {
  Clock,
  TrendingDown,
  Maximize,
  Shield,
  Layers,
  Leaf,
};

export default function WhyPebPage() {
  return (
    <>
      <PageHeader
        title="Why Pre-Engineered Buildings (PEB)?"
        subtitle="The Modern Construction Paradigm Delivering 50% Faster Timelines, Optimized Steel Weights, and Vast Clear Spans."
        tagline="The PEB Advantage"
        breadcrumbs={[{ label: 'Why PEB' }]}
      />

      {/* What is PEB Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest text-contourRed uppercase">
                Technical Definition
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-950 tracking-tight mt-1 mb-3">
                What Are Pre-Engineered Buildings?
              </h2>
              <div className="w-16 h-1 bg-contourRed mb-4 rounded-full" />

              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3">
                {whyPebData.definition}
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Unlike conventional steel buildings where standard heavy hot-rolled sections are cut and
                welded haphazardly on site, PEB frames use computer-optimized tapered I-beams where flange
                and web thicknesses vary according to actual stress diagrams. This ensures optimal strength
                with zero redundant dead weight.
              </p>

              <div className="grid grid-cols-3 gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-center text-xs">
                <div>
                  <span className="text-xl sm:text-2xl font-black text-navy-950 block">50%</span>
                  <span className="text-slate-600 text-[11px]">Faster Handover</span>
                </div>
                <div className="border-x border-slate-200 px-2">
                  <span className="text-xl sm:text-2xl font-black text-navy-950 block">90m</span>
                  <span className="text-slate-600 text-[11px]">Clear Column-Free Span</span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black text-navy-950 block">100%</span>
                  <span className="text-slate-600 text-[11px]">Recyclable Green Steel</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-72 sm:h-84 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100">
                <Image
                  src="/images/hero/hero-slide-1.jpg"
                  alt="Clear span Pre-Engineered Building structure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Key Benefits of PEB */}
      <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-contourRed uppercase">Core Benefits</span>
            <h2 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight mt-1 mb-2">
              6 Decisive Advantages of PEB
            </h2>
            <div className="w-16 h-1 bg-contourRed mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyPebData.benefits.map((benefit) => {
              const IconComponent = iconMap[benefit.icon] || Clock;
              return (
                <div
                  key={benefit.title}
                  className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="w-11 h-11 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-navy-900" />
                      </div>
                      <span className="text-[11px] font-bold text-contourRed bg-red-50 px-2.5 py-1 rounded-full">
                        {benefit.stat}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-navy-950 mb-1.5">{benefit.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Technical Comparison: PEB vs Conventional Steel */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-contourRed uppercase">Side-by-Side Analysis</span>
            <h2 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight mt-1 mb-2">
              PEB vs. Conventional Steel
            </h2>
            <div className="w-16 h-1 bg-contourRed mx-auto rounded-full" />
          </div>

          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-navy-950 text-white">
                <tr>
                  <th className="px-4 sm:px-5 py-3.5 font-bold uppercase tracking-wider w-1/3">Key Parameter</th>
                  <th className="px-4 sm:px-5 py-3.5 font-bold uppercase tracking-wider w-1/3 bg-navy-900 text-red-400">
                    Contour PEB System
                  </th>
                  <th className="px-4 sm:px-5 py-3.5 font-bold uppercase tracking-wider w-1/3">
                    Conventional Structural Steel
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {whyPebData.comparison.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 sm:px-5 py-3 font-bold text-navy-950 border-r border-slate-200">
                      {row.feature}
                    </td>
                    <td className="px-4 sm:px-5 py-3 font-semibold text-navy-950 bg-red-50/20 border-r border-slate-200">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 shrink-0" />
                        <span>{row.peb}</span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-5 py-3 text-slate-600">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500 shrink-0" />
                        <span>{row.conventional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
