'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import QuoteModal from '@/components/QuoteModal';

interface ServiceQuoteButtonProps {
  serviceTitle: string;
}

export default function ServiceQuoteButton({ serviceTitle }: ServiceQuoteButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full py-3 bg-contourRed hover:bg-contourRed-800 text-white rounded font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow transition-all active:scale-95"
      >
        <span>Request a Quote</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      <QuoteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        defaultService={serviceTitle}
      />
    </>
  );
}
