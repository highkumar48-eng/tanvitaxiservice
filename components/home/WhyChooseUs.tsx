"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Sparkles, BadgeIndianRupee, Timer, HeartHandshake } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  {
    icon: Clock,
    title: "24×7 Availability",
    description: "We're available round the clock — early morning airport runs, late night transfers, or emergency trips. Just call us, any time.",
    color: "from-blue-500/20 to-blue-600/10",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: ShieldCheck,
    title: "Verified Drivers",
    description: "All our drivers undergo strict background verification, are professionally trained, and carry valid commercial licenses.",
    color: "from-green-500/20 to-green-600/10",
    border: "border-green-500/20",
    iconColor: "text-green-400",
  },
  {
    icon: Sparkles,
    title: "Sanitized Vehicles",
    description: "Every vehicle is cleaned, sanitized, and inspected before each trip. Your health and comfort are our top priority.",
    color: "from-purple-500/20 to-purple-600/10",
    border: "border-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: BadgeIndianRupee,
    title: "Transparent Pricing",
    description: "No hidden charges. No surge pricing surprises. What we quote is what you pay — with a proper GST invoice.",
    color: "from-[#D4AF37]/20 to-[#A8871C]/10",
    border: "border-[#D4AF37]/20",
    iconColor: "text-[#D4AF37]",
  },
  {
    icon: Timer,
    title: "On-Time Pickup",
    description: "We track your flight, monitor traffic, and ensure we're waiting before you are. Punctuality is our promise.",
    color: "from-orange-500/20 to-orange-600/10",
    border: "border-orange-500/20",
    iconColor: "text-orange-400",
  },
  {
    icon: HeartHandshake,
    title: "Safe & Comfortable",
    description: "Spacious, well-maintained vehicles with AC, comfortable seating, and a driver who cares about your journey.",
    color: "from-rose-500/20 to-rose-600/10",
    border: "border-rose-500/20",
    iconColor: "text-rose-400",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-[#080E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose Us"
          title="Trusted by Thousands"
          highlight="Across Delhi NCR"
          subtitle="Experience the difference with a service built on reliability, safety and genuine care for every passenger."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`group relative p-6 rounded-2xl h-full flex flex-col bg-gradient-to-br ${feature.color} border ${feature.border} backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-black/20`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-white/5 border ${feature.border} flex items-center justify-center flex-shrink-0 mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className={feature.iconColor} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5 flex-shrink-0">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-grow">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5"
        >
          {[
            { value: "5,000+", label: "Trips Completed" },
            { value: "1,200+", label: "Happy Customers" },
            { value: "4.9★", label: "Average Rating" },
            { value: "24×7", label: "Available" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center py-8 px-4 bg-[#0F172A] text-center">
              <span className="text-3xl md:text-4xl font-black text-gradient-gold mb-1">{stat.value}</span>
              <span className="text-xs md:text-sm text-slate-400 font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
