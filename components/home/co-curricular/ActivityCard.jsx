import { ArrowRight } from "lucide-react";

export default function ActivityCard({ Icon, title, desc, color, bg }) {
  return (
    <div className="bg-white rounded-xl border border-[#DBE2EF] p-5 sm:p-6 shadow-sm hover:shadow-md transition group">
      {/* Icon badge */}
      <div
        className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4`}
      >
        <Icon size={24} className={color} strokeWidth={1.75} />
      </div>
      <h3 className="font-bold text-[#112D4E] text-base sm:text-lg mb-2">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
      {/* "Learn More" link with sliding arrow */}
      <a
        href="#"
        className="text-[#3F72AF] text-sm font-semibold flex items-center gap-1 group-hover:underline"
      >
        Learn More
        <ArrowRight
          size={14}
          strokeWidth={2.5}
          className="group-hover:translate-x-1 transition-transform"
        />
      </a>
    </div>
  );
}
