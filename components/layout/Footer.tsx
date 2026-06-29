import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white pt-16 pb-8 border-t-[6px] border-[#22c55e]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#22c55e] bg-white">
                <Image src="/images/logo.png" alt="Tanvi Taxi Services Logo" fill className="object-cover" />
              </div>
              <span className="font-heading font-bold text-2xl text-white">
                {COMPANY.name}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              {COMPANY.name} is a trusted transportation company serving Delhi NCR since {COMPANY.since}. We provide safe, comfortable, and reliable taxi services for all your travel needs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-[#22c55e] transition-colors" aria-label="Facebook">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-[#22c55e] transition-colors" aria-label="Instagram">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-[#22c55e] transition-colors" aria-label="YouTube">
                YT
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6 flex flex-col">
              Quick Links
              <span className="w-12 h-1 bg-[#22c55e] mt-2 rounded"></span>
            </h3>
            <ul className="grid grid-cols-1 gap-3">
              {["Home", "About Us", "Contact", "FAQ", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <Link
                    href={
                      item === "Home" ? "/" : 
                      item === "About Us" ? "/about" : 
                      item === "Contact" ? "/contact" : 
                      item === "FAQ" ? "/faq" : "#"
                    }
                    className="text-gray-300 hover:text-[#22c55e] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#22c55e]">›</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Address */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6 flex flex-col">
              Contact Us
              <span className="w-12 h-1 bg-[#22c55e] mt-2 rounded"></span>
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href={`tel:${COMPANY.phone}`} className="flex items-start gap-3 hover:text-[#22c55e] transition-colors">
                  <Phone className="text-[#22c55e] shrink-0 mt-1" size={20} />
                  <span>{COMPANY.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-3 hover:text-[#22c55e] transition-colors">
                  <Mail className="text-[#22c55e] shrink-0 mt-1" size={20} />
                  <span>{COMPANY.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#22c55e] shrink-0 mt-1" size={20} />
                  <span>{COMPANY.address}</span>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <a 
                href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%20${COMPANY.name}%2C%20I%20want%20to%20book%20a%20taxi.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green w-full"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1e293b] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>Copyright © {COMPANY.name} {COMPANY.since}–{new Date().getFullYear()}. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
