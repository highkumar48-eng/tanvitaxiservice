import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { COMPANY } from "@/lib/constants";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import DarkModeScript from "@/components/layout/DarkModeScript";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

export const viewport: Viewport = {
  themeColor: "#0a1628",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} | Reliable Taxi Services in Delhi NCR`,
    template: `%s | ${COMPANY.name}`,
  },
  description: "Book safe, reliable, and affordable taxi services in Delhi NCR. Specializing in outstation trips, airport transfers, corporate travel, and religious tour packages.",
  keywords: [
    "taxi service delhi",
    "cab booking delhi ncr",
    "airport taxi delhi",
    "outstation taxi",
    "tanvi taxi services",
    "one way taxi delhi",
    "delhi to agra taxi",
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <DarkModeScript />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Header />
        
        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
        <WhatsAppButton />

        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "var(--card-bg)",
              color: "var(--text)",
              border: "1px solid rgba(0, 0, 0, 0.05)",
            },
            success: {
              iconTheme: {
                primary: "var(--primary-green)",
                secondary: "white",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
