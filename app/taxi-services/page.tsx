"use client";

import Image from "next/image";
import Link from "next/link";
import { Plane, Navigation, ArrowRight, RefreshCw, MapPin, Briefcase, Bus, Gift, Check } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const SERVICES_DETAIL = [
  {
    id: "airport",
    icon: Plane,
    title: "Airport Transfers",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
    desc: "24/7 dedicated airport pickup and drop services to and from Indira Gandhi International (IGI) Airport, Terminals 1, 2, and 3. We monitor flight schedules to guarantee timely pickup.",
    points: [
      "Flight arrival monitoring",
      "Paging and luggage assistance",
      "Fixed rates, no midnight surcharges",
      "Clean, air-conditioned Sedans & SUVs"
    ]
  },
  {
    id: "local",
    icon: Navigation,
    title: "Local Cab Service",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800",
    desc: "Hourly packages for city travel, shopping tours, business conferences, or family functions in Gurugram, Delhi, Noida, and Faridabad.",
    points: [
      "Flexible hourly packages (4h/40km, 8h/80km, 12h/120km)",
      "Unlimited stops and detours",
      "Professional route optimization",
      "Courteous, local-route specialist drivers"
    ]
  },
  {
    id: "outstation",
    icon: MapPin,
    title: "Outstation Trips (One-Way & Round-Trip)",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
    desc: "Intercity taxi services from Delhi NCR to popular destinations like Jaipur, Agra, Chandigarh, Haridwar, Dehradun, Manali, Shimla, and Nainital.",
    points: [
      "One-Way discount cabs available",
      "Round-trip packages with night allowances included",
      "Interstate permit and toll clearance handled by drivers",
      "High-speed highway-tested SUVs and Sedans"
    ]
  },
  {
    id: "corporate",
    icon: Briefcase,
    title: "Corporate Travel Management",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    desc: "Tailored transit solutions for business executives, delegates, daily employee commutes, and monthly car rentals.",
    points: [
      "Corporate priority customer service line",
      "GST-compliant billing and consolidated invoicing",
      "Confidentiality and non-disclosure guarantees",
      "Premium, unbranded vehicle options"
    ]
  },
  {
    id: "wedding",
    icon: Gift,
    title: "Wedding & Special Events",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    desc: "Make your special day memorable with our premium fleet. We provide convoy packages, guest transport coordination, and luxury cars.",
    points: [
      "Coordinated guest pickup grids",
      "Cleaned, detailed, and decorated wedding cars",
      "Uniformed, dedicated chauffeurs",
      "Tempo Travellers for large family transport"
    ]
  },
  {
    id: "tempo",
    icon: Bus,
    title: "Tempo Traveller (12 - 17 Seater)",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
    desc: "Spacious group travel solution with push-back luxury seating, high-end entertainment systems, and generous luggage capacity.",
    points: [
      "12, 14, and 17 seat options",
      "Comfortable long-haul suspension",
      "Individual AC vents and charging sockets",
      "Perfect for family trips and corporate outings"
    ]
  }
];

export default function TaxiServicesPage() {
  return (
    <div className="bg-[#081423] min-h-screen text-white pt-8">
      {/* Page Header */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Services Portfolio"
          title="Professional Transit"
          highlight="Solutions"
          subtitle="Explore our comprehensive range of taxi and travel services, tailored for corporate executives, tourists, and families."
        />
      </section>

      {/* Services Breakdown */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {SERVICES_DETAIL.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;

          return (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Grid Column */}
              <div className={`col-span-1 lg:col-span-6 relative h-[380px] bg-brand-card border border-brand-border rounded-xl overflow-hidden ${
                isEven ? "lg:order-1" : "lg:order-2"
              }`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Text Column */}
              <div className={`col-span-1 lg:col-span-6 flex flex-col justify-center ${
                isEven ? "lg:order-2" : "lg:order-1"
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-card border border-brand-border flex items-center justify-center rounded-lg">
                    <Icon className="text-brand-blue" size={20} />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-brand-text-sec font-light text-sm sm:text-base leading-relaxed mb-6">
                  {service.desc}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {service.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs text-brand-text-sec">
                      <Check className="text-brand-green flex-shrink-0 mt-0.5" size={14} />
                      <span className="font-light">{point}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <Link href={`/booking?service=${service.id}`}>
                    <Button variant="primary">
                      Book {service.title}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Brand Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="brand-divider" />
      </div>

      {/* Pricing / Booking Promo CTA */}
      <section className="py-24 bg-[#101826]/40">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">
            NEED A CUSTOM LOGISTICS PLAN?
          </h2>
          <p className="text-brand-text-sec text-sm font-light max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you need monthly car contracts for your corporate office, group transit fleet coordination, or outstation family tour packages, our advisors are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button variant="primary" className="w-full sm:w-auto">
                Fare Calculator
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" className="w-full sm:w-auto">
                Contact Corporate Desk
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
