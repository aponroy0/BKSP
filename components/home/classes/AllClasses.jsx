import ClassHeroSection from "./ClassHeroSection";
import ClassSection from "./ClassSection";

export default function AllClasses() {
  return (
    <>
      <ClassHeroSection />
      <main className="py-16 md:py-24 bg-background-light">
        <ClassSection />
      </main>
    </>
  );
}
