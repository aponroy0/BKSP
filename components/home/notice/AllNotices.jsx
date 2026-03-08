"use client";

import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import CommonHero from "../CommonHero";
import NoticeCard from "./NoticeCard";

export default function AllNotices() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchNotices() {
      try {
        const response = await fetch("/api/notices");
        if (response.ok) {
          const data = await response.json();
          setNotices(data.data);
        } else {
          setError("Failed to fetch notices. Please try again later.");
        }
      } catch (error) {
        setError("Something went wrong. Please check your connection.");
      } finally {
        setLoading(false);
      }
    }

    fetchNotices();
  }, []);

  return (
    <main>
      <CommonHero
        title="All Notices"
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
          {!loading && !error && notices.length === 0 && (
            <p className="text-center text-gray-400 py-20">No notices found.</p>
          )}

          {/* Events list */}
          {!loading && !error && notices.length > 0 && (
            <div className="flex flex-col divide-y divide-[#DBE2EF]">
              {notices.map((event) => (
                <div key={event._id} className="py-6 first:pt-0 last:pb-0">
                  <NoticeCard
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
