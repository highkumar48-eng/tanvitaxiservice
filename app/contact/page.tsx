"use client";

import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function ContactPage() {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fd = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(fd.entries());
    
    let msg = `Hi Tanvi Taxi Services, I have an inquiry:\n\n`;
    msg += `Name: ${data.name}\n`;
    msg += `Phone: ${data.phone}\n`;
    if (data.email) msg += `Email: ${data.email}\n`;
    msg += `Message: ${data.message}\n`;

    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="bg-[#f8f9fa] dark:bg-[#020617] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold text-[#1a1a2e] dark:text-white mb-4">
            Contact Us
          </h1>
          <div className="green-underline mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            We are here to help you 24×7. Reach out to us via phone, WhatsApp, or email for bookings, inquiries, or feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="card-white p-8 text-center flex flex-col items-center hover:border-[#22c55e] transition-colors">
            <div className="bg-[#f8f9fa] dark:bg-[#1e293b] p-4 rounded-full text-[#22c55e] mb-4">
              <Phone size={32} />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#1a1a2e] dark:text-white mb-2">Call Us</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">Available 24×7 for instant booking and support.</p>
            <a href={`tel:${COMPANY.phone}`} className="font-bold text-[#22c55e] hover:text-[#16a34a]">{COMPANY.phone}</a>
          </div>

          <div className="card-white p-8 text-center flex flex-col items-center hover:border-[#22c55e] transition-colors">
            <div className="bg-[#f8f9fa] dark:bg-[#1e293b] p-4 rounded-full text-[#25D366] mb-4">
              <MessageCircle size={32} />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#1a1a2e] dark:text-white mb-2">WhatsApp</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">Quickest way to get fare estimates and confirm bookings.</p>
            <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-bold text-[#25D366] hover:text-[#1DA851]">+91-{COMPANY.whatsapp.substring(2)}</a>
          </div>

          <div className="card-white p-8 text-center flex flex-col items-center hover:border-[#22c55e] transition-colors">
            <div className="bg-[#f8f9fa] dark:bg-[#1e293b] p-4 rounded-full text-[#22c55e] mb-4">
              <Mail size={32} />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#1a1a2e] dark:text-white mb-2">Email</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">For corporate inquiries and formal quotations.</p>
            <a href={`mailto:${COMPANY.email}`} className="font-bold text-[#22c55e] hover:text-[#16a34a] break-all">{COMPANY.email}</a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Office Info & Map */}
          <div>
            <div className="card-white p-8 mb-8">
              <h3 className="font-heading font-bold text-2xl text-[#1a1a2e] dark:text-white mb-6">Our Office</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#f8f9fa] dark:bg-[#1e293b] p-3 rounded-lg text-[#22c55e]">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a2e] dark:text-white">Business Hours</h4>
                    <p className="text-gray-600 dark:text-gray-400">Monday – Sunday, 24×7</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#f8f9fa] dark:bg-[#1e293b] p-3 rounded-lg text-[#22c55e]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a2e] dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">{COMPANY.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card-white overflow-hidden h-[350px]">
              {/* Placeholder Map - Client to update src */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112173.34415849887!2d76.95317937512966!3d28.422885871279883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="card-white p-8 md:p-10">
            <h3 className="font-heading font-bold text-2xl text-[#1a1a2e] dark:text-white mb-2">Send an Inquiry</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Fill out the form below and we will get back to you immediately.</p>
            
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name*</label>
                <input type="text" name="name" required className="w-full p-3 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:border-[#22c55e]" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number*</label>
                <input type="tel" name="phone" required className="w-full p-3 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:border-[#22c55e]" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                <input type="email" name="email" className="w-full p-3 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:border-[#22c55e]" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message*</label>
                <textarea name="message" required rows={4} className="w-full p-3 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:border-[#22c55e]" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="submit" className="w-full btn-green py-4 text-lg justify-center shadow-lg">
                Send via WhatsApp →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
