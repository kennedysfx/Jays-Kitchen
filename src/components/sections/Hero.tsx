"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] flex flex-col lg:flex-row overflow-hidden gap-0">
      
      {/* 
        1. Video Content 
      */}
      <div className="order-1 lg:order-2 w-full lg:basis-1/2 h-[50vh] md:h-[90vh] lg:h-auto lg:min-h-full relative overflow-hidden flex-none flex-shrink-0 min-h-0 m-0 border-0">
        
        {/* === VIDEO CROPPING WRAPPER === */}
        {/* To crop more/less, adjust the height and top offset proportionally. 
            Example: h-[120%] and -top-[10%] crops 10% from top and 10% from bottom. */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            poster="/hero-poster.jpg"
            className="absolute left-0 w-full object-cover align-top h-[125%] -top-[28%]"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent lg:hidden z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent hidden lg:block z-10 pointer-events-none"></div>


      </div>

      {/* 
        2. Text Content 
      */}
      <div 
        suppressHydrationWarning 
        className="order-2 lg:order-1 w-full lg:basis-1/2 flex flex-col justify-start items-center lg:items-start text-center lg:text-left px-6 sm:px-8 lg:px-16 xl:px-24 pt-7 lg:pt-30 pb-10 z-10 relative flex-none flex-shrink-0 min-h-0 m-0 border-0 max-[480px]:-mt-[2px]"
      >
        {/* Mobile-only overlay at the top of the text column to cover the seam */}
        <div className="hidden max-[480px]:block absolute top-0 left-0 right-0 h-[6px] bg-[#050505] z-50 pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-center lg:items-start w-full"
        >
          
          {/* Pre-Header Text */}
          <p className="font-satoshi font-medium uppercase tracking-[0.2em] text-[8px] sm:text-[8.5px] lg:text-xs text-white mb-4 text-center lg:text-left lg:whitespace-nowrap m-0">
            HOME OF SCRUMPTIOUS CUISINE · NSUKKA · PICKUP & DELIVERY
          </p>

          {/* Header Text */}
          <h1 className="font-cabinet-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-5 lg:mb-6 m-0">
            {/* Mobile / Tablet version */}
            <span className="lg:hidden">
              Your comfort <br />
              food, delivered <br />
              <span className="inline-block bg-brand-gold text-black px-4 py-1 rounded-xl -rotate-2 mt-2">
                hot & fresh.
              </span>
            </span>

            {/* Desktop version */}
            <span className="hidden lg:inline">
              <span className="block whitespace-nowrap">Your comfort</span>
              <span className="block whitespace-nowrap">food</span>
              <span className="block whitespace-nowrap">delivered</span>
              <span className="inline-block whitespace-nowrap bg-brand-gold text-black px-5 py-1 rounded-xl -rotate-2 mt-2">
                hot & fresh.
              </span>
            </span>
          </h1>
          
          {/* Description Paragraph */}
          <p className="font-satoshi font-medium tracking-wide text-neutral-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-md mb-8 mx-auto lg:mx-0 m-0">
            Party Jollof, Peppered chicken, and loaded Egusi soup cooked fresh and delivered straight to your doorstep, anywhere in Nsukka. No stress, no wahala, just real food whenever the craving hits.
          </p>
          
          {/* Buttons Container */}
          <div className="flex flex-row items-center justify-center lg:justify-start gap-5 sm:gap-6 w-full sm:w-auto mt-2">
            
            {/* Primary Gold Button */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.97 }} 
              className="flex-1 sm:flex-none sm:w-[210px]"
            >
              <Link 
                href="#whatsapp"
                className="group relative flex items-center justify-center w-full px-2 sm:px-6 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-neutral-950 font-satoshi font-semibold capitalize tracking-widest text-[11px] sm:text-xs rounded-[22px] shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] overflow-hidden transition-all duration-300"
              >
                <span className="absolute top-0 -left-[150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] group-hover:left-[100%] transition-all duration-1000 ease-out z-10"></span>
                <span className="relative z-20 text-center whitespace-nowrap">Order on Whatsapp</span>
              </Link>
            </motion.div>

            {/* Secondary Button */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.97 }} 
              className="flex-1 sm:flex-none sm:w-[210px]"
            >
              <Link 
                href="#menu"
                className="flex items-center justify-center w-full px-2 sm:px-6 py-3.5 bg-white/5 backdrop-blur-md border border-white/20 text-white font-satoshi font-semibold capitalize tracking-widest text-[11px] sm:text-xs rounded-[22px] hover:bg-white/10 hover:border-[#D4AF37] transition-all duration-300 text-center whitespace-nowrap"
              >
                See Menu
              </Link>
            </motion.div>

          </div>
        </motion.div>
      </div>

    </section>
  );
}