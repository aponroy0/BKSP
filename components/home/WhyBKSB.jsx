"use client";

import { Bus, GraduationCap, HandCoins } from "lucide-react";
import { useTranslations } from "next-intl";

function FeatureCard({ Icon, title, description }) {
  return (
    <div className="bg-[#F9F7F7] p-6 sm:p-8 rounded-lg shadow-sm border-t-4 border-[#3F72AF] text-center">
      <div
        className="bg-[#DBE2EF] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
        style={{ width: 64, height: 64 }}
      >
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
  const t = useTranslations("whyBKSB");

  const features = [
    {
      Icon: GraduationCap,
      title: t("scholarships.title"),
      description: t("scholarships.description"),
    },
    {
      Icon: HandCoins,
      title: t("financialAid.title"),
      description: t("financialAid.description"),
    },
    {
      Icon: Bus,
      title: t("transportation.title"),
      description: t("transportation.description"),
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl lg:px-8 mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#112D4E]">
            {t("heading")}
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            {t("subheading")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
