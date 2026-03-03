export default function AlumniHero() {
  return (
    <header className="relative bg-[#112D4E] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 "></div>
      <div className="absolute inset-0 bg-linear-to-r from-secondary to-primary opacity-90"></div>
      <div className="container mx-auto px-4 md:px-12 py-20 relative z-10 text-center">
        <span className="inline-block py-1 px-3 rounded-md bg-white/10 text-xs font-semibold tracking-wider mb-4 border border-white/20">
          ACADEMIC YEAR 2026
        </span>
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
          BKSB Alumni Network
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Bridging the past and future. Reconnect with classmates, mentor
          current students, and continue the legacy of excellence that started
          at BKSB High School.
        </p>
      </div>
    </header>
  );
}
