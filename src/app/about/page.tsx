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
        bgImage="/images/about/about-primary.jpg"
      />

      {/* Company Introduction Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Image Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[380px] sm:h-[450px] rounded-lg overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/images/about/about-primary.jpg"
                  alt="Contour Steel Engineering industrial structural steel assembly"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
              </div>
              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-navy-900 text-white p-5 rounded-lg shadow-2xl border-2 border-contourRed">
                <div className="text-3xl font-extrabold text-contourRed">19+</div>
                <div className="text-xs font-semibold text-slate-200">Years of Engineering Leadership</div>
              </div>
            </div>

            {/* Right Story & Overview */}
            <div className="lg:col-span-7 pt-6 lg:pt-0">
              <span className="text-xs font-bold tracking-widest text-contourRed uppercase">
                Company Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mt-1 mb-4">
                Pioneering Modern Steel Infrastructure
              </h2>
              <div className="w-16 h-1 bg-contourRed mb-5 rounded-full" />

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                With <strong>19+ years of expertise</strong>, <strong>Contour Steel Engineering India Private Limited</strong> is a
                trusted name in Pre-Engineered Buildings (PEB) and Structural Steel Engineering. We deliver
                innovative, sustainable, and high-quality steel construction solutions across India.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                From our corporate headquarters in Hyderabad and branch office in Pune to our advanced manufacturing
                facility in Seriguda, we provide seamless turnkey delivery covering architectural 3D BIM engineering,
                multi-torch CNC cutting, automated submerged arc welding, and safe high-speed site erection.
              </p>

              {/* 3 Metric Summary Boxes */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-navy-900">{companyData.experienceYears}</div>
                  <div className="text-[11px] text-slate-600">Years Industry Experience</div>
                </div>
                <div className="text-center border-x border-slate-200">
                  <div className="text-xl sm:text-2xl font-extrabold text-navy-900">{companyData.structuresDelivered}</div>
                  <div className="text-[11px] text-slate-600">Structures Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-navy-900">{companyData.totalSqFt}</div>
                  <div className="text-[11px] text-slate-600">Sq. Ft. Built Area</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision-mission" className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-lg bg-navy-50 text-navy-900 flex items-center justify-center mb-5">
                <Compass className="w-6 h-6 text-navy-900" />
              </div>
              <span className="text-xs font-bold tracking-widest text-contourRed uppercase">Future Roadmap</span>
              <h3 className="text-2xl font-bold text-navy-900 mt-1 mb-3">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To be the most preferred and trusted turnkey Pre-Engineered Building and structural steel
                engineering company in India, recognized for unmatched engineering innovation, uncompromising
                structural safety, environmental sustainability, and timely project delivery.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-lg bg-navy-50 text-navy-900 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-navy-900" />
              </div>
              <span className="text-xs font-bold tracking-widest text-contourRed uppercase">Daily Commitment</span>
              <h3 className="text-2xl font-bold text-navy-900 mt-1 mb-3">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To engineer world-class structural steel solutions through automated manufacturing precision,
                rigorous quality control, continuous technological advancement, and an unwavering commitment
                to zero-harm construction safety, maximizing value for clients, stakeholders, and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="core-values" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-contourRed uppercase">Principles That Guide Us</span>
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight mt-1 mb-3">
              Our Core Values
            </h2>
            <div className="w-16 h-1 bg-contourRed mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValuesData.map((val) => (
              <div
                key={val.title}
                className="bg-slate-50 border border-slate-200 p-6 rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-md bg-navy-900 text-white flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-contourRed" />
                </div>
                <h4 className="text-base font-bold text-navy-900 mb-2">{val.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering & Manufacturing Capabilities Section */}
      <section id="engineering-expertise" className="py-16 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-widest text-contourRed uppercase">
                Technical Strength
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1 mb-4">
                Engineering Expertise &amp; Plant Capabilities
              </h2>
              <div className="w-16 h-1 bg-contourRed mb-6 rounded-full" />

              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Our in-house design and detailing engineering division operates Tekla Structures, STAAD.Pro, and
                specialized connection design suites to model complex geometry with zero spatial clashes.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-200 mb-8">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-contourRed shrink-0 mt-0.5" />
                  <span><strong>Tekla 3D BIM Detailing:</strong> Direct CNC file generation for precision shop fabrication.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-contourRed shrink-0 mt-0.5" />
                  <span><strong>1,500+ MT Monthly Capacity:</strong> Automated Seriguda manufacturing facility.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-contourRed shrink-0 mt-0.5" />
                  <span><strong>Submerged Arc Welding Gantries:</strong> Continuous automatic double-side built-up beam welding.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-contourRed shrink-0 mt-0.5" />
                  <span><strong>Zero Harm HSE Policy:</strong> Certified site rigging officers, crane safety protocols, and daily toolboxes.</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="/facilities"
                  className="px-6 py-2.5 bg-contourRed hover:bg-contourRed-800 text-white rounded text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow"
                >
                  <span>Explore Facilities</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/quality-assurance"
                  className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded text-xs sm:text-sm font-semibold tracking-wide border border-white/20 transition-all"
                >
                  <span>Quality Assurance</span>
                </Link>
              </div>
            </div>

            {/* Visual Showcase */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative h-44 rounded-lg overflow-hidden border border-navy-700">
                <Image
                  src="/images/facilities/facility-cnc.jpg"
                  alt="CNC Multi Torch Profile Cutting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-44 rounded-lg overflow-hidden border border-navy-700">
                <Image
                  src="/images/facilities/facility-fabrication.jpg"
                  alt="Automated H-Beam Assembly"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-44 rounded-lg overflow-hidden border border-navy-700">
                <Image
                  src="/images/facilities/facility-welding.jpg"
                  alt="SAW Welding Sparks"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-44 rounded-lg overflow-hidden border border-navy-700">
                <Image
                  src="/images/facilities/facility-assembly.jpg"
                  alt="Finished Structural Steel Warehouse Assembly"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </>
  );
}
