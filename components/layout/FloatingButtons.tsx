"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";
import { BUSINESS, CALL_URL, WHATSAPP_PREFILL } from "@/lib/constants";

function WAIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Show FABs after user has scrolled a bit
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show label hint once after 3s
  useEffect(() => {
    if (!visible || dismissed) return;
    const t = setTimeout(() => {
      setShowLabel(true);
      setTimeout(() => setShowLabel(false), 4000);
    }, 3000);
    return () => clearTimeout(t);
  }, [visible, dismissed]);

  if (dismissed) return null;

  return (
    <div
      className="fixed bottom-6 right-5 z-40 flex flex-col gap-3 items-end"
      aria-label="Quick contact buttons"
    >
      <AnimatePresence>
        {visible && (
          <>
            {/* Dismiss button — appears on mobile when scrolled far */}
            <motion.button
              key="dismiss"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.5 }}
              onClick={() => setDismissed(true)}
              className="w-7 h-7 rounded-full bg-[#1E293B]/80 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#1E293B] transition-all duration-200 sm:hidden"
              aria-label="Hide floating buttons"
            >
              <X size={12} />
            </motion.button>

            {/* WhatsApp FAB */}
            <motion.div
              key="whatsapp"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative flex items-center gap-2"
            >
              {/* Label tooltip */}
              <AnimatePresence>
                {showLabel && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="hidden sm:block absolute right-full mr-3 whitespace-nowrap bg-[#0D1B3E] text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg"
                  >
                    Chat on WhatsApp
                    <span className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-[#0D1B3E]" />
                  </motion.div>
                )}
              </AnimatePresence>

              <a
                href={WHATSAPP_PREFILL()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp Tanvi Taxi Services at ${BUSINESS.phone}`}
                className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1AA44E] text-white flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
              >
                {/* Pulse ring */}
                <span
                  className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"
                  aria-hidden="true"
                />
                <WAIcon size={26} />
              </a>
            </motion.div>

            {/* Call FAB */}
            <motion.a
              key="call"
              href={CALL_URL}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              aria-label={`Call Tanvi Taxi Services at ${BUSINESS.phone}`}
              className="w-14 h-14 rounded-full bg-[#0D1B3E] hover:bg-[#1B4FD8] text-white flex items-center justify-center shadow-xl border border-[#1E3264] hover:border-[#1B4FD8] transition-all duration-200 hover:scale-110 active:scale-95"
            >
              <Phone size={22} />
            </motion.a>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
