"use client";

import { Clock, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function TeacherCard({ teacher }) {
  return (
    <div className="bg-white rounded-lg p-6 md:p-8 text-center shadow-md transition-transform hover:shadow-lg flex flex-col h-full">
      <div className="relative w-28 h-28 md:w-36 md:h-36 mx-auto mb-4 md:mb-6 overflow-hidden rounded-lg shrink-0">
        <Image
          src={teacher.image}
          alt={teacher.name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 line-clamp-2">
        {teacher.name}
      </h3>
      <p className="text-[#3F72AF] text-xs md:text-sm font-semibold mb-4 line-clamp-2">
        {teacher.title}
      </p>
      <div className="space-y-3 text-gray-700 text-xs md:text-sm mt-auto">
        <div className="flex items-center justify-start gap-2">
          <GraduationCap className="w-5 h-5 shrink-0 text-[#3F72AF]" />
          <span className="line-clamp-2">{teacher.qualification}</span>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Clock className="w-5 h-5 shrink-0 text-[#3F72AF]" />
          <span>{teacher.experience}</span>
        </div>
      </div>
    </div>
  );
}
