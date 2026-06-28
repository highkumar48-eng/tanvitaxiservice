import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { BUSINESS } from "@/lib/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.website),
  title: {
    default: `${BUSINESS.name} | Premium Taxi Service in Gurugram & Delhi NCR`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Book premium taxi services in Gurugram & Delhi NCR. Airport transfers, outstation trips, local cab, corporate travel, and wedding cars. 24×7 availability, verified drivers, transparent pricing.",
  keywords: [
    "taxi service gurugram",
    "cab booking delhi ncr",
    "airport taxi gurugram",
    "outstation taxi",
    "corporate cab service",
    "wedding car rental gurugram",
    "tempo traveller hire",
    "delhi to jaipur cab",
    "tanvi taxi services",
    "one way taxi delhi",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BUSINESS.website,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | Premium Taxi in Gurugram & Delhi NCR`,
    description:
      "24×7 premium taxi service. Airport, outstation, local, corporate & wedding travel. Verified drivers, transparent pricing.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} - Premium Taxi Service`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} | Premium Taxi`,
    description: "24×7 premium taxi service in Gurugram & Delhi NCR.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: BUSINESS.website,
  },
};

// JSON-LD LocalBusiness schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BUSINESS.website,
  name: BUSINESS.name,
  description:
    "Premium taxi and cab service operating in Gurugram, Delhi NCR, and across India. Services include airport transfers, outstation travel, corporate cabs, and wedding car rental.",
  url: BUSINESS.website,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.state,
    postalCode: BUSINESS.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.4595,
    longitude: 77.0266,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer",
  areaServed: ["Gurugram", "Delhi", "Delhi NCR", "Noida", "Faridabad", "Ghaziabad"],
  serviceType: [
    "Airport Taxi",
    "Outstation Cab",
    "Local Taxi",
    "Corporate Travel",
    "Wedding Car",
    "Tempo Traveller",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1240",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://facebook.com/tanvitaxiservices",
    "https://instagram.com/tanvitaxiservices",
  ],
};

// FAQ Structured Data
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do I book a taxi with Tanvi Taxi Services?", acceptedAnswer: { "@type": "Answer", text: `Call ${BUSINESS.phone}, WhatsApp, or use our online booking form. We confirm instantly.` } },
    { "@type": "Question", name: "Do you provide airport pickup and drop services?", acceptedAnswer: { "@type": "Answer", text: "Yes, 24×7 airport taxi from and to IGI Airport T1, T2 & T3 with flight tracking." } },
    { "@type": "Question", name: "What vehicles do you have?", acceptedAnswer: { "@type": "Answer", text: "We operate Sedans, SUVs, Innova Crysta, and Tempo Travellers (12–17 seater). All AC-equipped." } },
    { "@type": "Question", name: "Do you offer outstation taxi services?", acceptedAnswer: { "@type": "Answer", text: "Yes. Delhi to Jaipur, Agra, Chandigarh, Dehradun, Manali, Haridwar and more. One-way and round-trip." } },
    { "@type": "Question", name: "What payment methods do you accept?", acceptedAnswer: { "@type": "Answer", text: "Cash, UPI (Google Pay, PhonePe, Paytm), and bank transfer. GST invoice provided." } },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${inter.className} bg-brand-bg text-white antialiased`}>
        {/* Skip to main content */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content">
          {children}
        </main>

        <Footer />
        <FloatingButtons />

        {/* Toast notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#141D2B",
              color: "#fff",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "0px",
              fontSize: "14px",
            },
            success: {
              iconTheme: {
                primary: "#12B76A",
                secondary: "#141D2B",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
