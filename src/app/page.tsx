"use client";

import { useState } from "react";
import Topbar from "@/components/sections/Topbar";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col bg-[#050505] w-full relative">
      <Topbar isMobileMenuOpen={isMobileMenuOpen} />
      <Header 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      <Hero />

      
      {/* Temporary spacing so you can scroll and test the Header background color change! */}
      <div className="min-h-[200vh]"></div>
      
    </main>
  );
}