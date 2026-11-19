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
import AnimatedNumber from './AnimatedNumber';

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
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 45) {
        // Swiped left -> next slide
        nextSlide();
      } else if (diff < -45) {
        // Swiped right -> prev slide
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setIsPaused(false);
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-white via-white to-white">
      {/* 1. Hero Viewport with Image Slider (Full-bleed images to bottom boundary) */}
      <div
        className="relative w-full overflow-hidden min-h-[520px] sm:min-h-[600px] lg:min-h-[680px] flex items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Image: Crisp, Full Bleed, Animated */}
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
                {/* Subtle soft gradient scrim on left for crystal-clear readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/75 via-navy-950/30 to-transparent sm:w-3/5" />
              </div>

              {/* Slide Content: PURE CLEAN TEXT DIRECTLY ON SECTION (NO PATCHWORK BOX) */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl text-left text-white py-6 sm:py-10 pb-24 sm:pb-28 lg:pb-32">
                    {/* Tagline */}
                    <div className="mb-2 sm:mb-3">
                      <span className="inline-block text-[11px] sm:text-xs lg:text-sm font-black tracking-[0.2em] uppercase text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] border-b-2 border-contourRed pb-1">
                        {slide.tagline}
                      </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.15] mb-2 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                      {slide.heading}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xs sm:text-base lg:text-lg text-white font-medium leading-relaxed mb-5 sm:mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)] max-w-xl">
                      {slide.subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
                      <Link
                        href="/services"
                        className="px-4 sm:px-7 py-2.5 sm:py-3.5 bg-contourRed hover:bg-contourRed-800 text-white rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 shadow-2xl hover:shadow-contourRed/40 transition-all duration-200 active:scale-95 whitespace-nowrap"
                      >
                        <span>Explore Our Services</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </Link>

                      <Link
                        href="/contact"
                        className="px-4 sm:px-7 py-2.5 sm:py-3.5 bg-white hover:bg-slate-100 text-navy-950 rounded-lg font-bold text-xs sm:text-sm tracking-wide flex items-center gap-1 sm:gap-1.5 shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95 whitespace-nowrap"
                      >
                        <span>Get in Touch</span>
                        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-navy-950" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Previous and Next Controls (Hidden on small mobile so they never collide with text, visible on sm+) */}
        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute left-4 lg:left-8 z-20 w-11 h-11 lg:w-13 lg:h-13 rounded-full bg-navy-950/70 hover:bg-navy-950 text-white items-center justify-center border border-white/30 backdrop-blur-sm transition-all duration-200 focus:outline-none shadow-lg active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute right-4 lg:right-8 z-20 w-11 h-11 lg:w-13 lg:h-13 rounded-full bg-navy-950/70 hover:bg-navy-950 text-white items-center justify-center border border-white/30 backdrop-blur-sm transition-all duration-200 focus:outline-none shadow-lg active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>

        {/* Pagination Indicators (Positioned Safely Above Floating White Box) */}
        <div className="absolute bottom-16 sm:bottom-20 lg:bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full focus:outline-none shadow ${
                currentSlide === index
                  ? 'w-8 h-2.5 sm:w-9 sm:h-3 bg-contourRed'
                  : 'w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/70 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 2. Floating Statistics Panel – EXACTLY 50% OVERLAPPING HERO BOTTOM BOUNDARY */}
      <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 z-30 pointer-events-none">
        <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 pointer-events-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-[0_20px_50px_rgba(11,34,64,0.18)] border border-slate-100 p-2.5 sm:p-5 lg:p-7 grid grid-cols-3 divide-x divide-slate-200">
            {/* Stat 1: Years of Experience */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-4 lg:gap-5 py-1 sm:py-2 px-1 sm:px-3 lg:px-6 justify-center sm:justify-start group text-center sm:text-left">
              <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl border border-red-100 bg-red-50/60 text-contourRed flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105">
                <Calendar className="w-4 h-4 sm:w-6 sm:h-6 text-contourRed stroke-[2]" />
              </div>
              <div className="min-w-0">
                <div className="text-base sm:text-3xl lg:text-4xl xl:text-5xl font-black text-navy-950 tracking-tight leading-none mb-0.5 sm:mb-1 flex items-baseline justify-center sm:justify-start">
                  <AnimatedNumber value={19} suffix="+" />
                </div>
                <div className="text-[8px] sm:text-[11px] lg:text-xs font-bold uppercase tracking-wider text-slate-600 leading-tight">
                  Years of Experience
                </div>
              </div>
            </div>

            {/* Stat 2: Structures Delivered */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-4 lg:gap-5 py-1 sm:py-2 px-1 sm:px-3 lg:px-6 justify-center sm:justify-start group text-center sm:text-left">
              <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl border border-red-100 bg-red-50/60 text-contourRed flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105">
                <Building className="w-4 h-4 sm:w-6 sm:h-6 text-contourRed stroke-[2]" />
              </div>
              <div className="min-w-0">
                <div className="text-base sm:text-3xl lg:text-4xl xl:text-5xl font-black text-navy-950 tracking-tight leading-none mb-0.5 sm:mb-1 flex items-baseline justify-center sm:justify-start">
                  <AnimatedNumber value={1100} suffix="+" />
                </div>
                <div className="text-[8px] sm:text-[11px] lg:text-xs font-bold uppercase tracking-wider text-slate-600 leading-tight">
                  Structures Delivered
                </div>
              </div>
            </div>

            {/* Stat 3: Sq. Ft. of PEB Projects */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-4 lg:gap-5 py-1 sm:py-2 px-1 sm:px-3 lg:px-6 justify-center sm:justify-start group text-center sm:text-left">
              <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl border border-red-100 bg-red-50/60 text-contourRed flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105">
                <Maximize2 className="w-4 h-4 sm:w-6 sm:h-6 text-contourRed stroke-[2]" />
              </div>
              <div className="min-w-0">
                <div className="text-base sm:text-3xl lg:text-4xl xl:text-5xl font-black text-navy-950 tracking-tight leading-none mb-0.5 sm:mb-1 flex items-baseline justify-center sm:justify-start">
                  <AnimatedNumber value={30} suffix=" Million" />
                </div>
                <div className="text-[8px] sm:text-[11px] lg:text-xs font-bold uppercase tracking-wider text-slate-600 leading-tight">
                  Sq. Ft. PEB Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
