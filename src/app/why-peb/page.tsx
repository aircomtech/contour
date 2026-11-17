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
  CheckCircle2,
  ArrowRight,
  HelpCircle,
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
        bgImage="/images/hero/hero-arch-peb.jpg"
      />

      {/* What is PEB Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest text-contourRed uppercase">
                Technical Definition
              </span>
              <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight mt-1 mb-4">
                What Are Pre-Engineered Buildings?
              </h2>
              <div className="w-16 h-1 bg-contourRed mb-5 rounded-full" />

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                {whyPebData.definition}
              </p>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Unlike conventional steel buildings where standard heavy hot-rolled sections are cut and
                welded haphazardly on site, PEB frames use computer-optimized tapered I-beams where flange
                and web thicknesses vary according to actual stress diagrams. This ensures optimal strength
                with zero redundant dead weight.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                <div>
                  <span className="text-2xl font-extrabold text-navy-900 block">50%</span>
                  <span className="text-slate-600">Faster Project Handover</span>
                </div>
                <div className="border-x border-slate-200 px-3">
                  <span className="text-2xl font-extrabold text-navy-900 block">90m</span>
                  <span className="text-slate-600">Max Column-Free Span</span>
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-navy-900 block">100%</span>
                  <span className="text-slate-600">Recyclable Green Steel</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/images/hero/hero-arch-peb.jpg"
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
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-contourRed uppercase">Core Benefits</span>
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight mt-1 mb-2">
              6 Decisive Advantages of PEB
            </h2>
            <div className="w-16 h-1 bg-contourRed mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPebData.benefits.map((benefit) => {
              const IconComponent = iconMap[benefit.icon] || Clock;
              return (
                <div
                  key={benefit.title}
                  className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-navy-50 text-navy-900 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-navy-900" />
                      </div>
                      <span className="text-[11px] font-bold text-contourRed bg-red-50 px-2.5 py-1 rounded-full">
                        {benefit.stat}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-navy-900 mb-2">{benefit.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-contourRed uppercase">Side-by-Side Analysis</span>
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight mt-1 mb-2">
              PEB vs. Conventional Steel
            </h2>
            <div className="w-16 h-1 bg-contourRed mx-auto rounded-full" />
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-navy-900 text-white">
                <tr>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider w-1/3">Key Parameter</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider w-1/3 bg-navy-950 text-red-400">
                    Contour PEB System
                  </th>
                  <th className="px-5 py-4 font-bold uppercase tracking-wider w-1/3">
                    Conventional Structural Steel
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {whyPebData.comparison.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-5 py-4 font-bold text-navy-900 border-r border-slate-200">
                      {row.feature}
                    </td>
                    <td className="px-5 py-4 font-semibold text-navy-900 bg-red-50/30 border-r border-slate-200">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600 shrink-0" />
                        <span>{row.peb}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-slate-600">
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
