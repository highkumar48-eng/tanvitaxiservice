// Business Constants — Update these with real values before launch
export const BUSINESS = {
  name: "Tanvi Taxi Services",
  tagline: "Your Premium Ride, On Demand",
  phone: "+91-8779362060",
  whatsapp: "918779362060", // without + for wa.me links
  email: "info@tanvitaxiservices.com",
  upiId: "tanvitaxi@upi",
  address: "Gurugram, Haryana, India",
  city: "Gurugram",
  state: "Haryana",
  pincode: "122001",
  gst: "06AXXXX0000X0XX",
  website: "https://tanvitaxiservices.com",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112167.95710947085!2d76.9358059!3d28.4594965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000",
} as const;

export const WHATSAPP_PREFILL = (from = "", to = "") =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
    `Hi Tanvi Taxi Services! I need a cab${from ? ` from ${from}` : ""}${to ? ` to ${to}` : ""}. Please share availability and pricing.`
  )}`;

export const CALL_URL = `tel:${BUSINESS.phone}`;

export const SOCIAL = {
  instagram: "https://instagram.com/tanvitaxiservices",
  facebook: "https://facebook.com/tanvitaxiservices",
  youtube: "https://youtube.com/@tanvitaxiservices",
  twitter: "https://twitter.com/tanvitaxi",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#why-choose-us" },
  { label: "Services", href: "/#services" },
  { label: "Fleet", href: "/#fleet" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
] as const;

export const SERVICE_LINKS = [
  { label: "Airport Taxi", href: "/airport-taxi", icon: "Plane" },
  { label: "Outstation Taxi", href: "/outstation-taxi", icon: "MapPin" },
  { label: "Local Taxi", href: "/local-taxi", icon: "Navigation" },
  { label: "One Way Taxi", href: "/one-way-taxi", icon: "ArrowRight" },
  { label: "Round Trip", href: "/round-trip", icon: "RefreshCw" },
  { label: "Corporate Travel", href: "/corporate-travel", icon: "Briefcase" },
  { label: "Wedding Car", href: "/wedding-car", icon: "Heart" },
  { label: "Tempo Traveller", href: "/tempo-traveller", icon: "Bus" },
] as const;

export const PAYMENT = {
  upiId: "tanvitaxi@upi",
  accountName: "Tanvi Taxi Services",
  accountNumber: "XXXXXXXXXXXX",
  ifsc: "HDFC0001234",
  bankName: "HDFC Bank",
  branch: "Gurugram Main Branch",
} as const;
