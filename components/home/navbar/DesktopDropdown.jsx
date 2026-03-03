import Link from "next/link";

// ── Helper: split links into columns of max 3 items ─────────────────────────
function splitIntoColumns(links, maxPerColumn = 3) {
  const columns = [];
  for (let i = 0; i < links.length; i += maxPerColumn) {
    columns.push(links.slice(i, i + maxPerColumn));
  }
  return columns;
}

// ── Desktop mega dropdown panel ──────────────────────────────────────────────
export default function DesktopDropdown({ links, visible }) {
  const columns = splitIntoColumns(links, 3);

  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 pt-2 z-50 transition-all duration-200 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
      style={{ width: "max-content" }}
    >
      <div className="bg-white rounded-lg shadow-xl border border-[#DBE2EF] overflow-hidden">
        <div className="flex">
          {columns.map((col, colIndex) => (
            <div
              key={colIndex}
              className={`py-4 px-6 ${
                colIndex < columns.length - 1 ? "border-r border-[#DBE2EF]" : ""
              }`}
            >
              {col.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block py-2 text-sm text-gray-600 hover:text-[#3F72AF] transition-colors font-medium whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
