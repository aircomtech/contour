import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import GallerySection from '@/components/GallerySection';
import CtaSection from '@/components/CtaSection';

export const metadata: Metadata = {
  title: 'Project Photo Gallery | Contour Steel Engineering',
  description:
    'Comprehensive photo gallery of completed Pre-Engineered Buildings, industrial warehouses, heavy structural steel fabrication, crane gantries, and turnkey projects by Contour Steel Engineering across India.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Industrial Project Gallery"
        subtitle="Explore high-resolution site photographs of our delivered Pre-Engineered Buildings, heavy steel structures, fabrication yards, and turnkey installations across India."
        tagline="Visual Portfolio"
        breadcrumbs={[{ label: 'Project Gallery' }]}
      />

      {/* Full 37 Project Photographs with Category Filter & Lightbox */}
      <GallerySection showTitle={false} />

      {/* Call to Action */}
      <CtaSection />
    </>
  );
}
