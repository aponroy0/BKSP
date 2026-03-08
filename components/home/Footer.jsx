"use client";

import { Facebook, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const t = useTranslations("footer");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  const col1Links = [
    { label: t("col1.aboutUs"), href: `/${locale}/about` },
    { label: t("col1.admissions"), href: `/${locale}/apply/form` },
  ];

  const col2Links = [
    { label: t("col2.contactUs"), href: `/${locale}/contact` },
    { label: t("col2.noticeBoard"), href: `/${locale}/notices/all-notices` },
    { label: t("col2.gallery"), href: `/${locale}/gallery` },
  ];

  const socials = [
    { Icon: Facebook, label: "Facebook", href: "#" },
    { Icon: Twitter, label: "Twitter", href: "#" },
    { Icon: Youtube, label: "YouTube", href: "#" },
  ];

  return (
    <footer className="bg-[#112D4E] text-white pt-12 sm:pt-16 pb-6 sm:pb-8 border-t border-[#3F72AF]/20">
      <div className="max-w-7xl lg:px-8 mx-auto px-4 sm:px-6">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Column 1: Logo + description + socials */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <Image
                src="/Logo.png"
                alt="BKSB Logo"
                className="h-10 w-10 brightness-110 shrink-0"
                width={40}
                height={40}
              />
              <div>
                <span className="font-bold text-lg leading-none block">
                  B.K.S.B
                </span>
                <span className="text-xs uppercase text-gray-400">
                  High School
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4 sm:mb-6">
              {t("description")}
            </p>

            <div className="flex space-x-4">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-500 hover:text-white transition"
                >
                  <Icon size={18} strokeWidth={1.75} />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <Image
                src="/BrightFutureLogo.png"
                alt="BrightFutureSoft"
                width={150}
                height={20}
                className="opacity-900 hover:opacity-100 transition"
              />
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-white border-b border-[#3F72AF] pb-2 inline-block">
              {t("quickLinks")}
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2 sm:space-y-3 text-sm text-gray-400">
                {col1Links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-[#DBE2EF] transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2 sm:space-y-3 text-sm text-gray-400">
                {col2Links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-[#DBE2EF] transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-white border-b border-[#3F72AF] pb-2 inline-block">
              {t("contactUs")}
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin
                  size={16}
                  className="text-[#3F72AF] shrink-0 mt-0.5"
                  strokeWidth={2}
                />
                <span>{t("address")}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone
                  size={16}
                  className="text-[#3F72AF] shrink-0"
                  strokeWidth={2}
                />
                +880 1914452677
              </li>
              <li className="flex items-center gap-2">
                <Mail
                  size={16}
                  className="text-[#3F72AF] shrink-0"
                  strokeWidth={2}
                />
                <span className="break-all">info@bksbhighschool.edu.bd</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 gap-3 sm:gap-0">
          <p className="text-center sm:text-left">{t("copyright")}</p>
          <div className="flex space-x-4 sm:space-x-6">
            <a href="#" className="hover:text-white transition">
              {t("privacyPolicy")}
            </a>
            <a href="#" className="hover:text-white transition">
              {t("termsOfUse")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
