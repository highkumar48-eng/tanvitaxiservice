"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Plane, Navigation, MapPin, ArrowRight, ChevronRight } from "lucide-react";
import { WHATSAPP_PREFILL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const services = [
  {
    icon: Plane,
    title: "Airport Transfer",
    subtitle: "IGI Airport T1 · T2 · T3",
    description: "Reliable airport pick-up and drop with live flight tracking. Never miss a flight or wait too long for your cab.",
    highlights: ["Flight tracking", "Meet & Greet", "24×7 Available"],
    accentColor: "#2D7FF9",
  },
  {
    icon: Navigation,
    title: "Local Taxi",
    subtitle: "Gurugram · Delhi NCR",
    description: "Comfortable city rides for shopping, appointments, office commutes or daily errands — always at your service.",
    highlights: ["Hourly packages", "City tours", "Office drops"],
    accentColor: "#12B76A",
  },
  {
    icon: MapPin,
    title: "Outstation Taxi",
    subtitle: "Pan India",
    description: "Long distance travel made comfortable. Delhi to Jaipur, Agra, Chandigarh, Manali and beyond.",
    highlights: ["Experienced drivers", "Clean vehicles", "Night driving"],
    accentColor: "#2D7FF9",
  },
  {
    icon: ArrowRight,
    title: "One Way Taxi",
    subtitle: "Save on return cost",
    description: "Only pay for the distance you travel. No round-trip charges — perfect for business or one-way journeys.",
    highlights: ["Best rates", "No hidden fees", "GST invoice"],
    accentColor: "#12B76A",
  },
];

interface ServicesProps {
  limit?: number;
  showViewAll?: boolean;
}

export default function Services({ limit = 4, showViewAll = true }: ServicesProps) {
  const displayedServices = services.slice(0, limit);

  return (
    <section id="services" className="py-24 bg-[#081423] border-b border-brand-border" aria-label="Taxi Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-brand-blue uppercase tracking-[2px] block mb-3">
              Our Taxi Services
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              EVERYTHING YOU NEED, ONE NUMBER
            </h2>
            <p className="text-brand-text-sec font-light text-xs sm:text-sm mt-2 max-w-2xl">
              From quick city rides to long outstation journeys — available 24×7, all services under one brand.
            </p>
          </div>
          {showViewAll && (
            <Link href="/taxi-services" className="flex-shrink-0">
              <Button variant="secondary" className="gap-2">
                View All Services <ChevronRight size={14} />
              </Button>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                className="bg-brand-card border border-brand-border rounded-xl p-6 flex flex-col justify-between hover:border-brand-blue transition-all duration-300"
                style={{ borderTop: `2px solid ${service.accentColor}` }}
              >
                <div>
                  {/* Icon */}
                  <div className="w-10 h-10 bg-brand-bg-sec border border-brand-border flex items-center justify-center mb-4 text-brand-blue">
                    <Icon size={18} />
                  </div>

                  <p className="text-[9px] font-bold text-brand-text-sec uppercase tracking-[1.5px] mb-1">
                    {service.subtitle}
                  </p>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{service.title}</h3>
                  <p className="text-xs text-brand-text-sec font-light leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-6">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-brand-text-sec">
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: service.accentColor }}
                        />
                        <span className="font-light">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={WHATSAPP_PREFILL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-brand-blue hover:text-white transition-colors mt-4"
                >
                  Enquire Now <ChevronRight size={12} />
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
