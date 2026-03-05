"use client";

import { useEffect, useState } from "react";
import CommonHero from "../CommonHero";
import TeacherCard from "./TeacherCard";

export default function Teacher() {
  const [teachers, setTeachers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTeachers() {
      try {
        const response = await fetch("/api/teachers");
        const data = await response.json();

        if (data.status_code === 200) {
          setTeachers(data.data);
        } else {
          setError("Failed to fetch teachers");
        }
      } catch (err) {
        console.error("Error fetching teachers:", err);
        setError("Failed to fetch teachers");
      }
    }

    fetchTeachers();
  }, []);

  return (
    <>
      <CommonHero
        title="ACADEMIC YEAR 2026"
        subtitle="Our Teaching Staff"
        description="Meet our dedicated team of educators who are committed to providing an exceptional learning experience."
      />

      <section className="py-16 md:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
