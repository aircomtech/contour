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
}

export default function PageHeader({
  title,
  subtitle,
  tagline = 'Contour Steel Engineering',
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <div className="relative bg-gradient-to-r from-navy-950 via-navy-900 to-steel-950 text-white py-10 sm:py-14 overflow-hidden border-b border-navy-800">
      {/* Clean Technical Engineering Pattern - NO BACKGROUND GHOST TEXT */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />

      {/* Subtle Accent Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-steel-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-contourRed/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-1.5 text-xs text-slate-300 mb-2.5" aria-label="Breadcrumb">
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
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-2 text-xs sm:text-sm lg:text-base text-slate-300 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
