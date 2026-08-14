import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    label: "Step One",
    title: "Send your order",
    description: "Message us on WhatsApp with what you want. Our team confirms it in minutes.",
  },
  {
    id: "02",
    label: "Step Two",
    title: "We cook it fresh",
    description: "Nothing sits waiting. Every order is made hot, packed, and sealed for the best experience.",
  },
  {
    id: "03",
    label: "Step Three",
    title: "Pickup or delivery",
    description: "Grab it from our location, or we bring it to your door anywhere across Nsukka.",
  }
];

export default function HowItWorks() {
  return (
<section id="how-it-works" className="relative w-full bg-[#F7F3EB] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 font-satoshi overflow-hidden -mt-px border-none">
  
  {/* Signature: soft ambient gold bloom behind the heading — the one bold move */}
  <div 
    className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
    style={{
      background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.14) 0%, rgba(212,175,55,0) 70%)',
    }}
  />

  {/* Fine grain texture for tactile, print-like quality */}
  <div 
    className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-multiply"
    style={{
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
    }}
  />

  <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
    
    {/* Section Pill - Animated */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-brand-gold text-neutral-950 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-6 shadow-sm"
    >
      How It Works
    </motion.div>
{/* Thin gold hairline signature under the pill */}
<motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  className="w-32 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent mb-10" 
/>

    {/* Main Heading */}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      className="text-neutral-950 font-clash font-bold text-4xl sm:text-5xl md:text-6xl text-center max-w-3xl leading-[1.1] mb-16 sm:mb-20"
    >
      Your favourite meal<br className="hidden sm:block" /> is just 3 steps away.
    </motion.h2>

    {/* Cards Grid — unchanged, these already work */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full relative">
      {steps.map((step, index) => (
        <motion.div 
          key={step.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
          whileHover={{ y: -6 }}
          className="flex flex-col h-full rounded-3xl border border-brand-gold/30 bg-neutral-950 p-8 sm:p-10 font-satoshi shadow-[0_10px_20px_-15px_rgba(0,0,0,0.5)] transition-shadow duration-500 hover:shadow-[0_25px_60px_-10px_rgba(212,175,55,0.25)]"
        >
          <div className="w-14 h-14 rounded-full border border-brand-gold flex items-center justify-center mb-8">
            <span className="text-brand-gold font-clash font-bold text-lg">
              {step.id}
            </span>
          </div>

          <span className="text-brand-gold/70 text-[11px] font-satoshi font-bold uppercase tracking-[0.25em] mb-2">
            {step.label}
          </span>
          
          <h3 className="text-white font-clash font-bold text-2xl sm:text-3xl tracking-tight mb-4">
            {step.title}
          </h3>
          
          <p className="text-neutral-400 text-base leading-relaxed font-satoshi">
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>
  );
}