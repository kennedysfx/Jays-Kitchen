"use client";

import { memo } from "react";
import { motion } from "framer-motion";

const foodItems = [
  "JOLLOF",
  "FRIED RICE",
  "NOODLES",
  "ASUN",
  "PLANTAIN",
  "EGUSI",
  "PARTY TRAYS",
  "COMBOS",
];

function FoodTicker() {
  return (
    <section className="w-full bg-brand-gold border-y border-black/10 overflow-hidden py-3 sm:py-4 flex whitespace-nowrap relative z-20 shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
      <motion.div
        className="flex gap-6 sm:gap-10 items-center pl-6 sm:pl-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 100,
        }}
      >
        {[...foodItems, ...foodItems, ...foodItems, ...foodItems].map((item, index) => (
          <div key={index} className="flex items-center gap-6 sm:gap-10">
            <span className="text-black font-satoshi font-bold text-lg md:text-xl lg:text-2xl tracking-[0.15em] uppercase m-0">
              {item}
            </span>
            <span className="text-black/30 text-lg md:text-xl flex items-center justify-center m-0 -mt-1">
              •
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default memo(FoodTicker);