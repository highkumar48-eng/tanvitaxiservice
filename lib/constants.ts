// Business Constants — Update these with real values before launch
export const BUSINESS = {
  name: "Tanvi Taxi Services",
  tagline: "Safe, Reliable & On-Time",
  phone: "+91-9650277624",
  whatsapp: "919650277624", // without + for wa.me links
  email: "tanvitaxiservices@gmail.com",
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

export type NavLink = {
  label: string;
  href: string;
  sublinks?: { label: string; href: string }[];
};

export const TOUR_PACKAGES = [
  { label: "Agra Tour", href: "/tour-packages" },
  { label: "Mathura & Vrindavan", href: "/tour-packages" },
  { label: "Haridwar & Rishikesh", href: "/tour-packages" },
  { label: "Shimla & Kufri", href: "/tour-packages" },
  { label: "Nainital Tour", href: "/tour-packages" },
  { label: "Jim Corbett Safari", href: "/tour-packages" },
  { label: "Mussoorie", href: "/tour-packages" },
  { label: "Dehradun", href: "/tour-packages" },
  { label: "Kasauli", href: "/tour-packages" },
  { label: "Solan", href: "/tour-packages" },
  { label: "Chardham Yatra", href: "/tour-packages" },
  { label: "Golden Temple", href: "/tour-packages" },
];

export const DESTINATIONS = [
  { label: "Agra", href: "/destinations" },
  { label: "Mathura", href: "/destinations" },
  { label: "Vrindavan", href: "/destinations" },
  { label: "Haridwar", href: "/destinations" },
  { label: "Rishikesh", href: "/destinations" },
  { label: "Dehradun", href: "/destinations" },
  { label: "Mussoorie", href: "/destinations" },
  { label: "Kullu", href: "/destinations" },
  { label: "Kasauli", href: "/destinations" },
  { label: "Shimla", href: "/destinations" },
  { label: "Kufri", href: "/destinations" },
  { label: "Nainital", href: "/destinations" },
  { label: "Solan", href: "/destinations" },
  { label: "Binsar", href: "/destinations" },
  { label: "Ranikhet", href: "/destinations" },
  { label: "Jim Corbett", href: "/destinations" },
  { label: "Haldwani", href: "/destinations" },
  { label: "Almora", href: "/destinations" },
  { label: "Chardham Yatra", href: "/destinations" },
  { label: "Golden Temple", href: "/destinations" },
];

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Taxi Services",
    href: "/taxi-services",
    sublinks: [
      { label: "Airport Transfer", href: "/taxi-services" },
      { label: "Local Taxi", href: "/taxi-services" },
      { label: "One Way Taxi", href: "/taxi-services" },
      { label: "Round Trip Taxi", href: "/taxi-services" },
      { label: "Outstation Taxi", href: "/taxi-services" },
      { label: "Corporate Taxi", href: "/taxi-services" },
      { label: "Tempo Traveller", href: "/taxi-services" },
    ],
  },
  {
    label: "Tour Packages",
    href: "/tour-packages",
    sublinks: TOUR_PACKAGES,
  },
  { label: "Fleet", href: "/fleet" },
  { label: "Destinations", href: "/destinations" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Become a Driver", href: "/become-a-driver" },
];

export const SERVICE_LINKS = [
  { label: "Airport Transfer", href: "/taxi-services", icon: "Plane" },
  { label: "Local Taxi", href: "/taxi-services", icon: "Navigation" },
  { label: "One Way Taxi", href: "/taxi-services", icon: "ArrowRight" },
  { label: "Round Trip Taxi", href: "/taxi-services", icon: "RefreshCw" },
  { label: "Outstation Taxi", href: "/taxi-services", icon: "MapPin" },
  { label: "Corporate Taxi", href: "/taxi-services", icon: "Briefcase" },
  { label: "Tempo Traveller", href: "/taxi-services", icon: "Bus" },
] as const;

export const PAYMENT = {
  upiId: "tanvitaxi@upi",
  accountName: "Tanvi Taxi Services",
  accountNumber: "XXXXXXXXXXXX",
  ifsc: "HDFC0001234",
  bankName: "HDFC Bank",
  branch: "Gurugram Main Branch",
} as const;
