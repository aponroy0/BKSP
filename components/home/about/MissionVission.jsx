import { Lightbulb, Target } from "lucide-react";

const cards = [
  {
    Icon: Target,
    title: "Our Mission",
    text: "To provide a dynamic learning environment that encourages critical thinking, creativity, and ethical behavior. We aim to empower students to achieve their full potential, equipping them with the skills and values necessary to contribute positively to society and succeed in a rapidly changing world.",
  },
  {
    Icon: Lightbulb,
    title: "Our Vision",
    text: "To be a center of excellence in education, recognized for nurturing well-rounded individuals who are academically proficient, socially responsible, and morally upright. We envision a future where every student becomes a beacon of knowledge and integrity.",
  },
];
export default function MissionVission() {
  return (
    <section className="py-16 sm:py-20 bg-[#F9F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {cards.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="bg-[#112D4E] text-white p-8 sm:p-10 rounded-lg shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <Icon size={80} strokeWidth={1} className="text-white" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex p-3 bg-white/10 rounded-full mb-5 sm:mb-6 text-[#3F72AF]">
                  <Icon size={28} strokeWidth={1.75} />
                </div>
                <h3 className=" text-2xl sm:text-3xl font-bold mb-4">
                  {title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
