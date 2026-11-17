'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyData } from '@/data/company';

export default function WhatsAppFloating() {
  return (
    <a
      href={companyData.whatsapp.link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-40 bottom-20 md:bottom-6 right-5 group flex items-center gap-2 bg-[#25D366] text-white p-3.5 rounded-full shadow-xl hover:bg-[#20ba59] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
      aria-label="Chat on WhatsApp with Contour Steel Engineering"
    >
      <MessageCircle className="w-7 h-7 fill-white stroke-[#25D366]" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium text-sm pr-1 hidden sm:inline-block">
        WhatsApp Us
      </span>
    </a>
  );
}
