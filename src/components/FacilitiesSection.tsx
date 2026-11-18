'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, ZoomIn, Eye, Sparkles } from 'lucide-react';
import { facilitiesData } from '@/data/facilities';
import ImageLightbox from './ImageLightbox';

export default function FacilitiesSection() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
    category: string;
  } | null>(null);

  return (
    <>
      <section className="py-12 md:py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Heading, Description & CTA */}
            <div className="lg:col-span-4">
              <span className="text-xs font-bold tracking-widest text-contourRed uppercase">
                Plant Infrastructure
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-950 tracking-tight mt-1 mb-3">
                Our Manufacturing Facilities
              </h2>
              <div className="w-16 h-1 bg-contourRed mb-4 rounded-full" />

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-5">
                Advanced manufacturing facilities with multi-torch CNC cutting, H-Beam assembly and SAW
                welding capabilities at our Seriguda plant.
              </p>

              <div className="space-y-2 mb-6 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-contourRed shrink-0" />
                  <span className="font-medium">1,500+ MT Monthly Plant Output Capacity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-contourRed shrink-0" />
                  <span className="font-medium">Automated Submerged Arc Dual-Side Welding Gantries</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-contourRed shrink-0" />
                  <span className="font-medium">Enclosed Shot-Blasting &amp; Multi-Coat Protective Finishing</span>
                </div>
              </div>

              <Link
                href="/facilities"
                className="inline-flex items-center gap-2 px-6 py-3 bg-contourRed hover:bg-contourRed-800 text-white rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <span>Explore Facilities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Column: 4 High-Resolution Industrial Cards (image copy 11, 14, 12, 13) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {facilitiesData.map((facility, index) => (
                <div
                  key={facility.id}
                  onClick={() =>
                    setSelectedImage({
                      src: facility.image,
                      alt: facility.title,
                      title: facility.title,
                      category: `Manufacturing Facility 0${index + 1}`,
                    })
                  }
                  className="group relative h-56 sm:h-64 rounded-xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer bg-navy-950"
                >
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-black text-white bg-contourRed px-2 py-0.5 rounded shadow">
                      0{index + 1}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white/80 hover:bg-white text-navy-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Bottom Text */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block">
                      Plant Unit 0{index + 1}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold leading-snug mt-0.5 group-hover:text-red-300 transition-colors line-clamp-2">
                      {facility.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
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
