"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_BASE } from "@/lib/constants";

export default function WhatsAppButton() {
  const defaultMessage = "Hi Tanvi Taxi Services! I want to book a taxi.";
  
  return (
    <a
      href={`${WHATSAPP_BASE}${encodeURIComponent(defaultMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-[pulse-ring_2s_ease-out_infinite]"></div>
      <MessageCircle className="w-8 h-8 relative z-10" />
    </a>
  );
}
