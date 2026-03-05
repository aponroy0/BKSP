import { getDay, getMonth } from "@/utils/formatMonthDate";
import { Download } from "lucide-react";
import Link from "next/link";

export default function NoticeCard({ createAt, day, title }) {
  return (
    <Link
      href={`/${encodeURIComponent(title)}`}
      className="p-3 sm:p-4 hover:bg-[#F9F7F7] transition flex items-start gap-3 sm:gap-4 group m-2 rounded border border-[#DBE2EF] border-l-4 border-l-[#3F72AF]"
    >
      {/* Date badge */}
      <div
        className="bg-[#DBE2EF] p-2 rounded text-center shrink-0"
        style={{ minWidth: 52 }}
      >
        <span className="block text-xs font-bold text-gray-500 uppercase">
          {getMonth(createAt)}
        </span>
        <span className="block text-lg sm:text-xl font-bold text-[#3F72AF]">
          {getDay(createAt)}
        </span>
      </div>

      {/* Title + download link */}
      <div className="flex-1 min-w-0">
        <h1
          href="#"
          className="font-medium text-sm sm:text-base text-[#112D4E] group-hover:text-[#3F72AF] transition block mb-1 leading-snug"
        >
          {title}
        </h1>
        {/* Download PDF row with Lucide Download icon */}
        <span className="text-xs text-gray-500 flex items-center gap-1 cursor-pointer hover:text-[#3F72AF] transition">
          <Download size={12} strokeWidth={2.5} className="shrink-0" />
          Download PDF
        </span>
      </div>
    </Link>
  );
}
