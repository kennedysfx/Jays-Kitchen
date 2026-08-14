"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-[#F7F3EB] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 font-satoshi relative overflow-hidden"
    >
     <div className="max-w-7xl mx-auto flex flex-col items-center relative">

        {/* Top Info Grid (Location & Hours Banner) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center w-full mb-16 sm:mb-20 pb-12 sm:pb-16 border-b border-neutral-100"
        >
          <div className="space-y-1">
            <h3 className="text-3xl sm:text-4xl font-clash font-bold text-neutral-900">
              100%
            </h3>
            <p className="text-neutral-500 text-sm font-satoshi">
              Freshly Prepared
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="text-3xl sm:text-4xl font-clash font-bold text-neutral-900">
              Nsukka
            </h3>
            <p className="text-neutral-500 text-sm font-satoshi">
              Enugu 
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="text-3xl sm:text-4xl font-clash font-bold text-neutral-900">
              9am to 8pm
            </h3>
            <p className="text-neutral-500 text-sm font-satoshi">
              every day
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="text-3xl sm:text-4xl font-clash font-bold text-neutral-900">
              Pickup &amp; Delivery
            </h3>
            <p className="text-neutral-500 text-sm font-satoshi">
              across Nsukka
            </p>
          </div>
        </motion.div>

        {/* 2-Column Desktop Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full items-start">

          {/* LEFT COLUMN: Section Header & Social Options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >

          {/* Section Pill */}
          <div className="bg-brand-gold text-neutral-950 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-6 shadow-sm mx-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            Get In Touch
          </div>

            {/* Section Title */}
            <h2 className="text-neutral-950 font-clash font-bold text-4xl sm:text-5xl text-left leading-[1.1] mb-4 uppercase tracking-wider">
              Contact Us
            </h2>

            {/* Subtitle */}
            <p className="text-neutral-500 text-sm sm:text-base text-left max-w-xl mb-8">
              Have a question? contact us below. Follow our socials and stay up to date with our latest menu highlights, behind the scenes kitchen prep, and more.
            </p>

            {/* Social Cards */}
            <div className="w-full flex flex-col gap-4">

              {/* EMAIL OPTION */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                href="mailto:kennedyeducates@gmail.com"
                className="flex items-center p-5 sm:p-6 bg-white border border-neutral-200 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-neutral-400 hover:shadow-[0_8px_30px_rgba(107,114,128,0.15)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-brand-gold flex items-center justify-center mr-5 flex-shrink-0 border border-amber-100">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-7 h-7"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                </div>

                <div className="flex-1 text-left">
                  <span className="block font-clash font-bold text-lg sm:text-xl text-neutral-900 mb-0.5">
                    Email
                  </span>

                  <span className="block text-xs sm:text-sm text-neutral-500 font-satoshi">
                    Send us an email &amp; we'll get back to you
                  </span>
                </div>

                <div className="ml-4 text-neutral-300 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </motion.a>

              {/* Instagram Option */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-5 sm:p-6 bg-white border border-neutral-200 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-neutral-400 hover:shadow-[0_8px_30px_rgba(107,114,128,0.15)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center mr-5 flex-shrink-0 border border-rose-100">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-7 h-7"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>

                <div className="flex-1 text-left">
                  <span className="block font-clash font-bold text-lg sm:text-xl text-neutral-900 mb-0.5">
                    Instagram
                  </span>

                  <span className="block text-xs sm:text-sm text-neutral-500 font-satoshi">
                    Visual menu highlights &amp; daily updates
                  </span>
                </div>

                <div className="ml-4 text-neutral-300 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </motion.a>

              {/* TikTok Option */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-5 sm:p-6 bg-white border border-neutral-200 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-neutral-400 hover:shadow-[0_8px_30px_rgba(107,114,128,0.15)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-neutral-100 text-neutral-900 flex items-center justify-center mr-5 flex-shrink-0 border border-neutral-200">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-7 h-7 relative overflow-visible text-neutral-900"
                  >
                    <path
                      d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.144-4.53v-3.48a6.34 6.34 0 0 0-5.345 5.925 6.342 6.342 0 0 0 9.516 5.485 6.368 6.368 0 0 0 3.178-5.508V8.71a8.196 8.196 0 0 0 4.762 1.513V6.779a4.83 4.83 0 0 1-1.033-.093z"
                      fill="#25F4EE"
                      transform="translate(-0.8, -0.6)"
                    />

                    <path
                      d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.144-4.53v-3.48a6.34 6.34 0 0 0-5.345 5.925 6.342 6.342 0 0 0 9.516 5.485 6.368 6.368 0 0 0 3.178-5.508V8.71a8.196 8.196 0 0 0 4.762 1.513V6.779a4.83 4.83 0 0 1-1.033-.093z"
                      fill="#FE2C55"
                      transform="translate(0.8, 0.6)"
                    />

                    <path
                      d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.144-4.53v-3.48a6.34 6.34 0 0 0-5.345 5.925 6.342 6.342 0 0 0 9.516 5.485 6.368 6.368 0 0 0 3.178-5.508V8.71a8.196 8.196 0 0 0 4.762 1.513V6.779a4.83 4.83 0 0 1-1.033-.093z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div className="flex-1 text-left">
                  <span className="block font-clash font-bold text-lg sm:text-xl text-neutral-900 mb-0.5">
                    TikTok
                  </span>

                  <span className="block text-xs sm:text-sm text-neutral-500 font-satoshi">
                    Behind the scenes &amp; kitchen prep
                  </span>
                </div>

                <div className="ml-4 text-neutral-300 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </motion.a>

            </div>
          </motion.div>

          {/* RIGHT COLUMN: "Hungry yet?" CTA Banner */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{
               duration: 0.6,
               ease: "easeOut",
               delay: 0.15,
             }}
             className="lg:col-span-5 flex flex-col justify-center self-center bg-neutral-50 border border-neutral-200 rounded-none p-6 sm:p-10 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:sticky lg:top-28 lg:translate-y-20"
           >
            <h2 className="text-4xl sm:text-5xl font-clash font-bold text-neutral-950 mb-6 flex items-center gap-3 tracking-tight">
              <span className="w-3 h-3 bg-neutral-950 rounded-full inline-block"></span>
              Hungry yet?
              <span className="w-3 h-3 bg-brand-gold rounded-full inline-block"></span>
            </h2>

            <p className="text-neutral-500 text-base sm:text-lg mb-8 leading-relaxed font-satoshi">
              Send your order on WhatsApp and we'll have it cooked fresh and on
              its way. 
            </p>

            {/* Always Side-by-Side Buttons */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 w-full">
              <a
                href="https://wa.me/2349061645790"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-gold hover:bg-brand-gold/90 text-neutral-950 font-satoshi font-bold text-xs sm:text-base px-2 sm:px-6 py-3.5 sm:py-4 rounded-none transition-all duration-300 hover:scale-[1.02] shadow-md text-center flex items-center justify-center whitespace-nowrap"
              >
                Order on WhatsApp
              </a>

              <a
                href="tel:09061645790"
                className="w-full bg-neutral-950 hover:bg-neutral-900 text-white font-satoshi font-bold text-xs sm:text-base px-2 sm:px-6 py-3.5 sm:py-4 rounded-none transition-all duration-300 hover:scale-[1.02] shadow-md text-center flex items-center justify-center whitespace-nowrap"
              >
                Call 09061645790
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}