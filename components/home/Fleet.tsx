"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Briefcase, Wind, IndianRupee, ChevronRight } from "lucide-react";
import { WHATSAPP_PREFILL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const fleet = [
  {
    id: "sedan",
    name: "Executive Sedan",
    subtitle: "Swift Dzire · Honda City · Etios",
    image: "/images/fleet_swift_dzire.png",
    passengers: 4,
    luggage: "2 bags",
    startingFare: "₹12/km",
    description: "Ideal for solo or couple travel. Comfortable, fuel-efficient, perfect for city and outstation trips.",
    tags: ["Local", "Outstation", "Airport"],
    featured: false,
  },
  {
    id: "suv",
    name: "Premium SUV",
    subtitle: "Ertiga · Scorpio · XL6",
    image: "/images/fleet_suzuki_ertiga.png",
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
    image: "/images/fleet_innova_crysta.png",
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
    image: "/images/fleet_tempo_traveller.png",
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

export default function Fleet({ limit = 4, showViewAll = true }: FleetProps) {
  const displayedFleet = fleet.slice(0, limit);

  return (
    <section id="fleet" className="py-24 bg-[#101826]/40 border-b border-brand-border" aria-label="Our Fleet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-brand-blue uppercase tracking-[2px] block mb-3">
              Our Fleet
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              CHOOSE YOUR PERFECT RIDE
            </h2>
            <p className="text-brand-text-sec font-light text-xs sm:text-sm mt-2 max-w-2xl">
              Clean, well-maintained, and inspected before every trip. All vehicles come with AC and a verified driver.
            </p>
          </div>
          {showViewAll && (
            <Link href="/fleet" className="flex-shrink-0">
              <Button variant="secondary" className="gap-2">
                View Fleet Details <ChevronRight size={14} />
              </Button>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedFleet.map((vehicle, i) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              className={`group relative flex flex-col rounded-xl overflow-hidden border transition-all duration-350 bg-brand-card hover:border-brand-blue ${
                vehicle.featured ? "border-brand-blue/60" : "border-brand-border"
              }`}
            >
              {vehicle.featured && (
                <div className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-brand-blue text-white text-[9px] font-bold uppercase tracking-wider">
                  Popular
                </div>
              )}

              {/* Vehicle image */}
              <div className="relative h-48 bg-[#081423] overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.name} — Tanvi Taxi Services`}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <p className="text-[9px] font-bold text-brand-text-sec mb-1 uppercase tracking-wider">{vehicle.subtitle}</p>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{vehicle.name}</h3>
                <p className="text-xs text-brand-text-sec font-light leading-relaxed mb-4 flex-1">{vehicle.description}</p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="flex items-center gap-1.5 text-xs text-brand-text-sec">
                    <Users size={12} className="text-brand-blue flex-shrink-0" />
                    <span className="font-light">{vehicle.passengers} Seats</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-brand-text-sec">
                    <Briefcase size={12} className="text-brand-blue flex-shrink-0" />
                    <span className="font-light truncate">{vehicle.luggage}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-brand-text-sec">
                    <Wind size={12} className="text-brand-blue flex-shrink-0" />
                    <span className="font-light">AC Cabin</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-brand-text-sec">
                    <IndianRupee size={12} className="text-brand-blue flex-shrink-0" />
                    <span className="font-light">{vehicle.startingFare}</span>
                  </div>
                </div>

                {/* CTA */}
                <a href={WHATSAPP_PREFILL()} target="_blank" rel="noopener noreferrer" className="mt-auto">
                  <Button variant={vehicle.featured ? "primary" : "secondary"} fullWidth size="sm">
                    Book Ride
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
