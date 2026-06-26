"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Briefcase, Wind, IndianRupee } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { WHATSAPP_PREFILL } from "@/lib/constants";

const fleet = [
  {
    id: "sedan",
    name: "Sedan",
    subtitle: "Swift Dzire · Honda City · Etios",
    image: "/images/fleet_sedan.png",
    passengers: 4,
    luggage: "2 bags",
    ac: true,
    startingFare: "₹12/km",
    description: "Perfect for solo or couple travel. Comfortable, fuel-efficient, and ideal for city and outstation trips.",
    tags: ["Local", "Outstation", "Airport"],
  },
  {
    id: "suv",
    name: "SUV",
    subtitle: "Ertiga · Scorpio · Crysta",
    image: "/images/fleet_suv.png",
    passengers: 6,
    luggage: "4 bags",
    ac: true,
    startingFare: "₹16/km",
    description: "Spacious and powerful. Great for families and groups who want extra legroom and luggage space.",
    tags: ["Family", "Outstation", "Hills"],
  },
  {
    id: "innova",
    name: "Innova Crysta",
    subtitle: "Toyota Innova Crysta",
    image: "/images/fleet_innova.png",
    passengers: 7,
    luggage: "5 bags",
    ac: true,
    startingFare: "₹18/km",
    description: "The gold standard for comfort. Preferred by families, corporates, and wedding parties.",
    tags: ["Premium", "Corporate", "Wedding"],
    featured: true,
  },
  {
    id: "tempo",
    name: "Tempo Traveller",
    subtitle: "Force · 12–17 Seater",
    image: "/images/fleet_tempo.png",
    passengers: 17,
    luggage: "Overhead + boot",
    ac: true,
    startingFare: "₹28/km",
    description: "Built for groups. Comfortable seating, AC, push-back seats, and plenty of luggage space.",
    tags: ["Groups", "Tours", "Pilgrimages"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" as const },
  }),
};

export default function Fleet() {
  return (
    <section id="fleet" className="py-20 md:py-28 bg-[#080E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Fleet"
          title="Choose Your"
          highlight="Perfect Ride"
          subtitle="Clean, well-maintained, and inspected before every trip. Every vehicle comes with AC and a verified driver."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {fleet.map((vehicle, i) => (
            <motion.div
              key={vehicle.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`group relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:shadow-black/30 ${
                vehicle.featured
                  ? "border-[#D4AF37]/40 shadow-[0_0_30px_rgba(212,175,55,0.1)]"
                  : "border-white/8 hover:border-white/15"
              } bg-[#1E293B]`}
            >
              {/* Featured badge */}
              {vehicle.featured && (
                <div className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-[#D4AF37] text-[#0F172A] text-[10px] font-bold uppercase rounded-full tracking-wider">
                  Most Popular
                </div>
              )}

              {/* Image */}
              <div className="relative h-44 bg-gradient-to-b from-[#0F172A] to-[#1E293B] overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.name} - Tanvi Taxi Services`}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <p className="text-xs text-slate-500 mb-0.5">{vehicle.subtitle}</p>
                <h3 className="text-xl font-bold text-white mb-1">{vehicle.name}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{vehicle.description}</p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-2.5 mb-5">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Users size={13} className="text-[#D4AF37] flex-shrink-0" />
                    {vehicle.passengers} Passengers
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Briefcase size={13} className="text-[#D4AF37] flex-shrink-0" />
                    {vehicle.luggage}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Wind size={13} className="text-[#D4AF37] flex-shrink-0" />
                    Air Conditioned
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <IndianRupee size={13} className="text-[#D4AF37] flex-shrink-0" />
                    From {vehicle.startingFare}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {vehicle.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-[10px] font-medium text-slate-400 bg-white/5 border border-white/8 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={WHATSAPP_PREFILL("", "")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto w-full text-center py-3 rounded-xl text-sm font-bold transition-all duration-200 active:scale-95 ${
                    vehicle.featured
                      ? "bg-[#D4AF37] hover:bg-[#F0D060] text-[#0F172A] shadow-lg shadow-yellow-600/20"
                      : "bg-white/8 hover:bg-white/15 text-white border border-white/10"
                  }`}
                >
                  Book This Vehicle
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
