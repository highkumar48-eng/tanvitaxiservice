"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, Car } from "lucide-react";
import { BUSINESS, CALL_URL, NAV_LINKS, WHATSAPP_PREFILL } from "@/lib/constants";
import { cn } from "@/lib/utils";

// ── WhatsApp icon ────────────────────────────────────────────────────────
function WAIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ── Dropdown menu ────────────────────────────────────────────────────────
interface DropdownProps {
  items: { label: string; href: string }[];
  onClose?: () => void;
}

function DropdownMenu({ items, onClose }: DropdownProps) {
  return (
    <div className="absolute top-full left-0 pt-1 z-50 min-w-[210px]">
      <div className="bg-white border border-[#E2E8F0] rounded-xl shadow-lg overflow-hidden py-1">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="block px-4 py-2.5 text-sm text-[#475569] hover:text-[#1B4FD8] hover:bg-[#F8FAFC] transition-colors duration-150"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ── Top Utility Bar ─────────────────────────────────────────── */}
      <div className="bg-[#0D1B3E] text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-[#94A3B8]">
            Serving <span className="text-white">Gurugram · Delhi · Noida · Faridabad</span> and beyond
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#94A3B8]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
              Available 24×7
            </span>
            <a
              href={CALL_URL}
              className="flex items-center gap-1.5 text-white hover:text-[#2563EB] transition-colors"
            >
              <Phone size={12} />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ─────────────────────────────────────────────── */}
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white border-b border-[#E2E8F0] shadow-sm"
            : "bg-white border-b border-[#E2E8F0]"
        )}
      >
        <div ref={navRef}>
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

            {/* ── Logo ── */}
            <Link
              href="/"
              className="flex items-center gap-2.5 flex-shrink-0 group"
              aria-label={`${BUSINESS.name} — Home`}
            >
              <div className="w-9 h-9 rounded-lg bg-[#0D1B3E] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1B4FD8] transition-colors duration-200">
                <Car size={18} className="text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold text-[#0D1B3E] tracking-tight">
                  Tanvi
                </span>
                <span className="text-[10px] font-semibold text-[#1B4FD8] uppercase tracking-widest">
                  Taxi Services
                </span>
              </div>
            </Link>

            {/* ── Desktop Nav Links ── */}
            <ul className="hidden lg:flex items-center gap-0.5" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.label} className="relative">
                  {link.sublinks ? (
                    <div
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        className={cn(
                          "flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-150",
                          openDropdown === link.label || isActive(link.href)
                            ? "text-[#1B4FD8] bg-[#EFF6FF]"
                            : "text-[#374151] hover:text-[#1B4FD8] hover:bg-[#F8FAFC]"
                        )}
                        aria-haspopup="true"
                        aria-expanded={openDropdown === link.label}
                      >
                        {link.label}
                        <ChevronDown
                          size={13}
                          className={cn(
                            "transition-transform duration-200",
                            openDropdown === link.label ? "rotate-180" : ""
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.15 }}
                          >
                            <DropdownMenu
                              items={link.sublinks}
                              onClose={() => setOpenDropdown(null)}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-150 relative",
                        isActive(link.href)
                          ? "text-[#1B4FD8] bg-[#EFF6FF]"
                          : "text-[#374151] hover:text-[#1B4FD8] hover:bg-[#F8FAFC]"
                      )}
                    >
                      {link.label}
                      {isActive(link.href) && (
                        <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#1B4FD8] rounded-full" />
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* ── Desktop CTAs ── */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href={CALL_URL}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#0D1B3E] border border-[#E2E8F0] rounded-lg hover:border-[#1B4FD8] hover:text-[#1B4FD8] transition-all duration-200"
              >
                <Phone size={14} />
                Call Now
              </a>
              <Link
                href="/booking"
                className="flex items-center gap-2 px-5 py-2 text-sm font-bold text-white bg-[#16A34A] rounded-lg hover:bg-[#15803D] transition-all duration-200 shadow-sm"
              >
                Book a Cab
              </Link>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-[#374151] hover:text-[#1B4FD8] hover:bg-[#F8FAFC] transition-all duration-200"
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
        </div>
      </header>

      {/* ── Mobile Drawer ──────────────────────────────────────────────── */}
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
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl flex flex-col overflow-y-auto lg:hidden"
              role="dialog"
              aria-label="Navigation menu"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#E2E8F0]">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
                  <div className="w-8 h-8 rounded-lg bg-[#0D1B3E] flex items-center justify-center">
                    <Car size={16} className="text-white" />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-bold text-[#0D1B3E]">Tanvi</span>
                    <span className="text-[10px] font-semibold text-[#1B4FD8] uppercase tracking-widest">Taxi Services</span>
                  </div>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-[#94A3B8] hover:text-[#374151] rounded-lg hover:bg-[#F8FAFC] transition-all"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Mobile utility info */}
              <div className="px-5 py-3 bg-[#F8FAFC] border-b border-[#E2E8F0]">
                <a
                  href={CALL_URL}
                  className="flex items-center gap-2 text-sm font-semibold text-[#0D1B3E]"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={14} className="text-[#1B4FD8]" />
                  {BUSINESS.phone}
                </a>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 px-3 py-4" aria-label="Mobile navigation">
                <ul className="space-y-0.5" role="list">
                  {NAV_LINKS.map((link) => (
                    <li key={link.label}>
                      {link.sublinks ? (
                        <div>
                          <button
                            onClick={() =>
                              setMobileExpanded(
                                mobileExpanded === link.label ? null : link.label
                              )
                            }
                            className={cn(
                              "flex items-center justify-between w-full px-3.5 py-3 text-sm font-medium rounded-lg transition-all duration-150",
                              mobileExpanded === link.label
                                ? "text-[#1B4FD8] bg-[#EFF6FF]"
                                : "text-[#374151] hover:text-[#1B4FD8] hover:bg-[#F8FAFC]"
                            )}
                          >
                            {link.label}
                            <ChevronDown
                              size={15}
                              className={cn(
                                "transition-transform duration-200",
                                mobileExpanded === link.label ? "rotate-180" : ""
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {mobileExpanded === link.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 py-1 space-y-0.5">
                                  {link.sublinks.slice(0, 7).map((sub) => (
                                    <Link
                                      key={sub.label}
                                      href={sub.href}
                                      onClick={() => setIsOpen(false)}
                                      className="block px-3.5 py-2.5 text-sm text-[#475569] hover:text-[#1B4FD8] hover:bg-[#F8FAFC] rounded-lg transition-colors"
                                    >
                                      {sub.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center px-3.5 py-3 text-sm font-medium rounded-lg transition-all duration-150",
                            isActive(link.href)
                              ? "text-[#1B4FD8] bg-[#EFF6FF]"
                              : "text-[#374151] hover:text-[#1B4FD8] hover:bg-[#F8FAFC]"
                          )}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile CTAs */}
              <div className="px-4 pb-8 space-y-2.5 border-t border-[#E2E8F0] pt-4">
                <a
                  href={WHATSAPP_PREFILL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2.5 w-full py-3 text-sm font-bold text-white bg-[#25D366] hover:bg-[#1AA44E] rounded-lg transition-all duration-200"
                >
                  <WAIcon size={16} />
                  WhatsApp Enquiry
                </a>
                <Link
                  href="/booking"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2.5 w-full py-3 text-sm font-bold text-white bg-[#16A34A] hover:bg-[#15803D] rounded-lg transition-all duration-200"
                >
                  Book a Cab
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
