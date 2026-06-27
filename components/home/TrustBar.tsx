"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { target: 5000, suffix: "+", label: "Trips Completed" },
  { target: 1200, suffix: "+", label: "Happy Customers" },
  { target: 4.9, suffix: "★", label: "Average Rating", decimals: 1 },
  { target: 16, suffix: " yrs", label: "Years in Service" },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-[#E2E8F0]" aria-label="Company statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E2E8F0]"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-7 px-4 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#1B4FD8] mb-1 leading-none tabular-nums">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  duration={1500}
                  decimals={stat.decimals ?? 0}
                />
              </div>
              <p className="text-sm text-[#64748B] font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
