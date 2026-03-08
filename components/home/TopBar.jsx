"use client";

import { Globe, Mail, Phone } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "bn", label: "BN" },
];

export default function TopBar() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  const switchLang = (code) => {
    const segments = pathname.split("/");
    segments[1] = code;
    router.push(segments.join("/"));
  };

  return (
    <div className="bg-[#112D4E] text-white py-2 px-4 text-xs">
      <div className="max-w-7xl lg:px-8 mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0">
        {/* Left: contact info */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 items-center gap-1 sm:gap-0 text-center sm:text-left">
          <span className="flex items-center gap-1">
            <Mail size={13} />
            <a
              href="mailto:info@bksbhighschool.edu.bd"
              className="hover:underline break-all"
            >
              info@bksbhighschool.edu.bd
            </a>
          </span>
          <span className="flex items-center gap-1">
            <Phone size={13} />
            +880 1712-345678
          </span>
        </div>

        {/* Right: inline language switcher */}
        <div className="flex items-center gap-1.5">
          <Globe size={13} />
          {LANGUAGES.map((l, index) => (
            <span key={l.code} className="flex items-center gap-1.5">
              {index > 0 && <span className="opacity-40">|</span>}
              <button
                onClick={() => switchLang(l.code)}
                className={`transition-colors font-medium ${
                  locale === l.code
                    ? "text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {l.label}
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
