// Navbar.jsx
// Sticky navigation bar with logo, nav links with mega-dropdowns, and login buttons.
// Desktop: hover-triggered mega dropdown panels with 3-column grid layout.
// Mobile: tap-to-toggle accordion for dropdown items, plain link for About Us.

"use client";
import { DROPDOWN_ITEMS } from "@/lib/dropDownItems";
import { Lock, Menu, UserRound, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import DesktopNavItem from "./DesktopNavItem";
import MobileNavItem from "./MobileNavItem";

// ── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-[#DBE2EF]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center space-x-3 group shrink-0">
            <Image
              src="/Logo.png"
              alt="BKSB Logo"
              width={48}
              height={48}
              className="object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-none text-[#112D4E]">
                B.K.S.B
              </span>
              <span className="text-xs uppercase tracking-wider text-gray-500">
                High School
              </span>
            </div>
          </Link>

          {/* ── Desktop nav links ── */}
          <div className="hidden lg:flex items-center space-x-7">
            {DROPDOWN_ITEMS.map((item) => (
              <DesktopNavItem
                key={item.label}
                label={item.label}
                links={item.links}
              />
            ))}

            {/* About Us — plain link */}
            <Link
              href="/about"
              className="hover:text-[#3F72AF] transition font-medium text-sm text-[#112D4E] py-1"
            >
              About Us
            </Link>
          </div>

          {/* ── Desktop: Guardian Login + Login ── */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="/edumanager/guardian/login"
              className="flex items-center gap-2 border border-gray-300 hover:border-[#3F72AF] hover:text-[#3F72AF] text-[#112D4E] font-medium text-sm px-4 py-2 rounded-full transition"
            >
              <UserRound size={15} strokeWidth={2} />
              Guardian
            </a>
            <a
              href="/edumanager/login"
              className="flex items-center gap-2 bg-[#3F72AF] hover:bg-[#112D4E] text-white font-medium text-sm px-4 py-2 rounded-full shadow-md shadow-blue-500/20 transition"
            >
              <Lock size={14} strokeWidth={2.5} />
              Login
            </a>
          </div>

          {/* ── Mobile: hamburger ── */}
          <button
            className="lg:hidden text-[#112D4E] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={28} strokeWidth={2} />
            ) : (
              <Menu size={28} strokeWidth={2} />
            )}
          </button>
        </div>

        {/* ── Mobile menu ── */}
        {menuOpen && (
          <div className="lg:hidden mt-3 pb-4 space-y-1 border-t border-[#DBE2EF] pt-3">
            {DROPDOWN_ITEMS.map((item) => (
              <MobileNavItem
                key={item.label}
                label={item.label}
                links={item.links}
              />
            ))}

            <a
              href="/about"
              className="block py-2 text-[#112D4E] hover:text-[#3F72AF] font-medium transition"
            >
              About Us
            </a>

            <div className="border-t border-[#DBE2EF] pt-3 mt-2 space-y-2">
              <a
                href="/edumanager/guardian/login"
                className="flex items-center gap-2 border border-gray-300 hover:border-[#3F72AF] hover:text-[#3F72AF] text-[#112D4E] font-medium text-sm px-4 py-2 rounded-full transition w-full justify-center"
              >
                <UserRound size={15} strokeWidth={2} />
                Guardian
              </a>
              <a
                href="/edumanager/login"
                className="flex items-center gap-2 justify-center bg-[#3F72AF] hover:bg-[#112D4E] text-white font-medium text-sm px-4 py-2 rounded-full transition w-full"
              >
                <Lock size={14} strokeWidth={2.5} />
                Login
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
