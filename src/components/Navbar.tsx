'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import { companyData } from '@/data/company';
import { servicesData } from '@/data/services';
import QuoteModal from './QuoteModal';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    {
      label: 'About Us',
      href: '/about',
      hasDropdown: true,
      subItems: [
        { label: 'Company Overview', href: '/about' },
        { label: 'Vision & Mission', href: '/about#vision-mission' },
        { label: 'Core Values', href: '/about#core-values' },
        { label: 'Engineering Expertise', href: '/about#engineering-expertise' },
      ],
    },
    {
      label: 'Our Services',
      href: '/services',
      hasDropdown: true,
      services: servicesData,
    },
    { label: 'Our Facilities', href: '/facilities' },
    { label: 'Quality Assurance', href: '/quality-assurance' },
    { label: 'Projects', href: '/projects' },
    { label: 'Why PEB', href: '/why-peb' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      {/* Sticky Dark Navy Header with Logo directly on Left beside Home */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-950/95 backdrop-blur-md shadow-2xl py-2'
            : 'bg-navy-950 shadow-lg py-2.5 sm:py-3'
        } border-b border-navy-800/80`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Left: Logo (Placed beside Home in the header as requested) */}
          <Link href="/" className="flex items-center shrink-0 group">
            <div className="relative h-11 w-44 sm:h-12 sm:w-52 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/images/logo-footer.png"
                alt="Contour Steel Engineering India (P) Ltd."
                fill
                priority
                sizes="(max-width: 640px) 176px, 208px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Center/Desktop Navigation Links (Directly beside the logo) */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              // About dropdown
              if (link.label === 'About Us') {
                return (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setAboutDropdown(true)}
                    onMouseLeave={() => setAboutDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 px-3 py-2 text-xs xl:text-[13px] font-bold tracking-wider uppercase transition-all rounded ${
                        isActive
                          ? 'text-white bg-navy-850 border-b-2 border-contourRed'
                          : 'text-slate-200 hover:text-white hover:bg-navy-850/80'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>

                    {aboutDropdown && (
                      <div className="absolute left-0 top-full pt-2 w-56 z-50 animate-fadeIn">
                        <div className="bg-navy-900 border border-navy-700 shadow-2xl rounded-xl py-2 overflow-hidden">
                          {link.subItems?.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block px-4 py-2.5 text-xs font-semibold text-slate-200 hover:text-white hover:bg-navy-800 transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Services dropdown
              if (link.label === 'Our Services') {
                return (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 px-3 py-2 text-xs xl:text-[13px] font-bold tracking-wider uppercase transition-all rounded ${
                        isActive
                          ? 'text-white bg-navy-850 border-b-2 border-contourRed'
                          : 'text-slate-200 hover:text-white hover:bg-navy-850/80'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>

                    {servicesDropdown && (
                      <div className="absolute left-0 top-full pt-2 w-[560px] z-50 animate-fadeIn">
                        <div className="bg-navy-900 border border-navy-700 shadow-2xl rounded-xl p-4 grid grid-cols-2 gap-2">
                          {servicesData.map((service) => (
                            <Link
                              key={service.id}
                              href={`/services/${service.slug}`}
                              className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-navy-800 transition-colors group/item"
                            >
                              <div className="w-6 h-6 rounded bg-navy-800 text-contourRed flex items-center justify-center shrink-0 text-xs font-bold mt-0.5 group-hover/item:bg-contourRed group-hover/item:text-white transition-colors">
                                ›
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-white group-hover/item:text-contourRed transition-colors">
                                  {service.title}
                                </h4>
                                <p className="text-[11px] text-slate-400 line-clamp-1">
                                  {service.shortDesc}
                                </p>
                              </div>
                            </Link>
                          ))}
                          <div className="col-span-2 pt-2 border-t border-navy-800 flex justify-between items-center px-1">
                            <span className="text-[11px] text-slate-400">
                              8 Turnkey Capabilities
                            </span>
                            <Link
                              href="/services"
                              className="text-xs font-bold text-contourRed hover:text-red-400 flex items-center gap-1"
                            >
                              <span>View All Services</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 text-xs xl:text-[13px] font-bold tracking-wider uppercase transition-all rounded ${
                    isActive
                      ? 'text-white bg-navy-850 border-b-2 border-contourRed'
                      : 'text-slate-200 hover:text-white hover:bg-navy-850/80'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Quick Action Buttons & Get a Quote */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Quick Call Icon (Desktop & Tablet) */}
            <a
              href="tel:+919100996655"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy-850 hover:bg-navy-800 border border-navy-700 text-slate-200 hover:text-white text-xs font-semibold transition-colors"
              title="Call Contour Steel"
            >
              <Phone className="w-3.5 h-3.5 text-contourRed" />
              <span>+91 91009 96655</span>
            </a>

            {/* Red Get a Quote CTA Button */}
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-contourRed hover:bg-contourRed-800 text-white text-xs font-bold uppercase tracking-wider px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 shadow-lg hover:shadow-xl active:scale-95"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-200 hover:text-white rounded-lg hover:bg-navy-850 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-in Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-sm animate-fadeIn">
            <div className="absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-navy-950 text-white shadow-2xl flex flex-col border-l border-navy-800">
              {/* Drawer Header */}
              <div className="p-4 bg-navy-900 flex items-center justify-between border-b border-navy-800">
                <div className="relative h-9 w-36">
                  <Image
                    src="/images/logo-footer.png"
                    alt="Contour Steel Engineering"
                    fill
                    sizes="144px"
                    className="object-contain object-left"
                  />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-navy-800"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="p-4 flex-1 overflow-y-auto space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2.5 text-sm font-bold text-white rounded hover:bg-navy-850"
                >
                  Home
                </Link>

                {/* About Accordion */}
                <div>
                  <button
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold text-white rounded hover:bg-navy-850"
                  >
                    <span>About Us</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileAboutOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {mobileAboutOpen && (
                    <div className="pl-4 py-1 space-y-1 bg-navy-900 rounded-lg">
                      <Link
                        href="/about"
                        className="block px-3 py-1.5 text-xs text-slate-300 hover:text-white"
                      >
                        Company Overview
                      </Link>
                      <Link
                        href="/about#vision-mission"
                        className="block px-3 py-1.5 text-xs text-slate-300 hover:text-white"
                      >
                        Vision & Mission
                      </Link>
                      <Link
                        href="/about#core-values"
                        className="block px-3 py-1.5 text-xs text-slate-300 hover:text-white"
                      >
                        Core Values
                      </Link>
                    </div>
                  )}
                </div>

                {/* Services Accordion */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold text-white rounded hover:bg-navy-850"
                  >
                    <span>Our Services</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 py-1 space-y-1 bg-navy-900 rounded-lg">
                      <Link
                        href="/services"
                        className="block px-3 py-1.5 text-xs font-bold text-contourRed"
                      >
                        All Services Overview
                      </Link>
                      {servicesData.map((s) => (
                        <Link
                          key={s.id}
                          href={`/services/${s.slug}`}
                          className="block px-3 py-1.5 text-xs text-slate-300 hover:text-white"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/facilities"
                  className="block px-3 py-2.5 text-sm font-bold text-white rounded hover:bg-navy-850"
                >
                  Our Facilities
                </Link>
                <Link
                  href="/quality-assurance"
                  className="block px-3 py-2.5 text-sm font-bold text-white rounded hover:bg-navy-850"
                >
                  Quality Assurance
                </Link>
                <Link
                  href="/projects"
                  className="block px-3 py-2.5 text-sm font-bold text-white rounded hover:bg-navy-850"
                >
                  Projects
                </Link>
                <Link
                  href="/why-peb"
                  className="block px-3 py-2.5 text-sm font-bold text-white rounded hover:bg-navy-850"
                >
                  Why PEB
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2.5 text-sm font-bold text-white rounded hover:bg-navy-850"
                >
                  Contact Us
                </Link>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setIsQuoteOpen(true);
                    }}
                    className="w-full bg-contourRed text-white py-3 rounded-lg font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Get a Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="pt-6 border-t border-navy-800 text-xs text-slate-400 space-y-2">
                  <p className="font-semibold text-white">Direct Connect:</p>
                  <a href="tel:+919100996655" className="flex items-center gap-2 text-slate-300">
                    <Phone className="w-3.5 h-3.5 text-contourRed" />
                    <span>+91 91009 96655</span>
                  </a>
                  <a
                    href={companyData.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#25D366]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
                    <span>WhatsApp: +91 91009 96655</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Quote Modal Accessible Everywhere */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
