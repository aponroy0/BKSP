export default function ApplyHero() {
  return (
    <section className="relative bg-[#1a2f4a] text-white overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1400&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-[#112D4E]/80 to-[#1a2f4a]/95" />

      <div className="container mx-auto px-4 md:px-10 py-24 md:py-32 text-center relative z-10">
        <span className="inline-block mb-5 px-4 py-1 rounded border border-white/30 text-white/80 text-[10px] font-bold tracking-widest bg-white/5 uppercase">
          Admissions 2024–25
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 font-serif leading-tight">
          How to Apply
        </h1>
        <p className="text-blue-200 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Joining the BKSB High School family is a simple journey. Follow our
          streamlined 4-step process to begin your child&apos;s academic
          excellence.
        </p>
      </div>
    </section>
  );
}
