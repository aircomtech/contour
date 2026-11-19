'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Cog, Building2, Image as ImageIcon, Phone } from 'lucide-react';

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Services', href: '/services', icon: Cog },
    { label: 'Projects', href: '/projects', icon: Building2 },
    { label: 'Gallery', href: '/gallery', icon: ImageIcon },
    { label: 'Contact', href: '/contact', icon: Phone },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-lg px-1 py-1">
      <div className="grid grid-cols-5 items-center">
        {navItems.map((item) => {
          const isActive =
            item.href === '/'
              ? pathname === '/'
              : pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 relative ${
                isActive ? 'text-contourRed font-semibold' : 'text-slate-600 hover:text-navy-900'
              }`}
            >
              {isActive && (
                <span className="absolute -top-1.5 w-8 h-1 bg-contourRed rounded-full" />
              )}
              <Icon className="w-5 h-5 mb-0.5" />
              <span className="text-[11px] tracking-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
