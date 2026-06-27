"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Sparkles, BadgeIndianRupee, Timer, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24×7 Availability",
    description: "Early morning airport runs, late night transfers, or emergency trips. We pick up any time, any day.",
    accent: "#1B4FD8",
  },
  {
    icon: ShieldCheck,
    title: "Verified Drivers",
    description: "All drivers are police-verified, professionally trained, and hold valid commercial licenses.",
    accent: "#16A34A",
  },
  {
    icon: Sparkles,
    title: "Sanitized Vehicles",
    description: "Every vehicle is cleaned, sanitized, and inspected before each trip for your health and comfort.",
    accent: "#0891B2",
  },
  {
    icon: BadgeIndianRupee,
    title: "Transparent Pricing",
    description: "No hidden charges. No surge pricing. What we quote is what you pay — with a proper GST invoice.",
    accent: "#16A34A",
  },
  {
    icon: Timer,
    title: "On-Time Pickup",
    description: "We track your flight, monitor traffic, and ensure we're waiting before you are. Punctuality guaranteed.",
    accent: "#1B4FD8",
  },
  {
    icon: HeartHandshake,
    title: "Safe & Comfortable",
    description: "Spacious, well-maintained AC vehicles with a driver who genuinely cares about your journey.",
    accent: "#DC2626",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 md:py-20 bg-[#F8FAFC]" aria-label="Why choose us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-xs font-bold text-[#1B4FD8] uppercase tracking-widest block mb-3">
            Why Choose Us
          </span>
          <div className="w-10 h-0.5 bg-[#1B4FD8] mx-auto mb-5" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B3E] mb-3">
            Trusted by Thousands Across Delhi NCR
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            Experience the difference with a service built on reliability, safety, and genuine care for every passenger.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${feature.accent}15` }}
                >
                  <Icon size={20} style={{ color: feature.accent }} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0D1B3E] mb-1.5">{feature.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
