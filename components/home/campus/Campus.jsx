"use client";

import { Calendar, Send, ShieldCheck, Video } from "lucide-react";
import { useState } from "react";
import CommonHero from "../CommonHero";
import FacilitySection from "./FacilitySection";

function VisitSection() {
  // Controlled form state
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  /** Handle form submission (placeholder — wire to your API) */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date) setSubmitted(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="bg-[#3F72AF] rounded-3xl overflow-hidden relative shadow-2xl">
          {/* Decorative blob */}
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#112D4E]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-10 p-8 md:p-14 items-center">
            {/* Left – text + action buttons */}
            <div className="lg:w-1/2 text-white">
              <h2 className="text-3xl md:text-4xl font-extrabold  mb-5 leading-snug">
                Want to see it
                <br />
                in person?
              </h2>
              <p className="text-blue-100 text-base leading-relaxed mb-8 max-w-md">
                We welcome parents and prospective students to visit our campus
                and experience the atmosphere firsthand. Schedule your physical
                tour today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 bg-white text-[#3F72AF] font-bold px-6 py-3 rounded-xl shadow hover:bg-blue-50 transition">
                  <Calendar size={16} /> Schedule Physical Tour
                </button>
                <button className="flex items-center justify-center gap-2 bg-[#112D4E] text-white font-bold px-6 py-3 rounded-xl shadow hover:bg-[#1a3d6b] transition">
                  <Video size={16} /> Request Virtual Meeting
                </button>
              </div>
            </div>

            {/* Right – inquiry card */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                {/* Card header */}
                <div className="flex items-center gap-2 mb-5">
                  <Send size={16} className="text-[#3F72AF]" />
                  <h3 className="font-bold text-[#112D4E] text-base">
                    Inquiry Form
                  </h3>
                </div>

                {submitted ? (
                  // Success state
                  <div className="text-center py-8">
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <ShieldCheck size={24} className="text-green-600" />
                    </div>
                    <p className="font-semibold text-[#112D4E]">
                      Request Submitted!
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      We&apos;ll contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name field */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3F72AF]/40 placeholder-gray-300 transition"
                      />
                    </div>

                    {/* Date field */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3F72AF]/40 transition"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full bg-[#3F72AF] hover:bg-[#2f5a8e] text-white font-bold py-3 rounded-xl transition shadow-md flex items-center justify-center gap-2 mt-2"
                    >
                      <Send size={15} /> Submit Request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ROOT ───────────────────────────────────────────────

export default function Campus() {
  return (
    <div className="min-h-screen bg-[#F9F7F7] font-sans antialiased text-[#112D4E]">
      <CommonHero
        title="CAMPUS TOUR"
        subtitle=" Explore Our Campus"
        description="Take a virtual journey through our world-class facilities designed to
          foster academic excellence, creativity, and physical well-being."
      />
      <FacilitySection />
      <VisitSection />
    </div>
  );
}
