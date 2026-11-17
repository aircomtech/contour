import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Search,
  Eye,
  Microscope,
  HardHat,
  ArrowRight,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CtaSection from '@/components/CtaSection';
import { qualityProcesses } from '@/data/quality';

export const metadata: Metadata = {
  title: 'Quality Assurance | Contour Steel Engineering India (P) Ltd.',
  description:
    'Comprehensive Quality Assurance & Control: Material inspection, fabrication tolerances, welding NDT procedures, and structural safety verification.',
};

export default function QualityAssurancePage() {
  return (
    <>
      <PageHeader
        title="Quality Assurance &amp; Control"
        subtitle="Rigorous Multi-Stage QA/QC Protocols Guaranteeing Structural Integrity, Dimensional Precision, and Lasting Durability."
        tagline="Uncompromising Standards"
        breadcrumbs={[{ label: 'Quality Assurance' }]}
        bgImage="/images/facilities/facility-welding.jpg"
      />

      {/* Quality Management Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest text-contourRed uppercase">
                Quality Management Philosophy
              </span>
              <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight mt-1 mb-4">
                Zero Compromise Structural Reliability
              </h2>
              <div className="w-16 h-1 bg-contourRed mb-5 rounded-full" />

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                At Contour Steel Engineering, quality is engineered directly into our processes rather than
                inspected after the fact. From the moment structural steel plates arrive at our Seriguda plant
                to final bolt tensioning on site, every step follows documented Quality Assurance Plans (QAP).
              </p>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Our in-house quality inspection engineers utilize calibrated digital measuring instruments,
                ultrasonic flaw detectors, and coating thickness gauges to guarantee full compliance with
                Bureau of Indian Standards (IS 800, IS 2062, IS 9595) and international AISC/AWS codes.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                <div className="space-y-1">
                  <span className="font-bold text-navy-900 block">100% Traceability</span>
                  <p className="text-slate-600">Mill test certificates verified for every plate heat number.</p>
                </div>
                <div className="space-y-1 border-x border-slate-200 px-3">
                  <span className="font-bold text-navy-900 block">Certified Welders</span>
                  <p className="text-slate-600">Welders qualified to approved WPS and PQR procedures.</p>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-navy-900 block">NDT Verification</span>
                  <p className="text-slate-600">DPT, MPT, UT, and Radiography testing where required.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/images/facilities/facility-welding.jpg"
                  alt="Quality welding inspection and testing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Quality Assurance Workflow */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-contourRed uppercase">Quality Control Protocol</span>
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight mt-1 mb-2">
              Our 5-Stage QA/QC Workflow
            </h2>
            <div className="w-16 h-1 bg-contourRed mx-auto rounded-full" />
          </div>

          <div className="space-y-6">
            {qualityProcesses.map((proc) => (
              <div
                key={proc.step}
                className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-navy-900 text-white font-bold text-sm flex items-center justify-center shrink-0">
                      {proc.step}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-navy-900">{proc.title}</h3>
                  </div>
                  <span className="text-xs font-semibold text-contourRed uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full self-start sm:self-auto">
                    Phase {proc.step} Inspection
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {proc.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-50 p-4 rounded-lg">
                  {proc.checklist.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-contourRed shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Structural Verification on Site */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-900 text-white rounded-2xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-xs font-bold tracking-widest text-contourRed uppercase">HSE Commitment</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-3">
                  Zero Harm Safety Culture on Every Site
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Quality and safety are inseparable. Every on-site steel erection project operates under strict
                  Job Safety Analysis (JSA), daily toolbox meetings, 100% PPE enforcement, and certified rigging
                  procedures to ensure accident-free execution.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <HardHat className="w-4 h-4 text-contourRed" />
                    <span>Certified Crane &amp; Rigging Safety Checks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-contourRed" />
                    <span>Fall Arrest Lifelines &amp; Safety Net Systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-contourRed" />
                    <span>Total Station Millimeter Plumbness Checks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-contourRed" />
                    <span>Complete QA Handover Dossier with MTCs</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 text-center lg:text-right">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-contourRed hover:bg-contourRed-800 text-white rounded-lg font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  <span>Consult Our QA Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
