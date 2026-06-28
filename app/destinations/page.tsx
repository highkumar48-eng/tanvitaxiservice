"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Compass, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const DESTINATIONS_DATA = [
  {
    name: "Agra",
    state: "Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800",
    distance: "230 km (via Yamuna Expressway)",
    travelTime: "Approx. 4 Hours",
    description: "Home to the iconic Taj Mahal, Agra Fort, and Fatehpur Sikri. Perfect same-day trip route from Gurugram/Delhi NCR."
  },
  {
    name: "Jaipur",
    state: "Rajasthan",
    image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&q=80&w=800",
    distance: "270 km (via Delhi-Jaipur Highway)",
    travelTime: "Approx. 5 Hours",
    description: "The capital of Rajasthan, showcasing Rajput heritage, forts, royal palaces, and vibrant artisanal markets."
  },
  {
    name: "Mathura & Vrindavan",
    state: "Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=800",
    distance: "160 km (via Yamuna Expressway)",
    travelTime: "Approx. 3 Hours",
    description: "The mythological and historical birthplace of Lord Krishna. Visited by millions for devotion and architecture."
  },
  {
    name: "Haridwar & Rishikesh",
    state: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1598977123418-45f04b6141bc?auto=format&fit=crop&q=80&w=800",
    distance: "240 km",
    travelTime: "Approx. 5.5 Hours",
    description: "Ganges River gateway. Renowned for Ganga Aarti ceremonies, yoga hubs, spiritual ashrams, and adventure rafting."
  },
  {
    name: "Shimla",
    state: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&q=80&w=800",
    distance: "360 km",
    travelTime: "Approx. 8 Hours",
    description: "The colonial-era summer capital. Set against pine-forested Himalayan ridges. Ideal holiday destination."
  },
  {
    name: "Nainital",
    state: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&q=80&w=800",
    distance: "320 km",
    travelTime: "Approx. 7 Hours",
    description: "Scenic resort town built around a pear-shaped emerald lake. Excellent getaway for summer retreat."
  }
];

export default function DestinationsPage() {
  return (
    <div className="bg-[#081423] min-h-screen text-white pt-8">
      {/* Page Header */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Popular Routes"
          title="Outstation"
          highlight="Destinations"
          subtitle="Discover North India's most popular tourist hubs. Safe, customized inter-state travel guides and pricing structures."
        />
      </section>

      {/* Grid */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS_DATA.map((dest, idx) => (
            <Card key={idx} variant="glass" className="flex flex-col h-full hover:border-brand-blue" padding="none">
              {/* Photo */}
              <div className="relative h-64 bg-brand-bg">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-4 left-4 bg-brand-blue/90 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 flex items-center gap-1">
                  <MapPin size={10} />
                  <span>{dest.state}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-brand-text-sec font-light leading-relaxed mb-4">
                    {dest.description}
                  </p>

                  <div className="bg-brand-bg-sec border border-brand-border p-3 grid grid-cols-2 gap-2 text-center my-4 rounded-lg">
                    <div>
                      <div className="text-[10px] font-bold text-brand-text-sec uppercase tracking-[0.5px]">Distance</div>
                      <div className="text-xs font-bold text-white uppercase mt-0.5">{dest.distance.split("(")[0].trim()}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-brand-text-sec uppercase tracking-[0.5px]">Duration</div>
                      <div className="text-xs font-bold text-white uppercase mt-0.5">{dest.travelTime}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-border flex items-center justify-between gap-4">
                  <span className="text-[10px] font-bold text-brand-text-sec uppercase tracking-[1px] flex items-center gap-1">
                    <Compass size={12} className="text-brand-blue" />
                    Custom Routings
                  </span>
                  <Link href={`/booking?to=${encodeURIComponent(dest.name)}`}>
                    <Button variant="primary" size="sm" className="gap-1">
                      Book Trip
                      <ArrowUpRight size={12} />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
