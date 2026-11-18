'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, ZoomIn } from 'lucide-react';
import { projectsData } from '@/data/projects';
import ImageLightbox from './ImageLightbox';

export default function ProjectsSection() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
    category: string;
  } | null>(null);

  return (
    <>
      <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-contourRed uppercase">
                Proven Track Record
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-950 tracking-tight mt-1 mb-2">
                Our Projects
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Delivering Excellence Across India with 1,100+ Completed Steel Structures
              </p>
              <div className="w-16 h-1 bg-contourRed mt-3 rounded-full" />
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-contourRed hover:bg-contourRed-800 text-white rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all self-start sm:self-auto active:scale-95"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Grand Projects Grid (image copy 16, 17, 18, 19) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Project Image with Quick Lightbox Zoom */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-navy-950">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-2.5 left-2.5 bg-navy-950/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/20 backdrop-blur-sm">
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
                      className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/80 hover:bg-white text-navy-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow"
                      aria-label="View enlarged image"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-bold text-navy-950 mb-1.5 group-hover:text-contourRed transition-colors leading-snug line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                      {project.shortDesc}
                    </p>

                    {/* Key Metrics */}
                    <div className="text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-lg space-y-1">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Area:</span>
                        <strong className="text-navy-950">{project.constructionDetails.area}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Tonnage:</span>
                        <strong className="text-navy-950">{project.constructionDetails.steelTonnage}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Link */}
                <div className="p-4 sm:p-5 pt-0">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="w-full inline-flex items-center justify-between text-xs font-bold text-navy-900 group-hover:text-contourRed py-2 border-t border-slate-100 transition-colors"
                  >
                    <span>View Project Details</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
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
