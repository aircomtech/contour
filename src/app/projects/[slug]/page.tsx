import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  CheckCircle,
  Building,
  Calendar,
  Layers,
  MapPin,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CtaSection from '@/components/CtaSection';
import { projectsData } from '@/data/projects';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Contour Steel Engineering Projects`,
    description: project.shortDesc,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projectsData.filter((p) => p.slug !== project.slug);

  return (
    <>
      <PageHeader
        title={project.title}
        subtitle={project.shortDesc}
        tagline={project.category}
        breadcrumbs={[
          { label: 'Projects', href: '/projects' },
          { label: project.title },
        ]}
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Main Project Image */}
              <div className="relative h-64 sm:h-84 lg:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>

              {/* Project Overview */}
              <div>
                <span className="text-xs font-bold tracking-widest text-contourRed uppercase">
                  Project Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight mt-1 mb-3">
                  Engineering &amp; Execution Summary
                </h2>
                <div className="w-16 h-1 bg-contourRed mb-4 rounded-full" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Scope of Work */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7">
                <h3 className="text-base sm:text-lg font-bold text-navy-950 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-contourRed" />
                  <span>Scope of Work Delivered by Contour</span>
                </h3>
                <div className="space-y-2">
                  {project.scopeOfWork.map((scope, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-navy-900 shrink-0 mt-0.5" />
                      <span>{scope}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-navy-950 mb-3">Key Project Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, i) => (
                    <div key={i} className="p-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-700 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-contourRed shrink-0" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Construction Details Card */}
              <div className="bg-navy-950 text-white p-6 rounded-2xl shadow-xl border border-navy-800">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400">Project Facts</span>
                <h3 className="text-xl font-bold mt-1 mb-3">Construction Details</h3>

                <div className="space-y-3.5 text-xs divide-y divide-navy-800">
                  <div className="pt-2">
                    <span className="text-slate-400 block text-[11px]">Building Category</span>
                    <strong className="text-white text-sm">{project.category}</strong>
                  </div>
                  <div className="pt-3">
                    <span className="text-slate-400 block text-[11px]">Total Built-Up Area</span>
                    <strong className="text-white text-sm">{project.constructionDetails.area}</strong>
                  </div>
                  <div className="pt-3">
                    <span className="text-slate-400 block text-[11px]">Structural Steel Tonnage</span>
                    <strong className="text-white text-sm">{project.constructionDetails.steelTonnage}</strong>
                  </div>
                  <div className="pt-3">
                    <span className="text-slate-400 block text-[11px]">Project Timeline</span>
                    <strong className="text-white text-sm">{project.constructionDetails.timeline}</strong>
                  </div>
                  <div className="pt-3">
                    <span className="text-slate-400 block text-[11px]">Location Reference</span>
                    <strong className="text-white text-sm">{project.constructionDetails.locationType}</strong>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-navy-800">
                  <Link
                    href="/contact"
                    className="w-full py-3 bg-contourRed hover:bg-contourRed-800 text-white rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow"
                  >
                    <span>Enquire for Similar Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Related Projects */}
              <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50">
                <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wider mb-3 border-b border-slate-200 pb-2">
                  Other Featured Projects
                </h4>
                <div className="space-y-3">
                  {relatedProjects.slice(0, 3).map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/projects/${rel.slug}`}
                      className="block p-3 rounded-xl bg-white border border-slate-200 hover:border-contourRed transition-colors group"
                    >
                      <span className="text-[10px] font-bold text-contourRed uppercase">
                        {rel.category}
                      </span>
                      <h5 className="text-xs font-bold text-navy-950 group-hover:text-contourRed transition-colors mt-0.5">
                        {rel.title}
                      </h5>
                      <span className="text-[11px] text-slate-500 block mt-1">
                        {rel.constructionDetails.area} • {rel.constructionDetails.steelTonnage}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
