"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anil Sharma",
    city: "Gurugram",
    rating: 5,
    text: "Booked an airport cab at 4 AM. Driver arrived 10 minutes early, car was spotless, and he helped with my luggage. Absolutely professional service!",
    service: "Airport Transfer",
    initials: "AS",
    avatarBg: "#1B4FD8",
  },
  {
    name: "Priya Mehta",
    city: "Delhi",
    rating: 5,
    text: "Used them for a Delhi to Jaipur trip. Innova Crysta was very comfortable. Driver was polite and knowledgeable. Pricing was transparent — no surprises!",
    service: "Outstation Trip",
    initials: "PM",
    avatarBg: "#0891B2",
  },
  {
    name: "Rahul Gupta",
    city: "Noida",
    rating: 5,
    text: "Corporate account setup was seamless. Our employees love the reliable service. Billing is clean, drivers are always on time. Best cab service in NCR.",
    service: "Corporate Travel",
    initials: "RG",
    avatarBg: "#16A34A",
  },
  {
    name: "Sunita Verma",
    city: "Faridabad",
    rating: 5,
    text: "Hired a Tempo Traveller for our family trip to Manali. 14 of us went and everyone was comfortable. Driver was experienced and safe. Will book again!",
    service: "Group Tour",
    initials: "SV",
    avatarBg: "#7C3AED",
  },
  {
    name: "Mohit Agarwal",
    city: "Gurugram",
    rating: 5,
    text: "Booked for my parents' hospital visits multiple times. Driver is always on time, caring, and patient. This level of service is rare. Thank you Tanvi Taxi!",
    service: "Local Taxi",
    initials: "MA",
    avatarBg: "#DC2626",
  },
  {
    name: "Kavya Singh",
    city: "Delhi NCR",
    rating: 5,
    text: "Used WhatsApp booking — got a reply in under 2 minutes. Sedan was clean and AC was great in the Delhi heat. Fair pricing and a very pleasant driver.",
    service: "City Ride",
    initials: "KS",
    avatarBg: "#0D1B3E",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-[#0D1B3E]" aria-label="Customer reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest block mb-3">
            Customer Reviews
          </span>
          <div className="w-10 h-0.5 bg-[#1B4FD8] mx-auto mb-5" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            What Our Riders Say
          </h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto">
            Over 1,200 happy customers. Real reviews from real riders across Delhi NCR.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              className="relative bg-[#162040] border border-[#1E3264] rounded-xl p-6 flex flex-col hover:border-[#1B4FD8]/30 transition-all duration-200"
            >
              {/* Quote icon */}
              <Quote size={24} className="text-[#1B4FD8]/25 absolute top-5 right-5" aria-hidden="true" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm text-[#94A3B8] leading-relaxed flex-1 mb-5">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="h-px bg-[#1E3264] mb-4" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: t.avatarBg }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-[#64748B]">
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
