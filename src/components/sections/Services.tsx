"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const PillStarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="shrink-0 text-brand-gold"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const compactServices = [
  "Delivery & Takeaway",
  "Personalized Private Chef",
  "Specialty & Custom Menus",
  "Consultation & Kitchen Extras",
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full bg-neutral-950 py-18 sm:py-24 px-4 sm:px-6 lg:px-8 font-satoshi overflow-x-clip -mt-px border-none"
    >
      {/* Subtle Gold Architectural Grid with Radial Fade */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(212, 175, 55, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(212, 175, 55, 0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, #000 40%, transparent 100%)",
        }}
      />

      {/* Warm Ambient Spotlight */}
      <div
        aria-hidden="true"
        className="absolute -top-24 right-0 w-[560px] h-[560px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(212,175,55,0.13) 0%, rgba(212,175,55,0) 68%)",
        }}
      />

      {/* Subtle Tactile Grain */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT COLUMN (Desktop) / TOP STACK (Mobile) — Slides in from the LEFT */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Header Block: Centered on mobile, Left-aligned on desktop */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-8 sm:mb-9">
              <motion.div
                initial={{ opacity: 0, x: -36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="inline-flex items-center gap-2 bg-white text-neutral-950 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.2em] border-2 border-black shadow-[0_4px_0_0_#D4AF37] mb-5 transform-gpu"
              >
                <PillStarIcon />
                <span>Our Services</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: -36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
                className="text-white font-clash font-bold text-3xl sm:text-5xl md:text-[3.2rem] leading-[1.08] tracking-tight mb-3.5 transform-gpu"
              >
                Scrumptious Cuisine Services.
              </motion.h2>

            </div>

            {/* Clean Catering Box */}
            <motion.div
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.24 }}
              className="w-full rounded-2xl border border-neutral-800 bg-neutral-900/90 p-6 sm:p-7 mb-6 transform-gpu"
            >


              <h3 className="text-white font-clash font-bold text-2xl sm:text-3xl tracking-tight mb-2.5">
                Full-Scale Event Catering
              </h3>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Hosting a wedding, birthday celebration, corporate event, or family gathering? Our catering team handles generous, richly spiced Nigerian and continental spreads cooked fresh, neatly served, and tailored to your guest list.
              </p>
            </motion.div>

            {/* Explore All Services Button */}
            <motion.div
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.3 }}
              className="flex justify-center lg:justify-start mb-6 transform-gpu"
            >
              <Link
                href="services"
                className="inline-flex items-center justify-center bg-brand-gold text-neutral-950 hover:bg-white hover:text-neutral-950 font-satoshi font-bold text-sm sm:text-base px-9 py-3.5 rounded-full border-2 border-black shadow-[4px_4px_0_0_#FFFFFF] hover:shadow-[2px_2px_0_0_#FFFFFF] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
              >
                Explore All Services
              </Link>
            </motion.div>

            {/* Tiny Compact Service Boxes */}
            <motion.div
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.36 }}
              className="grid grid-cols-2 gap-2.5 sm:gap-3 transform-gpu"
            >
              {compactServices.map((serviceName) => (
                <div
                  key={serviceName}
                  className="flex items-center justify-center text-center rounded-xl border border-neutral-800 bg-neutral-900/70 px-3 py-2.5 text-neutral-200 font-medium text-xs sm:text-sm"
                >
                  {serviceName}
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN / BOTTOM ON MOBILE — Slides in from the RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end transform-gpu"
          >
            {/* Adjust mobile width (max-w-[360px] sm:max-w-[420px]), desktop width (lg:max-w-[450px]), and height (aspect-[4/4.6]) here */}
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[450px] aspect-[4/4.6] rounded-3xl bg-neutral-900 overflow-hidden shadow-[0_14px_35px_rgba(0,0,0,0.65)] transform-gpu isolate">
              <Image
                src="/services/catering.webp"
                alt="Imcoming image"
                fill
                sizes="(max-width: 1024px) 420px, 450px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}