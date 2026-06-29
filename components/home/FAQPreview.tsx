"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function FAQPreview() {
  const faqs = [
    {
      q: "How do I book a taxi?",
      a: "Simply click any 'Book on WhatsApp' button, or call/WhatsApp us on our number. Share your pickup location, drop location, date, time, and vehicle preference."
    },
    {
      q: "What vehicles are available?",
      a: "We operate Swift Dzire, Maruti Ertiga, Toyota Innova Crysta, and 12-seater Tempo Travellers. All vehicles are AC-equipped and well-maintained."
    },
    {
      q: "Is there a cancellation policy?",
      a: "Yes. Cancellations made 4+ hours before pickup are free. Cancellations within 4 hours may incur a 20% charge."
    },
    {
      q: "Do you offer airport pickup?",
      a: "Yes, we offer 24×7 airport taxi from and to IGI Airport T1, T2 & T3 with real-time flight tracking."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 bg-[#f8f9fa] dark:bg-[#020617]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-[#1a1a2e] dark:text-white mb-2">
            Frequently Asked Questions
          </h2>
          <div className="green-underline"></div>
        </div>

        <div className="space-y-4 mb-8">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="card-white overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-heading font-bold text-[#1a1a2e] dark:text-white pr-4">
                  {faq.q}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`text-[#22c55e] transform transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}
                />
              </button>
              <div 
                className={`px-6 text-gray-600 dark:text-gray-400 transition-all duration-300 ease-in-out ${
                  openIdx === idx ? 'max-h-[200px] pb-4 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/faq" className="btn-navy">
            View All FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}
