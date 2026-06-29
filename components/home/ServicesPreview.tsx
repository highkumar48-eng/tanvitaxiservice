"use client";

import Link from "next/link";
import { Plane, Navigation, Repeat } from "lucide-react";
import { createServiceInquiryMessage } from "@/lib/whatsappHelper";

export default function ServicesPreview() {
  const services = [
    {
      id: "airport",
      icon: <Plane size={40} className="text-[#22c55e]" />,
      title: "Airport Transfer",
      desc: "Reliable pickup and drop from Delhi IGI Airport. Driver waits for you, no surge pricing.",
    },
    {
      id: "oneway",
      icon: <Navigation size={40} className="text-[#22c55e]" />,
      title: "One Way Taxi",
      desc: "Book a one-way trip from Delhi NCR to any destination. Pay only for the distance you travel.",
    },
    {
      id: "roundtrip",
      icon: <Repeat size={40} className="text-[#22c55e]" />,
      title: "Round Trip",
      desc: "Book a return trip with driver standby at destination. Best for Agra, Mathura, Haridwar day trips.",
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-[#1a1a2e] dark:text-white mb-2">
            Our Taxi Services
          </h2>
          <div className="green-underline"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {services.map((svc) => (
            <div key={svc.id} className="card-white p-8 text-center flex flex-col items-center group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform">
                {svc.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-[#1a1a2e] dark:text-white mb-2">
                {svc.title}
              </h3>
              <div className="w-12 h-1 bg-[#22c55e] mb-4"></div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1">
                {svc.desc}
              </p>
              <button
                onClick={() => window.open(createServiceInquiryMessage(svc.title), "_blank")}
                className="btn-green w-full"
              >
                Book Now →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services" className="btn-navy">
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
