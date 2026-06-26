"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(centered && "text-center", className)}
    >
      {badge && (
        <span className="inline-block mb-4 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4">
        {title}{" "}
        {highlight && <span className="text-gradient-gold">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={cn("text-base sm:text-lg text-slate-400 leading-relaxed", centered && "max-w-2xl mx-auto")}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
