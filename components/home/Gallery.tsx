"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const galleryItems = [
  { src: "/images/hero_bg.png", alt: "Premium Taxi – Tanvi Taxi Services", caption: "Premium Fleet", span: "col-span-2 row-span-2" },
  { src: "/images/fleet_sedan.png", alt: "Sedan Cab – Swift Dzire / Honda City", caption: "Sedan", span: "" },
  { src: "/images/fleet_suv.png", alt: "SUV Cab – Ertiga / Scorpio", caption: "SUV", span: "" },
  { src: "/images/fleet_innova.png", alt: "Innova Crysta – Premium Cab", caption: "Innova Crysta", span: "" },
  { src: "/images/fleet_tempo.png", alt: "Tempo Traveller – Group Travel", caption: "Tempo Traveller", span: "" },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Gallery() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Gallery"
          title="Our Fleet &"
          highlight="Journeys"
          subtitle="A glimpse of our premium vehicles and the comfort we deliver on every trip."
        />

        {/* Masonry grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4"
        >
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.src}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              onClick={() => setLightbox({ src: item.src, alt: item.alt })}
              className={`relative group rounded-2xl overflow-hidden bg-[#1E293B] border border-white/8 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                <ZoomIn size={20} className="text-white mb-2" />
                <span className="text-sm font-semibold text-white">{item.caption}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
        >
          <motion.div
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </motion.div>
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold"
            aria-label="Close lightbox"
          >
            ×
          </button>
        </motion.div>
      )}
    </section>
  );
}
