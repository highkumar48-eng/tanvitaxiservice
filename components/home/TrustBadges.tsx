import { ShieldCheck, UserCheck, Clock, IndianRupee, Users } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    { icon: <ShieldCheck size={32} className="text-[#22c55e]" />, text: "Verified Fleet" },
    { icon: <UserCheck size={32} className="text-[#22c55e]" />, text: "Pro Drivers" },
    { icon: <Clock size={32} className="text-[#22c55e]" />, text: "24×7 Support" },
    { icon: <IndianRupee size={32} className="text-[#22c55e]" />, text: "Fair Pricing" },
    { icon: <Users size={32} className="text-[#22c55e]" />, text: "500+ Happy Customers" },
  ];

  return (
    <section className="py-12 bg-white dark:bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 w-32 text-center group">
              <div className="bg-[#f8f9fa] dark:bg-[#1e293b] p-4 rounded-full group-hover:-translate-y-1 transition-transform border border-gray-100 dark:border-gray-800">
                {badge.icon}
              </div>
              <span className="font-medium text-sm text-[#1a1a2e] dark:text-gray-200">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
