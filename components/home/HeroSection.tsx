"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone, MapPin, Calendar, Car, ChevronDown,
  Shield, Clock, Star
} from "lucide-react";
import { BUSINESS, CALL_URL, WHATSAPP_PREFILL } from "@/lib/constants";

const vehicleOptions = [
  { value: "sedan", label: "Sedan (Swift Dzire, Honda City)" },
  { value: "suv", label: "SUV (Innova, Ertiga)" },
  { value: "tempo", label: "Tempo Traveller (12–17 Seater)" },
];

function WAIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function HeroSection() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [vehicle, setVehicle] = useState("");

  const handleGetQuote = () => {
    const vehicleLabel = vehicleOptions.find((v) => v.value === vehicle)?.label ?? vehicle;
    const message = [
      "Hi Tanvi Taxi Services! I'd like a quote:",
      pickup && `Pickup: ${pickup}`,
      drop && `Drop: ${drop}`,
      date && `Date: ${date}`,
      vehicleLabel && `Vehicle: ${vehicleLabel}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="hero"
      className="relative bg-[#0D1B3E] min-h-[92vh] flex items-center overflow-hidden"
      aria-label="Hero — Tanvi Taxi Services"
    >
      {/* ── Background subtle pattern ─────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Grid dots pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Right gradient panel */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0F1E45] to-transparent" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080F23] to-transparent" />
        {/* Blue accent top-right */}
        <div className="absolute -top-20 right-1/3 w-80 h-80 rounded-full bg-[#1B4FD8]/10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">

          {/* ── Left: Content ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col"
          >
            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 mb-6 w-fit">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white text-sm font-semibold">4.9</span>
              <span className="text-[#94A3B8] text-sm">— Trusted by 1,200+ riders</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.15] tracking-tight mb-5">
              Safe, Reliable &<br />
              <span className="text-[#2563EB]">On-Time</span> Taxi Service
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed mb-8 max-w-lg">
              Airport transfers, outstation trips, corporate travel &amp; group tours
              across <span className="text-white font-medium">Gurugram &amp; Delhi NCR</span>.
              Available 24×7 with verified drivers and transparent pricing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={CALL_URL}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-sm rounded-lg transition-all duration-200 shadow-lg active:scale-95"
              >
                <Phone size={16} />
                Call Now — {BUSINESS.phone}
              </a>
              <a
                href={WHATSAPP_PREFILL()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-transparent border-2 border-white/30 hover:border-white/60 hover:bg-white/5 text-white font-bold text-sm rounded-lg transition-all duration-200 active:scale-95"
              >
                <WAIcon size={16} />
                WhatsApp Us
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 max-w-sm">
              {[
                { icon: Shield, text: "Verified Drivers" },
                { icon: Clock, text: "24×7 Available" },
                { icon: Car, text: "Clean Vehicles" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex flex-col items-center text-center gap-1.5">
                  <div className="w-10 h-10 rounded-lg bg-[#1B4FD8]/15 border border-[#1B4FD8]/25 flex items-center justify-center">
                    <Icon size={18} className="text-[#2563EB]" />
                  </div>
                  <span className="text-xs font-medium text-[#94A3B8] leading-tight">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Booking Form ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
              {/* Form header */}
              <div className="mb-6">
                <h2 className="text-lg font-bold text-[#0D1B3E] mb-1">Get a Quick Quote</h2>
                <p className="text-sm text-[#64748B]">Fill in your trip details and we'll respond instantly on WhatsApp.</p>
              </div>

              <div className="space-y-4">
                {/* Pickup */}
                <div>
                  <label htmlFor="hero-pickup" className="block text-xs font-semibold text-[#374151] uppercase tracking-wider mb-1.5">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <MapPin size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1B4FD8]" />
                    <input
                      id="hero-pickup"
                      type="text"
                      placeholder="e.g. IGI Airport Terminal 3"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full pl-9 pr-3 py-3 border border-[#E2E8F0] rounded-lg text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#1B4FD8] focus:ring-2 focus:ring-[#1B4FD8]/10 transition-all"
                    />
                  </div>
                </div>

                {/* Drop */}
                <div>
                  <label htmlFor="hero-drop" className="block text-xs font-semibold text-[#374151] uppercase tracking-wider mb-1.5">
                    Drop Location
                  </label>
                  <div className="relative">
                    <MapPin size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1B4FD8]" />
                    <input
                      id="hero-drop"
                      type="text"
                      placeholder="e.g. Gurugram Sector 29"
                      value={drop}
                      onChange={(e) => setDrop(e.target.value)}
                      className="w-full pl-9 pr-3 py-3 border border-[#E2E8F0] rounded-lg text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#1B4FD8] focus:ring-2 focus:ring-[#1B4FD8]/10 transition-all"
                    />
                  </div>
                </div>

                {/* Date + Vehicle row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="hero-date" className="block text-xs font-semibold text-[#374151] uppercase tracking-wider mb-1.5">
                      Travel Date
                    </label>
                    <div className="relative">
                      <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1B4FD8]" />
                      <input
                        id="hero-date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full pl-9 pr-2 py-3 border border-[#E2E8F0] rounded-lg text-sm text-[#1E293B] focus:outline-none focus:border-[#1B4FD8] focus:ring-2 focus:ring-[#1B4FD8]/10 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="hero-vehicle" className="block text-xs font-semibold text-[#374151] uppercase tracking-wider mb-1.5">
                      Vehicle
                    </label>
                    <div className="relative">
                      <Car size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1B4FD8] z-10" />
                      <select
                        id="hero-vehicle"
                        value={vehicle}
                        onChange={(e) => setVehicle(e.target.value)}
                        className="w-full pl-9 pr-7 py-3 border border-[#E2E8F0] rounded-lg text-sm text-[#1E293B] focus:outline-none focus:border-[#1B4FD8] focus:ring-2 focus:ring-[#1B4FD8]/10 transition-all appearance-none cursor-pointer bg-white"
                      >
                        <option value="">Select</option>
                        {vehicleOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.value.charAt(0).toUpperCase() + opt.value.slice(1)}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <button
                  onClick={handleGetQuote}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-sm rounded-lg transition-all duration-200 active:scale-95 mt-1"
                >
                  <WAIcon size={16} />
                  Get Quote on WhatsApp
                </button>

                {/* Or full booking */}
                <p className="text-center text-xs text-[#94A3B8]">
                  Need full booking?{" "}
                  <Link href="/booking" className="text-[#1B4FD8] font-semibold hover:underline">
                    Book Here →
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
