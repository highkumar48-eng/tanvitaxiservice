import Image from "next/image";
import ContactCTABand from "@/components/home/ContactCTABand";
import { createServiceInquiryMessage } from "@/lib/whatsappHelper";

export const metadata = {
  title: "Tour Packages | Tanvi Taxi Services",
  description: "Explore our curated religious and hill station tour packages from Delhi NCR to Agra, Mathura, Haridwar, Shimla, Manali, and more.",
};

export default function TourPackagesPage() {
  const packages = [
    {
      id: "vrindavan",
      name: "VRINDAVAN",
      landmark: "Prem Mandir",
      image: "/images/destinations/agra.png", // reusing placeholders for ones we didn't generate
      desc: "Vrindavan is one of the most sacred cities in Hinduism, located in the Mathura district of Uttar Pradesh, approximately 150 km from Delhi. This ancient city is believed to be where Lord Krishna spent his childhood years, playing and performing his divine leelas. Vrindavan has been a major pilgrimage destination for centuries. The city is home to over 5,000 temples, the most iconic being the Prem Mandir — a magnificent white marble temple.",
      duration: "Day trip (5–6 hours from Delhi) or overnight",
      highlights: ["Prem Mandir", "Banke Bihari Temple", "ISKCON Vrindavan", "Yamuna Ghats", "Holi Festival"]
    },
    {
      id: "mathura",
      name: "MATHURA",
      landmark: "Krishna Janmabhoomi",
      image: "/images/destinations/mathura.png",
      desc: "Mathura, the birthplace of Lord Krishna, is one of the seven sacred cities (Sapta Puri) of Hinduism and one of the oldest continuously inhabited cities in India, with a history spanning over 2,500 years. Located 145 km from Delhi on the banks of the Yamuna river, Mathura holds immense religious significance. The Krishna Janmabhoomi temple complex marks the exact spot where Lord Krishna is believed to have been born.",
      duration: "Day trip (3–4 hours from Delhi) or combine with Vrindavan",
      highlights: ["Krishna Janmabhoomi", "Vishram Ghat", "Dwarkadhish Temple", "25 Ghats", "Braj Holi", "Famous Pedas"]
    },
    {
      id: "agra",
      name: "AGRA",
      landmark: "Taj Mahal",
      image: "/images/destinations/agra.png",
      desc: "Agra is home to one of the Seven Wonders of the World — the Taj Mahal, a UNESCO World Heritage Site. Located 200 km from Delhi on the banks of the Yamuna, Agra served as the capital of the Mughal Empire. The Taj Mahal was commissioned by Emperor Shah Jahan in 1632. Agra Fort and Fatehpur Sikri are other major UNESCO Heritage Sites here.",
      duration: "Full day trip or overnight",
      highlights: ["Taj Mahal (Sunrise/Sunset)", "Agra Fort", "Fatehpur Sikri", "Mehtab Bagh", "Mughal Cuisine"]
    },
    {
      id: "haridwar",
      name: "HARIDWAR",
      landmark: "Har Ki Pauri",
      image: "/images/destinations/haridwar.png",
      desc: "Haridwar, meaning 'Gateway to God', is one of the holiest cities in Hinduism and one of the four sites of the Kumbh Mela. Situated where the Ganges river descends from the Himalayas to the plains, Haridwar has been a place of pilgrimage since ancient times. Har Ki Pauri is the most sacred ghat where the Ganga Aarti takes place every evening.",
      duration: "Day trip (250 km from Delhi) or overnight",
      highlights: ["Ganga Aarti at Har Ki Pauri", "Mansa Devi Temple", "Chandi Devi", "Kumbh Mela site", "Char Dham starting point"]
    },
    // Adding just a few more for structure completeness without bloating code too much
    {
      id: "rishikesh",
      name: "RISHIKESH",
      landmark: "Lakshman Jhula",
      image: "/images/destinations/haridwar.png",
      desc: "Rishikesh, known as the 'Yoga Capital of the World' and 'Gateway to the Himalayas,' is a spiritual and adventure destination 240 km from Delhi. Famous for Lakshman Jhula, Beatles Ashram, and being India's premier adventure sports destination offering white-water rafting and bungee jumping.",
      duration: "Day trip or 2–3 days",
      highlights: ["Lakshman Jhula", "Ganga Aarti", "White Water Rafting", "Beatles Ashram", "Yoga & Meditation"]
    }
  ];

  return (
    <>
      <div className="bg-[#f8f9fa] dark:bg-[#020617] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-heading font-bold text-[#1a1a2e] dark:text-white mb-4">
              Tour Packages
            </h1>
            <div className="green-underline mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              Discover the rich cultural heritage, spiritual landmarks, and breathtaking hill stations of North India with our expertly crafted tour packages.
            </p>
          </div>

          <div className="space-y-12">
            {packages.map((pkg) => (
              <div id={pkg.id} key={pkg.id} className="card-white overflow-hidden scroll-mt-24">
                <div className="relative w-full h-[250px] md:h-[400px]">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h2 className="text-3xl font-heading font-bold mb-1">{pkg.name}</h2>
                    <p className="text-[#22c55e] font-medium text-lg">({pkg.landmark})</p>
                  </div>
                </div>
                
                <div className="p-6 md:p-10">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    {pkg.desc}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="font-bold text-[#1a1a2e] dark:text-white mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#1e293b] flex items-center justify-center text-xs text-white">⏱</span>
                        Duration
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">{pkg.duration}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a2e] dark:text-white mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#1e293b] flex items-center justify-center text-xs text-white">★</span>
                        Highlights
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {pkg.highlights.map((hlt, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                            <span className="text-[#22c55e]">✓</span> {hlt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <a
                    href={createServiceInquiryMessage(`${pkg.name} Tour Package`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-navy w-full md:w-auto md:px-12"
                  >
                    Book Tour on WhatsApp →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactCTABand />
    </>
  );
}
