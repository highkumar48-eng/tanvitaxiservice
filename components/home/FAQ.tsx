"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { BUSINESS } from "@/lib/constants";

const faqs = [
  {
    question: "How do I book a taxi with Tanvi Taxi Services?",
    answer: `You can book in 3 simple ways: (1) Call us at ${BUSINESS.phone}, (2) Send a WhatsApp message, or (3) Fill in our online booking form above. We confirm your booking instantly.`,
  },
  {
    question: "Are your drivers verified and trained?",
    answer:
      "Yes. All our drivers undergo police verification, have valid commercial driving licenses, and receive customer service training. Your safety is our top priority.",
  },
  {
    question: "Do you provide airport pickup and drop services?",
    answer:
      "Absolutely. We provide 24×7 airport taxi service from and to IGI Airport (Terminal 1, 2 & 3). We track your flight so your driver is always ready — even if your flight is delayed.",
  },
  {
    question: "What vehicles do you have in your fleet?",
    answer:
      "We operate Sedans (Swift Dzire, Honda City), SUVs (Ertiga, Scorpio), Innova Crysta, and Tempo Travellers (12–17 seater). All vehicles are AC-equipped and regularly serviced.",
  },
  {
    question: "Is there a cancellation policy?",
    answer:
      "You can cancel your booking up to 2 hours before the pickup time at no charge. Cancellations made less than 2 hours before pickup may incur a small convenience fee.",
  },
  {
    question: "Do you provide outstation taxi services?",
    answer:
      "Yes! We cover popular routes like Delhi to Jaipur, Agra, Chandigarh, Dehradun, Manali, Haridwar, Mathura, and more. One-way and round-trip options available.",
  },
  {
    question: "How is the fare calculated?",
    answer:
      "Fare is based on the distance (km), vehicle type, and trip type (local/outstation). Use our Fare Calculator on this page for an instant estimate. All fares are inclusive of GST and we provide a receipt.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Cash, UPI (Google Pay, PhonePe, Paytm), and bank transfers. For corporate clients, monthly invoicing is available.",
  },
  {
    question: "Do you offer monthly or corporate packages?",
    answer:
      "Yes. We offer custom monthly packages for corporate offices and regular travelers. Contact us on WhatsApp or call us for a tailored quote.",
  },
  {
    question: "Is the vehicle sanitized before each trip?",
    answer:
      "Yes. All our vehicles are cleaned and sanitized before each trip. We maintain hygiene standards to ensure a safe and comfortable journey for every passenger.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#080E1A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Common"
          highlight="Questions"
          subtitle="Everything you need to know before booking your ride."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-12 space-y-2"
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#D4AF37]/30 bg-[#D4AF37]/5"
                    : "border-white/8 bg-[#1E293B]/40 hover:border-white/15"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm font-semibold transition-colors ${isOpen ? "text-[#D4AF37]" : "text-white"}`}>
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex-shrink-0 transition-colors ${isOpen ? "text-[#D4AF37]" : "text-slate-500"}`}
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
