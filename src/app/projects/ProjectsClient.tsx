'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ZoomIn } from 'lucide-react';
import { projectsData } from '@/data/projects';
import ImageLightbox from '@/components/ImageLightbox';

const categories = [
  'All',
  'Pre-Engineered Buildings',
  'Industrial Warehouses',
  'Process Plants',
  'Commercial Steel',
];

export default function ProjectsClient() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
    category: string;
  } | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <>
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-navy-950 text-white shadow-lg'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-navy-950 hover:text-navy-950'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid: Grand Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Project Image with Quick Lightbox Zoom */}
                  <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-navy-950">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3.5 left-3.5 bg-navy-950/90 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md border border-white/20 backdrop-blur-sm">
                      {project.category}
                    </div>

                    {/* Lightbox Zoom Icon Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage({
                          src: project.image,
                          alt: project.title,
                          title: project.title,
                          category: project.category,
                        });
                      }}
                      className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-navy-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow"
                      aria-label="View enlarged image"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-navy-950 mb-1.5 group-hover:text-contourRed transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {project.shortDesc}
                    </p>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-2 gap-2.5 p-3 bg-slate-50 rounded-xl text-xs text-slate-600 mb-2">
                      <div>
                        <span className="text-slate-500 block text-[11px]">Area:</span>
                        <strong className="text-navy-950 font-semibold">{project.constructionDetails.area}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[11px]">Structural Steel:</span>
                        <strong className="text-navy-950 font-semibold">{project.constructionDetails.steelTonnage}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[11px]">Timeline:</span>
                        <strong className="text-navy-950 font-semibold">{project.constructionDetails.timeline}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[11px]">Location:</span>
                        <strong className="text-navy-950 font-semibold">{project.constructionDetails.locationType}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="p-5 sm:p-6 pt-0">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="w-full inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white bg-navy-950 group-hover:bg-contourRed py-3 px-4 rounded-xl transition-colors"
                  >
                    <span>View Project Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
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
