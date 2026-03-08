"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HeadmasterMessage() {
  const t = useTranslations("headmaster");

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F9F7F7]">
      <div className="max-w-7xl lg:px-8 mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* ── Portrait column ── */}
          <div className="w-full lg:w-1/3 relative">
            <div className="hidden sm:block absolute -top-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-[#DBE2EF]/50 rounded-full z-0" />
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-[#3F72AF]/20 rounded-full z-0" />

            <div className="relative z-10 w-full rounded-lg shadow-xl overflow-hidden h-75 sm:h-95 lg:h-112.5">
              <Image
                src="/Head_Master.png"
                alt="Headmaster Portrait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* ── Text content ── */}
          <div className="w-full lg:w-2/3">
            {/* Badge */}
            <div className="inline-block px-3 py-1 bg-[#DBE2EF] rounded text-xs font-bold uppercase tracking-wider text-[#112D4E] mb-4">
              {t("badge")}
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[#112D4E]">
              {t("heading")}
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 md:mb-6">
              {t("paragraph1")}
            </p>

            <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm sm:text-base">
              {t("paragraph2")}
            </p>

            {/* Signature row */}
            <div className="flex items-center gap-4">
              <div className="relative h-10 sm:h-12 w-14 sm:w-16 opacity-70 shrink-0">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT31RYM5EYDUquvS3AYOqhYBtCmqpoqh5shysWkzcCURK-7S8L2MLt7YMAowPrpd_6Fvn-0ksIKpoKpzEjwOzgDnFCfVixYauExwFlhJhR4J9NtyCvCDrupbM_6zZgQMIV_Vj_-0pdAwHCXsPG_NW_0JD2Ez-0abiSfX5krQ7prcYCbiJDoQZg5upTW19IHTVeufKASxEYARE8w_ttwua3AD8emETHw22KWmH_VekKL40U6x1KRusQwVGFU4J6xRi59RNRxsOV-N41"
                  alt="Signature"
                  fill
                  className="object-contain object-left"
                  sizes="144px"
                />
              </div>

              <div>
                <p className="font-bold text-[#112D4E] text-sm sm:text-base">
                  {t("name")}
                </p>
                <p className="text-xs sm:text-sm text-[#3F72AF] font-medium">
                  {t("title")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
