'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  ZoomIn,
} from 'lucide-react';
import { servicesData } from '@/data/services';
import ImageLightbox from './ImageLightbox';

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

export default function ServicesSection() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
    category: string;
  } | null>(null);

  return (
    <>
      <section className="py-12 md:py-16 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs font-bold tracking-widest text-contourRed uppercase">What We Build</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-950 tracking-tight mt-1 mb-2">
              Our Services
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Comprehensive Steel Construction Solutions tailored to modern industry demands
            </p>
            <div className="w-16 h-1 bg-contourRed mx-auto mt-3 rounded-full" />
          </div>

          {/* 8 Services Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicesData.map((service, index) => {
              const IconComponent = iconMap[service.iconName] || Warehouse;

              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div>
                    {/* Service Banner Image with Lightbox Zoom Trigger */}
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-navy-950">
                      <Image
                        src={service.bannerImage}
                        alt={service.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                      {/* Top Icon Badge */}
                      <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-lg bg-navy-950/90 text-white flex items-center justify-center border border-white/20 shadow">
                        <IconComponent className="w-4 h-4 text-contourRed" />
                      </div>

                      {/* Quick Zoom Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage({
                            src: service.bannerImage,
                            alt: service.title,
                            title: service.title,
                            category: `Service 0${index + 1}`,
                          });
                        }}
                        className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/80 hover:bg-white text-navy-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow"
                        aria-label="View enlarged image"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                      </button>

                      {/* Service Number Tag */}
                      <div className="absolute bottom-2 right-2.5 bg-navy-950/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        0{index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5">
                      <h3 className="text-sm sm:text-base font-bold text-navy-950 mb-1.5 group-hover:text-contourRed transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Link */}
                  <div className="p-4 sm:p-5 pt-0">
                    <Link
                      href={`/services/${service.slug}`}
                      className="w-full inline-flex items-center justify-between text-xs font-bold text-navy-900 group-hover:text-contourRed py-2.5 border-t border-slate-100 transition-colors"
                    >
                      <span>View Service Details</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA bar */}
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3 bg-navy-950 hover:bg-contourRed text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg active:scale-95"
            >
              <span>Explore All Engineering Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <ImageLightbox
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          title={selectedImage.title}
          category={selectedImage.category}
        />
      )}
    </>
  );
}
