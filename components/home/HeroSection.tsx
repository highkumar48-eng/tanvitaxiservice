"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MapPin, Calendar, Car, ChevronRight, Star, Shield, Clock } from "lucide-react";
import { BUSINESS, CALL_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

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
  const [vehicle, setVehicle] = useState("sedan");
  const [isClient, setIsClient] = useState(false);

  // Load and save localStorage values
  useEffect(() => {
    setIsClient(true);
    setPickup(localStorage.getItem("hero_pickup") || "");
    setDrop(localStorage.getItem("hero_drop") || "");
    setDate(localStorage.getItem("hero_date") || "");
    setVehicle(localStorage.getItem("hero_vehicle") || "sedan");
  }, []);

  const updateField = (key: string, value: string, setter: (val: string) => void) => {
    setter(value);
    localStorage.setItem(key, value);
  };

  const getEstimatedFare = () => {
    if (!pickup || !drop) return "Enter Route";
    const baseKms = 48; // simulated typical NCR travel distance
    const rates = { sedan: 12, suv: 16, innova: 18, tempo: 28 };
    const perKm = rates[vehicle as keyof typeof rates] || 12;
    const total = baseKms * perKm;
    return `₹${total.toLocaleString("en-IN")}`;
  };

  const handleBookNow = () => {
    const vehicleLabels = {
      sedan: "Sedan (Dzire / Etios)",
      suv: "SUV (Ertiga / Scorpio)",
      innova: "Innova Crysta",
      tempo: "Tempo Traveller",
    };
    const vLabel = vehicleLabels[vehicle as keyof typeof vehicleLabels] || vehicle;
    const msg = [
      `🚖 *App Booking Request*`,
      `Pickup: ${pickup}`,
      `Drop: ${drop}`,
      `Vehicle: ${vLabel}`,
      `Date: ${date}`,
      `Est. Fare: ${getEstimatedFare()}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="hero"
      className="relative bg-[#081423] py-20 lg:py-28 overflow-hidden border-b border-brand-border"
      aria-label="Hero — Tanvi Taxi Services"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue/5 blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2 mb-6 border border-brand-border px-3.5 py-1.5 bg-brand-card/35 rounded-full">
          <div className="flex items-center gap-0.5 text-brand-blue">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={11} className="fill-brand-blue" />
            ))}
          </div>
          <span className="text-white text-[10px] font-bold tracking-wider">4.9 RATING</span>
          <span className="text-brand-text-sec text-[10px] font-light tracking-wide">— TRUSTED TAXI SERVICE SINCE 2012</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight uppercase max-w-4xl mb-6">
          PREMIUM TAXI SERVICES &amp; <span className="text-brand-blue">TOUR PACKAGES</span>
        </h1>

        {/* Dynamic services slider/pills list */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 text-[9px] sm:text-[10px] font-bold text-brand-blue uppercase tracking-widest max-w-2xl">
          <span>Taxi Services</span>
          <span className="text-brand-border">•</span>
          <span>Airport Transfer</span>
          <span className="text-brand-border">•</span>
          <span>Outstation Trips</span>
          <span className="text-brand-border">•</span>
          <span>Tour Packages</span>
          <span className="text-brand-border">•</span>
          <span>Corporate Travel</span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-brand-text-sec font-light leading-relaxed mb-10 max-w-2xl">
          Book executive business rides, rapid airport pickups, and family outstation packages across{" "}
          <span className="text-white font-medium">Gurugram, Delhi NCR, and Northern India</span>. Vetted chauffeurs, transparent rates, and verified safety since 2012.
        </p>

        {/* Quick buttons */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <a href={CALL_URL}>
            <Button variant="primary" className="gap-2">
              <Phone size={14} />
              Call Dispatch
            </Button>
          </a>
          <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" className="gap-2">
              <WAIcon size={14} />
              WhatsApp Us
            </Button>
          </a>
        </div>

        {/* iPhone Mockup wrapper containing functional quick book app */}
        <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
          {/* External shadow glow */}
          <div className="absolute inset-0 rounded-[50px] bg-brand-blue/10 blur-2xl z-0 pointer-events-none" />

          {/* iPhone Frame */}
          <div className="relative z-10 w-full bg-black border-[12px] border-slate-900 rounded-[50px] shadow-2xl p-2.5 ring-1 ring-white/10">
            {/* Speaker receiver */}
            <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-28 h-1 bg-slate-800 rounded-full z-30" />
            
            {/* Dynamic Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30 flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-slate-950 rounded-full ml-auto mr-4" />
            </div>

            {/* Screen Viewport */}
            <div className="w-full bg-[#081423] rounded-[40px] overflow-hidden pt-9 pb-6 px-4 flex flex-col text-left">
              {/* App Status Bar */}
              <div className="flex justify-between items-center text-[9px] text-brand-text-sec/60 font-semibold mb-4 px-2">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <span>LTE</span>
                  <div className="w-3.5 h-2 border border-brand-text-sec/40 rounded-[2px] p-[1px] flex items-center"><div className="w-full h-full bg-brand-text-sec/60" /></div>
                </div>
              </div>

              {/* App Header */}
              <div className="flex items-center justify-between mb-4 border-b border-brand-border/40 pb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 bg-brand-blue flex items-center justify-center rounded">
                    <Car size={11} className="text-white" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-white">Tanvi Book</span>
                </div>
                <span className="text-[8px] bg-brand-blue/20 text-brand-blue font-bold px-1.5 py-0.5 rounded uppercase">24/7 Live</span>
              </div>

              {/* App Form */}
              <div className="space-y-3.5">
                {/* Pickup */}
                <div>
                  <label className="block text-[8px] font-bold text-brand-text-sec uppercase tracking-widest mb-1">Pickup Location</label>
                  <div className="relative">
                    <MapPin size={11} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-brand-blue" />
                    <input
                      type="text"
                      placeholder="e.g. IGI Airport Terminal 3"
                      value={pickup}
                      onChange={(e) => updateField("hero_pickup", e.target.value, setPickup)}
                      className="w-full pl-7 pr-2 py-2 bg-brand-bg-sec border border-brand-border rounded-lg text-[10px] text-white placeholder-slate-600 focus:outline-none focus:border-brand-blue"
                    />
                  </div>
                </div>

                {/* Drop */}
                <div>
                  <label className="block text-[8px] font-bold text-brand-text-sec uppercase tracking-widest mb-1">Drop Location</label>
                  <div className="relative">
                    <MapPin size={11} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-brand-blue" />
                    <input
                      type="text"
                      placeholder="e.g. Gurugram Sector 29"
                      value={drop}
                      onChange={(e) => updateField("hero_drop", e.target.value, setDrop)}
                      className="w-full pl-7 pr-2 py-2 bg-brand-bg-sec border border-brand-border rounded-lg text-[10px] text-white placeholder-slate-600 focus:outline-none focus:border-brand-blue"
                    />
                  </div>
                </div>

                {/* Vehicle + Date Grid */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[8px] font-bold text-brand-text-sec uppercase tracking-widest mb-1">Vehicle</label>
                    <select
                      value={vehicle}
                      onChange={(e) => updateField("hero_vehicle", e.target.value, setVehicle)}
                      className="w-full px-2 py-2 bg-brand-bg-sec border border-brand-border rounded-lg text-[10px] text-white focus:outline-none focus:border-brand-blue appearance-none cursor-pointer"
                    >
                      <option value="sedan">SEDAN</option>
                      <option value="suv">SUV</option>
                      <option value="innova">CRYSTA</option>
                      <option value="tempo">TEMPO</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[8px] font-bold text-brand-text-sec uppercase tracking-widest mb-1">Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => updateField("hero_date", e.target.value, setDate)}
                      min={isClient ? new Date().toISOString().split("T")[0] : ""}
                      className="w-full px-2 py-2 bg-brand-bg-sec border border-brand-border rounded-lg text-[10px] text-white focus:outline-none focus:border-brand-blue [color-scheme:dark]"
                    />
                  </div>
                </div>

                {/* Live Fare Indicator */}
                <div className="bg-brand-bg-sec border border-brand-border rounded-lg p-2.5 flex items-center justify-between mt-1">
                  <div>
                    <div className="text-[7px] font-bold text-brand-text-sec uppercase tracking-wider">Est. Trip Fare</div>
                    <div className="text-xs font-black text-brand-blue mt-0.5">{getEstimatedFare()}</div>
                  </div>
                  <div className="text-right text-[7px] text-brand-text-sec/60 leading-tight">
                    *Incl. GST<br />Excl. Tolls
                  </div>
                </div>

                {/* Book CTA */}
                <button
                  onClick={handleBookNow}
                  disabled={!pickup || !drop || !date}
                  className="w-full py-2.5 bg-brand-blue hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-[10px] font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-1 transition-colors duration-150 cursor-pointer"
                >
                  Book Instant Cab
                  <ChevronRight size={10} />
                </button>
              </div>

              {/* Bottom Home Indicator */}
              <div className="w-20 h-0.5 bg-brand-text-sec/30 rounded-full mx-auto mt-6" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
