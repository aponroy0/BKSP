import { ArrowRight, Clock, ExternalLink, MapPin, Monitor } from "lucide-react";
import Image from "next/image";
import AlumniHero from "./AlumniHero";

async function subscribeAction(formData) {
  "use server";
  const email = formData.get("email");
  console.log("Newsletter subscription:", email);
}

const ALUMNI = [
  {
    id: 1,
    batch: "BATCH OF 2005",
    name: "Dr. Ariful Islam",
    bio: "Senior Researcher at NASA, specializing in aerospace engineering and satellite communications.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    imageAlt: "Dr. Ariful Islam",
    bg: "bg-slate-100",
  },
  {
    id: 2,
    batch: "BATCH OF 2012",
    name: "Zarin Subah",
    bio: 'Tech Entrepreneur and founder of "GreenStream", a sustainable logistics startup based in Dhaka.',
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    imageAlt: "Zarin Subah",
    bg: "bg-gray-50",
  },
  {
    id: 3,
    batch: "BATCH OF 2008",
    name: "Capt. Salman Khan",
    bio: "Commercial Pilot with 15+ years of experience, mentoring young aviators from BKSB.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    imageAlt: "Capt. Salman Khan",
    bg: "bg-amber-50",
  },
];

const EVENTS = [
  {
    id: 1,
    day: "22",
    month: "DEC",
    time: "6:00 PM ONWARDS",
    location: "MAIN CAMPUS",
    isVirtual: false,
    title: "Annual Alumni Grand Reunion 2024",
    description:
      "A night of nostalgia, dining, and networking at the BKSB Main Pavilion. Live music and award ceremony to celebrate our global achievements.",
    cta: "Register to Attend",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    imageAlt: "Alumni reunion event",
    accent: "bg-[#3F72AF]",
  },
  {
    id: 2,
    day: "15",
    month: "JAN",
    time: "10:00 AM – 1:00 PM",
    location: "VIRTUAL SESSION",
    isVirtual: true,
    title: "Career Mentorship Workshop",
    description:
      "Current seniors meet with industry veterans to discuss career paths. An opportunity for alumni to give back through guidance and mentorship.",
    cta: "Join the Session",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    imageAlt: "Career mentorship workshop",
    accent: "bg-emerald-700",
  },
];

function AlumniCard({ alumni }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className={`h-56 ${alumni.bg} overflow-hidden relative`}>
        <Image
          src={alumni.image}
          alt={alumni.imageAlt}
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-[10px] font-bold text-[#3F72AF] tracking-widest uppercase mb-2">
          {alumni.batch}
        </span>
        <h3 className="text-xl font-bold text-[#112D4E] mb-2">{alumni.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-grow">
          {alumni.bio}
        </p>
        <a
          href="#"
          className="mt-5 inline-flex items-center gap-1.5 text-[#3F72AF] text-sm font-semibold hover:gap-3 transition-all"
        >
          View Profile <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}

function NotableAlumniSection() {
  return (
    <section className="py-20 bg-[#F9F7F7]">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold  text-[#112D4E] mb-3">
            Notable Alumni
          </h2>
          <p className="text-gray-500 text-sm">
            Celebrating the success of our graduates across the globe
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {ALUMNI.map((alumni) => (
            <AlumniCard key={alumni.id} alumni={alumni} />
          ))}
        </div>
      </div>
    </section>
  );
}

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
      <div className="p-6 flex flex-col flex-grow">
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
        <p className="text-gray-500 text-sm leading-relaxed flex-grow">
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

function EventsSection() {
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

export default function Alumni() {
  return (
    <div className="min-h-screen bg-[#F9F7F7] font-sans antialiased text-[#112D4E]">
      <AlumniHero />
      <NotableAlumniSection />
      <EventsSection />
    </div>
  );
}
