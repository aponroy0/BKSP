// WhyBKSB.jsx
// "Why BKSB?" — 4 feature highlight cards.
// Mobile: 1 col → sm: 2 col → lg: 4 col.
//
// Icons replaced with Lucide React SVG components —
// no icon font needed, crisp at all sizes.

import {
  Building2, // Hostel         — building / residence
  Bus,
  GraduationCap, // Scholarships   — graduation cap
  HandCoins, // Financial Aid  — hand holding coins
} from "lucide-react";

// Feature data with Lucide icon components
const features = [
  {
    Icon: GraduationCap,
    title: "Scholarships",
    description:
      "Merit-based scholarships available for outstanding academic performers.",
  },
  {
    Icon: HandCoins,
    title: "Financial Aid",
    description:
      "Supporting deserving students with financial assistance programs.",
  },
  {
    Icon: Building2,
    title: "Hostel",
    description:
      "Secure and disciplined residential facilities for focused learning.",
  },
  {
    Icon: Bus,
    title: "Transportation",
    description:
      "Safe and reliable transportation network covering the entire district.",
  },
];

// Single feature card — top blue border accent, circular icon badge, title, description
function FeatureCard({ Icon, title, description }) {
  return (
    // Border-t-4 gives the distinctive brand blue top stripe
    <div className="bg-[#F9F7F7] p-6 sm:p-8 rounded-lg shadow-sm border-t-4 border-[#3F72AF] text-center">
      {/* Circular icon badge in light blue */}
      <div
        className="bg-[#DBE2EF] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
        style={{ width: 64, height: 64 }}
      >
        {/*
          Lucide icons use stroke="currentColor" internally.
          Setting text-[#3F72AF] on the Icon component controls stroke color.
        */}
        <Icon size={30} className="text-[#3F72AF]" strokeWidth={1.75} />
      </div>

      <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-[#112D4E]">
        {title}
      </h4>
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function WhyBKSB() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl lg:px-8 mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className=" text-2xl sm:text-3xl md:text-4xl font-bold text-[#112D4E]">
            Why BKSB?
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            ` Comprehensive support for every student&apos;s journey`
          </p>
        </div>

        {/* 1 → 2 → 4 column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((f) => (
            <FeatureCard
              key={f.title}
              Icon={f.Icon}
              title={f.title}
              description={f.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
