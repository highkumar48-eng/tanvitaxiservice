"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import ContactCTABand from "@/components/home/ContactCTABand";

export default function FAQPage() {
  const faqCategories = [
    {
      title: "1. BOOKING QUESTIONS",
      faqs: [
        {
          q: "How do I book a taxi with Tanvi Taxi Services?",
          a: "Simply click any 'Book on WhatsApp' button, or call/WhatsApp us on +91-XXXXXXXXXX. Share your pickup location, drop location, date, time, and vehicle preference."
        },
        {
          q: "How far in advance should I book?",
          a: "For airport transfers, book at least 2 hours in advance. For outstation and tours, 24 hours in advance is recommended. We do accept last-minute bookings based on availability."
        }
      ]
    },
    {
      title: "2. CANCELLATION POLICY",
      faqs: [
        {
          q: "Can I cancel my booking?",
          a: "Yes. Cancellations made 4+ hours before pickup are free. Cancellations within 4 hours may incur a 20% charge. No-shows are charged 50% of the fare."
        }
      ]
    },
    {
      title: "3. PAYMENT METHODS",
      faqs: [
        {
          q: "What payment methods do you accept?",
          a: "We accept cash, UPI (Google Pay, PhonePe, Paytm), and bank transfer. Payment is collected at the end of the trip or as agreed at booking."
        }
      ]
    },
    {
      title: "4. AIRPORT SERVICES",
      faqs: [
        {
          q: "Do you offer flight tracking for airport pickups?",
          a: "Yes. Share your flight number and we track arrivals in real-time, so your driver is always ready even if your flight is delayed."
        }
      ]
    },
    {
      title: "5. CORPORATE SERVICES",
      faqs: [
        {
          q: "Do you have corporate accounts?",
          a: "Yes. We offer monthly billing, GST invoices, dedicated account manager, and priority booking for corporate clients. Contact us for a custom quote."
        }
      ]
    },
    {
      title: "6. TOUR PACKAGES",
      faqs: [
        {
          q: "Are tour packages customizable?",
          a: "Yes, all tour packages can be customized for group size, duration, and specific stops. Prices are provided on inquiry via WhatsApp."
        }
      ]
    },
    {
      title: "7. DRIVER INFORMATION",
      faqs: [
        {
          q: "Are your drivers verified and licensed?",
          a: "Yes. All Tanvi Taxi Services drivers hold valid commercial driving licenses, are police-verified, and have undergone background checks."
        }
      ]
    },
    {
      title: "8. SAFETY MEASURES",
      faqs: [
        {
          q: "What safety measures are in place?",
          a: "GPS tracking on all vehicles, 24×7 driver monitoring, regular vehicle maintenance and sanitization, first-aid kit in every cab, and emergency contact protocols."
        }
      ]
    }
  ];

  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleOpen = (catIdx: number, faqIdx: number) => {
    const id = `${catIdx}-${faqIdx}`;
    setOpenIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <div className="bg-[#f8f9fa] dark:bg-[#020617] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-heading font-bold text-[#1a1a2e] dark:text-white mb-4">
              Frequently Asked Questions
            </h1>
            <div className="green-underline mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              Find answers to common questions about our taxi services, booking process, policies, and more.
            </p>
          </div>

          <div className="space-y-12">
            {faqCategories.map((category, catIdx) => (
              <div key={catIdx}>
                <h2 className="text-xl font-heading font-bold text-[#22c55e] mb-6 tracking-wide">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIdx) => {
                    const id = `${catIdx}-${faqIdx}`;
                    const isOpen = !!openIds[id];
                    return (
                      <div key={id} className="card-white overflow-hidden shadow-sm">
                        <button
                          className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 dark:hover:bg-[#1e293b]"
                          onClick={() => toggleOpen(catIdx, faqIdx)}
                        >
                          <span className="font-heading font-bold text-[#1a1a2e] dark:text-white pr-4">
                            {faq.q}
                          </span>
                          <ChevronDown 
                            size={20} 
                            className={`text-[#22c55e] transform transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <div 
                          className={`px-6 text-gray-600 dark:text-gray-400 transition-all duration-300 ease-in-out ${
                            isOpen ? 'max-h-[500px] pb-4 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                          }`}
                        >
                          <div className="pt-2 border-t border-gray-100 dark:border-gray-800 mt-2">
                            {faq.a}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#0a1628] rounded-xl p-8 text-center text-white border border-gray-800 shadow-xl">
            <h3 className="font-heading font-bold text-2xl mb-4">Still have questions?</h3>
            <p className="text-gray-300 mb-6">Our customer support team is available 24×7 to assist you.</p>
            <a 
              href="https://wa.me/91XXXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-green inline-flex px-8 gap-2"
            >
              <MessageCircle size={20} /> Chat with Support
            </a>
          </div>
        </div>
      </div>
      <ContactCTABand />
    </>
  );
}
