"use client";

import { motion } from "framer-motion";

const WhatsAppIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 004.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.05c-.24.68-1.4 1.32-1.93 1.36-.5.05-1.03.24-3.45-.72-2.92-1.16-4.8-4.06-4.95-4.25-.14-.19-1.18-1.57-1.18-3 0-1.43.75-2.13 1.02-2.42.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.14-.3.3-.13.58.17.29.75 1.24 1.62 2 1.11.99 2.05 1.3 2.33 1.44.29.14.46.12.63-.07.17-.19.72-.84.92-1.13.19-.29.39-.24.65-.14.27.1 1.69.8 1.98.94.29.14.48.22.55.34.07.14.07.77-.17 1.45z"/>
  </svg>
);

const reviews = [
  { name: "jennifer", order: "White Rice and Chicken Sauce", quote: "Thanks love. I really enjoyed the food, please when next you make the sauce let me know, I want to get again." },
  { name: "Oma", order: "White Rice and Chicken Sauce", quote: "Absolutely, the food is scrumptious. I've never had chicken sauce that taste so good like yours for a very long time. The chicken is well marinated and the sauce has a balanced taste." },
  { name: "Derah", order: "Party Jollof Rice & peppered Chicken", quote: "It was really nice, liked the proteins in it, thank you very much." },
  { name: "Amaka", order: "Edikaikong Soup", quote: "John Johnn, you dey cookkkkk, whats the secret? Thanks for the fufu." },
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="flex-shrink-0 w-[280px] sm:w-[340px] rounded-2xl sm:rounded-3xl border border-brand-gold/30 bg-white p-6 sm:p-8 mx-2 sm:mx-3">
    <p className="text-neutral-900 font-satoshi text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
      &ldquo;{review.quote}&rdquo;
    </p>
    <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
      <div>
        <p className="text-brand-gold font-clash font-bold text-xs sm:text-sm">{review.name}</p>
        <p className="text-neutral-500 text-[10px] sm:text-xs mt-0.5">{review.order}</p>
      </div>
      <div className="flex items-center gap-1 sm:gap-1.5 text-neutral-400 text-[9px] sm:text-[10px] uppercase tracking-wider font-bold">
        <WhatsAppIcon />
        Verified
      </div>
    </div>
  </div>
);

export default function ReviewsA() {
  const loopedReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="relative w-full bg-black py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-brand-gold text-neutral-950 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-6 shadow-sm"
        >
          Customer Reviews
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-32 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent mb-10"
          style={{ boxShadow: '0 0 6px rgba(212,175,55,0.5)' }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="text-white font-clash font-bold text-4xl sm:text-5xl md:text-6xl text-center leading-[1.1]"
        >
          What our customers<br className="hidden sm:block" /> are saying.
        </motion.h2>
      </div>

      {/* Marquee — two rows, opposite directions, pause on hover */}
      <div className="flex flex-col gap-6">
        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
          {loopedReviews.map((r, i) => <ReviewCard key={`row1-${i}`} review={r} />)}
        </div>
        <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
          {loopedReviews.slice().reverse().map((r, i) => <ReviewCard key={`row2-${i}`} review={r} />)}
        </div>
      </div>
    </section>
  );
}