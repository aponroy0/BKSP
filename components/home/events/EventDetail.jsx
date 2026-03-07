"use client";
import { LoaderCircle } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Breadcrumb from "./Breadcrumb";
import DetailCard from "./DetailCard";

// Page Component

export default function EventDetail() {
  const [eventDetail, setEventDetail] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  const { events } = useParams();

  useEffect(() => {
    async function fetchEventDetail() {
      try {
        setLoading(true);
        const response = await fetch(`/api/events`); // Absolute path
        if (!response.ok) throw new Error("Failed to fetch events");

        const data = await response.json();
        const matchedEvent = data.data.find((n) => n.title === events);

        if (matchedEvent) {
          setEventDetail(matchedEvent);
          setErr(null);
        } else {
          setErr(`Event not found for title: ${events}`);
        }
      } catch (error) {
        setErr(`Error fetching event detail: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }

    fetchEventDetail();
  }, [events]);

  return (
    <div className="bg-[#F9F7F7] min-h-screen flex flex-col">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pt-5 pb-3">
        <Breadcrumb path={events} />
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 pb-10 flex-1">
        {loading ? (
          //   <p className="text-gray-500 text-center py-10">Loading...</p>
          <LoaderCircle
            size={44}
            className="animate-spin text-gray-500 mx-auto"
          />
        ) : err ? (
          <p className="text-red-500 text-center py-10">{err}</p>
        ) : (
          <DetailCard event={eventDetail} />
        )}
      </main>
    </div>
  );
}
