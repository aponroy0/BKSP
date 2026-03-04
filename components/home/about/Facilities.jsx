import {
  BookOpen,
  FlaskConical,
  HeartPulse,
  Mic2,
  Monitor,
  Trophy,
} from "lucide-react";

import FacilityCard from "./FacilityCard";

export default function Facilities() {
  const facilities = [
    {
      Icon: FlaskConical,
      title: "Science Laboratories",
      description:
        "Modern labs for Physics, Chemistry, and Biology equipped with the latest apparatus for practical learning.",
    },
    {
      Icon: BookOpen,
      title: "Central Library",
      description:
        "A vast collection of over 5,000 books, journals, and digital resources to fuel curiosity and research.",
    },
    {
      Icon: Monitor,
      title: "Computer Lab",
      description:
        "High-speed internet enabled workstations offering students hands-on experience with modern technology.",
    },
    {
      Icon: Trophy,
      title: "Sports Complex",
      description:
        "Expansive playground for football and cricket, plus courts for volleyball and badminton.",
    },
    {
      Icon: Mic2,
      title: "Auditorium",
      description:
        "A spacious multipurpose hall for cultural events, seminars, and school assemblies.",
    },
    {
      Icon: HeartPulse,
      title: "Medical Room",
      description:
        "First-aid center with trained staff to attend to immediate health needs of students.",
    },
  ];
  return (
    <section className="py-16 sm:py-20 bg-[#F9F7F7] border-t border-[#DBE2EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 sm:mb-12 gap-4">
          <div>
            <span className="text-[#3F72AF] font-bold tracking-wider uppercase text-xs sm:text-sm">
              Infrastructure
            </span>
            <h2 className=" text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-[#112D4E]">
              Campus Facilities
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {facilities.map((f) => (
            <FacilityCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
