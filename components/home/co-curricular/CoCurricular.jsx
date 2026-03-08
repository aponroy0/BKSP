import { ACTIVITIES } from "@/Db/coCurricular";
import CommonHero from "../CommonHero";
import ActivityCard from "./ActivityCard";
import LifeGallery from "./LifeGallery";

function ActivitiesGrid() {
  return (
    <section className="py-14 sm:py-20 bg-[#F9F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* 1 col → 2 cols sm → 3 cols lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {ACTIVITIES.map((a) => (
            <ActivityCard key={a.title} {...a} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CoCurricular() {
  return (
    <main>
      <CommonHero
        title="Co-curricular Activities"
        subtitle="Explore a world of opportunities beyond academics"
        description="We nurture talent through a diverse range of clubs and activities designed to build confidence, leadership, and essential life skills for the future."
      />
      <ActivitiesGrid />
      <LifeGallery />
    </main>
  );
}
