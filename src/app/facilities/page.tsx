import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Cpu,
  Flame,
  Layers,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Phone,
  Factory,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CtaSection from '@/components/CtaSection';
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
        subtitle="State-of-the-art Plant in Seriguda with Multi-Torch CNC Cutting, H-Beam Assembly and SAW Welding Capabilities."
        tagline="Plant & Infrastructure"
        breadcrumbs={[{ label: 'Our Facilities' }]}
        bgImage="/images/facilities/facility-fabrication.jpg"
      />

      {/* Plant Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest text-contourRed uppercase">
                Seriguda Manufacturing Plant
              </span>
              <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight mt-1 mb-4">
                Engineered for High-Tonnage Precision Fabrication
              </h2>
              <div className="w-16 h-1 bg-contourRed mb-5 rounded-full" />

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                Located at Seriguda, Telangana, Contour Steel Engineering operates an expansive, purpose-built
                manufacturing plant dedicated to heavy structural steel and Pre-Engineered Building components.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Our plant integrates automated European-specification machinery, computerized cutting algorithms,
                and continuous submerged arc welding lines to process over <strong>1,500+ Metric Tons</strong> of high-grade
                structural steel per month with stringent dimensional tolerances.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <div>
                  <div className="text-2xl font-extrabold text-navy-900">1,500+ MT</div>
                  <div className="text-xs text-slate-600">Monthly Fabrication Capacity</div>
                </div>
                <div className="border-x border-slate-200 px-3">
                  <div className="text-2xl font-extrabold text-navy-900">80 mm</div>
                  <div className="text-xs text-slate-600">Max Plate Cutting Thickness</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-navy-900">± 1.0 mm</div>
                  <div className="text-xs text-slate-600">CNC Profile Tolerance</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-xl border border-slate-200">
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

      {/* Machinery & Equipment Breakdown */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-contourRed uppercase">Equipment Lineup</span>
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight mt-1 mb-2">
              Machinery &amp; Manufacturing Lines
            </h2>
            <div className="w-16 h-1 bg-contourRed mx-auto rounded-full" />
          </div>

          <div className="space-y-12">
            {facilitiesData.map((facility, index) => (
              <div
                key={facility.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`lg:col-span-5 relative h-64 sm:h-72 rounded-lg overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-navy-900/90 text-white text-xs font-bold px-3 py-1 rounded">
                    Line 0{index + 1}
                  </div>
                </div>

                {/* Text */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="text-xs font-bold text-contourRed uppercase tracking-wider block mb-1">
                    {facility.tagline}
                  </span>
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">{facility.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {facility.description}
                  </p>

                  <div className="space-y-2">
                    {facility.specs.map((spec, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-navy-900 shrink-0 mt-0.5" />
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-contourRed uppercase">End-to-End Workflow</span>
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight mt-1 mb-2">
              Our Manufacturing Process
            </h2>
            <div className="w-16 h-1 bg-contourRed mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Raw Steel Testing', desc: 'Ultrasonic inspection and mill certificate verification against IS 2062 standards.' },
              { step: '02', title: 'CNC Profile Cutting', desc: 'Nested multi-torch oxy-fuel and HD plasma cutting according to Tekla NC files.' },
              { step: '03', title: 'H-Beam Auto Fit-Up', desc: 'Hydraulic clamping of web and flanges ensuring flawless squareness and zero distortion.' },
              { step: '04', title: 'Submerged Arc Welding', desc: 'Continuous automated dual-side submerged arc welding with 100% NDT inspection.' },
              { step: '05', title: 'Shot Blast & Coating', desc: 'Surface profiling to Swedish Sa 2.5 standards followed by airless paint coating.' },
            ].map((p) => (
              <div key={p.step} className="p-5 bg-slate-50 border border-slate-200 rounded-lg text-center hover:border-contourRed transition-colors">
                <div className="w-10 h-10 rounded-full bg-navy-900 text-white font-bold text-sm flex items-center justify-center mx-auto mb-3">
                  {p.step}
                </div>
                <h4 className="text-sm font-bold text-navy-900 mb-1.5">{p.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
