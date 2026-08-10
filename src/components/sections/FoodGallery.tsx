"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const galleryImages = [
  { id: 1, src: "/favourite/fav-1.jpg", alt: "Freshly packed meal 1" },
  { id: 2, src: "/favourite/fav-2.jpg", alt: "Freshly packed meal 2" },
  { id: 3, src: "/favourite/fav-3.jpg", alt: "Freshly packed meal 3" },
  { id: 4, src: "/favourite/fav-4.jpg", alt: "Freshly packed meal 4" },
];

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function KitchenGallery() {
  // Duplicate the list so the marquee can loop seamlessly
  const marqueeImages = [...galleryImages, ...galleryImages, ...galleryImages];

  return (
    <section className="w-full bg-neutral-950 py-20 sm:py-24 overflow-hidden relative z-10">
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center text-center">
          
          <motion.span
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="bg-white text-neutral-950 font-satoshi font-bold text-xs sm:text-sm uppercase tracking-[0.2em] py-2.5 px-6 rounded-full shadow-[0px_4px_10px_rgba(0,0,0,0.3)]"
          >
            Straight From The Kitchen
          </motion.span>

          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-8 text-[#FAFAFA] font-clash font-bold text-[2.1rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight"
          >
            Made fresh. Packed hot.
          </motion.h2>
        </div>

      </div>

      {/* Marquee Gallery Row — full-bleed, outside the max-w container */}
      {/* Switched from Framer Motion JS animation to pure CSS keyframes 
          (see globals.css) — CSS transforms run on the compositor thread, 
          which fixes the shakiness/stutter seen on mobile devices. */}
      <div className="mt-14 sm:mt-16 w-full overflow-hidden">
        <div className="flex gap-4 sm:gap-6 w-max kitchen-marquee">
          {marqueeImages.map((img, index) => (
            <div
              key={`${img.id}-${index}`}
              className="relative w-[200px] h-[230px] sm:w-[250px] sm:h-[280px] md:w-[280px] md:h-[290px] flex-shrink-0 rounded-none border-2 border-brand-gold overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, 320px"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}