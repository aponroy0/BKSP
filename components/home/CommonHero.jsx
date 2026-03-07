export default function CommonHero({ title, subtitle, description }) {
  return (
    <header className="relative bg-[#112D4E] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 "></div>
      <div className="absolute inset-0 bg-Linear-to-r from-secondary to-primary opacity-90"></div>
      <div className="container mx-auto px-4 md:px-12 py-20 relative z-10 text-center">
        <span className="inline-block py-1 px-3 rounded-md bg-white/10 text-xs font-semibold tracking-wider mb-4 border border-white/20">
          {title}
        </span>
        <h1 className="max-w-6xl mx-auto text-4xl md:text-6xl font-display font-bold mb-6">
          {subtitle}
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          {description}
        </p>
      </div>
    </header>
  );
}
