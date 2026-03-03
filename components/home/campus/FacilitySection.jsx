"use client";

import { FACILITIES } from "@/Db/facilities";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

function FacilityCard({ facility }) {
  const { Icon, image, imageAlt, title, description } = facility;
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col group">
      {/* Image */}
      <div className="h-48 overflow-hidden relative">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        {/* Icon + title row */}
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-8 h-8 rounded-lg bg-[#DBE2EF] flex items-center justify-center shrink-0">
            <Icon size={16} className="text-[#3F72AF]" />
          </div>
          <h3 className="font-bold text-[#112D4E] text-base">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed grow">
          {description}
        </p>

        {/* View details link */}
        <a
          href="#"
          className="mt-5 inline-flex items-center gap-1 text-[#3F72AF] text-sm font-semibold hover:gap-2 transition-all"
        >
          View Details <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}

export default function FacilitySection() {
  return (
    <section className="py-20 bg-[#F9F7F7]">
      <div className="max-w-7xl  mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {FACILITIES.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </div>
    </section>
  );
}
