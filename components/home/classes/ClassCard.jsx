import { Users } from "lucide-react";
import Image from "next/image";

export default function ClassCard({
  title,
  desc,
  img,
  alt,
  badge,
  badgeBg,
  tagLabel,
  tags,
  tagStyle,
  name,
  sections,
}) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
      {/* Image with section badge */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={img}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-6 grow flex flex-col">
        <h3 className="text-2xl font-bold text-[#112D4E] mb-2">{name}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{desc}</p>

        {/* Subject / stream tags */}
        <div className="mb-5">
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            {tagLabel}
          </h4>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs px-2 py-1 rounded ${tagStyle}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Section count — pinned to card bottom */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-2">
          <Users size={15} className="text-[#3F72AF]" strokeWidth={2} />
          <span className="text-sm text-gray-500">
            <span className="font-bold text-gray-500">{sections.length}</span>{" "}
            Sections
          </span>
        </div>
      </div>
    </div>
  );
}
