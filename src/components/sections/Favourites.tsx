"use client";

import Image from "next/image";
// 1. Imported 'Variants' from framer-motion to fix the TypeScript error
import { motion, Variants } from "framer-motion";

const favouriteItems = [
  { 
    id: 1, 
    image: "/favourite/fav-1.jpg", 
    alt: "Favourite Dish 1", 
    hoverAction: "hover:-translate-y-3" 
  }, 
  { 
    id: 2, 
    image: "/favourite/fav-2.jpg", 
    alt: "Favourite Dish 2", 
    hoverAction: "hover:translate-y-3"  
  },  
  { 
    id: 3, 
    image: "/favourite/fav-3.jpg", 
    alt: "Favourite Dish 3", 
    hoverAction: "hover:-translate-y-3" 
  }, 
  { 
    id: 4, 
    image: "/favourite/fav-4.jpg", 
    alt: "Favourite Dish 4", 
    hoverAction: "hover:translate-y-3"  
  },  
];

// 2. Explicitly added the ': Variants' type to clear the squiggly lines
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Favourites() {
  return (
    <section id="favourite" className="w-full bg-white py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center text-center">
          
          <motion.span 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible" // Triggers when this specific span scrolls into view
            viewport={{ once: true, amount: 0.5 }}
            className="bg-brand-gold text-neutral-950 font-satoshi font-bold text-xs sm:text-sm uppercase tracking-[0.2em] py-2.5 px-6 rounded-full transform shadow-[0px_4px_10px_rgba(0,0,0,0.3)]"
          >
            Customers Favourites
          </motion.span>
          
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
            <motion.div 
              key={item.id} 
              // Custom variant for each item so we can add a slight stagger delay for desktop, 
              // while still waiting for scroll on mobile.
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: index * 0.15 // 0s, 0.15s, 0.3s, 0.45s delay 
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Triggers ONLY when 20% of THIS image is visible
            >
              <div
                className={`relative w-full aspect-square sm:aspect-[4/5] rounded-3xl overflow-hidden border-2 border-neutral-950/5 shadow-lg transition-all duration-500 ease-out cursor-pointer ${item.hoverAction}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}