import { ChevronDown } from "lucide-react";
import { useState } from "react";
// ── Mobile accordion item ────────────────────────────────────────────────────
export default function MobileNavItem({ label, links }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="w-full flex justify-between items-center py-2 text-[#112D4E] hover:text-[#3F72AF] font-medium transition"
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown
          size={16}
          strokeWidth={2.5}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pl-4 pb-2 space-y-1 border-l-2 border-[#DBE2EF] ml-1 mt-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-1.5 text-sm text-gray-600 hover:text-[#3F72AF] transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
