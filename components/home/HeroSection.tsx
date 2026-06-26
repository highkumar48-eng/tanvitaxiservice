"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, ChevronDown, MapPin, Calendar, Car, Star } from "lucide-react";
import { BUSINESS, CALL_URL, WHATSAPP_PREFILL } from "@/lib/constants";

const vehicleOptions = [
  { value: "sedan", label: "Sedan (Swift Dzire, Honda City)" },
  { value: "suv", label: "SUV (Innova, Ertiga)" },
  { value: "tempo", label: "Tempo Traveller (12–17 Seater)" },
  { value: "luxury", label: "Luxury (Mercedes, BMW)" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

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

    const url = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero_bg.png')" }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/70 via-[#0F172A]/50 to-[#0F172A]/95" aria-hidden="true" />
      {/* Gold gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" aria-hidden="true" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 sm:pt-32 pb-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Rating badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#D4AF37]/20 text-sm">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <span className="text-[#D4AF37] font-semibold">4.9</span>
              <span className="text-slate-400">· Trusted by 1,200+ riders</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight mb-6"
          >
            Premium Rides,{" "}
            <br />
            <span className="text-gradient-gold">Any Destination.</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl"
          >
            Airport transfers, outstation trips, corporate travel &amp; more — all across{" "}
            <span className="text-white font-medium">Gurugram &amp; Delhi NCR</span>. Available 24×7 with verified drivers.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-12">
            <a
              href={CALL_URL}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#D4AF37] hover:bg-[#F0D060] text-[#0F172A] font-bold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-yellow-600/20 hover:shadow-yellow-500/30 active:scale-95"
            >
              <Phone size={17} />
              Call Now — {BUSINESS.phone}
            </a>
            <a
              href={WHATSAPP_PREFILL()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#25D366] hover:bg-[#1AA44E] text-white font-bold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-green-600/20 active:scale-95"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5 w-[18px] h-[18px]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </motion.div>

          {/* Trust pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {["✅ 24×7 Available", "🛡️ Verified Drivers", "💰 Transparent Pricing", "📍 GST Invoice"].map((pill) => (
              <span
                key={pill}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 glass rounded-full border border-white/10"
              >
                {pill}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Booking Strip — natural bottom of hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <div className="glass-dark border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl">
            <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-4">
              Quick Booking Enquiry
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
              {/* Pickup */}
              <div className="relative">
                <label htmlFor="pickup" className="block text-xs font-medium text-slate-400 mb-1.5">
                  Pickup Location
                </label>
                <div className="relative">
                  <MapPin size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D4AF37] pointer-events-none" />
                  <input
                    id="pickup"
                    type="text"
                    placeholder="e.g. IGI Airport T3"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full pl-9 pr-3 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/8 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Drop */}
              <div className="relative">
                <label htmlFor="drop" className="block text-xs font-medium text-slate-400 mb-1.5">
                  Drop Location
                </label>
                <div className="relative">
                  <MapPin size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D4AF37] pointer-events-none" />
                  <input
                    id="drop"
                    type="text"
                    placeholder="e.g. Gurugram Sector 29"
                    value={drop}
                    onChange={(e) => setDrop(e.target.value)}
                    className="w-full pl-9 pr-3 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/8 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="relative">
                <label htmlFor="travel-date" className="block text-xs font-medium text-slate-400 mb-1.5">
                  Travel Date
                </label>
                <div className="relative">
                  <Calendar size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D4AF37] pointer-events-none" />
                  <input
                    id="travel-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full pl-9 pr-3 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/8 transition-all duration-200 [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Vehicle Type */}
              <div className="relative">
                <label htmlFor="vehicle-type" className="block text-xs font-medium text-slate-400 mb-1.5">
                  Vehicle Type
                </label>
                <div className="relative">
                  <Car size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D4AF37] pointer-events-none z-10" />
                  <select
                    id="vehicle-type"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="w-full pl-9 pr-8 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/8 transition-all duration-200 appearance-none cursor-pointer [color-scheme:dark]"
                  >
                    <option value="" disabled className="bg-[#1E293B]">Select vehicle</option>
                    {vehicleOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-[#1E293B]">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Get Quote Button */}
            <div className="mt-4">
              <button
                onClick={handleGetQuote}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#D4AF37] hover:bg-[#F0D060] text-[#0F172A] font-bold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-yellow-600/20 hover:shadow-yellow-500/30 active:scale-95"
                aria-label="Get quote on WhatsApp"
              >
                Get Quote on WhatsApp
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pb-4">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-slate-500"
            aria-hidden="true"
          >
            <span className="text-[10px] font-medium uppercase tracking-widest">Scroll</span>
            <ChevronDown size={16} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
