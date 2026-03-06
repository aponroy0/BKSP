import CommonHero from "../CommonHero";
import AlumniSection from "./AlumniSection";
import EventSection from "./EventSection";

// async function subscribeAction(formData) {

//   const email = formData.get("email");
//   console.log("Newsletter subscription:", email);
// }

export default function Alumni() {
  return (
    <div className="min-h-screen bg-[#F9F7F7] font-sans antialiased text-[#112D4E]">
      <CommonHero
        title="ALUMNI"
        subtitle="Connecting Our Graduates"
        description="Stay connected with our vibrant alumni community and explore opportunities for networking and mentorship."
      />
      <AlumniSection />
      <EventSection />
    </div>
  );
}
