"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PillStarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="shrink-0 text-neutral-950"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const steps = [
  {
    id: "01",
    label: "Step One",
    title: "Send your order",
    description:
      "Message us on WhatsApp with what you want. Our team confirms availability and total in minutes.",
    image: "/how-it-works/step-1.webp",
    alt: "Customer sending a food order on smartphone",
  },
  {
    id: "02",
    label: "Step Two",
    title: "We cook it fresh",
    description:
      "No reheated leftovers here. Once your order drops, we season, cook it piping hot, and seal it cleanly in spill-proof packs.",
    image: "/how-it-works/step-2.webp",
    alt: "Chef cooking fresh meal in kitchen",
  },
  {
    id: "03",
    label: "Step Three",
    title: "Pickup or delivery",
    description:
      "Skip the stress. Walk into our Nsukka spot for quick pickup, or let our rider bring your hot meal straight to your doorstep.",
    image: "/how-it-works/step-3.webp",
    alt: "Hot meal packed and ready for delivery",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative w-full bg-[#F7F3EB] py-16 sm:py-22 px-4 sm:px-6 lg:px-8 font-satoshi overflow-hidden -mt-px border-none"
    >
      {/* Soft ambient gold bloom behind the heading */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,175,55,0.14) 0%, rgba(212,175,55,0) 70%)",
        }}
      />

      {/* Fine grain texture for tactile, print-like quality */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        {/* Section Pill — White box, black star, and black offset shadow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-white text-neutral-950 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.2em] border-2 border-black shadow-[0_4px_0_0_#000000] mb-6"
        >
          <PillStarIcon />
          <span>How It Works</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="text-neutral-950 font-clash font-bold text-3xl sm:text-5xl md:text-6xl text-center max-w-3xl leading-[1.1] mb-11 sm:mb-14"
        >
          Your favourite meal
          <br className="hidden sm:block" /> is just 3 steps away.
        </motion.h2>

        {/* Cards Grid — GPU-locked to prevent post-animation blink on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7 w-full relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.12 }}
              className="group relative flex flex-col justify-end min-h-[300px] sm:min-h-[330px] rounded-2xl border-2 border-black bg-neutral-950 overflow-hidden shadow-[0_5px_0_0_#000000] transform-gpu isolate"
            >
              {/* Full-bleed Step Background Image */}
              <Image
                src={step.image}
                alt={step.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transform-gpu transition-transform duration-700 md:group-hover:scale-105"
              />

              {/* Smooth Bottom Fade Overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/90 via-45% to-transparent pointer-events-none"
              />

              {/* Compact Step Number Badge pinned top-left (solid fill avoids mobile blur repaint) */}
              <div className="absolute top-5 left-5 z-10 w-10 h-10 rounded-full bg-neutral-950/95 border-2 border-brand-gold flex items-center justify-center shadow-md">
                <span className="text-brand-gold font-clash font-bold text-sm">
                  {step.id}
                </span>
              </div>

              {/* Text Content anchored over the faded lower area */}
              <div className="relative z-10 p-6 sm:p-7 pt-16 flex flex-col">
                <span className="text-brand-gold text-[10px] sm:text-[11px] font-satoshi font-bold uppercase tracking-[0.25em] mb-1">
                  {step.label}
                </span>

                <h3 className="text-white font-clash font-bold text-xl sm:text-2xl tracking-tight mb-2">
                  {step.title}
                </h3>

                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-satoshi">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}