import { ArrowRight, Clock, ExternalLink, MapPin, Monitor } from "lucide-react";
import Image from "next/image";

import { EVENTS } from "@/Db/alumni";

function EventCard({ event }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          className="object-cover"
        />
        <div
          className={`absolute top-4 left-4 ${event.accent} text-white rounded-lg w-12 text-center py-1.5 shadow-lg`}
        >
          <p className="text-xl font-extrabold leading-none">{event.day}</p>
          <p className="text-[9px] font-bold uppercase tracking-widest mt-0.5">
            {event.month}
          </p>
        </div>
      </div>
      <div className="p-6 flex flex-col grow">
        <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-4">
          <span className="flex items-center gap-1 text-[#3F72AF]">
            <Clock size={12} /> {event.time}
          </span>
          <span className="text-gray-300">|</span>
          <span className="flex items-center gap-1">
            {event.isVirtual ? <Monitor size={12} /> : <MapPin size={12} />}{" "}
            {event.location}
          </span>
        </div>
        <h3 className="text-xl font-bold text-[#112D4E] mb-3 leading-snug">
          {event.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed grow">
          {event.description}
        </p>
        <a
          href="#"
          className="mt-5 inline-flex items-center gap-1.5 text-[#3F72AF] text-sm font-semibold hover:gap-3 transition-all"
        >
          {event.cta} <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}

export default function EventSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold  text-[#112D4E] mb-2">
              Upcoming Alumni Events
            </h2>
            <p className="text-gray-500 text-sm">
              Save the date for our upcoming gatherings and networking sessions
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-1 text-[#3F72AF] text-sm font-semibold hover:underline shrink-0"
          >
            See All Events <ExternalLink size={13} />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-[#3F72AF] text-sm font-semibold"
          >
            See All Events <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
