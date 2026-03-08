"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutSection() {
  const t = useTranslations("about");
  const pathName = usePathname();
  const locale = pathName.split("/")[1] || "en";

  const features = [t("feature1"), t("feature2"), t("feature3")];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl lg:px-8 mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* ── Text column ── */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[#112D4E]">
              {t("heading")}
            </h2>
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm sm:text-base">
              {t("paragraph")}
            </p>

            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#3F72AF] shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <span className="text-gray-700 text-sm sm:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href={`/${locale}/about`}
              className="text-[#3F72AF] font-bold hover:underline inline-flex items-center gap-1 group text-sm sm:text-base"
            >
              {t("learnMore")}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
                strokeWidth={2.5}
              />
            </Link>
          </div>

          {/* ── Photo column ── */}
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute inset-0 bg-[#DBE2EF] rounded-lg rotate-3 opacity-40 transition-transform group-hover:rotate-6" />
            <div className="relative rounded-lg shadow-lg overflow-hidden h-60 sm:h-80 lg:h-100">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd1QOyJKsdvpSroRDeASQWKkpX93T8yD7IWdGmahu44GiIDoDg5AM2tGvtug2fQjlN7Q8c4CWeXewD3ie4lHKGDz7WRrTDwDqygFlKnEotn-l9xw5XSMC7OTkzmJbJcKWdcx5Y_FDo-ErSViefGXFg-KglUeqeGf3tCOv_Nf-XVp6kTPp61ywGqCpPTgKpcT_fuoqF5psZVaeJOsYSxlOYo4obWFWgt_44przO78JKmkcN8IzIly0LXweEHvvKaOnYsHSYwj56xeeK"
                alt="Campus Life"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
