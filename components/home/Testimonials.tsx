"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    name: "Anil Sharma",
    city: "Gurugram",
    rating: 5,
    text: "Booked an airport cab at 4 AM. Driver arrived 10 minutes early, car was spotless, and he helped with my luggage. Absolutely professional service. Highly recommended!",
    service: "Airport Transfer",
    initials: "AS",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Priya Mehta",
    city: "Delhi",
    rating: 5,
    text: "Used them for a Delhi to Jaipur trip. Innova Crysta was very comfortable. Driver was polite and knowledgeable about the route. Pricing was transparent — no surprises!",
    service: "Outstation Trip",
    initials: "PM",
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "Rahul Gupta",
    city: "Noida",
    rating: 5,
    text: "Corporate account setup was seamless. Our employees love the reliable service. Billing is clean, drivers are always on time. Best cab service in NCR.",
    service: "Corporate Travel",
    initials: "RG",
    color: "from-green-500 to-green-700",
  },
  {
    name: "Sunita Verma",
    city: "Faridabad",
    rating: 5,
    text: "Hired a Tempo Traveller for our family trip to Manali. 14 of us went and everyone was comfortable. Driver was experienced and safe. Will book again for sure!",
    service: "Group Tour",
    initials: "SV",
    color: "from-orange-500 to-orange-700",
  },
  {
    name: "Mohit Agarwal",
    city: "Gurugram",
    rating: 5,
    text: "Booked for my parents' hospital visits multiple times. Driver is always on time, caring, and patient. This level of service is rare. Thank you Tanvi Taxi!",
    service: "Local Taxi",
    initials: "MA",
    color: "from-rose-500 to-rose-700",
  },
  {
    name: "Kavya Singh",
    city: "Delhi NCR",
    rating: 5,
    text: "Used WhatsApp booking — got a reply in under 2 minutes. Sedan was clean and AC was great in the Delhi heat. Fair pricing and a very pleasant driver.",
    service: "City Ride",
    initials: "KS",
    color: "from-[#D4AF37] to-[#A8871C]",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Customer Reviews"
          title="What Our Riders"
          highlight="Say About Us"
          subtitle="Over 1,200 happy customers. Real reviews from real riders across Gurugram, Delhi and NCR."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative flex flex-col p-6 rounded-2xl bg-[#1E293B]/60 border border-white/8 hover:border-white/15 transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
            >
              {/* Quote icon */}
              <Quote size={28} className="text-[#D4AF37]/20 absolute top-5 right-5" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm text-slate-300 leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.city} · {t.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
