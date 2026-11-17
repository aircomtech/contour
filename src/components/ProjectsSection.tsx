'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, Layers } from 'lucide-react';
import { projectsData } from '@/data/projects';

export default function ProjectsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Left Title and Right "View All Projects" CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-contourRed uppercase">
              Proven Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-1 mb-2">
              Our Projects
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Delivering Excellence Across India
            </p>
            <div className="w-16 h-1 bg-contourRed mt-3 rounded-full" />
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-contourRed hover:bg-contourRed-800 text-white rounded font-bold text-xs sm:text-sm uppercase tracking-wider shadow transition-all self-start sm:self-auto"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-navy-900/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-base font-bold text-navy-900 mb-2 group-hover:text-contourRed transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {project.shortDesc}
                  </p>

                  <div className="text-[11px] text-slate-500 space-y-1 mb-2">
                    <div className="flex justify-between">
                      <span>Area:</span>
                      <strong className="text-slate-800">{project.constructionDetails.area}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Tonnage:</span>
                      <strong className="text-slate-800">{project.constructionDetails.steelTonnage}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Link */}
              <div className="p-4 pt-0">
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
  );
}
