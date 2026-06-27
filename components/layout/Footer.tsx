import Link from "next/link";
import { Phone, Mail, MapPin, Car } from "lucide-react";
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

  return (
    <footer className="bg-[#080F23] border-t border-[#1E3264]" role="contentinfo">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 mb-5 group"
              aria-label={`${BUSINESS.name} — Home`}
            >
              <div className="w-9 h-9 rounded-lg bg-[#1B4FD8] flex items-center justify-center group-hover:bg-[#2563EB] transition-colors">
                <Car size={18} className="text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold text-white">Tanvi</span>
                <span className="text-[10px] font-semibold text-[#2563EB] uppercase tracking-widest">
                  Taxi Services
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#64748B] leading-relaxed mb-5 max-w-xs">
              Professional taxi and travel services in Gurugram &amp; Delhi NCR. Available 24×7
              for airport transfers, outstation trips, corporate travel and tours.
            </p>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0F1E45] border border-[#1E3264] rounded-lg mb-5">
              <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
              <span className="text-xs text-[#94A3B8] font-medium">Available 24×7</span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2.5">
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
                  className="w-8 h-8 rounded-lg bg-[#0F1E45] border border-[#1E3264] flex items-center justify-center text-[#64748B] hover:text-white hover:bg-[#1B4FD8] hover:border-[#1B4FD8] transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#64748B] hover:text-white transition-colors duration-150 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#1E3264] group-hover:bg-[#1B4FD8] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/booking"
                  className="text-sm text-[#64748B] hover:text-white transition-colors duration-150 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#1E3264] group-hover:bg-[#1B4FD8] transition-colors" />
                  Book a Cab
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-[#64748B] hover:text-white transition-colors duration-150 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#1E3264] group-hover:bg-[#1B4FD8] transition-colors" />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5" role="list">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#64748B] hover:text-white transition-colors duration-150 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#1E3264] group-hover:bg-[#1B4FD8] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4 mb-5" role="list">
              <li>
                <a
                  href={CALL_URL}
                  className="flex items-start gap-3 text-sm text-[#64748B] hover:text-white transition-colors group"
                >
                  <Phone size={14} className="mt-0.5 flex-shrink-0 text-[#1B4FD8]" />
                  <span>{BUSINESS.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_PREFILL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-[#64748B] hover:text-[#25D366] transition-colors group"
                >
                  <WAIcon className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#25D366]" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-start gap-3 text-sm text-[#64748B] hover:text-white transition-colors"
                >
                  <Mail size={14} className="mt-0.5 flex-shrink-0 text-[#1B4FD8]" />
                  <span className="break-all">{BUSINESS.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-[#64748B]">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#1B4FD8]" />
                  <span>{BUSINESS.address}, {BUSINESS.state} — {BUSINESS.pincode}</span>
                </div>
              </li>
            </ul>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-[#1E3264] h-32">
              <iframe
                src={BUSINESS.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tanvi Taxi Services Location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1E3264]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#475569]">
            © {currentYear} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-xs text-[#475569]">
            Serving{" "}
            <span className="text-[#2563EB]">Gurugram · Delhi · Noida · Faridabad · Ghaziabad</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
