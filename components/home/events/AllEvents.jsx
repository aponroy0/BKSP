"use client";

import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import CommonHero from "../CommonHero";
import EventsCard from "./EventsCard";

export default function AllEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("/api/events");
        if (response.ok) {
          const data = await response.json();
          setEvents(data.data);
        } else {
          setError("Failed to fetch events. Please try again later.");
        }
      } catch (error) {
        setError("Something went wrong. Please check your connection.");
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  return (
    <main>
      <CommonHero
        title="All Events"
        subtitle="Stay up to date with everything happening at B.K.S.B High School"
        description="Stay up to date with everything happening at B.K.S.B High School"
      />

      <section className="py-14 sm:py-20 bg-[#F9F7F7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Loading */}
          {loading && (
            <div className="flex justify-center py-20">
              <LoaderCircle size={44} className="animate-spin text-gray-400" />
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <p className="text-center text-red-400 py-20">{error}</p>
          )}

          {/* Empty */}
          {!loading && !error && events.length === 0 && (
            <p className="text-center text-gray-400 py-20">No events found.</p>
          )}

          {/* Events list */}
          {!loading && !error && events.length > 0 && (
            <div className="flex flex-col divide-y divide-[#DBE2EF]">
              {events.map((event) => (
                <div key={event._id} className="py-6 first:pt-0 last:pb-0">
                  <EventsCard
                    banner={event.banner}
                    createAt={event.createAt}
                    category={event.category}
                    title={event.title}
                    excerpt={event.excerpt}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
