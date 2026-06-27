import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Services from "@/components/home/Services";
import Fleet from "@/components/home/Fleet";
import BookingForm from "@/components/home/BookingForm";
import FareCalculator from "@/components/home/FareCalculator";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import Gallery from "@/components/home/Gallery";
import Contact from "@/components/home/Contact";
import QRPayment from "@/components/home/QRPayment";
import TourPackages from "@/components/home/TourPackages";
import Destinations from "@/components/home/Destinations";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TourPackages />
      <Services />
      <Destinations />
      <Fleet />
      <BookingForm />
      <FareCalculator />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Gallery />
      <Contact />
      <QRPayment />
    </>
  );
}
