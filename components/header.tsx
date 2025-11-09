"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/eos-for-contractors", label: "EOS for Contractors" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" }
  ]

  return (
    <header className="relative left-0 right-0 z-50 bg-white">
      <div className="container relative flex items-center justify-between py-4">
        <div className="w-[250px] sm:w-[300px]">
          <Link href="/" className="flex items-center gap-2 font-medium uppercase architectural-title text-accent">
            {/* <Image src="/logo.png" alt="The Blue Ladder Group Logo" width={78} height={78} className="w-[50px] h-[50px] sm:w-[78px] sm:h-[78px]" />
            <span className="text-sm sm:text-base">The Blue Ladder Group</span> */}
            <Image src="/theblueladdergroup-logo.png" alt="The Blue Ladder Group Logo" width={600} height={160} quality={100} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 flex-wrap justify-center gap-4 md:gap-8">
          {menuItems.slice(0, -1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-light hover:text-primary transition-colors uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:hidden absolute top-full left-0 right-0 bg-white border-t border-border flex-col items-center py-4 shadow-lg`}>
          {menuItems.slice(0, -1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-sm font-light hover:text-primary transition-colors uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex w-[200px] justify-end">
          <Button asChild variant="default" className="text-sm font-light uppercase">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
