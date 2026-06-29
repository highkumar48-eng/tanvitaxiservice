export const COMPANY = {
  name: "Tanvi Taxi Services",
  phone: "+91-XXXXXXXXXX",
  whatsapp: "91XXXXXXXXXX",
  email: "tanvitaxiservices@gmail.com",
  address: "[Office Address, Gurugram, Haryana]",
  since: "2012",
  tagline: "Safe • Reliable • Affordable",
  website: "https://tanvitaxiservices.com"
};

export const WHATSAPP_BASE = `https://wa.me/${COMPANY.whatsapp}?text=`;

export const FARE_RATES = {
  perKm: { dzire: 12, ertiga: 14, innova: 18, tempo: 22 },
  driverAllowance: 250,
  gst: 0.05,
  minKm: 250,
  nightSurcharge: 0.15
};

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Taxi Services",
    href: "/services",
    dropdown: [
      { name: "Airport Transfer", href: "/services#airport-transfer" },
      { name: "One Way Taxi", href: "/services#one-way-taxi" },
      { name: "Round Trip", href: "/services#round-trip" },
      { name: "Corporate Taxi", href: "/services#corporate-taxi" },
      { name: "Local Rental", href: "/services#local-rental" },
      { name: "Hourly Rental", href: "/services#hourly-rental" },
      { name: "Wedding Taxi", href: "/services#wedding-taxi" },
      { name: "Tempo Traveller", href: "/services#tempo-traveller" },
    ]
  },
  {
    name: "Tour Packages",
    href: "/tour-packages",
    dropdown: [
      { name: "Vrindavan", href: "/tour-packages#vrindavan" },
      { name: "Mathura", href: "/tour-packages#mathura" },
      { name: "Agra", href: "/tour-packages#agra" },
      { name: "Haridwar", href: "/tour-packages#haridwar" },
      { name: "Rishikesh", href: "/tour-packages#rishikesh" },
      { name: "Shimla", href: "/tour-packages#shimla" },
      { name: "Kullu Valley", href: "/tour-packages#kullu-valley" },
      { name: "Manali", href: "/tour-packages#manali" },
      { name: "Mussoorie", href: "/tour-packages#mussoorie" },
      { name: "Nainital", href: "/tour-packages#nainital" },
    ]
  },
  { name: "Fleet", href: "/fleet" },
  { name: "Destinations", href: "/destinations" },
  { name: "Become Driver", href: "/become-driver" },
  { name: "Booking", href: "/booking" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];
