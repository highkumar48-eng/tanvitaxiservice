"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Car, Copy, Check, Map } from "lucide-react";
import { BUSINESS, CALL_URL, NAV_LINKS, SOCIAL, WHATSAPP_PREFILL } from "@/lib/constants";

const serviceLinks = [
  { label: "Airport Transfer", href: "/taxi-services" },
  { label: "Local Taxi", href: "/taxi-services" },
  { label: "One Way Taxi", href: "/taxi-services" },
  { label: "Round Trip Taxi", href: "/taxi-services" },
  { label: "Outstation Taxi", href: "/taxi-services" },
  { label: "Corporate Taxi", href: "/taxi-services" },
  { label: "Tempo Traveller", href: "/taxi-services" },
];

function WAIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? "w-4 h-4"}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <footer className="bg-[#081423] border-t border-brand-border text-brand-text-sec" role="contentinfo">
      {/* Accent Line */}
      <div className="h-1 bg-gradient-to-r from-brand-blue to-brand-green w-full" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 mb-6 group"
              aria-label={`${BUSINESS.name} — Home`}
            >
              <div className="w-8 h-8 bg-brand-blue flex items-center justify-center rounded-lg">
                <Car size={16} className="text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-black text-white uppercase tracking-wide">Tanvi</span>
                <span className="text-[9px] font-bold text-brand-blue uppercase tracking-[1.5px]">
                  Taxi Services
                </span>
              </div>
            </Link>

            <p className="text-xs font-light text-brand-text-sec leading-relaxed mb-6 max-w-xs">
              Premium corporate taxi and travel agency. Serving Delhi NCR with verified chauffeurs since 2012. Providing safe, transparently priced journeys daily.
            </p>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-card border border-brand-border mb-6 rounded-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
              <span className="text-[10px] text-brand-text-sec font-bold uppercase tracking-widest">Available 24×7</span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2">
              {[
                {
                  href: SOCIAL.facebook,
                  label: "Facebook",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                },
                {
                  href: SOCIAL.instagram,
                  label: "Instagram",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  href: SOCIAL.twitter,
                  label: "Twitter / X",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 bg-brand-card border border-brand-border flex items-center justify-center text-brand-text-sec hover:text-white hover:border-brand-blue hover:bg-brand-hover rounded-lg transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-[1.5px] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs font-medium uppercase tracking-[0.5px] text-brand-text-sec hover:text-white transition-colors duration-150 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-brand-border group-hover:bg-brand-blue transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-[1.5px] mb-6">
              Our Services
            </h3>
            <ul className="space-y-3" role="list">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs font-medium uppercase tracking-[0.5px] text-brand-text-sec hover:text-white transition-colors duration-150 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-brand-border group-hover:bg-brand-blue transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-[1.5px] mb-6">
              Contact &amp; Payment
            </h3>
            <ul className="space-y-4 mb-6" role="list">
              <li className="flex items-center justify-between gap-2 border-b border-brand-border/40 pb-2">
                <a
                  href={CALL_URL}
                  className="flex items-start gap-3 text-xs font-light text-brand-text-sec hover:text-white transition-colors group"
                >
                  <Phone size={14} className="mt-0.5 flex-shrink-0 text-brand-blue" />
                  <span>{BUSINESS.phone}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(BUSINESS.phone, "phone")}
                  className="p-1 hover:text-white text-slate-500 transition-colors"
                  title="Copy Phone"
                >
                  {copiedKey === "phone" ? <Check size={12} className="text-brand-green" /> : <Copy size={12} />}
                </button>
              </li>

              <li className="flex items-center justify-between gap-2 border-b border-brand-border/40 pb-2">
                <a
                  href={WHATSAPP_PREFILL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-xs font-light text-brand-text-sec hover:text-brand-green transition-colors group"
                >
                  <WAIcon className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-brand-green" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </li>

              <li className="flex items-center justify-between gap-2 border-b border-brand-border/40 pb-2">
                <div className="flex items-center gap-3 text-xs font-light text-brand-text-sec">
                  <Mail size={14} className="flex-shrink-0 text-brand-blue" />
                  <span className="break-all">{BUSINESS.email}</span>
                </div>
              </li>

              <li className="flex items-center justify-between gap-2 border-b border-brand-border/40 pb-2">
                <a
                  href="https://maps.google.com/?q=Gurugram+Haryana+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-xs font-light text-brand-text-sec hover:text-white transition-colors"
                >
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-brand-blue" />
                  <span>{BUSINESS.address}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(BUSINESS.address, "addr")}
                  className="p-1 hover:text-white text-slate-500 transition-colors"
                  title="Copy Address"
                >
                  {copiedKey === "addr" ? <Check size={12} className="text-brand-green" /> : <Copy size={12} />}
                </button>
              </li>

              <li className="flex items-center justify-between gap-2 border-b border-brand-border/40 pb-2">
                <div className="flex items-start gap-3 text-xs font-light text-brand-text-sec">
                  <span className="text-[10px] font-bold text-brand-blue tracking-wider mt-0.5">UPI</span>
                  <span>{BUSINESS.upiId}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(BUSINESS.upiId, "upi")}
                  className="p-1 hover:text-white text-slate-500 transition-colors"
                  title="Copy UPI"
                >
                  {copiedKey === "upi" ? <Check size={12} className="text-brand-green" /> : <Copy size={12} />}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-light text-brand-text-sec text-center md:text-left">
            &copy; {currentYear} {BUSINESS.name}. All Rights Reserved. GSTIN: {BUSINESS.gst}
          </p>
          <p className="text-[11px] font-light text-brand-text-sec/60 text-center md:text-right">
            Premium Taxi &amp; Tour Travel Operator. Serving NCR since 2012.
          </p>
        </div>
      </div>
    </footer>
  );
}
