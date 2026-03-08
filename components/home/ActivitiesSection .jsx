"use client";

import { BookOpen, Mic, Music, Palette, Puzzle, Shield } from "lucide-react";
import { useTranslations } from "next-intl";

const ACTIVITY_ICONS = [Mic, Palette, Music, BookOpen, Puzzle, Shield];

function ActivityCard({ Icon, label }) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition border border-[#DBE2EF] group cursor-pointer">
      <div
        className="mx-auto bg-[#F9F7F7] rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#3F72AF] transition-colors duration-200"
        style={{ width: 52, height: 52 }}
      >
        <Icon
          size={24}
          className="text-[#3F72AF] group-hover:text-white transition-colors duration-200"
          strokeWidth={1.75}
        />
      </div>
      <h3 className="font-bold text-[#112D4E] text-xs sm:text-sm leading-snug">
        {label}
      </h3>
    </div>
  );
}

export default function ActivitiesSection() {
  const t = useTranslations("activitiesSection");

  const activities = [
    { Icon: Mic, label: t("debateClub") },
    { Icon: Palette, label: t("artsClub") },
    { Icon: Music, label: t("musicClass") },
    { Icon: BookOpen, label: t("arabicClass") },
    { Icon: Puzzle, label: t("activityLearning") },
    { Icon: Shield, label: t("selfDefense") },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#DBE2EF]/20">
      <div className="max-w-7xl lg:px-8 mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="text-[#3F72AF] font-bold tracking-wider uppercase text-xs sm:text-sm">
            {t("badge")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 md:mb-4 text-[#112D4E]">
            {t("heading")}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            {t("description")}
          </p>
        </div>

        {/* 2 → 3 → 6 column grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {activities.map((a) => (
            <ActivityCard key={a.label} Icon={a.Icon} label={a.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
