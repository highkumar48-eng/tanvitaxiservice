"use client";

import { motion } from "framer-motion";
import { Plane, Navigation, MapPin, ArrowRight, RefreshCw, Briefcase, Bus, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { WHATSAPP_PREFILL } from "@/lib/constants";

const services = [
  {
    icon: Plane,
    title: "Airport Transfer",
    subtitle: "IGI, T1 · T2 · T3",
    description: "Reliable, punctual airport pick-up and drop with flight tracking. Avoid the last-minute rush — book in advance.",
    highlights: ["Flight tracking", "Meet & Greet", "24×7 Available"],
    color: "text-blue-400",
    bg: "from-blue-500/10 to-transparent",
    border: "border-blue-500/15",
  },
  {
    icon: Navigation,
    title: "Local Taxi",
    subtitle: "Gurugram · Delhi NCR",
    description: "Comfortable city rides for shopping, appointments, office commutes or daily travel — always at your service.",
    highlights: ["Hourly packages", "City tours", "Office drops"],
    color: "text-green-400",
    bg: "from-green-500/10 to-transparent",
    border: "border-green-500/15",
  },
  {
    icon: MapPin,
    title: "Outstation Taxi",
    subtitle: "Pan India",
    description: "Long distance travel made comfortable. Delhi to Jaipur, Agra, Chandigarh, Manali and beyond.",
    highlights: ["Experienced drivers", "Clean vehicles", "Night driving"],
    color: "text-orange-400",
    bg: "from-orange-500/10 to-transparent",
    border: "border-orange-500/15",
  },
  {
    icon: ArrowRight,
    title: "One Way Taxi",
    subtitle: "Save on return cost",
    description: "Only pay for the distance you travel. No round-trip charges — perfect for business or one-way journeys.",
    highlights: ["Best rates", "No hidden fees", "GST invoice"],
    color: "text-purple-400",
    bg: "from-purple-500/10 to-transparent",
    border: "border-purple-500/15",
  },
  {
    icon: RefreshCw,
    title: "Round Trip Taxi",
    subtitle: "Go & Come Back",
    description: "Plan a full day trip or extended travel and return safely. Driver waits at the destination for you.",
    highlights: ["Driver waiting", "Flexible stops", "Hill stations"],
    color: "text-rose-400",
    bg: "from-rose-500/10 to-transparent",
    border: "border-rose-500/15",
  },
  {
    icon: Briefcase,
    title: "Corporate Taxi",
    subtitle: "B2B & Office Cabs",
    description: "Dedicated cab solutions for corporate offices, business meetings, airport transfers and employee transportation.",
    highlights: ["Monthly billing", "Multiple vehicles", "Priority support"],
    color: "text-[#D4AF37]",
    bg: "from-[#D4AF37]/10 to-transparent",
    border: "border-[#D4AF37]/15",
  },
  {
    icon: Bus,
    title: "Tempo Traveller",
    subtitle: "Group travel · 12–17 seats",
    description: "Ideal for family trips, pilgrimages, office outings, school tours and group vacations. Spacious and comfortable.",
    highlights: ["12–17 seater", "Group packages", "AC available"],
    color: "text-cyan-400",
    bg: "from-cyan-500/10 to-transparent",
    border: "border-cyan-500/15",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Taxi Services"
          title="Everything You Need,"
          highlight="We've Got It"
          subtitle="From quick city rides to long outstation journeys — one number, all services."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group flex flex-col p-6 rounded-2xl bg-gradient-to-b ${service.bg} border ${service.border} bg-[#1E293B]/40 hover:bg-[#1E293B]/60 transition-all duration-300 hover:shadow-xl hover:shadow-black/20`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-white/5 border ${service.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className={service.color} />
                </div>

                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  {service.subtitle}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-4">{service.description}</p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className={`w-1.5 h-1.5 rounded-full ${service.color.replace("text-", "bg-")} flex-shrink-0`} />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={WHATSAPP_PREFILL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 text-sm font-semibold ${service.color} hover:underline mt-auto`}
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
