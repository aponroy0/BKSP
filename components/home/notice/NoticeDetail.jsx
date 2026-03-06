"use client";
import { getDay, getMonth, getYear } from "@/utils/formatMonthDate";
import { ArrowLeft, Calendar, Home, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// Breadcrumb Component
function Breadcrumb() {
  const { title } = useParams();
  return (
    <nav className="flex items-center gap-1.5 text-sm text-gray-500 flex-wrap">
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-[#3F72AF] transition"
      >
        <Home size={14} strokeWidth={1.75} />
        <span>Home</span>
      </Link>

      <span className="text-gray-300">/</span>
      <span className="text-[#112D4E] font-medium truncate max-w-12.5 sm:max-w-none">
        {title}
      </span>
    </nav>
  );
}

// ──────────────
// Notice Detail Card
// ──────────────
function NoticeDetailCard({ notice }) {
  if (!notice) return null;

  // Format date if createdAt exists
  const publishedDate = notice.createAt
    ? `${getMonth(notice.createAt)} ${getDay(notice.createAt)}, ${getYear(
        notice.createAt,
      )}`
    : "";

  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 sm:p-10">
        {/* Meta row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} strokeWidth={1.75} />
              Published: {publishedDate}
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#112D4E] leading-snug mb-8">
          {notice.title}
        </h1>

        {/* Body paragraphs */}
        <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
          {notice.body?.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Closing paragraph */}
        {notice.closing && (
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            {notice.closing}
          </p>
        )}

        {/* Footer row: Back */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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

// ──────────────
// Page Component
// ──────────────
export default function NoticeDetail() {
  const [noticeDetail, setNoticeDetail] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  const { title } = useParams();

  useEffect(() => {
    async function fetchNoticeDetail() {
      try {
        setLoading(true);
        const response = await fetch(`/api/notices`); // Absolute path
        if (!response.ok) throw new Error("Failed to fetch notices");

        const data = await response.json();
        const matchedNotice = data.data.find((n) => n.title === title);

        if (matchedNotice) {
          setNoticeDetail(matchedNotice);
          setErr(null);
        } else {
          setErr(`Notice not found for title: ${title}`);
        }
      } catch (error) {
        setErr(`Error fetching notice detail: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }

    fetchNoticeDetail();
  }, [title]);

  return (
    <div className="bg-[#F9F7F7] min-h-screen flex flex-col">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 pt-5 pb-3">
        <Breadcrumb />
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
          <NoticeDetailCard notice={noticeDetail} />
        )}
      </main>
    </div>
  );
}
