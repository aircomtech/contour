'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title?: string;
  category?: string;
}

export default function ImageLightbox({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title,
  category,
}: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] bg-navy-900 rounded-2xl overflow-hidden shadow-2xl border border-navy-700 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-navy-950/90 border-b border-navy-800 text-white">
          <div>
            {category && (
              <span className="text-[11px] font-bold uppercase tracking-wider text-contourRed block">
                {category}
              </span>
            )}
            <h3 className="text-base sm:text-lg font-bold text-white">{title || imageAlt}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-navy-800 transition-colors"
            aria-label="Close image popup"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Image Container */}
        <div className="relative w-full h-[60vh] sm:h-[70vh] bg-black/60 flex items-center justify-center p-2">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>
      </div>
    </div>
  );
}
