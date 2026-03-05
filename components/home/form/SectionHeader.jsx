export default function SectionHeader({ icon: Icon, title }) {
  return (
    <div className="flex items-center justify-between bg-[#112D4E] text-white px-6 py-4 rounded-t-xl">
      <div className="flex items-center gap-2.5">
        <Icon size={18} strokeWidth={1.75} />
        <span className="font-semibold text-base">{title}</span>
      </div>
      <span className="text-xs text-blue-200">* Required Fields</span>
    </div>
  );
}
