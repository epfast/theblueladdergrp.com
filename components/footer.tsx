import { Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#006838] text-white">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="architectural-title text-lg font-bold">The Blue Ladder Group</h3>
            <p className="text-sm opacity-90">
              Expert CALGreen Inspections and EOS Solutions for Construction Businesses
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/in/FaithMackarness/"
                target="_blank"
                className="transition-colors hover:text-[#8DC63F]"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-semibold opacity-90">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm opacity-75 transition-colors hover:text-[#8DC63F] hover:opacity-100"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm opacity-75 transition-colors hover:text-[#8DC63F] hover:opacity-100"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-sm opacity-75 transition-colors hover:text-[#8DC63F] hover:opacity-100"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-sm opacity-75 transition-colors hover:text-[#8DC63F] hover:opacity-100"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="mb-4 font-semibold opacity-90">Services</h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/services"
                className="text-sm opacity-75 transition-colors hover:text-[#8DC63F] hover:opacity-100"
              >
                CALGreen Services
              </Link>
              <Link
                href="/eos-for-contractors"
                className="text-sm opacity-75 transition-colors hover:text-[#8DC63F] hover:opacity-100"
              >
                EOS Solutions
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="mb-4 font-semibold opacity-90">Contact</h4>
            <div className="space-y-2 text-sm opacity-75">
              <p>Monday – Friday</p>
              <p>7 AM – 6 PM PST</p>
              <p className="transition-colors hover:text-[#8DC63F]">
                <a href="mailto:Faith@TheBlueLadderGrp.com">Faith@TheBlueLadderGrp.com</a>
              </p>
              <p className="transition-colors hover:text-[#8DC63F]">
                <a href="tel:+14087282287">(408) 728-2287</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm opacity-60">
              © {new Date().getFullYear()} The Blue Ladder Group. All rights reserved.
            </p>
            {/* <nav className="flex gap-6">
              <Link href="/privacy" className="text-sm opacity-60 hover:opacity-100 hover:text-[#8DC63F] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm opacity-60 hover:opacity-100 hover:text-[#8DC63F] transition-colors">
                Terms of Service
              </Link>
            </nav> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
