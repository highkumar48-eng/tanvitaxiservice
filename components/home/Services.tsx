"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plane, Navigation, MapPin, ArrowRight, RefreshCw, Briefcase, Bus, ChevronRight
} from "lucide-react";
import { WHATSAPP_PREFILL } from "@/lib/constants";

const services = [
  {
    icon: Plane,
    title: "Airport Transfer",
    subtitle: "IGI Airport T1 · T2 · T3",
    description: "Reliable airport pick-up and drop with live flight tracking. Never miss a flight or wait too long for your cab.",
    highlights: ["Flight tracking", "Meet & Greet", "24×7 Available"],
    accentColor: "#1B4FD8",
  },
  {
    icon: Navigation,
    title: "Local Taxi",
    subtitle: "Gurugram · Delhi NCR",
    description: "Comfortable city rides for shopping, appointments, office commutes or daily errands — always at your service.",
    highlights: ["Hourly packages", "City tours", "Office drops"],
    accentColor: "#16A34A",
  },
  {
    icon: MapPin,
    title: "Outstation Taxi",
    subtitle: "Pan India",
    description: "Long distance travel made comfortable. Delhi to Jaipur, Agra, Chandigarh, Manali and beyond.",
    highlights: ["Experienced drivers", "Clean vehicles", "Night driving"],
    accentColor: "#0891B2",
  },
  {
    icon: ArrowRight,
    title: "One Way Taxi",
    subtitle: "Save on return cost",
    description: "Only pay for the distance you travel. No round-trip charges — perfect for business or one-way journeys.",
    highlights: ["Best rates", "No hidden fees", "GST invoice"],
    accentColor: "#7C3AED",
  },
  {
    icon: RefreshCw,
    title: "Round Trip Taxi",
    subtitle: "Go & Come Back",
    description: "Plan a full day trip or extended travel and return safely. Driver waits at the destination for you.",
    highlights: ["Driver waiting", "Flexible stops", "Hill stations"],
    accentColor: "#DC2626",
  },
  {
    icon: Briefcase,
    title: "Corporate Taxi",
    subtitle: "B2B & Office Cabs",
    description: "Dedicated cab solutions for corporate offices, business meetings, airport transfers and employee transport.",
    highlights: ["Monthly billing", "Multiple vehicles", "Priority support"],
    accentColor: "#1B4FD8",
  },
  {
    icon: Bus,
    title: "Tempo Traveller",
    subtitle: "Group travel · 12–17 seats",
    description: "Ideal for family trips, pilgrimages, office outings and school tours. Spacious, comfortable, and AC-equipped.",
    highlights: ["12–17 seater", "Group packages", "AC available"],
    accentColor: "#0891B2",
  },
];

interface ServicesProps {
  limit?: number;
  showViewAll?: boolean;
}

export default function Services({ limit = 7, showViewAll = false }: ServicesProps) {
  const displayedServices = services.slice(0, limit);

  return (
    <section id="services" className="py-16 md:py-20 bg-[#F8FAFC]" aria-label="Taxi Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-12">
          <span className="text-xs font-bold text-[#1B4FD8] uppercase tracking-widest block mb-3">
            Our Taxi Services
          </span>
          <div className="w-10 h-0.5 bg-[#1B4FD8] mb-5" />
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B3E]">
              Everything You Need, One Number
            </h2>
            {showViewAll && (
              <Link
                href="/taxi-services"
                className="flex items-center gap-1.5 text-sm font-semibold text-[#1B4FD8] hover:gap-2.5 transition-all"
              >
                View All Services <ChevronRight size={16} />
              </Link>
            )}
          </div>
          <p className="text-[#64748B] mt-2 max-w-2xl">
            From quick city rides to long outstation journeys — available 24×7, all services under one brand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {displayedServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
                className="group bg-white border border-[#E2E8F0] rounded-xl p-5 flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                style={{ borderTopColor: service.accentColor, borderTopWidth: "3px" }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 flex-shrink-0"
                  style={{ backgroundColor: `${service.accentColor}15` }}
                >
                  <Icon size={20} style={{ color: service.accentColor }} />
                </div>

                <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-1">
                  {service.subtitle}
                </p>
                <h3 className="text-base font-bold text-[#0D1B3E] mb-2">{service.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed flex-1 mb-4">
                  {service.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-4">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-[#374151]">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: service.accentColor }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                <a
                  href={WHATSAPP_PREFILL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-semibold mt-auto transition-all duration-150"
                  style={{ color: service.accentColor }}
                >
                  Enquire Now <ChevronRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
