"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const destinations = [
  { id: "agra", name: "Agra", image: "/images/hero_bg.png" },
  { id: "mathura", name: "Mathura", image: "/images/hero_bg.png" },
  { id: "vrindavan", name: "Vrindavan", image: "/images/hero_bg.png" },
  { id: "haridwar", name: "Haridwar", image: "/images/hero_bg.png" },
  { id: "rishikesh", name: "Rishikesh", image: "/images/hero_bg.png" },
  { id: "dehradun", name: "Dehradun", image: "/images/hero_bg.png" },
  { id: "mussoorie", name: "Mussoorie", image: "/images/hero_bg.png" },
  { id: "kullu", name: "Kullu", image: "/images/hero_bg.png" },
  { id: "kasauli", name: "Kasauli", image: "/images/hero_bg.png" },
  { id: "shimla", name: "Shimla", image: "/images/hero_bg.png" },
  { id: "kufri", name: "Kufri", image: "/images/hero_bg.png" },
  { id: "nainital", name: "Nainital", image: "/images/hero_bg.png" },
  { id: "solan", name: "Solan", image: "/images/hero_bg.png" },
  { id: "binsar", name: "Binsar", image: "/images/hero_bg.png" },
  { id: "ranikhet", name: "Ranikhet", image: "/images/hero_bg.png" },
  { id: "corbett", name: "Jim Corbett", image: "/images/hero_bg.png" },
  { id: "haldwani", name: "Haldwani", image: "/images/hero_bg.png" },
  { id: "almora", name: "Almora", image: "/images/hero_bg.png" },
  { id: "chardham", name: "Chardham Yatra", image: "/images/hero_bg.png" },
  { id: "golden-temple", name: "Golden Temple", image: "/images/hero_bg.png" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 md:py-28 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Popular Places"
          title="Top Outstation"
          highlight="Destinations"
          subtitle="Explore the most loved cities and tourist spots we frequently travel to."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {destinations.map((dest) => (
            <motion.div
              key={dest.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative h-40 md:h-56 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-center text-lg">{dest.name}</h3>
                <div className="w-8 h-1 bg-[#D4AF37] mx-auto mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
