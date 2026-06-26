"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, MapPin, Car, IndianRupee, Info } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { WHATSAPP_PREFILL } from "@/lib/constants";

// ── Modular Pricing Rules ────────────────────────────────────────────────────
// Update these rates without touching the UI logic
const PRICING_RULES = {
  sedan: {
    label: "Sedan",
    baseFare: 300,      // ₹ flat for first 10 km
    perKm: 12,          // ₹ per km beyond base
    driverAllowance: 250, // ₹ per night (outstation)
    minFare: 300,
  },
  suv: {
    label: "SUV",
    baseFare: 450,
    perKm: 16,
    driverAllowance: 300,
    minFare: 450,
  },
  innova: {
    label: "Innova Crysta",
    baseFare: 500,
    perKm: 18,
    driverAllowance: 350,
    minFare: 500,
  },
  tempo: {
    label: "Tempo Traveller",
    baseFare: 800,
    perKm: 28,
    driverAllowance: 500,
    minFare: 800,
  },
} as const;

type VehicleKey = keyof typeof PRICING_RULES;

const GST_RATE = 0.05; // 5% GST on taxi services
const TOLL_PLACEHOLDER = 150; // placeholder — update with actual toll data
const PARKING_PLACEHOLDER = 100; // placeholder

function calculateFare(distanceKm: number, vehicleKey: VehicleKey, isOutstation: boolean) {
  const rules = PRICING_RULES[vehicleKey];
  const extraKm = Math.max(0, distanceKm - 10);
  const baseFare = rules.baseFare;
  const distanceFare = extraKm * rules.perKm;
  const driverAllowance = isOutstation ? rules.driverAllowance : 0;
  const toll = isOutstation ? TOLL_PLACEHOLDER : 0;
  const parking = isOutstation ? PARKING_PLACEHOLDER : 0;
  const subtotal = baseFare + distanceFare + driverAllowance + toll + parking;
  const gst = Math.round(subtotal * GST_RATE);
  const total = subtotal + gst;
  const estTime = Math.round((distanceKm / 50) * 60); // avg 50 km/h

  return {
    baseFare,
    distanceFare,
    driverAllowance,
    toll,
    parking,
    gst,
    total: Math.max(total, rules.minFare),
    estTime,
  };
}

export default function FareCalculator() {
  const [distance, setDistance] = useState("");
  const [vehicle, setVehicle] = useState<VehicleKey>("sedan");
  const [isOutstation, setIsOutstation] = useState(false);
  const [result, setResult] = useState<ReturnType<typeof calculateFare> | null>(null);

  const handleCalculate = () => {
    const km = parseFloat(distance);
    if (!km || km <= 0) return;
    setResult(calculateFare(km, vehicle, isOutstation));
  };

  const formatTime = (minutes: number) => {
    if (minutes < 60) return `~${minutes} min`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `~${h}h ${m > 0 ? `${m}m` : ""}`;
  };

  return (
    <section id="fare-calculator" className="py-20 md:py-28 bg-[#080E1A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Fare Calculator"
          title="Estimate Your"
          highlight="Fare Instantly"
          subtitle="Get a quick estimate before you book. Final fare confirmed on WhatsApp."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12 glass-dark border border-white/10 rounded-2xl p-6 sm:p-8"
        >
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
              <Calculator size={20} className="text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Fare Estimator</h3>
              <p className="text-xs text-slate-500">Prices are approximate. GST included.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            {/* Distance */}
            <div>
              <label htmlFor="calc-distance" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                <span className="flex items-center gap-1.5"><MapPin size={11} className="text-[#D4AF37]" /> Distance (km)</span>
              </label>
              <input
                id="calc-distance"
                type="number"
                min="1"
                max="5000"
                placeholder="e.g. 45"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/50 transition-all"
              />
            </div>

            {/* Vehicle */}
            <div>
              <label htmlFor="calc-vehicle" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                <span className="flex items-center gap-1.5"><Car size={11} className="text-[#D4AF37]" /> Vehicle Type</span>
              </label>
              <select
                id="calc-vehicle"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value as VehicleKey)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#D4AF37]/50 transition-all cursor-pointer [color-scheme:dark]"
              >
                {(Object.keys(PRICING_RULES) as VehicleKey[]).map((key) => (
                  <option key={key} value={key} className="bg-[#1E293B]">
                    {PRICING_RULES[key].label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Outstation toggle */}
          <label className="flex items-center gap-3 mb-6 cursor-pointer group w-fit">
            <div
              onClick={() => setIsOutstation(!isOutstation)}
              className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${isOutstation ? "bg-[#D4AF37]" : "bg-white/10"}`}
            >
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${isOutstation ? "translate-x-6" : "translate-x-1"}`} />
            </div>
            <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
              Outstation trip (adds driver allowance + toll estimate)
            </span>
          </label>

          <button
            onClick={handleCalculate}
            disabled={!distance || parseFloat(distance) <= 0}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-[#D4AF37] hover:bg-[#F0D060] text-[#0F172A] font-bold text-sm rounded-xl transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-yellow-600/20"
          >
            <Calculator size={16} /> Calculate Fare
          </button>

          {/* Result */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="border-t border-white/10 pt-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Estimated Total</p>
                      <p className="text-4xl font-black text-gradient-gold">
                        ₹{result.total.toLocaleString("en-IN")}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 mb-0.5">Est. Travel Time</p>
                      <p className="text-2xl font-bold text-white">{formatTime(result.estTime)}</p>
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-2 mb-6 text-sm">
                    {[
                      { label: `Base Fare (first 10 km)`, value: result.baseFare },
                      { label: `Distance Fare`, value: result.distanceFare },
                      ...(result.driverAllowance > 0 ? [{ label: "Driver Allowance", value: result.driverAllowance }] : []),
                      ...(result.toll > 0 ? [{ label: "Toll (Estimate)", value: result.toll }] : []),
                      ...(result.parking > 0 ? [{ label: "Parking (Estimate)", value: result.parking }] : []),
                      { label: "GST @ 5%", value: result.gst },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between text-slate-400">
                        <span>{row.label}</span>
                        <span className="text-slate-200">₹{row.value.toLocaleString("en-IN")}</span>
                      </div>
                    ))}
                    <div className="flex justify-between font-bold text-white border-t border-white/10 pt-2">
                      <span className="flex items-center gap-1.5"><IndianRupee size={13} /> Total</span>
                      <span className="text-[#D4AF37]">₹{result.total.toLocaleString("en-IN")}</span>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="flex items-start gap-2 text-xs text-slate-500 mb-5">
                    <Info size={12} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                    This is an estimate only. Actual fare depends on real-time traffic, toll rates, and route. Final fare will be confirmed before you ride.
                  </div>

                  <a
                    href={WHATSAPP_PREFILL()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1AA44E] text-white font-bold text-sm rounded-xl transition-all active:scale-95"
                  >
                    Get Confirmed Quote on WhatsApp
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
