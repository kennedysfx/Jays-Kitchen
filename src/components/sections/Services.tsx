"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Culinary Services",
    description:
      "Enjoy professional home cooking, custom meal prep tailored to your schedule, and top-tier catering for all your special events.",
    badge: "Chef's Touch",
    icon: (
      <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 01-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Delivery & Takeaway",
    description:
      "Fast and reliable food delivery, complete meal kits to cook at home, and curated party packs brought straight to your door.",
    badge: "Quick & Easy",
    icon: (
      <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Personalized Services",
    description:
      "Experience luxury dining with private chef services, interactive cooking classes, and tailored menu planning for your household.",
    badge: "VIP Experience",
    icon: (
      <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Specialty Services",
    description:
      "Custom event-specific menus for weddings and birthdays, plus dietary-specific meals including vegan, gluten-free, and more.",
    badge: "Tailored Menus",
    icon: (
      <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Consultation & Extra",
    description:
      "Comprehensive grocery shopping, expert kitchen consultation, and bespoke recipe development for your unique culinary needs.",
    badge: "Expert Advice",
    icon: (
      <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 font-satoshi relative overflow-hidden -mt-px border-none">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-brand-gold text-neutral-950 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-6 shadow-sm"
        >
          Our Services
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="text-neutral-950 font-clash font-bold text-4xl sm:text-5xl md:text-5xl text-center max-w-3xl leading-[1.1] mb-6"
        >
          Scrumptious Cuisine Services.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-neutral-500 text-sm sm:text-base text-center max-w-xl mb-16 sm:mb-20"
        >
          From daily meals and personalized private chef experiences to full-scale event catering, we bring culinary excellence to your table.
        </motion.p>

        {/* Services Grid - Now includes the CTA Banner as the 6th item */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
          
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10 font-satoshi shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:border-brand-gold/50 hover:shadow-[0_8px_30px_rgba(212,175,55,0.12)]"
            >
              <div>
                {/* Card Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <span className="text-brand-gold text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-brand-gold/10 border border-brand-gold/20 px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-neutral-900 font-clash font-bold text-2xl sm:text-3xl tracking-tight mb-3">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Inquiry Action */}
              <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-neutral-400 text-xs font-medium font-satoshi">
                  Custom Quote Available
                </span>
                <a
                  href={`https://wa.me/?text=Hi%20Jay's%20Kitchen,%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold hover:text-yellow-600 text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors"
                >
                  Book / Inquire &rarr;
                </a>
              </div>
            </motion.div>
          ))}

          {/* Global CTA Banner (Now acting as the 6th grid item) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 5 * 0.12 }} 
            className="w-full rounded-3xl bg-neutral-50 border border-neutral-200 p-6 sm:p-10 flex flex-col justify-center items-start gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
          >
            <div>
              <h4 className="text-neutral-900 font-clash font-bold text-2xl sm:text-3xl mb-3">
                Looking for something highly specific?
              </h4>
              <p className="text-neutral-500 text-sm sm:text-base">
                Talk directly with our chef on WhatsApp to build a tailored menu or plan your culinary needs.
              </p>
            </div>
            <a
              href="https://wa.me/09061645790"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gold hover:bg-brand-gold/90 text-neutral-950 font-satoshi font-bold text-sm px-8 py-4 rounded-none transition-transform duration-300 hover:scale-105 shadow-md w-full text-center sm:w-auto mt-auto"
            >
              Chat with Us
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}