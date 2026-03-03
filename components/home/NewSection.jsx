// NewsSection.jsx
// "News & Updates" section.
// Mobile: single column — news cards stacked, then sidebar below.
// lg+: 2/3 news column + 1/3 sidebar side by side.
//
// Icons replaced with Lucide React SVG components throughout —
// sidebar heading, quick links, and the Apply CTA card.

import {
  CalendarCheck, // Alumni Records
  CalendarDays, // Non-academic Programs
  CreditCard, // All Events
  GraduationCap, // Financial Aid
  HeartHandshake, // "Important Links" heading icon
  History,
  Link, // Academic Programs
  Palette, // Tuition and Fees
  PiggyBank, // Financial Aid
} from "lucide-react";
import Image from "next/image";

// ── Quick links data with Lucide icon components ──────────────
const quickLinks = [
  { Icon: History, label: "Alumni Records" },
  { Icon: CalendarDays, label: "Sports Calendar" },
  { Icon: CalendarCheck, label: "All Events" },
  { Icon: GraduationCap, label: "Academic Programs" },
  { Icon: Palette, label: "Non-academic Programs" },
  { Icon: CreditCard, label: "Tuition and Fees" },
  { Icon: PiggyBank, label: "Financial Aid" },
];

// ── News article thumbnail + text card ───────────────────────
function NewsCard({ imgSrc, date, category, title, excerpt }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 group cursor-pointer">
      {/* Thumbnail — full width on mobile, fixed width on sm+ */}
      <div className="relative w-full sm:w-48 h-44 sm:h-32 overflow-hidden rounded-lg shrink-0">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
          sizes="(max-width: 640px) 100vw, 192px"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-gray-500 mb-1 sm:mb-2 font-medium">
          {date} | {category}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-[#112D4E] mb-1 sm:mb-2 group-hover:text-[#3F72AF] transition leading-snug">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{excerpt}</p>
      </div>
    </div>
  );
}

// ── Main section ─────────────────────────────────────────────
export default function NewsSection() {
  const news = [
    {
      imgSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDRNV9Wpq5_svKiOcKwppFpOg4_3ofBIXc6PvLF33jFbwjSVK2IepPFLFD5emPApY0kwvhCZFCLaRUnNPNwp1N8DuYDC6i6fqkANPGEgHScxPWE3-Piwqrok-LkDSMi8rkm7Wthn7z7PPv8zsFaWhmTcIqAZoZVCCUfMfEFjImszgTg4kSECUemFa1bHDuIgyhRKfwGlMT7hMp0h_jU8_XkbYkGd53qiyvQ7oIa7NvYnSquMaJzNqwjCxDB3GBj_PtsqoYw828G5iNx",
      date: "October 24, 2023",
      category: "Academic",
      title: "Annual Science Fair 2023 Winners Announced",
      excerpt:
        "This year's science fair saw exceptional talent from our students, with groundbreaking projects on renewable energy and AI.",
    },
    {
      imgSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCwGjv7778-T2pRTnY1A0ybbpbQQ5a48Fb_bd0HwIaU5jf9EVh50-mmQTu1N2NoKFss_ScDwwvC989e4YUOpqDFa5vtAYu6XhFX4NSIW4eVR005EEIpj329Vgvl2NkkywvIuSTLMjGGAfFo_w31Mu9N6Fn_v85JppZssi6o01150ulEgM97QBiu2RlAVUFv3FUBOV-KWoT61GL7X0YP6B8Ls8E50De3VOdR9n-lrX4ygmirwvAuKTpiQgDes5zPaq0TiEXvmqBNiAnn",
      date: "October 10, 2023",
      category: "Sports",
      title: "BKSB Wins Regional Football Championship",
      excerpt:
        "Our school football team brought home gold at the Regional Championship, defeating 12 other schools in a thrilling final.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl lg:px-8 mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* ── News column (2/3 width on lg) ── */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6 md:mb-8 border-b border-[#DBE2EF] pb-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#112D4E]">
                News &amp; Updates
              </h2>
              <a
                href="#"
                className="text-[#3F72AF] text-sm font-bold hover:underline whitespace-nowrap ml-4"
              >
                Read All
              </a>
            </div>
            <div className="space-y-6 sm:space-y-8">
              {news.map((item) => (
                <NewsCard key={item.title} {...item} />
              ))}
            </div>
          </div>

          {/* ── Sidebar (1/3 width on lg) ── */}
          <div className="lg:col-span-1 space-y-6">
            {/* Important Links panel */}
            <div className="bg-[#F9F7F7] p-5 sm:p-6 rounded-lg border border-[#DBE2EF]">
              {/* Panel heading with Link icon */}
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#112D4E] mb-4 flex items-center gap-2">
                <Link
                  size={20}
                  className="text-[#3F72AF] shrink-0"
                  strokeWidth={2}
                />
                Important Links
              </h3>

              {/* Quick links list — each row has a Lucide icon + label */}
              <ul className="space-y-1">
                {quickLinks.map(({ Icon, label }, i) => (
                  <li key={label}>
                    <a
                      href="#"
                      className={`flex items-center gap-2 text-gray-700 hover:text-[#3F72AF] transition py-2 text-sm ${
                        i < quickLinks.length - 1
                          ? "border-b border-[#DBE2EF]"
                          : ""
                      }`}
                    >
                      {/* Lucide icon — inherits hover color from parent <a> via currentColor */}
                      <Icon size={16} className="shrink-0" strokeWidth={1.75} />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply to BKSB CTA card */}
            <div className="bg-[#3F72AF] text-white p-5 sm:p-6 rounded-lg text-center shadow-lg shadow-blue-900/20">
              {/* Large CTA icon */}
              <div className="flex justify-center mb-3">
                <HeartHandshake
                  size={48}
                  className="opacity-90"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="font-bold text-lg sm:text-xl mb-2">
                Apply to BKSB
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Admissions are open for the upcoming academic session.
              </p>
              <button className="bg-white text-[#112D4E] font-bold px-6 py-2 rounded-full hover:bg-[#DBE2EF] transition w-full text-sm sm:text-base">
                Start Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
