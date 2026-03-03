// NoticeBoard.jsx
// Notice board with a dark header and list of notices.
// Fully responsive — card fills container on mobile, max-4xl centered on lg+.
//
// Icons replaced with Lucide React:
//   Megaphone → Notice Board heading
//   Download  → PDF download link

import { Download, Megaphone } from "lucide-react";

// Single notice row
function NoticeItem({ month, day, title }) {
  return (
    <div className="p-3 sm:p-4 hover:bg-[#F9F7F7] transition flex items-start gap-3 sm:gap-4 group m-2 rounded border border-[#DBE2EF] border-l-4 border-l-[#3F72AF]">
      {/* Date badge */}
      <div
        className="bg-[#DBE2EF] p-2 rounded text-center shrink-0"
        style={{ minWidth: 52 }}
      >
        <span className="block text-xs font-bold text-gray-500 uppercase">
          {month}
        </span>
        <span className="block text-lg sm:text-xl font-bold text-[#3F72AF]">
          {day}
        </span>
      </div>

      {/* Title + download link */}
      <div className="flex-1 min-w-0">
        <a
          href="#"
          className="font-medium text-sm sm:text-base text-[#112D4E] group-hover:text-[#3F72AF] transition block mb-1 leading-snug"
        >
          {title}
        </a>
        {/* Download PDF row with Lucide Download icon */}
        <span className="text-xs text-gray-500 flex items-center gap-1 cursor-pointer hover:text-[#3F72AF] transition">
          <Download size={12} strokeWidth={2.5} className="shrink-0" />
          Download PDF
        </span>
      </div>
    </div>
  );
}

export default function NoticeBoard() {
  const notices = [
    {
      month: "NOV",
      day: "05",
      title: "Final Exam Routine Class 6-9 Published",
    },
    { month: "OCT", day: "28", title: "Admission Circular 2024" },
    {
      month: "OCT",
      day: "15",
      title: "Exam Results: Half-Yearly Assessment 2023",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl lg:px-8 mx-auto px-4 sm:px-6">
        {/* Card: edge-to-edge on mobile, max-4xl centered on md+ */}
        <div className="bg-white  shadow-md overflow-hidden border border-[#DBE2EF] ">
          {/* Dark header bar */}
          <div className="bg-[#3F72AF] p-3 sm:p-4 flex justify-between items-center">
            <h3 className="text-white font-bold text-base sm:text-xl flex items-center gap-2">
              {/* Megaphone icon replaces material "campaign" */}
              <Megaphone size={20} strokeWidth={2} className="shrink-0" />
              Notice Board
            </h3>
            <a
              href="#"
              className="text-white text-xs sm:text-sm opacity-70 hover:opacity-100 transition whitespace-nowrap ml-2"
            >
              View Archive
            </a>
          </div>

          {/* Notices list with dividers */}
          <div className="divide-y divide-[#DBE2EF] m-2  rounded">
            {notices.map((notice) => (
              <NoticeItem key={notice.title} {...notice} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
