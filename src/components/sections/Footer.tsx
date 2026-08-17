"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 004.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.05c-.24.68-1.4 1.32-1.93 1.36-.5.05-1.03.24-3.45-.72-2.92-1.16-4.8-4.06-4.95-4.25-.14-.19-1.18-1.57-1.18-3 0-1.43.75-2.13 1.02-2.42.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.14-.3.3-.13.58.17.29.75 1.24 1.62 2 1.11.99 2.05 1.3 2.33 1.44.29.14.46.12.63-.07.17-.19.72-.84.92-1.13.19-.29.39-.24.65-.14.27.1 1.69.8 1.98.94.29.14.48.22.55.34.07.14.07.77-.17 1.45z" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950 text-white pt-16 sm:pt-20 pb-8 px-6 font-satoshi relative z-10">
      <div className="container mx-auto max-w-7xl">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10 pb-12 sm:pb-16 border-b border-neutral-800">

          {/* Brand Column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col sm:col-span-2 lg:col-span-1"
          >
<div className="flex items-center gap-3 mb-5">
  <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden flex-shrink-0">
    <Image 
      src="/logo-white.png" 
      alt="Jay's Kitchen Logo" 
      fill 
      sizes="50px"
      className="object-contain" 
    />
  </div>
  <span className="font-satoshi font-bold text-lg text-white">
    Jay<span className="text-brand-gold">&apos;</span>s Kitchen
  </span>
</div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Authentic Nigerian comfort food, cooked fresh and delivered hot across Nsukka. No stress, no wahala, just real food, whenever the craving hits.
            </p>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-clash font-bold text-brand-gold text-lg mb-5">Get In Touch</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-neutral-400 text-sm">
                <span className="text-brand-gold mt-0.5 flex-shrink-0"><LocationIcon /></span>
                Nsukka, Enugu State, Nigeria
              </li>
              <li className="flex items-start gap-3 text-neutral-400 text-sm">
                <span className="text-brand-gold mt-0.5 flex-shrink-0"><PhoneIcon /></span>
                +234 800 000 0000
              </li>
              <li className="flex items-start gap-3 text-neutral-400 text-sm">
                <span className="text-brand-gold mt-0.5 flex-shrink-0"><ClockIcon /></span>
                Open Daily · 9AM – 8PM
              </li>
            </ul>
          </motion.div>

          {/* CTA Column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-clash font-bold text-brand-gold text-lg mb-5">Ready To Order?</h4>
            <p className="text-neutral-400 text-sm leading-relaxed mb-5">
              Send us your list on WhatsApp and we&apos;ll have it cooked, packed, and on the way.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#whatsapp"
                className="inline-flex items-center gap-2 bg-brand-gold text-neutral-950 font-satoshi font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:bg-brand-gold/90 transition-colors duration-300"
              >
                <WhatsAppIcon />
                Order Now
              </Link>
            </motion.div>
          </motion.div>

        </div>

                   {/* Bottom Bar */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-neutral-500">
                          <p>&copy; {new Date().getFullYear()} Jay&apos;s Kitchen. All rights reserved.</p>
                          <div className="flex items-center gap-6">
                            <Link href="/terms" className="hover:text-neutral-300 transition-colors duration-300">
                              Terms of Service
                            </Link>
                           <p>Made fresh in Nsukka.</p>
                          </div>
                        </div>

                     </div>
                   </footer>
                 );
               }