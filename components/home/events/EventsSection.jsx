"use client";
import {
  CalendarCheck,
  CalendarDays,
  CreditCard,
  GraduationCap,
  HeartHandshake,
  History,
  Link as LinkIcon,
  Palette,
  PiggyBank,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import EventsCard from "./EventsCard";
// ── Quick links data with Lucide icon components ──────────────
const quickLinks = [
  { Icon: History, label: "Alumni Records" },
  { Icon: CalendarDays, label: "Sports Calendar" },
  { Icon: CalendarCheck, label: "All Events" },
  { Icon: GraduationCap, label: "Academic Programs" },
  { Icon: Palette, label: "Non-academic Programs" },
  { Icon: CreditCard, label: "Tuition and Fees" },
  { Icon: PiggyBank, label: "Financial Aid" },
];

// ── Main section ─────────────────────────────────────────────
export default function EventsSection() {
  const [events, setEvents] = useState([]);

  // Fetch events from API on component mount
  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("/api/events");
        if (response.ok) {
          const data = await response.json();
          setEvents(data.data);
        } else {
          console.error("Failed to fetch events");
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }

    fetchEvents();
  }, []);
  console.log("Fetched events:", events);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl lg:px-8 mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* ── News column (2/3 width on lg) ── */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6 md:mb-8 border-b border-[#DBE2EF] pb-4">
              <h2 className=" text-2xl sm:text-3xl font-bold text-[#112D4E]">
                Events &amp; Updates
              </h2>
              <Link
                href="/events/all-events"
                className="text-[#3F72AF] text-sm font-bold hover:underline whitespace-nowrap ml-4"
              >
                Read All
              </Link>
            </div>
            <div className="space-y-3">
              {events.map((item) => (
                <EventsCard key={item._id} {...item} />
              ))}
            </div>
          </div>

          {/* ── Sidebar (1/3 width on lg) ── */}
          <div className="lg:col-span-1 space-y-6">
            {/* Important Links panel */}
            <div className="bg-[#F9F7F7] p-5 sm:p-6 rounded-lg border border-[#DBE2EF]">
              {/* Panel heading with Link icon */}
              <h3 className=" text-lg sm:text-xl font-bold text-[#112D4E] mb-4 flex items-center gap-2">
                <LinkIcon
                  size={20}
                  className="text-[#3F72AF] shrink-0"
                  strokeWidth={2}
                />
                Important Links
              </h3>

              {/* Quick links list — each row has a Lucide icon + label */}
              <ul className="space-y-1">
                {quickLinks.map(({ Icon, label }, i) => (
                  <li key={label}>
                    <a
                      href="#"
                      className={`flex items-center gap-2 text-gray-700 hover:text-[#3F72AF] transition py-2 text-sm ${
                        i < quickLinks.length - 1
                          ? "border-b border-[#DBE2EF]"
                          : ""
                      }`}
                    >
                      {/* Lucide icon — inherits hover color from parent <a> via currentColor */}
                      <Icon size={16} className="shrink-0" strokeWidth={1.75} />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply to BKSB CTA card */}
            <div className="bg-[#3F72AF] text-white p-5 sm:p-6 rounded-lg text-center shadow-lg shadow-blue-900/20">
              {/* Large CTA icon */}
              <div className="flex justify-center mb-3">
                <HeartHandshake
                  size={48}
                  className="opacity-90"
                  strokeWidth={1.5}
                />
              </div>

              <h1 className="font-bold text-lg sm:text-xl mb-2">
                Apply to BKSB
              </h1>
              <p className="text-sm opacity-90 mb-4">
                Admissions are open for the upcoming academic session.
              </p>
              <Link
                href="/apply/form"
                className="bg-white text-[#112D4E] font-bold px-6 py-2 rounded-full hover:bg-[#DBE2EF] transition w-full text-sm sm:text-base"
              >
                Start Application
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
