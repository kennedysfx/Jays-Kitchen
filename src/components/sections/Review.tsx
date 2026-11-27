"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#25D366">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 004.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.05c-.24.68-1.4 1.32-1.93 1.36-.5.05-1.03.24-3.45-.72-2.92-1.16-4.8-4.06-4.95-4.25-.14-.19-1.18-1.57-1.18-3 0-1.43.75-2.13 1.02-2.42.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.14-.3.3-.13.58.17.29.75 1.24 1.62 2 1.11.99 2.05 1.3 2.33 1.44.29.14.46.12.63-.07.17-.19.72-.84.92-1.13.19-.29.39-.24.65-.14.27.1 1.69.8 1.98.94.29.14.48.22.55.34.07.14.07.77-.17 1.45z" />
  </svg>
);

const StarIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#F59E0B"
    className="shrink-0"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const PillStarIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="shrink-0"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

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

const VerifiedCheckIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="#25D366"
    className="shrink-0"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

interface ReviewItem {
  id: number;
  name: string;
  order: string;
  quote: string;
  avatar: string; // Drop reviewer images into /public/reviews/
}

const reviews: ReviewItem[] = [
  {
    id: 1,
    name: "Jennifer",
    order: "White Rice & Chicken Sauce",
    quote:
      "Thanks love. I really enjoyed the food, please when next you make the sauce let me know, I want to get again. Everything arrived hot and neatly packed.",
    avatar: "/reviews/jennifer.webp",
  },
  {
    id: 2,
    name: "Oma",
    order: "White Rice & Chicken Sauce",
    quote:
      "Absolutely, the food is scrumptious. I've never had chicken sauce that tastes so good like yours for a very long time. The chicken is well marinated and the sauce has a balanced taste.",
    avatar: "/reviews/oma.webp",
  },
  {
    id: 3,
    name: "Derah",
    order: "Party Jollof Rice & Peppered Chicken",
    quote:
      "It was really nice, liked the proteins in it, thank you very much. The smoky party jollof flavour came through properly and the portion was very generous.",
    avatar: "/reviews/derah.webp",
  },
  {
    id: 4,
    name: "Amaka",
    order: "Edikaikong Soup & Swallow",
    quote:
      "John Johnn, you dey cookkkkk, what's the secret? Thanks for the fufu. The soup was loaded with assorted meat and fresh vegetables—felt just like homemade Sunday cooking.",
    avatar: "/reviews/amaka.webp",
  },
];

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "tween", duration: 0.9, ease: [0.25, 1, 0.5, 1] },
      opacity: { duration: 0.5 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: {
      x: { type: "tween", duration: 0.9, ease: [0.25, 1, 0.5, 1] },
      opacity: { duration: 0.4 },
    },
  }),
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function ReviewerAvatar({ name, src }: { name: string; src: string }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-11 h-11 rounded-full overflow-hidden border border-black bg-neutral-200 flex items-center justify-center shrink-0">
      {!imgError ? (
        <Image
          src={src}
          alt={name}
          fill
          sizes="44px"
          className="object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="font-clash font-bold text-sm uppercase text-neutral-700">
          {name.charAt(0)}
        </span>
      )}
    </div>
  );
}

function ReviewCard({
  review,
  isExpanded,
  onToggleExpand,
}: {
  review: ReviewItem;
  isExpanded: boolean;
  onToggleExpand: () => void;
}) {
  const isLongText = review.quote.length > 95;

  return (
    <div className="w-full flex flex-col justify-between bg-[#F4F6F8] rounded-none p-5 sm:p-6 font-satoshi">
      <div>
        {/* Card Top Row: Reviewer Image Placeholder, Name, Order & WhatsApp Badge */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <ReviewerAvatar name={review.name} src={review.avatar} />
            <div>
              <h3 className="text-neutral-950 font-clash font-bold text-base capitalize leading-tight">
                {review.name}
              </h3>
              <p className="text-neutral-500 text-xs mt-0.5 line-clamp-1">
                {review.order}
              </p>
            </div>
          </div>

          <div
            title="Verified WhatsApp Review"
            className="w-7 h-7 rounded-full bg-[#25D366]/15 flex items-center justify-center shrink-0"
          >
            <WhatsAppIcon size={15} />
          </div>
        </div>

        {/* 5-Star Row + Verified Tick */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, idx) => (
            <StarIcon key={idx} size={15} />
          ))}
          <span className="ml-1">
            <VerifiedCheckIcon />
          </span>
        </div>

        {/* Quote Body — Only this card drops down when expanded */}
        <p
          className={`text-neutral-800 text-sm sm:text-[15px] leading-relaxed ${
            isExpanded ? "" : "line-clamp-3"
          }`}
        >
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>

      {/* Read More / Hide Toggle */}
      {isLongText && (
        <div className="mt-3 pt-1">
          <button
            type="button"
            onClick={onToggleExpand}
            className="text-xs sm:text-sm font-bold text-neutral-500 hover:text-neutral-950 underline underline-offset-4 transition-colors cursor-pointer"
          >
            {isExpanded ? "Hide" : "Read more"}
          </button>
        </div>
      )}
    </div>
  );
}

export default function ReviewsA() {
  // [currentIndex, direction] so AnimatePresence knows whether to slide left or right
  const [[currentIndex, direction], setSlide] = useState<[number, number]>([
    0, 1,
  ]);
  const [expandedIds, setExpandedIds] = useState<Record<number, boolean>>({});
  const [isPaused, setIsPaused] = useState(false);

  const anyExpanded = Object.values(expandedIds).some(Boolean);

  const handleNext = () => {
    setExpandedIds({});
    setSlide(([prev]) => [(prev + 1) % reviews.length, 1]);
  };

  const handlePrev = () => {
    setExpandedIds({});
    setSlide(([prev]) => [(prev - 1 + reviews.length) % reviews.length, -1]);
  };

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Auto-slide every 5 seconds unless hovered or a card is expanded
  useEffect(() => {
    if (isPaused || anyExpanded) return;

    const timer = setInterval(() => {
      setSlide(([prev]) => [(prev + 1) % reviews.length, 1]);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, anyExpanded]);

  // 3 visible cards on Desktop alongside the Rating Summary Box (4 boxes total)
  const visibleDesktopReviews = [0, 1, 2].map(
    (offset) => reviews[(currentIndex + offset) % reviews.length]
  );

  // 1 active card on Mobile
  const activeMobileReview = reviews[currentIndex];

  return (
    <section
      id="reviews"
      className="relative w-full bg-[#FFFFFF] text-neutral-950 py-20 sm:py-24 px-6 sm:px-10 lg:px-16 -mt-px overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading Block */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <motion.span
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="inline-flex items-center gap-2 bg-brand-#FFFFFF text-neutral-950 font-satoshi font-bold text-xs sm:text-sm uppercase tracking-[0.2em] py-2 px-6 rounded-full border-1 border-black shadow-[0_4px_0_0_#000000] mb-6"
          >
            <PillStarIcon />
            <span>What People Say</span>
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
            className="absolute right-6 sm:right-25 md:right-90 top-11 sm:top-30 pointer-events-none select-none"
          >
            <SparkleStarIcon />
          </motion.div>
          

          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="text-neutral-950 font-clash font-bold text-3xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight"
          >
            What Our Customers Are Saying.
          </motion.h2>
        </div>

        {/* DESKTOP LAYOUT: 4 Horizontal Boxes (1 Fixed Rating Box + 3 Sliding White Review Cards) */}
        <div
          className="hidden lg:grid lg:grid-cols-4 gap-5 items-start relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Box 1: Rating Summary Box (Independent height via items-start) */}
          <div className="flex flex-col items-center justify-center text-center bg-white rounded-none p-6 min-h-[235px]">
            <p className="font-clash font-bold text-2xl tracking-wide text-neutral-950 uppercase mb-2">
              EXCELLENT
            </p>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} size={22} />
              ))}
            </div>
            <p className="font-satoshi text-xs sm:text-sm text-neutral-700 mb-3">
              Based on <span className="font-bold text-neutral-950">verified</span>{" "}
              orders
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#25D366]/15 border border-black/20 rounded-full">
              <WhatsAppIcon size={16} />
              <span className="font-satoshi font-bold text-xs text-neutral-950">
                WhatsApp Reviews
              </span>
            </div>
          </div>

          {/* Boxes 2, 3, 4: Sliding Track + Left/Right Controls */}
          <div className="lg:col-span-3 relative">
            {/* Left Arrow */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous review"
              className="absolute -left-4 top-28 z-20 w-9 h-9 rounded-full bg-white border-2 border-black shadow-[0_3px_0_0_#000000] flex items-center justify-center text-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors cursor-pointer"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Sliding Viewport */}
            <div className="overflow-x-clip pb-2">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="grid grid-cols-3 gap-5 items-start"
                >
                  {visibleDesktopReviews.map((review) => (
                    <ReviewCard
                      key={review.id}
                      review={review}
                      isExpanded={!!expandedIds[review.id]}
                      onToggleExpand={() => toggleExpand(review.id)}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Arrow */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next review"
              className="absolute -right-4 top-28 z-20 w-9 h-9 rounded-full bg-white border-2 border-black shadow-[0_3px_0_0_#000000] flex items-center justify-center text-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors cursor-pointer"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE LAYOUT: Stacked EXCELLENT Rating Header + Single Sliding Card */}
        <div
          className="flex flex-col items-center lg:hidden"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Rating Header */}
          <div className="flex flex-col items-center text-center mb-7">
            <p className="font-clash font-bold text-2xl tracking-wide text-neutral-950 uppercase mb-1.5">
              EXCELLENT
            </p>
            <div className="flex items-center gap-1 mb-1.5">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} size={22} />
              ))}
            </div>
            <p className="font-satoshi text-xs text-neutral-800 mb-2">
              Based on <span className="font-bold">verified</span> customer orders
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-black rounded-full">
              <WhatsAppIcon size={15} />
              <span className="font-satoshi font-bold text-xs text-neutral-950">
                WhatsApp Reviews
              </span>
            </div>
          </div>

          {/* Single Sliding Card + Left/Right Arrows */}
          <div className="relative w-full max-w-md px-3">
            {/* Left Arrow */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous review"
              className="absolute left-0 top-24 z-20 w-9 h-9 rounded-full bg-white border-2 border-black shadow-[0_3px_0_0_#000000] flex items-center justify-center text-neutral-950 active:scale-95"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="overflow-x-clip pb-2">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={activeMobileReview.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full"
                >
                  <ReviewCard
                    review={activeMobileReview}
                    isExpanded={!!expandedIds[activeMobileReview.id]}
                    onToggleExpand={() => toggleExpand(activeMobileReview.id)}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Arrow */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next review"
              className="absolute right-0 top-24 z-20 w-9 h-9 rounded-full bg-white border-2 border-black shadow-[0_3px_0_0_#000000] flex items-center justify-center text-neutral-950 active:scale-95"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Mobile Progress Indicator Bar */}
          <div className="flex items-center gap-1.5 mt-6">
            {reviews.map((r, idx) => (
              <button
                key={r.id}
                type="button"
                aria-label={`Go to review ${idx + 1}`}
                onClick={() => {
                  setExpandedIds({});
                  setSlide([idx, idx > currentIndex ? 1 : -1]);
                }}
                className={`h-1.5 transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 bg-neutral-950"
                    : "w-4 bg-neutral-950/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}