export default function EventCard({ e }) {
  return (
    <article
      className="bg-white border border-gray-100 rounded-xl shadow-sm 
                        p-5 sm:p-6 md:p-8 
                        flex flex-col sm:flex-row 
                        gap-5 sm:gap-6 
                        transition hover:shadow-md"
    >
      {/* Date Block */}
      <div className="shrink-0">
        <div
          className="w-14 h-14 sm:w-16 sm:h-16 
                        bg-[#3F72AF] text-white 
                        rounded-lg 
                        flex flex-col items-center justify-center"
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-wide leading-none">
            {e.month}
          </span>
          <span className="text-lg sm:text-xl font-bold -mt-0.5">{e.day}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Tag + Time */}
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span
            className="text-[11px] sm:text-xs font-semibold uppercase 
                           text-[#3F72AF] bg-blue-100 
                           px-2 py-1 rounded-full"
          >
            {e.tag}
          </span>

          <span className="text-xs text-gray-500">{e.time}</span>
        </div>

        {/* Title */}
        <h3
          className="text-base sm:text-lg md:text-xl 
                       font-semibold text-gray-900 
                       mb-2 leading-snug"
        >
          {e.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm sm:text-base 
                      text-gray-600 leading-relaxed"
        >
          {e.desc}
        </p>
      </div>

      {/* CTA */}
      <div className="sm:self-start mt-3 sm:mt-0">
        <a
          href="#"
          className="inline-block text-sm sm:text-base
                     font-medium text-[#3F72AF] 
                     hover:text-blue-500 
                     transition"
        >
          Learn More →
        </a>
      </div>
    </article>
  );
}
