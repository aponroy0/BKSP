import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import DesktopDropdown from "./DesktopDropdown";
// ── Desktop nav item WITH dropdown ──────────────────────────────────────────
export default function DesktopNavItem({ label, links }) {
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");
  const timeoutRef = useRef(null);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button className="flex items-center gap-1 hover:text-[#3F72AF] transition font-medium text-sm text-[#112D4E] py-1">
        {t(label)}
        <ChevronDown
          size={14}
          strokeWidth={2.5}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <DesktopDropdown links={links} visible={open} />
    </div>
  );
}
