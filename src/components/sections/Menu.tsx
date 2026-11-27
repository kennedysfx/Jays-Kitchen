"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Minimalist to-go container icon
const ContainerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="6" width="18" height="3" rx="1" />
    <path d="M10 6V4.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V6" />
    <path d="M4.5 9.5L5.5 19a2 2 0 0 0 2 1.8h9a2 2 0 0 0 2-1.8l1-9.5" />
  </svg>
);

// 5-point star inside the Our Menu pill
const PillStarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="shrink-0"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

// Background slideshow images — portrait for mobile, landscape for desktop
const bgImages = [
  { portrait: "/menu/menup1.webp", landscape: "/menu/menul1.webp" },
  { portrait: "/menu/menup2.webp", landscape: "/menu/menul2.webp" },
  { portrait: "/menu/menup3.webp", landscape: "/menu/menul3.webp" },
];

const mealsCategory = {
  id: 1,
  title: "Meals",
  subtitle:
    "Hearty rice, pasta, and richly spiced chicken classics cooked fresh daily and packed in generous portions.",
  featuredVideo: "/menu/meals-preview.mp4", // Place your video file in public/menu/
  featuredPoster: "/favourite/fav-4.webp", // Shown briefly while the video loads
  items: [
    { name: "Party Jollof Rice and Peppered Chicken", priceSmall: "₦3,000", priceBig: "₦3,500" },
    { name: "Fried Rice and Chicken", priceSmall: "₦2,800", priceBig: "₦3,300" },
    { name: "White Rice and Chicken Sauce", priceSmall: "₦2,800", priceBig: "₦3,300" },
    { name: "White Rice and Peppered Chicken Stew", priceSmall: "₦3,500", priceBig: "₦4,000" },
    { name: "Peppered Chicken", priceSmall: "₦2,700", priceBig: "₦3,200" },
    { name: "White Rice and Chicken Pepper Soup", priceSmall: "₦2,800", priceBig: "₦3,500" },
    { name: "White Spaghetti and Peppered Chicken Stew", priceSmall: "₦3,700", priceBig: "₦4,200" },
  ],
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Menu() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="menu"
      className="w-full bg-white py-16 sm:py-20 px-6 relative z-10 -mt-px overflow-hidden"
    >

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center text-center">
          <motion.span
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="inline-flex items-center gap-2 bg-brand-gold text-neutral-950 font-satoshi font-bold text-xs sm:text-sm uppercase tracking-[0.2em] py-2 px-6 rounded-full border-1 border-black shadow-[0_4px_0_0_#000000]"
          >
            <PillStarIcon />
            <span>Our Menu</span>
          </motion.span>

          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-5 text-neutral-950 font-clash font-bold text-[28px] sm:text-4xl md:text-5xl lg:text-[4rem] leading-[1.08] tracking-tight"
          >
            Everything on <br />
            the Jay&apos;s Kitchen menu.
          </motion.h2>

<motion.p
  variants={headingVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  className="mt-3 font-satoshi text-neutral-600 text-sm sm:text-base max-w-xl"
>
  A menu built for sharing. Choose freely, then Tap Order now to send your list on WhatsApp.
</motion.p>
        </div>

        {/* Expanded Single Menu Box — mt-6 sm:mt-8 closes up the gap below the subtitle */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-6 sm:mt-8 w-full rounded-none border-2 border-neutral-300 bg-neutral-950 p-6 sm:p-8 lg:p-10 font-satoshi shadow-[0_8px_10px_rgba(0,0,0,0.5)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
            {/* Mobile-Only Title & Subtitle (sits above the video on mobile) */}
            <div className="block lg:hidden">
              <h3 className="text-brand-gold font-clash font-bold text-2xl sm:text-3xl mb-1 inline-block">
                {mealsCategory.title}
              </h3>
              <div className="w-16 h-[3px] bg-brand-gold mb-2.5"></div>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                {mealsCategory.subtitle}
              </p>
            </div>

            {/* Single Bold Featured Video — adjust 'rounded-2xl' here to change corner roundness */}
            <div className="lg:col-span-5 relative w-full min-h-[250px] sm:min-h-[340px] lg:min-h-full rounded-2xl border border-neutral-700 overflow-hidden bg-neutral-900">
              <video
                src={mealsCategory.featuredVideo}
                poster={mealsCategory.featuredPoster}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Right Side: Desktop Title + Subtitle & Full Menu Items List */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Desktop-Only Title & Subtitle */}
                <div className="hidden lg:block">
                  <h3 className="text-brand-gold font-clash font-bold text-3xl mb-1 inline-block">
                    {mealsCategory.title}
                  </h3>
                  <div className="w-16 h-[3px] bg-brand-gold mb-3"></div>
                  <p className="text-neutral-400 text-base leading-relaxed mb-6">
                    {mealsCategory.subtitle}
                  </p>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col gap-5">
                  {mealsCategory.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center justify-between gap-4 pb-5 border-b border-neutral-800 last:border-b-0 last:pb-0"
                    >
                      {/* Item Name */}
                      <span className="text-white text-sm sm:text-base font-medium leading-snug">
                        {item.name}
                      </span>

                      {/* Prices */}
                      <div className="flex items-center gap-4 flex-shrink-0">
                        <div className="flex flex-col items-end">
                          <span className="flex items-center gap-1 text-[9px] sm:text-[10px] text-neutral-400 font-bold uppercase tracking-widest mb-0.5">
                            <ContainerIcon /> Small
                          </span>
                          <span className="text-white font-bold text-xs sm:text-sm">
                            {item.priceSmall}
                          </span>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="flex items-center gap-1 text-[9px] sm:text-[10px] text-neutral-400 font-bold uppercase tracking-widest mb-0.5">
                            <ContainerIcon /> Big
                          </span>
                          <span className="text-brand-gold font-bold text-xs sm:text-sm">
                            {item.priceBig}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Statement & See the Full Menu Button */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center justify-center text-center mt-8 sm:mt-10"
        >
          <p className="font-satoshi text-neutral-950 font-bold text-lg sm:text-xl mb-4">
            There is a lot more where that came from.
          </p>
<Link
  href="/menu"
  className="inline-flex items-center justify-center bg-brand-gold text-black hover:bg-brand-gold hover:text-white font-satoshi font-bold text-sm sm:text-base px-9 py-4 rounded-full border-2 border-black shadow-[4px_4px_0_0_#000000] hover:shadow-[2px_2px_0_0_#000000] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-200"
>
  See the Full Menu
</Link>
        </motion.div>
      </div>
    </section>
  );
}