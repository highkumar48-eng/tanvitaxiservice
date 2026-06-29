import DestinationsGrid from "@/components/home/DestinationsGrid";
import ContactCTABand from "@/components/home/ContactCTABand";

export const metadata = {
  title: "Destinations | Tanvi Taxi Services",
  description: "Browse our popular destinations across North India and book a taxi or tour package today.",
};

export default function DestinationsPage() {
  return (
    <>
      <div className="pt-8">
        <DestinationsGrid />
      </div>
      <ContactCTABand />
    </>
  );
}
