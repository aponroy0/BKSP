// ActivitiesSection.jsx
// Co-curricular activities grid.
// Mobile: 2 cols → md: 3 cols → lg: 6 cols.
//
// Icons are now Lucide React SVG components — no font loading needed,
// perfectly sized, and they participate in the group-hover color transition.

import {
  BookOpen,
  Mic, // Arts Club       — artist palette
  Music, // Debate Club     — microphone
  Palette, // Arabic Class    — open book
  Puzzle, // Activity Learning — puzzle piece
  Shield, // Self-defense Class — shield
} from "lucide-react";

// Each activity maps to a Lucide icon component
const activities = [
  { Icon: Mic, label: "Debate Club" },
  { Icon: Palette, label: "Arts Club" },
  { Icon: Music, label: "Music Class" },
  { Icon: BookOpen, label: "Arabic Class" },
  { Icon: Puzzle, label: "Activity Learning" },
  { Icon: Shield, label: "Self-defense Class" },
];

// Single card: circular badge with icon, label underneath
function ActivityCard({ Icon, label }) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition border border-[#DBE2EF] group cursor-pointer">
      {/* Circular icon badge — fills with brand blue on hover */}
      <div
        className="mx-auto bg-[#F9F7F7] rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#3F72AF] transition-colors duration-200"
        style={{ width: 52, height: 52 }}
      >
        {/*
          Icon is the imported Lucide component.
          color and strokeWidth are passed as props directly.
          group-hover changes the wrapper bg; we can't CSS-target the SVG
          fill from a parent group in Tailwind v4 easily, so we use a
          CSS variable trick via currentColor instead:
          the icon inherits text color from the parent <div>.
        */}
        <Icon
          size={24}
          className="text-[#3F72AF] group-hover:text-white transition-colors duration-200"
          strokeWidth={1.75}
        />
      </div>

      {/* Activity label */}
      <h3 className="font-bold text-[#112D4E] text-xs sm:text-sm leading-snug">
        {label}
      </h3>
    </div>
  );
}

export default function ActivitiesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#DBE2EF]/20">
      <div className="max-w-7xl lg:px-8  mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="text-[#3F72AF] font-bold tracking-wider uppercase text-xs sm:text-sm">
            Beyond Academics
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 md:mb-4 text-[#112D4E]">
            Co-curricular Activities
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            We nurture talent through a diverse range of clubs and activities
            designed to build confidence and skills.
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
