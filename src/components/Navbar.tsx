'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Phone,
  Mail,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Warehouse,
  Factory,
  GitBranch,
  Building2,
  Wrench,
  Flame,
  ShieldCheck,
  Handshake,
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
      setIsScrolled(window.scrollY > 40);
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
        { label: 'Manufacturing & Engineering', href: '/about#engineering-expertise' },
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
      <header className="w-full relative z-40 bg-white">
        {/* Mobile Top Strip */}
        <div className="md:hidden bg-navy-950 text-white text-[11px] py-1.5 px-3 flex items-center justify-between">
          <a href="tel:+919100996655" className="flex items-center gap-1 text-slate-200">
            <Phone className="w-3 h-3 text-contourRed" />
            <span>+91 91009 96655</span>
          </a>
          <span className="text-slate-500">|</span>
          <a href="mailto:hydsales@contoursteel.co.in" className="flex items-center gap-1 text-slate-200 truncate">
            <Mail className="w-3 h-3 text-contourRed" />
            <span className="truncate">hydsales@contoursteel.co.in</span>
          </a>
        </div>

        {/* Desktop Top Contact Bar */}
        <div className="hidden md:block border-b border-slate-100 py-2.5 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative h-14 w-52 sm:w-60">
                <Image
                  src="/images/logo.png"
                  alt="Contour Steel Engineering India (P) Ltd."
                  fill
                  sizes="240px"
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Contact Details on Right */}
            <div className="flex items-center gap-6 lg:gap-8 text-xs text-slate-700">
              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-navy-900 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="leading-tight">
                  <a href="tel:+919100996655" className="font-bold text-navy-900 hover:text-contourRed transition-colors block">
                    +91 91009 96655
                  </a>
                  <a href="tel:+919326863516" className="text-slate-600 hover:text-contourRed transition-colors block">
                    +91 93268 63516
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5 border-l border-slate-200 pl-6">
                <div className="w-8 h-8 rounded bg-navy-900 text-white flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div className="leading-tight">
                  <a
                    href="mailto:hydsales@contoursteel.co.in"
                    className="font-medium text-navy-900 hover:text-contourRed transition-colors"
                  >
                    hydsales@contoursteel.co.in
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2.5 border-l border-slate-200 pl-6">
                <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 fill-white" />
                </div>
                <div className="leading-tight">
                  <span className="block text-[10px] uppercase font-semibold text-slate-500">WhatsApp</span>
                  <a
                    href={companyData.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-navy-900 hover:text-green-600 transition-colors"
                  >
                    +91 91009 96655
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Header Bar (Logo + Hamburger) */}
        <div className="md:hidden flex items-center justify-between px-4 py-2 border-b border-slate-200 bg-white">
          <Link href="/" className="relative h-11 w-44">
            <Image
              src="/images/logo.png"
              alt="Contour Steel Engineering"
              fill
              sizes="180px"
              priority
              className="object-contain object-left"
            />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-navy-900 hover:text-contourRed focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Desktop Sticky Navigation Bar */}
        <nav
          className={`hidden md:block transition-all duration-200 ${
            isScrolled
              ? 'sticky top-0 z-50 bg-navy-900 shadow-xl'
              : 'bg-navy-900 shadow-md'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between">
            <ul className="flex items-center space-x-1 lg:space-x-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);

                // About dropdown
                if (link.label === 'About Us') {
                  return (
                    <li
                      key={link.label}
                      className="relative group"
                      onMouseEnter={() => setAboutDropdown(true)}
                      onMouseLeave={() => setAboutDropdown(false)}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center gap-1 px-3.5 py-3.5 text-xs lg:text-[13px] font-semibold tracking-wide uppercase transition-colors ${
                          isActive
                            ? 'text-white bg-navy-950 border-b-2 border-contourRed'
                            : 'text-slate-100 hover:text-white hover:bg-navy-800'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className="w-3.5 h-3.5 opacity-80 group-hover:rotate-180 transition-transform duration-200" />
                      </Link>

                      {/* Dropdown Menu */}
                      {aboutDropdown && (
                        <div className="absolute left-0 top-full w-56 bg-white text-slate-800 shadow-xl rounded-b-lg border-t-2 border-contourRed py-2 z-50 animate-fadeIn">
                          {link.subItems?.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 hover:text-navy-900 transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  );
                }

                // Services dropdown
                if (link.label === 'Our Services') {
                  return (
                    <li
                      key={link.label}
                      className="relative group"
                      onMouseEnter={() => setServicesDropdown(true)}
                      onMouseLeave={() => setServicesDropdown(false)}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center gap-1 px-3.5 py-3.5 text-xs lg:text-[13px] font-semibold tracking-wide uppercase transition-colors ${
                          isActive
                            ? 'text-white bg-navy-950 border-b-2 border-contourRed'
                            : 'text-slate-100 hover:text-white hover:bg-navy-800'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className="w-3.5 h-3.5 opacity-80 group-hover:rotate-180 transition-transform duration-200" />
                      </Link>

                      {/* Mega Dropdown Menu for Services */}
                      {servicesDropdown && (
                        <div className="absolute left-0 top-full w-[540px] bg-white text-slate-800 shadow-2xl rounded-b-lg border-t-2 border-contourRed p-4 z-50 grid grid-cols-2 gap-2 animate-fadeIn">
                          {servicesData.map((service) => (
                            <Link
                              key={service.id}
                              href={`/services/${service.slug}`}
                              className="flex items-start gap-2.5 p-2 rounded-md hover:bg-slate-50 transition-colors group/item"
                            >
                              <div className="w-7 h-7 rounded bg-slate-100 text-navy-900 flex items-center justify-center shrink-0 group-hover/item:bg-navy-900 group-hover/item:text-white transition-colors">
                                <span className="text-xs font-bold">›</span>
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-navy-900 group-hover/item:text-contourRed transition-colors">
                                  {service.title}
                                </h4>
                                <p className="text-[11px] text-slate-500 line-clamp-1">
                                  {service.shortDesc}
                                </p>
                              </div>
                            </Link>
                          ))}
                          <div className="col-span-2 pt-2 border-t border-slate-100 flex justify-between items-center px-2">
                            <span className="text-xs text-slate-500 font-medium">All 8 Core Engineering Capabilities</span>
                            <Link
                              href="/services"
                              className="text-xs font-bold text-contourRed hover:underline flex items-center gap-1"
                            >
                              <span>View All Services</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`block px-3.5 py-3.5 text-xs lg:text-[13px] font-semibold tracking-wide uppercase transition-colors ${
                        isActive
                          ? 'text-white bg-navy-950 border-b-2 border-contourRed'
                          : 'text-slate-100 hover:text-white hover:bg-navy-800'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Red "Get a Quote" Button */}
            <div>
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="bg-contourRed hover:bg-contourRed-800 text-white text-xs lg:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded transition-all duration-200 flex items-center gap-1.5 shadow-md hover:shadow-lg active:scale-95"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Slide-in Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-navy-950/70 backdrop-blur-sm animate-fadeIn">
            <div className="absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl flex flex-col">
              {/* Drawer Header */}
              <div className="p-4 bg-navy-900 text-white flex items-center justify-between border-b border-navy-800">
                <span className="font-bold text-sm tracking-wider uppercase text-white">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-slate-300 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Nav Items */}
              <div className="p-4 flex-1 overflow-y-auto space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2.5 text-sm font-semibold text-slate-800 rounded hover:bg-slate-100"
                >
                  Home
                </Link>

                {/* About Us with sub-menu */}
                <div>
                  <button
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-800 rounded hover:bg-slate-100"
                  >
                    <span>About Us</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileAboutOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {mobileAboutOpen && (
                    <div className="pl-4 py-1 space-y-1 bg-slate-50 rounded">
                      <Link
                        href="/about"
                        className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-contourRed"
                      >
                        Company Overview
                      </Link>
                      <Link
                        href="/about#vision-mission"
                        className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-contourRed"
                      >
                        Vision & Mission
                      </Link>
                      <Link
                        href="/about#core-values"
                        className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-contourRed"
                      >
                        Core Values
                      </Link>
                    </div>
                  )}
                </div>

                {/* Services with sub-menu */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-800 rounded hover:bg-slate-100"
                  >
                    <span>Our Services</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 py-1 space-y-1 bg-slate-50 rounded">
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
                          className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-navy-900"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/facilities"
                  className="block px-3 py-2.5 text-sm font-semibold text-slate-800 rounded hover:bg-slate-100"
                >
                  Our Facilities
                </Link>
                <Link
                  href="/quality-assurance"
                  className="block px-3 py-2.5 text-sm font-semibold text-slate-800 rounded hover:bg-slate-100"
                >
                  Quality Assurance
                </Link>
                <Link
                  href="/projects"
                  className="block px-3 py-2.5 text-sm font-semibold text-slate-800 rounded hover:bg-slate-100"
                >
                  Projects
                </Link>
                <Link
                  href="/why-peb"
                  className="block px-3 py-2.5 text-sm font-semibold text-slate-800 rounded hover:bg-slate-100"
                >
                  Why PEB
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2.5 text-sm font-semibold text-slate-800 rounded hover:bg-slate-100"
                >
                  Contact Us
                </Link>

                {/* Mobile CTA */}
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setIsQuoteOpen(true);
                    }}
                    className="w-full bg-contourRed text-white py-3 rounded font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Get a Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Mobile Contact Quick Links */}
                <div className="pt-6 border-t border-slate-200 text-xs text-slate-600 space-y-2">
                  <p className="font-semibold text-navy-900">Direct Contacts:</p>
                  <a href="tel:+919100996655" className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-contourRed" />
                    <span>+91 91009 96655</span>
                  </a>
                  <a href="mailto:hydsales@contoursteel.co.in" className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-contourRed" />
                    <span>hydsales@contoursteel.co.in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
