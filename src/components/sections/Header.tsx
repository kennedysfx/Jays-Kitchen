"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Favourite", href: "#favourite" },
  { name: "Menu", href: "#menu" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Reviews", href: "#reviews" },
  { name: "Our Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Header({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isScrolled,
  topbarHeight,
}: {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  isScrolled: boolean;
  topbarHeight: number;
}) {
  const headerRef = useRef<HTMLElement | null>(null);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close the menu on any click outside the header/dropdown
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen, setIsMobileMenuOpen]);

  const showSolid = isScrolled || isMobileMenuOpen;
  const offset = showSolid ? 0 : topbarHeight;

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 transition-transform duration-300 will-change-transform h-12`}
        style={{
          transform: `translateY(${offset}px)`,
          zIndex: 50,
        }}
        aria-label="Main header"
      >
        <div
          className={`w-full h-14 transition-all duration-300 ${
            showSolid
              ? "bg-white text-neutral-950 shadow-lg backdrop-blur-0"
              : "bg-white/6 text-white backdrop-blur-sm shadow-none"
          }`}
        >
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo + Site Name */}
            <div className="flex-shrink-0 flex items-center gap-3 z-50">
              <Link href="/" className="relative block w-[60px] h-[60px] rounded-full overflow-hidden">
                <Image
                  src="/logo-black.png"
                  alt="Jay's Kitchen Logo"
                  fill
                  className={`object-contain transition-opacity duration-300 ${
                    showSolid ? "opacity-100" : "opacity-0"
                  }`}
                />
                <Image
                  src="/logo-white.png"
                  alt="Jay's Kitchen Logo"
                  fill
                  className={`object-contain transition-opacity duration-300 ${
                    showSolid ? "opacity-0" : "opacity-100"
                  }`}
                />
              </Link>

{/* Site Name — color synced with header state, apostrophe fixed gold */}
<Link
  href="/"
  className={`font-satoshi font-bold tracking-wide text-base sm:text-lg transition-colors duration-300 ${
    showSolid ? "text-neutral-950" : "text-white"
  }`}
>
  Jay<span className="text-[#FFD600]">&apos;</span>s Kitchen
</Link>
            </div>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative font-satoshi font-medium capitalize tracking-widest text-xs after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-6px] after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop order button */}
            <div className="hidden xl:flex items-center">
              <button
                className={`px-8 py-2.5 font-satoshi uppercase tracking-widest font-bold text-xs transition-all duration-300 border rounded-r-[20px] ${
                  showSolid
                    ? "bg-neutral-950 text-white border-neutral-950 hover:bg-transparent hover:text-neutral-950"
                    : "bg-brand-gold text-neutral-950 border-brand-gold hover:bg-transparent hover:text-brand-gold"
                }`}
              >
                Order
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="xl:hidden flex flex-col items-end justify-center gap-[6px] w-10 h-10 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-[2px] bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "w-8 translate-y-[8px] rotate-45" : "w-6"
                }`}
              />
              <span
                className={`block h-[2px] bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "w-9"
                }`}
              />
              <span
                className={`block h-[2px] bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "w-8 -translate-y-[8px] -rotate-45" : "w-6"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="xl:hidden absolute top-full left-0 w-full bg-white text-neutral-950 border-t border-gray-100 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col px-8 py-8">
                {navLinks.map((link) => (
                  <div key={link.name} className="w-full border-b border-gray-200 pb-4 mb-4">
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-satoshi font-medium capitalize tracking-widest text-sm w-fit relative block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-brand-gold after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}

                <div className="pt-2">
                  <button className="w-full py-4 bg-neutral-950 text-white font-satoshi uppercase tracking-widest font-bold text-sm shadow-md rounded-r-[1px]">
                    Order on Whatsapp
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}