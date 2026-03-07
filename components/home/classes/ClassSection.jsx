"use client";

import { CLASSES } from "@/Db/classes";
import { AlertCircle, Download, LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";

export default function ClassSection() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchClasses() {
      try {
        const response = await fetch("/api/classes");

        if (!response.ok) {
          throw new Error("Failed to fetch classes");
        }

        const data = await response.json();
        setClasses(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchClasses();
  }, []);

  // Merge API data with static UI data
  const mergedClasses = CLASSES.map((cls) => {
    const apiClass = classes.find((c) => c.name === cls.title);

    return {
      ...cls,
      sections: apiClass?.sections || [],
      classId: apiClass?._id || null,
    };
  });

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-12 mb-24">
      <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-3xl font-bold text-[#112D4E]">Our Classes</h2>
          <p className="text-gray-500 mt-2">
            Comprehensive education from Grade 6 to Grade 10
          </p>
        </div>

        <button className="hidden md:flex items-center gap-1 text-[#3F72AF] font-medium hover:underline">
          Download Full Brochure <Download className="w-4 h-4" />
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex justify-center py-12">
          <LoaderCircle size={40} className="animate-spin text-gray-600" />
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="flex flex-col items-center py-12 text-red-600">
          <AlertCircle size={40} className="mb-2" />
          <p className="font-medium">Failed to load classes</p>
          <p className="text-sm text-gray-500">{error}</p>
        </div>
      )}

      {/* Data */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mergedClasses.map((cls) => (
            <ClassCard key={cls.title} {...cls} />
          ))}
        </div>
      )}
    </section>
  );
}
