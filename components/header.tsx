'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/eos-for-contractors', label: 'EOS for Contractors' },
    { href: '/news', label: 'News & Events' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="relative left-0 right-0 z-50 bg-white">
      <div className="container relative flex items-center justify-between py-4">
        <div className="w-[250px] sm:w-[300px]">
          <Link
            href="/"
            className="architectural-title flex items-center gap-2 font-medium uppercase text-accent"
          >
            {/* <Image src="/logo.png" alt="The Blue Ladder Group Logo" width={78} height={78} className="w-[50px] h-[50px] sm:w-[78px] sm:h-[78px]" />
            <span className="text-sm sm:text-base">The Blue Ladder Group</span> */}
            <Image
              src="/theblueladdergroup-logo.png"
              alt="The Blue Ladder Group Logo"
              width={600}
              height={160}
              quality={100}
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="p-2 lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
        </button>

        {/* Desktop Navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 flex-wrap justify-center gap-4 md:gap-8 lg:flex">
          {menuItems.slice(0, -1).map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-light uppercase transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`${isMenuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col items-center border-t border-border bg-white py-4 shadow lg:hidden`}
        >
          {menuItems.slice(0, -1).map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-sm font-light uppercase transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden w-[200px] justify-end lg:flex">
          <Button asChild variant="default" className="text-sm font-light uppercase">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
