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

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <Services />
      <Fleet />
      <BookingForm />
      <FareCalculator />
      <Testimonials />
      <FAQ />
      <Gallery />
      <Contact />
      <QRPayment />
    </>
  );
}
