"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Topbar({ isMobileMenuOpen }: { isMobileMenuOpen: boolean }) {
  const elRef = useRef<HTMLDivElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const announcement =
    "★ COOKED FRESH TO ORDER ★ WHITE-GLOVE DELIVERY ★ BESPOKE CATERING ★ OPEN 9AM TO 10PM ★ HIGH-GRADE INGREDIENTS ";

  const shouldHide = isScrolled || isMobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const setVar = () => {
      const h = shouldHide ? 0 : el.offsetHeight;
      document.documentElement.style.setProperty("--topbar-height", `${h}px`);
    };

    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(el);
    window.addEventListener("resize", setVar);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setVar);
    };
  }, [shouldHide]);

  return (
    <div
      ref={elRef}
      className="topbar fixed top-0 left-0 right-0 bg-[#B8860B] text-[#050505] overflow-hidden py-2.5 transition-transform duration-300"
      style={{
        zIndex: 60,
        transform: shouldHide ? "translateY(-100%)" : "translateY(0%)",
      }}
      aria-hidden={shouldHide}
    >
      <motion.div
        className="flex whitespace-nowrap items-center font-satoshi font-bold text-xs sm:text-sm tracking-[0.15em] uppercase"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
      >
        <span className="pr-2">{announcement.repeat(4)}</span>
        <span className="pr-2">{announcement.repeat(4)}</span>
      </motion.div>
    </div>
  );
}