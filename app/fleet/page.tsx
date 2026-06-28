"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Briefcase, Wind, Compass, Sparkles, Check } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const FLEET_DATA = [
  {
    id: "sedan",
    name: "Executive Sedan",
    models: "Maruti Suzuki Dzire, Toyota Etios, Honda City",
    image: "/images/fleet_swift_dzire.png",
    passengers: 4,
    luggage: 2,
    startingFare: "₹12/km",
    description: "Ideal for business travel, airport runs, and small families. Offers a smooth and quiet cabin experience.",
    features: ["Climate Control AC", "Ample luggage trunk", "Bluetooth Audio System", "GPS tracking enabled"]
  },
  {
    id: "suv",
    name: "Premium SUV",
    models: "Maruti Suzuki Ertiga, Mahindra Scorpio, Toyota Rumion",
    image: "/images/fleet_suzuki_ertiga.png",
    passengers: 6,
    luggage: 4,
    startingFare: "₹16/km",
    description: "Spacious with higher road visibility. Best suited for family weekend gateways, group transit, and hill drives.",
    features: ["Dual Zone AC", "Rear seating charge ports", "Roof carrier (on demand)", "High clearance suspension"]
  },
  {
    id: "innova",
    name: "Luxury Toyota Innova Crysta",
    models: "Toyota Innova Crysta (7-Seater Premium)",
    image: "/images/fleet_innova_crysta.png",
    passengers: 7,
    luggage: 5,
    startingFare: "₹18/km",
    description: "The gold standard of Indian highway cruising. Offering plush leather seating, superior isolation, and safety.",
    features: ["Captain seats middle row", "Ambient roof lighting", "Superior highway isolation", "Uniformed chauffeur"]
  },
  {
    id: "tempo",
    name: "Luxury Tempo Traveller",
    models: "Force Luxury (12-Seater / 17-Seater)",
    image: "/images/fleet_tempo_traveller.png",
    passengers: 17,
    luggage: 12,
    startingFare: "₹28/km",
    description: "Engineered for group tours, corporate event relays, and pilgrimage journeys. Fitted with individual pushback seats.",
    features: ["Individual AC vents", "Smart LCD TV system", "Separate luggage compartment", "High roof layout"]
  }
];

export default function FleetPage() {
  return (
    <div className="bg-[#081423] min-h-screen text-white pt-8">
      {/* Page Header */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Motor Pool"
          title="Engineered for"
          highlight="Comfort"
          subtitle="All vehicles in our pool are commercially licensed, comprehensively insured, and cleaned daily."
        />
      </section>

      {/* Fleet Showcase */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {FLEET_DATA.map((vehicle, idx) => (
            <div key={vehicle.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-brand-border pb-16 last:border-0 last:pb-0">
              {/* Photo Column */}
              <div className="lg:col-span-5 relative h-72 sm:h-96 bg-brand-card border border-brand-border rounded-xl overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Detail Spec Column */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="text-brand-blue" size={16} />
                    <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">
                      {vehicle.models}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">
                    {vehicle.name}
                  </h3>
                  <p className="text-brand-text-sec font-light text-sm leading-relaxed mb-6">
                    {vehicle.description}
                  </p>

                  {/* Spec Cells (Inspired by BMW technical-specs) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    {[
                      { val: vehicle.passengers, label: "Max Seating" },
                      { val: `${vehicle.luggage} bags`, label: "Luggage Space" },
                      { val: "AC", label: "Cabin Air" },
                      { val: vehicle.startingFare, label: "Base Fare" },
                    ].map((spec, sIdx) => (
                      <div key={sIdx} className="bg-brand-bg-sec border border-brand-border p-4 text-center rounded-lg">
                        <div className="text-xl font-bold text-white uppercase">{spec.val}</div>
                        <div className="text-[9px] font-bold text-brand-text-sec uppercase tracking-[1px] mt-1">
                          {spec.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features List */}
                  <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-3.5">
                    Vehicle Specifications
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                    {vehicle.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-brand-text-sec">
                        <Check className="text-brand-green flex-shrink-0" size={12} />
                        <span className="font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`/booking?vehicle=${vehicle.id}`} className="flex-1">
                    <Button variant="primary" className="w-full">
                      Book Now
                    </Button>
                  </Link>
                  <Link href="/contact" className="flex-1">
                    <Button variant="secondary" className="w-full">
                      Enquire Fleet Options
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
