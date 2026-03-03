// AboutSection.jsx
// "Tradition of Excellence" — text + checklist left, campus photo right.
// Mobile: photo stacks on top, text below.
// lg+: two columns side by side.
//
// Icons replaced with Lucide React SVG components —
// CheckCircle2 for the feature list, ArrowRight for the "learn more" link.

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const features = [
    "Digital Smart Classrooms & Science Labs",
    "Expansive Playground & Sports Facilities",
    "Highly Qualified Faculty Members",
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl lg:px-8 mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* ── Text column: order-2 on mobile so photo shows first ── */}
          <div className="order-2 lg:order-1">
            <h2 className=" text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[#112D4E]">
              A Tradition of Excellence
            </h2>
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm sm:text-base">
              B.K.S.B High School is more than just a place of learning; it is a
              community dedicated to the pursuit of knowledge. Our modern campus
              features state-of-the-art laboratories, a vast library, and
              digital classrooms designed to meet the challenges of the 21st
              century.
            </p>

            {/* Checklist — CheckCircle2 icon beside each feature */}
            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  {/* CheckCircle2 is a filled-ring checkmark, clean and solid */}
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

            {/* "Learn more" link — ArrowRight slides on hover via group */}
            <a
              href="#"
              className="text-[#3F72AF] font-bold hover:underline inline-flex items-center gap-1 group text-sm sm:text-base"
            >
              Learn more about our history
              {/* group-hover:translate-x-1 gives the sliding arrow effect */}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
                strokeWidth={2.5}
              />
            </a>
          </div>

          {/* ── Photo column: order-1 on mobile so it appears first ── */}
          <div className="order-1 lg:order-2 relative group">
            {/* Rotated tinted box behind the photo for depth */}
            <div className="absolute inset-0 bg-[#DBE2EF] rounded-lg rotate-3 opacity-40 transition-transform group-hover:rotate-6" />
            {/* Next.js Image — fill mode lets it respect the parent's height classes */}
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
