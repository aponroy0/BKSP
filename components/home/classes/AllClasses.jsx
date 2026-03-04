import CommonHero from "../CommonHero";
import ClassSection from "./ClassSection";

export default function AllClasses() {
  return (
    <>
      <CommonHero
        title="ACADEMIC YEAR 2026"
        subtitle="Our Academic Programs"
        description="Empowering students through a rigorous National Curriculum focused on holistic development, critical thinking, and moral character."
      />
      <main className="py-16 md:py-24 bg-background-light">
        <ClassSection />
      </main>
    </>
  );
}
