import { Mail, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#112D4E] text-white py-2 px-4 text-xs">
      <div className="max-w-7xl lg:px-8 mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0">
        <div className="flex flex-col sm:flex-row sm:space-x-6 items-center gap-1 sm:gap-0 text-center sm:text-left">
          <span className="flex items-center gap-1">
            <Mail size={13} />
            <a
              href="mailto:info@bksbhighschool.edu.bd"
              className="hover:underline break-all"
            >
              info@bksbhighschool.edu.bd
            </a>
          </span>
          <span className="flex items-center gap-1">
            <Phone size={13} />
            +880 1712-345678
          </span>
        </div>
      </div>
    </div>
  );
}
