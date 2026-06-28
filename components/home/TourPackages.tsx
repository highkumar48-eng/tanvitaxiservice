"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Clock, ChevronRight } from "lucide-react";
import { WHATSAPP_PREFILL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const packages = [
  {
    id: "agra",
    title: "Agra Day Tour",
    duration: "Same Day",
    price: "From ₹3,999",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800",
    highlights: ["Taj Mahal", "Agra Fort", "Yamuna Expressway"],
  },
  {
    id: "mathura",
    title: "Mathura & Vrindavan",
    duration: "1–2 Days",
    price: "From ₹3,499",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800",
    highlights: ["Banke Bihari Temple", "Prem Mandir", "Krishna Janmasthan"],
  },
  {
    id: "jaipur",
    title: "Jaipur Heritage",
    duration: "2 Days",
    price: "From ₹8,499",
    image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&q=80&w=800",
    highlights: ["Amer Fort", "Hawa Mahal", "Chokhi Dhani"],
  },
];

interface TourPackagesProps {
  limit?: number;
  showViewAll?: boolean;
}

export default function TourPackages({ limit = 3, showViewAll = true }: TourPackagesProps) {
  const displayed = packages.slice(0, limit);

  return (
    <section id="tours" className="py-24 bg-[#081423] border-b border-brand-border" aria-label="Tour Packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-brand-blue uppercase tracking-[2px] block mb-3">
              Tour Packages
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              POPULAR OUTSTATION TOURS
            </h2>
            <p className="text-brand-text-sec font-light text-xs sm:text-sm mt-2 max-w-2xl">
              Discover the beauty of India with our comfortable, curated outstation tour packages.
            </p>
          </div>
          {showViewAll && (
            <Link href="/tour-packages" className="flex-shrink-0">
              <Button variant="secondary" className="gap-2">
                View All Packages <ChevronRight size={14} />
              </Button>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayed.map((pkg, i) => (
            <motion.article
              key={pkg.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              className="group bg-brand-card border border-brand-border rounded-xl overflow-hidden hover:border-brand-blue transition-all duration-350"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-brand-bg">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Duration badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#081423]/90 border border-brand-border px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                  <Clock size={10} className="text-brand-blue" />
                  {pkg.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">{pkg.title}</h3>
                <p className="text-xs font-bold text-brand-blue mb-4">{pkg.price}</p>

                <ul className="space-y-2 mb-6">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-brand-text-sec">
                      <MapPin size={12} className="text-brand-text-sec/50 flex-shrink-0" />
                      <span className="font-light">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  <a
                    href={WHATSAPP_PREFILL("", pkg.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="primary" size="sm" fullWidth>
                      Book Tour
                    </Button>
                  </a>
                  <Link href="/tour-packages" className="flex-1">
                    <Button variant="secondary" size="sm" fullWidth>
                      Details
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
