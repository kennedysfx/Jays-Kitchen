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

// 8 Kitchen Gallery Images — place your photos inside public/kitchen/
const kitchenImages = [
  {
    id: 1,
    src: "/kitchen/kitchen-1.webp",
    alt: "Freshly cooked party jollof rice and peppered chicken",
    aspect: "aspect-[4/4.5]",
  },
  {
    id: 2,
    src: "/kitchen/kitchen-2.webp",
    alt: "Richly spiced chicken sauce poured over steaming rice",
    aspect: "aspect-[4/4.5]",
  },
  {
    id: 3,
    src: "/kitchen/kitchen-3.webp",
    alt: "Sealed takeaway meal pack ready for delivery",
    aspect: "aspect-[4/4.5]",
  },
  {
    id: 4,
    src: "/kitchen/kitchen-4.webp",
    alt: "Golden crispy peppered chicken skewers",
    aspect: "aspect-[4/4.5]",
  },
  {
    id: 5,
    src: "/kitchen/kitchen-5.webp",
    alt: "Garnished fried rice with tender seasoned protein",
    aspect: "aspect-[4/4.5]",
  },
  {
    id: 6,
    src: "/kitchen/kitchen-6.webp",
    alt: "Chilled homemade signature drink bottle",
    aspect: "aspect-[4/4.5]",
  },
  {
    id: 7,
    src: "/kitchen/kitchen-7.webp",
    alt: "Steaming bowl of white rice and pepper soup",
    aspect: "aspect-[4/4.5]",
  },
  {
    id: 8,
    src: "/kitchen/kitchen-8.webp",
    alt: "Jollof spaghetti garnished with fresh peppers and chicken",
    aspect: "aspect-[4/4.5]",
  },
];

const kitchenHighlights = [
  {
    title: "100%",
    subtitle: "Freshly Prepared",
  },
  {
    title: "Nsukka",
    subtitle: "Enugu",
  },
  {
    title: "9am to 8pm",
    subtitle: "every day",
  },
  {
    title: "Pickup & Delivery",
    subtitle: "across Nsukka",
  },
];

export default function Kitchen() {
  return (
    <section
      id="kitchen"
      className="relative w-full bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 font-satoshi overflow-hidden -mt-px border-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Centered Header Block */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          {/* Subtitle Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-brand-gold text-neutral-950 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.2em] border-2 border-black shadow-[0_4px_0_0_#000000] mb-5 transform-gpu"
          >
            <PillStarIcon />
            <span>From the Kitchen</span>
          </motion.div>

          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="text-neutral-950 font-clash font-bold text-3xl sm:text-5xl md:text-[3.5rem] leading-[1.08] tracking-tight max-w-3xl"
          >
            See What&apos;s Cooking.
          </motion.h2>
        </div>

        {/* 8-Image Gallery: 2 Columns on Mobile, 3 Columns on Desktop (No black box-shadow) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7">
          {kitchenImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: (index % 3) * 0.1,
              }}
              className={`group relative w-full ${item.aspect} rounded-xl border-2 border-black bg-neutral-100 overflow-hidden transform-gpu isolate ${
                index % 3 === 1 ? "lg:translate-y-6" : ""
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transform-gpu transition-transform duration-700 md:group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        {/* Joined Highlights Row directly beneath the gallery on the same white background */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center transform-gpu"
        >
          {kitchenHighlights.map((stat) => (
            <div
              key={stat.title}
              className="flex flex-col items-center justify-center"
            >
              <h3 className="text-neutral-950 font-clash font-bold text-2xl sm:text-4xl md:text-[2.6rem] leading-[1.1] tracking-tight mb-1.5">
                {stat.title}
              </h3>
              <p className="text-neutral-600 font-satoshi text-sm sm:text-base font-medium">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}