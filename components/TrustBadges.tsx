import { CheckCircle2, Award, Globe, Package } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: Award,
      text: "ABAP AS5810 Certified",
      description: "World's highest home compostability standard",
    },
    {
      icon: Package,
      text: "Made to Order from 2,000 Units",
      description: "Low MOQ for growing brands",
    },
    {
      icon: Globe,
      text: "Shipped Worldwide",
      description: "Delivering to UK & beyond",
    },
    {
      icon: CheckCircle2,
      text: "48-Hour Quote Guarantee",
      description: "Fast, transparent pricing",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center space-y-2 group"
        >
          <div className="p-3 rounded-full bg-sage-100 text-sage-700 group-hover:bg-sage-200 transition-colors">
            <badge.icon className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-charcoal-900 text-sm md:text-base">
              {badge.text}
            </p>
            <p className="text-xs md:text-sm text-charcoal-600 mt-1">
              {badge.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
