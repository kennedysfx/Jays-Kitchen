"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section
      id="intro"
      className="w-full bg-white text-[#050505] py-16 md:py-24 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Badge, Headline, Copy, and Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start"
        >
          {/* Eyebrow Pill */}
          <span className="inline-block px-4 py-1.5 mb-5 text-xs font-satoshi font-bold uppercase tracking-widest bg-[#050505] text-brand-gold rounded-full border border-yellow-500 shadow-[0_3px_0_0_#EAB308]">
            HOW FAR!
          </span>

          {/* Section Header */}
          <h2 className="font-clash text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-[#050505] mb-6">
            Good Food.{" "}
            <span className="text-brand-gold">Real Flavour.</span> Proper
            Portions.
          </h2>

          {/* Subheader / Body Copy */}
          <p className="font-satoshi text-base sm:text-lg text-neutral-700 leading-relaxed mb-8 max-w-xl">
            Jay&apos;s Kitchen was built on food that tastes like home. Generous
            portions, rich local spices, and that proper homemade flavour you
            don&apos;t forget after one bite. Whether it&apos;s your daily lunch
            craving or a bespoke spread for your next celebration, we serve
            every plate hot, fresh, and straight from the heart.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <Link
              href="/services"
              className="px-7 py-3.5 bg-[#EAB308] text-[#050505] font-satoshi font-bold text-sm sm:text-base rounded-full border border-black shadow-[0_4px_0_0_#000000] transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-0.5 active:scale-100 active:translate-y-0 text-center"
            >
              Our Services
            </Link>

            {/* Secondary Transparent Button with Black Border & Invert Hover */}
            <Link
              href="/menu"
              className="px-7 py-3.5 bg-transparent text-[#050505] font-satoshi font-bold text-sm sm:text-base rounded-full border-2 border-black transition-colors duration-300 ease-out hover:bg-black hover:text-white text-center"
            >
              See The Menu
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Sharp-Edged Image with Black Border */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full"
        >
          <div className="relative w-full aspect-[4/4] sm:aspect-[4/3] lg:aspect-[4/4] rounded-none border-2 border-black overflow-hidden bg-neutral-100">
            <Image
              src="/menu/menu1.webp"
              alt="Chef preparing fresh dishes at Jay's Kitchen"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover rounded-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}