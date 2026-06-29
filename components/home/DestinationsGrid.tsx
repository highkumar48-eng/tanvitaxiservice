"use client";

import { MapPin } from "lucide-react";
import { createServiceInquiryMessage } from "@/lib/whatsappHelper";

export default function DestinationsGrid() {
  const destinations = [
    { name: "Vrindavan", distance: "150 km", time: "Oct–Mar" },
    { name: "Mathura", distance: "145 km", time: "Oct–Mar" },
    { name: "Agra", distance: "200 km", time: "Oct–Mar" },
    { name: "Haridwar", distance: "250 km", time: "Feb–Apr, Sep–Nov" },
    { name: "Rishikesh", distance: "240 km", time: "Sep–Jun" },
    { name: "Shimla", distance: "350 km", time: "Mar–Jun, Dec–Jan" },
    { name: "Kullu Valley", distance: "500 km", time: "Mar–Jun, Sep–Nov" },
    { name: "Manali", distance: "540 km", time: "May–Oct" },
    { name: "Mussoorie", distance: "290 km", time: "Mar–Jun, Sep–Nov" },
    { name: "Nainital", distance: "300 km", time: "Mar–Jun, Sep–Nov" },
  ];

  return (
    <section className="py-16 bg-[#f8f9fa] dark:bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-[#1a1a2e] dark:text-white mb-2">
            Top Destinations
          </h2>
          <div className="green-underline"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {destinations.map((dest, idx) => (
            <div key={idx} className="card-white p-4 flex flex-col items-center text-center group hover:border-[#22c55e] transition-colors">
              <MapPin size={24} className="text-[#22c55e] mb-2 group-hover:scale-110 transition-transform" />
              <h4 className="font-heading font-bold text-[#1a1a2e] dark:text-white">{dest.name}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-3">{dest.distance} | {dest.time}</p>
              <button
                onClick={() => window.open(createServiceInquiryMessage(`Trip to ${dest.name}`), "_blank")}
                className="text-xs font-bold text-[#22c55e] hover:text-[#16a34a] transition-colors mt-auto"
              >
                Book Tour →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
