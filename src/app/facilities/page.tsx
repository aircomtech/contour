import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Factory,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CtaSection from '@/components/CtaSection';
import AnimatedNumber from '@/components/AnimatedNumber';
import { facilitiesData } from '@/data/facilities';

export const metadata: Metadata = {
  title: 'Our Manufacturing Facilities | Contour Steel Engineering',
  description:
    'Advanced manufacturing plant in Seriguda equipped with multi-torch CNC cutting, automatic H-beam assembly, SAW welding, and shot blasting with 1,500+ MT monthly capacity.',
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        title="Our Manufacturing Facilities"
        subtitle="State-of-the-Art Plant in Seriguda with Multi-Torch CNC Cutting, H-Beam Assembly and SAW Welding Capabilities."
        tagline="Plant & Infrastructure"
        breadcrumbs={[{ label: 'Our Facilities' }]}
      />

      {/* Plant Overview Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest text-contourRed uppercase">
                Seriguda Manufacturing Plant
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-950 tracking-tight mt-1 mb-3">
                Engineered for High-Tonnage Precision Fabrication
              </h2>
              <div className="w-16 h-1 bg-contourRed mb-4 rounded-full" />

              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3">
                Located at Seriguda, Telangana, Contour Steel Engineering operates an expansive, purpose-built
                manufacturing plant dedicated to heavy structural steel and Pre-Engineered Building components.
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Our plant integrates automated European-specification machinery, computerized cutting algorithms,
                and continuous submerged arc welding lines to process over <strong>1,500+ Metric Tons</strong> of high-grade
                structural steel per month with stringent dimensional tolerances.
              </p>

              <div className="grid grid-cols-3 gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-center">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-navy-950">
                    <AnimatedNumber value={1500} suffix="+ MT" />
                  </div>
                  <div className="text-[11px] text-slate-600">Monthly Capacity</div>
                </div>
                <div className="border-x border-slate-200 px-2">
                  <div className="text-xl sm:text-2xl font-black text-navy-950">
                    <AnimatedNumber value={80} suffix=" mm" />
                  </div>
                  <div className="text-[11px] text-slate-600">Max Plate Thickness</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-navy-950">± 1.0 mm</div>
                  <div className="text-[11px] text-slate-600">CNC Tolerance</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-72 sm:h-84 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100">
                <Image
                  src="/images/facilities/facility-assembly.jpg"
                  alt="Contour Steel Seriguda Plant interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery & Equipment Breakdown (4 High-Res Units) */}
      <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-contourRed uppercase">Equipment Lineup</span>
            <h2 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight mt-1 mb-2">
              Machinery &amp; Manufacturing Lines
            </h2>
            <div className="w-16 h-1 bg-contourRed mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            {facilitiesData.map((facility, index) => (
              <div
                key={facility.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-sm ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`lg:col-span-5 relative h-56 sm:h-64 rounded-xl overflow-hidden border border-slate-200 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-navy-950/90 text-white text-[11px] font-bold px-3 py-1 rounded-md border border-white/20">
                    Line 0{index + 1}
                  </div>
                </div>

                {/* Text */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="text-xs font-bold text-contourRed uppercase tracking-wider block mb-1">
                    {facility.tagline}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy-950 mb-2">{facility.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {facility.description}
                  </p>

                  <div className="space-y-1.5">
                    {facility.specs.map((spec, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-navy-900 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Flowchart / Process steps */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-contourRed uppercase">End-to-End Workflow</span>
            <h2 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight mt-1 mb-2">
              Our Manufacturing Process
            </h2>
            <div className="w-16 h-1 bg-contourRed mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {[
              { step: '01', title: 'Raw Steel Testing', desc: 'Ultrasonic inspection and mill certificate verification against IS 2062 standards.' },
              { step: '02', title: 'CNC Profile Cutting', desc: 'Nested multi-torch oxy-fuel and HD plasma cutting according to Tekla NC files.' },
              { step: '03', title: 'H-Beam Auto Fit-Up', desc: 'Hydraulic clamping of web and flanges ensuring flawless squareness and zero distortion.' },
              { step: '04', title: 'Submerged Arc Welding', desc: 'Continuous automated dual-side submerged arc welding with 100% NDT inspection.' },
              { step: '05', title: 'Shot Blast & Coating', desc: 'Surface profiling to Swedish Sa 2.5 standards followed by airless paint coating.' },
            ].map((p) => (
              <div key={p.step} className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center hover:border-contourRed transition-colors">
                <div className="w-9 h-9 rounded-full bg-navy-950 text-white font-bold text-xs flex items-center justify-center mx-auto mb-2.5">
                  {p.step}
                </div>
                <h4 className="text-xs font-bold text-navy-950 mb-1">{p.title}</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
