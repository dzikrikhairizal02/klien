"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#products", label: "Products" },
    { href: "#projects", label: "Projects" },
    { href: "#story", label: "Story" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl md:text-2xl font-medium text-black tracking-tight hover:opacity-70 transition-opacity duration-200"
          >
            Klien
          </Link>

          {/* Navigation Links - Desktop */}
          <ul className="hidden md:flex items-center gap-10 lg:gap-12">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative text-sm text-gray-600 hover:text-black transition-colors duration-200 py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-200 ease-out hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-black">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <ul className="md:hidden flex flex-col gap-4 pb-6 border-t border-gray-100 mt-4 pt-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-gray-600 hover:text-black transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
