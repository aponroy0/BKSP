// StatsBar.jsx
// White stats card that slightly overlaps the hero's bottom edge.
// Mobile: 2×2 grid, no negative margin (sits flush below hero).
// md+: 4-col row with vertical dividers and a gentle -mt-6 overlap
//      so it clips the hero image — not the buttons above it.

function StatItem({ value, label }) {
  return (
    <div className="text-center px-2">
      {/* Large stat number in brand blue */}
      <div className="text-2xl sm:text-3xl font-bold text-[#3F72AF] ">
        {value}
      </div>
      {/* Uppercase descriptor label */}
      <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mt-1">
        {label}
      </div>
    </div>
  );
}

export default function StatsBar() {
  const stats = [
    { value: "2002", label: "Established" },
    { value: "1500+", label: "Students" },
    { value: "50+", label: "Expert Teachers" },
    { value: "100%", label: "Pass Rate" },
  ];

  return (
    // No negative margin on mobile — sits below the hero with a normal gap.
    // md+: gentle -mt-6 so the card overlaps only the hero's bottom image strip,
    // well below the CTA buttons which are kept high by the hero's pb-32.
    <section className="bg-white shadow-md relative z-20 mx-4 md:mx-auto md:-mt-6 max-w-6xl rounded-lg py-6 sm:py-8 px-4 sm:px-6 border border-[#DBE2EF]">
      {/* 2-col on mobile → 4-col with dividers on md+ */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 md:gap-0 md:divide-x md:divide-[#DBE2EF]">
        {stats.map((stat) => (
          <StatItem key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
