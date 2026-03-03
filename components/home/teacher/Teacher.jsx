import { teachers } from "@/Db/teachers";
import TeacherCard from "./TeacherCard";
import TeacherHeroSection from "./TeacherHeroSection";

export default function Teacher() {
  return (
    <>
      <TeacherHeroSection />

      <section className="py-16 md:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
