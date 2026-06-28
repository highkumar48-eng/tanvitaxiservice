"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    name: "Anil Sharma",
    city: "Gurugram",
    rating: 5,
    text: "Booked an airport cab at 4 AM. Driver arrived 10 minutes early, car was spotless, and he helped with my luggage. Absolutely professional service!",
    service: "Airport Transfer",
    initials: "AS",
  },
  {
    name: "Priya Mehta",
    city: "Delhi",
    rating: 5,
    text: "Used them for a Delhi to Jaipur trip. Innova Crysta was very comfortable. Driver was polite and knowledgeable. Pricing was transparent — no surprises!",
    service: "Outstation Trip",
    initials: "PM",
  },
  {
    name: "Rahul Gupta",
    city: "Noida",
    rating: 5,
    text: "Corporate account setup was seamless. Our employees love the reliable service. Billing is clean, drivers are always on time. Best cab service in NCR.",
    service: "Corporate Travel",
    initials: "RG",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#101826]/40 border-b border-brand-border" aria-label="Customer reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <SectionHeader
            badge="Customer Reviews"
            title="What Our Riders"
            highlight="Say"
            subtitle="Over 1,200 happy customers. Real reviews from real riders across Delhi NCR."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              className="relative bg-brand-card border border-brand-border rounded-xl p-6 flex flex-col hover:border-brand-blue transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote size={20} className="text-brand-blue/10 absolute top-5 right-5" aria-hidden="true" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={11} className="fill-brand-blue text-brand-blue" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-xs text-brand-text-sec font-light leading-relaxed flex-1 mb-5">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="h-px bg-brand-border mb-4" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 bg-[#081423] border border-brand-border flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">{t.name}</p>
                  <p className="text-[10px] text-brand-text-sec">
                    {t.city} · {t.service}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
