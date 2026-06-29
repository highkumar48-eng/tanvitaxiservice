"use client";

import { Phone, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import Link from "next/link";

export default function ContactCTABand() {
  return (
    <section className="bg-[#0a1628] py-16 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
          Ready to Travel? Book Your Taxi Now!
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-2 px-6 py-3 bg-white text-[#1a1a2e] font-bold rounded-full hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center"
          >
            <Phone size={20} /> Call Us
          </a>
          <a
            href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%20${COMPANY.name}%2C%20I%20want%20to%20book%20a%20taxi.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#1DA851] transition-colors w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} /> WhatsApp
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#0a1628] transition-colors w-full sm:w-auto justify-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
