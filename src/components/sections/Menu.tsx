"use client";

import { motion, Variants } from "framer-motion";

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

const menuCategories = [
  {
    id: 1,
    title: "Meals",
    items: [
      { name: "Party Jollof Rice", priceSmall: "₦3,500", priceBig: "₦4,000" },
      { name: "White Rice & Stew", priceSmall: "₦3,000", priceBig: "₦3,500" },
      { name: "Egusi & Swallow", priceSmall: "₦2,800", priceBig: "₦3,500" },
      { name: "Special Fried Rice", priceSmall: "₦3,200", priceBig: "₦4,000" },
    ],
  },
  {
    id: 2,
    title: "Combos",
    items: [
      { name: "Jollof + Chicken", priceSmall: "₦4,500", priceBig: "₦5,500" },
      { name: "Fried Rice + Fish", priceSmall: "₦4,200", priceBig: "₦5,200" },
      { name: "Egusi + Peppered Beef", priceSmall: "₦4,800", priceBig: "₦6,000" },
      { name: "Party Pack Combo", priceSmall: "₦5,000", priceBig: "₦6,500" },
    ],
  },
  {
    id: 3,
    title: "Sides",
    items: [
      { name: "Fried Plantain", priceSmall: "₦800", priceBig: "₦1,200" },
      { name: "Peppered Chicken", priceSmall: "₦1,800", priceBig: "₦2,500" },
      { name: "Asun (Spicy Goat Meat)", priceSmall: "₦2,000", priceBig: "₦3,000" },
      { name: "Moi Moi", priceSmall: "₦800", priceBig: "₦1,200" },
    ],
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
  return (
    <section id="menu" className="w-full bg-white py-20 sm:py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">

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
            className="mt-6 font-satoshi text-neutral-500 text-sm sm:text-base max-w-xl"
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
              className="rounded-3xl border-2 border-neutral-300 bg-neutral-950 p-6 sm:p-8 font-satoshi shadow-[0_8px_10px_rgba(0,0,0,0.5)]"
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
            </motion.div>
          ))}
        </div>

        {/* Order on WhatsApp Button */}
        <div className="flex justify-center mt-14 sm:mt-16">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-neutral-950 hover:bg-neutral-950 text-white font-satoshi font-bold text-sm sm:text-base px-8 py-4 rounded-full transition-transform duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
          >
            Order on WhatsApp
          </motion.button>
        </div>

      </div>
    </section>
  );
}