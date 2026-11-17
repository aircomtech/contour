'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Cpu, Layers, Flame, CheckCircle } from 'lucide-react';
import { facilitiesData } from '@/data/facilities';

export default function FacilitiesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Description & Explore Facilities Button (4 cols) */}
          <div className="lg:col-span-4">
            <span className="text-xs font-bold tracking-widest text-contourRed uppercase">
              Plant Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight mt-1 mb-4">
              Our Manufacturing Facilities
            </h2>
            <div className="w-16 h-1 bg-contourRed mb-5 rounded-full" />

            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Advanced manufacturing facilities with multi-torch CNC cutting, H-Beam assembly and SAW
              welding capabilities located in Seriguda.
            </p>

            <div className="space-y-2 mb-8 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-navy-900 shrink-0" />
                <span>1,500+ MT Monthly Plant Output Capacity</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-navy-900 shrink-0" />
                <span>Automated Submerged Arc Dual-Side Welding Gantries</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-navy-900 shrink-0" />
                <span>Enclosed Shot-Blasting & Multi-Coat Protective Finishing</span>
              </div>
            </div>

            <Link
              href="/facilities"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-contourRed hover:bg-contourRed-800 text-white rounded font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              <span>Explore Facilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column: 4 Industrial Photographs (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
            {facilitiesData.map((facility, index) => (
              <div
                key={facility.id}
                className="group relative h-48 sm:h-60 rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  sizes="(max-width: 640px) 50vw, 20vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-bold text-contourRed uppercase tracking-wider block">
                    0{index + 1}
                  </span>
                  <h4 className="text-xs font-bold leading-tight line-clamp-2 mt-0.5">
                    {facility.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
