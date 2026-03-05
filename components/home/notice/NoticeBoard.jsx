"use client";
import { Megaphone } from "lucide-react";
import { useEffect, useState } from "react";
import NoticeCard from "./NoticeCard";

export default function NoticeBoard() {
  const [notices, setNotices] = useState([]);

  // Fetch notices from API on component mount
  useEffect(() => {
    async function fetchNotices() {
      try {
        const response = await fetch("/api/notices");
        if (response.ok) {
          const data = await response.json();
          setNotices(data.data);
        } else {
          console.error("Failed to fetch notices");
        }
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    }

    fetchNotices();
  }, []);
  console.log("Fetched notices:", notices);
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
              <NoticeCard key={notice.title} {...notice} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
