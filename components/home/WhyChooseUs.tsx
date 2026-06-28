"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Sparkles, BadgeIndianRupee, Timer, HeartHandshake } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  {
    icon: Clock,
    title: "24×7 Availability",
    description: "Early morning airport runs, late night transfers, or emergency trips. We pick up any time, any day.",
    accent: "#2D7FF9",
  },
  {
    icon: ShieldCheck,
    title: "Verified Drivers",
    description: "All drivers are police-verified, professionally trained, and hold valid commercial licenses.",
    accent: "#12B76A",
  },
  {
    icon: Sparkles,
    title: "Clean Vehicles",
    description: "Every vehicle is cleaned, sanitized, and inspected before each trip for your health and comfort.",
    accent: "#2D7FF9",
  },
  {
    icon: BadgeIndianRupee,
    title: "Transparent Pricing",
    description: "No hidden charges. No surge pricing. What we quote is what you pay — with a proper GST invoice.",
    accent: "#12B76A",
  },
  {
    icon: Timer,
    title: "On-Time Pickup",
    description: "We track your flight, monitor traffic, and ensure we're waiting before you are. Punctuality guaranteed.",
    accent: "#2D7FF9",
  },
  {
    icon: HeartHandshake,
    title: "Safe & Comfortable",
    description: "Spacious, well-maintained AC vehicles with a driver who genuinely cares about your journey.",
    accent: "#12B76A",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-[#081423] border-b border-brand-border" aria-label="Why choose us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <SectionHeader
            badge="Premium Standards"
            title="Trusted By Thousands"
            highlight="Across NCR"
            subtitle="Experience the difference with a service built on reliability, safety, and genuine care for every passenger."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                className="bg-brand-card border border-brand-border rounded-none p-6 flex gap-4 hover:border-brand-blue transition-all duration-300"
              >
                <div className="w-10 h-10 bg-brand-bg-sec border border-brand-border flex items-center justify-center flex-shrink-0 text-brand-blue">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">{feature.title}</h3>
                  <p className="text-xs text-brand-text-sec font-light leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
