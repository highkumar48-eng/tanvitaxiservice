import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      city: "Gurugram",
      text: "Booked a round trip to Agra. The driver was very professional, the Innova was spotless, and the pricing was exactly as quoted on WhatsApp. Highly recommended!",
      stars: 5
    },
    {
      name: "Priya Patel",
      city: "Delhi",
      text: "Used Tanvi Taxi for an early morning airport drop to IGI T3. The driver arrived 15 mins early and helped with luggage. Very reliable service for odd hours.",
      stars: 5
    },
    {
      name: "Amit Kumar",
      city: "Noida",
      text: "We hired a Tempo Traveller for a family trip to Haridwar. The vehicle was in great condition and the driver was polite and drove very safely. Great experience.",
      stars: 5
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-[#1a1a2e] dark:text-white mb-2">
            What Our Customers Say
          </h2>
          <div className="green-underline"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="card-white p-8 relative">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 text-[60px] text-[#22c55e] opacity-20 font-serif leading-none">
                "
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#22c55e] text-[#22c55e]" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic mb-6 leading-relaxed relative z-10">
                "{review.text}"
              </p>
              <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
                <p className="font-heading font-bold text-[#1a1a2e] dark:text-white">{review.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{review.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
