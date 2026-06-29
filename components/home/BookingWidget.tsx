"use client";

import { useState } from "react";
import { calculateOutstationFare, calculateLocalRentalFare, calculateAirportTransferFare } from "@/lib/fareCalculator";
import { createBookingMessage } from "@/lib/whatsappHelper";

type Tab = "Outstation" | "Local Rental" | "Airport Transfer";

export default function BookingWidget() {
  const [activeTab, setActiveTab] = useState<Tab>("Outstation");
  
  // Shared state
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [vehicle, setVehicle] = useState<"dzire" | "ertiga" | "innova" | "tempo">("dzire");

  // Outstation specific
  const [pickupCity, setPickupCity] = useState("");
  const [dropCity, setDropCity] = useState("");
  const [tripType, setTripType] = useState<"One Way" | "Round Trip">("One Way");
  const [distance, setDistance] = useState("250");
  const [days, setDays] = useState("1");
  const [isHilly, setIsHilly] = useState(false);

  // Local Rental specific
  const [localPickup, setLocalPickup] = useState("");
  const [packageType, setPackageType] = useState<"4Hr/40Km" | "8Hr/80Km" | "12Hr/120Km">("8Hr/80Km");

  // Airport Transfer specific
  const [airportLocation, setAirportLocation] = useState("");
  const [terminal, setTerminal] = useState("T3");
  const [zone, setZone] = useState<"Zone 1" | "Zone 2" | "Zone 3">("Zone 2");
  const [isLateNight, setIsLateNight] = useState(false);

  // Computed Fare
  let estimatedTotal = 0;
  let breakdown = null;

  if (activeTab === "Outstation") {
    const calc = calculateOutstationFare({
      distance: Number(distance) || 250,
      tripType,
      vehicle,
      days: Number(days) || 1,
      isHilly
    });
    estimatedTotal = calc.total;
    breakdown = (
      <div className="text-sm space-y-1 mt-4 border-t border-gray-700 pt-3 text-gray-300">
        <div className="flex justify-between"><span>Base Fare:</span> <span>₹{calc.baseFare.toFixed(2)}</span></div>
        {calc.driverAllowance > 0 && <div className="flex justify-between"><span>Driver Allowance:</span> <span>₹{calc.driverAllowance.toFixed(2)}</span></div>}
        {calc.hillCharges > 0 && <div className="flex justify-between"><span>Hill Charges:</span> <span>₹{calc.hillCharges.toFixed(2)}</span></div>}
        <div className="flex justify-between"><span>GST (5%):</span> <span>₹{calc.gst.toFixed(2)}</span></div>
        <div className="flex justify-between font-bold text-white pt-1 border-t border-gray-700 mt-1"><span>Total:</span> <span>₹{calc.total.toFixed(2)}</span></div>
      </div>
    );
  } else if (activeTab === "Local Rental") {
    const calc = calculateLocalRentalFare(packageType, vehicle);
    estimatedTotal = calc.total;
    breakdown = (
      <div className="text-sm space-y-1 mt-4 border-t border-gray-700 pt-3 text-gray-300">
        <div className="flex justify-between"><span>Base Fare:</span> <span>₹{calc.baseFare.toFixed(2)}</span></div>
        <div className="flex justify-between"><span>GST (5%):</span> <span>₹{calc.gst.toFixed(2)}</span></div>
        <div className="flex justify-between font-bold text-white pt-1 border-t border-gray-700 mt-1"><span>Total:</span> <span>₹{calc.total.toFixed(2)}</span></div>
      </div>
    );
  } else if (activeTab === "Airport Transfer") {
    const calc = calculateAirportTransferFare(zone, vehicle, isLateNight);
    estimatedTotal = calc.total;
    breakdown = (
      <div className="text-sm space-y-1 mt-4 border-t border-gray-700 pt-3 text-gray-300">
        <div className="flex justify-between"><span>Base Fare (incl. surcharge):</span> <span>₹{calc.baseFare.toFixed(2)}</span></div>
        <div className="flex justify-between"><span>GST (5%):</span> <span>₹{calc.gst.toFixed(2)}</span></div>
        <div className="flex justify-between font-bold text-white pt-1 border-t border-gray-700 mt-1"><span>Total:</span> <span>₹{calc.total.toFixed(2)}</span></div>
      </div>
    );
  }

  const handleBook = () => {
    let tripDetails = "";
    let pickupDetails = "";
    let dropDetails = "";

    if (activeTab === "Outstation") {
      tripDetails = `Outstation (${tripType})`;
      pickupDetails = pickupCity || "Not provided";
      dropDetails = dropCity || "Not provided";
    } else if (activeTab === "Local Rental") {
      tripDetails = `Local Rental (${packageType})`;
      pickupDetails = localPickup || "Not provided";
    } else if (activeTab === "Airport Transfer") {
      tripDetails = `Airport Transfer (Terminal ${terminal})`;
      pickupDetails = airportLocation || "Not provided";
      dropDetails = `IGI Airport Terminal ${terminal}`;
    }

    const link = createBookingMessage({
      tripType: tripDetails,
      pickup: pickupDetails,
      drop: dropDetails,
      date: date || "Not selected",
      time: time || "Not selected",
      vehicle: vehicle.toUpperCase(),
      total: estimatedTotal
    });
    
    window.open(link, "_blank");
  };

  const inputClass = "w-full p-3 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:border-[#22c55e]";
  const selectClass = "w-full p-3 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:border-[#22c55e]";

  return (
    <div className="bg-[#0a1628] rounded-xl overflow-hidden shadow-2xl flex flex-col">
      {/* Tabs */}
      <div className="flex">
        {(["Outstation", "Local Rental", "Airport Transfer"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-sm font-semibold transition-colors ${
              activeTab === tab ? "bg-[#22c55e] text-white" : "bg-[#1e293b] text-gray-300 hover:bg-[#334155]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {/* Outstation Form */}
          {activeTab === "Outstation" && (
            <>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-xs text-gray-400 mb-1">Trip Type</label>
                  <select className={selectClass} value={tripType} onChange={e => setTripType(e.target.value as any)}>
                    <option value="One Way">One Way</option>
                    <option value="Round Trip">Round Trip</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-xs text-gray-400 mb-1">Pickup City</label>
                  <input type="text" placeholder="e.g. Gurugram" className={inputClass} value={pickupCity} onChange={e => setPickupCity(e.target.value)} />
                </div>
                <div className="flex-1">
                  <label className="block text-xs text-gray-400 mb-1">Drop City</label>
                  <input type="text" placeholder="e.g. Agra" className={inputClass} value={dropCity} onChange={e => setDropCity(e.target.value)} />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-xs text-gray-400 mb-1">Estimated One-Way Dist. (km)</label>
                  <input type="number" className={inputClass} value={distance} onChange={e => setDistance(e.target.value)} />
                </div>
                {tripType === "Round Trip" && (
                  <div className="flex-1">
                    <label className="block text-xs text-gray-400 mb-1">No. of Days</label>
                    <input type="number" className={inputClass} value={days} onChange={e => setDays(e.target.value)} min="1" />
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="hilly" checked={isHilly} onChange={e => setIsHilly(e.target.checked)} />
                <label htmlFor="hilly" className="text-sm text-gray-300">Hill Destination (+₹500)</label>
              </div>
            </>
          )}

          {/* Local Rental Form */}
          {activeTab === "Local Rental" && (
            <>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Pickup Location</label>
                <input type="text" placeholder="e.g. DLF Cyber City" className={inputClass} value={localPickup} onChange={e => setLocalPickup(e.target.value)} />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Package</label>
                <select className={selectClass} value={packageType} onChange={e => setPackageType(e.target.value as any)}>
                  <option value="4Hr/40Km">4 Hours / 40 km</option>
                  <option value="8Hr/80Km">8 Hours / 80 km</option>
                  <option value="12Hr/120Km">12 Hours / 120 km</option>
                </select>
              </div>
            </>
          )}

          {/* Airport Transfer Form */}
          {activeTab === "Airport Transfer" && (
            <>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Your Location (in Delhi NCR)</label>
                <input type="text" placeholder="e.g. Sector 56, Gurugram" className={inputClass} value={airportLocation} onChange={e => setAirportLocation(e.target.value)} />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-xs text-gray-400 mb-1">Terminal</label>
                  <select className={selectClass} value={terminal} onChange={e => setTerminal(e.target.value)}>
                    <option value="T1">T1</option>
                    <option value="T2">T2</option>
                    <option value="T3">T3</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-xs text-gray-400 mb-1">Distance Zone</label>
                  <select className={selectClass} value={zone} onChange={e => setZone(e.target.value as any)}>
                    <option value="Zone 1">Zone 1 (0-20km)</option>
                    <option value="Zone 2">Zone 2 (20-40km)</option>
                    <option value="Zone 3">Zone 3 (40-60km)</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="latenight" checked={isLateNight} onChange={e => setIsLateNight(e.target.checked)} />
                <label htmlFor="latenight" className="text-sm text-gray-300">Late Night (11 PM - 5 AM, +15%)</label>
              </div>
            </>
          )}

          {/* Shared Fields */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-xs text-gray-400 mb-1">Date</label>
              <input type="date" className={inputClass} value={date} onChange={e => setDate(e.target.value)} min={new Date().toISOString().split('T')[0]} />
            </div>
            <div className="flex-1">
              <label className="block text-xs text-gray-400 mb-1">Time</label>
              <input type="time" className={inputClass} value={time} onChange={e => setTime(e.target.value)} />
            </div>
          </div>
          
          <div>
            <label className="block text-xs text-gray-400 mb-1">Vehicle Type</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                { id: "dzire", label: "Dzire" },
                { id: "ertiga", label: "Ertiga" },
                { id: "innova", label: "Innova" },
                { id: "tempo", label: "Tempo" }
              ].map(v => (
                <button
                  key={v.id}
                  onClick={() => setVehicle(v.id as any)}
                  className={`p-2 rounded border text-sm text-center transition-colors ${
                    vehicle === v.id ? "bg-[#22c55e] border-[#22c55e] text-white" : "border-gray-600 text-gray-300 hover:border-gray-400"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* Breakdown & Button */}
          {breakdown}

          <button
            onClick={handleBook}
            className="w-full btn-green mt-4 py-3 text-lg justify-center shadow-lg hover:shadow-xl"
          >
            🟢 Book on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
