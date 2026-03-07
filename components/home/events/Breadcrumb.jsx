import { Home } from "lucide-react";
import Link from "next/link";

export default function Breadcrumb({ path }) {
  return (
    <nav className=" flex items-center gap-1.5 text-sm text-gray-500 flex-wrap">
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-[#3F72AF] transition"
      >
        <Home size={14} strokeWidth={1.75} />
        <span>Home</span>
      </Link>

      <span className="text-gray-300">/</span>
      <span className="text-[#112D4E] font-medium truncate max-w-12.5 sm:max-w-none">
        {path}
      </span>
    </nav>
  );
}
