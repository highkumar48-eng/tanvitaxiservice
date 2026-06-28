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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("flex flex-col", centered ? "items-center text-center" : "items-start text-left", className)}
    >
      {badge && (
        <span className="inline-block mb-4 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1.5px] text-brand-blue border border-brand-border bg-brand-bg-sec rounded-none">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-none tracking-tight uppercase mb-4">
        {title}{" "}
        {highlight && <span className="text-brand-blue">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={cn("text-base text-brand-text-sec font-light leading-relaxed mt-2", centered && "max-w-2xl mx-auto")}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
