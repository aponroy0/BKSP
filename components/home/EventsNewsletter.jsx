// EventsNewsletter.jsx
// Upcoming events list on the left + newsletter signup on the right.
// Mobile: stacked vertically (events on top, newsletter below).
// lg+: two columns side by side.
//
// Icons replaced with Lucide React — Mail, MailOpen for the newsletter card,
// CalendarDays for the event time rows.

"use client";
import { CalendarDays, Clock, Mail, MailOpen } from "lucide-react";
import { useState } from "react";

// Single event row with a date badge on the left
function EventItem({ month, day, title, time }) {
  return (
    <div className="bg-white p-3 sm:p-4 rounded-lg flex items-center border border-[#DBE2EF] border-l-4 border-l-[#3F72AF] shadow-sm">
      {/* Date badge */}
      <div className="bg-[#DBE2EF] text-center px-3 sm:px-4 py-2 rounded shadow-sm mr-3 sm:mr-4 min-w-16 sm:min-w-20 shrink-0">
        <span className="block text-xs font-bold text-gray-500">{month}</span>
        <span className="block text-xl sm:text-2xl font-bold text-[#3F72AF]">
          {day}
        </span>
      </div>

      <div>
        <h4 className="font-bold text-sm sm:text-base text-[#112D4E] leading-snug mb-1">
          {title}
        </h4>
        {/* Clock icon beside the time string */}
        <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1">
          <Clock size={12} className="shrink-0" strokeWidth={2} />
          {time}
        </p>
      </div>
    </div>
  );
}

export default function EventsNewsletter() {
  const [email, setEmail] = useState("");

  const events = [
    {
      month: "DEC",
      day: "15",
      title: "Winter Carnival 2023",
      time: "9:00 AM - 4:00 PM",
    },
    {
      month: "JAN",
      day: "10",
      title: "Admission Test Phase 1",
      time: "10:00 AM - 1:00 PM",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F9F7F7]">
      <div className="max-w-7xl lg:px-8 mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* ── Upcoming Events column ── */}
          <div className="w-full lg:w-1/2">
            {/* Section heading with CalendarDays icon */}
            <h3 className=" text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#112D4E] flex items-center gap-2">
              <CalendarDays
                size={24}
                className="text-[#3F72AF] not-[]:shrink-0"
                strokeWidth={1.75}
              />
              Upcoming Events
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {events.map((event) => (
                <EventItem key={event.title} {...event} />
              ))}
            </div>
          </div>

          {/* ── Newsletter signup card ── */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#3F72AF] rounded-lg p-6 sm:p-8 text-center flex flex-col justify-center relative overflow-hidden shadow-xl min-h-55">
              {/* Large decorative Mail icon in the background corner */}
              <div className="absolute top-2 right-2 opacity-10 pointer-events-none">
                <Mail size={120} className="text-white" strokeWidth={1} />
              </div>

              <div className="relative z-10">
                {/* MailOpen icon above the heading — signals "open & read" */}
                <div className="flex justify-center mb-3">
                  <MailOpen
                    size={40}
                    className="text-[#DBE2EF]"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-white font-bold text-xl sm:text-2xl mb-2">
                  Subscribe to Newsletter
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mb-4 sm:mb-6">
                  Get updates to news &amp; events directly to your inbox.
                </p>

                {/* Email input + subscribe button */}
                <div className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address"
                    className="w-full bg-white/20 border border-white/30 text-white rounded px-4 py-2 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-[#DBE2EF] text-sm"
                  />
                  <button
                    type="button"
                    className="w-full bg-[#DBE2EF] hover:bg-white text-[#112D4E] font-bold py-2 px-4 rounded transition text-sm sm:text-base"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
