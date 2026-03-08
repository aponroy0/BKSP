"use client";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

export default function MobileNavItem({ label, links }) {
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");

  return (
    <div>
      <button
        className="w-full flex justify-between items-center py-2 text-[#112D4E] hover:text-[#3F72AF] font-medium transition"
        onClick={() => setOpen(!open)}
      >
        {t(label)}
        <ChevronDown
          size={16}
          strokeWidth={2.5}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pl-4 pb-2 space-y-1 border-l-2 border-[#DBE2EF] ml-1 mt-1">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-1.5 text-sm text-gray-600 hover:text-[#3F72AF] transition"
            >
              {t(link.label)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
