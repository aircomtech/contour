import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
}

export default function PageHeader({
  title,
  subtitle,
  tagline = 'Contour Steel Engineering',
  breadcrumbs,
  bgImage = '/images/hero/hero-arch-peb.jpg',
}: PageHeaderProps) {
  return (
    <div className="relative bg-navy-950 text-white py-14 sm:py-20 overflow-hidden">
      {/* Background Image with Dark Blue Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-950" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-1.5 text-xs text-slate-300 mb-3" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Small Tagline */}
        <span className="text-xs font-bold tracking-widest text-contourRed uppercase block mb-1">
          {tagline}
        </span>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-3 text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
