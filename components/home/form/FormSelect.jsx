import FieldError from "./FieldError";
import FieldLabel from "./FieldLabel";

export default function FormSelect({
  label,
  required,
  placeholder = "Select",
  options = [],
  error,
  className,
  ...rest
}) {
  return (
    <div>
      <FieldLabel label={label} required={required} />
      <select
        className={`w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#3F72AF]/30 focus:border-[#3F72AF] transition ${className || ""}`}
        {...rest}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => {
          const value = typeof opt === "object" ? opt.value : opt;
          const label = typeof opt === "object" ? opt.label : opt;
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
      <FieldError message={error} />
    </div>
  );
}
