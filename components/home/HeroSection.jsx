// HeroSection.jsx
// Full-width hero banner with background image, overlay gradient,
// headline text, and two CTA buttons.
//
// Layout strategy to prevent StatsBar overlap:
// - Content is top-aligned (items-start) with generous padding-top on all sizes.
// - A fixed bottom padding (pb-28 on md+) ensures the buttons always sit well
//   above the hero's bottom edge where the StatsBar overlaps.
// - The hero height is tall enough that the background image still looks great.

import Image from "next/image";

export default function HeroSection() {
  return (
    // items-start + pt pushes content toward the top, away from the StatsBar overlap zone
    // pb-28 on md+ ensures buttons never get covered by the -mt-8 StatsBar
    <header className="relative w-full min-h-145 md:min-h-160 overflow-hidden flex items-start pt-20 sm:pt-24 md:pt-28 pb-24 sm:pb-28 md:pb-32">
      {/* Background image + dark gradient overlay */}
      <div className="absolute inset-0 z-0">
        {/* priority prop ensures hero image loads first — no LCP delay */}
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjdZ2n7rTBQwxGyxq-a9Wf3-nyflMFshJ8uWNqjNUdYXW-bOT7WzXbXfnnuhDam8-hg_2B-9_6s7ImbyTtYnivJYF6AjScewUKZBctkj5380t9LzL4OkBf_b893S0y3pzS8PQLYAQpo2yNMZQP4HyFG3EOt7pkPg3FugPSieVqWJAgsJzo7LmQzT7IRxkkfoDAf0z9ALD0ExgrRZx2GxB4W-Fa9TuU0rtWMbaXYQISBV83mFtKu10TdcEn5iW1losKgMCMMctH1YYX"
          alt="Students in modern classroom"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient: stronger on mobile for readability, lighter on desktop */}
        <div className="absolute inset-0 bg-linear-to-r from-[#112D4E]/95 via-[#112D4E]/80 to-[#112D4E]/50 md:from-[#112D4E]/90 md:to-[#112D4E]/40" />
      </div>

      {/* Hero text content */}
      <div className="max-w-7xl lg:px-8 mx-auto px-4 sm:px-6 z-10 relative w-full">
        <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          {/* Admission badge */}
          <div className="inline-block bg-[#3F72AF] text-white px-3 py-1 rounded text-xs sm:text-sm font-medium mb-4">
            Admissions Open for {new Date().getFullYear()}
          </div>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Empowering <br />
            <span className="text-[#DBE2EF]">Future Leaders</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 md:mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
            B.K.S.B High School provides a nurturing environment where academic
            excellence meets character development. Join a legacy of success
            established in 2002.
          </p>

          {/* CTA buttons: stack on mobile, side-by-side on sm+ */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            {/* Primary CTA — Apply Now */}
            <a
              href="#"
              className="bg-[#3F72AF] hover:bg-white hover:text-[#112D4E] text-white text-center px-6 sm:px-10 py-3 sm:py-4 md:py-5 rounded-lg font-bold text-base sm:text-lg md:text-xl shadow-xl shadow-blue-900/40 transition transform hover:-translate-y-1"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
