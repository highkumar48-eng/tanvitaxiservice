"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowUp, Share2, MapPin } from "lucide-react";
import { BUSINESS, CALL_URL, WHATSAPP_PREFILL } from "@/lib/constants";

function WAIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    setCanShare(!!navigator.share);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: BUSINESS.name,
          text: `Book premium taxi and tour packages with ${BUSINESS.name}.`,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Share failed", err);
      }
    }
  };

  return (
    <div
      className="fixed bottom-6 right-5 z-40 flex flex-col gap-3 items-end"
      aria-label="Floating Actions"
    >
      <AnimatePresence>
        {/* Back to Top */}
        {showScrollTop && (
          <motion.button
            key="scrolltop"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-brand-card hover:bg-brand-blue border border-brand-border hover:border-brand-blue text-white flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}

        {/* Mobile Share */}
        {canShare && (
          <motion.button
            key="share"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={handleShare}
            className="w-11 h-11 rounded-full bg-brand-card border border-brand-border text-white flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer md:hidden"
            aria-label="Share Site"
          >
            <Share2 size={16} />
          </motion.button>
        )}

        {/* Maps FAB */}
        <motion.a
          key="maps"
          href="https://maps.google.com/?q=Gurugram+Haryana+India"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          className="w-11 h-11 rounded-full bg-brand-card border border-brand-border text-white flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer"
          aria-label="Locate on Google Maps"
        >
          <MapPin size={16} className="text-brand-blue" />
        </motion.a>

        {/* WhatsApp FAB */}
        <motion.a
          key="whatsapp"
          href={WHATSAPP_PREFILL()}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          className="w-14 h-14 rounded-full bg-[#12B76A] text-white flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer relative"
          aria-label="WhatsApp Us"
        >
          <span className="absolute inset-0 rounded-full bg-[#12B76A] animate-ping opacity-20" aria-hidden="true" />
          <WAIcon size={24} />
        </motion.a>

        {/* Call FAB */}
        <motion.a
          key="call"
          href={CALL_URL}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          className="w-14 h-14 rounded-full bg-[#081423] hover:bg-brand-blue text-white flex items-center justify-center shadow-xl border border-brand-border hover:border-brand-blue transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Call Us"
        >
          <Phone size={20} />
        </motion.a>
      </AnimatePresence>
    </div>
  );
}
