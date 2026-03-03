import { events } from "@/Db/events";
import EventCard from "./EventCard";

export default function Events() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        {events.map((ev) => (
          <EventCard key={ev.id} e={ev} />
        ))}
      </div>
    </section>
  );
}
