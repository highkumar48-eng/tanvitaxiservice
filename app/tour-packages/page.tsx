"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Calendar, Check, X, Shield } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const PACKAGES = [
  {
    title: "Agra Day Tour",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800",
    duration: "Same Day (12-14 Hours)",
    route: "Gurugram/Delhi → Agra → Gurugram/Delhi",
    highlights: ["Taj Mahal guided visit", "Agra Fort exploration", "Yamuna Expressway transit"],
    price: "₹3,999 onwards"
  },
  {
    title: "Mathura & Vrindavan Spiritual Tour",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800",
    duration: "Same Day / 1 Night 2 Days",
    route: "Gurugram/Delhi → Mathura → Vrindavan → Delhi",
    highlights: ["Krishna Janmabhoomi temple", "Prem Mandir Vrindavan", "Banke Bihari Mandir VIP Darshan assistance"],
    price: "₹3,499 onwards"
  },
  {
    title: "Jaipur Weekend Gateway",
    image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&q=80&w=800",
    duration: "1 Night 2 Days / 2 Nights 3 Days",
    route: "Gurugram/Delhi → Hawa Mahal → Amer Fort → Chokhi Dhani",
    highlights: ["Amer Fort elephant ride/jeep visit", "Hawa Mahal & City Palace photography", "Heritage dining experience"],
    price: "₹8,499 onwards"
  },
  {
    title: "Haridwar & Rishikesh Spiritual Adventure",
    image: "https://images.unsplash.com/photo-1545208935-2133b3079a70?auto=format&fit=crop&q=80&w=800",
    duration: "2 Nights 3 Days",
    route: "Delhi NCR → Har Ki Pauri Haridwar → Laxman Jhula Rishikesh",
    highlights: ["Ganga Aarti at Har Ki Pauri", "White water rafting in Rishikesh", "Ram Jhula & Beatles Ashram"],
    price: "₹9,999 onwards"
  },
  {
    title: "Nainital & Jim Corbett Safari",
    image: "https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&q=80&w=800",
    duration: "3 Nights 4 Days",
    route: "Delhi NCR → Nainital Lake → Jim Corbett National Park",
    highlights: ["Boating at Naini Lake", "Open Jeep Tiger Safari in Corbett", "Mall Road shopping"],
    price: "₹12,499 onwards"
  },
  {
    title: "Shimla & Kufri Gateway",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800",
    duration: "3 Nights 4 Days",
    route: "Delhi NCR → Shimla Mall Road → Kufri adventure park",
    highlights: ["Mall Road & Ridge walk", "Yak ride at Kufri", "Pine forest trekking"],
    price: "₹14,999 onwards"
  }
];

export default function TourPackagesPage() {
  return (
    <div className="bg-[#081423] min-h-screen text-white pt-8">
      {/* Hero Intro */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Popular Itineraries"
          title="Curated Travel"
          highlight="Packages"
          subtitle="Handcrafted road travel itineraries. Experience comfortable highway transit, guided sightseeing, and clean stops."
        />
      </section>

      {/* Packages Grid */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, idx) => (
            <Card key={idx} variant="glass" className="flex flex-col h-full hover:border-brand-blue" padding="none">
              {/* Photo */}
              <div className="relative h-64 bg-brand-bg">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-brand-blue text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1">
                  {pkg.price}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-brand-text-sec mb-2">
                    <Clock size={12} className="text-brand-blue" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-brand-text-sec mb-4">
                    <MapPin size={12} className="text-brand-green" />
                    <span className="truncate">{pkg.route}</span>
                  </div>

                  <div className="brand-divider my-4" />

                  <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-2.5">
                    Package Highlights
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {pkg.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-brand-text-sec">
                        <Check size={12} className="text-brand-green mt-0.5 flex-shrink-0" />
                        <span className="font-light">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-brand-border">
                  <Link href={`/booking?package=${encodeURIComponent(pkg.title)}`}>
                    <Button variant="primary" fullWidth>
                      Enquire Details
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Exclusions & Inclusions */}
      <section className="py-24 bg-[#101826]/40 border-t border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Travel Terms"
            title="What is Included in"
            highlight="Our Tours"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <Card variant="solid" className="border-l-4 border-l-brand-green" padding="lg">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                <Check className="text-brand-green" size={16} />
                Guaranteed Inclusions
              </h3>
              <ul className="space-y-4">
                {[
                  "Clean, commercial-licensed, air-conditioned vehicle",
                  "Dedicated commercial chauffeur for the entire trip duration",
                  "All inter-state transit permits and tourist taxes",
                  "Driver allowances, night halting fees, and meal margins",
                  "Complimentary bottled water and newspapers during transit"
                ].map((item, idx) => (
                  <li key={idx} className="text-xs text-brand-text-sec font-light flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-brand-green mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card variant="solid" className="border-l-4 border-l-red-500" padding="lg">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                <X className="text-red-500" size={16} />
                Standard Exclusions
              </h3>
              <ul className="space-y-4">
                {[
                  "State border tolls and highway tolls (billed at actual fastag records)",
                  "Monument entry tickets, camera fees, and local tourist guide charges",
                  "Hotel stays, meals, snacks, and personal room services",
                  "Tips and gratuities to local hotels, guides, or driver",
                  "Extra kilometers driven beyond package route boundaries"
                ].map((item, idx) => (
                  <li key={idx} className="text-xs text-brand-text-sec font-light flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-red-500 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
