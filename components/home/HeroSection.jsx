"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const toBanglaNumber = (num) => {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return String(num).replace(/[0-9]/g, (d) => banglaDigits[d]);
};

export default function HeroSection() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";
  const t = useTranslations("hero");
  const year =
    locale === "bn"
      ? toBanglaNumber(new Date().getFullYear())
      : new Date().getFullYear();

  return (
    <header className="relative w-full min-h-145 md:min-h-160 overflow-hidden flex items-start pt-20 sm:pt-24 md:pt-28 pb-24 sm:pb-28 md:pb-32">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjdZ2n7rTBQwxGyxq-a9Wf3-nyflMFshJ8uWNqjNUdYXW-bOT7WzXbXfnnuhDam8-hg_2B-9_6s7ImbyTtYnivJYF6AjScewUKZBctkj5380t9LzL4OkBf_b893S0y3pzS8PQLYAQpo2yNMZQP4HyFG3EOt7pkPg3FugPSieVqWJAgsJzo7LmQzT7IRxkkfoDAf0z9ALD0ExgrRZx2GxB4W-Fa9TuU0rtWMbaXYQISBV83mFtKu10TdcEn5iW1losKgMCMMctH1YYX"
          alt="Students in modern classroom"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#112D4E]/95 via-[#112D4E]/80 to-[#112D4E]/50 md:from-[#112D4E]/90 md:to-[#112D4E]/40" />
      </div>

      <div className="max-w-7xl lg:px-8 mx-auto px-4 sm:px-6 z-10 relative w-full">
        <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          {/* Admission badge */}
          <div className="inline-block bg-[#3F72AF] text-white px-3 py-1 rounded text-xs sm:text-sm font-medium mb-4">
            {t("admissionBadge")} {year}
          </div>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {t("headlineLine1")} <br />
            <span className="text-[#DBE2EF]">{t("headlineLine2")}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 md:mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
            {t("subtitle")}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <Link
              href={`/${locale}/apply/form`}
              className="bg-[#3F72AF] hover:bg-white hover:text-[#112D4E] text-white text-center px-6 sm:px-10 py-3 sm:py-4 md:py-5 rounded-lg font-bold text-base sm:text-lg md:text-xl shadow-xl shadow-blue-900/40 transition transform hover:-translate-y-1"
            >
              {t("applyNow")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
