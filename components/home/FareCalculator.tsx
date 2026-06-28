"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, MapPin, Car, IndianRupee, Info } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { WHATSAPP_PREFILL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

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
const TOLL_PLACEHOLDER = 150; 
const PARKING_PLACEHOLDER = 100;

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
  const estTime = Math.round((distanceKm / 50) * 60);

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
    <section id="fare-calculator" className="py-24 bg-[#081423] border-b border-brand-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Fare Calculator"
          title="Estimate Your"
          highlight="Fare Instantly"
          subtitle="Get a quick estimate before you book. Final fare confirmed on WhatsApp."
        />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-12 bg-brand-card border border-brand-border rounded-none p-6 sm:p-8"
        >
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-10 h-10 bg-brand-bg-sec border border-brand-border flex items-center justify-center text-brand-blue">
              <Calculator size={18} />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Fare Estimator</h3>
              <p className="text-xs text-brand-text-sec font-light">Prices are approximate. GST included.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            {/* Distance */}
            <div>
              <label htmlFor="calc-distance" className="block text-[10px] font-bold text-brand-text-sec uppercase tracking-widest mb-1.5">
                <span className="flex items-center gap-1.5"><MapPin size={11} className="text-brand-blue" /> Distance (km)</span>
              </label>
              <input
                id="calc-distance"
                type="number"
                min="1"
                max="5000"
                placeholder="e.g. 45"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="w-full px-4 py-3 bg-brand-bg-sec border border-brand-border rounded-none text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-blue transition-all"
              />
            </div>

            {/* Vehicle */}
            <div>
              <label htmlFor="calc-vehicle" className="block text-[10px] font-bold text-brand-text-sec uppercase tracking-widest mb-1.5">
                <span className="flex items-center gap-1.5"><Car size={11} className="text-brand-blue" /> Vehicle Type</span>
              </label>
              <select
                id="calc-vehicle"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value as VehicleKey)}
                className="w-full px-4 py-3 bg-brand-bg-sec border border-brand-border rounded-none text-xs text-white focus:outline-none focus:border-brand-blue transition-all cursor-pointer [color-scheme:dark]"
              >
                {(Object.keys(PRICING_RULES) as VehicleKey[]).map((key) => (
                  <option key={key} value={key} className="bg-[#101826]">
                    {PRICING_RULES[key].label.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Outstation toggle */}
          <label className="flex items-center gap-3 mb-6 cursor-pointer group w-fit">
            <div
              onClick={() => setIsOutstation(!isOutstation)}
              className={`relative w-11 h-6 rounded-none transition-colors duration-200 ${isOutstation ? "bg-brand-blue" : "bg-brand-bg-sec border border-brand-border"}`}
            >
              <div className="absolute top-1 left-1 w-3.5 h-3.5 rounded-none bg-white transition-transform duration-200" style={{ transform: isOutstation ? "translateX(20px)" : "translateX(0)" }} />
            </div>
            <span className="text-xs text-brand-text-sec group-hover:text-white transition-colors font-light">
              Outstation trip (adds driver allowance + toll estimate)
            </span>
          </label>

          <Button
            onClick={handleCalculate}
            disabled={!distance || parseFloat(distance) <= 0}
            variant="primary"
          >
            Calculate Fare
          </Button>

          {/* Result */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="border-t border-brand-border pt-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                    <div>
                      <p className="text-[10px] font-bold text-brand-text-sec uppercase tracking-widest mb-0.5">Estimated Total</p>
                      <p className="text-3xl font-black text-brand-blue">
                        ₹{result.total.toLocaleString("en-IN")}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-brand-text-sec uppercase tracking-widest mb-0.5">Est. Travel Time</p>
                      <p className="text-xl font-bold text-white uppercase">{formatTime(result.estTime)}</p>
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-2.5 mb-6 text-xs font-light">
                    {[
                      { label: `Base Fare (first 10 km)`, value: result.baseFare },
                      { label: `Distance Fare`, value: result.distanceFare },
                      ...(result.driverAllowance > 0 ? [{ label: "Driver Allowance", value: result.driverAllowance }] : []),
                      ...(result.toll > 0 ? [{ label: "Toll (Estimate)", value: result.toll }] : []),
                      ...(result.parking > 0 ? [{ label: "Parking (Estimate)", value: result.parking }] : []),
                      { label: "GST @ 5%", value: result.gst },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between text-brand-text-sec">
                        <span>{row.label}</span>
                        <span className="text-white font-medium">₹{row.value.toLocaleString("en-IN")}</span>
                      </div>
                    ))}
                    <div className="flex justify-between font-bold text-white border-t border-brand-border pt-2.5">
                      <span className="flex items-center gap-1.5 uppercase tracking-wider"><IndianRupee size={12} /> Total</span>
                      <span className="text-brand-blue">₹{result.total.toLocaleString("en-IN")}</span>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="flex items-start gap-2 text-[10px] text-brand-text-sec/60 mb-6">
                    <Info size={12} className="mt-0.5 flex-shrink-0 text-brand-blue" />
                    This is an estimate only. Actual fare depends on real-time traffic, toll rates, and route. Final fare will be confirmed before you ride.
                  </div>

                  <a
                    href={WHATSAPP_PREFILL()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="whatsapp" fullWidth>
                      Get Confirmed Quote on WhatsApp
                    </Button>
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
