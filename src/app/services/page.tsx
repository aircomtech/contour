import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
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
  CheckCircle,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CtaSection from '@/components/CtaSection';
import { servicesData } from '@/data/services';

export const metadata: Metadata = {
  title: 'Our Services | Contour Steel Engineering India (P) Ltd.',
  description:
    'Comprehensive Steel Construction Solutions: Pre-Engineered Buildings (PEB), Industrial Steel Buildings, Structural Steel Engineering, Multi-Storey, Fabrication, and Turnkey Solutions.',
};

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

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive Steel Construction Solutions Tailored for Indian and Global Industrial Standards."
        tagline="Engineering Solutions"
        breadcrumbs={[{ label: 'Our Services' }]}
        bgImage="/images/hero/hero-arch-peb.jpg"
      />

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-contourRed uppercase">
              Full Spectrum Capabilities
            </span>
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight mt-1 mb-3">
              End-to-End Steel Engineering &amp; Construction
            </h2>
            <div className="w-16 h-1 bg-contourRed mx-auto mb-4 rounded-full" />
            <p className="text-slate-600 text-sm sm:text-base">
              With 19+ years of industry leadership, Contour Steel Engineering delivers turnkey structural
              solutions from concept and 3D BIM modeling to fabrication and on-site erection.
            </p>
          </div>

          {/* 8 Detailed Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service, index) => {
              const IconComponent = iconMap[service.iconName] || Warehouse;

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Banner Image */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={service.bannerImage}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/30 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-md bg-contourRed text-white flex items-center justify-center">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                            Service 0{index + 1}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-navy-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {service.shortDesc}
                      </p>

                      <div className="space-y-1.5 mb-6">
                        {service.features.slice(0, 3).map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle className="w-3.5 h-3.5 text-contourRed shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <div className="p-6 pt-0">
                    <Link
                      href={`/services/${service.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white rounded text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
