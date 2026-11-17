'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Building,
  Maximize2,
} from 'lucide-react';
import { companyData } from '@/data/company';

interface HeroSlide {
  tagline: string;
  heading: string;
  subtitle: string;
  image: string;
  alt: string;
}

const slides: HeroSlide[] = [
  {
    tagline: 'BUILT FOR A STRONGER TOMORROW',
    heading: 'Contour Steel Engineering',
    subtitle:
      'Pre-Engineered Buildings, Structural Steel Engineering and Turnkey Construction Solutions Across India.',
    image: '/images/hero/hero-arch-peb.jpg',
    alt: 'Contour Steel Engineering large-scale PEB building framework',
  },
  {
    tagline: 'BUILT FOR A STRONGER TOMORROW',
    heading: 'Advanced Pre-Engineered Building Solutions',
    subtitle:
      'Innovative, Durable and Cost-Effective Steel Building Solutions for Modern Industries.',
    image: '/images/about/about-primary.jpg',
    alt: 'Advanced pre-engineered industrial steel warehouse structure',
  },
  {
    tagline: 'BUILT FOR A STRONGER TOMORROW',
    heading: 'Engineering Excellence. Delivering Strength.',
    subtitle:
      'From Design and Fabrication to Installation, We Deliver Complete Steel Construction Solutions.',
    image: '/images/facilities/facility-assembly.jpg',
    alt: 'Structural steel assembly and heavy fabrication facility',
  },
];

interface HeroSliderProps {
  onOpenQuote?: () => void;
}

export default function HeroSlider({ onOpenQuote }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, currentSlide]);

  return (
    <div
      className="relative w-full bg-navy-950 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Slider Viewport */}
      <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex items-center">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Image with Overlay */}
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="object-cover object-center transform scale-105 transition-transform duration-7000 ease-out"
                />
                {/* Subtle dark blue gradient overlay as requested */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-navy-950/40" />
                <div className="absolute inset-0 bg-navy-950/20" />
              </div>

              {/* Slide Text Content (Positioned on the Left) */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl text-left text-white pt-6 pb-20 md:pb-16">
                    {/* Small Heading Tagline */}
                    <div className="inline-block mb-3">
                      <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white/90 border-b-2 border-contourRed pb-1">
                        {slide.tagline}
                      </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
                      {slide.heading}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed mb-8 max-w-xl">
                      {slide.subtitle}
                    </p>

                    {/* Two CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        href="/services"
                        className="px-6 py-3 bg-contourRed hover:bg-contourRed-800 text-white rounded font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200"
                      >
                        <span>Explore Our Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <Link
                        href="/contact"
                        className="px-6 py-3 bg-white hover:bg-slate-100 text-navy-900 rounded font-bold text-xs sm:text-sm tracking-wide flex items-center gap-1.5 shadow hover:shadow-md transition-all duration-200"
                      >
                        <span>Get in Touch</span>
                        <ChevronRight className="w-4 h-4 text-navy-900" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Previous and Next Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 md:left-6 z-20 w-10 h-10 rounded-full bg-navy-900/60 hover:bg-navy-900 text-white flex items-center justify-center border border-white/20 transition-all duration-200 focus:outline-none"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 md:right-6 z-20 w-10 h-10 rounded-full bg-navy-900/60 hover:bg-navy-900 text-white flex items-center justify-center border border-white/20 transition-all duration-200 focus:outline-none"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* 3 Slider Pagination Indicators (Active is Red) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full focus:outline-none ${
                currentSlide === index
                  ? 'w-7 h-2.5 bg-contourRed'
                  : 'w-2.5 h-2.5 bg-white/60 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Statistics Panel (Desktop & Mobile) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-6">
        <div className="bg-white rounded-lg shadow-xl border border-slate-200 p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {/* Stat 1 */}
          <div className="flex items-center gap-4 py-3 sm:py-0 px-2 sm:px-4 justify-center sm:justify-start">
            <div className="w-12 h-12 rounded-lg bg-navy-50 text-navy-900 flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6 text-navy-900" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                {companyData.experienceYears}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">Years of Experience</div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4 py-3 sm:py-0 px-2 sm:px-4 justify-center sm:justify-start">
            <div className="w-12 h-12 rounded-lg bg-navy-50 text-navy-900 flex items-center justify-center shrink-0">
              <Building className="w-6 h-6 text-navy-900" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                {companyData.structuresDelivered}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">Structures Delivered</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4 py-3 sm:py-0 px-2 sm:px-4 justify-center sm:justify-start">
            <div className="w-12 h-12 rounded-lg bg-navy-50 text-navy-900 flex items-center justify-center shrink-0">
              <Maximize2 className="w-6 h-6 text-navy-900" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                {companyData.totalSqFt}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">Sq. Ft. of PEB Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
