"use client";

import Image from "next/image";
import { Users, Briefcase, Snowflake } from "lucide-react";
import { createServiceInquiryMessage } from "@/lib/whatsappHelper";

export default function FleetPreview() {
  const fleet = [
    {
      id: "dzire",
      name: "Swift Dzire",
      image: "/images/vehicles/dzire.png",
      pax: 4,
      bags: 2,
      ac: true,
      price: "12"
    },
    {
      id: "ertiga",
      name: "Maruti Ertiga",
      image: "/images/vehicles/ertiga.png",
      pax: 6,
      bags: 3,
      ac: true,
      price: "14"
    },
    {
      id: "innova",
      name: "Innova Crysta",
      image: "/images/vehicles/innova.png",
      pax: 7,
      bags: 4,
      ac: true,
      price: "18"
    },
    {
      id: "tempo",
      name: "Tempo Traveller",
      image: "/images/vehicles/tempo.png",
      pax: 12,
      bags: 5,
      ac: true,
      price: "22"
    }
  ];

  return (
    <section className="py-16 bg-[#f8f9fa] dark:bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-[#1a1a2e] dark:text-white mb-2">
            Our Premium Fleet
          </h2>
          <div className="green-underline"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleet.map((car) => (
            <div key={car.id} className="card-white overflow-hidden group flex flex-col">
              <div className="relative h-48 bg-white p-4">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 bg-[#22c55e] text-white text-xs font-bold px-2 py-1 rounded">
                  From ₹{car.price}/km
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-heading font-bold text-[#1a1a2e] dark:text-white mb-2">
                  {car.name}
                </h3>
                <div className="w-12 h-1 bg-[#22c55e] mb-4"></div>
                
                <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6 font-medium">
                  <div className="flex items-center gap-1"><Users size={16} className="text-[#22c55e]"/> {car.pax}</div>
                  <div className="flex items-center gap-1"><Briefcase size={16} className="text-[#22c55e]"/> {car.bags}</div>
                  {car.ac && <div className="flex items-center gap-1"><Snowflake size={16} className="text-[#22c55e]"/> AC</div>}
                </div>
                
                <button
                  onClick={() => window.open(createServiceInquiryMessage(`Booking for ${car.name}`), "_blank")}
                  className="mt-auto w-full py-2 border-2 border-[#1a1a2e] dark:border-white text-[#1a1a2e] dark:text-white font-bold rounded-full hover:bg-[#1a1a2e] hover:text-white dark:hover:bg-white dark:hover:text-[#0a1628] transition-colors"
                >
                  Book Vehicle
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
