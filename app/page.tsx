import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import Services from "@/components/home/Services";
import Fleet from "@/components/home/Fleet";
import TourPackages from "@/components/home/TourPackages";
import Destinations from "@/components/home/Destinations";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <Services limit={4} showViewAll={true} />
      <Fleet limit={4} showViewAll={true} />
      <TourPackages limit={3} showViewAll={true} />
      <Destinations />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  );
}
