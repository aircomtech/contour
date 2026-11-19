'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ZoomIn, Eye, Sparkles, ArrowRight, Layers, CheckCircle } from 'lucide-react';
import { galleryData, galleryCategories, type GalleryItem } from '@/data/gallery';
import ImageLightbox from './ImageLightbox';
import ScrollReveal from './ScrollReveal';

interface GallerySectionProps {
  showTitle?: boolean;
  limit?: number;
  initialCategory?: string;
}

export default function GallerySection({
  showTitle = true,
  limit,
  initialCategory = 'All Projects',
}: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === 'All Projects'
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <>
      <section className="py-12 md:py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          {showTitle && (
            <ScrollReveal direction="up" duration={0.6}>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-contourRed text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Project Execution Portfolio</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-950 tracking-tight mt-1 mb-2">
                    Industrial Project Gallery
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-2xl">
                    High-resolution documentation of completed PEB warehouses, heavy structural fabrication,
                    high-bay crane erections, and multi-tier commercial complexes delivered across India.
                  </p>
                  <div className="w-16 h-1 bg-contourRed mt-3 rounded-full" />
                </div>

                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 font-semibold bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-xl">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>37 Site Photographs</span>
                  </div>
                  {limit && (
                    <Link
                      href="/gallery"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-contourRed hover:bg-contourRed-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 whitespace-nowrap"
                    >
                      <span>View Full Gallery</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Category Filter Tabs */}
          <ScrollReveal direction="up" duration={0.5} delay={0.1}>
            <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                    activeCategory === cat
                      ? 'bg-navy-950 text-white shadow-lg shadow-navy-950/20'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-navy-950'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* 37 Photo Grid with Staggered Scroll Animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {displayedItems.map((item, idx) => (
              <ScrollReveal
                key={item.id}
                direction="up"
                delay={(idx % 4) * 0.08}
                duration={0.55}
                className="h-full"
              >
                <div
                  onClick={() => setSelectedImage(item)}
                  className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer bg-navy-950 flex flex-col justify-between"
                >
                  {/* Photo with Smooth Scale on Hover */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* High-Contrast Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Header Tag */}
                  <div className="relative z-10 p-3 flex items-center justify-between">
                    <span className="text-[10px] font-black text-white bg-navy-950/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/20">
                      #{item.number < 10 ? `0${item.number}` : item.number}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-navy-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Text Information */}
                  <div className="relative z-10 p-4 text-white">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-red-200 transition-colors line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom Explore CTA when limited */}
          {limit && filteredItems.length > limit && (
            <div className="mt-10 text-center">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-8 py-3 bg-navy-950 hover:bg-contourRed text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg active:scale-95"
              >
                <span>View All 37 Construction Photographs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <ImageLightbox
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage.image}
          imageAlt={selectedImage.title}
          title={selectedImage.title}
          category={selectedImage.category}
        />
      )}
    </>
  );
}
