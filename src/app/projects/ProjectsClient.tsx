'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Filter } from 'lucide-react';
import { projectsData } from '@/data/projects';

const categories = [
  'All',
  'Pre-Engineered Buildings',
  'Industrial Warehouses',
  'Process Plants',
  'Commercial Steel',
];

export default function ProjectsClient() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-navy-900 text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-navy-900 hover:text-navy-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-navy-900/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-contourRed transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {project.shortDesc}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 rounded-lg text-xs text-slate-600 mb-2">
                    <div>
                      <span className="text-slate-500 block text-[11px]">Area:</span>
                      <strong className="text-navy-900 font-semibold">{project.constructionDetails.area}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[11px]">Structural Steel:</span>
                      <strong className="text-navy-900 font-semibold">{project.constructionDetails.steelTonnage}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[11px]">Timeline:</span>
                      <strong className="text-navy-900 font-semibold">{project.constructionDetails.timeline}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[11px]">Location:</span>
                      <strong className="text-navy-900 font-semibold">{project.constructionDetails.locationType}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="p-6 pt-0">
                <Link
                  href={`/projects/${project.slug}`}
                  className="w-full inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white bg-navy-900 group-hover:bg-contourRed py-3 px-4 rounded transition-colors"
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
  );
}
