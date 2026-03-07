"use client";
import { getDay, getMonth, getYear } from "@/utils/formatMonthDate";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";

export default function DetailCard({ event }) {
  if (!event) return null;

  const publishedDate = event.createAt
    ? `${getMonth(event.createAt)} ${getDay(event.createAt)}, ${getYear(event.createAt)}`
    : "";

  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="py-8 px-6 sm:py-12 sm:px-16">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} strokeWidth={1.75} />
            Published: {publishedDate}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#112D4E] leading-snug mb-4">
          {event.title}
        </h1>

        {/* Divider */}
        <hr className="border-gray-200 mb-6" />

        {/* Content from Jodit editor — renders when available */}
        {event.content && (
          <div
            className="notice-content"
            style={{ lineHeight: "1.8", color: "#4B5563", fontSize: "0.95rem" }}
            dangerouslySetInnerHTML={{ __html: event.content }}
          />
        )}

        {/* Footer row: Back */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-semibold text-[#3F72AF] hover:underline"
          >
            <ArrowLeft size={15} strokeWidth={2.5} />
            Back to Home
          </Link>
        </div>
      </div>
    </article>
  );
}
