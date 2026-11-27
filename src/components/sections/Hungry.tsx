"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hungry() {
  return (
    <section
      id="hungry"
      className="relative w-full bg-brand-gold py-10 sm:py-12 lg:py-25 px-4 sm:px-6 lg:px-8 font-satoshi overflow-hidden -mt-px border-none"
    >
      {/* Subtle Tactile Grain Texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Main Headline with Left Black Dot & Right White Dot */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="inline-flex items-center justify-center gap-3 sm:gap-4 lg:gap-5 text-neutral-950 font-clash font-bold text-4xl sm:text-5xl lg:text-5xl leading-[1.05] tracking-tight mb-3 lg:mb-2 transform-gpu"
        >
          <span
            aria-hidden="true"
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-neutral-950 shrink-0"
          />
          <span>Hungry yet?</span>
          <span
            aria-hidden="true"
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white shrink-0"
          />
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
          className="text-neutral-950/90 font-satoshi text-sm sm:text-base lg:text-base max-w-xl leading-relaxed mb-5 lg:mb-5 transform-gpu"
        >
          Browse what&apos;s fresh on the menu, explore our catering and culinary services, and get hot meals across Nsukka.
        </motion.p>

        {/* Action Buttons: View Menu & Our Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 transform-gpu"
        >
          <Link
            href="#menu"
            className="inline-flex items-center justify-center bg-neutral-950 text-brand-gold hover:bg-neutral-900 font-satoshi font-bold text-sm lg:text-sm px-7 lg:px-8 py-3 lg:py-3 rounded-full border-2 border-black shadow-[4px_4px_0_0_#FFFFFF] hover:shadow-[2px_2px_0_0_#FFFFFF] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
          >
            View Menu
          </Link>

          <Link
            href="#services"
            className="inline-flex items-center justify-center bg-white text-neutral-950 hover:bg-neutral-100 font-satoshi font-bold text-sm lg:text-sm px-7 lg:px-8 py-3 lg:py-3 rounded-full border-2 border-black shadow-[4px_4px_0_0_#000000] hover:shadow-[2px_2px_0_0_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
          >
            Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}