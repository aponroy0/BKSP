import { AlertCircle } from "lucide-react";
export default function FieldError({ message }) {
  if (!message) return null;
  return (
    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
      <AlertCircle size={12} /> {message}
    </p>
  );
}
