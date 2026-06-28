"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { BUSINESS } from "@/lib/constants";

const FAQS = [
  {
    question: "How do I book a taxi with Tanvi Taxi Services?",
    answer: `You can book in 3 simple ways: (1) Call us at ${BUSINESS.phone}, (2) Send a WhatsApp message, or (3) Fill in our online booking form. We confirm your booking instantly.`,
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

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-[#081423] min-h-screen text-white pt-8">
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ Desk"
          title="Frequently Asked"
          highlight="Questions"
          subtitle="Everything you need to know about airport pickups, outstation trips, fares, and fleet options."
        />

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border transition-all duration-200 rounded-xl overflow-hidden ${
                  isOpen
                    ? "border-brand-blue bg-[#101826]"
                    : "border-brand-border bg-[#141D2B] hover:border-brand-border/80"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4.5 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`text-xs font-bold uppercase tracking-wider transition-colors ${isOpen ? "text-brand-blue" : "text-white"}`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-brand-blue" : "text-brand-text-sec"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-5 text-xs text-brand-text-sec font-light leading-relaxed border-t border-brand-border pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
