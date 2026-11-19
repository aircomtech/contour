import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  CheckCircle,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Building,
  Phone,
  Layers,
  Wrench,
  Sparkles,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CtaSection from '@/components/CtaSection';
import { servicesData } from '@/data/services';
import ServiceQuoteButton from './ServiceQuoteButton';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | Contour Steel Engineering`,
    description: service.shortDesc,
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const related = servicesData.filter(
    (s) => s.slug !== service.slug && service.relatedServices?.includes(s.slug)
  );

  return (
    <>
      <PageHeader
        title={service.title}
        subtitle={service.shortDesc}
        tagline="Contour Steel Services"
        breadcrumbs={[
          { label: 'Our Services', href: '/services' },
          { label: service.title },
        ]}
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Main Content Column (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Large Service Banner Image */}
              <div className="relative h-64 sm:h-80 lg:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100">
                <Image
                  src={service.bannerImage}
                  alt={service.title}
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>

              {/* Service Description */}
              <div>
                <span className="text-xs font-bold tracking-widest text-contourRed uppercase">
                  Service Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight mt-1 mb-3">
                  Engineering {service.title} with Precision
                </h2>
                <div className="w-16 h-1 bg-contourRed mb-4 rounded-full" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              {/* Key Features */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7">
                <h3 className="text-base sm:text-lg font-bold text-navy-950 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-contourRed" />
                  <span>Key Features &amp; Engineering Advantages</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-navy-900 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications & Capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Applications */}
                <div className="border border-slate-200 rounded-2xl p-5">
                  <h3 className="text-sm font-bold text-navy-950 mb-2.5 flex items-center gap-2">
                    <Building className="w-4 h-4 text-contourRed" />
                    <span>Target Applications</span>
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {service.applications.map((app, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-contourRed" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Capabilities */}
                <div className="border border-slate-200 rounded-2xl p-5">
                  <h3 className="text-sm font-bold text-navy-950 mb-2.5 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-contourRed" />
                    <span>Engineering Capabilities</span>
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {service.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy-900" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-navy-950 mb-3">
                  Technical Specifications &amp; Design Criteria
                </h3>
                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                  <table className="w-full text-left text-xs">
                    <tbody className="divide-y divide-slate-200">
                      {service.specifications.map((spec, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="px-4 py-2.5 font-bold text-navy-950 w-2/5 border-r border-slate-200">
                            {spec.label}
                          </td>
                          <td className="px-4 py-2.5 text-slate-600">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Related Project Site Photographs */}
              {service.galleryImages && service.galleryImages.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-navy-950 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-contourRed" />
                      <span>Project Site Photographs</span>
                    </h3>
                    <Link
                      href="/gallery"
                      className="text-xs font-bold text-contourRed hover:underline flex items-center gap-1"
                    >
                      <span>View Full Gallery (37 Photos)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {service.galleryImages.map((imgSrc, i) => (
                      <div
                        key={i}
                        className="relative h-28 sm:h-36 rounded-xl overflow-hidden group shadow border border-slate-200 bg-navy-950"
                      >
                        <Image
                          src={imgSrc}
                          alt={`${service.title} Site Photograph ${i + 1}`}
                          fill
                          sizes="(max-width: 640px) 50vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Column (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Quick Quote Card */}
              <div className="bg-navy-950 text-white p-6 rounded-2xl shadow-xl border border-navy-800">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400">Project Enquiry</span>
                <h3 className="text-xl font-bold mt-1 mb-2">Need a Quote for {service.title}?</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  Share your building span, area, or tonnage requirements with our engineering team for a fast consultation.
                </p>

                <ServiceQuoteButton serviceTitle={service.title} />

                <div className="mt-5 pt-4 border-t border-navy-800 text-xs text-slate-300 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-contourRed" />
                    <a href="tel:+919100996655" className="hover:text-white font-medium">
                      +91 91009 96655
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-contourRed" />
                    <a href="tel:+919326863516" className="hover:text-white font-medium">
                      +91 93268 63516
                    </a>
                  </div>
                </div>
              </div>

              {/* All Services Navigation Links */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wider mb-3 border-b border-slate-200 pb-2">
                  All Services
                </h4>
                <ul className="space-y-1 text-xs">
                  {servicesData.map((s) => (
                    <li key={s.id}>
                      <Link
                        href={`/services/${s.slug}`}
                        className={`flex items-center justify-between p-2 rounded-lg transition-colors ${
                          s.slug === service.slug
                            ? 'bg-navy-950 text-white font-bold'
                            : 'text-slate-700 hover:bg-slate-200 hover:text-navy-900'
                        }`}
                      >
                        <span className="truncate">{s.title}</span>
                        <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Services */}
              {related.length > 0 && (
                <div className="border border-slate-200 rounded-2xl p-5 bg-white">
                  <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wider mb-3">
                    Related Capabilities
                  </h4>
                  <div className="space-y-2.5">
                    {related.map((rel) => (
                      <Link
                        key={rel.id}
                        href={`/services/${rel.slug}`}
                        className="block p-2.5 rounded-xl border border-slate-200 hover:border-contourRed transition-colors group"
                      >
                        <h5 className="text-xs font-bold text-navy-950 group-hover:text-contourRed transition-colors">
                          {rel.title}
                        </h5>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {rel.shortDesc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
