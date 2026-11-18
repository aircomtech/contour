import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ShieldCheck,
  CheckCircle2,
  Target,
  Compass,
  ArrowRight,
  Building,
  Calendar,
  Maximize2,
  Award,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CtaSection from '@/components/CtaSection';
import { companyData, coreValuesData } from '@/data/company';

export const metadata: Metadata = {
  title: 'About Us | Contour Steel Engineering India (P) Ltd.',
  description:
    'Learn about Contour Steel Engineering: 19+ years of engineering mastery in Pre-Engineered Buildings, Structural Steel Engineering, vision, mission, and core values.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Contour Steel Engineering"
        subtitle="19+ Years of Engineering Excellence, Quality Fabrication, and Turnkey Steel Construction Solutions Across India."
        tagline="Who We Are"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Company Introduction Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Image: Grand PEB Facility */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100">
                <Image
                  src="/images/about/about-grand.jpg"
                  alt="Contour Steel Engineering high-bay PEB warehouse"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Floating Stat Badge */}
              <div className="absolute -bottom-5 -right-3 sm:right-4 bg-navy-950 text-white p-4 sm:p-5 rounded-xl shadow-2xl border-2 border-contourRed">
                <div className="text-2xl sm:text-3xl font-black text-contourRed">19+</div>
                <div className="text-[11px] font-bold text-slate-200 uppercase tracking-wider">
                  Years of Leadership
                </div>
              </div>
            </div>

            {/* Right Story & Overview */}
            <div className="lg:col-span-7 pt-4 lg:pt-0">
              <span className="text-xs font-bold tracking-widest text-contourRed uppercase">
                Company Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight mt-1 mb-3">
                Pioneering Modern Steel Infrastructure
              </h2>
              <div className="w-16 h-1 bg-contourRed mb-4 rounded-full" />

              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3">
                With <strong>19+ years of expertise</strong>, <strong>Contour Steel Engineering India Private Limited</strong> is a
                trusted name in Pre-Engineered Buildings (PEB) and Structural Steel Engineering. We deliver
                innovative, sustainable, and high-quality steel construction solutions across India.
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                From our corporate headquarters in Hyderabad and branch office in Pune to our advanced manufacturing
                facility in Seriguda, we provide seamless turnkey delivery covering architectural 3D BIM engineering,
                multi-torch CNC cutting, automated submerged arc welding, and safe high-speed site erection.
              </p>

              {/* 3 Metric Summary Boxes */}
              <div className="grid grid-cols-3 gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-black text-navy-950">{companyData.experienceYears}</div>
                  <div className="text-[11px] text-slate-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center border-x border-slate-200">
                  <div className="text-xl sm:text-2xl font-black text-navy-950">{companyData.structuresDelivered}</div>
                  <div className="text-[11px] text-slate-600 font-medium">Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-black text-navy-950">{companyData.totalSqFt}</div>
                  <div className="text-[11px] text-slate-600 font-medium">Sq. Ft. Built Area</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision-mission" className="py-12 md:py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="w-11 h-11 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center mb-4">
                <Compass className="w-6 h-6 text-navy-900" />
              </div>
              <span className="text-xs font-bold tracking-widest text-contourRed uppercase">Future Roadmap</span>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-950 mt-1 mb-2">Our Vision</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                To be the most preferred and trusted turnkey Pre-Engineered Building and structural steel
                engineering company in India, recognized for unmatched engineering innovation, uncompromising
                structural safety, environmental sustainability, and timely project delivery.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="w-11 h-11 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-navy-900" />
              </div>
              <span className="text-xs font-bold tracking-widest text-contourRed uppercase">Daily Commitment</span>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-950 mt-1 mb-2">Our Mission</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                To engineer world-class structural steel solutions through automated manufacturing precision,
                rigorous quality control, continuous technological advancement, and an unwavering commitment
                to zero-harm construction safety, maximizing value for clients, stakeholders, and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="core-values" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-contourRed uppercase">Principles That Guide Us</span>
            <h2 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight mt-1 mb-2">
              Our Core Values
            </h2>
            <div className="w-16 h-1 bg-contourRed mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {coreValuesData.map((val) => (
              <div
                key={val.title}
                className="bg-slate-50 border border-slate-200 p-5 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-9 h-9 rounded-lg bg-navy-950 text-white flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-4 h-4 text-contourRed" />
                </div>
                <h4 className="text-sm font-bold text-navy-950 mb-1">{val.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Capabilities Visual Showcase */}
      <section id="engineering-expertise" className="py-12 md:py-16 bg-navy-950 text-white border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-widest text-contourRed uppercase">
                Technical Strength
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mt-1 mb-3">
                Engineering Expertise &amp; Plant Capabilities
              </h2>
              <div className="w-16 h-1 bg-contourRed mb-4 rounded-full" />

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                Our in-house design and detailing engineering division operates Tekla Structures, STAAD.Pro, and
                specialized connection design suites to model complex geometry with zero spatial clashes.
              </p>

              <div className="space-y-2.5 text-xs text-slate-200 mb-6">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-contourRed shrink-0 mt-0.5" />
                  <span><strong>Tekla 3D BIM Detailing:</strong> Direct CNC file generation for precision shop fabrication.</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-contourRed shrink-0 mt-0.5" />
                  <span><strong>1,500+ MT Monthly Capacity:</strong> Automated Seriguda manufacturing facility.</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-contourRed shrink-0 mt-0.5" />
                  <span><strong>Submerged Arc Welding Gantries:</strong> Continuous automatic double-side built-up beam welding.</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-contourRed shrink-0 mt-0.5" />
                  <span><strong>Zero Harm HSE Policy:</strong> Certified site rigging officers, crane safety protocols, and daily toolboxes.</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/facilities"
                  className="px-5 py-2.5 bg-contourRed hover:bg-contourRed-800 text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow"
                >
                  <span>Explore Facilities</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/quality-assurance"
                  className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-semibold tracking-wide border border-white/20 transition-all"
                >
                  <span>Quality Assurance</span>
                </Link>
              </div>
            </div>

            {/* Visual Showcase: 4 High-Res Plant Images */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3">
              <div className="relative h-40 rounded-xl overflow-hidden border border-navy-800">
                <Image
                  src="/images/facilities/facility-cnc.jpg"
                  alt="Multi-Torch CNC Profile Cutting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden border border-navy-800">
                <Image
                  src="/images/facilities/facility-fabrication.jpg"
                  alt="Automated H-Beam Assembly"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden border border-navy-800">
                <Image
                  src="/images/facilities/facility-welding.jpg"
                  alt="SAW Welding Gantries"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden border border-navy-800">
                <Image
                  src="/images/facilities/facility-assembly.jpg"
                  alt="Structural Steel Assembly"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
