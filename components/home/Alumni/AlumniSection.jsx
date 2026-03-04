import { ALUMNI } from "@/Db/alumni";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

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
      <div className="p-6 flex flex-col grow">
        <span className="text-[10px] font-bold text-[#3F72AF] tracking-widest uppercase mb-2">
          {alumni.batch}
        </span>
        <h3 className="text-xl font-bold text-[#112D4E] mb-2">{alumni.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed grow">
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

export default function AlumniSection() {
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
