"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Briefcase, Wind, IndianRupee, ChevronRight } from "lucide-react";
import { WHATSAPP_PREFILL } from "@/lib/constants";

const fleet = [
  {
    id: "sedan",
    name: "Sedan",
    subtitle: "Swift Dzire · Honda City · Etios",
    image: "/images/fleet_sedan.png",
    passengers: 4,
    luggage: "2 bags",
    startingFare: "₹12/km",
    description: "Ideal for solo or couple travel. Comfortable, fuel-efficient, perfect for city and outstation trips.",
    tags: ["Local", "Outstation", "Airport"],
    featured: false,
  },
  {
    id: "suv",
    name: "SUV",
    subtitle: "Ertiga · Scorpio · XL6",
    image: "/images/fleet_suv.png",
    passengers: 6,
    luggage: "4 bags",
    startingFare: "₹16/km",
    description: "Spacious and powerful. Great for families and groups who need extra legroom and luggage space.",
    tags: ["Family", "Outstation", "Hills"],
    featured: false,
  },
  {
    id: "innova",
    name: "Innova Crysta",
    subtitle: "Toyota Innova Crysta",
    image: "/images/fleet_innova.png",
    passengers: 7,
    luggage: "5 bags",
    startingFare: "₹18/km",
    description: "The preferred choice for families, corporates and wedding parties. Premium comfort on every journey.",
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
    startingFare: "₹28/km",
    description: "Built for groups. Comfortable seating, AC, push-back seats, and ample luggage space for tours.",
    tags: ["Groups", "Tours", "Pilgrimages"],
    featured: false,
  },
];

interface FleetProps {
  limit?: number;
  showViewAll?: boolean;
}

export default function Fleet({ limit = 4, showViewAll = false }: FleetProps) {
  const displayedFleet = fleet.slice(0, limit);

  return (
    <section id="fleet" className="py-16 md:py-20 bg-[#0D1B3E]" aria-label="Our Fleet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest block mb-3">
            Our Fleet
          </span>
          <div className="w-10 h-0.5 bg-[#1B4FD8] mb-5" />
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Choose Your Perfect Ride
            </h2>
            {showViewAll && (
              <Link
                href="/fleet"
                className="flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:gap-2.5 transition-all"
              >
                View All Vehicles <ChevronRight size={16} />
              </Link>
            )}
          </div>
          <p className="text-[#94A3B8] mt-2 max-w-2xl">
            Clean, well-maintained, and inspected before every trip. All vehicles come with AC and a verified driver.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayedFleet.map((vehicle, i) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className={`group relative flex flex-col rounded-xl overflow-hidden border transition-all duration-200 hover:-translate-y-1 ${
                vehicle.featured
                  ? "border-[#1B4FD8]/50 bg-[#0F1E45]"
                  : "border-[#1E3264] bg-[#162040] hover:border-[#1B4FD8]/30"
              }`}
            >
              {vehicle.featured && (
                <div className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-[#1B4FD8] text-white text-[10px] font-bold uppercase rounded-full tracking-wider">
                  Most Popular
                </div>
              )}

              {/* Vehicle image */}
              <div className="relative h-44 bg-[#0D1B3E] overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.name} — Tanvi Taxi Services`}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <p className="text-[10px] text-[#64748B] mb-0.5 uppercase tracking-wider">{vehicle.subtitle}</p>
                <h3 className="text-lg font-bold text-white mb-2">{vehicle.name}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-4 flex-1">{vehicle.description}</p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
                    <Users size={12} className="text-[#2563EB] flex-shrink-0" />
                    {vehicle.passengers} Seats
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
                    <Briefcase size={12} className="text-[#2563EB] flex-shrink-0" />
                    {vehicle.luggage}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
                    <Wind size={12} className="text-[#2563EB] flex-shrink-0" />
                    Air Conditioned
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
                    <IndianRupee size={12} className="text-[#2563EB] flex-shrink-0" />
                    From {vehicle.startingFare}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {vehicle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-medium text-[#94A3B8] bg-white/5 border border-[#1E3264] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={WHATSAPP_PREFILL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto w-full text-center py-2.5 rounded-lg text-sm font-bold transition-all duration-200 active:scale-95 ${
                    vehicle.featured
                      ? "bg-[#1B4FD8] hover:bg-[#1338A8] text-white"
                      : "bg-white/8 hover:bg-white/15 text-white border border-[#1E3264] hover:border-[#1B4FD8]/40"
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
