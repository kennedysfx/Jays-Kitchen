"use client";

import { useState, useEffect } from "react";
import Topbar from "@/components/sections/Topbar";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import FoodTicker from "@/components/sections/FoodTicker";
import Favourites from "@/components/sections/Favourites";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [topbarHeight, setTopbarHeight] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#050505] w-full relative">
      <Topbar 
        isMobileMenuOpen={isMobileMenuOpen} 
        isScrolled={isScrolled} 
        onHeightChange={setTopbarHeight}
      />
      <Header 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isScrolled={isScrolled}
        topbarHeight={topbarHeight}
      />
      <Hero />
      <FoodTicker />
      <Favourites />


      <div className="min-h-[200vh]"></div>
      
    </main>
  );
}