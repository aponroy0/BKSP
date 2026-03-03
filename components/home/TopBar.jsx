// TopBar.jsx
// Slim info bar at the very top of the page.
// On mobile: stacks email/phone vertically, hides the support button.
// On sm+: shows everything in a single horizontal row.

export default function TopBar() {
  return (
    <div className="bg-[#112D4E] text-white py-2 px-4 text-xs">
      <div className="max-w-7xl lg:px-8 mx-auto  flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0">
        {/* Left: Email + Phone — stacked on mobile, inline on sm+ */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 items-center gap-1 sm:gap-0 text-center sm:text-left">
          <span className="flex items-center">
            <span className="material-symbols-outlined text-sm mr-1">mail</span>
            <a
              href="mailto:info@bksbhighschool.edu.bd"
              className="hover:underline break-all"
            >
              info@bksbhighschool.edu.bd
            </a>
          </span>
          <span className="flex items-center">
            <span className="material-symbols-outlined text-sm mr-1">call</span>
            +880 1712-345678
          </span>
        </div>

        {/* Right: Support button — hidden on very small screens to save space */}
        {/* <div className="hidden sm:flex mt-1 sm:mt-0">
          <button className="bg-[#3F72AF] hover:bg-blue-700 px-3 py-1 rounded text-xs font-medium transition shadow-sm">
            Support BKSB
          </button>
        </div> */}
      </div>
    </div>
  );
}
