import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloating from '@/components/WhatsAppFloating';
import MobileBottomNav from '@/components/MobileBottomNav';

export const metadata: Metadata = {
  metadataBase: new URL('https://contoursteel.co.in'),
  title: 'Contour Steel Engineering India (P) Ltd. | Pre-Engineered Buildings & Structural Steel',
  description:
    'Contour Steel Engineering India (P) Ltd. specializes in Pre-Engineered Buildings (PEB), Structural Steel Engineering, Industrial Steel Buildings, Steel Fabrication, and Turnkey Construction Solutions across India.',
  keywords: [
    'Pre-Engineered Buildings',
    'PEB India',
    'Structural Steel Engineering',
    'Industrial Steel Buildings',
    'Steel Fabrication Seriguda',
    'Turnkey PEB Solutions',
    'Contour Steel Engineering',
    'Hyderabad PEB Company',
  ],
  authors: [{ name: 'Contour Steel Engineering India (P) Ltd.' }],
  icons: {
    icon: '/images/logo.png',
  },
  openGraph: {
    title: 'Contour Steel Engineering India (P) Ltd.',
    description: 'BUILT FOR A STRONGER TOMORROW - 19+ Years, 1,100+ Structures, 30 Million Sq. Ft. Delivered Across India.',
    url: 'https://contoursteel.co.in',
    siteName: 'Contour Steel Engineering',
    images: [
      {
        url: '/images/logo.png',
        width: 600,
        height: 380,
        alt: 'Contour Steel Engineering Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-800 bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloating />
        <MobileBottomNav />
      </body>
    </html>
  );
}
