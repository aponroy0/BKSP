"use client";

import { extractImageId } from "@/utils/extractImageId";
import { CalendarDays, Phone, UserRound } from "lucide-react";
import Image from "next/image";

export default function TeacherCard({ teacher }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-gray-100">
      {/* ── Square photo ── */}
      <div className="m-4 shrink-0">
        <div className="relative w-full aspect-square overflow-hidden rounded-xl">
          <Image
            src={
              teacher.profile_picture
                ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/image/${extractImageId(teacher.profile_picture)}`
                : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
            }
            alt={teacher.full_name}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* ── Info ── */}
      <div className="px-6 pt-1 pb-6 flex flex-col gap-1">
        <p className="text-xs font-bold tracking-widest text-[#3F72AF] uppercase">
          {teacher.designation}
        </p>
        <h3 className="text-lg font-bold text-gray-900 leading-snug line-clamp-2">
          {teacher.full_name}
        </h3>

        <div className="flex flex-col gap-2 mt-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <UserRound className="w-4 h-4 text-[#3F72AF] shrink-0" />
            <span>{teacher.gender}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#3F72AF] shrink-0" />
            <span>{teacher.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-[#3F72AF] shrink-0" />
            <span>Joined {teacher.joining_date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
