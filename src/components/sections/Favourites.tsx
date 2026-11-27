"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

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
    {/* Lid */}
    <rect x="3" y="6" width="18" height="3" rx="1" />
    {/* Lid tab */}
    <path d="M10 6V4.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V6" />
    {/* Container body */}
    <path d="M4.5 9.5L5.5 19a2 2 0 0 0 2 1.8h9a2 2 0 0 0 2-1.8l1-9.5" />
  </svg>
);

// 5-point star inside the Customers Favourites pill
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

// 4-point sparkle star floating beside the heading
const SparkleStarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-brand-gold"
  >
    <path d="M12 1L14.6 9.4L23 12L14.6 14.6L12 23L9.4 14.6L1 12L9.4 9.4L12 1Z" />
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
  },
  {
    id: 2,
    image: "/favourite/fav-2.webp",
    alt: "Favourite Dish 2",
    name: "White Rice & Chicken Sauce",
    description:
      "Soft white rice paired with a tasty, lightly spiced chicken sauce that hits different.",
    priceSmall: "₦2,700",
    priceBig: "₦3,200",
  },
  {
    id: 3,
    image: "/favourite/fav-3.webp",
    alt: "Favourite Dish 3",
    name: "Edikaikong Soup & Swallow",
    description:
      "Loaded vegetable soup packed with assorted meat and fish, served hot with your choice of swallow.",
    priceSmall: "₦2,800",
    priceBig: "₦3,500",
  },
  {
    id: 4,
    image: "/favourite/fav-4.webp",
    alt: "Favourite Dish 4",
    name: "Party Jollof Rice & peppered Chicken",
    description:
      "Party jollof done right, paired with well-peppered, smoky chicken.",
    priceSmall: "₦3,500",
    priceBig: "₦4,000",
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

function FavouriteCard({
  item,
  index,
}: {
  item: (typeof favouriteItems)[number];
  index: number;
}) {
  return (
    <motion.div
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
      className="h-full"
    >
      {/* Stationary card with sharp black border; image inside rises/zooms on hover */}
      <div className="relative w-full h-full flex flex-col rounded-none  bg-white shadow-[0_8px_10px_rgb(0,0,0,0.05)] overflow-hidden group">
        {/* Dish Image with Hover Rise/Zoom */}
        <div className="relative w-full aspect-5/4 overflow-hidden cursor-pointer">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        </div>

        {/* Content Area */}
        <div className="flex flex-col flex-grow px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4 bg-white z-10 font-satoshi">
          <div className="mb-4">
            <h3 className="text-neutral-950 font-clash font-bold text-xl sm:text-2xl mb-1.5 leading-tight">
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
                <span className="text-neutral-900 font-black text-sm sm:text-base">
                  {item.priceSmall}
                </span>
              </div>

              <div className="w-[1px] h-8 bg-neutral-200"></div>

              {/* Big Price */}
              <div className="flex flex-col items-end">
                <span className="flex items-center gap-1.5 text-[10px] sm:text-xs text-neutral-400 font-bold uppercase tracking-widest mb-0.5">
                  <ContainerIcon /> Big
                </span>
                <span className="text-brand-gold font-black text-sm sm:text-base">
                  {item.priceBig}
                </span>
              </div>
            </div>

            {/* Order Button */}
            <button className="w-full bg-brand-gold text-neutral-950 hover:bg-neutral-950 hover:text-white py-3 text-sm font-bold uppercase tracking-[0.15em] transition-colors duration-300 flex items-center justify-center gap-2 group/btn shadow-sm">
              Order Now
              <svg
                className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Favourites() {
  return (
    <section
      id="favourite"
      className="w-full bg-[#FFF9ED] py-24 px-6 relative z-10 -mt-px"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Heading Section */}
        <div className="relative flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Pill Badge with Star & Solid Bottom Black Shadow */}
          <motion.span
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="inline-flex items-center gap-2 bg-brand-gold text-neutral-950 font-satoshi font-bold text-xs sm:text-sm uppercase tracking-[0.2em] py-2.5 px-6 rounded-full border border-black shadow-[0_4px_0_0_#000000]"
          >
            <PillStarIcon />
            <span>Customers Favourites</span>
          </motion.span>

          {/* Animated Rocking 4-Point Star positioned above right of the heading */}
          <motion.div
            aria-hidden="true"
            animate={{ rotate: [-14, 14, -14] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-2 sm:right-10 md:right-16 top-7 sm:top-6 pointer-events-none select-none"
          >
            <SparkleStarIcon />
          </motion.div>

          {/* Main Heading */}
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
            Good food speaks for itself, just ask the people who order from us every week.
          </p>

        </motion.div>
      </div>
    </section>
  );
}