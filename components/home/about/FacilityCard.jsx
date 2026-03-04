import { ArrowRight } from "lucide-react";

export default function FacilityCard({ Icon, title, description }) {
  return (
    <div className="bg-white rounded-lg p-5 sm:p-6 shadow-sm border border-[#DBE2EF] hover:shadow-lg hover:border-[#3F72AF] transition duration-300 group">
      <div className="flex items-center mb-4">
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#F9F7F7] flex items-center justify-center text-[#3F72AF] group-hover:bg-[#3F72AF] group-hover:text-white transition-colors shrink-0">
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <h3 className="ml-3 sm:ml-4 font-bold text-base sm:text-xl text-[#112D4E] leading-snug">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {description}
      </p>
      <a
        href="#"
        className="text-[#3F72AF] text-sm font-bold flex items-center gap-1 group-hover:underline"
      >
        View Gallery
        <ArrowRight
          size={14}
          strokeWidth={2.5}
          className="group-hover:translate-x-1 transition-transform"
        />
      </a>
    </div>
  );
}
