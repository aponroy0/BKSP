import { extractImageId } from "@/utils/extractImageId";
import { getDay, getMonth, getYear } from "@/utils/formatMonthDate";
import Image from "next/image";
import Link from "next/link";

export default function EventsCard({
  banner,
  createAt,
  category,
  title,
  excerpt,
}) {
  return (
    <Link
      href={`/events/${encodeURIComponent(title)}`}
      className="flex flex-col sm:flex-row gap-2 sm:gap-4 group cursor-pointer border border-gray-100 border-l-4 border-l-[#3F72AF] hover:border-gray-200 rounded-lg p-2.5 transition bg-white shadow-sm hover:shadow-md"
    >
      {/* Thumbnail */}
      <div className="relative w-full sm:w-48 h-44 sm:h-32 overflow-hidden rounded-lg shrink-0">
        <Image
          src={
            banner
              ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/image/${extractImageId(banner)}`
              : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
          }
          alt={title}
          fill
          className="object-cover object-center group-hover:scale-110 transition duration-500"
          sizes="(max-width: 640px) 100vw, 192px"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="text-xs text-gray-500 mb-1 sm:mb-2 font-medium">
          {getMonth(createAt)} {getDay(createAt)}, {getYear(createAt)}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-[#112D4E] mb-1 sm:mb-2 group-hover:text-[#3F72AF] transition leading-snug">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {excerpt || "Not found any content.."}
        </p>
      </div>
    </Link>
  );
}
