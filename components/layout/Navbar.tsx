"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Car } from "lucide-react";
import { BUSINESS, CALL_URL, NAV_LINKS, WHATSAPP_PREFILL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const mobileMenuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 30 },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.25, ease: "easeInOut" as const },
  },
};

const linkVariants = {
  hidden: { x: 30, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: i * 0.07, duration: 0.3, ease: "easeOut" as const },
  }),
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass-dark shadow-lg border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 flex-shrink-0 group"
            aria-label={`${BUSINESS.name} - Home`}
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#A8871C] flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-shadow duration-300">
              <Car size={20} className="text-[#0F172A]" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm md:text-base font-bold text-white tracking-tight">
                Tanvi
              </span>
              <span className="text-[10px] md:text-xs font-medium text-[#D4AF37] tracking-widest uppercase">
                Taxi Services
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={CALL_URL}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white border border-white/20 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-200"
            >
              <Phone size={15} />
              {BUSINESS.phone}
            </a>
            <a
              href={WHATSAPP_PREFILL()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-[#0F172A] bg-[#D4AF37] rounded-xl hover:bg-[#F0D060] transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer Panel */}
            <motion.div
              id="mobile-menu"
              key="drawer"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 z-50 w-72 lg:hidden glass-dark border-l border-white/10 flex flex-col overflow-y-auto"
              role="dialog"
              aria-label="Navigation menu"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#A8871C] flex items-center justify-center">
                    <Car size={18} className="text-[#0F172A]" />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-bold text-white">Tanvi</span>
                    <span className="text-[10px] font-medium text-[#D4AF37] tracking-widest uppercase">
                      Taxi Services
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-all"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 px-4 py-6" aria-label="Mobile navigation">
                <ul className="space-y-1" role="list">
                  {NAV_LINKS.map((link, i) => (
                    <motion.li
                      key={link.href}
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center px-4 py-3.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Drawer CTAs */}
              <div className="px-4 pb-8 space-y-3">
                <a
                  href={CALL_URL}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 text-sm font-semibold text-white border border-white/20 rounded-xl hover:bg-white/10 transition-all duration-200"
                >
                  <Phone size={16} />
                  Call Now
                </a>
                <a
                  href={WHATSAPP_PREFILL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 text-sm font-bold text-[#0F172A] bg-[#D4AF37] rounded-xl hover:bg-[#F0D060] transition-all duration-200"
                >
                  WhatsApp Enquiry
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
