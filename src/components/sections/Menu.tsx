"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Same minimalist to-go container icon used in Favourites.tsx
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

// Background slideshow images — portrait for mobile, landscape for desktop
const bgImages = [
  { portrait: "/menu/menup1.webp", landscape: "/menu/menul1.webp" },
  { portrait: "/menu/menup2.webp", landscape: "/menu/menul2.webp" },
  { portrait: "/menu/menup3.webp", landscape: "/menu/menul3.webp" },
];

const menuCategories = [
  {
    id: 1,
    title: "Meals",
    items: [
      { name: "Party Jollof Rice and Peppered Chicken", priceSmall: "₦3,000", priceBig: "₦3,500" },
      { name: "Fried Rice and Chicken", priceSmall: "₦2,800", priceBig: "₦3,300" },
      { name: "White Rice and Chicken Sauce", priceSmall: "₦2,800", priceBig: "₦3,300" },
      { name: "White Rice and Peppered Chicken Stew", priceSmall: "₦3,500", priceBig: "₦4,000" },
      { name: "Peppered Chicken", priceSmall: "₦2,700", priceBig: "₦3,200" },
      { name: "White Rice and Chicken Pepper Soup", priceSmall: "₦2,800", priceBig: "₦3,500" },
      { name: "White Spaghetti and Peppered Chicken Stew", priceSmall: "₦3,700", priceBig: "₦4,200" },
      { name: "Garnished Jollof Spaghetti and Chicken", priceSmall: "₦2,800", priceBig: "₦3,300" },
    ],
  },
  {
    id: 2,
    title: "Soup",
    items: [
      { name: "Edikaikong Soup with Swallow ", priceSmall: "₦2,800", priceBig: "₦3,500" },
      { name: "Vegetable/Okro with Swallow", priceSmall: "₦2,500", priceBig: "₦3,200" },
      { name: "Egusi/Ugu with Swallow", priceSmall: "₦2,300", priceBig: "₦3,000" },
      { name: "Egusi/Okazi with Swallow", priceSmall: "₦2,600", priceBig: "₦3,300" },
      { name: "Egusi/Onugbu with Swallow", priceSmall: "₦2,400", priceBig: "₦3,100" },
    ],
  },
  {
    id: 3,
    title: "Sides",
    items: [
      { name: "Fried Chicken and Chips", priceSmall: "₦3,000", priceBig: "₦3,700" },
      { name: "Fried Beef and Chips", priceSmall: "₦2,700", priceBig: "₦3,200" },
      { name: "Chicken Pepper Soup", priceSmall: "₦2,500", priceBig: "₦3,000" },
    ],
extra: {
  title: "Extra",
  items: [
    { name: "Swallow", price: "₦400" },
    { name: "Beef/Kpomo", price: "₦700" },
    { name: "Chicken ", price: "₦1000" },
    { name: "Portion ", price: "₦800" },
  ],
},
drinks: {
  title: "Drinks",
  items: [
    { name: "Bottled Water", price: "₦300" },
    { name: "Soft Drink (Coke, Fanta, Sprite)", price: "₦500" },
    { name: "Chapman", price: "₦1,500" },
      ],
    },
  },
];

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
    }, 5000); // switches every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="menu" className="w-full bg-white py-20 sm:py-24 px-6 relative z-10 overflow-hidden">

      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Portrait image — mobile only */}
            <Image
              src={bgImages[activeSlide].portrait}
              alt="Menu background"
              fill
              className="object-cover block sm:hidden"
              priority={activeSlide === 0}
            />
            {/* Landscape image — tablet and up */}
           <Image
             src={bgImages[activeSlide].landscape}
             alt="Menu background"
             fill
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
             className="object-cover hidden sm:block"
             priority={activeSlide === 0}
           />
          </motion.div>
        </AnimatePresence>
        {/* Frosted glass layer over the images — blurred + semi-transparent white */}
        <div className="absolute inset-0 backdrop-blur-md bg-white/20"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center text-center">

          <motion.span
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="bg-brand-gold text-neutral-950 font-satoshi font-bold text-xs sm:text-sm uppercase tracking-[0.2em] py-2.5 px-6 rounded-full shadow-[0px_4px_10px_rgba(0,0,0,0.3)]"
          >
            Our Menu
          </motion.span>
        {/* Gold hairline signature */}
        <motion.div 
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="w-20 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent mt-6"
          style={{ boxShadow: '0 0 6px rgba(212,175,55,0.5)' }}
        />

          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-8 text-neutral-950 font-clash font-bold text-[28px] sm:text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight"
          >
            Everything on <br />
            the Jay&apos;s Kitchen menu.
          </motion.h2>

          <motion.p
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-6 font-satoshi text-neutral-100 text-sm sm:text-base max-w-xl"
          >
            A menu built for sharing. Choose freely, then Tap Order now to send your list on WhatsApp.
          </motion.p>
        </div>

        {/* Grid Section */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.15,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-none border-2 border-neutral-300 bg-neutral-950 p-6 sm:p-8 font-satoshi shadow-[0_8px_10px_rgba(0,0,0,0.5)]"
            >
              {/* Category Subheading */}
              <h3 className="text-brand-gold font-clash font-bold text-2xl sm:text-3xl mb-1 inline-block">
                {category.title}
              </h3>
              <div className="w-16 h-[3px] bg-brand-gold mb-6"></div>

              {/* Menu Items */}
              <div className="flex flex-col gap-5">
                {category.items.map((item, itemIndex) => (
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

{/* Extra section — only renders if this category has one */}
{category.extra && (
  <>
    <h4 className="text-brand-gold font-clash font-bold text-2xl sm:text-3xl mb-1 inline-block mt-8">
      {category.extra.title}
    </h4>
    <div className="w-16 h-[3px] bg-brand-gold mb-6"></div>
    <div className="flex flex-col gap-5">
      {category.extra.items.map((item, itemIndex) => (
        <div
          key={itemIndex}
          className="flex items-center justify-between gap-4 pb-5 border-b border-neutral-800 last:border-b-0 last:pb-0"
        >
          <span className="text-white text-sm sm:text-base font-medium leading-snug">
            {item.name}
          </span>
          <span className="flex items-center gap-1.5 text-brand-gold font-bold text-sm sm:text-base flex-shrink-0">
            <ContainerIcon />
            {item.price}
          </span>
        </div>
      ))}
    </div>
  </>
)}

{/* Drinks section — only renders if this category has one */}
{category.drinks && (
  <>
    <h4 className="text-brand-gold font-clash font-bold text-2xl sm:text-3xl mb-1 inline-block mt-8">
      {category.drinks.title}
    </h4>
    <div className="w-16 h-[3px] bg-brand-gold mb-6"></div>
    <div className="flex flex-col gap-5">
      {category.drinks.items.map((item, itemIndex) => (
        <div
          key={itemIndex}
          className="flex items-center justify-between gap-4 pb-5 border-b border-neutral-800 last:border-b-0 last:pb-0"
        >
          <span className="text-white text-sm sm:text-base font-medium leading-snug">
            {item.name}
          </span>
<span className="text-brand-gold font-bold text-sm sm:text-base flex-shrink-0">
  {item.price}
</span>
        </div>
      ))}
    </div>
  </>
)}
            </motion.div>
          ))}
        </div>

        {/* Order on WhatsApp Button */}
        <div className="flex justify-center mt-14 sm:mt-16">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-neutral-950 hover:bg-neutral-950 text-white font-satoshi font-bold text-sm sm:text-base px-8 py-4 rounded-none transition-transform duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
          >
            Order on WhatsApp
          </motion.button>
        </div>

      </div>
    </section>
  );
}