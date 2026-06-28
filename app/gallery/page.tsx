"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800",
    alt: "Premium Sedan front detail",
    category: "fleet"
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
    alt: "SUV on highway road trip",
    category: "travel"
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    alt: "Corporate executive business pick-up",
    category: "corporate"
  },
  {
    src: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800",
    alt: "Tourist road trip to Agra Taj Mahal",
    category: "travel"
  },
  {
    src: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=80&w=800",
    alt: "Toyota Innova Crysta premium interior",
    category: "fleet"
  },
  {
    src: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
    alt: "Tempo Traveller travel group on mountain road",
    category: "travel"
  },
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
    alt: "Airport transit terminal pickup",
    category: "corporate"
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    alt: "Decorated wedding car",
    category: "fleet"
  }
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");

  const filteredImages = filter === "all" ? IMAGES : IMAGES.filter((img) => img.category === filter);

  return (
    <div className="bg-[#081423] min-h-screen text-white pt-8">
      {/* Page Header */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Visual Archive"
          title="Premium Travel"
          highlight="Gallery"
          subtitle="Explore images of our fleet, highway tours, airport pickups, and executive transport logs."
        />
      </section>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-center">
        <div className="flex flex-wrap gap-4 border-b border-brand-border pb-4 w-full justify-center">
          {["all", "fleet", "travel", "corporate"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "text-xs font-bold uppercase tracking-[1.5px] px-4 py-2 border border-transparent transition-all duration-200 cursor-pointer",
                filter === cat
                  ? "text-brand-blue border-brand-blue bg-brand-bg-sec"
                  : "text-brand-text-sec hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((img, idx) => (
            <div key={idx} className="relative h-72 bg-brand-card border border-brand-border rounded-xl overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover grayscale hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-10">
                <span className="text-[10px] font-bold uppercase tracking-[1px] text-white">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
