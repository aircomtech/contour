import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import CtaSection from '@/components/CtaSection';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Our Projects | Contour Steel Engineering India (P) Ltd.',
  description:
    'Explore completed Pre-Engineered Buildings, industrial warehouses, heavy structural process plants, and multi-storey commercial steel projects across India.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Our Projects"
        subtitle="Delivering Landmark Pre-Engineered Buildings and Heavy Structural Steel Projects Across India."
        tagline="Portfolio of Excellence"
        breadcrumbs={[{ label: 'Projects' }]}
      />

      <ProjectsClient />

      <CtaSection />
    </>
  );
}
