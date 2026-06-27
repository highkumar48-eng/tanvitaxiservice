"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section
      className="relative bg-[#0D1B3E] pt-12 pb-14 overflow-hidden"
      aria-label={`${title} page header`}
    >
      {/* Subtle geometric background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Diagonal stripe pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              #ffffff 0px,
              #ffffff 1px,
              transparent 1px,
              transparent 40px
            )`,
          }}
        />
        {/* Right side blue accent */}
        <div className="absolute top-0 right-0 w-72 h-full bg-gradient-to-l from-[#1B4FD8]/10 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0D1B3E] to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 mb-5 text-xs"
          >
            <Link
              href="/"
              className="flex items-center gap-1 text-[#94A3B8] hover:text-white transition-colors"
            >
              <Home size={12} />
              <span>Home</span>
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={12} className="text-[#475569]" />
                {crumb.href && i < breadcrumbs.length - 1 ? (
                  <Link
                    href={crumb.href}
                    className="text-[#94A3B8] hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#CBD5E1]">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Blue accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-12 h-1 bg-[#1B4FD8] rounded-full mb-4 origin-left"
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-3xl sm:text-4xl font-bold text-white leading-tight"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-3 text-base text-[#94A3B8] max-w-xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
