"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Minimalist to-go container icon (replaces PlateIcon)
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
    {/* Lid */}
    <rect x="3" y="6" width="18" height="3" rx="1" />
    {/* Lid tab */}
    <path d="M10 6V4.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V6" />
    {/* Container body */}
    <path d="M4.5 9.5L5.5 19a2 2 0 0 0 2 1.8h9a2 2 0 0 0 2-1.8l1-9.5" />
  </svg>
);

const favouriteItems = [
  { 
    id: 1, 
    image: "/favourite/fav-1.webp", 
    alt: "Favourite Dish 1",
    name: "White Rice & Peppered Chicken Stew",
    description: "White rice served with a rich, spicy peppered chicken stew.",
    priceSmall: "₦3,500",
    priceBig: "₦4,000",
    hoverAction: "hover:-translate-y-3" 
  }, 
  { 
    id: 2, 
    image: "/favourite/fav-2.webp", 
    alt: "Favourite Dish 2",
    name: "White Rice & Chicken Sauce",
    description: "Soft white rice paired with a tasty, lightly spiced chicken sauce that hits different.",
    priceSmall: "₦2,700",
    priceBig: "₦3,200",
    hoverAction: "hover:translate-y-3"  
  },  
  { 
    id: 3, 
    image: "/favourite/fav-3.webp", 
    alt: "Favourite Dish 3",
    name: "Edikaikong Soup & Swallow",
    description: "Loaded vegetable soup packed with assorted meat and fish, served hot with your choice of swallow.",
    priceSmall: "₦2,800",
    priceBig: "₦3,500",
    hoverAction: "hover:-translate-y-3" 
  }, 
  { 
    id: 4, 
    image: "/favourite/fav-4.webp", 
    alt: "Favourite Dish 4",
    name: "Party Jollof Rice & peppered Chicken",
    description: "Party jollof done right, paired with well-peppered, smoky chicken.",
    priceSmall: "₦3,500",
    priceBig: "₦4,000",
    hoverAction: "hover:translate-y-3"  
  },  
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// New: extracted card component so each card can hold its own hover-delay state
function FavouriteCard({ item, index }: { item: typeof favouriteItems[number]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    // Wait 300ms before returning to the resting position
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // translate-y-3 in Tailwind = 12px
  const liftAmount = item.hoverAction.includes("-translate-y-3") ? -12 : 12;

  return (
    <motion.div 
      key={item.id} 
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { 
            duration: 0.6, 
            ease: "easeOut",
            delay: index * 0.15
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 
        BORDER ADJUSTMENTS:
        Modify 'border', 'border-neutral-100', or 'rounded-[2rem]' here.
        Remove 'border border-neutral-100' entirely if you want zero borders. 
      */}
      <motion.div
        animate={{ y: isHovered ? liftAmount : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full h-full flex flex-col rounded-[0rem] border border-neutral-100 bg-white shadow-[0_8px_10px_rgb(0,0,0,0.05)] overflow-hidden group"
      >
        
        {/* 
          HEIGHT ADJUSTMENTS:
          Changed from aspect-[4/3] to aspect-[3/2] to make the image (and div) shorter.
          You can also use fixed heights like 'h-48' or 'h-40' instead of 'aspect-[3/2]' if you prefer rigid sizes.
        */}
        <div className="relative w-full aspect-5/4 overflow-hidden cursor-pointer">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        </div>

        {/* Content Area - font-satoshi applied here to cascade to all texts */}
        <div className="flex flex-col flex-grow px-4 pb-4 pt-1 sm:px-5 sm:pb-5 sm:pt-2 bg-white z-10 font-satoshi">
          <div className="mb-4">
            <h3 className="text-neutral-950 font-clash font-bold text-xl sm:text-2xl mb-1.5 line-clamp-1">
              {item.name}
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2">
              {item.description}
            </p>
          </div>
          
          <div className="mt-auto">
            {/* Price Split Tag */}
            <div className="flex items-center justify-between mb-2 bg-neutral-50 rounded-2xl p-3 border border-neutral-100">
              
              {/* Small Price */}
              <div className="flex flex-col">
              <span className="flex items-center gap-1.5 text-[10px] sm:text-xs text-neutral-400 font-bold uppercase tracking-widest mb-0.5">
                <ContainerIcon /> Small
              </span>
                <span className="text-neutral-900 font-black text-sm sm:text-base">{item.priceSmall}</span>
              </div>
              
              <div className="w-[1px] h-8 bg-neutral-200"></div>
              
              {/* Big Price */}
              <div className="flex flex-col items-end">
              <span className="flex items-center gap-1.5 text-[10px] sm:text-xs text-neutral-400 font-bold uppercase tracking-widest mb-0.5">
                <ContainerIcon /> Big
              </span>
                <span className="text-brand-gold font-black text-sm sm:text-base">{item.priceBig}</span>
              </div>

            </div>

            {/* Order Button */}
           <button className="w-full bg-brand-gold text-neutral-950 hover:bg-neutral-950 hover:text-white py-3  text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm">
              Order Now
              <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}

export default function Favourites() {
  return (
    <section id="favourite" className="w-full bg-white py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center text-center">
          
          <motion.span 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="bg-brand-gold text-neutral-950 font-satoshi font-bold text-xs sm:text-sm uppercase tracking-[0.2em] py-2.5 px-6 rounded-full transform shadow-[0px_4px_10px_rgba(0,0,0,0.3)]"
          >
            Customers Favourites
          </motion.span>
          {/* Gold hairline signature */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 0.5, ease: "easeOut" }}
           className="w-32 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent mt-6"
           style={{ boxShadow: '0 0 6px rgba(212,175,55,0.5)' }}
         />
          
         <motion.h2 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-8 text-neutral-950 font-clash font-bold text-[28px] sm:text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight"
          >
            The meals our customers <br />
            order again and again.
          </motion.h2>
        </div>

        {/* Grid Section */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {favouriteItems.map((item, index) => (
            <FavouriteCard key={item.id} item={item} index={index} />
          ))}
        </div>


{/* Bottom CTA */}
<motion.div
  variants={itemVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  className="flex flex-col items-center justify-center text-center mt-16 sm:mt-20"
>
  <p className="font-satoshi text-neutral-950 font-bold text-lg sm:text-xl mb-6">
    There&apos;s a whole lot more where that came from.
  </p>
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="bg-neutral-950 text-white font-satoshi font-bold text-sm sm:text-base px-8 py-4 rounded-full hover:bg-neutral-800 transition-colors duration-300 shadow-[0px_4px_10px_rgba(0,0,0,0.3)] "
  >
    See the Full Menu
  </motion.button>
</motion.div>

      </div>
    </section>
  );
}