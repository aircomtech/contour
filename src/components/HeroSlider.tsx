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
  Sparkles,
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
    image: '/images/hero/hero-slide-1.jpg',
    alt: 'Contour Steel Engineering large-scale structural steel framework',
  },
  {
    tagline: 'BUILT FOR A STRONGER TOMORROW',
    heading: 'Advanced Pre-Engineered Building Solutions',
    subtitle:
      'Innovative, Durable and Cost-Effective Steel Building Solutions for Modern Industries.',
    image: '/images/hero/hero-slide-2.jpg',
    alt: 'Advanced pre-engineered steel columns and roof frameworks',
  },
  {
    tagline: 'BUILT FOR A STRONGER TOMORROW',
    heading: 'Engineering Excellence. Delivering Strength.',
    subtitle:
      'From Design and Fabrication to Installation, We Deliver Complete Steel Construction Solutions.',
    image: '/images/hero/hero-slide-3.jpg',
    alt: 'Large-scale industrial steel manufacturing and warehouse facility',
  },
];

export default function HeroSlider() {
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
      className="relative w-full bg-slate-900 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Slider Viewport with Bright Clear Backgrounds (Without dark shadowing) */}
      <div className="relative min-h-[500px] sm:min-h-[560px] lg:min-h-[640px] flex items-center">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Image: Vivid, Bright, Animated, Without Heavy Shadow */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className={`object-cover object-center transition-transform duration-[7000ms] ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                  sizes="100vw"
                />
                {/* Minimal subtle gradient scrim only on the left for text legibility, keeping the right 65% fully clear & bright */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/40 to-transparent sm:w-2/3" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950/60 to-transparent" />
              </div>

              {/* Slide Content: Contained in an Executive Glass Card for Perfect Legibility */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-xl sm:max-w-2xl bg-navy-950/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl text-left text-white my-8">
                    {/* Tagline */}
                    <div className="inline-flex items-center gap-1.5 mb-2.5 px-3 py-1 bg-white/10 rounded-full border border-white/20">
                      <Sparkles className="w-3.5 h-3.5 text-contourRed" />
                      <span className="text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase text-white">
                        {slide.tagline}
                      </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight leading-[1.15] mb-3">
                      {slide.heading}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xs sm:text-sm lg:text-base text-slate-200 leading-relaxed mb-6 font-medium">
                      {slide.subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                      <Link
                        href="/services"
                        className="px-5 sm:px-6 py-2.5 sm:py-3 bg-contourRed hover:bg-contourRed-800 text-white rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95"
                      >
                        <span>Explore Our Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <Link
                        href="/contact"
                        className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white/90 hover:bg-white text-navy-950 rounded-lg font-bold text-xs sm:text-sm tracking-wide flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
                      >
                        <span>Get in Touch</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Previous and Next Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-navy-950/70 hover:bg-navy-950 text-white flex items-center justify-center border border-white/30 backdrop-blur-sm transition-all duration-200 focus:outline-none"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-navy-950/70 hover:bg-navy-950 text-white flex items-center justify-center border border-white/30 backdrop-blur-sm transition-all duration-200 focus:outline-none"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* 3 Pagination Indicators */}
        <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full focus:outline-none ${
                currentSlide === index
                  ? 'w-8 h-2.5 bg-contourRed'
                  : 'w-2.5 h-2.5 bg-white/70 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Statistics Panel – Grand Level Design (image copy 7) */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 sm:-mt-9 mb-4">
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-slate-100 p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 hover:shadow-contourRed/10 transition-all duration-300">
          {/* Stat 1 */}
          <div className="flex items-center gap-4 py-3 sm:py-1 px-2 sm:px-6 justify-center sm:justify-start group">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-navy-50 group-hover:bg-navy-900 group-hover:text-white text-navy-900 flex items-center justify-center shrink-0 transition-colors duration-300 shadow-inner">
              <Calendar className="w-7 h-7 text-contourRed group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-950 tracking-tight">
                {companyData.experienceYears}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-semibold uppercase tracking-wide">
                Years of Experience
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4 py-3 sm:py-1 px-2 sm:px-6 justify-center sm:justify-start group">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-navy-50 group-hover:bg-navy-900 group-hover:text-white text-navy-900 flex items-center justify-center shrink-0 transition-colors duration-300 shadow-inner">
              <Building className="w-7 h-7 text-contourRed group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-950 tracking-tight">
                {companyData.structuresDelivered}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-semibold uppercase tracking-wide">
                Structures Delivered
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4 py-3 sm:py-1 px-2 sm:px-6 justify-center sm:justify-start group">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-navy-50 group-hover:bg-navy-900 group-hover:text-white text-navy-900 flex items-center justify-center shrink-0 transition-colors duration-300 shadow-inner">
              <Maximize2 className="w-7 h-7 text-contourRed group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-950 tracking-tight">
                {companyData.totalSqFt}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-semibold uppercase tracking-wide">
                Sq. Ft. of PEB Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
