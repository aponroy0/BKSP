import { Banknote, GraduationCap, HeartHandshake, Trophy } from "lucide-react";
import Image from "next/image";

import DocFaq from "./Doc&Faq";
import SholarshipHero from "./SholarshipHero";

export default function Scholarships() {
  return (
    <div>
      <div className="bg-[#f2f2f2] text-[#112D4E] transition-colors duration-300">
        <SholarshipHero />
        {/* ================= AVAILABLE PROGRAMS ================= */}
        <section className="bg-gray-100 py-20 px-4 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-[#3F72AF] text-2xl md:text-3xl font-bold mb-4">
                Available Programs
              </h3>
              <div className="h-1 w-20 bg-[#3F72AF] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProgramCard
                icon={<GraduationCap size={28} />}
                title="Merit Scholarship"
                desc="Awarded to students demonstrating exceptional academic performance and intellectual leadership."
                tag="Up to 100% Waiver"
              />

              <ProgramCard
                icon={<Banknote size={28} />}
                title="Need-Based Aid"
                desc="Designed for students from economically challenged backgrounds who show potential for growth."
                tag="Flexible Support"
              />

              <ProgramCard
                icon={<Trophy size={28} />}
                title="Excellence in Sports"
                desc="Recognizing students who have achieved remarkable success in national or regional sports levels."
                tag="Partial Coverage"
              />
            </div>
          </div>
        </section>
        <DocFaq />
        {/* ================= STUDENT STORY ================= */}
        <section className="py-20 px-4 md:px-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80&auto=format&fit=crop"
                  alt="Student"
                  width={1200}
                  height={800}
                  className="rounded-lg grayscale hover:grayscale-0 transition w-full h-auto"
                />
              </div>
            </div>

            <div className="md:w-2/3">
              <span className="text-xs uppercase tracking-widest text-[#3F72AF] font-bold">
                Student Success Story
              </span>

              <h3 className="text-3xl font-bold mt-4 mb-6">
                A Journey Transformed
              </h3>

              <p className="italic text-gray-600 mb-6 leading-relaxed">
                "Being a recipient of the Merit Scholarship at BKSB didn’t just
                ease the financial burden on my family; it gave me the
                confidence to pursue my dream of becoming an engineer."
              </p>

              <div>
                <h4 className="font-bold">Sarah Ahmed</h4>
                <p className="text-sm text-gray-500">Class 10, Batch of 2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-20 px-4 md:px-10">
          <div className="max-w-5xl mx-auto bg-[#3F72AF] rounded-2xl p-12 text-center text-white shadow-xl">
            <HeartHandshake size={40} className="mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Start Your Application Today
            </h3>
            <p className="text-blue-100 mb-8">
              Join our vibrant community of learners. If you have the drive to
              succeed, we have the means to support you.
            </p>
            <button className="bg-white text-[#3F72AF] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Apply for Scholarship
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function ProgramCard({ icon, title, desc, tag }) {
  return (
    <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100  text-center hover:shadow-md transition">
      <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6 text-[#3F72AF] transition-colors duration-200 hover:bg-[#3F72AF] hover:text-white">
        {icon}
      </div>
      <h4 className="text-lg font-bold mb-3">{title}</h4>
      <p className="text-sm text-gray-500 mb-6">{desc}</p>
      <div className="text-xs font-bold text-[#3F72AF] uppercase tracking-widest">
        {tag}
      </div>
    </div>
  );
}
