"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const destinations = [
  { id: "agra", name: "Agra", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=600" },
  { id: "mathura", name: "Mathura", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=600" },
  { id: "vrindavan", name: "Vrindavan", image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&q=80&w=600" },
  { id: "haridwar", name: "Haridwar", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=600" },
  { id: "rishikesh", name: "Rishikesh", image: "https://images.unsplash.com/photo-1598977123418-45f04b6141bc?auto=format&fit=crop&q=80&w=600" },
  { id: "shimla", name: "Shimla", image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&q=80&w=600" },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-[#081423] border-b border-brand-border" aria-label="Destinations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-brand-blue uppercase tracking-[2px] block mb-3">
              Popular Places
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              TOP OUTSTATION DESTINATIONS
            </h2>
            <p className="text-brand-text-sec font-light text-xs sm:text-sm mt-2 max-w-2xl">
              Explore the most loved cities and tourist spots we frequently travel to.
            </p>
          </div>
          <Link href="/destinations" className="flex-shrink-0">
            <Button variant="secondary" className="gap-2">
              View All Routes <ChevronRight size={14} />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {destinations.map((dest) => (
            <Link key={dest.id} href={`/booking?to=${encodeURIComponent(dest.name)}`} className="group block relative h-48 sm:h-56 bg-brand-card border border-brand-border rounded-xl overflow-hidden cursor-pointer">
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-center text-xs uppercase tracking-wider">{dest.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
