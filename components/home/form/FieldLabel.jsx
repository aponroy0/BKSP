export default function FieldLabel({ label, required }) {
  return (
    <label className="block text-sm font-medium text-[#112D4E] mb-1.5">
      {label}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  );
}
