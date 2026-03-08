"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const toBanglaNumber = (str) => {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return String(str).replace(/[0-9]/g, (d) => banglaDigits[d]);
};

function StatItem({ value, label }) {
  return (
    <div className="text-center px-2">
      <div className="text-2xl sm:text-3xl font-bold text-[#3F72AF]">
        {value}
      </div>
      <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mt-1">
        {label}
      </div>
    </div>
  );
}

export default function StatsBar() {
  const t = useTranslations("stats");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";
  const bn = locale === "bn";

  const stats = [
    { value: bn ? toBanglaNumber("2002") : "2002", label: t("established") },
    {
      value: bn ? toBanglaNumber("1500") + "+" : "1500+",
      label: t("students"),
    },
    {
      value: bn ? toBanglaNumber("50") + "+" : "50+",
      label: t("expertTeachers"),
    },
    { value: "100%", label: t("passRate") },
  ];

  return (
    <section className="bg-white shadow-md relative z-20 mx-4 md:mx-auto md:-mt-6 max-w-6xl rounded-lg py-6 sm:py-8 px-4 sm:px-6 border border-[#DBE2EF]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 md:gap-0 md:divide-x md:divide-[#DBE2EF]">
        {stats.map((stat) => (
          <StatItem key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
