'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  Linkedin,
  Youtube,
  Twitter,
  Facebook,
  ShieldCheck,
} from 'lucide-react';
import { companyData } from '@/data/company';
import { servicesData } from '@/data/services';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-10 sm:pt-12 pb-24 md:pb-8 border-t-4 border-contourRed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-navy-800">
          {/* Col 1: About & Logo (No white patchwork box as requested) */}
          <div className="lg:col-span-2 space-y-3.5">
            <Link href="/" className="inline-block">
              {/* Seamless logo on dark navy without white box */}
              <div className="relative h-12 w-52 sm:w-56">
                <Image
                  src="/images/logo-footer.png"
                  alt="Contour Steel Engineering"
                  fill
                  sizes="224px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              With 19+ years of engineering mastery, Contour Steel Engineering India (P) Ltd. delivers
              innovative, sustainable, and high-performance Pre-Engineered Buildings and Structural Steel
              solutions across India.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={companyData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-850 hover:bg-contourRed text-slate-200 hover:text-white flex items-center justify-center transition-colors shadow"
                aria-label="Contour Steel LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={companyData.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-850 hover:bg-contourRed text-slate-200 hover:text-white flex items-center justify-center transition-colors shadow"
                aria-label="Contour Steel YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={companyData.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-850 hover:bg-contourRed text-slate-200 hover:text-white flex items-center justify-center transition-colors shadow"
                aria-label="Contour Steel X Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={companyData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-850 hover:bg-contourRed text-slate-200 hover:text-white flex items-center justify-center transition-colors shadow"
                aria-label="Contour Steel Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-white text-xs font-bold uppercase tracking-wider border-l-2 border-contourRed pl-2.5">
              Quick Links
            </h3>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <span className="text-contourRed">›</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <span className="text-contourRed">›</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <span className="text-contourRed">›</span> Our Facilities
                </Link>
              </li>
              <li>
                <Link href="/quality-assurance" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <span className="text-contourRed">›</span> Quality Assurance
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <span className="text-contourRed">›</span> Projects
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <span className="text-contourRed">›</span> Project Gallery (37 Photos)
                </Link>
              </li>
              <li>
                <Link href="/why-peb" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <span className="text-contourRed">›</span> Why PEB
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <span className="text-contourRed">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Services */}
          <div className="space-y-3">
            <h3 className="text-white text-xs font-bold uppercase tracking-wider border-l-2 border-contourRed pl-2.5">
              Our Services
            </h3>
            <ul className="space-y-1.5 text-xs">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-white hover:underline transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-contourRed">›</span> {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate Locations */}
          <div className="space-y-3">
            <h3 className="text-white text-xs font-bold uppercase tracking-wider border-l-2 border-contourRed pl-2.5">
              Offices &amp; Plant
            </h3>
            <div className="space-y-2.5 text-xs">
              <div>
                <p className="font-semibold text-white">Hyderabad (Head Office)</p>
                <p className="text-slate-400 text-[11px] leading-snug">
                  H No: 9-4-77/A/249, 3rd Floor, Rauf Plaza, Toli Chowki – 500008
                </p>
                <a href="tel:+919100996655" className="text-contourRed font-semibold text-[11px] hover:underline">
                  +91 91009 96655
                </a>
              </div>

              <div>
                <p className="font-semibold text-white">Pune (Branch Office)</p>
                <p className="text-slate-400 text-[11px] leading-snug">
                  #209, 2nd Floor, Ajinkyatara Building, Sinhagad Road – 411030
                </p>
                <a href="tel:+919326863516" className="text-contourRed font-semibold text-[11px] hover:underline">
                  +91 93268 63516
                </a>
              </div>

              <div>
                <p className="font-semibold text-white">Seriguda (Plant)</p>
                <p className="text-slate-400 text-[11px] leading-snug">
                  Contour Steel Engineering (Plant), Seriguda – 509202
                </p>
              </div>

              <div className="pt-1">
                <span className="text-slate-400 block text-[11px]">Email:</span>
                <a
                  href="mailto:hydsales@contoursteel.co.in"
                  className="text-white hover:text-contourRed transition-colors font-medium text-[11px]"
                >
                  hydsales@contoursteel.co.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 text-[11px]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>|</span>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <span>|</span>
            <Link href="/services" className="hover:text-white transition-colors">Our Services</Link>
            <span>|</span>
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <span>|</span>
            <Link href="/quality-assurance" className="hover:text-white transition-colors">Quality Assurance</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>

          <p className="text-center md:text-right text-[11px]">
            © {new Date().getFullYear()} Contour Steel Engineering India (P) Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
